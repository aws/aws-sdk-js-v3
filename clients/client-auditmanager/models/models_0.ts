import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>
 *    You do not have sufficient access to perform this action.
 * </p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message: string | undefined;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export enum AccountStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  PENDING_ACTIVATION = "PENDING_ACTIVATION",
}

export enum ActionEnum {
  ACTIVE = "ACTIVE",
  CREATE = "CREATE",
  DELETE = "DELETE",
  IMPORT_EVIDENCE = "IMPORT_EVIDENCE",
  INACTIVE = "INACTIVE",
  REVIEWED = "REVIEWED",
  UNDER_REVIEW = "UNDER_REVIEW",
  UPDATE_METADATA = "UPDATE_METADATA",
}

/**
 * <p>
 *    The wrapper of AWS account details, such as account ID, email address, and so on.
 * </p>
 */
export interface AWSAccount {
  /**
   * <p>
   *    The identifier for the specified AWS account.
   * </p>
   */
  id?: string;

  /**
   * <p>
   *    The email address associated with the specified AWS account.
   * </p>
   */
  emailAddress?: string;

  /**
   * <p>
   *    The name of the specified AWS account.
   * </p>
   */
  name?: string;
}

export namespace AWSAccount {
  export const filterSensitiveLog = (obj: AWSAccount): any => ({
    ...obj,
  });
}

/**
 * <p>
 *    A comment posted by a user on a control. This includes the author's name, the comment text, and a timestamp.
 * </p>
 */
export interface ControlComment {
  /**
   * <p>
   *  The name of the user who authored the comment.
   * </p>
   */
  authorName?: string;

  /**
   * <p>
   *    The body text of a control comment.
   * </p>
   */
  commentBody?: string;

  /**
   * <p>
   *  The time when the comment was posted.
   * </p>
   */
  postedDate?: Date;
}

export namespace ControlComment {
  export const filterSensitiveLog = (obj: ControlComment): any => ({
    ...obj,
  });
}

export enum ControlResponse {
  AUTOMATE = "AUTOMATE",
  DEFER = "DEFER",
  IGNORE = "IGNORE",
  MANUAL = "MANUAL",
}

export enum ControlStatus {
  INACTIVE = "INACTIVE",
  REVIEWED = "REVIEWED",
  UNDER_REVIEW = "UNDER_REVIEW",
}

/**
 * <p>
 *    The control entity that represents a standard or custom control used in an AWS Audit Manager assessment.
 * </p>
 */
export interface AssessmentControl {
  /**
   * <p>
   *    The identifier for the specified control.
   * </p>
   */
  id?: string;

  /**
   * <p>
   *    The name of the specified control.
   * </p>
   */
  name?: string;

  /**
   * <p>
   *    The description of the specified control.
   * </p>
   */
  description?: string;

  /**
   * <p>
   *    The status of the specified control.
   * </p>
   */
  status?: ControlStatus | string;

  /**
   * <p>
   *    The response of the specified control.
   * </p>
   */
  response?: ControlResponse | string;

  /**
   * <p>
   *    The list of comments attached to the specified control.
   * </p>
   */
  comments?: ControlComment[];

  /**
   * <p>
   *    The list of data sources for the specified evidence.
   * </p>
   */
  evidenceSources?: string[];

  /**
   * <p>
   *    The amount of evidence generated for the control.
   * </p>
   */
  evidenceCount?: number;

  /**
   * <p>
   *    The amount of evidence in the assessment report.
   * </p>
   */
  assessmentReportEvidenceCount?: number;
}

export namespace AssessmentControl {
  export const filterSensitiveLog = (obj: AssessmentControl): any => ({
    ...obj,
  });
}

export enum RoleType {
  PROCESS_OWNER = "PROCESS_OWNER",
  RESOURCE_OWNER = "RESOURCE_OWNER",
}

export enum DelegationStatus {
  COMPLETE = "COMPLETE",
  IN_PROGRESS = "IN_PROGRESS",
  UNDER_REVIEW = "UNDER_REVIEW",
}

/**
 * <p>
 *    The assignment of a control set to a delegate for review.
 * </p>
 */
export interface Delegation {
  /**
   * <p>
   *  The unique identifier for the delegation.
   * </p>
   */
  id?: string;

  /**
   * <p>
   *  The name of the associated assessment.
   * </p>
   */
  assessmentName?: string;

  /**
   * <p>
   *    The identifier for the associated assessment.
   * </p>
   */
  assessmentId?: string;

  /**
   * <p>
   *  The status of the delegation.
   * </p>
   */
  status?: DelegationStatus | string;

  /**
   * <p>
   *    The Amazon Resource Name (ARN) of the IAM role.
   * </p>
   */
  roleArn?: string;

  /**
   * <p>
   *    The type of customer persona.
   * </p>
   *          <note>
   *             <p>In <code>CreateAssessment</code>, <code>roleType</code> can only be <code>PROCESS_OWNER</code>. </p>
   *             <p>In <code>UpdateSettings</code>, <code>roleType</code> can only be <code>PROCESS_OWNER</code>.</p>
   *             <p>In <code>BatchCreateDelegationByAssessment</code>, <code>roleType</code> can only be <code>RESOURCE_OWNER</code>.</p>
   *          </note>
   */
  roleType?: RoleType | string;

  /**
   * <p> Specifies when the delegation was created. </p>
   */
  creationTime?: Date;

  /**
   * <p>
   *  Specifies when the delegation was last updated.
   * </p>
   */
  lastUpdated?: Date;

  /**
   * <p>
   *    The identifier for the associated control set.
   * </p>
   */
  controlSetId?: string;

  /**
   * <p>
   *  The comment related to the delegation.
   * </p>
   */
  comment?: string;

  /**
   * <p> The IAM user or role that created the delegation. </p>
   */
  createdBy?: string;
}

export namespace Delegation {
  export const filterSensitiveLog = (obj: Delegation): any => ({
    ...obj,
  });
}

/**
 * <p>
 *      The wrapper that contains AWS Audit Manager role information, such as the role type and IAM Amazon Resource Name (ARN).
 *   </p>
 */
export interface Role {
  /**
   * <p>
   *    The type of customer persona.
   * </p>
   *          <note>
   *             <p>In <code>CreateAssessment</code>, <code>roleType</code> can only be <code>PROCESS_OWNER</code>. </p>
   *             <p>In <code>UpdateSettings</code>, <code>roleType</code> can only be <code>PROCESS_OWNER</code>.</p>
   *             <p>In <code>BatchCreateDelegationByAssessment</code>, <code>roleType</code> can only be <code>RESOURCE_OWNER</code>.</p>
   *          </note>
   */
  roleType?: RoleType | string;

  /**
   * <p>
   *    The Amazon Resource Name (ARN) of the IAM role.
   * </p>
   */
  roleArn?: string;
}

export namespace Role {
  export const filterSensitiveLog = (obj: Role): any => ({
    ...obj,
  });
}

export enum ControlSetStatus {
  ACTIVE = "ACTIVE",
  REVIEWED = "REVIEWED",
  UNDER_REVIEW = "UNDER_REVIEW",
}

/**
 * <p>
 * Represents a set of controls in an AWS Audit Manager assessment.
 * </p>
 */
export interface AssessmentControlSet {
  /**
   * <p>
   *    The identifier of the control set in the assessment. This is the control set name in a plain string format.
   * </p>
   */
  id?: string;

  /**
   * <p>
   *    The description for the control set.
   * </p>
   */
  description?: string;

  /**
   * <p>
   * Specifies the current status of the control set.
   * </p>
   */
  status?: ControlSetStatus | string;

  /**
   * <p>
   *    The roles associated with the control set.
   * </p>
   */
  roles?: Role[];

  /**
   * <p>
   * The list of controls contained with the control set.
   * </p>
   */
  controls?: AssessmentControl[];

  /**
   * <p>
   *    The delegations associated with the control set.
   * </p>
   */
  delegations?: Delegation[];

  /**
   * <p>
   *    The total number of evidence objects retrieved automatically for the control set.
   * </p>
   */
  systemEvidenceCount?: number;

  /**
   * <p>
   *    The total number of evidence objects uploaded manually to the control set.
   * </p>
   */
  manualEvidenceCount?: number;
}

export namespace AssessmentControlSet {
  export const filterSensitiveLog = (obj: AssessmentControlSet): any => ({
    ...obj,
  });
}

/**
 * <p>
 *    The metadata of a framework, such as the name, ID, description, and so on.
 * </p>
 */
export interface FrameworkMetadata {
  /**
   * <p>
   *    The name of the framework.
   * </p>
   */
  name?: string;

  /**
   * <p>
   *    The description of the framework.
   * </p>
   */
  description?: string;

  /**
   * <p>
   *    The logo associated with the framework.
   * </p>
   */
  logo?: string;

  /**
   * <p>
   *          The compliance standard associated with the framework, such as PCI-DSS or HIPAA.
   *       </p>
   */
  complianceType?: string;
}

export namespace FrameworkMetadata {
  export const filterSensitiveLog = (obj: FrameworkMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>
 *    The file used to structure and automate AWS Audit Manager assessments for a given compliance standard.
 * </p>
 */
export interface AssessmentFramework {
  /**
   * <p>
   * The unique identifier for the framework.
   * </p>
   */
  id?: string;

  /**
   * <p>
   *    The Amazon Resource Name (ARN) of the specified framework.
   * </p>
   */
  arn?: string;

  /**
   * <p>
   *    The metadata of a framework, such as the name, ID, description, and so on.
   * </p>
   */
  metadata?: FrameworkMetadata;

  /**
   * <p>
   *    The control sets associated with the framework.
   * </p>
   */
  controlSets?: AssessmentControlSet[];
}

export namespace AssessmentFramework {
  export const filterSensitiveLog = (obj: AssessmentFramework): any => ({
    ...obj,
  });
}

export enum AssessmentReportDestinationType {
  S3 = "S3",
}

/**
 * <p>
 *    The location in which AWS Audit Manager saves assessment reports for the given assessment.
 * </p>
 */
export interface AssessmentReportsDestination {
  /**
   * <p>
   *    The destination type, such as Amazon S3.
   * </p>
   */
  destinationType?: AssessmentReportDestinationType | string;

  /**
   * <p>
   *    The destination of the assessment report.
   * </p>
   */
  destination?: string;
}

export namespace AssessmentReportsDestination {
  export const filterSensitiveLog = (obj: AssessmentReportsDestination): any => ({
    ...obj,
  });
}

/**
 * <p>
 *    An AWS service such as Amazon S3, AWS CloudTrail, and so on.
 * </p>
 */
export interface AWSService {
  /**
   * <p>
   *    The name of the AWS service.
   * </p>
   */
  serviceName?: string;
}

export namespace AWSService {
  export const filterSensitiveLog = (obj: AWSService): any => ({
    ...obj,
  });
}

/**
 * <p>
 *    The wrapper that contains the AWS accounts and AWS services in scope for the assessment.
 * </p>
 */
export interface Scope {
  /**
   * <p>
   *  The AWS accounts included in the scope of the assessment.
   * </p>
   */
  awsAccounts?: AWSAccount[];

  /**
   * <p>
   *  The AWS services included in the scope of the assessment.
   * </p>
   */
  awsServices?: AWSService[];
}

export namespace Scope {
  export const filterSensitiveLog = (obj: Scope): any => ({
    ...obj,
  });
}

export enum AssessmentStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

/**
 * <p>
 *    The metadata associated with the specified assessment.
 * </p>
 */
export interface AssessmentMetadata {
  /**
   * <p>
   *    The name of the assessment.
   * </p>
   */
  name?: string;

  /**
   * <p>
   *    The unique identifier for the assessment.
   * </p>
   */
  id?: string;

  /**
   * <p>
   *    The description of the assessment.
   * </p>
   */
  description?: string;

  /**
   * <p>
   *          The name of a compliance standard related to the assessment, such as PCI-DSS.
   *       </p>
   */
  complianceType?: string;

  /**
   * <p>
   *    The overall status of the assessment.
   * </p>
   */
  status?: AssessmentStatus | string;

  /**
   * <p>
   *    The destination in which evidence reports are stored for the specified assessment.
   * </p>
   */
  assessmentReportsDestination?: AssessmentReportsDestination;

  /**
   * <p>
   *    The wrapper of AWS accounts and services in scope for the assessment.
   * </p>
   */
  scope?: Scope;

  /**
   * <p>
   *    The roles associated with the assessment.
   * </p>
   */
  roles?: Role[];

  /**
   * <p>
   *    The delegations associated with the assessment.
   * </p>
   */
  delegations?: Delegation[];

  /**
   * <p>
   *    Specifies when the assessment was created.
   * </p>
   */
  creationTime?: Date;

  /**
   * <p>
   *    The time of the most recent update.
   * </p>
   */
  lastUpdated?: Date;
}

export namespace AssessmentMetadata {
  export const filterSensitiveLog = (obj: AssessmentMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>
 *    An entity that defines the scope of audit evidence collected by AWS Audit Manager. An AWS Audit Manager assessment is an implementation of an AWS Audit Manager framework.
 * </p>
 */
export interface Assessment {
  /**
   * <p>
   *    The Amazon Resource Name (ARN) of the assessment.
   * </p>
   */
  arn?: string;

  /**
   * <p>
   *  The AWS account associated with the assessment.
   * </p>
   */
  awsAccount?: AWSAccount;

  /**
   * <p>
   *  The metadata for the specified assessment.
   * </p>
   */
  metadata?: AssessmentMetadata;

  /**
   * <p>
   *    The framework from which the assessment was created.
   * </p>
   */
  framework?: AssessmentFramework;

  /**
   * <p>
   *  The tags associated with the assessment.
   * </p>
   */
  tags?: { [key: string]: string };
}

export namespace Assessment {
  export const filterSensitiveLog = (obj: Assessment): any => ({
    ...obj,
  });
}

/**
 * <p>
 * The folder in which AWS Audit Manager stores evidence for an assessment.
 * </p>
 */
export interface AssessmentEvidenceFolder {
  /**
   * <p>
   * The name of the specified evidence folder.
   * </p>
   */
  name?: string;

  /**
   * <p>
   *          The date when the first evidence was added to the evidence folder.
   *       </p>
   */
  date?: Date;

  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId?: string;

  /**
   * <p>
   *    The identifier for the control set.
   * </p>
   */
  controlSetId?: string;

  /**
   * <p>
   *
   *    The unique identifier for the specified control.
   * </p>
   */
  controlId?: string;

  /**
   * <p>
   * The identifier for the folder in which evidence is stored.
   * </p>
   */
  id?: string;

  /**
   * <p>
   *    The AWS service from which the evidence was collected.
   * </p>
   */
  dataSource?: string;

  /**
   * <p>
   *    The name of the user who created the evidence folder.
   * </p>
   */
  author?: string;

  /**
   * <p>
   *          The total amount of evidence in the evidence folder.
   *       </p>
   */
  totalEvidence?: number;

  /**
   * <p>
   *          The total count of evidence included in the assessment report.
   *       </p>
   */
  assessmentReportSelectionCount?: number;

  /**
   * <p>
   *          The name of the control.
   *       </p>
   */
  controlName?: string;

  /**
   * <p>
   *          The amount of evidence included in the evidence folder.
   *       </p>
   */
  evidenceResourcesIncludedCount?: number;

  /**
   * <p>
   *          The number of evidence that falls under the configuration data category. This evidence is collected from configuration snapshots of other AWS services such as Amazon EC2, Amazon S3, or IAM.
   *       </p>
   */
  evidenceByTypeConfigurationDataCount?: number;

  /**
   * <p>
   *          The number of evidence that falls under the manual category. This evidence is imported manually.
   *       </p>
   */
  evidenceByTypeManualCount?: number;

  /**
   * <p>
   *          The number of evidence that falls under the compliance check category. This evidence is collected from AWS Config or AWS Security Hub.
   *       </p>
   */
  evidenceByTypeComplianceCheckCount?: number;

  /**
   * <p>
   *          The total number of issues that were reported directly from AWS Security
   *          Hub, AWS Config, or both.
   *       </p>
   */
  evidenceByTypeComplianceCheckIssuesCount?: number;

  /**
   * <p>
   *          The number of evidence that falls under the user activity category. This evidence is collected from AWS CloudTrail logs.
   *       </p>
   */
  evidenceByTypeUserActivityCount?: number;

  /**
   * <p>
   *    The total number of AWS resources assessed to generate the evidence.
   * </p>
   */
  evidenceAwsServiceSourceCount?: number;
}

export namespace AssessmentEvidenceFolder {
  export const filterSensitiveLog = (obj: AssessmentEvidenceFolder): any => ({
    ...obj,
  });
}

export enum FrameworkType {
  CUSTOM = "Custom",
  STANDARD = "Standard",
}

/**
 * <p>
 *    The metadata associated with a standard or custom framework.
 * </p>
 */
export interface AssessmentFrameworkMetadata {
  /**
   * <p>
   * The unique identified for the specified framework.
   * </p>
   */
  id?: string;

  /**
   * <p>
   * The framework type, such as standard or custom.
   * </p>
   */
  type?: FrameworkType | string;

  /**
   * <p>
   * The name of the specified framework.
   * </p>
   */
  name?: string;

  /**
   * <p>
   *    The description of the specified framework.
   * </p>
   */
  description?: string;

  /**
   * <p>
   *    The logo associated with the framework.
   * </p>
   */
  logo?: string;

  /**
   * <p>
   *    The compliance type that the new custom framework supports, such as CIS or HIPAA.
   * </p>
   */
  complianceType?: string;

  /**
   * <p>
   * The number of controls associated with the specified framework.
   * </p>
   */
  controlsCount?: number;

  /**
   * <p>
   *    The number of control sets associated with the specified framework.
   * </p>
   */
  controlSetsCount?: number;

  /**
   * <p>
   *    Specifies when the framework was created.
   * </p>
   */
  createdAt?: Date;

  /**
   * <p>
   *    Specifies when the framework was most recently updated.
   * </p>
   */
  lastUpdatedAt?: Date;
}

export namespace AssessmentFrameworkMetadata {
  export const filterSensitiveLog = (obj: AssessmentFrameworkMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>
 * A metadata object associated with an assessment in AWS Audit Manager.
 * </p>
 */
export interface AssessmentMetadataItem {
  /**
   * <p>
   * The name of the assessment.
   * </p>
   */
  name?: string;

  /**
   * <p>
   *    The unique identifier for the assessment.
   * </p>
   */
  id?: string;

  /**
   * <p>
   *          The name of the compliance standard related to the assessment, such as PCI-DSS.
   *       </p>
   */
  complianceType?: string;

  /**
   * <p>
   * The current status of the assessment.
   * </p>
   */
  status?: AssessmentStatus | string;

  /**
   * <p>
   *    The roles associated with the assessment.
   * </p>
   */
  roles?: Role[];

  /**
   * <p>
   *    The delegations associated with the assessment.
   * </p>
   */
  delegations?: Delegation[];

  /**
   * <p>
   *    Specifies when the assessment was created.
   * </p>
   */
  creationTime?: Date;

  /**
   * <p>
   *    The time of the most recent update.
   * </p>
   */
  lastUpdated?: Date;
}

export namespace AssessmentMetadataItem {
  export const filterSensitiveLog = (obj: AssessmentMetadataItem): any => ({
    ...obj,
  });
}

export enum AssessmentReportStatus {
  COMPLETE = "COMPLETE",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
}

/**
 * <p>
 *  A finalized document generated from an AWS Audit Manager assessment. These reports summarize the relevant evidence collected for your audit, and link to the relevant evidence folders which are named and organized according to the controls specified in your assessment.
 * </p>
 */
export interface AssessmentReport {
  /**
   * <p>
   * The unique identifier for the specified assessment report.
   * </p>
   */
  id?: string;

  /**
   * <p>
   * The name given to the assessment report.
   * </p>
   */
  name?: string;

  /**
   * <p>
   *    The description of the specified assessment report.
   * </p>
   */
  description?: string;

  /**
   * <p>
   *    The identifier for the specified AWS account.
   * </p>
   */
  awsAccountId?: string;

  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId?: string;

  /**
   * <p>
   * The name of the associated assessment.
   * </p>
   */
  assessmentName?: string;

  /**
   * <p>
   *    The name of the user who created the assessment report.
   * </p>
   */
  author?: string;

  /**
   * <p>
   * The current status of the specified assessment report.
   * </p>
   */
  status?: AssessmentReportStatus | string;

  /**
   * <p>
   *    Specifies when the assessment report was created.
   * </p>
   */
  creationTime?: Date;
}

export namespace AssessmentReport {
  export const filterSensitiveLog = (obj: AssessmentReport): any => ({
    ...obj,
  });
}

/**
 * <p>
 *    An error entity for the <code>AssessmentReportEvidence</code> API. This is used to provide more meaningful errors than a simple string message.
 * </p>
 */
export interface AssessmentReportEvidenceError {
  /**
   * <p>
   *    The identifier for the evidence.
   * </p>
   */
  evidenceId?: string;

  /**
   * <p>
   *    The error code returned by the <code>AssessmentReportEvidence</code> API.
   * </p>
   */
  errorCode?: string;

  /**
   * <p>
   *    The error message returned by the <code>AssessmentReportEvidence</code> API.
   * </p>
   */
  errorMessage?: string;
}

export namespace AssessmentReportEvidenceError {
  export const filterSensitiveLog = (obj: AssessmentReportEvidenceError): any => ({
    ...obj,
  });
}

/**
 * <p>
 *    The metadata objects associated with the specified assessment report.
 * </p>
 */
export interface AssessmentReportMetadata {
  /**
   * <p>
   * The unique identifier for the assessment report.
   * </p>
   */
  id?: string;

  /**
   * <p>
   * The name of the assessment report.
   * </p>
   */
  name?: string;

  /**
   * <p>
   * The description of the specified assessment report.
   * </p>
   */
  description?: string;

  /**
   * <p>
   *    The unique identifier for the associated assessment.
   * </p>
   */
  assessmentId?: string;

  /**
   * <p>The name of the associated assessment.
   * </p>
   */
  assessmentName?: string;

  /**
   * <p>
   *    The name of the user who created the assessment report.
   * </p>
   */
  author?: string;

  /**
   * <p>
   * The current status of the assessment report.
   * </p>
   */
  status?: AssessmentReportStatus | string;

  /**
   * <p>
   *    Specifies when the assessment report was created.
   * </p>
   */
  creationTime?: Date;
}

export namespace AssessmentReportMetadata {
  export const filterSensitiveLog = (obj: AssessmentReportMetadata): any => ({
    ...obj,
  });
}

export interface AssociateAssessmentReportEvidenceFolderRequest {
  /**
   * <p>
   *          The identifier for the specified assessment.
   *       </p>
   */
  assessmentId: string | undefined;

  /**
   * <p>
   *          The identifier for the folder in which evidence is stored.
   *       </p>
   */
  evidenceFolderId: string | undefined;
}

export namespace AssociateAssessmentReportEvidenceFolderRequest {
  export const filterSensitiveLog = (obj: AssociateAssessmentReportEvidenceFolderRequest): any => ({
    ...obj,
  });
}

export interface AssociateAssessmentReportEvidenceFolderResponse {}

export namespace AssociateAssessmentReportEvidenceFolderResponse {
  export const filterSensitiveLog = (obj: AssociateAssessmentReportEvidenceFolderResponse): any => ({
    ...obj,
  });
}

/**
 * <p>
 *   An internal service error occurred during the processing of your request. Try again later.
 * </p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message: string | undefined;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>
 *   The resource specified in the request cannot be found.
 * </p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message: string | undefined;
  /**
   * <p>
   *       The unique identifier for the specified resource.
   *       </p>
   */
  resourceId: string | undefined;

  /**
   * <p>
   *          The type of resource affected by the error.
   *       </p>
   */
  resourceType: string | undefined;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>
 *    Indicates that the request has invalid or missing parameters for the specified field.
 * </p>
 */
export interface ValidationExceptionField {
  /**
   * <p>
   *  The name of the validation error.
   * </p>
   */
  name: string | undefined;

  /**
   * <p>
   *  The body of the error message.
   * </p>
   */
  message: string | undefined;
}

export namespace ValidationExceptionField {
  export const filterSensitiveLog = (obj: ValidationExceptionField): any => ({
    ...obj,
  });
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "cannotParse",
  FIELD_VALIDATION_FAILED = "fieldValidationFailed",
  OTHER = "other",
  UNKNOWN_OPERATION = "unknownOperation",
}

/**
 * <p>
 *    The request has invalid or missing parameters.
 * </p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message: string | undefined;
  /**
   * <p>
   *          The reason the request failed validation.
   *       </p>
   */
  reason?: ValidationExceptionReason | string;

  /**
   * <p>
   *          The fields that caused the error, if applicable.
   *       </p>
   */
  fields?: ValidationExceptionField[];
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export interface BatchAssociateAssessmentReportEvidenceRequest {
  /**
   * <p>
   *     The unique identifier for the specified assessment.
   *       </p>
   */
  assessmentId: string | undefined;

  /**
   * <p>
   *          The identifier for the folder in which the evidence is stored.
   *       </p>
   */
  evidenceFolderId: string | undefined;

  /**
   * <p>
   *          The list of evidence identifiers.
   *       </p>
   */
  evidenceIds: string[] | undefined;
}

export namespace BatchAssociateAssessmentReportEvidenceRequest {
  export const filterSensitiveLog = (obj: BatchAssociateAssessmentReportEvidenceRequest): any => ({
    ...obj,
  });
}

export interface BatchAssociateAssessmentReportEvidenceResponse {
  /**
   * <p>
   *          The identifier for the evidence.
   *       </p>
   */
  evidenceIds?: string[];

  /**
   * <p>
   *          A list of errors returned by the <code>BatchAssociateAssessmentReportEvidence</code> API.
   *       </p>
   */
  errors?: AssessmentReportEvidenceError[];
}

export namespace BatchAssociateAssessmentReportEvidenceResponse {
  export const filterSensitiveLog = (obj: BatchAssociateAssessmentReportEvidenceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>
 *   A collection of attributes used to create a delegation for an assessment in AWS Audit Manager.
 * </p>
 */
export interface CreateDelegationRequest {
  /**
   * <p>
   *    A comment related to the delegation request.
   * </p>
   */
  comment?: string;

  /**
   * <p>
   *    The unique identifier for the control set.
   * </p>
   */
  controlSetId?: string;

  /**
   * <p>
   *    The Amazon Resource Name (ARN) of the IAM role.
   * </p>
   */
  roleArn?: string;

  /**
   * <p>
   *    The type of customer persona.
   * </p>
   *          <note>
   *             <p>In <code>CreateAssessment</code>, <code>roleType</code> can only be <code>PROCESS_OWNER</code>. </p>
   *             <p>In <code>UpdateSettings</code>, <code>roleType</code> can only be <code>PROCESS_OWNER</code>.</p>
   *             <p>In <code>BatchCreateDelegationByAssessment</code>, <code>roleType</code> can only be <code>RESOURCE_OWNER</code>.</p>
   *          </note>
   */
  roleType?: RoleType | string;
}

export namespace CreateDelegationRequest {
  export const filterSensitiveLog = (obj: CreateDelegationRequest): any => ({
    ...obj,
  });
}

export interface BatchCreateDelegationByAssessmentRequest {
  /**
   * <p>
   *          The API request to batch create delegations in AWS Audit Manager.
   *       </p>
   */
  createDelegationRequests: CreateDelegationRequest[] | undefined;

  /**
   * <p>
   *          The identifier for the specified assessment.
   *       </p>
   */
  assessmentId: string | undefined;
}

export namespace BatchCreateDelegationByAssessmentRequest {
  export const filterSensitiveLog = (obj: BatchCreateDelegationByAssessmentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>
 *    An error entity for the <code>BatchCreateDelegationByAssessment</code> API. This is used to provide more meaningful errors than a simple string message.
 * </p>
 */
export interface BatchCreateDelegationByAssessmentError {
  /**
   * <p>
   * The API request to batch create delegations in AWS Audit Manager.
   * </p>
   */
  createDelegationRequest?: CreateDelegationRequest;

  /**
   * <p>
   *    The error code returned by the <code>BatchCreateDelegationByAssessment</code> API.
   * </p>
   */
  errorCode?: string;

  /**
   * <p>
   *    The error message returned by the <code>BatchCreateDelegationByAssessment</code> API.
   * </p>
   */
  errorMessage?: string;
}

export namespace BatchCreateDelegationByAssessmentError {
  export const filterSensitiveLog = (obj: BatchCreateDelegationByAssessmentError): any => ({
    ...obj,
  });
}

export interface BatchCreateDelegationByAssessmentResponse {
  /**
   * <p>
   *          The delegations associated with the assessment.
   *       </p>
   */
  delegations?: Delegation[];

  /**
   * <p>
   *          A list of errors returned by the <code>BatchCreateDelegationByAssessment</code> API.
   *       </p>
   */
  errors?: BatchCreateDelegationByAssessmentError[];
}

export namespace BatchCreateDelegationByAssessmentResponse {
  export const filterSensitiveLog = (obj: BatchCreateDelegationByAssessmentResponse): any => ({
    ...obj,
  });
}

export interface BatchDeleteDelegationByAssessmentRequest {
  /**
   * <p>
   *    The identifiers for the specified delegations.
   *       </p>
   */
  delegationIds: string[] | undefined;

  /**
   * <p>
   *          The identifier for the specified assessment.
   *       </p>
   */
  assessmentId: string | undefined;
}

export namespace BatchDeleteDelegationByAssessmentRequest {
  export const filterSensitiveLog = (obj: BatchDeleteDelegationByAssessmentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>
 *    An error entity for the <code>BatchDeleteDelegationByAssessment</code> API. This is used to provide more meaningful errors than a simple string message.
 * </p>
 */
export interface BatchDeleteDelegationByAssessmentError {
  /**
   * <p>
   *    The identifier for the specified delegation.
   * </p>
   */
  delegationId?: string;

  /**
   * <p>
   *    The error code returned by the <code>BatchDeleteDelegationByAssessment</code> API.
   * </p>
   */
  errorCode?: string;

  /**
   * <p>
   *    The error message returned by the <code>BatchDeleteDelegationByAssessment</code> API.
   * </p>
   */
  errorMessage?: string;
}

export namespace BatchDeleteDelegationByAssessmentError {
  export const filterSensitiveLog = (obj: BatchDeleteDelegationByAssessmentError): any => ({
    ...obj,
  });
}

export interface BatchDeleteDelegationByAssessmentResponse {
  /**
   * <p>
   *          A list of errors returned by the <code>BatchDeleteDelegationByAssessment</code> API.
   *       </p>
   */
  errors?: BatchDeleteDelegationByAssessmentError[];
}

export namespace BatchDeleteDelegationByAssessmentResponse {
  export const filterSensitiveLog = (obj: BatchDeleteDelegationByAssessmentResponse): any => ({
    ...obj,
  });
}

export interface BatchDisassociateAssessmentReportEvidenceRequest {
  /**
   * <p>
   *          The identifier for the specified assessment.
   *       </p>
   */
  assessmentId: string | undefined;

  /**
   * <p>
   *          The identifier for the folder in which evidence is stored.
   *       </p>
   */
  evidenceFolderId: string | undefined;

  /**
   * <p>
   *          The list of evidence identifiers.
   *       </p>
   */
  evidenceIds: string[] | undefined;
}

export namespace BatchDisassociateAssessmentReportEvidenceRequest {
  export const filterSensitiveLog = (obj: BatchDisassociateAssessmentReportEvidenceRequest): any => ({
    ...obj,
  });
}

export interface BatchDisassociateAssessmentReportEvidenceResponse {
  /**
   * <p>
   *          The identifier for the evidence.
   *       </p>
   */
  evidenceIds?: string[];

  /**
   * <p>
   *          A list of errors returned by the <code>BatchDisassociateAssessmentReportEvidence</code> API.
   *       </p>
   */
  errors?: AssessmentReportEvidenceError[];
}

export namespace BatchDisassociateAssessmentReportEvidenceResponse {
  export const filterSensitiveLog = (obj: BatchDisassociateAssessmentReportEvidenceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>
 *    Evidence that is uploaded to AWS Audit Manager manually.
 * </p>
 */
export interface ManualEvidence {
  /**
   * <p>
   *    The Amazon S3 URL that points to a manual evidence object.
   * </p>
   */
  s3ResourcePath?: string;
}

export namespace ManualEvidence {
  export const filterSensitiveLog = (obj: ManualEvidence): any => ({
    ...obj,
  });
}

export interface BatchImportEvidenceToAssessmentControlRequest {
  /**
   * <p>
   *          The identifier for the specified assessment.
   *       </p>
   */
  assessmentId: string | undefined;

  /**
   * <p>
   *          The identifier for the specified control set.
   *       </p>
   */
  controlSetId: string | undefined;

  /**
   * <p>
   *
   *                The identifier for the specified control.
   *       </p>
   */
  controlId: string | undefined;

  /**
   * <p>
   *          The list of manual evidence objects.
   *       </p>
   */
  manualEvidence: ManualEvidence[] | undefined;
}

export namespace BatchImportEvidenceToAssessmentControlRequest {
  export const filterSensitiveLog = (obj: BatchImportEvidenceToAssessmentControlRequest): any => ({
    ...obj,
  });
}

/**
 * <p>
 *    An error entity for the <code>BatchImportEvidenceToAssessmentControl</code> API. This is used to provide more meaningful errors than a simple string message.
 * </p>
 */
export interface BatchImportEvidenceToAssessmentControlError {
  /**
   * <p>
   * Manual evidence that cannot be collected automatically by AWS Audit Manager.
   * </p>
   */
  manualEvidence?: ManualEvidence;

  /**
   * <p>
   *   The error code returned by the <code>BatchImportEvidenceToAssessmentControl</code> API.
   * </p>
   */
  errorCode?: string;

  /**
   * <p>
   *   The error message returned by the <code>BatchImportEvidenceToAssessmentControlError</code> API.
   * </p>
   */
  errorMessage?: string;
}

export namespace BatchImportEvidenceToAssessmentControlError {
  export const filterSensitiveLog = (obj: BatchImportEvidenceToAssessmentControlError): any => ({
    ...obj,
  });
}

export interface BatchImportEvidenceToAssessmentControlResponse {
  /**
   * <p>
   *          A list of errors returned by the <code>BatchImportEvidenceToAssessmentControl</code> API.
   *       </p>
   */
  errors?: BatchImportEvidenceToAssessmentControlError[];
}

export namespace BatchImportEvidenceToAssessmentControlResponse {
  export const filterSensitiveLog = (obj: BatchImportEvidenceToAssessmentControlResponse): any => ({
    ...obj,
  });
}

export interface CreateAssessmentRequest {
  /**
   * <p>
   *          The name of the assessment to be created.
   *       </p>
   */
  name: string | undefined;

  /**
   * <p>
   *          The optional description of the assessment to be created.
   *       </p>
   */
  description?: string;

  /**
   * <p>
   *          The assessment report storage destination for the specified assessment that is being created.
   *       </p>
   */
  assessmentReportsDestination: AssessmentReportsDestination | undefined;

  /**
   * <p>
   *    The wrapper that contains the AWS accounts and AWS services in scope for the assessment.
   * </p>
   */
  scope: Scope | undefined;

  /**
   * <p>
   *          The list of roles for the specified assessment.
   *       </p>
   */
  roles: Role[] | undefined;

  /**
   * <p>
   *          The identifier for the specified framework.
   *       </p>
   */
  frameworkId: string | undefined;

  /**
   * <p>
   *    The tags associated with the assessment.
   * </p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateAssessmentRequest {
  export const filterSensitiveLog = (obj: CreateAssessmentRequest): any => ({
    ...obj,
  });
}

export interface CreateAssessmentResponse {
  /**
   * <p>
   *    An entity that defines the scope of audit evidence collected by AWS Audit Manager. An AWS Audit Manager assessment is an implementation of an AWS Audit Manager framework.
   * </p>
   */
  assessment?: Assessment;
}

export namespace CreateAssessmentResponse {
  export const filterSensitiveLog = (obj: CreateAssessmentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>
 * Control entity attributes that uniquely identify an existing control to be added to a framework in AWS Audit Manager.
 * </p>
 */
export interface CreateAssessmentFrameworkControl {
  /**
   * <p>
   * The unique identifier of the control.
   * </p>
   */
  id?: string;
}

export namespace CreateAssessmentFrameworkControl {
  export const filterSensitiveLog = (obj: CreateAssessmentFrameworkControl): any => ({
    ...obj,
  });
}

/**
 * <p>
 * A <code>controlSet</code> entity that represents a collection of controls in AWS Audit Manager. This does not contain the control set ID.
 * </p>
 */
export interface CreateAssessmentFrameworkControlSet {
  /**
   * <p>
   * The name of the specified control set.
   * </p>
   */
  name?: string;

  /**
   * <p>
   *    The list of controls within the control set. This does not contain the control set ID.
   * </p>
   */
  controls?: CreateAssessmentFrameworkControl[];
}

export namespace CreateAssessmentFrameworkControlSet {
  export const filterSensitiveLog = (obj: CreateAssessmentFrameworkControlSet): any => ({
    ...obj,
  });
}

export interface CreateAssessmentFrameworkRequest {
  /**
   * <p>
   * The name of the new custom framework.
   * </p>
   */
  name: string | undefined;

  /**
   * <p>
   * An optional description for the new custom framework.
   * </p>
   */
  description?: string;

  /**
   * <p>
   * The compliance type that the new custom framework supports, such as CIS or HIPAA.
   * </p>
   */
  complianceType?: string;

  /**
   * <p>
   *    The control sets to be associated with the framework.
   * </p>
   */
  controlSets: CreateAssessmentFrameworkControlSet[] | undefined;
}

export namespace CreateAssessmentFrameworkRequest {
  export const filterSensitiveLog = (obj: CreateAssessmentFrameworkRequest): any => ({
    ...obj,
  });
}

export enum SourceFrequency {
  DAILY = "DAILY",
  MONTHLY = "MONTHLY",
  WEEKLY = "WEEKLY",
}

export enum KeywordInputType {
  SELECT_FROM_LIST = "SELECT_FROM_LIST",
}

/**
 * <p>
 *    The keyword to search for in AWS CloudTrail logs.
 * </p>
 */
export interface SourceKeyword {
  /**
   * <p>
   * The method of input for the specified keyword.
   * </p>
   */
  keywordInputType?: KeywordInputType | string;

  /**
   * <p>
   *    The value of the keyword used to search AWS CloudTrail logs when mapping a control data source.
   * </p>
   */
  keywordValue?: string;
}

export namespace SourceKeyword {
  export const filterSensitiveLog = (obj: SourceKeyword): any => ({
    ...obj,
  });
}

export enum SourceSetUpOption {
  PROCEDURAL_CONTROLS_MAPPING = "Procedural_Controls_Mapping",
  SYSTEM_CONTROLS_MAPPING = "System_Controls_Mapping",
}

export enum SourceType {
  AWS_API_CALL = "AWS_API_Call",
  AWS_CLOUDTRAIL = "AWS_Cloudtrail",
  AWS_CONFIG = "AWS_Config",
  AWS_SECURITY_HUB = "AWS_Security_Hub",
  MANUAL = "MANUAL",
}

/**
 * <p>
 *    The data source that determines from where AWS Audit Manager collects evidence for the control.
 * </p>
 */
export interface ControlMappingSource {
  /**
   * <p>
   * The unique identifier for the specified source.
   * </p>
   */
  sourceId?: string;

  /**
   * <p>
   * The name of the specified source.
   * </p>
   */
  sourceName?: string;

  /**
   * <p>
   * The description of the specified source.
   * </p>
   */
  sourceDescription?: string;

  /**
   * <p>
   *    The setup option for the data source, which reflects if the evidence collection is automated or manual.
   * </p>
   */
  sourceSetUpOption?: SourceSetUpOption | string;

  /**
   * <p>
   *    Specifies one of the five types of data sources for evidence collection.
   * </p>
   */
  sourceType?: SourceType | string;

  /**
   * <p>
   *    The keyword to search for in AWS CloudTrail logs.
   * </p>
   */
  sourceKeyword?: SourceKeyword;

  /**
   * <p>
   *          The frequency of evidence collection for the specified control mapping source.
   *       </p>
   */
  sourceFrequency?: SourceFrequency | string;

  /**
   * <p>
   *          The instructions for troubleshooting the specified control.
   *       </p>
   */
  troubleshootingText?: string;
}

export namespace ControlMappingSource {
  export const filterSensitiveLog = (obj: ControlMappingSource): any => ({
    ...obj,
  });
}

export enum ControlType {
  CUSTOM = "Custom",
  STANDARD = "Standard",
}

/**
 * <p>
 * A control in AWS Audit Manager.
 * </p>
 */
export interface Control {
  /**
   * <p>
   *    The Amazon Resource Name (ARN) of the specified control.
   * </p>
   */
  arn?: string;

  /**
   * <p>
   * The unique identifier for the control.
   * </p>
   */
  id?: string;

  /**
   * <p>
   * The type of control, such as custom or standard.
   * </p>
   */
  type?: ControlType | string;

  /**
   * <p>
   * The name of the specified control.
   * </p>
   */
  name?: string;

  /**
   * <p>
   *    The description of the specified control.
   * </p>
   */
  description?: string;

  /**
   * <p>
   *          The steps to follow to determine if the control has been satisfied.
   *       </p>
   */
  testingInformation?: string;

  /**
   * <p>
   *          The title of the action plan for remediating the control.
   *       </p>
   */
  actionPlanTitle?: string;

  /**
   * <p>
   *
   *          The recommended actions to carry out if the control is not fulfilled.
   *       </p>
   */
  actionPlanInstructions?: string;

  /**
   * <p>
   *    The data mapping sources for the specified control.
   * </p>
   */
  controlSources?: string;

  /**
   * <p>
   *    The data mapping sources for the specified control.
   * </p>
   */
  controlMappingSources?: ControlMappingSource[];

  /**
   * <p>
   * Specifies when the control was created.
   * </p>
   */
  createdAt?: Date;

  /**
   * <p>
   * Specifies when the control was most recently updated.
   * </p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>
   *          The IAM user or role that created the control.
   *       </p>
   */
  createdBy?: string;

  /**
   * <p>
   *          The IAM user or role that most recently updated the control.
   *       </p>
   */
  lastUpdatedBy?: string;

  /**
   * <p>
   *    The tags associated with the control.
   * </p>
   */
  tags?: { [key: string]: string };
}

export namespace Control {
  export const filterSensitiveLog = (obj: Control): any => ({
    ...obj,
  });
}

/**
 * <p>
 * A set of controls in AWS Audit Manager.
 * </p>
 */
export interface ControlSet {
  /**
   * <p>
   *    The identifier of the control set in the assessment. This is the control set name in a plain string format.
   * </p>
   */
  id?: string;

  /**
   * <p>
   * The name of the control set.
   * </p>
   */
  name?: string;

  /**
   * <p>
   *    The list of controls within the control set.
   * </p>
   */
  controls?: Control[];
}

export namespace ControlSet {
  export const filterSensitiveLog = (obj: ControlSet): any => ({
    ...obj,
  });
}

/**
 * <p>
 *    The file used to structure and automate AWS Audit Manager assessments for a given compliance standard.
 * </p>
 */
export interface Framework {
  /**
   * <p>
   *    The Amazon Resource Name (ARN) of the specified framework.
   * </p>
   */
  arn?: string;

  /**
   * <p>
   * The unique identifier for the specified framework.
   * </p>
   */
  id?: string;

  /**
   * <p>
   * The name of the specified framework.
   * </p>
   */
  name?: string;

  /**
   * <p>
   * The framework type, such as custom or standard.
   * </p>
   */
  type?: FrameworkType | string;

  /**
   * <p>
   *    The compliance type that the new custom framework supports, such as CIS or HIPAA.
   * </p>
   */
  complianceType?: string;

  /**
   * <p>
   *    The description of the specified framework.
   * </p>
   */
  description?: string;

  /**
   * <p>
   *    The logo associated with the framework.
   * </p>
   */
  logo?: string;

  /**
   * <p>
   * The sources from which AWS Audit Manager collects evidence for the control.
   * </p>
   */
  controlSources?: string;

  /**
   * <p>
   *    The control sets associated with the framework.
   * </p>
   */
  controlSets?: ControlSet[];

  /**
   * <p>
   *    Specifies when the framework was created.
   * </p>
   */
  createdAt?: Date;

  /**
   * <p>
   *    Specifies when the framework was most recently updated.
   * </p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>
   *    The IAM user or role that created the framework.
   * </p>
   */
  createdBy?: string;

  /**
   * <p>
   *    The IAM user or role that most recently updated the framework.
   * </p>
   */
  lastUpdatedBy?: string;
}

export namespace Framework {
  export const filterSensitiveLog = (obj: Framework): any => ({
    ...obj,
  });
}

export interface CreateAssessmentFrameworkResponse {
  /**
   * <p>
   *    The name of the new framework returned by the <code>CreateAssessmentFramework</code> API.
   * </p>
   */
  framework?: Framework;
}

export namespace CreateAssessmentFrameworkResponse {
  export const filterSensitiveLog = (obj: CreateAssessmentFrameworkResponse): any => ({
    ...obj,
  });
}

export interface CreateAssessmentReportRequest {
  /**
   * <p>
   * The name of the new assessment report.
   * </p>
   */
  name: string | undefined;

  /**
   * <p>
   * The description of the assessment report.
   * </p>
   */
  description?: string;

  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;
}

export namespace CreateAssessmentReportRequest {
  export const filterSensitiveLog = (obj: CreateAssessmentReportRequest): any => ({
    ...obj,
  });
}

export interface CreateAssessmentReportResponse {
  /**
   * <p>
   *    The new assessment report returned by the <code>CreateAssessmentReport</code> API.
   * </p>
   */
  assessmentReport?: AssessmentReport;
}

export namespace CreateAssessmentReportResponse {
  export const filterSensitiveLog = (obj: CreateAssessmentReportResponse): any => ({
    ...obj,
  });
}

/**
 * <p>
 *   Control mapping fields that represent the source for evidence collection, along with related parameters and metadata. This does not contain <code>mappingID</code>.
 * </p>
 */
export interface CreateControlMappingSource {
  /**
   * <p>
   * The name of the control mapping data source.
   * </p>
   */
  sourceName?: string;

  /**
   * <p>
   *    The description of the data source that determines from where AWS Audit Manager collects evidence for the control.
   * </p>
   */
  sourceDescription?: string;

  /**
   * <p>
   *    The setup option for the data source, which reflects if the evidence collection is automated or manual.
   * </p>
   */
  sourceSetUpOption?: SourceSetUpOption | string;

  /**
   * <p>
   *    Specifies one of the five types of data sources for evidence collection.
   *
   * </p>
   */
  sourceType?: SourceType | string;

  /**
   * <p>
   *    The keyword to search for in AWS CloudTrail logs.
   * </p>
   */
  sourceKeyword?: SourceKeyword;

  /**
   * <p>
   *    The frequency of evidence collection for the specified control mapping source.
   * </p>
   */
  sourceFrequency?: SourceFrequency | string;

  /**
   * <p>
   * The instructions for troubleshooting the specified control.
   * </p>
   */
  troubleshootingText?: string;
}

export namespace CreateControlMappingSource {
  export const filterSensitiveLog = (obj: CreateControlMappingSource): any => ({
    ...obj,
  });
}

export interface CreateControlRequest {
  /**
   * <p>
   * The name of the control.
   * </p>
   */
  name: string | undefined;

  /**
   * <p>
   * The description of the control.
   * </p>
   */
  description?: string;

  /**
   * <p>
   *          The steps to follow to determine if the control has been satisfied.
   *       </p>
   */
  testingInformation?: string;

  /**
   * <p>
   *          The title of the action plan for remediating the control.
   *       </p>
   */
  actionPlanTitle?: string;

  /**
   * <p>
   *          The recommended actions to carry out if the control is not fulfilled.
   *       </p>
   */
  actionPlanInstructions?: string;

  /**
   * <p>
   *  The data source that determines from where AWS Audit Manager collects evidence for the control.
   * </p>
   */
  controlMappingSources: CreateControlMappingSource[] | undefined;

  /**
   * <p>
   *    The tags associated with the control.
   * </p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateControlRequest {
  export const filterSensitiveLog = (obj: CreateControlRequest): any => ({
    ...obj,
  });
}

export interface CreateControlResponse {
  /**
   * <p>
   *    The new control returned by the <code>CreateControl</code> API.
   * </p>
   */
  control?: Control;
}

export namespace CreateControlResponse {
  export const filterSensitiveLog = (obj: CreateControlResponse): any => ({
    ...obj,
  });
}

export interface DeleteAssessmentRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;
}

export namespace DeleteAssessmentRequest {
  export const filterSensitiveLog = (obj: DeleteAssessmentRequest): any => ({
    ...obj,
  });
}

export interface DeleteAssessmentResponse {}

export namespace DeleteAssessmentResponse {
  export const filterSensitiveLog = (obj: DeleteAssessmentResponse): any => ({
    ...obj,
  });
}

export interface DeleteAssessmentFrameworkRequest {
  /**
   * <p>
   *    The identifier for the specified framework.
   * </p>
   */
  frameworkId: string | undefined;
}

export namespace DeleteAssessmentFrameworkRequest {
  export const filterSensitiveLog = (obj: DeleteAssessmentFrameworkRequest): any => ({
    ...obj,
  });
}

export interface DeleteAssessmentFrameworkResponse {}

export namespace DeleteAssessmentFrameworkResponse {
  export const filterSensitiveLog = (obj: DeleteAssessmentFrameworkResponse): any => ({
    ...obj,
  });
}

export interface DeleteAssessmentReportRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;

  /**
   * <p>
   * The unique identifier for the assessment report.
   * </p>
   */
  assessmentReportId: string | undefined;
}

export namespace DeleteAssessmentReportRequest {
  export const filterSensitiveLog = (obj: DeleteAssessmentReportRequest): any => ({
    ...obj,
  });
}

export interface DeleteAssessmentReportResponse {}

export namespace DeleteAssessmentReportResponse {
  export const filterSensitiveLog = (obj: DeleteAssessmentReportResponse): any => ({
    ...obj,
  });
}

export interface DeleteControlRequest {
  /**
   * <p>
   *    The identifier for the specified control.
   * </p>
   */
  controlId: string | undefined;
}

export namespace DeleteControlRequest {
  export const filterSensitiveLog = (obj: DeleteControlRequest): any => ({
    ...obj,
  });
}

export interface DeleteControlResponse {}

export namespace DeleteControlResponse {
  export const filterSensitiveLog = (obj: DeleteControlResponse): any => ({
    ...obj,
  });
}

export interface DeregisterAccountRequest {}

export namespace DeregisterAccountRequest {
  export const filterSensitiveLog = (obj: DeregisterAccountRequest): any => ({
    ...obj,
  });
}

export interface DeregisterAccountResponse {
  /**
   * <p>
   * The registration status of the account.
   * </p>
   */
  status?: AccountStatus | string;
}

export namespace DeregisterAccountResponse {
  export const filterSensitiveLog = (obj: DeregisterAccountResponse): any => ({
    ...obj,
  });
}

export interface DeregisterOrganizationAdminAccountRequest {
  /**
   * <p>
   *  The identifier for the specified administrator account.
   * </p>
   */
  adminAccountId?: string;
}

export namespace DeregisterOrganizationAdminAccountRequest {
  export const filterSensitiveLog = (obj: DeregisterOrganizationAdminAccountRequest): any => ({
    ...obj,
  });
}

export interface DeregisterOrganizationAdminAccountResponse {}

export namespace DeregisterOrganizationAdminAccountResponse {
  export const filterSensitiveLog = (obj: DeregisterOrganizationAdminAccountResponse): any => ({
    ...obj,
  });
}

export interface DisassociateAssessmentReportEvidenceFolderRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;

  /**
   * <p>
   *    The identifier for the folder in which evidence is stored.
   * </p>
   */
  evidenceFolderId: string | undefined;
}

export namespace DisassociateAssessmentReportEvidenceFolderRequest {
  export const filterSensitiveLog = (obj: DisassociateAssessmentReportEvidenceFolderRequest): any => ({
    ...obj,
  });
}

export interface DisassociateAssessmentReportEvidenceFolderResponse {}

export namespace DisassociateAssessmentReportEvidenceFolderResponse {
  export const filterSensitiveLog = (obj: DisassociateAssessmentReportEvidenceFolderResponse): any => ({
    ...obj,
  });
}

export interface GetAccountStatusRequest {}

export namespace GetAccountStatusRequest {
  export const filterSensitiveLog = (obj: GetAccountStatusRequest): any => ({
    ...obj,
  });
}

export interface GetAccountStatusResponse {
  /**
   * <p>
   * The status of the specified AWS account.
   * </p>
   */
  status?: AccountStatus | string;
}

export namespace GetAccountStatusResponse {
  export const filterSensitiveLog = (obj: GetAccountStatusResponse): any => ({
    ...obj,
  });
}

export interface GetAssessmentRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;
}

export namespace GetAssessmentRequest {
  export const filterSensitiveLog = (obj: GetAssessmentRequest): any => ({
    ...obj,
  });
}

export interface GetAssessmentResponse {
  /**
   * <p>
   *    An entity that defines the scope of audit evidence collected by AWS Audit Manager. An AWS Audit Manager assessment is an implementation of an AWS Audit Manager framework.
   * </p>
   */
  assessment?: Assessment;
}

export namespace GetAssessmentResponse {
  export const filterSensitiveLog = (obj: GetAssessmentResponse): any => ({
    ...obj,
  });
}

export interface GetAssessmentFrameworkRequest {
  /**
   * <p>
   *    The identifier for the specified framework.
   * </p>
   */
  frameworkId: string | undefined;
}

export namespace GetAssessmentFrameworkRequest {
  export const filterSensitiveLog = (obj: GetAssessmentFrameworkRequest): any => ({
    ...obj,
  });
}

export interface GetAssessmentFrameworkResponse {
  /**
   * <p>
   *    The framework returned by the <code>GetAssessmentFramework</code> API.
   * </p>
   */
  framework?: Framework;
}

export namespace GetAssessmentFrameworkResponse {
  export const filterSensitiveLog = (obj: GetAssessmentFrameworkResponse): any => ({
    ...obj,
  });
}

export interface GetAssessmentReportUrlRequest {
  /**
   * <p>
   * The identifier for the assessment report.
   * </p>
   */
  assessmentReportId: string | undefined;

  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;
}

export namespace GetAssessmentReportUrlRequest {
  export const filterSensitiveLog = (obj: GetAssessmentReportUrlRequest): any => ({
    ...obj,
  });
}

/**
 * <p>
 *    A uniform resource locator, used as a unique identifier to locate a resource on the internet.
 * </p>
 */
export interface URL {
  /**
   * <p>
   *    The name or word used as a hyperlink to the URL.
   * </p>
   */
  hyperlinkName?: string;

  /**
   * <p>
   *    The unique identifier for the internet resource.
   * </p>
   */
  link?: string;
}

export namespace URL {
  export const filterSensitiveLog = (obj: URL): any => ({
    ...obj,
  });
}

export interface GetAssessmentReportUrlResponse {
  /**
   * <p>
   *    A uniform resource locator, used as a unique identifier to locate a resource on the internet.
   * </p>
   */
  preSignedUrl?: URL;
}

export namespace GetAssessmentReportUrlResponse {
  export const filterSensitiveLog = (obj: GetAssessmentReportUrlResponse): any => ({
    ...obj,
  });
}

export interface GetChangeLogsRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;

  /**
   * <p>
   *    The identifier for the specified control set.
   * </p>
   */
  controlSetId?: string;

  /**
   * <p>
   *
   *    The identifier for the specified control.
   * </p>
   */
  controlId?: string;

  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;

  /**
   * <p>
   *    Represents the maximum number of results per page, or per API request call.
   * </p>
   */
  maxResults?: number;
}

export namespace GetChangeLogsRequest {
  export const filterSensitiveLog = (obj: GetChangeLogsRequest): any => ({
    ...obj,
  });
}

export enum ObjectTypeEnum {
  ASSESSMENT = "ASSESSMENT",
  ASSESSMENT_REPORT = "ASSESSMENT_REPORT",
  CONTROL = "CONTROL",
  CONTROL_SET = "CONTROL_SET",
  DELEGATION = "DELEGATION",
}

/**
 * <p>
 *    The record of a change within AWS Audit Manager, such as a modified assessment, a delegated control set, and so on.
 * </p>
 */
export interface ChangeLog {
  /**
   * <p>
   *  The changelog object type, such as an assessment, control, or control set.
   * </p>
   */
  objectType?: ObjectTypeEnum | string;

  /**
   * <p>
   *  The name of the changelog object.
   * </p>
   */
  objectName?: string;

  /**
   * <p>
   *    The action performed.
   * </p>
   */
  action?: ActionEnum | string;

  /**
   * <p>
   *  The time of creation for the changelog object.
   * </p>
   */
  createdAt?: Date;

  /**
   * <p>
   *  The IAM user or role that performed the action.
   * </p>
   */
  createdBy?: string;
}

export namespace ChangeLog {
  export const filterSensitiveLog = (obj: ChangeLog): any => ({
    ...obj,
  });
}

export interface GetChangeLogsResponse {
  /**
   * <p>
   *          The list of user activity for the control.
   *       </p>
   */
  changeLogs?: ChangeLog[];

  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
}

export namespace GetChangeLogsResponse {
  export const filterSensitiveLog = (obj: GetChangeLogsResponse): any => ({
    ...obj,
  });
}

export interface GetControlRequest {
  /**
   * <p>
   *
   *    The identifier for the specified control.
   * </p>
   */
  controlId: string | undefined;
}

export namespace GetControlRequest {
  export const filterSensitiveLog = (obj: GetControlRequest): any => ({
    ...obj,
  });
}

export interface GetControlResponse {
  /**
   * <p>
   *    The name of the control returned by the <code>GetControl</code> API.
   * </p>
   */
  control?: Control;
}

export namespace GetControlResponse {
  export const filterSensitiveLog = (obj: GetControlResponse): any => ({
    ...obj,
  });
}

export interface GetDelegationsRequest {
  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;

  /**
   * <p>
   *    Represents the maximum number of results per page, or per API request call.
   * </p>
   */
  maxResults?: number;
}

export namespace GetDelegationsRequest {
  export const filterSensitiveLog = (obj: GetDelegationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>
 *    The metadata associated with the specified delegation.
 * </p>
 */
export interface DelegationMetadata {
  /**
   * <p>
   *    The unique identifier for the delegation.
   * </p>
   */
  id?: string;

  /**
   * <p>
   *    The name of the associated assessment.
   * </p>
   */
  assessmentName?: string;

  /**
   * <p>
   *    The unique identifier for the specified assessment.
   * </p>
   */
  assessmentId?: string;

  /**
   * <p>
   * The current status of the delgation.
   * </p>
   */
  status?: DelegationStatus | string;

  /**
   * <p>
   *    The Amazon Resource Name (ARN) of the IAM role.
   * </p>
   */
  roleArn?: string;

  /**
   * <p>
   *    Specifies when the delegation was created.
   * </p>
   */
  creationTime?: Date;

  /**
   * <p>
   * Specifies the name of the control set delegated for review.
   * </p>
   */
  controlSetName?: string;
}

export namespace DelegationMetadata {
  export const filterSensitiveLog = (obj: DelegationMetadata): any => ({
    ...obj,
  });
}

export interface GetDelegationsResponse {
  /**
   * <p>
   *    The list of delegations returned by the <code>GetDelegations</code> API.
   * </p>
   */
  delegations?: DelegationMetadata[];

  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
}

export namespace GetDelegationsResponse {
  export const filterSensitiveLog = (obj: GetDelegationsResponse): any => ({
    ...obj,
  });
}

export interface GetEvidenceRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;

  /**
   * <p>
   *    The identifier for the specified control set.
   * </p>
   */
  controlSetId: string | undefined;

  /**
   * <p>
   *    The identifier for the folder in which the evidence is stored.
   * </p>
   */
  evidenceFolderId: string | undefined;

  /**
   * <p>
   *    The identifier for the evidence.
   * </p>
   */
  evidenceId: string | undefined;
}

export namespace GetEvidenceRequest {
  export const filterSensitiveLog = (obj: GetEvidenceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       A system asset that is evaluated in an AWS Audit Manager assessment.
 *     </p>
 */
export interface Resource {
  /**
   * <p>
   *  The Amazon Resource Name (ARN) for the specified resource.
   *     </p>
   */
  arn?: string;

  /**
   * <p>
   *   The value of the specified resource.
   *     </p>
   */
  value?: string;
}

export namespace Resource {
  export const filterSensitiveLog = (obj: Resource): any => ({
    ...obj,
  });
}

/**
 * <p>
 *    A record that contains the information needed to demonstrate compliance with the requirements specified by a control. Examples of evidence include change activity triggered by a user, or a system configuration snapshot.
 * </p>
 */
export interface Evidence {
  /**
   * <p>
   *          The data source from which the specified evidence was collected.
   *       </p>
   */
  dataSource?: string;

  /**
   * <p>
   *    The identifier for the specified AWS account.
   * </p>
   */
  evidenceAwsAccountId?: string;

  /**
   * <p>
   *          The timestamp that represents when the evidence was collected.
   *       </p>
   */
  time?: Date;

  /**
   * <p>
   * The AWS service from which the evidence is collected.
   * </p>
   */
  eventSource?: string;

  /**
   * <p>
   *          The name of the specified evidence event.
   *       </p>
   */
  eventName?: string;

  /**
   * <p>
   *          The type of automated evidence.
   *       </p>
   */
  evidenceByType?: string;

  /**
   * <p>
   *    The list of resources assessed to generate the evidence.
   * </p>
   */
  resourcesIncluded?: Resource[];

  /**
   * <p>
   *  The names and values used by the evidence event, including an attribute name (such as <code>allowUsersToChangePassword</code>) and value (such as <code>true</code> or <code>false</code>).
   * </p>
   */
  attributes?: { [key: string]: string };

  /**
   * <p>
   *          The unique identifier for the IAM user or role associated with the evidence.
   *       </p>
   */
  iamId?: string;

  /**
   * <p> The evaluation status for evidence that falls under the compliance check category. For
   *          evidence collected from AWS Security Hub, a <i>Pass</i> or
   *             <i>Fail</i> result is shown. For evidence collected from AWS Config, a
   *             <i>Compliant</i> or <i>Noncompliant</i> result is shown. </p>
   */
  complianceCheck?: string;

  /**
   * <p>
   *    The AWS account from which the evidence is collected, and its AWS organization path.
   * </p>
   */
  awsOrganization?: string;

  /**
   * <p>
   *    The identifier for the specified AWS account.
   * </p>
   */
  awsAccountId?: string;

  /**
   * <p>
   *    The identifier for the folder in which the evidence is stored.
   * </p>
   */
  evidenceFolderId?: string;

  /**
   * <p> The identifier for the evidence.
   * </p>
   */
  id?: string;

  /**
   * <p>
   *          Specifies whether the evidence is inclded in the assessment report.
   *       </p>
   */
  assessmentReportSelection?: string;
}

export namespace Evidence {
  export const filterSensitiveLog = (obj: Evidence): any => ({
    ...obj,
  });
}

export interface GetEvidenceResponse {
  /**
   * <p>
   *    The evidence returned by the <code>GetEvidenceResponse</code> API.
   * </p>
   */
  evidence?: Evidence;
}

export namespace GetEvidenceResponse {
  export const filterSensitiveLog = (obj: GetEvidenceResponse): any => ({
    ...obj,
  });
}

export interface GetEvidenceByEvidenceFolderRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;

  /**
   * <p>
   *    The identifier for the control set.
   * </p>
   */
  controlSetId: string | undefined;

  /**
   * <p>
   *    The unique identifier for the folder in which the evidence is stored.
   * </p>
   */
  evidenceFolderId: string | undefined;

  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;

  /**
   * <p>
   *    Represents the maximum number of results per page, or per API request call.
   * </p>
   */
  maxResults?: number;
}

export namespace GetEvidenceByEvidenceFolderRequest {
  export const filterSensitiveLog = (obj: GetEvidenceByEvidenceFolderRequest): any => ({
    ...obj,
  });
}

export interface GetEvidenceByEvidenceFolderResponse {
  /**
   * <p>
   *    The list of evidence returned by the <code>GetEvidenceByEvidenceFolder</code> API.
   * </p>
   */
  evidence?: Evidence[];

  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
}

export namespace GetEvidenceByEvidenceFolderResponse {
  export const filterSensitiveLog = (obj: GetEvidenceByEvidenceFolderResponse): any => ({
    ...obj,
  });
}

export interface GetEvidenceFolderRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;

  /**
   * <p>
   *    The identifier for the specified control set.
   * </p>
   */
  controlSetId: string | undefined;

  /**
   * <p>
   *    The identifier for the folder in which the evidence is stored.
   * </p>
   */
  evidenceFolderId: string | undefined;
}

export namespace GetEvidenceFolderRequest {
  export const filterSensitiveLog = (obj: GetEvidenceFolderRequest): any => ({
    ...obj,
  });
}

export interface GetEvidenceFolderResponse {
  /**
   * <p>
   * The folder in which evidence is stored.
   * </p>
   */
  evidenceFolder?: AssessmentEvidenceFolder;
}

export namespace GetEvidenceFolderResponse {
  export const filterSensitiveLog = (obj: GetEvidenceFolderResponse): any => ({
    ...obj,
  });
}

export interface GetEvidenceFoldersByAssessmentRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;

  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;

  /**
   * <p>
   *    Represents the maximum number of results per page, or per API request call.
   * </p>
   */
  maxResults?: number;
}

export namespace GetEvidenceFoldersByAssessmentRequest {
  export const filterSensitiveLog = (obj: GetEvidenceFoldersByAssessmentRequest): any => ({
    ...obj,
  });
}

export interface GetEvidenceFoldersByAssessmentResponse {
  /**
   * <p>
   *    The list of evidence folders returned by the <code>GetEvidenceFoldersByAssessment</code> API.
   * </p>
   */
  evidenceFolders?: AssessmentEvidenceFolder[];

  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
}

export namespace GetEvidenceFoldersByAssessmentResponse {
  export const filterSensitiveLog = (obj: GetEvidenceFoldersByAssessmentResponse): any => ({
    ...obj,
  });
}

export interface GetEvidenceFoldersByAssessmentControlRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;

  /**
   * <p>
   *    The identifier for the specified control set.
   * </p>
   */
  controlSetId: string | undefined;

  /**
   * <p>
   *    The identifier for the specified control.
   * </p>
   */
  controlId: string | undefined;

  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;

  /**
   * <p>
   *    Represents the maximum number of results per page, or per API request call.
   * </p>
   */
  maxResults?: number;
}

export namespace GetEvidenceFoldersByAssessmentControlRequest {
  export const filterSensitiveLog = (obj: GetEvidenceFoldersByAssessmentControlRequest): any => ({
    ...obj,
  });
}

export interface GetEvidenceFoldersByAssessmentControlResponse {
  /**
   * <p>
   *    The list of evidence folders returned by the <code>GetEvidenceFoldersByAssessmentControl</code> API.
   * </p>
   */
  evidenceFolders?: AssessmentEvidenceFolder[];

  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
}

export namespace GetEvidenceFoldersByAssessmentControlResponse {
  export const filterSensitiveLog = (obj: GetEvidenceFoldersByAssessmentControlResponse): any => ({
    ...obj,
  });
}

export interface GetOrganizationAdminAccountRequest {}

export namespace GetOrganizationAdminAccountRequest {
  export const filterSensitiveLog = (obj: GetOrganizationAdminAccountRequest): any => ({
    ...obj,
  });
}

export interface GetOrganizationAdminAccountResponse {
  /**
   * <p>
   *    The identifier for the specified administrator account.
   * </p>
   */
  adminAccountId?: string;

  /**
   * <p>
   *    The identifier for the specified organization.
   * </p>
   */
  organizationId?: string;
}

export namespace GetOrganizationAdminAccountResponse {
  export const filterSensitiveLog = (obj: GetOrganizationAdminAccountResponse): any => ({
    ...obj,
  });
}

export interface GetServicesInScopeRequest {}

export namespace GetServicesInScopeRequest {
  export const filterSensitiveLog = (obj: GetServicesInScopeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>
 *    The metadata associated with the specified AWS service.
 * </p>
 */
export interface ServiceMetadata {
  /**
   * <p>
   * The name of the AWS service.
   * </p>
   */
  name?: string;

  /**
   * <p>
   * The display name of the AWS service.
   * </p>
   */
  displayName?: string;

  /**
   * <p>
   *    The description of the specified AWS service.
   * </p>
   */
  description?: string;

  /**
   * <p>
   *    The category in which the AWS service belongs, such as compute, storage, database, and so on.
   * </p>
   */
  category?: string;
}

export namespace ServiceMetadata {
  export const filterSensitiveLog = (obj: ServiceMetadata): any => ({
    ...obj,
  });
}

export interface GetServicesInScopeResponse {
  /**
   * <p>
   *    The metadata associated with the aAWS service.
   * </p>
   */
  serviceMetadata?: ServiceMetadata[];
}

export namespace GetServicesInScopeResponse {
  export const filterSensitiveLog = (obj: GetServicesInScopeResponse): any => ({
    ...obj,
  });
}

export enum SettingAttribute {
  ALL = "ALL",
  DEFAULT_ASSESSMENT_REPORTS_DESTINATION = "DEFAULT_ASSESSMENT_REPORTS_DESTINATION",
  DEFAULT_PROCESS_OWNERS = "DEFAULT_PROCESS_OWNERS",
  IS_AWS_ORG_ENABLED = "IS_AWS_ORG_ENABLED",
  SNS_TOPIC = "SNS_TOPIC",
}

export interface GetSettingsRequest {
  /**
   * <p>
   *    The list of <code>SettingAttribute</code> enum values.
   * </p>
   */
  attribute: SettingAttribute | string | undefined;
}

export namespace GetSettingsRequest {
  export const filterSensitiveLog = (obj: GetSettingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>
 *    The settings object that holds all supported AWS Audit Manager settings.
 * </p>
 */
export interface Settings {
  /**
   * <p>
   *  Specifies whether AWS Organizations is enabled.
   * </p>
   */
  isAwsOrgEnabled?: boolean;

  /**
   * <p>
   *  The designated Amazon Simple Notification Service (Amazon SNS) topic.
   * </p>
   */
  snsTopic?: string;

  /**
   * <p>
   *    The default storage destination for assessment reports.
   * </p>
   */
  defaultAssessmentReportsDestination?: AssessmentReportsDestination;

  /**
   * <p>
   *  The designated default audit owners.
   * </p>
   */
  defaultProcessOwners?: Role[];

  /**
   * <p>
   *          The AWS KMS key details.
   *       </p>
   */
  kmsKey?: string;
}

export namespace Settings {
  export const filterSensitiveLog = (obj: Settings): any => ({
    ...obj,
  });
}

export interface GetSettingsResponse {
  /**
   * <p>
   *    The settings object that holds all supported AWS Audit Manager settings.
   * </p>
   */
  settings?: Settings;
}

export namespace GetSettingsResponse {
  export const filterSensitiveLog = (obj: GetSettingsResponse): any => ({
    ...obj,
  });
}

export interface ListAssessmentFrameworksRequest {
  /**
   * <p>
   *    The type of framework, such as standard or custom.
   * </p>
   */
  frameworkType: FrameworkType | string | undefined;

  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;

  /**
   * <p>
   *    Represents the maximum number of results per page, or per API request call.
   * </p>
   */
  maxResults?: number;
}

export namespace ListAssessmentFrameworksRequest {
  export const filterSensitiveLog = (obj: ListAssessmentFrameworksRequest): any => ({
    ...obj,
  });
}

export interface ListAssessmentFrameworksResponse {
  /**
   * <p>
   * The list of metadata objects for the specified framework.
   * </p>
   */
  frameworkMetadataList?: AssessmentFrameworkMetadata[];

  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
}

export namespace ListAssessmentFrameworksResponse {
  export const filterSensitiveLog = (obj: ListAssessmentFrameworksResponse): any => ({
    ...obj,
  });
}

export interface ListAssessmentReportsRequest {
  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;

  /**
   * <p>
   *    Represents the maximum number of results per page, or per API request call.
   * </p>
   */
  maxResults?: number;
}

export namespace ListAssessmentReportsRequest {
  export const filterSensitiveLog = (obj: ListAssessmentReportsRequest): any => ({
    ...obj,
  });
}

export interface ListAssessmentReportsResponse {
  /**
   * <p>
   *    The list of assessment reports returned by the <code>ListAssessmentReports</code> API.
   * </p>
   */
  assessmentReports?: AssessmentReportMetadata[];

  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
}

export namespace ListAssessmentReportsResponse {
  export const filterSensitiveLog = (obj: ListAssessmentReportsResponse): any => ({
    ...obj,
  });
}

export interface ListAssessmentsRequest {
  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;

  /**
   * <p>
   *    Represents the maximum number of results per page, or per API request call.
   * </p>
   */
  maxResults?: number;
}

export namespace ListAssessmentsRequest {
  export const filterSensitiveLog = (obj: ListAssessmentsRequest): any => ({
    ...obj,
  });
}

export interface ListAssessmentsResponse {
  /**
   * <p>
   *    The metadata associated with the assessment.
   * </p>
   */
  assessmentMetadata?: AssessmentMetadataItem[];

  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
}

export namespace ListAssessmentsResponse {
  export const filterSensitiveLog = (obj: ListAssessmentsResponse): any => ({
    ...obj,
  });
}

export interface ListControlsRequest {
  /**
   * <p>
   * The type of control, such as standard or custom.
   * </p>
   */
  controlType: ControlType | string | undefined;

  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;

  /**
   * <p>
   *    Represents the maximum number of results per page, or per API request call.
   * </p>
   */
  maxResults?: number;
}

export namespace ListControlsRequest {
  export const filterSensitiveLog = (obj: ListControlsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>
 *    The metadata associated with the specified standard or custom control.
 * </p>
 */
export interface ControlMetadata {
  /**
   * <p>
   *    The Amazon Resource Name (ARN) of the specified control.
   * </p>
   */
  arn?: string;

  /**
   * <p>
   * The unique identifier for the specified control.
   * </p>
   */
  id?: string;

  /**
   * <p>
   * The name of the specified control.
   * </p>
   */
  name?: string;

  /**
   * <p>
   *    The data source that determines from where AWS Audit Manager collects evidence for the control.
   * </p>
   */
  controlSources?: string;

  /**
   * <p>
   *    Specifies when the control was created.
   * </p>
   */
  createdAt?: Date;

  /**
   * <p>
   *    Specifies when the control was most recently updated.
   * </p>
   */
  lastUpdatedAt?: Date;
}

export namespace ControlMetadata {
  export const filterSensitiveLog = (obj: ControlMetadata): any => ({
    ...obj,
  });
}

export interface ListControlsResponse {
  /**
   * <p>
   *    The list of control metadata objects returned by the <code>ListControls</code> API.
   * </p>
   */
  controlMetadataList?: ControlMetadata[];

  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
}

export namespace ListControlsResponse {
  export const filterSensitiveLog = (obj: ListControlsResponse): any => ({
    ...obj,
  });
}

export interface ListKeywordsForDataSourceRequest {
  /**
   * <p>
   * The control mapping data source to which the keywords apply.
   * </p>
   */
  source: SourceType | string | undefined;

  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;

  /**
   * <p>
   *    Represents the maximum number of results per page, or per API request call.
   * </p>
   */
  maxResults?: number;
}

export namespace ListKeywordsForDataSourceRequest {
  export const filterSensitiveLog = (obj: ListKeywordsForDataSourceRequest): any => ({
    ...obj,
  });
}

export interface ListKeywordsForDataSourceResponse {
  /**
   * <p>
   *    The list of keywords for the specified event mapping source.
   * </p>
   */
  keywords?: string[];

  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
}

export namespace ListKeywordsForDataSourceResponse {
  export const filterSensitiveLog = (obj: ListKeywordsForDataSourceResponse): any => ({
    ...obj,
  });
}

export interface ListNotificationsRequest {
  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;

  /**
   * <p>
   *   Represents the maximum number of results per page, or per API request call.
   * </p>
   */
  maxResults?: number;
}

export namespace ListNotificationsRequest {
  export const filterSensitiveLog = (obj: ListNotificationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>
 *    The notification used to inform a user of an update in AWS Audit Manager. For example, this includes the notification that is sent when a control set is delegated for review.
 * </p>
 */
export interface Notification {
  /**
   * <p>
   *  The unique identifier for the notification.
   * </p>
   */
  id?: string;

  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId?: string;

  /**
   * <p>
   *  The name of the related assessment.
   * </p>
   */
  assessmentName?: string;

  /**
   * <p>
   *    The identifier for the specified control set.
   * </p>
   */
  controlSetId?: string;

  /**
   * <p>
   *          Specifies the name of the control set that the notification is about.
   *       </p>
   */
  controlSetName?: string;

  /**
   * <p>
   *  The description of the notification.
   * </p>
   */
  description?: string;

  /**
   * <p>
   *          The time when the notification was sent.
   *       </p>
   */
  eventTime?: Date;

  /**
   * <p>
   *  The sender of the notification.
   * </p>
   */
  source?: string;
}

export namespace Notification {
  export const filterSensitiveLog = (obj: Notification): any => ({
    ...obj,
  });
}

export interface ListNotificationsResponse {
  /**
   * <p>
   *  The returned list of notifications.
   * </p>
   */
  notifications?: Notification[];

  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
}

export namespace ListNotificationsResponse {
  export const filterSensitiveLog = (obj: ListNotificationsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>
   *    The Amazon Resource Name (ARN) of the specified resource.
   * </p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>
   *    The list of tags returned by the <code>ListTagsForResource</code> API.
   * </p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface RegisterAccountRequest {
  /**
   * <p>
   *    The AWS KMS key details.
   * </p>
   */
  kmsKey?: string;

  /**
   * <p>
   *    The delegated administrator account for AWS Audit Manager.
   * </p>
   */
  delegatedAdminAccount?: string;
}

export namespace RegisterAccountRequest {
  export const filterSensitiveLog = (obj: RegisterAccountRequest): any => ({
    ...obj,
  });
}

export interface RegisterAccountResponse {
  /**
   * <p>
   *  The status of the account registration request.
   * </p>
   */
  status?: AccountStatus | string;
}

export namespace RegisterAccountResponse {
  export const filterSensitiveLog = (obj: RegisterAccountResponse): any => ({
    ...obj,
  });
}

export interface RegisterOrganizationAdminAccountRequest {
  /**
   * <p>
   *    The identifier for the specified delegated administrator account.
   * </p>
   */
  adminAccountId: string | undefined;
}

export namespace RegisterOrganizationAdminAccountRequest {
  export const filterSensitiveLog = (obj: RegisterOrganizationAdminAccountRequest): any => ({
    ...obj,
  });
}

export interface RegisterOrganizationAdminAccountResponse {
  /**
   * <p>
   *    The identifier for the specified delegated administrator account.
   * </p>
   */
  adminAccountId?: string;

  /**
   * <p>
   *    The identifier for the specified AWS organization.
   * </p>
   */
  organizationId?: string;
}

export namespace RegisterOrganizationAdminAccountResponse {
  export const filterSensitiveLog = (obj: RegisterOrganizationAdminAccountResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>
   *    The Amazon Resource Name (ARN) of the specified resource.
   * </p>
   */
  resourceArn: string | undefined;

  /**
   * <p>
   * The tags to be associated with the resource.
   * </p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>
   *    The Amazon Resource Name (ARN) of the specified resource.
   * </p>
   */
  resourceArn: string | undefined;

  /**
   * <p>
   *    The name or key of the tag.
   * </p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateAssessmentRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;

  /**
   * <p>
   *  The name of the specified assessment to be updated.
   * </p>
   */
  assessmentName?: string;

  /**
   * <p>
   *  The description of the specified assessment.
   * </p>
   */
  assessmentDescription?: string;

  /**
   * <p>
   *  The scope of the specified assessment.
   * </p>
   */
  scope: Scope | undefined;

  /**
   * <p>
   *    The assessment report storage destination for the specified assessment that is being updated.
   * </p>
   */
  assessmentReportsDestination?: AssessmentReportsDestination;

  /**
   * <p>
   *  The list of roles for the specified assessment.
   * </p>
   */
  roles?: Role[];
}

export namespace UpdateAssessmentRequest {
  export const filterSensitiveLog = (obj: UpdateAssessmentRequest): any => ({
    ...obj,
  });
}

export interface UpdateAssessmentResponse {
  /**
   * <p>
   *    The response object (name of the updated assessment) for the <code>UpdateAssessmentRequest</code> API.
   * </p>
   */
  assessment?: Assessment;
}

export namespace UpdateAssessmentResponse {
  export const filterSensitiveLog = (obj: UpdateAssessmentResponse): any => ({
    ...obj,
  });
}

export interface UpdateAssessmentControlRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;

  /**
   * <p>
   *    The identifier for the specified control set.
   * </p>
   */
  controlSetId: string | undefined;

  /**
   * <p>
   *
   *    The identifier for the specified control.
   * </p>
   */
  controlId: string | undefined;

  /**
   * <p>
   *    The status of the specified control.
   * </p>
   */
  controlStatus?: ControlStatus | string;

  /**
   * <p>
   *    The comment body text for the specified control.
   * </p>
   */
  commentBody?: string;
}

export namespace UpdateAssessmentControlRequest {
  export const filterSensitiveLog = (obj: UpdateAssessmentControlRequest): any => ({
    ...obj,
  });
}

export interface UpdateAssessmentControlResponse {
  /**
   * <p>
   *    The name of the updated control set returned by the <code>UpdateAssessmentControl</code> API.
   * </p>
   */
  control?: AssessmentControl;
}

export namespace UpdateAssessmentControlResponse {
  export const filterSensitiveLog = (obj: UpdateAssessmentControlResponse): any => ({
    ...obj,
  });
}

export interface UpdateAssessmentControlSetStatusRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;

  /**
   * <p>
   *    The identifier for the specified control set.
   * </p>
   */
  controlSetId: string | undefined;

  /**
   * <p>
   * The status of the control set that is being updated.
   * </p>
   */
  status: ControlSetStatus | string | undefined;

  /**
   * <p>
   *    The comment related to the status update.
   * </p>
   */
  comment: string | undefined;
}

export namespace UpdateAssessmentControlSetStatusRequest {
  export const filterSensitiveLog = (obj: UpdateAssessmentControlSetStatusRequest): any => ({
    ...obj,
  });
}

export interface UpdateAssessmentControlSetStatusResponse {
  /**
   * <p>
   *    The name of the updated control set returned by the <code>UpdateAssessmentControlSetStatus</code> API.
   * </p>
   */
  controlSet?: AssessmentControlSet;
}

export namespace UpdateAssessmentControlSetStatusResponse {
  export const filterSensitiveLog = (obj: UpdateAssessmentControlSetStatusResponse): any => ({
    ...obj,
  });
}

/**
 * <p>
 *    A <code>controlSet</code> entity that represents a collection of controls in AWS Audit Manager. This does not contain the control set ID.
 * </p>
 */
export interface UpdateAssessmentFrameworkControlSet {
  /**
   * <p>
   * The unique identifier for the control set.
   * </p>
   */
  id?: string;

  /**
   * <p>
   * The name of the control set.
   * </p>
   */
  name?: string;

  /**
   * <p>
   * The list of controls contained within the control set.
   * </p>
   */
  controls?: CreateAssessmentFrameworkControl[];
}

export namespace UpdateAssessmentFrameworkControlSet {
  export const filterSensitiveLog = (obj: UpdateAssessmentFrameworkControlSet): any => ({
    ...obj,
  });
}

export interface UpdateAssessmentFrameworkRequest {
  /**
   * <p>
   *    The identifier for the specified framework.
   * </p>
   */
  frameworkId: string | undefined;

  /**
   * <p>
   * The name of the framework to be updated.
   * </p>
   */
  name: string | undefined;

  /**
   * <p>
   * The description of the framework that is to be updated.
   * </p>
   */
  description?: string;

  /**
   * <p>
   *    The compliance type that the new custom framework supports, such as CIS or HIPAA.
   * </p>
   */
  complianceType?: string;

  /**
   * <p>
   *    The control sets associated with the framework.
   * </p>
   */
  controlSets: UpdateAssessmentFrameworkControlSet[] | undefined;
}

export namespace UpdateAssessmentFrameworkRequest {
  export const filterSensitiveLog = (obj: UpdateAssessmentFrameworkRequest): any => ({
    ...obj,
  });
}

export interface UpdateAssessmentFrameworkResponse {
  /**
   * <p>
   * The name of the specified framework.
   * </p>
   */
  framework?: Framework;
}

export namespace UpdateAssessmentFrameworkResponse {
  export const filterSensitiveLog = (obj: UpdateAssessmentFrameworkResponse): any => ({
    ...obj,
  });
}

export interface UpdateAssessmentStatusRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;

  /**
   * <p>
   *    The current status of the specified assessment.
   * </p>
   */
  status: AssessmentStatus | string | undefined;
}

export namespace UpdateAssessmentStatusRequest {
  export const filterSensitiveLog = (obj: UpdateAssessmentStatusRequest): any => ({
    ...obj,
  });
}

export interface UpdateAssessmentStatusResponse {
  /**
   * <p>
   *    The name of the updated assessment returned by the <code>UpdateAssessmentStatus</code> API.
   * </p>
   */
  assessment?: Assessment;
}

export namespace UpdateAssessmentStatusResponse {
  export const filterSensitiveLog = (obj: UpdateAssessmentStatusResponse): any => ({
    ...obj,
  });
}

export interface UpdateControlRequest {
  /**
   * <p>
   *    The identifier for the specified control.
   * </p>
   */
  controlId: string | undefined;

  /**
   * <p>
   * The name of the control to be updated.
   * </p>
   */
  name: string | undefined;

  /**
   * <p>
   * The optional description of the control.
   * </p>
   */
  description?: string;

  /**
   * <p>
   *          The steps that to follow to determine if the control has been satisfied.
   *       </p>
   */
  testingInformation?: string;

  /**
   * <p>
   *          The title of the action plan for remediating the control.
   *       </p>
   */
  actionPlanTitle?: string;

  /**
   * <p>
   *
   *          The recommended actions to carry out if the control is not fulfilled.
   *       </p>
   */
  actionPlanInstructions?: string;

  /**
   * <p>
   *    The data source that determines from where AWS Audit Manager collects evidence for the control.
   * </p>
   */
  controlMappingSources: ControlMappingSource[] | undefined;
}

export namespace UpdateControlRequest {
  export const filterSensitiveLog = (obj: UpdateControlRequest): any => ({
    ...obj,
  });
}

export interface UpdateControlResponse {
  /**
   * <p>
   *    The name of the updated control set returned by the <code>UpdateControl</code> API.
   * </p>
   */
  control?: Control;
}

export namespace UpdateControlResponse {
  export const filterSensitiveLog = (obj: UpdateControlResponse): any => ({
    ...obj,
  });
}

export interface UpdateSettingsRequest {
  /**
   * <p>
   * The Amazon Simple Notification Service (Amazon SNS) topic to which AWS Audit Manager sends notifications.
   * </p>
   */
  snsTopic?: string;

  /**
   * <p>
   *    The default storage destination for assessment reports.
   * </p>
   */
  defaultAssessmentReportsDestination?: AssessmentReportsDestination;

  /**
   * <p>
   * A list of the default audit owners.
   * </p>
   */
  defaultProcessOwners?: Role[];

  /**
   * <p>
   *          The AWS KMS key details.
   *       </p>
   */
  kmsKey?: string;
}

export namespace UpdateSettingsRequest {
  export const filterSensitiveLog = (obj: UpdateSettingsRequest): any => ({
    ...obj,
  });
}

export interface UpdateSettingsResponse {
  /**
   * <p>
   * The current list of settings.
   * </p>
   */
  settings?: Settings;
}

export namespace UpdateSettingsResponse {
  export const filterSensitiveLog = (obj: UpdateSettingsResponse): any => ({
    ...obj,
  });
}

export interface ValidateAssessmentReportIntegrityRequest {
  /**
   * <p>
   *    The relative path of the specified Amazon S3 bucket in which the assessment report is stored.
   * </p>
   */
  s3RelativePath: string | undefined;
}

export namespace ValidateAssessmentReportIntegrityRequest {
  export const filterSensitiveLog = (obj: ValidateAssessmentReportIntegrityRequest): any => ({
    ...obj,
  });
}

export interface ValidateAssessmentReportIntegrityResponse {
  /**
   * <p>
   * Specifies whether the signature key is valid.
   * </p>
   */
  signatureValid?: boolean;

  /**
   * <p>
   *    The signature algorithm used to code sign the assessment report file.
   * </p>
   */
  signatureAlgorithm?: string;

  /**
   * <p>
   * The date and time signature that specifies when the assessment report was created.
   * </p>
   */
  signatureDateTime?: string;

  /**
   * <p>
   * The unique identifier for the validation signature key.
   * </p>
   */
  signatureKeyId?: string;

  /**
   * <p>
   * Represents any errors that occurred when validating the assessment report.
   * </p>
   */
  validationErrors?: string[];
}

export namespace ValidateAssessmentReportIntegrityResponse {
  export const filterSensitiveLog = (obj: ValidateAssessmentReportIntegrityResponse): any => ({
    ...obj,
  });
}
