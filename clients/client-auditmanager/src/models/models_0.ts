// smithy-typescript generated code
import type {
  AccountStatus,
  ActionEnum,
  AssessmentReportDestinationType,
  AssessmentReportStatus,
  AssessmentStatus,
  ControlResponse,
  ControlSetStatus,
  ControlState,
  ControlStatus,
  ControlType,
  DataSourceType,
  DelegationStatus,
  DeleteResources,
  EvidenceFinderBackfillStatus,
  EvidenceFinderEnablementStatus,
  ExportDestinationType,
  FrameworkType,
  KeywordInputType,
  ObjectTypeEnum,
  RoleType,
  SettingAttribute,
  ShareRequestAction,
  ShareRequestStatus,
  ShareRequestType,
  SourceFrequency,
  SourceSetUpOption,
  SourceType,
} from "./enums";

/**
 * The wrapper of Amazon Web Services account details, such as account ID or email address.
 *
 * @public
 */
export interface AWSAccount {
  /**
   * The identifier for the Amazon Web Services account.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The email address that's associated with the Amazon Web Services account.
   *
   * @public
   */
  emailAddress?: string | undefined;

  /**
   * The name of the Amazon Web Services account.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * A comment that's posted by a user on a control. This includes the author's name, the comment text, and a timestamp.
 *
 * @public
 */
export interface ControlComment {
  /**
   * The name of the user who authored the comment.
   *
   * @public
   */
  authorName?: string | undefined;

  /**
   * The body text of a control comment.
   *
   * @public
   */
  commentBody?: string | undefined;

  /**
   * The time when the comment was posted.
   *
   * @public
   */
  postedDate?: Date | undefined;
}

/**
 * The control entity that represents a standard control or a custom control in an Audit Manager assessment.
 *
 * @public
 */
export interface AssessmentControl {
  /**
   * The identifier for the control.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the control.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the control.
   *
   * @deprecated (since 2025-05-19) This data type will be deprecated on May 19, 2025. To view the assessment control description, use GetControl.
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the control.
   *
   * @public
   */
  status?: ControlStatus | undefined;

  /**
   * The response of the control.
   *
   * @public
   */
  response?: ControlResponse | undefined;

  /**
   * The list of comments that's attached to the control.
   *
   * @public
   */
  comments?: ControlComment[] | undefined;

  /**
   * The list of data sources for the evidence.
   *
   * @public
   */
  evidenceSources?: string[] | undefined;

  /**
   * The amount of evidence that's collected for the control.
   *
   * @public
   */
  evidenceCount?: number | undefined;

  /**
   * The amount of evidence in the assessment report.
   *
   * @public
   */
  assessmentReportEvidenceCount?: number | undefined;
}

/**
 * The assignment of a control set to a delegate for review.
 *
 * @public
 */
export interface Delegation {
  /**
   * The unique identifier for the delegation.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the assessment that's associated with the delegation.
   *
   * @public
   */
  assessmentName?: string | undefined;

  /**
   * The identifier for the assessment that's associated with the delegation.
   *
   * @public
   */
  assessmentId?: string | undefined;

  /**
   * The status of the delegation.
   *
   * @public
   */
  status?: DelegationStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The type of customer persona.
   *
   * > **Note:**
   * >
   * > In `CreateAssessment`, `roleType` can only be `PROCESS_OWNER`.
   * >
   * > In `UpdateSettings`, `roleType` can only be `PROCESS_OWNER`.
   * >
   * > In `BatchCreateDelegationByAssessment`, `roleType` can only be `RESOURCE_OWNER`.
   *
   * @public
   */
  roleType?: RoleType | undefined;

  /**
   * Specifies when the delegation was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * Specifies when the delegation was last updated.
   *
   * @public
   */
  lastUpdated?: Date | undefined;

  /**
   * The identifier for the control set that's associated with the delegation.
   *
   * @public
   */
  controlSetId?: string | undefined;

  /**
   * The comment that's related to the delegation.
   *
   * @public
   */
  comment?: string | undefined;

  /**
   * The user or role that created the delegation.
   *
   * @public
   */
  createdBy?: string | undefined;
}

/**
 * The wrapper that contains the Audit Manager role information of the current user. This includes the role type and IAM Amazon Resource Name (ARN).
 *
 * @public
 */
export interface Role {
  /**
   * The type of customer persona.
   *
   * > **Note:**
   * >
   * > In `CreateAssessment`, `roleType` can only be `PROCESS_OWNER`.
   * >
   * > In `UpdateSettings`, `roleType` can only be `PROCESS_OWNER`.
   * >
   * > In `BatchCreateDelegationByAssessment`, `roleType` can only be `RESOURCE_OWNER`.
   *
   * @public
   */
  roleType: RoleType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * Represents a set of controls in an Audit Manager assessment.
 *
 * @public
 */
export interface AssessmentControlSet {
  /**
   * The identifier of the control set in the assessment. This is the control set name in a plain string format.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The description for the control set.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The current status of the control set.
   *
   * @public
   */
  status?: ControlSetStatus | undefined;

  /**
   * The roles that are associated with the control set.
   *
   * @public
   */
  roles?: Role[] | undefined;

  /**
   * The list of controls that's contained with the control set.
   *
   * @public
   */
  controls?: AssessmentControl[] | undefined;

  /**
   * The delegations that are associated with the control set.
   *
   * @public
   */
  delegations?: Delegation[] | undefined;

  /**
   * The total number of evidence objects that are retrieved automatically for the control set.
   *
   * @public
   */
  systemEvidenceCount?: number | undefined;

  /**
   * The total number of evidence objects that are uploaded manually to the control set.
   *
   * @public
   */
  manualEvidenceCount?: number | undefined;
}

/**
 * The metadata of a framework, such as the name, ID, or description.
 *
 * @public
 */
export interface FrameworkMetadata {
  /**
   * The name of the framework.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the framework.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The logo that's associated with the framework.
   *
   * @public
   */
  logo?: string | undefined;

  /**
   * The compliance standard that's associated with the framework. For example, this could be PCI DSS or HIPAA.
   *
   * @public
   */
  complianceType?: string | undefined;
}

/**
 * The file used to structure and automate Audit Manager assessments for a given compliance standard.
 *
 * @public
 */
export interface AssessmentFramework {
  /**
   * The unique identifier for the framework.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the framework.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The metadata of a framework, such as the name, ID, or description.
   *
   * @public
   */
  metadata?: FrameworkMetadata | undefined;

  /**
   * The control sets that are associated with the framework.
   *
   * @public
   */
  controlSets?: AssessmentControlSet[] | undefined;
}

/**
 * The location where Audit Manager saves assessment reports for the given assessment.
 *
 * @public
 */
export interface AssessmentReportsDestination {
  /**
   * The destination type, such as Amazon S3.
   *
   * @public
   */
  destinationType?: AssessmentReportDestinationType | undefined;

  /**
   * The destination bucket where Audit Manager stores assessment reports.
   *
   * @public
   */
  destination?: string | undefined;
}

/**
 * An Amazon Web Services service such as Amazon S3 or CloudTrail.
 *
 * For an example of how to find an Amazon Web Services service name and how to define it in your assessment scope, see the following:
 *
 * - [Finding an Amazon Web Services service name to use in your assessment scope](https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetServicesInScope.html#API_GetServicesInScope_Example_2)
 * - [Defining an Amazon Web Services service name in your assessment scope](https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetServicesInScope.html#API_GetServicesInScope_Example_3)
 *
 * @public
 */
export interface AWSService {
  /**
   * The name of the Amazon Web Services service.
   *
   * @public
   */
  serviceName?: string | undefined;
}

/**
 * The wrapper that contains the Amazon Web Services accounts that are in scope for the assessment.
 *
 * > **Note:**
 * >
 * > You no longer need to specify which Amazon Web Services services are in scope when you create or update an assessment. Audit Manager infers the services in scope by examining your assessment controls and their data sources, and then mapping this information to the relevant Amazon Web Services services.
 * >
 * > If an underlying data source changes for your assessment, we automatically update the services scope as needed to reflect the correct Amazon Web Services services. This ensures that your assessment collects accurate and comprehensive evidence about all of the relevant services in your AWS environment.
 *
 * @public
 */
export interface Scope {
  /**
   * The Amazon Web Services accounts that are included in the scope of the assessment.
   *
   * @public
   */
  awsAccounts?: AWSAccount[] | undefined;

  /**
   * The Amazon Web Services services that are included in the scope of the assessment.
   *
   * > **Important:** This API parameter is no longer supported. If you use this parameter to specify one or more Amazon Web Services services, Audit Manager ignores this input. Instead, the value for `awsServices` will show as empty.
   *
   * @deprecated You can't specify services in scope when creating/updating an assessment. If you use the parameter to specify one or more AWS services, Audit Manager ignores the input. Instead the value of the parameter will show as empty indicating that the services are defined and managed by Audit Manager.
   * @public
   */
  awsServices?: AWSService[] | undefined;
}

/**
 * The metadata that's associated with the specified assessment.
 *
 * @public
 */
export interface AssessmentMetadata {
  /**
   * The name of the assessment.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The unique identifier for the assessment.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The description of the assessment.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The name of the compliance standard that's related to the assessment, such as PCI-DSS.
   *
   * @public
   */
  complianceType?: string | undefined;

  /**
   * The overall status of the assessment.
   *
   * @public
   */
  status?: AssessmentStatus | undefined;

  /**
   * The destination that evidence reports are stored in for the assessment.
   *
   * @public
   */
  assessmentReportsDestination?: AssessmentReportsDestination | undefined;

  /**
   * The wrapper of Amazon Web Services accounts and services that are in scope for the assessment.
   *
   * @public
   */
  scope?: Scope | undefined;

  /**
   * The roles that are associated with the assessment.
   *
   * @public
   */
  roles?: Role[] | undefined;

  /**
   * The delegations that are associated with the assessment.
   *
   * @public
   */
  delegations?: Delegation[] | undefined;

  /**
   * Specifies when the assessment was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The time of the most recent update.
   *
   * @public
   */
  lastUpdated?: Date | undefined;
}

/**
 * An entity that defines the scope of audit evidence collected by Audit Manager. An Audit Manager assessment is an implementation of an Audit Manager framework.
 *
 * @public
 */
export interface Assessment {
  /**
   * The Amazon Resource Name (ARN) of the assessment.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The Amazon Web Services account that's associated with the assessment.
   *
   * @public
   */
  awsAccount?: AWSAccount | undefined;

  /**
   * The metadata for the assessment.
   *
   * @public
   */
  metadata?: AssessmentMetadata | undefined;

  /**
   * The framework that the assessment was created from.
   *
   * @public
   */
  framework?: AssessmentFramework | undefined;

  /**
   * The tags that are associated with the assessment.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The folder where Audit Manager stores evidence for an assessment.
 *
 * @public
 */
export interface AssessmentEvidenceFolder {
  /**
   * The name of the evidence folder.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The date when the first evidence was added to the evidence folder.
   *
   * @public
   */
  date?: Date | undefined;

  /**
   * The identifier for the assessment.
   *
   * @public
   */
  assessmentId?: string | undefined;

  /**
   * The identifier for the control set.
   *
   * @public
   */
  controlSetId?: string | undefined;

  /**
   * The unique identifier for the control.
   *
   * @public
   */
  controlId?: string | undefined;

  /**
   * The identifier for the folder that the evidence is stored in.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Web Services service that the evidence was collected from.
   *
   * @public
   */
  dataSource?: string | undefined;

  /**
   * The name of the user who created the evidence folder.
   *
   * @public
   */
  author?: string | undefined;

  /**
   * The total amount of evidence in the evidence folder.
   *
   * @public
   */
  totalEvidence?: number | undefined;

  /**
   * The total count of evidence that's included in the assessment report.
   *
   * @public
   */
  assessmentReportSelectionCount?: number | undefined;

  /**
   * The name of the control.
   *
   * @public
   */
  controlName?: string | undefined;

  /**
   * The amount of evidence that's included in the evidence folder.
   *
   * @public
   */
  evidenceResourcesIncludedCount?: number | undefined;

  /**
   * The number of evidence that falls under the configuration data category. This evidence is collected from configuration snapshots of other Amazon Web Services services such as Amazon EC2, Amazon S3, or IAM.
   *
   * @public
   */
  evidenceByTypeConfigurationDataCount?: number | undefined;

  /**
   * The number of evidence that falls under the manual category. This evidence is imported manually.
   *
   * @public
   */
  evidenceByTypeManualCount?: number | undefined;

  /**
   * The number of evidence that falls under the compliance check category. This evidence is collected from Config or Security Hub CSPM.
   *
   * @public
   */
  evidenceByTypeComplianceCheckCount?: number | undefined;

  /**
   * The total number of issues that were reported directly from Security Hub CSPM, Config, or both.
   *
   * @public
   */
  evidenceByTypeComplianceCheckIssuesCount?: number | undefined;

  /**
   * The number of evidence that falls under the user activity category. This evidence is collected from CloudTrail logs.
   *
   * @public
   */
  evidenceByTypeUserActivityCount?: number | undefined;

  /**
   * The total number of Amazon Web Services resources that were assessed to generate the evidence.
   *
   * @public
   */
  evidenceAwsServiceSourceCount?: number | undefined;
}

/**
 * The metadata that's associated with a standard framework or a custom framework.
 *
 * @public
 */
export interface AssessmentFrameworkMetadata {
  /**
   * The Amazon Resource Name (ARN) of the framework.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The unique identifier for the framework.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The framework type, such as a standard framework or a custom framework.
   *
   * @public
   */
  type?: FrameworkType | undefined;

  /**
   * The name of the framework.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the framework.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The logo that's associated with the framework.
   *
   * @public
   */
  logo?: string | undefined;

  /**
   * The compliance type that the new custom framework supports, such as CIS or HIPAA.
   *
   * @public
   */
  complianceType?: string | undefined;

  /**
   * The number of controls that are associated with the framework.
   *
   * @public
   */
  controlsCount?: number | undefined;

  /**
   * The number of control sets that are associated with the framework.
   *
   * @public
   */
  controlSetsCount?: number | undefined;

  /**
   * The time when the framework was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The time when the framework was most recently updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * Represents a share request for a custom framework in Audit Manager.
 *
 * @public
 */
export interface AssessmentFrameworkShareRequest {
  /**
   * The unique identifier for the share request.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The unique identifier for the shared custom framework.
   *
   * @public
   */
  frameworkId?: string | undefined;

  /**
   * The name of the custom framework that the share request is for.
   *
   * @public
   */
  frameworkName?: string | undefined;

  /**
   * The description of the shared custom framework.
   *
   * @public
   */
  frameworkDescription?: string | undefined;

  /**
   * The status of the share request.
   *
   * @public
   */
  status?: ShareRequestStatus | undefined;

  /**
   * The Amazon Web Services account of the sender.
   *
   * @public
   */
  sourceAccount?: string | undefined;

  /**
   * The Amazon Web Services account of the recipient.
   *
   * @public
   */
  destinationAccount?: string | undefined;

  /**
   * The Amazon Web Services Region of the recipient.
   *
   * @public
   */
  destinationRegion?: string | undefined;

  /**
   * The time when the share request expires.
   *
   * @public
   */
  expirationTime?: Date | undefined;

  /**
   * The time when the share request was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * Specifies when the share request was last updated.
   *
   * @public
   */
  lastUpdated?: Date | undefined;

  /**
   * An optional comment from the sender about the share request.
   *
   * @public
   */
  comment?: string | undefined;

  /**
   * The number of standard controls that are part of the shared custom framework.
   *
   * @public
   */
  standardControlsCount?: number | undefined;

  /**
   * The number of custom controls that are part of the shared custom framework.
   *
   * @public
   */
  customControlsCount?: number | undefined;

  /**
   * The compliance type that the shared custom framework supports, such as CIS or HIPAA.
   *
   * @public
   */
  complianceType?: string | undefined;
}

/**
 * A metadata object that's associated with an assessment in Audit Manager.
 *
 * @public
 */
export interface AssessmentMetadataItem {
  /**
   * The name of the assessment.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The unique identifier for the assessment.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the compliance standard that's related to the assessment, such as PCI-DSS.
   *
   * @public
   */
  complianceType?: string | undefined;

  /**
   * The current status of the assessment.
   *
   * @public
   */
  status?: AssessmentStatus | undefined;

  /**
   * The roles that are associated with the assessment.
   *
   * @public
   */
  roles?: Role[] | undefined;

  /**
   * The delegations that are associated with the assessment.
   *
   * @public
   */
  delegations?: Delegation[] | undefined;

  /**
   * Specifies when the assessment was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The time of the most recent update.
   *
   * @public
   */
  lastUpdated?: Date | undefined;
}

/**
 * A finalized document that's generated from an Audit Manager assessment. These reports summarize the relevant evidence that was collected for your audit, and link to the relevant evidence folders. These evidence folders are named and organized according to the controls that are specified in your assessment.
 *
 * @public
 */
export interface AssessmentReport {
  /**
   * The unique identifier for the assessment report.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name that's given to the assessment report.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the specified assessment report.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The identifier for the specified Amazon Web Services account.
   *
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * The identifier for the specified assessment.
   *
   * @public
   */
  assessmentId?: string | undefined;

  /**
   * The name of the associated assessment.
   *
   * @public
   */
  assessmentName?: string | undefined;

  /**
   * The name of the user who created the assessment report.
   *
   * @public
   */
  author?: string | undefined;

  /**
   * The current status of the specified assessment report.
   *
   * @public
   */
  status?: AssessmentReportStatus | undefined;

  /**
   * Specifies when the assessment report was created.
   *
   * @public
   */
  creationTime?: Date | undefined;
}

/**
 * An error entity for assessment report evidence errors. This is used to provide more meaningful errors than a simple string message.
 *
 * @public
 */
export interface AssessmentReportEvidenceError {
  /**
   * The identifier for the evidence.
   *
   * @public
   */
  evidenceId?: string | undefined;

  /**
   * The error code that was returned.
   *
   * @public
   */
  errorCode?: string | undefined;

  /**
   * The error message that was returned.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * The metadata objects that are associated with the specified assessment report.
 *
 * @public
 */
export interface AssessmentReportMetadata {
  /**
   * The unique identifier for the assessment report.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the assessment report.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the assessment report.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The unique identifier for the associated assessment.
   *
   * @public
   */
  assessmentId?: string | undefined;

  /**
   * The name of the associated assessment.
   *
   * @public
   */
  assessmentName?: string | undefined;

  /**
   * The name of the user who created the assessment report.
   *
   * @public
   */
  author?: string | undefined;

  /**
   * The current status of the assessment report.
   *
   * @public
   */
  status?: AssessmentReportStatus | undefined;

  /**
   * Specifies when the assessment report was created.
   *
   * @public
   */
  creationTime?: Date | undefined;
}

/**
 * @public
 */
export interface AssociateAssessmentReportEvidenceFolderRequest {
  /**
   * The identifier for the assessment.
   *
   * @public
   */
  assessmentId: string | undefined;

  /**
   * The identifier for the folder that the evidence is stored in.
   *
   * @public
   */
  evidenceFolderId: string | undefined;
}

/**
 * @public
 */
export interface AssociateAssessmentReportEvidenceFolderResponse {}

/**
 * Indicates that the request has invalid or missing parameters for the field.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the validation error.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The body of the error message.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface BatchAssociateAssessmentReportEvidenceRequest {
  /**
   * The identifier for the assessment.
   *
   * @public
   */
  assessmentId: string | undefined;

  /**
   * The identifier for the folder that the evidence is stored in.
   *
   * @public
   */
  evidenceFolderId: string | undefined;

  /**
   * The list of evidence identifiers.
   *
   * @public
   */
  evidenceIds: string[] | undefined;
}

/**
 * @public
 */
export interface BatchAssociateAssessmentReportEvidenceResponse {
  /**
   * The list of evidence identifiers.
   *
   * @public
   */
  evidenceIds?: string[] | undefined;

  /**
   * A list of errors that the `BatchAssociateAssessmentReportEvidence` API returned.
   *
   * @public
   */
  errors?: AssessmentReportEvidenceError[] | undefined;
}

/**
 * A collection of attributes that's used to create a delegation for an assessment in Audit Manager.
 *
 * @public
 */
export interface CreateDelegationRequest {
  /**
   * A comment that's related to the delegation request.
   *
   * @public
   */
  comment?: string | undefined;

  /**
   * The unique identifier for the control set.
   *
   * @public
   */
  controlSetId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The type of customer persona.
   *
   * > **Note:**
   * >
   * > In `CreateAssessment`, `roleType` can only be `PROCESS_OWNER`.
   * >
   * > In `UpdateSettings`, `roleType` can only be `PROCESS_OWNER`.
   * >
   * > In `BatchCreateDelegationByAssessment`, `roleType` can only be `RESOURCE_OWNER`.
   *
   * @public
   */
  roleType?: RoleType | undefined;
}

/**
 * @public
 */
export interface BatchCreateDelegationByAssessmentRequest {
  /**
   * The API request to batch create delegations in Audit Manager.
   *
   * @public
   */
  createDelegationRequests: CreateDelegationRequest[] | undefined;

  /**
   * The identifier for the assessment.
   *
   * @public
   */
  assessmentId: string | undefined;
}

/**
 * An error entity for the `BatchCreateDelegationByAssessment` API. This is used to provide more meaningful errors than a simple string message.
 *
 * @public
 */
export interface BatchCreateDelegationByAssessmentError {
  /**
   * The API request to batch create delegations in Audit Manager.
   *
   * @public
   */
  createDelegationRequest?: CreateDelegationRequest | undefined;

  /**
   * The error code that the `BatchCreateDelegationByAssessment` API returned.
   *
   * @public
   */
  errorCode?: string | undefined;

  /**
   * The error message that the `BatchCreateDelegationByAssessment` API returned.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateDelegationByAssessmentResponse {
  /**
   * The delegations that are associated with the assessment.
   *
   * @public
   */
  delegations?: Delegation[] | undefined;

  /**
   * A list of errors that the `BatchCreateDelegationByAssessment` API returned.
   *
   * @public
   */
  errors?: BatchCreateDelegationByAssessmentError[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteDelegationByAssessmentRequest {
  /**
   * The identifiers for the delegations.
   *
   * @public
   */
  delegationIds: string[] | undefined;

  /**
   * The identifier for the assessment.
   *
   * @public
   */
  assessmentId: string | undefined;
}

/**
 * An error entity for the `BatchDeleteDelegationByAssessment` API. This is used to provide more meaningful errors than a simple string message.
 *
 * @public
 */
export interface BatchDeleteDelegationByAssessmentError {
  /**
   * The identifier for the delegation.
   *
   * @public
   */
  delegationId?: string | undefined;

  /**
   * The error code that the `BatchDeleteDelegationByAssessment` API returned.
   *
   * @public
   */
  errorCode?: string | undefined;

  /**
   * The error message that the `BatchDeleteDelegationByAssessment` API returned.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteDelegationByAssessmentResponse {
  /**
   * A list of errors that the `BatchDeleteDelegationByAssessment` API returned.
   *
   * @public
   */
  errors?: BatchDeleteDelegationByAssessmentError[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateAssessmentReportEvidenceRequest {
  /**
   * The identifier for the assessment.
   *
   * @public
   */
  assessmentId: string | undefined;

  /**
   * The identifier for the folder that the evidence is stored in.
   *
   * @public
   */
  evidenceFolderId: string | undefined;

  /**
   * The list of evidence identifiers.
   *
   * @public
   */
  evidenceIds: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateAssessmentReportEvidenceResponse {
  /**
   * The identifier for the evidence.
   *
   * @public
   */
  evidenceIds?: string[] | undefined;

  /**
   * A list of errors that the `BatchDisassociateAssessmentReportEvidence` API returned.
   *
   * @public
   */
  errors?: AssessmentReportEvidenceError[] | undefined;
}

/**
 * Evidence that's manually added to a control in Audit Manager. `manualEvidence` can be one of the following: `evidenceFileName`, `s3ResourcePath`, or `textResponse`.
 *
 * @public
 */
export interface ManualEvidence {
  /**
   * The S3 URL of the object that's imported as manual evidence.
   *
   * @public
   */
  s3ResourcePath?: string | undefined;

  /**
   * The plain text response that's entered and saved as manual evidence.
   *
   * @public
   */
  textResponse?: string | undefined;

  /**
   * The name of the file that's uploaded as manual evidence. This name is populated using the `evidenceFileName` value from the [`GetEvidenceFileUploadUrl`](https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetEvidenceFileUploadUrl.html) API response.
   *
   * @public
   */
  evidenceFileName?: string | undefined;
}

/**
 * @public
 */
export interface BatchImportEvidenceToAssessmentControlRequest {
  /**
   * The identifier for the assessment.
   *
   * @public
   */
  assessmentId: string | undefined;

  /**
   * The identifier for the control set.
   *
   * @public
   */
  controlSetId: string | undefined;

  /**
   * The identifier for the control.
   *
   * @public
   */
  controlId: string | undefined;

  /**
   * The list of manual evidence objects.
   *
   * @public
   */
  manualEvidence: ManualEvidence[] | undefined;
}

/**
 * An error entity for the `BatchImportEvidenceToAssessmentControl` API. This is used to provide more meaningful errors than a simple string message.
 *
 * @public
 */
export interface BatchImportEvidenceToAssessmentControlError {
  /**
   * Manual evidence that can't be collected automatically by Audit Manager.
   *
   * @public
   */
  manualEvidence?: ManualEvidence | undefined;

  /**
   * The error code that the `BatchImportEvidenceToAssessmentControl` API returned.
   *
   * @public
   */
  errorCode?: string | undefined;

  /**
   * The error message that the `BatchImportEvidenceToAssessmentControl` API returned.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchImportEvidenceToAssessmentControlResponse {
  /**
   * A list of errors that the `BatchImportEvidenceToAssessmentControl` API returned.
   *
   * @public
   */
  errors?: BatchImportEvidenceToAssessmentControlError[] | undefined;
}

/**
 * @public
 */
export interface CreateAssessmentRequest {
  /**
   * The name of the assessment to be created.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The optional description of the assessment to be created.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The assessment report storage destination for the assessment that's being created.
   *
   * @public
   */
  assessmentReportsDestination: AssessmentReportsDestination | undefined;

  /**
   * The wrapper that contains the Amazon Web Services accounts that are in scope for the assessment.
   *
   * > **Note:**
   * >
   * > You no longer need to specify which Amazon Web Services services are in scope when you create or update an assessment. Audit Manager infers the services in scope by examining your assessment controls and their data sources, and then mapping this information to the relevant Amazon Web Services services.
   * >
   * > If an underlying data source changes for your assessment, we automatically update the services scope as needed to reflect the correct Amazon Web Services services. This ensures that your assessment collects accurate and comprehensive evidence about all of the relevant services in your AWS environment.
   *
   * @public
   */
  scope: Scope | undefined;

  /**
   * The list of roles for the assessment.
   *
   * @public
   */
  roles: Role[] | undefined;

  /**
   * The identifier for the framework that the assessment will be created from.
   *
   * @public
   */
  frameworkId: string | undefined;

  /**
   * The tags that are associated with the assessment.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAssessmentResponse {
  /**
   * An entity that defines the scope of audit evidence collected by Audit Manager. An Audit Manager assessment is an implementation of an Audit Manager framework.
   *
   * @public
   */
  assessment?: Assessment | undefined;
}

/**
 * The control entity attributes that uniquely identify an existing control to be added to a framework in Audit Manager.
 *
 * @public
 */
export interface CreateAssessmentFrameworkControl {
  /**
   * The unique identifier of the control.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * A `controlSet` entity that represents a collection of controls in Audit Manager. This doesn't contain the control set ID.
 *
 * @public
 */
export interface CreateAssessmentFrameworkControlSet {
  /**
   * The name of the control set.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The list of controls within the control set. This doesn't contain the control set ID.
   *
   * @public
   */
  controls?: CreateAssessmentFrameworkControl[] | undefined;
}

/**
 * @public
 */
export interface CreateAssessmentFrameworkRequest {
  /**
   * The name of the new custom framework.
   *
   * @public
   */
  name: string | undefined;

  /**
   * An optional description for the new custom framework.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The compliance type that the new custom framework supports, such as CIS or HIPAA.
   *
   * @public
   */
  complianceType?: string | undefined;

  /**
   * The control sets that are associated with the framework.
   *
   * > **Note:** The `Controls` object returns a partial response when called through Framework APIs. For a complete `Controls` object, use `GetControl`.
   *
   * @public
   */
  controlSets: CreateAssessmentFrameworkControlSet[] | undefined;

  /**
   * The tags that are associated with the framework.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * A keyword that relates to the control data source.
 *
 * For manual evidence, this keyword indicates if the manual evidence is a file or text.
 *
 * For automated evidence, this keyword identifies a specific CloudTrail event, Config rule, Security Hub CSPM control, or Amazon Web Services API name.
 *
 * To learn more about the supported keywords that you can use when mapping a control data source, see the following pages in the *Audit Manager User Guide*:
 *
 * - [Config rules supported by Audit Manager](https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-config.html)
 * - [Security Hub CSPM controls supported by Audit Manager](https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-ash.html)
 * - [API calls supported by Audit Manager](https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-api.html)
 * - [CloudTrail event names supported by Audit Manager](https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-cloudtrail.html)
 *
 * @public
 */
export interface SourceKeyword {
  /**
   * The input method for the keyword.
   *
   * - `SELECT_FROM_LIST` is used when mapping a data source for automated evidence.
   *
   *   - When `keywordInputType` is `SELECT_FROM_LIST`, a keyword must be selected to collect automated evidence. For example, this keyword can be a CloudTrail event name, a rule name for Config, a Security Hub CSPM control, or the name of an Amazon Web Services API call.
   * - `UPLOAD_FILE` and `INPUT_TEXT` are only used when mapping a data source for manual evidence.
   *
   *   - When `keywordInputType` is `UPLOAD_FILE`, a file must be uploaded as manual evidence.
   *   - When `keywordInputType` is `INPUT_TEXT`, text must be entered as manual evidence.
   *
   * @public
   */
  keywordInputType?: KeywordInputType | undefined;

  /**
   * The value of the keyword that's used when mapping a control data source. For example, this can be a CloudTrail event name, a rule name for Config, a Security Hub CSPM control, or the name of an Amazon Web Services API call.
   *
   * If you’re mapping a data source to a rule in Config, the `keywordValue` that you specify depends on the type of rule:
   *
   * - For [managed rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html), you can use the rule identifier as the `keywordValue`. You can find the rule identifier from the [list of Config managed rules](https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html). For some rules, the rule identifier is different from the rule name. For example, the rule name `restricted-ssh` has the following rule identifier: `INCOMING_SSH_DISABLED`. Make sure to use the rule identifier, not the rule name.
   *
   *   Keyword example for managed rules:
   *
   *   - Managed rule name: [s3-bucket-acl-prohibited](https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-acl-prohibited.html)
   *
   *     `keywordValue`: `S3_BUCKET_ACL_PROHIBITED`
   * - For [custom rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules.html), you form the `keywordValue` by adding the `Custom_` prefix to the rule name. This prefix distinguishes the custom rule from a managed rule.
   *
   *   Keyword example for custom rules:
   *
   *   - Custom rule name: my-custom-config-rule
   *
   *     `keywordValue`: `Custom_my-custom-config-rule`
   * - For [service-linked rules](https://docs.aws.amazon.com/config/latest/developerguide/service-linked-awsconfig-rules.html), you form the `keywordValue` by adding the `Custom_` prefix to the rule name. In addition, you remove the suffix ID that appears at the end of the rule name.
   *
   *   Keyword examples for service-linked rules:
   *
   *   - Service-linked rule name: CustomRuleForAccount-conformance-pack-szsm1uv0w
   *
   *     `keywordValue`: `Custom_CustomRuleForAccount-conformance-pack`
   *   - Service-linked rule name: OrgConfigRule-s3-bucket-versioning-enabled-dbgzf8ba
   *
   *     `keywordValue`: `Custom_OrgConfigRule-s3-bucket-versioning-enabled`
   *
   * > **Important:**
   * >
   * > The `keywordValue` is case sensitive. If you enter a value incorrectly, Audit Manager might not recognize the data source mapping. As a result, you might not successfully collect evidence from that data source as intended.
   * >
   * > Keep in mind the following requirements, depending on the data source type that you're using.
   * >
   * > 1. For Config:
   * >
   * >    - For managed rules, make sure that the `keywordValue` is the rule identifier in `ALL_CAPS_WITH_UNDERSCORES`. For example, `CLOUDWATCH_LOG_GROUP_ENCRYPTED`. For accuracy, we recommend that you reference the list of [supported Config managed rules](https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-config.html).
   * >    - For custom rules, make sure that the `keywordValue` has the `Custom_` prefix followed by the custom rule name. The format of the custom rule name itself may vary. For accuracy, we recommend that you visit the [Config console](https://console.aws.amazon.com/config/) to verify your custom rule name.
   * > 2. For Security Hub CSPM: The format varies for Security Hub CSPM control names. For accuracy, we recommend that you reference the list of [supported Security Hub CSPM controls](https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-ash.html).
   * > 3. For Amazon Web Services API calls: Make sure that the `keywordValue` is written as `serviceprefix_ActionName`. For example, `iam_ListGroups`. For accuracy, we recommend that you reference the list of [supported API calls](https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-api.html).
   * > 4. For CloudTrail: Make sure that the `keywordValue` is written as `serviceprefix_ActionName`. For example, `cloudtrail_StartLogging`. For accuracy, we recommend that you review the Amazon Web Services service prefix and action names in the [Service Authorization Reference](https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html).
   *
   * @public
   */
  keywordValue?: string | undefined;
}

/**
 * The data source that determines where Audit Manager collects evidence from for the control.
 *
 * @public
 */
export interface ControlMappingSource {
  /**
   * The unique identifier for the source.
   *
   * @public
   */
  sourceId?: string | undefined;

  /**
   * The name of the source.
   *
   * @public
   */
  sourceName?: string | undefined;

  /**
   * The description of the source.
   *
   * @public
   */
  sourceDescription?: string | undefined;

  /**
   * The setup option for the data source. This option reflects if the evidence collection method is automated or manual. If you don’t provide a value for `sourceSetUpOption`, Audit Manager automatically infers and populates the correct value based on the `sourceType` that you specify.
   *
   * @public
   */
  sourceSetUpOption?: SourceSetUpOption | undefined;

  /**
   * Specifies which type of data source is used to collect evidence.
   *
   * - The source can be an individual data source type, such as `AWS_Cloudtrail`, `AWS_Config`, `AWS_Security_Hub`, `AWS_API_Call`, or `MANUAL`.
   * - The source can also be a managed grouping of data sources, such as a `Core_Control` or a `Common_Control`.
   *
   * @public
   */
  sourceType?: SourceType | undefined;

  /**
   * A keyword that relates to the control data source.
   *
   * For manual evidence, this keyword indicates if the manual evidence is a file or text.
   *
   * For automated evidence, this keyword identifies a specific CloudTrail event, Config rule, Security Hub CSPM control, or Amazon Web Services API name.
   *
   * To learn more about the supported keywords that you can use when mapping a control data source, see the following pages in the *Audit Manager User Guide*:
   *
   * - [Config rules supported by Audit Manager](https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-config.html)
   * - [Security Hub CSPM controls supported by Audit Manager](https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-ash.html)
   * - [API calls supported by Audit Manager](https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-api.html)
   * - [CloudTrail event names supported by Audit Manager](https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-cloudtrail.html)
   *
   * @public
   */
  sourceKeyword?: SourceKeyword | undefined;

  /**
   * Specifies how often evidence is collected from the control mapping source.
   *
   * @public
   */
  sourceFrequency?: SourceFrequency | undefined;

  /**
   * The instructions for troubleshooting the control.
   *
   * @public
   */
  troubleshootingText?: string | undefined;
}

/**
 * A control in Audit Manager.
 *
 * @public
 */
export interface Control {
  /**
   * The Amazon Resource Name (ARN) of the control.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The unique identifier for the control.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Specifies whether the control is a standard control or a custom control.
   *
   * @public
   */
  type?: ControlType | undefined;

  /**
   * The name of the control.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the control.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The steps that you should follow to determine if the control has been satisfied.
   *
   * @public
   */
  testingInformation?: string | undefined;

  /**
   * The title of the action plan for remediating the control.
   *
   * @public
   */
  actionPlanTitle?: string | undefined;

  /**
   * The recommended actions to carry out if the control isn't fulfilled.
   *
   * @public
   */
  actionPlanInstructions?: string | undefined;

  /**
   * The data source types that determine where Audit Manager collects evidence from for the control.
   *
   * @public
   */
  controlSources?: string | undefined;

  /**
   * The data mapping sources for the control.
   *
   * @public
   */
  controlMappingSources?: ControlMappingSource[] | undefined;

  /**
   * The time when the control was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The time when the control was most recently updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The user or role that created the control.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The user or role that most recently updated the control.
   *
   * @public
   */
  lastUpdatedBy?: string | undefined;

  /**
   * The tags associated with the control.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The state of the control. The `END_OF_SUPPORT` state is applicable to standard controls only. This state indicates that the standard control can still be used to collect evidence, but Audit Manager is no longer updating or maintaining that control.
   *
   * @public
   */
  state?: ControlState | undefined;
}

/**
 * A set of controls in Audit Manager.
 *
 * @public
 */
export interface ControlSet {
  /**
   * The identifier of the control set in the assessment. This is the control set name in a plain string format.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the control set.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The list of controls within the control set.
   *
   * @public
   */
  controls?: Control[] | undefined;
}

/**
 * The file that's used to structure and automate Audit Manager assessments for a given compliance standard.
 *
 * @public
 */
export interface Framework {
  /**
   * The Amazon Resource Name (ARN) of the framework.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The unique identifier for the framework.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the framework.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Specifies whether the framework is a standard framework or a custom framework.
   *
   * @public
   */
  type?: FrameworkType | undefined;

  /**
   * The compliance type that the framework supports, such as CIS or HIPAA.
   *
   * @public
   */
  complianceType?: string | undefined;

  /**
   * The description of the framework.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The logo that's associated with the framework.
   *
   * @public
   */
  logo?: string | undefined;

  /**
   * The control data sources where Audit Manager collects evidence from.
   *
   * > **Important:** This API parameter is no longer supported.
   *
   * @deprecated (since 2025-07-24) Use controlSources from the Control.
   * @public
   */
  controlSources?: string | undefined;

  /**
   * The control sets that are associated with the framework.
   *
   * > **Note:** The `Controls` object returns a partial response when called through Framework APIs. For a complete `Controls` object, use `GetControl`.
   *
   * @public
   */
  controlSets?: ControlSet[] | undefined;

  /**
   * The time when the framework was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The time when the framework was most recently updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The user or role that created the framework.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The user or role that most recently updated the framework.
   *
   * @public
   */
  lastUpdatedBy?: string | undefined;

  /**
   * The tags that are associated with the framework.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAssessmentFrameworkResponse {
  /**
   * The new framework object that the `CreateAssessmentFramework` API returned.
   *
   * @public
   */
  framework?: Framework | undefined;
}

/**
 * @public
 */
export interface CreateAssessmentReportRequest {
  /**
   * The name of the new assessment report.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the assessment report.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The identifier for the assessment.
   *
   * @public
   */
  assessmentId: string | undefined;

  /**
   * A SQL statement that represents an evidence finder query.
   *
   * Provide this parameter when you want to generate an assessment report from the results of an evidence finder search query. When you use this parameter, Audit Manager generates a one-time report using only the evidence from the query output. This report does not include any assessment evidence that was manually [added to a report using the console](https://docs.aws.amazon.com/audit-manager/latest/userguide/generate-assessment-report.html#generate-assessment-report-include-evidence), or [associated with a report using the API](https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_BatchAssociateAssessmentReportEvidence.html).
   *
   * To use this parameter, the [enablementStatus](https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_EvidenceFinderEnablement.html#auditmanager-Type-EvidenceFinderEnablement-enablementStatus) of evidence finder must be `ENABLED`.
   *
   * For examples and help resolving `queryStatement` validation exceptions, see [Troubleshooting evidence finder issues](https://docs.aws.amazon.com/audit-manager/latest/userguide/evidence-finder-issues.html#querystatement-exceptions) in the *Audit Manager User Guide.*
   *
   * @public
   */
  queryStatement?: string | undefined;
}

/**
 * @public
 */
export interface CreateAssessmentReportResponse {
  /**
   * The new assessment report that the `CreateAssessmentReport` API returned.
   *
   * @public
   */
  assessmentReport?: AssessmentReport | undefined;
}

/**
 * The mapping attributes that determine the evidence source for a given control, along with related parameters and metadata. This doesn't contain `mappingID`.
 *
 * @public
 */
export interface CreateControlMappingSource {
  /**
   * The name of the control mapping data source.
   *
   * @public
   */
  sourceName?: string | undefined;

  /**
   * The description of the data source that determines where Audit Manager collects evidence from for the control.
   *
   * @public
   */
  sourceDescription?: string | undefined;

  /**
   * The setup option for the data source. This option reflects if the evidence collection method is automated or manual. If you don’t provide a value for `sourceSetUpOption`, Audit Manager automatically infers and populates the correct value based on the `sourceType` that you specify.
   *
   * @public
   */
  sourceSetUpOption?: SourceSetUpOption | undefined;

  /**
   * Specifies which type of data source is used to collect evidence.
   *
   * - The source can be an individual data source type, such as `AWS_Cloudtrail`, `AWS_Config`, `AWS_Security_Hub`, `AWS_API_Call`, or `MANUAL`.
   * - The source can also be a managed grouping of data sources, such as a `Core_Control` or a `Common_Control`.
   *
   * @public
   */
  sourceType?: SourceType | undefined;

  /**
   * A keyword that relates to the control data source.
   *
   * For manual evidence, this keyword indicates if the manual evidence is a file or text.
   *
   * For automated evidence, this keyword identifies a specific CloudTrail event, Config rule, Security Hub CSPM control, or Amazon Web Services API name.
   *
   * To learn more about the supported keywords that you can use when mapping a control data source, see the following pages in the *Audit Manager User Guide*:
   *
   * - [Config rules supported by Audit Manager](https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-config.html)
   * - [Security Hub CSPM controls supported by Audit Manager](https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-ash.html)
   * - [API calls supported by Audit Manager](https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-api.html)
   * - [CloudTrail event names supported by Audit Manager](https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-cloudtrail.html)
   *
   * @public
   */
  sourceKeyword?: SourceKeyword | undefined;

  /**
   * Specifies how often evidence is collected from the control mapping source.
   *
   * @public
   */
  sourceFrequency?: SourceFrequency | undefined;

  /**
   * The instructions for troubleshooting the control.
   *
   * @public
   */
  troubleshootingText?: string | undefined;
}

/**
 * @public
 */
export interface CreateControlRequest {
  /**
   * The name of the control.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the control.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The steps to follow to determine if the control is satisfied.
   *
   * @public
   */
  testingInformation?: string | undefined;

  /**
   * The title of the action plan for remediating the control.
   *
   * @public
   */
  actionPlanTitle?: string | undefined;

  /**
   * The recommended actions to carry out if the control isn't fulfilled.
   *
   * @public
   */
  actionPlanInstructions?: string | undefined;

  /**
   * The data mapping sources for the control.
   *
   * @public
   */
  controlMappingSources: CreateControlMappingSource[] | undefined;

  /**
   * The tags that are associated with the control.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateControlResponse {
  /**
   * The new control that the `CreateControl` API returned.
   *
   * @public
   */
  control?: Control | undefined;
}

/**
 * @public
 */
export interface DeleteAssessmentRequest {
  /**
   * The identifier for the assessment.
   *
   * @public
   */
  assessmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssessmentResponse {}

/**
 * @public
 */
export interface DeleteAssessmentFrameworkRequest {
  /**
   * The identifier for the custom framework.
   *
   * @public
   */
  frameworkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssessmentFrameworkResponse {}

/**
 * @public
 */
export interface DeleteAssessmentFrameworkShareRequest {
  /**
   * The unique identifier for the share request to be deleted.
   *
   * @public
   */
  requestId: string | undefined;

  /**
   * Specifies whether the share request is a sent request or a received request.
   *
   * @public
   */
  requestType: ShareRequestType | undefined;
}

/**
 * @public
 */
export interface DeleteAssessmentFrameworkShareResponse {}

/**
 * @public
 */
export interface DeleteAssessmentReportRequest {
  /**
   * The unique identifier for the assessment.
   *
   * @public
   */
  assessmentId: string | undefined;

  /**
   * The unique identifier for the assessment report.
   *
   * @public
   */
  assessmentReportId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssessmentReportResponse {}

/**
 * @public
 */
export interface DeleteControlRequest {
  /**
   * The unique identifier for the control.
   *
   * @public
   */
  controlId: string | undefined;
}

/**
 * @public
 */
export interface DeleteControlResponse {}

/**
 * @public
 */
export interface DeregisterAccountRequest {}

/**
 * @public
 */
export interface DeregisterAccountResponse {
  /**
   * The registration status of the account.
   *
   * @public
   */
  status?: AccountStatus | undefined;
}

/**
 * @public
 */
export interface DeregisterOrganizationAdminAccountRequest {
  /**
   * The identifier for the administrator account.
   *
   * @public
   */
  adminAccountId?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterOrganizationAdminAccountResponse {}

/**
 * @public
 */
export interface DisassociateAssessmentReportEvidenceFolderRequest {
  /**
   * The unique identifier for the assessment.
   *
   * @public
   */
  assessmentId: string | undefined;

  /**
   * The unique identifier for the folder that the evidence is stored in.
   *
   * @public
   */
  evidenceFolderId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateAssessmentReportEvidenceFolderResponse {}

/**
 * @public
 */
export interface GetAccountStatusRequest {}

/**
 * @public
 */
export interface GetAccountStatusResponse {
  /**
   * The status of the Amazon Web Services account.
   *
   * @public
   */
  status?: AccountStatus | undefined;
}

/**
 * @public
 */
export interface GetAssessmentRequest {
  /**
   * The unique identifier for the assessment.
   *
   * @public
   */
  assessmentId: string | undefined;
}

/**
 * @public
 */
export interface GetAssessmentResponse {
  /**
   * An entity that defines the scope of audit evidence collected by Audit Manager. An Audit Manager assessment is an implementation of an Audit Manager framework.
   *
   * @public
   */
  assessment?: Assessment | undefined;

  /**
   * The wrapper that contains the Audit Manager role information of the current user. This includes the role type and IAM Amazon Resource Name (ARN).
   *
   * @public
   */
  userRole?: Role | undefined;
}

/**
 * @public
 */
export interface GetAssessmentFrameworkRequest {
  /**
   * The identifier for the framework.
   *
   * @public
   */
  frameworkId: string | undefined;
}

/**
 * @public
 */
export interface GetAssessmentFrameworkResponse {
  /**
   * The framework that the `GetAssessmentFramework` API returned.
   *
   * > **Note:** The `Controls` object returns a partial response when called through Framework APIs. For a complete `Controls` object, use `GetControl`.
   *
   * @public
   */
  framework?: Framework | undefined;
}

/**
 * @public
 */
export interface GetAssessmentReportUrlRequest {
  /**
   * The unique identifier for the assessment report.
   *
   * @public
   */
  assessmentReportId: string | undefined;

  /**
   * The unique identifier for the assessment.
   *
   * @public
   */
  assessmentId: string | undefined;
}

/**
 * Short for uniform resource locator. A URL is used as a unique identifier to locate a resource on the internet.
 *
 * @public
 */
export interface URL {
  /**
   * The name or word that's used as a hyperlink to the URL.
   *
   * @public
   */
  hyperlinkName?: string | undefined;

  /**
   * The unique identifier for the internet resource.
   *
   * @public
   */
  link?: string | undefined;
}

/**
 * @public
 */
export interface GetAssessmentReportUrlResponse {
  /**
   * Short for uniform resource locator. A URL is used as a unique identifier to locate a resource on the internet.
   *
   * @public
   */
  preSignedUrl?: URL | undefined;
}

/**
 * @public
 */
export interface GetChangeLogsRequest {
  /**
   * The unique identifier for the assessment.
   *
   * @public
   */
  assessmentId: string | undefined;

  /**
   * The unique identifier for the control set.
   *
   * @public
   */
  controlSetId?: string | undefined;

  /**
   * The unique identifier for the control.
   *
   * @public
   */
  controlId?: string | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Represents the maximum number of results on a page or for an API request call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The record of a change within Audit Manager. For example, this could be the status change of an assessment or the delegation of a control set.
 *
 * @public
 */
export interface ChangeLog {
  /**
   * The object that was changed, such as an assessment, control, or control set.
   *
   * @public
   */
  objectType?: ObjectTypeEnum | undefined;

  /**
   * The name of the object that changed. This could be the name of an assessment, control, or control set.
   *
   * @public
   */
  objectName?: string | undefined;

  /**
   * The action that was performed.
   *
   * @public
   */
  action?: ActionEnum | undefined;

  /**
   * The time when the action was performed and the changelog record was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The user or role that performed the action.
   *
   * @public
   */
  createdBy?: string | undefined;
}

/**
 * @public
 */
export interface GetChangeLogsResponse {
  /**
   * The list of user activity for the control.
   *
   * @public
   */
  changeLogs?: ChangeLog[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetControlRequest {
  /**
   * The identifier for the control.
   *
   * @public
   */
  controlId: string | undefined;
}

/**
 * @public
 */
export interface GetControlResponse {
  /**
   * The details of the control that the `GetControl` API returned.
   *
   * @public
   */
  control?: Control | undefined;
}

/**
 * @public
 */
export interface GetDelegationsRequest {
  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Represents the maximum number of results on a page or for an API request call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The metadata that's associated with the delegation.
 *
 * @public
 */
export interface DelegationMetadata {
  /**
   * The unique identifier for the delegation.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the associated assessment.
   *
   * @public
   */
  assessmentName?: string | undefined;

  /**
   * The unique identifier for the assessment.
   *
   * @public
   */
  assessmentId?: string | undefined;

  /**
   * The current status of the delegation.
   *
   * @public
   */
  status?: DelegationStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * Specifies when the delegation was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * Specifies the name of the control set that was delegated for review.
   *
   * @public
   */
  controlSetName?: string | undefined;
}

/**
 * @public
 */
export interface GetDelegationsResponse {
  /**
   * The list of delegations that the `GetDelegations` API returned.
   *
   * @public
   */
  delegations?: DelegationMetadata[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetEvidenceRequest {
  /**
   * The unique identifier for the assessment.
   *
   * @public
   */
  assessmentId: string | undefined;

  /**
   * The unique identifier for the control set.
   *
   * @public
   */
  controlSetId: string | undefined;

  /**
   * The unique identifier for the folder that the evidence is stored in.
   *
   * @public
   */
  evidenceFolderId: string | undefined;

  /**
   * The unique identifier for the evidence.
   *
   * @public
   */
  evidenceId: string | undefined;
}

/**
 * A system asset that's evaluated in an Audit Manager assessment.
 *
 * @public
 */
export interface Resource {
  /**
   * The Amazon Resource Name (ARN) for the resource.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The value of the resource.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * The evaluation status for a resource that was assessed when collecting compliance check evidence.
   *
   * - Audit Manager classes the resource as non-compliant if Security Hub CSPM reports a *Fail* result, or if Config reports a *Non-compliant* result.
   * - Audit Manager classes the resource as compliant if Security Hub CSPM reports a *Pass* result, or if Config reports a *Compliant* result.
   * - If a compliance check isn't available or applicable, then no compliance evaluation can be made for that resource. This is the case if a resource assessment uses Config or Security Hub CSPM as the underlying data source type, but those services aren't enabled. This is also the case if the resource assessment uses an underlying data source type that doesn't support compliance checks (such as manual evidence, Amazon Web Services API calls, or CloudTrail).
   *
   * @public
   */
  complianceCheck?: string | undefined;
}

/**
 * A record that contains the information needed to demonstrate compliance with the requirements specified by a control. Examples of evidence include change activity invoked by a user, or a system configuration snapshot.
 *
 * @public
 */
export interface Evidence {
  /**
   * The data source where the evidence was collected from.
   *
   * @public
   */
  dataSource?: string | undefined;

  /**
   * The identifier for the Amazon Web Services account.
   *
   * @public
   */
  evidenceAwsAccountId?: string | undefined;

  /**
   * The timestamp that represents when the evidence was collected.
   *
   * @public
   */
  time?: Date | undefined;

  /**
   * The Amazon Web Services service that the evidence is collected from.
   *
   * @public
   */
  eventSource?: string | undefined;

  /**
   * The name of the evidence event.
   *
   * @public
   */
  eventName?: string | undefined;

  /**
   * The type of automated evidence.
   *
   * @public
   */
  evidenceByType?: string | undefined;

  /**
   * The list of resources that are assessed to generate the evidence.
   *
   * @public
   */
  resourcesIncluded?: Resource[] | undefined;

  /**
   * The names and values that are used by the evidence event. This includes an attribute name (such as `allowUsersToChangePassword`) and value (such as `true` or `false`).
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * The unique identifier for the user or role that's associated with the evidence.
   *
   * @public
   */
  iamId?: string | undefined;

  /**
   * The evaluation status for automated evidence that falls under the compliance check category.
   *
   * - Audit Manager classes evidence as non-compliant if Security Hub CSPM reports a *Fail* result, or if Config reports a *Non-compliant* result.
   * - Audit Manager classes evidence as compliant if Security Hub CSPM reports a *Pass* result, or if Config reports a *Compliant* result.
   * - If a compliance check isn't available or applicable, then no compliance evaluation can be made for that evidence. This is the case if the evidence uses Config or Security Hub CSPM as the underlying data source type, but those services aren't enabled. This is also the case if the evidence uses an underlying data source type that doesn't support compliance checks (such as manual evidence, Amazon Web Services API calls, or CloudTrail).
   *
   * @public
   */
  complianceCheck?: string | undefined;

  /**
   * The Amazon Web Services account that the evidence is collected from, and its organization path.
   *
   * @public
   */
  awsOrganization?: string | undefined;

  /**
   * The identifier for the Amazon Web Services account.
   *
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * The identifier for the folder that the evidence is stored in.
   *
   * @public
   */
  evidenceFolderId?: string | undefined;

  /**
   * The identifier for the evidence.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Specifies whether the evidence is included in the assessment report.
   *
   * @public
   */
  assessmentReportSelection?: string | undefined;
}

/**
 * @public
 */
export interface GetEvidenceResponse {
  /**
   * The evidence that the `GetEvidence` API returned.
   *
   * @public
   */
  evidence?: Evidence | undefined;
}

/**
 * @public
 */
export interface GetEvidenceByEvidenceFolderRequest {
  /**
   * The identifier for the assessment.
   *
   * @public
   */
  assessmentId: string | undefined;

  /**
   * The identifier for the control set.
   *
   * @public
   */
  controlSetId: string | undefined;

  /**
   * The unique identifier for the folder that the evidence is stored in.
   *
   * @public
   */
  evidenceFolderId: string | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Represents the maximum number of results on a page or for an API request call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetEvidenceByEvidenceFolderResponse {
  /**
   * The list of evidence that the `GetEvidenceByEvidenceFolder` API returned.
   *
   * @public
   */
  evidence?: Evidence[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetEvidenceFileUploadUrlRequest {
  /**
   * The file that you want to upload. For a list of supported file formats, see [Supported file types for manual evidence](https://docs.aws.amazon.com/audit-manager/latest/userguide/upload-evidence.html#supported-manual-evidence-files) in the *Audit Manager User Guide*.
   *
   * @public
   */
  fileName: string | undefined;
}

/**
 * @public
 */
export interface GetEvidenceFileUploadUrlResponse {
  /**
   * The name of the uploaded manual evidence file that the presigned URL was generated for.
   *
   * @public
   */
  evidenceFileName?: string | undefined;

  /**
   * The presigned URL that was generated.
   *
   * @public
   */
  uploadUrl?: string | undefined;
}

/**
 * @public
 */
export interface GetEvidenceFolderRequest {
  /**
   * The unique identifier for the assessment.
   *
   * @public
   */
  assessmentId: string | undefined;

  /**
   * The unique identifier for the control set.
   *
   * @public
   */
  controlSetId: string | undefined;

  /**
   * The unique identifier for the folder that the evidence is stored in.
   *
   * @public
   */
  evidenceFolderId: string | undefined;
}

/**
 * @public
 */
export interface GetEvidenceFolderResponse {
  /**
   * The folder that the evidence is stored in.
   *
   * @public
   */
  evidenceFolder?: AssessmentEvidenceFolder | undefined;
}

/**
 * @public
 */
export interface GetEvidenceFoldersByAssessmentRequest {
  /**
   * The unique identifier for the assessment.
   *
   * @public
   */
  assessmentId: string | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Represents the maximum number of results on a page or for an API request call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetEvidenceFoldersByAssessmentResponse {
  /**
   * The list of evidence folders that the `GetEvidenceFoldersByAssessment` API returned.
   *
   * @public
   */
  evidenceFolders?: AssessmentEvidenceFolder[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetEvidenceFoldersByAssessmentControlRequest {
  /**
   * The identifier for the assessment.
   *
   * @public
   */
  assessmentId: string | undefined;

  /**
   * The identifier for the control set.
   *
   * @public
   */
  controlSetId: string | undefined;

  /**
   * The identifier for the control.
   *
   * @public
   */
  controlId: string | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Represents the maximum number of results on a page or for an API request call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetEvidenceFoldersByAssessmentControlResponse {
  /**
   * The list of evidence folders that the `GetEvidenceFoldersByAssessmentControl` API returned.
   *
   * @public
   */
  evidenceFolders?: AssessmentEvidenceFolder[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInsightsRequest {}

/**
 * A summary of the latest analytics data for all your active assessments.
 *
 * This summary is a snapshot of the data that your active assessments collected on the `lastUpdated` date. It’s important to understand that the following totals are daily counts based on this date — they aren’t a total sum to date.
 *
 * The `Insights` data is eventually consistent. This means that, when you read data from `Insights`, the response might not instantly reflect the results of a recently completed write or update operation. If you repeat your read request after a few hours, the response should return the latest data.
 *
 * > **Note:**
 * >
 * > If you delete an assessment or change its status to inactive, `InsightsByAssessment` includes data for that assessment as follows.
 * >
 * > - **Inactive assessments** - If Audit Manager collected evidence for your assessment before you changed it inactive, that evidence is included in the `InsightsByAssessment` counts for that day.
 * > - **Deleted assessments** - If Audit Manager collected evidence for your assessment before you deleted it, that evidence isn't included in the `InsightsByAssessment` counts for that day.
 *
 * @public
 */
export interface Insights {
  /**
   * The number of active assessments in Audit Manager.
   *
   * @public
   */
  activeAssessmentsCount?: number | undefined;

  /**
   * The number of compliance check evidence that Audit Manager classified as non-compliant on the `lastUpdated` date. This includes evidence that was collected from Security Hub CSPM with a *Fail* ruling, or collected from Config with a *Non-compliant* ruling.
   *
   * @public
   */
  noncompliantEvidenceCount?: number | undefined;

  /**
   * The number of compliance check evidence that Audit Manager classified as compliant on the `lastUpdated` date. This includes evidence that was collected from Security Hub CSPM with a *Pass* ruling, or collected from Config with a *Compliant* ruling.
   *
   * @public
   */
  compliantEvidenceCount?: number | undefined;

  /**
   * The number of evidence without a compliance check ruling. Evidence is inconclusive when the associated control uses Security Hub CSPM or Config as a data source but you didn't enable those services. This is also the case when a control uses a data source that doesn’t support compliance checks (for example: manual evidence, API calls, or CloudTrail).
   *
   * > **Note:** If evidence has a compliance check status of *not applicable*, it's classed as *inconclusive* in `Insights` data.
   *
   * @public
   */
  inconclusiveEvidenceCount?: number | undefined;

  /**
   * The number of assessment controls that collected non-compliant evidence on the `lastUpdated` date.
   *
   * @public
   */
  assessmentControlsCountByNoncompliantEvidence?: number | undefined;

  /**
   * The total number of controls across all active assessments.
   *
   * @public
   */
  totalAssessmentControlsCount?: number | undefined;

  /**
   * The time when the cross-assessment insights were last updated.
   *
   * @public
   */
  lastUpdated?: Date | undefined;
}

/**
 * @public
 */
export interface GetInsightsResponse {
  /**
   * The analytics data that the `GetInsights` API returned.
   *
   * @public
   */
  insights?: Insights | undefined;
}

/**
 * @public
 */
export interface GetInsightsByAssessmentRequest {
  /**
   * The unique identifier for the assessment.
   *
   * @public
   */
  assessmentId: string | undefined;
}

/**
 * A summary of the latest analytics data for a specific active assessment.
 *
 * This summary is a snapshot of the data that was collected on the `lastUpdated` date. It’s important to understand that the totals in `InsightsByAssessment` are daily counts based on this date — they aren’t a total sum to date.
 *
 * The `InsightsByAssessment` data is eventually consistent. This means that when you read data from `InsightsByAssessment`, the response might not instantly reflect the results of a recently completed write or update operation. If you repeat your read request after a few hours, the response returns the latest data.
 *
 * > **Note:**
 * >
 * > If you delete an assessment or change its status to inactive, `InsightsByAssessment` includes data for that assessment as follows.
 * >
 * > - **Inactive assessments** - If Audit Manager collected evidence for your assessment before you changed it inactive, that evidence is included in the `InsightsByAssessment` counts for that day.
 * > - **Deleted assessments** - If Audit Manager collected evidence for your assessment before you deleted it, that evidence isn't included in the `InsightsByAssessment` counts for that day.
 *
 * @public
 */
export interface InsightsByAssessment {
  /**
   * The number of compliance check evidence that Audit Manager classified as non-compliant. This includes evidence that was collected from Security Hub CSPM with a *Fail* ruling, or collected from Config with a *Non-compliant* ruling.
   *
   * @public
   */
  noncompliantEvidenceCount?: number | undefined;

  /**
   * The number of compliance check evidence that Audit Manager classified as compliant. This includes evidence that was collected from Security Hub CSPM with a *Pass* ruling, or collected from Config with a *Compliant* ruling.
   *
   * @public
   */
  compliantEvidenceCount?: number | undefined;

  /**
   * The amount of evidence without a compliance check ruling. Evidence is inconclusive if the associated control uses Security Hub CSPM or Config as a data source and you didn't enable those services. This is also the case if a control uses a data source that doesn’t support compliance checks (for example, manual evidence, API calls, or CloudTrail).
   *
   * > **Note:** If evidence has a compliance check status of *not applicable*, it's classified as *inconclusive* in `InsightsByAssessment` data.
   *
   * @public
   */
  inconclusiveEvidenceCount?: number | undefined;

  /**
   * The number of assessment controls that collected non-compliant evidence on the `lastUpdated` date.
   *
   * @public
   */
  assessmentControlsCountByNoncompliantEvidence?: number | undefined;

  /**
   * The total number of controls in the assessment.
   *
   * @public
   */
  totalAssessmentControlsCount?: number | undefined;

  /**
   * The time when the assessment insights were last updated.
   *
   * @public
   */
  lastUpdated?: Date | undefined;
}

/**
 * @public
 */
export interface GetInsightsByAssessmentResponse {
  /**
   * The assessment analytics data that the `GetInsightsByAssessment` API returned.
   *
   * @public
   */
  insights?: InsightsByAssessment | undefined;
}

/**
 * @public
 */
export interface GetOrganizationAdminAccountRequest {}

/**
 * @public
 */
export interface GetOrganizationAdminAccountResponse {
  /**
   * The identifier for the administrator account.
   *
   * @public
   */
  adminAccountId?: string | undefined;

  /**
   * The identifier for the organization.
   *
   * @public
   */
  organizationId?: string | undefined;
}

/**
 * @public
 */
export interface GetServicesInScopeRequest {}

/**
 * The metadata that's associated with the Amazon Web Services service.
 *
 * @public
 */
export interface ServiceMetadata {
  /**
   * The name of the Amazon Web Services service.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The display name of the Amazon Web Services service.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The description of the Amazon Web Services service.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The category that the Amazon Web Services service belongs to, such as compute, storage, or database.
   *
   * @public
   */
  category?: string | undefined;
}

/**
 * @public
 */
export interface GetServicesInScopeResponse {
  /**
   * The metadata that's associated with the Amazon Web Services service.
   *
   * @public
   */
  serviceMetadata?: ServiceMetadata[] | undefined;
}

/**
 * @public
 */
export interface GetSettingsRequest {
  /**
   * The list of setting attribute enum values.
   *
   * @public
   */
  attribute: SettingAttribute | undefined;
}

/**
 * The default s3 bucket where Audit Manager saves the files that you export from evidence finder.
 *
 * @public
 */
export interface DefaultExportDestination {
  /**
   * The destination type, such as Amazon S3.
   *
   * @public
   */
  destinationType?: ExportDestinationType | undefined;

  /**
   * The destination bucket where Audit Manager stores exported files.
   *
   * @public
   */
  destination?: string | undefined;
}

/**
 * The deregistration policy for the data that's stored in Audit Manager. You can use this attribute to determine how your data is handled when you [deregister Audit Manager](https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeregisterAccount.html).
 *
 * By default, Audit Manager retains evidence data for two years from the time of its creation. Other Audit Manager resources (including assessments, custom controls, and custom frameworks) remain in Audit Manager indefinitely, and are available if you [re-register Audit Manager](https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_RegisterAccount.html) in the future. For more information about data retention, see [Data Protection](https://docs.aws.amazon.com/audit-manager/latest/userguide/data-protection.html) in the *Audit Manager User Guide*.
 *
 * > **Important:** If you choose to delete all data, this action permanently deletes all evidence data in your account within seven days. It also deletes all of the Audit Manager resources that you created, including assessments, custom controls, and custom frameworks. Your data will not be available if you re-register Audit Manager in the future.
 *
 * @public
 */
export interface DeregistrationPolicy {
  /**
   * Specifies which Audit Manager data will be deleted when you deregister Audit Manager.
   *
   * - If you set the value to `ALL`, all of your data is deleted within seven days of deregistration.
   * - If you set the value to `DEFAULT`, none of your data is deleted at the time of deregistration. However, keep in mind that the Audit Manager data retention policy still applies. As a result, any evidence data will be deleted two years after its creation date. Your other Audit Manager resources will continue to exist indefinitely.
   *
   * @public
   */
  deleteResources?: DeleteResources | undefined;
}

/**
 * The settings object that specifies whether evidence finder is enabled. This object also describes the related event data store, and the backfill status for populating the event data store with evidence data.
 *
 * @public
 */
export interface EvidenceFinderEnablement {
  /**
   * The Amazon Resource Name (ARN) of the CloudTrail Lake event data store that’s used by evidence finder. The event data store is the lake of evidence data that evidence finder runs queries against.
   *
   * @public
   */
  eventDataStoreArn?: string | undefined;

  /**
   * The current status of the evidence finder feature and the related event data store.
   *
   * - `ENABLE_IN_PROGRESS` means that you requested to enable evidence finder. An event data store is currently being created to support evidence finder queries.
   * - `ENABLED` means that an event data store was successfully created and evidence finder is enabled. We recommend that you wait 7 days until the event data store is backfilled with your past two years’ worth of evidence data. You can use evidence finder in the meantime, but not all data might be available until the backfill is complete.
   * - `DISABLE_IN_PROGRESS` means that you requested to disable evidence finder, and your request is pending the deletion of the event data store.
   * - `DISABLED` means that you have permanently disabled evidence finder and the event data store has been deleted. You can't re-enable evidence finder after this point.
   *
   * @public
   */
  enablementStatus?: EvidenceFinderEnablementStatus | undefined;

  /**
   * The current status of the evidence data backfill process.
   *
   * The backfill starts after you enable evidence finder. During this task, Audit Manager populates an event data store with your past two years’ worth of evidence data so that your evidence can be queried.
   *
   * - `NOT_STARTED` means that the backfill hasn’t started yet.
   * - `IN_PROGRESS` means that the backfill is in progress. This can take up to 7 days to complete, depending on the amount of evidence data.
   * - `COMPLETED` means that the backfill is complete. All of your past evidence is now queryable.
   *
   * @public
   */
  backfillStatus?: EvidenceFinderBackfillStatus | undefined;

  /**
   * Represents any errors that occurred when enabling or disabling evidence finder.
   *
   * @public
   */
  error?: string | undefined;
}

/**
 * The settings object that holds all supported Audit Manager settings.
 *
 * @public
 */
export interface Settings {
  /**
   * Specifies whether Organizations is enabled.
   *
   * @public
   */
  isAwsOrgEnabled?: boolean | undefined;

  /**
   * The designated Amazon Simple Notification Service (Amazon SNS) topic.
   *
   * @public
   */
  snsTopic?: string | undefined;

  /**
   * The default S3 destination bucket for storing assessment reports.
   *
   * @public
   */
  defaultAssessmentReportsDestination?: AssessmentReportsDestination | undefined;

  /**
   * The designated default audit owners.
   *
   * @public
   */
  defaultProcessOwners?: Role[] | undefined;

  /**
   * The KMS key details.
   *
   * @public
   */
  kmsKey?: string | undefined;

  /**
   * The current evidence finder status and event data store details.
   *
   * @public
   */
  evidenceFinderEnablement?: EvidenceFinderEnablement | undefined;

  /**
   * The deregistration policy for your Audit Manager data. You can use this attribute to determine how your data is handled when you deregister Audit Manager.
   *
   * @public
   */
  deregistrationPolicy?: DeregistrationPolicy | undefined;

  /**
   * The default S3 destination bucket for storing evidence finder exports.
   *
   * @public
   */
  defaultExportDestination?: DefaultExportDestination | undefined;
}

/**
 * @public
 */
export interface GetSettingsResponse {
  /**
   * The settings object that holds all supported Audit Manager settings.
   *
   * @public
   */
  settings?: Settings | undefined;
}

/**
 * @public
 */
export interface ListAssessmentControlInsightsByControlDomainRequest {
  /**
   * The unique identifier for the control domain.
   *
   * Audit Manager supports the control domains that are provided by Amazon Web Services Control Catalog. For information about how to find a list of available control domains, see [`ListDomains`](https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_ListDomains.html) in the Amazon Web Services Control Catalog API Reference.
   *
   * @public
   */
  controlDomainId: string | undefined;

  /**
   * The unique identifier for the active assessment.
   *
   * @public
   */
  assessmentId: string | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Represents the maximum number of results on a page or for an API request call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A breakdown of the latest compliance check status for the evidence in your Audit Manager assessments.
 *
 * @public
 */
export interface EvidenceInsights {
  /**
   * The number of compliance check evidence that Audit Manager classified as non-compliant. This includes evidence that was collected from Security Hub CSPM with a *Fail* ruling, or collected from Config with a *Non-compliant* ruling.
   *
   * @public
   */
  noncompliantEvidenceCount?: number | undefined;

  /**
   * The number of compliance check evidence that Audit Manager classified as compliant. This includes evidence that was collected from Security Hub CSPM with a *Pass* ruling, or collected from Config with a *Compliant* ruling.
   *
   * @public
   */
  compliantEvidenceCount?: number | undefined;

  /**
   * The number of evidence that a compliance check ruling isn't available for. Evidence is inconclusive when the associated control uses Security Hub CSPM or Config as a data source but you didn't enable those services. This is also the case when a control uses a data source that doesn’t support compliance checks (for example, manual evidence, API calls, or CloudTrail).
   *
   * > **Note:** If evidence has a compliance check status of *not applicable* in the console, it's classified as *inconclusive* in `EvidenceInsights` data.
   *
   * @public
   */
  inconclusiveEvidenceCount?: number | undefined;
}

/**
 * A summary of the latest analytics data for a specific control in a specific active assessment.
 *
 * Control insights are grouped by control domain, and ranked by the highest total count of non-compliant evidence.
 *
 * @public
 */
export interface ControlInsightsMetadataByAssessmentItem {
  /**
   * The name of the assessment control.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The unique identifier for the assessment control.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * A breakdown of the compliance check status for the evidence that’s associated with the assessment control.
   *
   * @public
   */
  evidenceInsights?: EvidenceInsights | undefined;

  /**
   * The name of the control set that the assessment control belongs to.
   *
   * @public
   */
  controlSetName?: string | undefined;

  /**
   * The time when the assessment control insights were last updated.
   *
   * @public
   */
  lastUpdated?: Date | undefined;
}

/**
 * @public
 */
export interface ListAssessmentControlInsightsByControlDomainResponse {
  /**
   * The assessment control analytics data that the `ListAssessmentControlInsightsByControlDomain` API returned.
   *
   * @public
   */
  controlInsightsByAssessment?: ControlInsightsMetadataByAssessmentItem[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssessmentFrameworksRequest {
  /**
   * The type of framework, such as a standard framework or a custom framework.
   *
   * @public
   */
  frameworkType: FrameworkType | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Represents the maximum number of results on a page or for an API request call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssessmentFrameworksResponse {
  /**
   * A list of metadata that the `ListAssessmentFrameworks` API returns for each framework.
   *
   * @public
   */
  frameworkMetadataList?: AssessmentFrameworkMetadata[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssessmentFrameworkShareRequestsRequest {
  /**
   * Specifies whether the share request is a sent request or a received request.
   *
   * @public
   */
  requestType: ShareRequestType | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Represents the maximum number of results on a page or for an API request call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssessmentFrameworkShareRequestsResponse {
  /**
   * The list of share requests that the `ListAssessmentFrameworkShareRequests` API returned.
   *
   * @public
   */
  assessmentFrameworkShareRequests?: AssessmentFrameworkShareRequest[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssessmentReportsRequest {
  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Represents the maximum number of results on a page or for an API request call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssessmentReportsResponse {
  /**
   * The list of assessment reports that the `ListAssessmentReports` API returned.
   *
   * @public
   */
  assessmentReports?: AssessmentReportMetadata[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssessmentsRequest {
  /**
   * The current status of the assessment.
   *
   * @public
   */
  status?: AssessmentStatus | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Represents the maximum number of results on a page or for an API request call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssessmentsResponse {
  /**
   * The metadata that the `ListAssessments` API returns for each assessment.
   *
   * @public
   */
  assessmentMetadata?: AssessmentMetadataItem[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListControlDomainInsightsRequest {
  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Represents the maximum number of results on a page or for an API request call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A summary of the latest analytics data for a specific control domain.
 *
 * Control domain insights are grouped by control domain, and ranked by the highest total count of non-compliant evidence.
 *
 * @public
 */
export interface ControlDomainInsights {
  /**
   * The name of the control domain.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The unique identifier for the control domain. Audit Manager supports the control domains that are provided by Amazon Web Services Control Catalog. For information about how to find a list of available control domains, see [`ListDomains`](https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_ListDomains.html) in the Amazon Web Services Control Catalog API Reference.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The number of controls in the control domain that collected non-compliant evidence on the `lastUpdated` date.
   *
   * @public
   */
  controlsCountByNoncompliantEvidence?: number | undefined;

  /**
   * The total number of controls in the control domain.
   *
   * @public
   */
  totalControlsCount?: number | undefined;

  /**
   * A breakdown of the compliance check status for the evidence that’s associated with the control domain.
   *
   * @public
   */
  evidenceInsights?: EvidenceInsights | undefined;

  /**
   * The time when the control domain insights were last updated.
   *
   * @public
   */
  lastUpdated?: Date | undefined;
}

/**
 * @public
 */
export interface ListControlDomainInsightsResponse {
  /**
   * The control domain analytics data that the `ListControlDomainInsights` API returned.
   *
   * @public
   */
  controlDomainInsights?: ControlDomainInsights[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListControlDomainInsightsByAssessmentRequest {
  /**
   * The unique identifier for the active assessment.
   *
   * @public
   */
  assessmentId: string | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Represents the maximum number of results on a page or for an API request call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListControlDomainInsightsByAssessmentResponse {
  /**
   * The control domain analytics data that the `ListControlDomainInsightsByAssessment` API returned.
   *
   * @public
   */
  controlDomainInsights?: ControlDomainInsights[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListControlInsightsByControlDomainRequest {
  /**
   * The unique identifier for the control domain.
   *
   * Audit Manager supports the control domains that are provided by Amazon Web Services Control Catalog. For information about how to find a list of available control domains, see [`ListDomains`](https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_ListDomains.html) in the Amazon Web Services Control Catalog API Reference.
   *
   * @public
   */
  controlDomainId: string | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Represents the maximum number of results on a page or for an API request call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A summary of the latest analytics data for a specific control.
 *
 * This data reflects the total counts for the specified control across all active assessments. Control insights are grouped by control domain, and ranked by the highest total count of non-compliant evidence.
 *
 * @public
 */
export interface ControlInsightsMetadataItem {
  /**
   * The name of the control.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The unique identifier for the control.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * A breakdown of the compliance check status for the evidence that’s associated with the control.
   *
   * @public
   */
  evidenceInsights?: EvidenceInsights | undefined;

  /**
   * The time when the control insights were last updated.
   *
   * @public
   */
  lastUpdated?: Date | undefined;
}

/**
 * @public
 */
export interface ListControlInsightsByControlDomainResponse {
  /**
   * The control analytics data that the `ListControlInsightsByControlDomain` API returned.
   *
   * @public
   */
  controlInsightsMetadata?: ControlInsightsMetadataItem[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListControlsRequest {
  /**
   * A filter that narrows the list of controls to a specific type.
   *
   * @public
   */
  controlType: ControlType | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results on a page or for an API request call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A filter that narrows the list of controls to a specific resource from the Amazon Web Services Control Catalog.
   *
   * To use this parameter, specify the ARN of the Control Catalog resource. You can specify either a control domain, a control objective, or a common control. For information about how to find the ARNs for these resources, see [`ListDomains`](https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_ListDomains.html), [`ListObjectives`](https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_ListObjectives.html), and [`ListCommonControls`](https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_ListCommonControls.html).
   *
   * > **Note:** You can only filter by one Control Catalog resource at a time. Specifying multiple resource ARNs isn’t currently supported. If you want to filter by more than one ARN, we recommend that you run the `ListControls` operation separately for each ARN.
   *
   * Alternatively, specify `UNCATEGORIZED` to list controls that aren't mapped to a Control Catalog resource. For example, this operation might return a list of custom controls that don't belong to any control domain or control objective.
   *
   * @public
   */
  controlCatalogId?: string | undefined;
}

/**
 * The metadata that's associated with the standard control or custom control.
 *
 * @public
 */
export interface ControlMetadata {
  /**
   * The Amazon Resource Name (ARN) of the control.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The unique identifier for the control.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the control.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The data source that determines where Audit Manager collects evidence from for the control.
   *
   * @public
   */
  controlSources?: string | undefined;

  /**
   * The time when the control was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The time when the control was most recently updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListControlsResponse {
  /**
   * A list of metadata that the `ListControls` API returns for each control.
   *
   * @public
   */
  controlMetadataList?: ControlMetadata[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListKeywordsForDataSourceRequest {
  /**
   * The control mapping data source that the keywords apply to.
   *
   * @public
   */
  source: DataSourceType | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Represents the maximum number of results on a page or for an API request call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListKeywordsForDataSourceResponse {
  /**
   * The list of keywords for the control mapping source.
   *
   * @public
   */
  keywords?: string[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNotificationsRequest {
  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Represents the maximum number of results on a page or for an API request call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The notification that informs a user of an update in Audit Manager. For example, this includes the notification that's sent when a control set is delegated for review.
 *
 * @public
 */
export interface Notification {
  /**
   * The unique identifier for the notification.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The identifier for the assessment.
   *
   * @public
   */
  assessmentId?: string | undefined;

  /**
   * The name of the related assessment.
   *
   * @public
   */
  assessmentName?: string | undefined;

  /**
   * The identifier for the control set.
   *
   * @public
   */
  controlSetId?: string | undefined;

  /**
   * Specifies the name of the control set that the notification is about.
   *
   * @public
   */
  controlSetName?: string | undefined;

  /**
   * The description of the notification.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The time when the notification was sent.
   *
   * @public
   */
  eventTime?: Date | undefined;

  /**
   * The sender of the notification.
   *
   * @public
   */
  source?: string | undefined;
}

/**
 * @public
 */
export interface ListNotificationsResponse {
  /**
   * The returned list of notifications.
   *
   * @public
   */
  notifications?: Notification[] | undefined;

  /**
   * The pagination token that's used to fetch the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The list of tags that the `ListTagsForResource` API returned.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RegisterAccountRequest {
  /**
   * The KMS key details.
   *
   * @public
   */
  kmsKey?: string | undefined;

  /**
   * The delegated administrator account for Audit Manager.
   *
   * @public
   */
  delegatedAdminAccount?: string | undefined;
}

/**
 * @public
 */
export interface RegisterAccountResponse {
  /**
   * The status of the account registration request.
   *
   * @public
   */
  status?: AccountStatus | undefined;
}

/**
 * @public
 */
export interface RegisterOrganizationAdminAccountRequest {
  /**
   * The identifier for the delegated administrator account.
   *
   * @public
   */
  adminAccountId: string | undefined;
}

/**
 * @public
 */
export interface RegisterOrganizationAdminAccountResponse {
  /**
   * The identifier for the delegated administrator account.
   *
   * @public
   */
  adminAccountId?: string | undefined;

  /**
   * The identifier for the organization.
   *
   * @public
   */
  organizationId?: string | undefined;
}

/**
 * @public
 */
export interface StartAssessmentFrameworkShareRequest {
  /**
   * The unique identifier for the custom framework to be shared.
   *
   * @public
   */
  frameworkId: string | undefined;

  /**
   * The Amazon Web Services account of the recipient.
   *
   * @public
   */
  destinationAccount: string | undefined;

  /**
   * The Amazon Web Services Region of the recipient.
   *
   * @public
   */
  destinationRegion: string | undefined;

  /**
   * An optional comment from the sender about the share request.
   *
   * @public
   */
  comment?: string | undefined;
}

/**
 * @public
 */
export interface StartAssessmentFrameworkShareResponse {
  /**
   * The share request that's created by the `StartAssessmentFrameworkShare` API.
   *
   * @public
   */
  assessmentFrameworkShareRequest?: AssessmentFrameworkShareRequest | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags that are associated with the resource.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the specified resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The name or key of the tag.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateAssessmentRequest {
  /**
   * The unique identifier for the assessment.
   *
   * @public
   */
  assessmentId: string | undefined;

  /**
   * The name of the assessment to be updated.
   *
   * @public
   */
  assessmentName?: string | undefined;

  /**
   * The description of the assessment.
   *
   * @public
   */
  assessmentDescription?: string | undefined;

  /**
   * The scope of the assessment.
   *
   * @public
   */
  scope: Scope | undefined;

  /**
   * The assessment report storage destination for the assessment that's being updated.
   *
   * @public
   */
  assessmentReportsDestination?: AssessmentReportsDestination | undefined;

  /**
   * The list of roles for the assessment.
   *
   * @public
   */
  roles?: Role[] | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentResponse {
  /**
   * The response object for the `UpdateAssessment` API. This is the name of the updated assessment.
   *
   * @public
   */
  assessment?: Assessment | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentControlRequest {
  /**
   * The unique identifier for the assessment.
   *
   * @public
   */
  assessmentId: string | undefined;

  /**
   * The unique identifier for the control set.
   *
   * @public
   */
  controlSetId: string | undefined;

  /**
   * The unique identifier for the control.
   *
   * @public
   */
  controlId: string | undefined;

  /**
   * The status of the control.
   *
   * @public
   */
  controlStatus?: ControlStatus | undefined;

  /**
   * The comment body text for the control.
   *
   * @public
   */
  commentBody?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentControlResponse {
  /**
   * The name of the updated control set that the `UpdateAssessmentControl` API returned.
   *
   * @public
   */
  control?: AssessmentControl | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentControlSetStatusRequest {
  /**
   * The unique identifier for the assessment.
   *
   * @public
   */
  assessmentId: string | undefined;

  /**
   * The unique identifier for the control set.
   *
   * @public
   */
  controlSetId: string | undefined;

  /**
   * The status of the control set that's being updated.
   *
   * @public
   */
  status: ControlSetStatus | undefined;

  /**
   * The comment that's related to the status update.
   *
   * @public
   */
  comment: string | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentControlSetStatusResponse {
  /**
   * The name of the updated control set that the `UpdateAssessmentControlSetStatus` API returned.
   *
   * @public
   */
  controlSet?: AssessmentControlSet | undefined;
}

/**
 * A `controlSet` entity that represents a collection of controls in Audit Manager. This doesn't contain the control set ID.
 *
 * @public
 */
export interface UpdateAssessmentFrameworkControlSet {
  /**
   * The unique identifier for the control set.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the control set.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The list of controls that are contained within the control set.
   *
   * @public
   */
  controls: CreateAssessmentFrameworkControl[] | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentFrameworkRequest {
  /**
   * The unique identifier for the framework.
   *
   * @public
   */
  frameworkId: string | undefined;

  /**
   * The name of the framework to be updated.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the updated framework.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The compliance type that the new custom framework supports, such as CIS or HIPAA.
   *
   * @public
   */
  complianceType?: string | undefined;

  /**
   * The control sets that are associated with the framework.
   *
   * > **Note:** The `Controls` object returns a partial response when called through Framework APIs. For a complete `Controls` object, use `GetControl`.
   *
   * @public
   */
  controlSets: UpdateAssessmentFrameworkControlSet[] | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentFrameworkResponse {
  /**
   * The framework object.
   *
   * @public
   */
  framework?: Framework | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentFrameworkShareRequest {
  /**
   * The unique identifier for the share request.
   *
   * @public
   */
  requestId: string | undefined;

  /**
   * Specifies whether the share request is a sent request or a received request.
   *
   * @public
   */
  requestType: ShareRequestType | undefined;

  /**
   * Specifies the update action for the share request.
   *
   * @public
   */
  action: ShareRequestAction | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentFrameworkShareResponse {
  /**
   * The updated share request that's returned by the `UpdateAssessmentFrameworkShare` operation.
   *
   * @public
   */
  assessmentFrameworkShareRequest?: AssessmentFrameworkShareRequest | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentStatusRequest {
  /**
   * The unique identifier for the assessment.
   *
   * @public
   */
  assessmentId: string | undefined;

  /**
   * The current status of the assessment.
   *
   * @public
   */
  status: AssessmentStatus | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentStatusResponse {
  /**
   * The name of the updated assessment that the `UpdateAssessmentStatus` API returned.
   *
   * @public
   */
  assessment?: Assessment | undefined;
}

/**
 * @public
 */
export interface UpdateControlRequest {
  /**
   * The identifier for the control.
   *
   * @public
   */
  controlId: string | undefined;

  /**
   * The name of the updated control.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The optional description of the control.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The steps that you should follow to determine if the control is met.
   *
   * @public
   */
  testingInformation?: string | undefined;

  /**
   * The title of the action plan for remediating the control.
   *
   * @public
   */
  actionPlanTitle?: string | undefined;

  /**
   * The recommended actions to carry out if the control isn't fulfilled.
   *
   * @public
   */
  actionPlanInstructions?: string | undefined;

  /**
   * The data mapping sources for the control.
   *
   * @public
   */
  controlMappingSources: ControlMappingSource[] | undefined;
}

/**
 * @public
 */
export interface UpdateControlResponse {
  /**
   * The name of the updated control set that the `UpdateControl` API returned.
   *
   * @public
   */
  control?: Control | undefined;
}

/**
 * @public
 */
export interface UpdateSettingsRequest {
  /**
   * The Amazon Simple Notification Service (Amazon SNS) topic that Audit Manager sends notifications to.
   *
   * @public
   */
  snsTopic?: string | undefined;

  /**
   * The default S3 destination bucket for storing assessment reports.
   *
   * @public
   */
  defaultAssessmentReportsDestination?: AssessmentReportsDestination | undefined;

  /**
   * A list of the default audit owners.
   *
   * @public
   */
  defaultProcessOwners?: Role[] | undefined;

  /**
   * The KMS key details.
   *
   * @public
   */
  kmsKey?: string | undefined;

  /**
   * Specifies whether the evidence finder feature is enabled. Change this attribute to enable or disable evidence finder.
   *
   * > **Important:** When you use this attribute to disable evidence finder, Audit Manager deletes the event data store that’s used to query your evidence data. As a result, you can’t re-enable evidence finder and use the feature again. Your only alternative is to [deregister](https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeregisterAccount.html) and then [re-register](https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_RegisterAccount.html) Audit Manager.
   *
   * @public
   */
  evidenceFinderEnabled?: boolean | undefined;

  /**
   * The deregistration policy for your Audit Manager data. You can use this attribute to determine how your data is handled when you deregister Audit Manager.
   *
   * @public
   */
  deregistrationPolicy?: DeregistrationPolicy | undefined;

  /**
   * The default S3 destination bucket for storing evidence finder exports.
   *
   * @public
   */
  defaultExportDestination?: DefaultExportDestination | undefined;
}

/**
 * @public
 */
export interface UpdateSettingsResponse {
  /**
   * The current list of settings.
   *
   * @public
   */
  settings?: Settings | undefined;
}

/**
 * @public
 */
export interface ValidateAssessmentReportIntegrityRequest {
  /**
   * The relative path of the Amazon S3 bucket that the assessment report is stored in.
   *
   * @public
   */
  s3RelativePath: string | undefined;
}

/**
 * @public
 */
export interface ValidateAssessmentReportIntegrityResponse {
  /**
   * Specifies whether the signature key is valid.
   *
   * @public
   */
  signatureValid?: boolean | undefined;

  /**
   * The signature algorithm that's used to code sign the assessment report file.
   *
   * @public
   */
  signatureAlgorithm?: string | undefined;

  /**
   * The date and time signature that specifies when the assessment report was created.
   *
   * @public
   */
  signatureDateTime?: string | undefined;

  /**
   * The unique identifier for the validation signature key.
   *
   * @public
   */
  signatureKeyId?: string | undefined;

  /**
   * Represents any errors that occurred when validating the assessment report.
   *
   * @public
   */
  validationErrors?: string[] | undefined;
}
