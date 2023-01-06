// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { AuditManagerServiceException as __BaseException } from "./AuditManagerServiceException";

/**
 * <p> Your account isn't registered with Audit Manager. Check the delegated
 *          administrator setup on the Audit Manager settings page, and try again. </p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
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
 * <p> The wrapper of Amazon Web Services account details, such as account ID or email address.
 *       </p>
 */
export interface AWSAccount {
  /**
   * <p> The identifier for the Amazon Web Services account. </p>
   */
  id?: string;

  /**
   * <p> The email address that's associated with the Amazon Web Services account. </p>
   */
  emailAddress?: string;

  /**
   * <p> The name of the Amazon Web Services account. </p>
   */
  name?: string;
}

/**
 * <p> A comment that's posted by a user on a control. This includes the author's name, the
 *          comment text, and a timestamp. </p>
 */
export interface ControlComment {
  /**
   * <p> The name of the user who authored the comment. </p>
   */
  authorName?: string;

  /**
   * <p> The body text of a control comment. </p>
   */
  commentBody?: string;

  /**
   * <p> The time when the comment was posted. </p>
   */
  postedDate?: Date;
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
 * <p> The control entity that represents a standard control or a custom control in an Audit Manager assessment. </p>
 */
export interface AssessmentControl {
  /**
   * <p> The identifier for the control. </p>
   */
  id?: string;

  /**
   * <p> The name of the control. </p>
   */
  name?: string;

  /**
   * <p> The description of the control. </p>
   */
  description?: string;

  /**
   * <p> The status of the control. </p>
   */
  status?: ControlStatus | string;

  /**
   * <p> The response of the control. </p>
   */
  response?: ControlResponse | string;

  /**
   * <p> The list of comments that's attached to the control. </p>
   */
  comments?: ControlComment[];

  /**
   * <p> The list of data sources for the evidence. </p>
   */
  evidenceSources?: string[];

  /**
   * <p> The amount of evidence that's collected for the control. </p>
   */
  evidenceCount?: number;

  /**
   * <p> The amount of evidence in the assessment report. </p>
   */
  assessmentReportEvidenceCount?: number;
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
 * <p> The assignment of a control set to a delegate for review. </p>
 */
export interface Delegation {
  /**
   * <p> The unique identifier for the delegation. </p>
   */
  id?: string;

  /**
   * <p> The name of the assessment that's associated with the delegation. </p>
   */
  assessmentName?: string;

  /**
   * <p> The identifier for the assessment that's associated with the delegation. </p>
   */
  assessmentId?: string;

  /**
   * <p> The status of the delegation. </p>
   */
  status?: DelegationStatus | string;

  /**
   * <p> The Amazon Resource Name (ARN) of the IAM role. </p>
   */
  roleArn?: string;

  /**
   * <p> The type of customer persona. </p>
   *          <note>
   *             <p>In <code>CreateAssessment</code>, <code>roleType</code> can only be
   *                <code>PROCESS_OWNER</code>. </p>
   *             <p>In <code>UpdateSettings</code>, <code>roleType</code> can only be
   *                <code>PROCESS_OWNER</code>.</p>
   *             <p>In <code>BatchCreateDelegationByAssessment</code>, <code>roleType</code> can only be
   *                <code>RESOURCE_OWNER</code>.</p>
   *          </note>
   */
  roleType?: RoleType | string;

  /**
   * <p> Specifies when the delegation was created. </p>
   */
  creationTime?: Date;

  /**
   * <p> Specifies when the delegation was last updated. </p>
   */
  lastUpdated?: Date;

  /**
   * <p> The identifier for the control set that's associated with the delegation. </p>
   */
  controlSetId?: string;

  /**
   * <p> The comment that's related to the delegation. </p>
   */
  comment?: string;

  /**
   * <p> The IAM user or role that created the delegation. </p>
   */
  createdBy?: string;
}

/**
 * <p> The wrapper that contains the Audit Manager role information of the current user.
 *          This includes the role type and IAM Amazon Resource Name (ARN). </p>
 */
export interface Role {
  /**
   * <p> The type of customer persona. </p>
   *          <note>
   *             <p>In <code>CreateAssessment</code>, <code>roleType</code> can only be
   *                <code>PROCESS_OWNER</code>. </p>
   *             <p>In <code>UpdateSettings</code>, <code>roleType</code> can only be
   *                <code>PROCESS_OWNER</code>.</p>
   *             <p>In <code>BatchCreateDelegationByAssessment</code>, <code>roleType</code> can only be
   *                <code>RESOURCE_OWNER</code>.</p>
   *          </note>
   */
  roleType: RoleType | string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the IAM role. </p>
   */
  roleArn: string | undefined;
}

export enum ControlSetStatus {
  ACTIVE = "ACTIVE",
  REVIEWED = "REVIEWED",
  UNDER_REVIEW = "UNDER_REVIEW",
}

/**
 * <p> Represents a set of controls in an Audit Manager assessment. </p>
 */
export interface AssessmentControlSet {
  /**
   * <p> The identifier of the control set in the assessment. This is the control set name in a
   *          plain string format. </p>
   */
  id?: string;

  /**
   * <p> The description for the control set. </p>
   */
  description?: string;

  /**
   * <p> The current status of the control set. </p>
   */
  status?: ControlSetStatus | string;

  /**
   * <p> The roles that are associated with the control set. </p>
   */
  roles?: Role[];

  /**
   * <p> The list of controls that's contained with the control set. </p>
   */
  controls?: AssessmentControl[];

  /**
   * <p> The delegations that are associated with the control set. </p>
   */
  delegations?: Delegation[];

  /**
   * <p> The total number of evidence objects that are retrieved automatically for the control
   *          set. </p>
   */
  systemEvidenceCount?: number;

  /**
   * <p> The total number of evidence objects that are uploaded manually to the control set.
   *       </p>
   */
  manualEvidenceCount?: number;
}

/**
 * <p> The metadata of a framework, such as the name, ID, or description. </p>
 */
export interface FrameworkMetadata {
  /**
   * <p> The name of the framework. </p>
   */
  name?: string;

  /**
   * <p> The description of the framework. </p>
   */
  description?: string;

  /**
   * <p> The logo that's associated with the framework. </p>
   */
  logo?: string;

  /**
   * <p> The compliance standard that's associated with the framework. For example, this could
   *          be PCI DSS or HIPAA. </p>
   */
  complianceType?: string;
}

/**
 * <p> The file used to structure and automate Audit Manager assessments for a given
 *          compliance standard. </p>
 */
export interface AssessmentFramework {
  /**
   * <p> The unique identifier for the framework. </p>
   */
  id?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the framework. </p>
   */
  arn?: string;

  /**
   * <p> The metadata of a framework, such as the name, ID, or description. </p>
   */
  metadata?: FrameworkMetadata;

  /**
   * <p> The control sets that are associated with the framework. </p>
   */
  controlSets?: AssessmentControlSet[];
}

export enum AssessmentReportDestinationType {
  S3 = "S3",
}

/**
 * <p> The location where Audit Manager saves assessment reports for the given
 *          assessment. </p>
 */
export interface AssessmentReportsDestination {
  /**
   * <p> The destination type, such as Amazon S3. </p>
   */
  destinationType?: AssessmentReportDestinationType | string;

  /**
   * <p> The destination of the assessment report. </p>
   */
  destination?: string;
}

/**
 * <p> An Amazon Web Service such as Amazon S3 or CloudTrail.
 *       </p>
 */
export interface AWSService {
  /**
   * <p> The name of the Amazon Web Service. </p>
   */
  serviceName?: string;
}

/**
 * <p> The wrapper that contains the Amazon Web Services accounts and services that are in
 *          scope for the assessment. </p>
 */
export interface Scope {
  /**
   * <p> The Amazon Web Services accounts that are included in the scope of the assessment.
   *       </p>
   */
  awsAccounts?: AWSAccount[];

  /**
   * <p> The Amazon Web Services services that are included in the scope of the assessment.
   *       </p>
   */
  awsServices?: AWSService[];
}

export enum AssessmentStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

/**
 * <p> The metadata that's associated with the specified assessment. </p>
 */
export interface AssessmentMetadata {
  /**
   * <p> The name of the assessment. </p>
   */
  name?: string;

  /**
   * <p> The unique identifier for the assessment. </p>
   */
  id?: string;

  /**
   * <p> The description of the assessment. </p>
   */
  description?: string;

  /**
   * <p> The name of the compliance standard that's related to the assessment, such as PCI-DSS.
   *       </p>
   */
  complianceType?: string;

  /**
   * <p> The overall status of the assessment. </p>
   */
  status?: AssessmentStatus | string;

  /**
   * <p> The destination that evidence reports are stored in for the assessment. </p>
   */
  assessmentReportsDestination?: AssessmentReportsDestination;

  /**
   * <p> The wrapper of Amazon Web Services accounts and services that are in scope for the
   *          assessment. </p>
   */
  scope?: Scope;

  /**
   * <p> The roles that are associated with the assessment. </p>
   */
  roles?: Role[];

  /**
   * <p> The delegations that are associated with the assessment. </p>
   */
  delegations?: Delegation[];

  /**
   * <p> Specifies when the assessment was created. </p>
   */
  creationTime?: Date;

  /**
   * <p> The time of the most recent update. </p>
   */
  lastUpdated?: Date;
}

/**
 * <p> An entity that defines the scope of audit evidence collected by Audit Manager.
 *          An Audit Manager assessment is an implementation of an Audit Manager framework. </p>
 */
export interface Assessment {
  /**
   * <p> The Amazon Resource Name (ARN) of the assessment. </p>
   */
  arn?: string;

  /**
   * <p> The Amazon Web Services account that's associated with the assessment. </p>
   */
  awsAccount?: AWSAccount;

  /**
   * <p> The metadata for the assessment. </p>
   */
  metadata?: AssessmentMetadata;

  /**
   * <p> The framework that the assessment was created from. </p>
   */
  framework?: AssessmentFramework;

  /**
   * <p> The tags that are associated with the assessment. </p>
   */
  tags?: Record<string, string>;
}

/**
 * <p> The folder where Audit Manager stores evidence for an assessment. </p>
 */
export interface AssessmentEvidenceFolder {
  /**
   * <p> The name of the evidence folder. </p>
   */
  name?: string;

  /**
   * <p> The date when the first evidence was added to the evidence folder. </p>
   */
  date?: Date;

  /**
   * <p> The identifier for the assessment. </p>
   */
  assessmentId?: string;

  /**
   * <p> The identifier for the control set. </p>
   */
  controlSetId?: string;

  /**
   * <p> The unique identifier for the control. </p>
   */
  controlId?: string;

  /**
   * <p> The identifier for the folder that the evidence is stored in. </p>
   */
  id?: string;

  /**
   * <p> The Amazon Web Service that the evidence was collected from. </p>
   */
  dataSource?: string;

  /**
   * <p> The name of the user who created the evidence folder. </p>
   */
  author?: string;

  /**
   * <p> The total amount of evidence in the evidence folder. </p>
   */
  totalEvidence?: number;

  /**
   * <p> The total count of evidence that's included in the assessment report. </p>
   */
  assessmentReportSelectionCount?: number;

  /**
   * <p> The name of the control. </p>
   */
  controlName?: string;

  /**
   * <p> The amount of evidence that's included in the evidence folder. </p>
   */
  evidenceResourcesIncludedCount?: number;

  /**
   * <p> The number of evidence that falls under the configuration data category. This evidence
   *          is collected from configuration snapshots of other Amazon Web Services such as
   *             Amazon EC2, Amazon S3, or IAM. </p>
   */
  evidenceByTypeConfigurationDataCount?: number;

  /**
   * <p> The number of evidence that falls under the manual category. This evidence is imported
   *          manually. </p>
   */
  evidenceByTypeManualCount?: number;

  /**
   * <p> The number of evidence that falls under the compliance check category. This evidence is
   *          collected from Config or Security Hub. </p>
   */
  evidenceByTypeComplianceCheckCount?: number;

  /**
   * <p> The total number of issues that were reported directly from Security Hub,
   *             Config, or both. </p>
   */
  evidenceByTypeComplianceCheckIssuesCount?: number;

  /**
   * <p> The number of evidence that falls under the user activity category. This evidence is
   *          collected from CloudTrail logs. </p>
   */
  evidenceByTypeUserActivityCount?: number;

  /**
   * <p> The total number of Amazon Web Services resources that were assessed to generate the
   *          evidence. </p>
   */
  evidenceAwsServiceSourceCount?: number;
}

export enum FrameworkType {
  CUSTOM = "Custom",
  STANDARD = "Standard",
}

/**
 * <p> The metadata that's associated with a standard framework or a custom framework. </p>
 */
export interface AssessmentFrameworkMetadata {
  /**
   * <p> The Amazon Resource Name (ARN) of the framework. </p>
   */
  arn?: string;

  /**
   * <p> The unique identifier for the framework. </p>
   */
  id?: string;

  /**
   * <p> The framework type, such as a standard framework or a custom framework. </p>
   */
  type?: FrameworkType | string;

  /**
   * <p> The name of the framework. </p>
   */
  name?: string;

  /**
   * <p> The description of the framework. </p>
   */
  description?: string;

  /**
   * <p> The logo that's associated with the framework. </p>
   */
  logo?: string;

  /**
   * <p> The compliance type that the new custom framework supports, such as CIS or HIPAA.
   *       </p>
   */
  complianceType?: string;

  /**
   * <p> The number of controls that are associated with the framework. </p>
   */
  controlsCount?: number;

  /**
   * <p> The number of control sets that are associated with the framework. </p>
   */
  controlSetsCount?: number;

  /**
   * <p> The time when the framework was created. </p>
   */
  createdAt?: Date;

  /**
   * <p> The time when the framework was most recently updated. </p>
   */
  lastUpdatedAt?: Date;
}

export enum ShareRequestStatus {
  ACTIVE = "ACTIVE",
  DECLINED = "DECLINED",
  EXPIRED = "EXPIRED",
  EXPIRING = "EXPIRING",
  FAILED = "FAILED",
  REPLICATING = "REPLICATING",
  REVOKED = "REVOKED",
  SHARED = "SHARED",
}

/**
 * <p> Represents a share request for a custom framework in Audit Manager. </p>
 */
export interface AssessmentFrameworkShareRequest {
  /**
   * <p> The unique identifier for the share request. </p>
   */
  id?: string;

  /**
   * <p>The unique identifier for the shared custom framework. </p>
   */
  frameworkId?: string;

  /**
   * <p> The name of the custom framework that the share request is for. </p>
   */
  frameworkName?: string;

  /**
   * <p>The description of the shared custom framework.</p>
   */
  frameworkDescription?: string;

  /**
   * <p> The status of the share request. </p>
   */
  status?: ShareRequestStatus | string;

  /**
   * <p> The Amazon Web Services account of the sender. </p>
   */
  sourceAccount?: string;

  /**
   * <p> The Amazon Web Services account of the recipient. </p>
   */
  destinationAccount?: string;

  /**
   * <p> The Amazon Web Services Region of the recipient. </p>
   */
  destinationRegion?: string;

  /**
   * <p> The time when the share request expires. </p>
   */
  expirationTime?: Date;

  /**
   * <p> The time when the share request was created. </p>
   */
  creationTime?: Date;

  /**
   * <p> Specifies when the share request was last updated. </p>
   */
  lastUpdated?: Date;

  /**
   * <p> An optional comment from the sender about the share request. </p>
   */
  comment?: string;

  /**
   * <p>The number of standard controls that are part of the shared custom framework. </p>
   */
  standardControlsCount?: number;

  /**
   * <p>The number of custom controls that are part of the shared custom framework.</p>
   */
  customControlsCount?: number;

  /**
   * <p>The compliance type that the shared custom framework supports, such as CIS or
   *          HIPAA.</p>
   */
  complianceType?: string;
}

/**
 * <p> A metadata object that's associated with an assessment in Audit Manager.
 *       </p>
 */
export interface AssessmentMetadataItem {
  /**
   * <p> The name of the assessment. </p>
   */
  name?: string;

  /**
   * <p> The unique identifier for the assessment. </p>
   */
  id?: string;

  /**
   * <p> The name of the compliance standard that's related to the assessment, such as PCI-DSS.
   *       </p>
   */
  complianceType?: string;

  /**
   * <p> The current status of the assessment. </p>
   */
  status?: AssessmentStatus | string;

  /**
   * <p> The roles that are associated with the assessment. </p>
   */
  roles?: Role[];

  /**
   * <p> The delegations that are associated with the assessment. </p>
   */
  delegations?: Delegation[];

  /**
   * <p> Specifies when the assessment was created. </p>
   */
  creationTime?: Date;

  /**
   * <p> The time of the most recent update. </p>
   */
  lastUpdated?: Date;
}

export enum AssessmentReportStatus {
  COMPLETE = "COMPLETE",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
}

/**
 * <p> A finalized document that's generated from an Audit Manager assessment. These
 *          reports summarize the relevant evidence that was collected for your audit, and link to the
 *          relevant evidence folders. These evidence folders are named and organized according to the
 *          controls that are specified in your assessment. </p>
 */
export interface AssessmentReport {
  /**
   * <p> The unique identifier for the assessment report. </p>
   */
  id?: string;

  /**
   * <p> The name that's given to the assessment report. </p>
   */
  name?: string;

  /**
   * <p> The description of the specified assessment report. </p>
   */
  description?: string;

  /**
   * <p> The identifier for the specified Amazon Web Services account. </p>
   */
  awsAccountId?: string;

  /**
   * <p> The identifier for the specified assessment. </p>
   */
  assessmentId?: string;

  /**
   * <p> The name of the associated assessment. </p>
   */
  assessmentName?: string;

  /**
   * <p> The name of the user who created the assessment report. </p>
   */
  author?: string;

  /**
   * <p> The current status of the specified assessment report. </p>
   */
  status?: AssessmentReportStatus | string;

  /**
   * <p> Specifies when the assessment report was created. </p>
   */
  creationTime?: Date;
}

/**
 * <p> An error entity for assessment report evidence errors. This is used to provide more
 *          meaningful errors than a simple string message. </p>
 */
export interface AssessmentReportEvidenceError {
  /**
   * <p> The identifier for the evidence. </p>
   */
  evidenceId?: string;

  /**
   * <p> The error code that was returned. </p>
   */
  errorCode?: string;

  /**
   * <p> The error message that was returned. </p>
   */
  errorMessage?: string;
}

/**
 * <p> The metadata objects that are associated with the specified assessment report. </p>
 */
export interface AssessmentReportMetadata {
  /**
   * <p> The unique identifier for the assessment report. </p>
   */
  id?: string;

  /**
   * <p> The name of the assessment report. </p>
   */
  name?: string;

  /**
   * <p> The description of the assessment report. </p>
   */
  description?: string;

  /**
   * <p> The unique identifier for the associated assessment. </p>
   */
  assessmentId?: string;

  /**
   * <p>The name of the associated assessment. </p>
   */
  assessmentName?: string;

  /**
   * <p> The name of the user who created the assessment report. </p>
   */
  author?: string;

  /**
   * <p> The current status of the assessment report. </p>
   */
  status?: AssessmentReportStatus | string;

  /**
   * <p> Specifies when the assessment report was created. </p>
   */
  creationTime?: Date;
}

export interface AssociateAssessmentReportEvidenceFolderRequest {
  /**
   * <p> The identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * <p> The identifier for the folder that the evidence is stored in. </p>
   */
  evidenceFolderId: string | undefined;
}

export interface AssociateAssessmentReportEvidenceFolderResponse {}

/**
 * <p> An internal service error occurred during the processing of your request. Try again
 *          later. </p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p> The resource that's specified in the request can't be found. </p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p> The unique identifier for the resource. </p>
   */
  resourceId: string | undefined;

  /**
   * <p> The type of resource that's affected by the error. </p>
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p> Indicates that the request has invalid or missing parameters for the field. </p>
 */
export interface ValidationExceptionField {
  /**
   * <p> The name of the validation error. </p>
   */
  name: string | undefined;

  /**
   * <p> The body of the error message. </p>
   */
  message: string | undefined;
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "cannotParse",
  FIELD_VALIDATION_FAILED = "fieldValidationFailed",
  OTHER = "other",
  UNKNOWN_OPERATION = "unknownOperation",
}

/**
 * <p> The request has invalid or missing parameters. </p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p> The reason the request failed validation. </p>
   */
  reason?: ValidationExceptionReason | string;

  /**
   * <p> The fields that caused the error, if applicable. </p>
   */
  fields?: ValidationExceptionField[];

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.reason = opts.reason;
    this.fields = opts.fields;
  }
}

export interface BatchAssociateAssessmentReportEvidenceRequest {
  /**
   * <p> The identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * <p> The identifier for the folder that the evidence is stored in. </p>
   */
  evidenceFolderId: string | undefined;

  /**
   * <p> The list of evidence identifiers. </p>
   */
  evidenceIds: string[] | undefined;
}

export interface BatchAssociateAssessmentReportEvidenceResponse {
  /**
   * <p> The list of evidence identifiers. </p>
   */
  evidenceIds?: string[];

  /**
   * <p> A list of errors that the <code>BatchAssociateAssessmentReportEvidence</code> API
   *          returned. </p>
   */
  errors?: AssessmentReportEvidenceError[];
}

/**
 * <p> A collection of attributes that's used to create a delegation for an assessment in
 *             Audit Manager. </p>
 */
export interface CreateDelegationRequest {
  /**
   * <p> A comment that's related to the delegation request. </p>
   */
  comment?: string;

  /**
   * <p> The unique identifier for the control set. </p>
   */
  controlSetId?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the IAM role. </p>
   */
  roleArn?: string;

  /**
   * <p> The type of customer persona. </p>
   *          <note>
   *             <p>In <code>CreateAssessment</code>, <code>roleType</code> can only be
   *                <code>PROCESS_OWNER</code>. </p>
   *             <p>In <code>UpdateSettings</code>, <code>roleType</code> can only be
   *                <code>PROCESS_OWNER</code>.</p>
   *             <p>In <code>BatchCreateDelegationByAssessment</code>, <code>roleType</code> can only be
   *                <code>RESOURCE_OWNER</code>.</p>
   *          </note>
   */
  roleType?: RoleType | string;
}

export interface BatchCreateDelegationByAssessmentRequest {
  /**
   * <p> The API request to batch create delegations in Audit Manager. </p>
   */
  createDelegationRequests: CreateDelegationRequest[] | undefined;

  /**
   * <p> The identifier for the assessment. </p>
   */
  assessmentId: string | undefined;
}

/**
 * <p> An error entity for the <code>BatchCreateDelegationByAssessment</code> API. This is
 *          used to provide more meaningful errors than a simple string message. </p>
 */
export interface BatchCreateDelegationByAssessmentError {
  /**
   * <p> The API request to batch create delegations in Audit Manager. </p>
   */
  createDelegationRequest?: CreateDelegationRequest;

  /**
   * <p> The error code that the <code>BatchCreateDelegationByAssessment</code> API returned.
   *       </p>
   */
  errorCode?: string;

  /**
   * <p> The error message that the <code>BatchCreateDelegationByAssessment</code> API returned.
   *       </p>
   */
  errorMessage?: string;
}

export interface BatchCreateDelegationByAssessmentResponse {
  /**
   * <p> The delegations that are associated with the assessment. </p>
   */
  delegations?: Delegation[];

  /**
   * <p> A list of errors that the <code>BatchCreateDelegationByAssessment</code> API returned.
   *       </p>
   */
  errors?: BatchCreateDelegationByAssessmentError[];
}

export interface BatchDeleteDelegationByAssessmentRequest {
  /**
   * <p> The identifiers for the delegations. </p>
   */
  delegationIds: string[] | undefined;

  /**
   * <p> The identifier for the assessment. </p>
   */
  assessmentId: string | undefined;
}

/**
 * <p> An error entity for the <code>BatchDeleteDelegationByAssessment</code> API. This is
 *          used to provide more meaningful errors than a simple string message. </p>
 */
export interface BatchDeleteDelegationByAssessmentError {
  /**
   * <p> The identifier for the delegation. </p>
   */
  delegationId?: string;

  /**
   * <p> The error code that the <code>BatchDeleteDelegationByAssessment</code> API returned.
   *       </p>
   */
  errorCode?: string;

  /**
   * <p> The error message that the <code>BatchDeleteDelegationByAssessment</code> API returned.
   *       </p>
   */
  errorMessage?: string;
}

export interface BatchDeleteDelegationByAssessmentResponse {
  /**
   * <p> A list of errors that the <code>BatchDeleteDelegationByAssessment</code> API returned.
   *       </p>
   */
  errors?: BatchDeleteDelegationByAssessmentError[];
}

export interface BatchDisassociateAssessmentReportEvidenceRequest {
  /**
   * <p> The identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * <p> The identifier for the folder that the evidence is stored in. </p>
   */
  evidenceFolderId: string | undefined;

  /**
   * <p> The list of evidence identifiers. </p>
   */
  evidenceIds: string[] | undefined;
}

export interface BatchDisassociateAssessmentReportEvidenceResponse {
  /**
   * <p> The identifier for the evidence. </p>
   */
  evidenceIds?: string[];

  /**
   * <p> A list of errors that the <code>BatchDisassociateAssessmentReportEvidence</code> API
   *          returned. </p>
   */
  errors?: AssessmentReportEvidenceError[];
}

/**
 * <p> Evidence that's uploaded to Audit Manager manually. </p>
 */
export interface ManualEvidence {
  /**
   * <p> The Amazon S3 URL that points to a manual evidence object. </p>
   */
  s3ResourcePath?: string;
}

export interface BatchImportEvidenceToAssessmentControlRequest {
  /**
   * <p> The identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * <p> The identifier for the control set. </p>
   */
  controlSetId: string | undefined;

  /**
   * <p> The identifier for the control. </p>
   */
  controlId: string | undefined;

  /**
   * <p> The list of manual evidence objects. </p>
   */
  manualEvidence: ManualEvidence[] | undefined;
}

/**
 * <p> An error entity for the <code>BatchImportEvidenceToAssessmentControl</code> API. This
 *          is used to provide more meaningful errors than a simple string message. </p>
 */
export interface BatchImportEvidenceToAssessmentControlError {
  /**
   * <p> Manual evidence that can't be collected automatically by Audit Manager. </p>
   */
  manualEvidence?: ManualEvidence;

  /**
   * <p> The error code that the <code>BatchImportEvidenceToAssessmentControl</code> API
   *          returned. </p>
   */
  errorCode?: string;

  /**
   * <p> The error message that the <code>BatchImportEvidenceToAssessmentControl</code> API
   *          returned. </p>
   */
  errorMessage?: string;
}

export interface BatchImportEvidenceToAssessmentControlResponse {
  /**
   * <p> A list of errors that the <code>BatchImportEvidenceToAssessmentControl</code> API
   *          returned. </p>
   */
  errors?: BatchImportEvidenceToAssessmentControlError[];
}

export interface CreateAssessmentRequest {
  /**
   * <p> The name of the assessment to be created. </p>
   */
  name: string | undefined;

  /**
   * <p> The optional description of the assessment to be created. </p>
   */
  description?: string;

  /**
   * <p> The assessment report storage destination for the assessment that's being created.
   *       </p>
   */
  assessmentReportsDestination: AssessmentReportsDestination | undefined;

  /**
   * <p> The wrapper that contains the Amazon Web Services accounts and services that are in
   *          scope for the assessment. </p>
   */
  scope: Scope | undefined;

  /**
   * <p> The list of roles for the assessment. </p>
   */
  roles: Role[] | undefined;

  /**
   * <p> The identifier for the framework that the assessment will be created from. </p>
   */
  frameworkId: string | undefined;

  /**
   * <p> The tags that are associated with the assessment. </p>
   */
  tags?: Record<string, string>;
}

export interface CreateAssessmentResponse {
  /**
   * <p> An entity that defines the scope of audit evidence collected by Audit Manager.
   *          An Audit Manager assessment is an implementation of an Audit Manager framework. </p>
   */
  assessment?: Assessment;
}

/**
 * <p>You've reached your account quota for this resource type. To perform the requested
 *          action, delete some existing resources or <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">request a quota increase</a> from
 *          the Service Quotas console. For a list of Audit Manager service quotas, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/service-quotas.html">Quotas and
 *             restrictions for Audit Manager</a>.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * <p> The control entity attributes that uniquely identify an existing control to be added to
 *          a framework in Audit Manager. </p>
 */
export interface CreateAssessmentFrameworkControl {
  /**
   * <p> The unique identifier of the control. </p>
   */
  id: string | undefined;
}

/**
 * <p> A <code>controlSet</code> entity that represents a collection of controls in Audit Manager. This doesn't contain the control set ID. </p>
 */
export interface CreateAssessmentFrameworkControlSet {
  /**
   * <p> The name of the control set. </p>
   */
  name: string | undefined;

  /**
   * <p> The list of controls within the control set. This doesn't contain the control set ID.
   *       </p>
   */
  controls?: CreateAssessmentFrameworkControl[];
}

export interface CreateAssessmentFrameworkRequest {
  /**
   * <p> The name of the new custom framework. </p>
   */
  name: string | undefined;

  /**
   * <p> An optional description for the new custom framework. </p>
   */
  description?: string;

  /**
   * <p> The compliance type that the new custom framework supports, such as CIS or HIPAA.
   *       </p>
   */
  complianceType?: string;

  /**
   * <p> The control sets that are associated with the framework. </p>
   */
  controlSets: CreateAssessmentFrameworkControlSet[] | undefined;

  /**
   * <p> The tags that are associated with the framework. </p>
   */
  tags?: Record<string, string>;
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
 * <p> The keyword to search for in CloudTrail logs, Config rules,
 *             Security Hub checks, and Amazon Web Services API names. </p>
 *          <p> To learn more about the supported keywords that you can use when mapping a control data
 *          source, see the following pages in the <i>Audit Manager User
 *             Guide</i>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-ash.html">Config rules supported by Audit Manager</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-config.html">Security Hub controls supported by Audit Manager</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-api.html">API calls
 *                   supported by Audit Manager</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-cloudtrail.html">CloudTrail event names supported by Audit Manager</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface SourceKeyword {
  /**
   * <p> The input method for the keyword. </p>
   */
  keywordInputType?: KeywordInputType | string;

  /**
   * <p> The value of the keyword that's used when mapping a control data source. For example,
   *          this can be a CloudTrail event name, a rule name for Config, a
   *             Security Hub control, or the name of an Amazon Web Services API call. </p>
   *          <p>If you’re mapping a data source to a rule in Config, the
   *             <code>keywordValue</code> that you specify depends on the type of rule:</p>
   *          <ul>
   *             <li>
   *                <p>For <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html">managed rules</a>, you can use the rule identifier as the
   *                   <code>keywordValue</code>. You can find the rule identifier from the <a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">list of Config managed rules</a>.</p>
   *                <ul>
   *                   <li>
   *                      <p>Managed rule name: <a href="https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-acl-prohibited.html">s3-bucket-acl-prohibited</a>
   *                      </p>
   *                      <p>
   *                         <code>keywordValue</code>: <code>S3_BUCKET_ACL_PROHIBITED</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules.html">custom rules</a>, you form the <code>keywordValue</code>
   *                by adding the <code>Custom_</code> prefix to the rule name. This prefix distinguishes
   *                the rule from a managed rule.</p>
   *                <ul>
   *                   <li>
   *                      <p>Custom rule name: my-custom-config-rule</p>
   *                      <p>
   *                         <code>keywordValue</code>: <code>Custom_my-custom-config-rule</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For <a href="https://docs.aws.amazon.com/config/latest/developerguide/service-linked-awsconfig-rules.html">service-linked rules</a>, you form the
   *                   <code>keywordValue</code> by adding the <code>Custom_</code> prefix to the rule
   *                name. In addition, you remove the suffix ID that appears at the end of the rule
   *                name.</p>
   *                <ul>
   *                   <li>
   *                      <p>Service-linked rule name:
   *                      CustomRuleForAccount-conformance-pack-szsm1uv0w</p>
   *                      <p>
   *                         <code>keywordValue</code>:
   *                         <code>Custom_CustomRuleForAccount-conformance-pack</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Service-linked rule name:
   *                      OrgConfigRule-s3-bucket-versioning-enabled-dbgzf8ba</p>
   *                      <p>
   *                         <code>keywordValue</code>:
   *                         <code>Custom_OrgConfigRule-s3-bucket-versioning-enabled</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  keywordValue?: string;
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
 * <p> The data source that determines where Audit Manager collects evidence from for
 *          the control. </p>
 */
export interface ControlMappingSource {
  /**
   * <p> The unique identifier for the source. </p>
   */
  sourceId?: string;

  /**
   * <p> The name of the source. </p>
   */
  sourceName?: string;

  /**
   * <p> The description of the source. </p>
   */
  sourceDescription?: string;

  /**
   * <p> The setup option for the data source. This option reflects if the evidence collection
   *          is automated or manual. </p>
   */
  sourceSetUpOption?: SourceSetUpOption | string;

  /**
   * <p> Specifies one of the five data source types for evidence collection. </p>
   */
  sourceType?: SourceType | string;

  /**
   * <p> The keyword to search for in CloudTrail logs, Config rules,
   *             Security Hub checks, and Amazon Web Services API names. </p>
   *          <p> To learn more about the supported keywords that you can use when mapping a control data
   *          source, see the following pages in the <i>Audit Manager User
   *             Guide</i>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-ash.html">Config rules supported by Audit Manager</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-config.html">Security Hub controls supported by Audit Manager</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-api.html">API calls
   *                   supported by Audit Manager</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-cloudtrail.html">CloudTrail event names supported by Audit Manager</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  sourceKeyword?: SourceKeyword;

  /**
   * <p> The frequency of evidence collection for the control mapping source. </p>
   */
  sourceFrequency?: SourceFrequency | string;

  /**
   * <p> The instructions for troubleshooting the control. </p>
   */
  troubleshootingText?: string;
}

export enum ControlType {
  CUSTOM = "Custom",
  STANDARD = "Standard",
}

/**
 * <p> A control in Audit Manager. </p>
 */
export interface Control {
  /**
   * <p> The Amazon Resource Name (ARN) of the control. </p>
   */
  arn?: string;

  /**
   * <p> The unique identifier for the control. </p>
   */
  id?: string;

  /**
   * <p> The type of control, such as a custom control or a standard control. </p>
   */
  type?: ControlType | string;

  /**
   * <p> The name of the control. </p>
   */
  name?: string;

  /**
   * <p> The description of the control. </p>
   */
  description?: string;

  /**
   * <p> The steps that you should follow to determine if the control has been satisfied.
   *       </p>
   */
  testingInformation?: string;

  /**
   * <p> The title of the action plan for remediating the control. </p>
   */
  actionPlanTitle?: string;

  /**
   * <p> The recommended actions to carry out if the control isn't fulfilled. </p>
   */
  actionPlanInstructions?: string;

  /**
   * <p> The data source types that determine where Audit Manager collects evidence from for
   *          the control. </p>
   */
  controlSources?: string;

  /**
   * <p> The data mapping sources for the control. </p>
   */
  controlMappingSources?: ControlMappingSource[];

  /**
   * <p> The time when the control was created. </p>
   */
  createdAt?: Date;

  /**
   * <p> The time when the control was most recently updated. </p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p> The IAM user or role that created the control. </p>
   */
  createdBy?: string;

  /**
   * <p> The IAM user or role that most recently updated the control. </p>
   */
  lastUpdatedBy?: string;

  /**
   * <p> The tags associated with the control. </p>
   */
  tags?: Record<string, string>;
}

/**
 * <p> A set of controls in Audit Manager. </p>
 */
export interface ControlSet {
  /**
   * <p> The identifier of the control set in the assessment. This is the control set name in a
   *          plain string format. </p>
   */
  id?: string;

  /**
   * <p> The name of the control set. </p>
   */
  name?: string;

  /**
   * <p> The list of controls within the control set. </p>
   */
  controls?: Control[];
}

/**
 * <p> The file that's used to structure and automate Audit Manager assessments for a
 *          given compliance standard. </p>
 */
export interface Framework {
  /**
   * <p> The Amazon Resource Name (ARN) of the framework. </p>
   */
  arn?: string;

  /**
   * <p> The unique identifier for the framework. </p>
   */
  id?: string;

  /**
   * <p> The name of the framework. </p>
   */
  name?: string;

  /**
   * <p> The framework type, such as a custom framework or a standard framework. </p>
   */
  type?: FrameworkType | string;

  /**
   * <p> The compliance type that the new custom framework supports, such as CIS or HIPAA.
   *       </p>
   */
  complianceType?: string;

  /**
   * <p> The description of the framework. </p>
   */
  description?: string;

  /**
   * <p> The logo that's associated with the framework. </p>
   */
  logo?: string;

  /**
   * <p> The sources that Audit Manager collects evidence from for the control. </p>
   */
  controlSources?: string;

  /**
   * <p> The control sets that are associated with the framework. </p>
   */
  controlSets?: ControlSet[];

  /**
   * <p> The time when the framework was created. </p>
   */
  createdAt?: Date;

  /**
   * <p> The time when the framework was most recently updated. </p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p> The IAM user or role that created the framework. </p>
   */
  createdBy?: string;

  /**
   * <p> The IAM user or role that most recently updated the framework. </p>
   */
  lastUpdatedBy?: string;

  /**
   * <p> The tags that are associated with the framework. </p>
   */
  tags?: Record<string, string>;
}

export interface CreateAssessmentFrameworkResponse {
  /**
   * <p> The name of the new framework that the <code>CreateAssessmentFramework</code> API
   *          returned. </p>
   */
  framework?: Framework;
}

export interface CreateAssessmentReportRequest {
  /**
   * <p> The name of the new assessment report. </p>
   */
  name: string | undefined;

  /**
   * <p> The description of the assessment report. </p>
   */
  description?: string;

  /**
   * <p> The identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * <p>A SQL statement that represents an evidence finder query.</p>
   *          <p>Provide this parameter when you want to generate an assessment report from the results
   *          of an evidence finder search query. When you use this parameter, Audit Manager
   *          generates a one-time report using only the evidence from the query output. This report does
   *          not include any assessment evidence that was manually <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/generate-assessment-report.html#generate-assessment-report-include-evidence">added to a report using the console</a>, or <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_BatchAssociateAssessmentReportEvidence.html">associated with a report using the API</a>. </p>
   *          <p>To use this parameter, the <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_EvidenceFinderEnablement.html#auditmanager-Type-EvidenceFinderEnablement-enablementStatus">enablementStatus</a> of evidence finder must be <code>ENABLED</code>. </p>
   *          <p> For examples and help resolving <code>queryStatement</code> validation exceptions, see
   *             <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/evidence-finder-issues.html#querystatement-exceptions">Troubleshooting evidence finder issues</a> in the
   *                <i>Audit Manager User Guide.</i>
   *          </p>
   */
  queryStatement?: string;
}

export interface CreateAssessmentReportResponse {
  /**
   * <p> The new assessment report that the <code>CreateAssessmentReport</code> API returned.
   *       </p>
   */
  assessmentReport?: AssessmentReport;
}

/**
 * <p> The control mapping fields that represent the source for evidence collection, along
 *          with related parameters and metadata. This doesn't contain <code>mappingID</code>. </p>
 */
export interface CreateControlMappingSource {
  /**
   * <p> The name of the control mapping data source. </p>
   */
  sourceName?: string;

  /**
   * <p> The description of the data source that determines where Audit Manager collects
   *          evidence from for the control. </p>
   */
  sourceDescription?: string;

  /**
   * <p> The setup option for the data source, which reflects if the evidence collection is
   *          automated or manual. </p>
   */
  sourceSetUpOption?: SourceSetUpOption | string;

  /**
   * <p> Specifies one of the five types of data sources for evidence collection. </p>
   */
  sourceType?: SourceType | string;

  /**
   * <p> The keyword to search for in CloudTrail logs, Config rules,
   *             Security Hub checks, and Amazon Web Services API names. </p>
   *          <p> To learn more about the supported keywords that you can use when mapping a control data
   *          source, see the following pages in the <i>Audit Manager User
   *             Guide</i>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-ash.html">Config rules supported by Audit Manager</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-config.html">Security Hub controls supported by Audit Manager</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-api.html">API calls
   *                   supported by Audit Manager</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-cloudtrail.html">CloudTrail event names supported by Audit Manager</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  sourceKeyword?: SourceKeyword;

  /**
   * <p> The frequency of evidence collection for the control mapping source. </p>
   */
  sourceFrequency?: SourceFrequency | string;

  /**
   * <p> The instructions for troubleshooting the control. </p>
   */
  troubleshootingText?: string;
}

export interface CreateControlRequest {
  /**
   * <p> The name of the control. </p>
   */
  name: string | undefined;

  /**
   * <p> The description of the control. </p>
   */
  description?: string;

  /**
   * <p> The steps to follow to determine if the control is satisfied. </p>
   */
  testingInformation?: string;

  /**
   * <p> The title of the action plan for remediating the control. </p>
   */
  actionPlanTitle?: string;

  /**
   * <p> The recommended actions to carry out if the control isn't fulfilled. </p>
   */
  actionPlanInstructions?: string;

  /**
   * <p> The data mapping sources for the control. </p>
   */
  controlMappingSources: CreateControlMappingSource[] | undefined;

  /**
   * <p> The tags that are associated with the control. </p>
   */
  tags?: Record<string, string>;
}

export interface CreateControlResponse {
  /**
   * <p> The new control that the <code>CreateControl</code> API returned. </p>
   */
  control?: Control;
}

export interface DeleteAssessmentRequest {
  /**
   * <p> The identifier for the assessment. </p>
   */
  assessmentId: string | undefined;
}

export interface DeleteAssessmentResponse {}

export interface DeleteAssessmentFrameworkRequest {
  /**
   * <p> The identifier for the custom framework. </p>
   */
  frameworkId: string | undefined;
}

export interface DeleteAssessmentFrameworkResponse {}

export enum ShareRequestType {
  RECEIVED = "RECEIVED",
  SENT = "SENT",
}

export interface DeleteAssessmentFrameworkShareRequest {
  /**
   * <p>The unique identifier for the share request to be deleted.</p>
   */
  requestId: string | undefined;

  /**
   * <p>Specifies whether the share request is a sent request or a received request.</p>
   */
  requestType: ShareRequestType | string | undefined;
}

export interface DeleteAssessmentFrameworkShareResponse {}

export interface DeleteAssessmentReportRequest {
  /**
   * <p> The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * <p> The unique identifier for the assessment report. </p>
   */
  assessmentReportId: string | undefined;
}

export interface DeleteAssessmentReportResponse {}

export interface DeleteControlRequest {
  /**
   * <p> The unique identifier for the control. </p>
   */
  controlId: string | undefined;
}

export interface DeleteControlResponse {}

export interface DeregisterAccountRequest {}

export interface DeregisterAccountResponse {
  /**
   * <p> The registration status of the account. </p>
   */
  status?: AccountStatus | string;
}

export interface DeregisterOrganizationAdminAccountRequest {
  /**
   * <p> The identifier for the administrator account. </p>
   */
  adminAccountId?: string;
}

export interface DeregisterOrganizationAdminAccountResponse {}

export interface DisassociateAssessmentReportEvidenceFolderRequest {
  /**
   * <p> The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * <p> The unique identifier for the folder that the evidence is stored in. </p>
   */
  evidenceFolderId: string | undefined;
}

export interface DisassociateAssessmentReportEvidenceFolderResponse {}

export interface GetAccountStatusRequest {}

export interface GetAccountStatusResponse {
  /**
   * <p> The status of the Amazon Web Services account. </p>
   */
  status?: AccountStatus | string;
}

export interface GetAssessmentRequest {
  /**
   * <p>The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;
}

export interface GetAssessmentResponse {
  /**
   * <p> An entity that defines the scope of audit evidence collected by Audit Manager.
   *          An Audit Manager assessment is an implementation of an Audit Manager framework. </p>
   */
  assessment?: Assessment;

  /**
   * <p> The wrapper that contains the Audit Manager role information of the current user.
   *          This includes the role type and IAM Amazon Resource Name (ARN). </p>
   */
  userRole?: Role;
}

export interface GetAssessmentFrameworkRequest {
  /**
   * <p> The identifier for the framework. </p>
   */
  frameworkId: string | undefined;
}

export interface GetAssessmentFrameworkResponse {
  /**
   * <p> The framework that the <code>GetAssessmentFramework</code> API returned. </p>
   */
  framework?: Framework;
}

export interface GetAssessmentReportUrlRequest {
  /**
   * <p> The unique identifier for the assessment report. </p>
   */
  assessmentReportId: string | undefined;

  /**
   * <p> The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;
}

/**
 * <p> Short for uniform resource locator. A URL is used as a unique identifier to locate a
 *          resource on the internet. </p>
 */
export interface URL {
  /**
   * <p> The name or word that's used as a hyperlink to the URL. </p>
   */
  hyperlinkName?: string;

  /**
   * <p> The unique identifier for the internet resource. </p>
   */
  link?: string;
}

export interface GetAssessmentReportUrlResponse {
  /**
   * <p> Short for uniform resource locator. A URL is used as a unique identifier to locate a
   *          resource on the internet. </p>
   */
  preSignedUrl?: URL;
}

export interface GetChangeLogsRequest {
  /**
   * <p>The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * <p> The unique identifier for the control set. </p>
   */
  controlSetId?: string;

  /**
   * <p> The unique identifier for the control. </p>
   */
  controlId?: string;

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * <p>Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

export enum ObjectTypeEnum {
  ASSESSMENT = "ASSESSMENT",
  ASSESSMENT_REPORT = "ASSESSMENT_REPORT",
  CONTROL = "CONTROL",
  CONTROL_SET = "CONTROL_SET",
  DELEGATION = "DELEGATION",
}

/**
 * <p> The record of a change within Audit Manager. For example, this could be the
 *          status change of an assessment or the delegation of a control set. </p>
 */
export interface ChangeLog {
  /**
   * <p> The object that was changed, such as an assessment, control, or control set. </p>
   */
  objectType?: ObjectTypeEnum | string;

  /**
   * <p> The name of the object that changed. This could be the name of an assessment, control,
   *          or control set.</p>
   */
  objectName?: string;

  /**
   * <p> The action that was performed. </p>
   */
  action?: ActionEnum | string;

  /**
   * <p> The time when the action was performed and the changelog record was created. </p>
   */
  createdAt?: Date;

  /**
   * <p> The IAM user or role that performed the action. </p>
   */
  createdBy?: string;
}

export interface GetChangeLogsResponse {
  /**
   * <p>The list of user activity for the control. </p>
   */
  changeLogs?: ChangeLog[];

  /**
   * <p>The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

export interface GetControlRequest {
  /**
   * <p> The identifier for the control. </p>
   */
  controlId: string | undefined;
}

export interface GetControlResponse {
  /**
   * <p> The name of the control that the <code>GetControl</code> API returned. </p>
   */
  control?: Control;
}

export interface GetDelegationsRequest {
  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

/**
 * <p> The metadata that's associated with the delegation. </p>
 */
export interface DelegationMetadata {
  /**
   * <p> The unique identifier for the delegation. </p>
   */
  id?: string;

  /**
   * <p> The name of the associated assessment. </p>
   */
  assessmentName?: string;

  /**
   * <p> The unique identifier for the assessment. </p>
   */
  assessmentId?: string;

  /**
   * <p> The current status of the delegation. </p>
   */
  status?: DelegationStatus | string;

  /**
   * <p> The Amazon Resource Name (ARN) of the IAM role. </p>
   */
  roleArn?: string;

  /**
   * <p> Specifies when the delegation was created. </p>
   */
  creationTime?: Date;

  /**
   * <p> Specifies the name of the control set that was delegated for review. </p>
   */
  controlSetName?: string;
}

export interface GetDelegationsResponse {
  /**
   * <p> The list of delegations that the <code>GetDelegations</code> API returned. </p>
   */
  delegations?: DelegationMetadata[];

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

export interface GetEvidenceRequest {
  /**
   * <p> The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * <p> The unique identifier for the control set. </p>
   */
  controlSetId: string | undefined;

  /**
   * <p> The unique identifier for the folder that the evidence is stored in. </p>
   */
  evidenceFolderId: string | undefined;

  /**
   * <p> The unique identifier for the evidence. </p>
   */
  evidenceId: string | undefined;
}

/**
 * <p> A system asset that's evaluated in an Audit Manager assessment. </p>
 */
export interface Resource {
  /**
   * <p> The Amazon Resource Name (ARN) for the resource. </p>
   */
  arn?: string;

  /**
   * <p> The value of the resource. </p>
   */
  value?: string;

  /**
   * <p> The evaluation status for a resource that was assessed when collecting compliance check
   *          evidence. </p>
   *          <ul>
   *             <li>
   *                <p>Audit Manager classes the resource as non-compliant if Security Hub reports a
   *                   <i>Fail</i> result, or if Config reports a
   *                   <i>Non-compliant</i> result.</p>
   *             </li>
   *             <li>
   *                <p>Audit Manager classes the resource as compliant if Security Hub reports a
   *                   <i>Pass</i> result, or if Config reports a
   *                   <i>Compliant</i> result.</p>
   *             </li>
   *             <li>
   *                <p>If a compliance check isn't available or applicable, then no compliance evaluation can be made
   *                for that resource. This is the case if a resource assessment uses Config or Security Hub as the underlying data source type, but those services
   *                aren't enabled. This is also the case if the resource assessment uses an underlying
   *                data source type that doesn't support compliance checks (such as manual evidence,
   *                   Amazon Web Services API calls, or CloudTrail). </p>
   *             </li>
   *          </ul>
   */
  complianceCheck?: string;
}

/**
 * <p> A record that contains the information needed to demonstrate compliance with the
 *          requirements specified by a control. Examples of evidence include change activity invoked
 *          by a user, or a system configuration snapshot. </p>
 */
export interface Evidence {
  /**
   * <p> The data source where the evidence was collected from. </p>
   */
  dataSource?: string;

  /**
   * <p> The identifier for the Amazon Web Services account. </p>
   */
  evidenceAwsAccountId?: string;

  /**
   * <p> The timestamp that represents when the evidence was collected. </p>
   */
  time?: Date;

  /**
   * <p> The Amazon Web Service that the evidence is collected from. </p>
   */
  eventSource?: string;

  /**
   * <p> The name of the evidence event. </p>
   */
  eventName?: string;

  /**
   * <p> The type of automated evidence. </p>
   */
  evidenceByType?: string;

  /**
   * <p> The list of resources that are assessed to generate the evidence. </p>
   */
  resourcesIncluded?: Resource[];

  /**
   * <p> The names and values that are used by the evidence event. This includes an attribute
   *          name (such as <code>allowUsersToChangePassword</code>) and value (such as <code>true</code>
   *          or <code>false</code>). </p>
   */
  attributes?: Record<string, string>;

  /**
   * <p> The unique identifier for the IAM user or role that's associated with
   *          the evidence. </p>
   */
  iamId?: string;

  /**
   * <p>The evaluation status for automated evidence that falls under the compliance check
   *          category.</p>
   *          <ul>
   *             <li>
   *                <p>Audit Manager classes evidence as non-compliant if Security Hub reports a
   *                   <i>Fail</i> result, or if Config reports a
   *                   <i>Non-compliant</i> result.</p>
   *             </li>
   *             <li>
   *                <p>Audit Manager classes evidence as compliant if Security Hub reports a
   *                   <i>Pass</i> result, or if Config reports a
   *                   <i>Compliant</i> result.</p>
   *             </li>
   *             <li>
   *                <p>If a compliance check isn't available or applicable, then no compliance evaluation can be made
   *                for that evidence. This is the case if the evidence uses Config or
   *                   Security Hub as the underlying data source type, but those services aren't
   *                enabled. This is also the case if the evidence uses an underlying data source type
   *                that doesn't support compliance checks (such as manual evidence, Amazon Web Services
   *                API calls, or CloudTrail). </p>
   *             </li>
   *          </ul>
   */
  complianceCheck?: string;

  /**
   * <p> The Amazon Web Services account that the evidence is collected from, and its
   *          organization path. </p>
   */
  awsOrganization?: string;

  /**
   * <p> The identifier for the Amazon Web Services account. </p>
   */
  awsAccountId?: string;

  /**
   * <p> The identifier for the folder that the evidence is stored in. </p>
   */
  evidenceFolderId?: string;

  /**
   * <p> The identifier for the evidence. </p>
   */
  id?: string;

  /**
   * <p> Specifies whether the evidence is included in the assessment report. </p>
   */
  assessmentReportSelection?: string;
}

export interface GetEvidenceResponse {
  /**
   * <p> The evidence that the <code>GetEvidence</code> API returned. </p>
   */
  evidence?: Evidence;
}

export interface GetEvidenceByEvidenceFolderRequest {
  /**
   * <p> The identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * <p> The identifier for the control set. </p>
   */
  controlSetId: string | undefined;

  /**
   * <p> The unique identifier for the folder that the evidence is stored in. </p>
   */
  evidenceFolderId: string | undefined;

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

export interface GetEvidenceByEvidenceFolderResponse {
  /**
   * <p> The list of evidence that the <code>GetEvidenceByEvidenceFolder</code> API returned.
   *       </p>
   */
  evidence?: Evidence[];

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

export interface GetEvidenceFolderRequest {
  /**
   * <p> The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * <p> The unique identifier for the control set. </p>
   */
  controlSetId: string | undefined;

  /**
   * <p> The unique identifier for the folder that the evidence is stored in. </p>
   */
  evidenceFolderId: string | undefined;
}

export interface GetEvidenceFolderResponse {
  /**
   * <p> The folder that the evidence is stored in. </p>
   */
  evidenceFolder?: AssessmentEvidenceFolder;
}

export interface GetEvidenceFoldersByAssessmentRequest {
  /**
   * <p> The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

export interface GetEvidenceFoldersByAssessmentResponse {
  /**
   * <p> The list of evidence folders that the <code>GetEvidenceFoldersByAssessment</code> API
   *          returned. </p>
   */
  evidenceFolders?: AssessmentEvidenceFolder[];

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

export interface GetEvidenceFoldersByAssessmentControlRequest {
  /**
   * <p> The identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * <p> The identifier for the control set. </p>
   */
  controlSetId: string | undefined;

  /**
   * <p> The identifier for the control. </p>
   */
  controlId: string | undefined;

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

export interface GetEvidenceFoldersByAssessmentControlResponse {
  /**
   * <p> The list of evidence folders that the
   *             <code>GetEvidenceFoldersByAssessmentControl</code> API returned. </p>
   */
  evidenceFolders?: AssessmentEvidenceFolder[];

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

export interface GetInsightsRequest {}

/**
 * <p>A summary of the latest analytics data for all your active assessments. </p>
 *          <p>This summary is a snapshot of the data that your active assessments collected on the
 *             <code>lastUpdated</code> date. It’s important to understand that the following totals
 *          are daily counts based on this date — they aren’t a total sum to date. </p>
 *          <p>The <code>Insights</code> data is eventually consistent. This means that, when you read
 *          data from <code>Insights</code>, the response might not instantly reflect the results of a
 *          recently completed write or update operation. If you repeat your read request after a few
 *          hours, the response should return the latest data.</p>
 *          <note>
 *             <p>If you delete an assessment or change its status to inactive,
 *                <code>InsightsByAssessment</code> includes data for that assessment as
 *             follows.</p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <b>Inactive assessments</b> - If Audit Manager
 *                   collected evidence for your assessment before you changed it inactive, that
 *                   evidence is included in the <code>InsightsByAssessment</code> counts for that
 *                   day.</p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <b>Deleted assessments</b> - If Audit Manager
 *                   collected evidence for your assessment before you deleted it, that evidence isn't
 *                   included in the <code>InsightsByAssessment</code> counts for that day.</p>
 *                </li>
 *             </ul>
 *          </note>
 */
export interface Insights {
  /**
   * <p>The number of active assessments in Audit Manager. </p>
   */
  activeAssessmentsCount?: number;

  /**
   * <p>The number of compliance check evidence that Audit Manager classified as
   *          non-compliant on the <code>lastUpdated</code> date. This includes evidence that was
   *          collected from Security Hub with a <i>Fail</i> ruling, or collected
   *          from Config with a <i>Non-compliant</i> ruling. </p>
   */
  noncompliantEvidenceCount?: number;

  /**
   * <p>The number of compliance check evidence that Audit Manager classified as compliant
   *          on the <code>lastUpdated</code> date. This includes evidence that was collected from
   *             Security Hub with a <i>Pass</i> ruling, or collected from
   *             Config with a <i>Compliant</i> ruling. </p>
   */
  compliantEvidenceCount?: number;

  /**
   * <p>The number of evidence without a compliance check ruling. Evidence is inconclusive when
   *          the associated control uses Security Hub or Config as a data
   *          source but you didn't enable those services. This is also the case when a control uses a
   *          data source that doesn’t support compliance checks (for example: manual evidence, API
   *          calls, or CloudTrail). </p>
   *          <note>
   *             <p>If evidence has a compliance check status of <i>not applicable</i>,
   *             it's classed as <i>inconclusive</i> in <code>Insights</code> data.</p>
   *          </note>
   */
  inconclusiveEvidenceCount?: number;

  /**
   * <p>The number of assessment controls that collected non-compliant evidence on the
   *             <code>lastUpdated</code> date. </p>
   */
  assessmentControlsCountByNoncompliantEvidence?: number;

  /**
   * <p>The total number of controls across all active assessments. </p>
   */
  totalAssessmentControlsCount?: number;

  /**
   * <p>The time when the cross-assessment insights were last updated. </p>
   */
  lastUpdated?: Date;
}

export interface GetInsightsResponse {
  /**
   * <p>The analytics data that the <code>GetInsights</code> API returned. </p>
   */
  insights?: Insights;
}

export interface GetInsightsByAssessmentRequest {
  /**
   * <p>The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;
}

/**
 * <p>A summary of the latest analytics data for a specific active assessment.</p>
 *          <p>This summary is a snapshot of the data that was collected on the
 *             <code>lastUpdated</code> date. It’s important to understand that the totals in
 *             <code>InsightsByAssessment</code> are daily counts based on this date — they aren’t a
 *          total sum to date. </p>
 *          <p>The <code>InsightsByAssessment</code> data is eventually consistent. This means that
 *          when you read data from <code>InsightsByAssessment</code>, the response might not instantly
 *          reflect the results of a recently completed write or update operation. If you repeat your
 *          read request after a few hours, the response returns the latest data.</p>
 *          <note>
 *             <p>If you delete an assessment or change its status to inactive,
 *                <code>InsightsByAssessment</code> includes data for that assessment as
 *             follows.</p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <b>Inactive assessments</b> - If Audit Manager
 *                   collected evidence for your assessment before you changed it inactive, that
 *                   evidence is included in the <code>InsightsByAssessment</code> counts for that
 *                   day.</p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <b>Deleted assessments</b> - If Audit Manager
 *                   collected evidence for your assessment before you deleted it, that evidence isn't
 *                   included in the <code>InsightsByAssessment</code> counts for that day.</p>
 *                </li>
 *             </ul>
 *          </note>
 */
export interface InsightsByAssessment {
  /**
   * <p>The number of compliance check evidence that Audit Manager classified as
   *          non-compliant. This includes evidence that was collected from Security Hub with a
   *             <i>Fail</i> ruling, or collected from Config with a
   *             <i>Non-compliant</i> ruling. </p>
   */
  noncompliantEvidenceCount?: number;

  /**
   * <p>The number of compliance check evidence that Audit Manager classified as compliant.
   *          This includes evidence that was collected from Security Hub with a
   *             <i>Pass</i> ruling, or collected from Config with a
   *             <i>Compliant</i> ruling. </p>
   */
  compliantEvidenceCount?: number;

  /**
   * <p>The amount of evidence without a compliance check ruling. Evidence is inconclusive if
   *          the associated control uses Security Hub or Config as a data
   *          source and you didn't enable those services. This is also the case if a control uses a data
   *          source that doesn’t support compliance checks (for example, manual evidence, API calls, or
   *             CloudTrail). </p>
   *          <note>
   *             <p>If evidence has a compliance check status of <i>not applicable</i>,
   *             it's classified as <i>inconclusive</i> in
   *                <code>InsightsByAssessment</code> data.</p>
   *          </note>
   */
  inconclusiveEvidenceCount?: number;

  /**
   * <p>The number of assessment controls that collected non-compliant evidence on the
   *             <code>lastUpdated</code> date. </p>
   */
  assessmentControlsCountByNoncompliantEvidence?: number;

  /**
   * <p>The total number of controls in the assessment. </p>
   */
  totalAssessmentControlsCount?: number;

  /**
   * <p>The time when the assessment insights were last updated.</p>
   */
  lastUpdated?: Date;
}

export interface GetInsightsByAssessmentResponse {
  /**
   * <p> The assessment analytics data that the <code>GetInsightsByAssessment</code> API
   *          returned. </p>
   */
  insights?: InsightsByAssessment;
}

export interface GetOrganizationAdminAccountRequest {}

export interface GetOrganizationAdminAccountResponse {
  /**
   * <p> The identifier for the administrator account. </p>
   */
  adminAccountId?: string;

  /**
   * <p> The identifier for the organization. </p>
   */
  organizationId?: string;
}

export interface GetServicesInScopeRequest {}

/**
 * <p> The metadata that's associated with the Amazon Web Service. </p>
 */
export interface ServiceMetadata {
  /**
   * <p> The name of the Amazon Web Service. </p>
   */
  name?: string;

  /**
   * <p> The display name of the Amazon Web Service. </p>
   */
  displayName?: string;

  /**
   * <p> The description of the Amazon Web Service. </p>
   */
  description?: string;

  /**
   * <p> The category that the Amazon Web Service belongs to, such as compute, storage,
   *          or database. </p>
   */
  category?: string;
}

export interface GetServicesInScopeResponse {
  /**
   * <p> The metadata that's associated with the Amazon Web Service. </p>
   */
  serviceMetadata?: ServiceMetadata[];
}

export enum SettingAttribute {
  ALL = "ALL",
  DEFAULT_ASSESSMENT_REPORTS_DESTINATION = "DEFAULT_ASSESSMENT_REPORTS_DESTINATION",
  DEFAULT_PROCESS_OWNERS = "DEFAULT_PROCESS_OWNERS",
  DEREGISTRATION_POLICY = "DEREGISTRATION_POLICY",
  EVIDENCE_FINDER_ENABLEMENT = "EVIDENCE_FINDER_ENABLEMENT",
  IS_AWS_ORG_ENABLED = "IS_AWS_ORG_ENABLED",
  SNS_TOPIC = "SNS_TOPIC",
}

export interface GetSettingsRequest {
  /**
   * <p> The list of setting attribute enum values. </p>
   */
  attribute: SettingAttribute | string | undefined;
}

export enum DeleteResources {
  ALL = "ALL",
  DEFAULT = "DEFAULT",
}

/**
 * <p>The deregistration policy for the data that's stored in Audit Manager. You can
 *          use this attribute to determine how your data is handled when you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeregisterAccount.html">deregister Audit Manager</a>.</p>
 *          <p>By default, Audit Manager retains evidence data for two years from the time of its
 *          creation. Other Audit Manager resources (including assessments, custom controls, and
 *          custom frameworks) remain in Audit Manager indefinitely, and are available if you
 *             <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_RegisterAccount.html">re-register Audit Manager</a> in the future. For more
 *          information about data retention, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/data-protection.html">Data
 *             Protection</a> in the <i>Audit Manager User Guide</i>.</p>
 *          <important>
 *             <p>If you choose to delete all data, this action permanently deletes all evidence data
 *             in your account within seven days. It also deletes all of the Audit Manager
 *             resources that you created, including assessments, custom controls, and custom
 *             frameworks. Your data will not be available if you re-register Audit Manager in the
 *             future.</p>
 *          </important>
 */
export interface DeregistrationPolicy {
  /**
   * <p>Specifies which Audit Manager data will be deleted when you deregister Audit Manager.</p>
   *          <ul>
   *             <li>
   *                <p>If you set the value to <code>ALL</code>, all of your data is deleted within seven
   *                days of deregistration.</p>
   *             </li>
   *             <li>
   *                <p>If you set the value to <code>DEFAULT</code>, none of your data is deleted at the
   *                time of deregistration. However, keep in mind that the Audit Manager data
   *                retention policy still applies. As a result, any evidence data will be deleted two
   *                years after its creation date. Your other Audit Manager resources will continue
   *                to exist indefinitely.</p>
   *             </li>
   *          </ul>
   */
  deleteResources?: DeleteResources | string;
}

export enum EvidenceFinderBackfillStatus {
  COMPLETED = "COMPLETED",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_STARTED = "NOT_STARTED",
}

export enum EvidenceFinderEnablementStatus {
  DISABLED = "DISABLED",
  DISABLE_IN_PROGRESS = "DISABLE_IN_PROGRESS",
  ENABLED = "ENABLED",
  ENABLE_IN_PROGRESS = "ENABLE_IN_PROGRESS",
}

/**
 * <p>The settings object that specifies whether evidence finder is enabled. This object also
 *          describes the related event data store, and the backfill status for populating the event
 *          data store with evidence data.</p>
 */
export interface EvidenceFinderEnablement {
  /**
   * <p>The Amazon Resource Name (ARN) of the CloudTrail Lake event data store that’s
   *          used by evidence finder. The event data store is the lake of evidence data that evidence
   *          finder runs queries against.</p>
   */
  eventDataStoreArn?: string;

  /**
   * <p>The current status of the evidence finder feature and the related event data store. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLE_IN_PROGRESS</code> means that you requested to enable evidence
   *                finder. An event data store is currently being created to support evidence finder
   *                queries.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> means that an event data store was successfully created and
   *                evidence finder is enabled. We recommend that you wait 7 days until the event data
   *                store is backfilled with your past two years’ worth of evidence data. You can use
   *                evidence finder in the meantime, but not all data might be available until the
   *                backfill is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLE_IN_PROGRESS</code> means that you requested to disable evidence finder, and your
   *                request is pending the deletion of the event data store.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> means that you have permanently disabled evidence finder and the event
   *                data store has been deleted. You can't re-enable evidence finder after this
   *                point.</p>
   *             </li>
   *          </ul>
   */
  enablementStatus?: EvidenceFinderEnablementStatus | string;

  /**
   * <p>The current status of the evidence data backfill process. </p>
   *          <p>The backfill starts after you enable evidence finder. During this task, Audit Manager populates an event data store with your past two years’ worth of evidence data so that
   *          your evidence can be queried.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NOT_STARTED</code> means that the backfill hasn’t started yet. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> means that the backfill is in progress. This can take up
   *                to 7 days to complete, depending on the amount of evidence data. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code> means that the backfill is complete. All of your past
   *                evidence is now queryable. </p>
   *             </li>
   *          </ul>
   */
  backfillStatus?: EvidenceFinderBackfillStatus | string;

  /**
   * <p>Represents any errors that occurred when enabling or disabling evidence finder. </p>
   */
  error?: string;
}

/**
 * <p> The settings object that holds all supported Audit Manager settings. </p>
 */
export interface Settings {
  /**
   * <p> Specifies whether Organizations is enabled. </p>
   */
  isAwsOrgEnabled?: boolean;

  /**
   * <p> The designated Amazon Simple Notification Service (Amazon SNS) topic. </p>
   */
  snsTopic?: string;

  /**
   * <p> The default storage destination for assessment reports. </p>
   */
  defaultAssessmentReportsDestination?: AssessmentReportsDestination;

  /**
   * <p> The designated default audit owners. </p>
   */
  defaultProcessOwners?: Role[];

  /**
   * <p> The KMS key details. </p>
   */
  kmsKey?: string;

  /**
   * <p>The current evidence finder status and event data store details.</p>
   */
  evidenceFinderEnablement?: EvidenceFinderEnablement;

  /**
   * <p>The deregistration policy for your Audit Manager data. You can
   *       use this attribute to determine how your data is handled when you deregister Audit Manager.</p>
   */
  deregistrationPolicy?: DeregistrationPolicy;
}

export interface GetSettingsResponse {
  /**
   * <p> The settings object that holds all supported Audit Manager settings. </p>
   */
  settings?: Settings;
}

export interface ListAssessmentControlInsightsByControlDomainRequest {
  /**
   * <p>The unique identifier for the control domain. </p>
   */
  controlDomainId: string | undefined;

  /**
   * <p>The unique identifier for the active assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * <p>Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

/**
 * <p>A breakdown of the latest compliance check status for the evidence in your Audit Manager assessments. </p>
 */
export interface EvidenceInsights {
  /**
   * <p>The number of compliance check evidence that Audit Manager classified as
   *          non-compliant. This includes evidence that was collected from Security Hub with a
   *             <i>Fail</i> ruling, or collected from Config with a
   *             <i>Non-compliant</i> ruling. </p>
   */
  noncompliantEvidenceCount?: number;

  /**
   * <p>The number of compliance check evidence that Audit Manager classified as compliant.
   *          This includes evidence that was collected from Security Hub with a
   *             <i>Pass</i> ruling, or collected from Config with a
   *             <i>Compliant</i> ruling. </p>
   */
  compliantEvidenceCount?: number;

  /**
   * <p>The number of evidence that a compliance check ruling isn't available for. Evidence is
   *          inconclusive when the associated control uses Security Hub or Config as a data source but you didn't enable those services. This is also the case when a
   *          control uses a data source that doesn’t support compliance checks (for example, manual
   *          evidence, API calls, or CloudTrail). </p>
   *          <note>
   *             <p>If evidence has a compliance check status of <i>not applicable</i> in
   *             the console, it's classified as <i>inconclusive</i> in
   *                <code>EvidenceInsights</code> data.</p>
   *          </note>
   */
  inconclusiveEvidenceCount?: number;
}

/**
 * <p>A summary of the latest analytics data for a specific control in a specific active
 *          assessment.</p>
 *          <p>Control insights are grouped by control domain, and ranked by the highest total count of
 *          non-compliant evidence. </p>
 */
export interface ControlInsightsMetadataByAssessmentItem {
  /**
   * <p>The name of the assessment control. </p>
   */
  name?: string;

  /**
   * <p>The unique identifier for the assessment control. </p>
   */
  id?: string;

  /**
   * <p>A breakdown of the compliance check status for the evidence that’s associated with the
   *          assessment control. </p>
   */
  evidenceInsights?: EvidenceInsights;

  /**
   * <p>The name of the control set that the assessment control belongs to. </p>
   */
  controlSetName?: string;

  /**
   * <p>The time when the assessment control insights were last updated. </p>
   */
  lastUpdated?: Date;
}

export interface ListAssessmentControlInsightsByControlDomainResponse {
  /**
   * <p>The assessment control analytics data that the
   *             <code>ListAssessmentControlInsightsByControlDomain</code> API returned. </p>
   */
  controlInsightsByAssessment?: ControlInsightsMetadataByAssessmentItem[];

  /**
   * <p>The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

export interface ListAssessmentFrameworksRequest {
  /**
   * <p> The type of framework, such as a standard framework or a custom framework. </p>
   */
  frameworkType: FrameworkType | string | undefined;

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

export interface ListAssessmentFrameworksResponse {
  /**
   * <p> The list of metadata objects for the framework. </p>
   */
  frameworkMetadataList?: AssessmentFrameworkMetadata[];

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

export interface ListAssessmentFrameworkShareRequestsRequest {
  /**
   * <p> Specifies whether the share request is a sent request or a received request.</p>
   */
  requestType: ShareRequestType | string | undefined;

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

export interface ListAssessmentFrameworkShareRequestsResponse {
  /**
   * <p> The list of share requests that the <code>ListAssessmentFrameworkShareRequests</code>
   *          API returned. </p>
   */
  assessmentFrameworkShareRequests?: AssessmentFrameworkShareRequest[];

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

export interface ListAssessmentReportsRequest {
  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

export interface ListAssessmentReportsResponse {
  /**
   * <p> The list of assessment reports that the <code>ListAssessmentReports</code> API
   *          returned. </p>
   */
  assessmentReports?: AssessmentReportMetadata[];

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

export interface ListAssessmentsRequest {
  /**
   * <p> The current status of the assessment.</p>
   */
  status?: AssessmentStatus | string;

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

export interface ListAssessmentsResponse {
  /**
   * <p> The metadata that's associated with the assessment. </p>
   */
  assessmentMetadata?: AssessmentMetadataItem[];

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

export interface ListControlDomainInsightsRequest {
  /**
   * <p>The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * <p>Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

/**
 * <p>A summary of the latest analytics data for a specific control domain.</p>
 *          <p>Control domain insights are grouped by control domain, and ranked by the highest total
 *          count of non-compliant evidence.</p>
 */
export interface ControlDomainInsights {
  /**
   * <p>The name of the control domain. </p>
   */
  name?: string;

  /**
   * <p>The unique identifier for the control domain. </p>
   */
  id?: string;

  /**
   * <p>The number of controls in the control domain that collected non-compliant evidence on
   *          the <code>lastUpdated</code> date. </p>
   */
  controlsCountByNoncompliantEvidence?: number;

  /**
   * <p>The total number of controls in the control domain. </p>
   */
  totalControlsCount?: number;

  /**
   * <p>A breakdown of the compliance check status for the evidence that’s associated with the
   *          control domain. </p>
   */
  evidenceInsights?: EvidenceInsights;

  /**
   * <p>The time when the control domain insights were last updated. </p>
   */
  lastUpdated?: Date;
}

export interface ListControlDomainInsightsResponse {
  /**
   * <p>The control domain analytics data that the <code>ListControlDomainInsights</code> API
   *          returned. </p>
   */
  controlDomainInsights?: ControlDomainInsights[];

  /**
   * <p>The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

export interface ListControlDomainInsightsByAssessmentRequest {
  /**
   * <p>The unique identifier for the active assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * <p>Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

export interface ListControlDomainInsightsByAssessmentResponse {
  /**
   * <p>The control domain analytics data that the
   *             <code>ListControlDomainInsightsByAssessment</code> API returned. </p>
   */
  controlDomainInsights?: ControlDomainInsights[];

  /**
   * <p>The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

export interface ListControlInsightsByControlDomainRequest {
  /**
   * <p>The unique identifier for the control domain. </p>
   */
  controlDomainId: string | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * <p>Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

/**
 * <p>A summary of the latest analytics data for a specific control. </p>
 *          <p>This data reflects the total counts for the specified control across all active
 *          assessments. Control insights are grouped by control domain, and ranked by the highest
 *          total count of non-compliant evidence.</p>
 */
export interface ControlInsightsMetadataItem {
  /**
   * <p>The name of the control. </p>
   */
  name?: string;

  /**
   * <p>The unique identifier for the control. </p>
   */
  id?: string;

  /**
   * <p>A breakdown of the compliance check status for the evidence that’s associated with the
   *          control. </p>
   */
  evidenceInsights?: EvidenceInsights;

  /**
   * <p>The time when the control insights were last updated. </p>
   */
  lastUpdated?: Date;
}

export interface ListControlInsightsByControlDomainResponse {
  /**
   * <p>The control analytics data that the <code>ListControlInsightsByControlDomain</code> API
   *          returned. </p>
   */
  controlInsightsMetadata?: ControlInsightsMetadataItem[];

  /**
   * <p>The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

export interface ListControlsRequest {
  /**
   * <p> The type of control, such as a standard control or a custom control. </p>
   */
  controlType: ControlType | string | undefined;

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

/**
 * <p> The metadata that's associated with the standard control or custom control. </p>
 */
export interface ControlMetadata {
  /**
   * <p> The Amazon Resource Name (ARN) of the control. </p>
   */
  arn?: string;

  /**
   * <p> The unique identifier for the control. </p>
   */
  id?: string;

  /**
   * <p> The name of the control. </p>
   */
  name?: string;

  /**
   * <p> The data source that determines where Audit Manager collects evidence from for the
   *          control. </p>
   */
  controlSources?: string;

  /**
   * <p> The time when the control was created. </p>
   */
  createdAt?: Date;

  /**
   * <p> The time when the control was most recently updated. </p>
   */
  lastUpdatedAt?: Date;
}

export interface ListControlsResponse {
  /**
   * <p> The list of control metadata objects that the <code>ListControls</code> API returned.
   *       </p>
   */
  controlMetadataList?: ControlMetadata[];

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

export interface ListKeywordsForDataSourceRequest {
  /**
   * <p> The control mapping data source that the keywords apply to. </p>
   */
  source: SourceType | string | undefined;

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

export interface ListKeywordsForDataSourceResponse {
  /**
   * <p> The list of keywords for the event mapping source. </p>
   */
  keywords?: string[];

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

export interface ListNotificationsRequest {
  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

/**
 * <p> The notification that informs a user of an update in Audit Manager. For
 *          example, this includes the notification that's sent when a control set is delegated for
 *          review. </p>
 */
export interface Notification {
  /**
   * <p> The unique identifier for the notification. </p>
   */
  id?: string;

  /**
   * <p> The identifier for the assessment. </p>
   */
  assessmentId?: string;

  /**
   * <p> The name of the related assessment. </p>
   */
  assessmentName?: string;

  /**
   * <p> The identifier for the control set. </p>
   */
  controlSetId?: string;

  /**
   * <p> Specifies the name of the control set that the notification is about. </p>
   */
  controlSetName?: string;

  /**
   * <p> The description of the notification. </p>
   */
  description?: string;

  /**
   * <p> The time when the notification was sent. </p>
   */
  eventTime?: Date;

  /**
   * <p> The sender of the notification. </p>
   */
  source?: string;
}

export interface ListNotificationsResponse {
  /**
   * <p> The returned list of notifications. </p>
   */
  notifications?: Notification[];

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the resource. </p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p> The list of tags that the <code>ListTagsForResource</code> API returned. </p>
   */
  tags?: Record<string, string>;
}

export interface RegisterAccountRequest {
  /**
   * <p> The KMS key details. </p>
   */
  kmsKey?: string;

  /**
   * <p> The delegated administrator account for Audit Manager. </p>
   */
  delegatedAdminAccount?: string;
}

export interface RegisterAccountResponse {
  /**
   * <p> The status of the account registration request. </p>
   */
  status?: AccountStatus | string;
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

export interface RegisterOrganizationAdminAccountRequest {
  /**
   * <p> The identifier for the delegated administrator account. </p>
   */
  adminAccountId: string | undefined;
}

export interface RegisterOrganizationAdminAccountResponse {
  /**
   * <p> The identifier for the delegated administrator account. </p>
   */
  adminAccountId?: string;

  /**
   * <p> The identifier for the organization. </p>
   */
  organizationId?: string;
}

export interface StartAssessmentFrameworkShareRequest {
  /**
   * <p> The unique identifier for the custom framework to be shared. </p>
   */
  frameworkId: string | undefined;

  /**
   * <p> The Amazon Web Services account of the recipient. </p>
   */
  destinationAccount: string | undefined;

  /**
   * <p> The Amazon Web Services Region of the recipient. </p>
   */
  destinationRegion: string | undefined;

  /**
   * <p> An optional comment from the sender about the share request. </p>
   */
  comment?: string;
}

export interface StartAssessmentFrameworkShareResponse {
  /**
   * <p> The share request that's created by the <code>StartAssessmentFrameworkShare</code> API.
   *       </p>
   */
  assessmentFrameworkShareRequest?: AssessmentFrameworkShareRequest;
}

export interface TagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the resource. </p>
   */
  resourceArn: string | undefined;

  /**
   * <p> The tags that are associated with the resource. </p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the specified resource. </p>
   */
  resourceArn: string | undefined;

  /**
   * <p> The name or key of the tag. </p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateAssessmentRequest {
  /**
   * <p> The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * <p> The name of the assessment to be updated. </p>
   */
  assessmentName?: string;

  /**
   * <p> The description of the assessment. </p>
   */
  assessmentDescription?: string;

  /**
   * <p> The scope of the assessment. </p>
   */
  scope: Scope | undefined;

  /**
   * <p> The assessment report storage destination for the assessment that's being updated.
   *       </p>
   */
  assessmentReportsDestination?: AssessmentReportsDestination;

  /**
   * <p> The list of roles for the assessment. </p>
   */
  roles?: Role[];
}

export interface UpdateAssessmentResponse {
  /**
   * <p> The response object for the <code>UpdateAssessment</code> API. This is the name of the
   *          updated assessment.</p>
   */
  assessment?: Assessment;
}

export interface UpdateAssessmentControlRequest {
  /**
   * <p> The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * <p> The unique identifier for the control set. </p>
   */
  controlSetId: string | undefined;

  /**
   * <p> The unique identifier for the control. </p>
   */
  controlId: string | undefined;

  /**
   * <p> The status of the control. </p>
   */
  controlStatus?: ControlStatus | string;

  /**
   * <p> The comment body text for the control. </p>
   */
  commentBody?: string;
}

export interface UpdateAssessmentControlResponse {
  /**
   * <p> The name of the updated control set that the <code>UpdateAssessmentControl</code> API
   *          returned. </p>
   */
  control?: AssessmentControl;
}

export interface UpdateAssessmentControlSetStatusRequest {
  /**
   * <p> The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * <p> The unique identifier for the control set. </p>
   */
  controlSetId: string | undefined;

  /**
   * <p> The status of the control set that's being updated. </p>
   */
  status: ControlSetStatus | string | undefined;

  /**
   * <p> The comment that's related to the status update. </p>
   */
  comment: string | undefined;
}

export interface UpdateAssessmentControlSetStatusResponse {
  /**
   * <p> The name of the updated control set that the
   *             <code>UpdateAssessmentControlSetStatus</code> API returned. </p>
   */
  controlSet?: AssessmentControlSet;
}

/**
 * <p> A <code>controlSet</code> entity that represents a collection of controls in Audit Manager. This doesn't contain the control set ID. </p>
 */
export interface UpdateAssessmentFrameworkControlSet {
  /**
   * <p> The unique identifier for the control set. </p>
   */
  id?: string;

  /**
   * <p> The name of the control set. </p>
   */
  name: string | undefined;

  /**
   * <p> The list of controls that are contained within the control set. </p>
   */
  controls: CreateAssessmentFrameworkControl[] | undefined;
}

export interface UpdateAssessmentFrameworkRequest {
  /**
   * <p> The unique identifier for the framework. </p>
   */
  frameworkId: string | undefined;

  /**
   * <p> The name of the framework to be updated. </p>
   */
  name: string | undefined;

  /**
   * <p> The description of the updated framework. </p>
   */
  description?: string;

  /**
   * <p> The compliance type that the new custom framework supports, such as CIS or HIPAA.
   *       </p>
   */
  complianceType?: string;

  /**
   * <p> The control sets that are associated with the framework. </p>
   */
  controlSets: UpdateAssessmentFrameworkControlSet[] | undefined;
}

export interface UpdateAssessmentFrameworkResponse {
  /**
   * <p> The name of the framework. </p>
   */
  framework?: Framework;
}

export enum ShareRequestAction {
  ACCEPT = "ACCEPT",
  DECLINE = "DECLINE",
  REVOKE = "REVOKE",
}

export interface UpdateAssessmentFrameworkShareRequest {
  /**
   * <p> The unique identifier for the share request. </p>
   */
  requestId: string | undefined;

  /**
   * <p>Specifies whether the share request is a sent request or a received request.</p>
   */
  requestType: ShareRequestType | string | undefined;

  /**
   * <p>Specifies the update action for the share request.</p>
   */
  action: ShareRequestAction | string | undefined;
}

export interface UpdateAssessmentFrameworkShareResponse {
  /**
   * <p> The updated share request that's returned by the
   *             <code>UpdateAssessmentFrameworkShare</code> operation. </p>
   */
  assessmentFrameworkShareRequest?: AssessmentFrameworkShareRequest;
}

export interface UpdateAssessmentStatusRequest {
  /**
   * <p> The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * <p> The current status of the assessment. </p>
   */
  status: AssessmentStatus | string | undefined;
}

export interface UpdateAssessmentStatusResponse {
  /**
   * <p> The name of the updated assessment that the <code>UpdateAssessmentStatus</code> API
   *          returned. </p>
   */
  assessment?: Assessment;
}

export interface UpdateControlRequest {
  /**
   * <p> The identifier for the control. </p>
   */
  controlId: string | undefined;

  /**
   * <p> The name of the updated control. </p>
   */
  name: string | undefined;

  /**
   * <p> The optional description of the control. </p>
   */
  description?: string;

  /**
   * <p> The steps that you should follow to determine if the control is met. </p>
   */
  testingInformation?: string;

  /**
   * <p> The title of the action plan for remediating the control. </p>
   */
  actionPlanTitle?: string;

  /**
   * <p> The recommended actions to carry out if the control isn't fulfilled. </p>
   */
  actionPlanInstructions?: string;

  /**
   * <p> The data mapping sources for the control. </p>
   */
  controlMappingSources: ControlMappingSource[] | undefined;
}

export interface UpdateControlResponse {
  /**
   * <p> The name of the updated control set that the <code>UpdateControl</code> API returned.
   *       </p>
   */
  control?: Control;
}

export interface UpdateSettingsRequest {
  /**
   * <p> The Amazon Simple Notification Service (Amazon SNS) topic that Audit Manager sends
   *          notifications to. </p>
   */
  snsTopic?: string;

  /**
   * <p> The default storage destination for assessment reports. </p>
   */
  defaultAssessmentReportsDestination?: AssessmentReportsDestination;

  /**
   * <p> A list of the default audit owners. </p>
   */
  defaultProcessOwners?: Role[];

  /**
   * <p> The KMS key details. </p>
   */
  kmsKey?: string;

  /**
   * <p>Specifies whether the evidence finder feature is enabled. Change this attribute to
   *          enable or disable evidence finder.</p>
   *          <important>
   *             <p>When you use this attribute to disable evidence finder, Audit Manager deletes the
   *             event data store that’s used to query your evidence data. As a result, you can’t
   *             re-enable evidence finder and use the feature again. Your only alternative is to <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeregisterAccount.html">deregister</a> and then <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_RegisterAccount.html">re-register</a>
   *             Audit Manager. </p>
   *          </important>
   */
  evidenceFinderEnabled?: boolean;

  /**
   * <p>The deregistration policy for your Audit Manager data. You can
   *          use this attribute to determine how your data is handled when you deregister Audit Manager.</p>
   */
  deregistrationPolicy?: DeregistrationPolicy;
}

export interface UpdateSettingsResponse {
  /**
   * <p> The current list of settings. </p>
   */
  settings?: Settings;
}

export interface ValidateAssessmentReportIntegrityRequest {
  /**
   * <p> The relative path of the Amazon S3 bucket that the assessment report is stored
   *          in. </p>
   */
  s3RelativePath: string | undefined;
}

export interface ValidateAssessmentReportIntegrityResponse {
  /**
   * <p> Specifies whether the signature key is valid. </p>
   */
  signatureValid?: boolean;

  /**
   * <p> The signature algorithm that's used to code sign the assessment report file. </p>
   */
  signatureAlgorithm?: string;

  /**
   * <p> The date and time signature that specifies when the assessment report was created.
   *       </p>
   */
  signatureDateTime?: string;

  /**
   * <p> The unique identifier for the validation signature key. </p>
   */
  signatureKeyId?: string;

  /**
   * <p> Represents any errors that occurred when validating the assessment report. </p>
   */
  validationErrors?: string[];
}

/**
 * @internal
 */
export const AWSAccountFilterSensitiveLog = (obj: AWSAccount): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ControlCommentFilterSensitiveLog = (obj: ControlComment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssessmentControlFilterSensitiveLog = (obj: AssessmentControl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DelegationFilterSensitiveLog = (obj: Delegation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RoleFilterSensitiveLog = (obj: Role): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssessmentControlSetFilterSensitiveLog = (obj: AssessmentControlSet): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FrameworkMetadataFilterSensitiveLog = (obj: FrameworkMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssessmentFrameworkFilterSensitiveLog = (obj: AssessmentFramework): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssessmentReportsDestinationFilterSensitiveLog = (obj: AssessmentReportsDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AWSServiceFilterSensitiveLog = (obj: AWSService): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScopeFilterSensitiveLog = (obj: Scope): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssessmentMetadataFilterSensitiveLog = (obj: AssessmentMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssessmentFilterSensitiveLog = (obj: Assessment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssessmentEvidenceFolderFilterSensitiveLog = (obj: AssessmentEvidenceFolder): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssessmentFrameworkMetadataFilterSensitiveLog = (obj: AssessmentFrameworkMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssessmentFrameworkShareRequestFilterSensitiveLog = (obj: AssessmentFrameworkShareRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssessmentMetadataItemFilterSensitiveLog = (obj: AssessmentMetadataItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssessmentReportFilterSensitiveLog = (obj: AssessmentReport): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssessmentReportEvidenceErrorFilterSensitiveLog = (obj: AssessmentReportEvidenceError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssessmentReportMetadataFilterSensitiveLog = (obj: AssessmentReportMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateAssessmentReportEvidenceFolderRequestFilterSensitiveLog = (
  obj: AssociateAssessmentReportEvidenceFolderRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateAssessmentReportEvidenceFolderResponseFilterSensitiveLog = (
  obj: AssociateAssessmentReportEvidenceFolderResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidationExceptionFieldFilterSensitiveLog = (obj: ValidationExceptionField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchAssociateAssessmentReportEvidenceRequestFilterSensitiveLog = (
  obj: BatchAssociateAssessmentReportEvidenceRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchAssociateAssessmentReportEvidenceResponseFilterSensitiveLog = (
  obj: BatchAssociateAssessmentReportEvidenceResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDelegationRequestFilterSensitiveLog = (obj: CreateDelegationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchCreateDelegationByAssessmentRequestFilterSensitiveLog = (
  obj: BatchCreateDelegationByAssessmentRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchCreateDelegationByAssessmentErrorFilterSensitiveLog = (
  obj: BatchCreateDelegationByAssessmentError
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchCreateDelegationByAssessmentResponseFilterSensitiveLog = (
  obj: BatchCreateDelegationByAssessmentResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDeleteDelegationByAssessmentRequestFilterSensitiveLog = (
  obj: BatchDeleteDelegationByAssessmentRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDeleteDelegationByAssessmentErrorFilterSensitiveLog = (
  obj: BatchDeleteDelegationByAssessmentError
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDeleteDelegationByAssessmentResponseFilterSensitiveLog = (
  obj: BatchDeleteDelegationByAssessmentResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDisassociateAssessmentReportEvidenceRequestFilterSensitiveLog = (
  obj: BatchDisassociateAssessmentReportEvidenceRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDisassociateAssessmentReportEvidenceResponseFilterSensitiveLog = (
  obj: BatchDisassociateAssessmentReportEvidenceResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ManualEvidenceFilterSensitiveLog = (obj: ManualEvidence): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchImportEvidenceToAssessmentControlRequestFilterSensitiveLog = (
  obj: BatchImportEvidenceToAssessmentControlRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchImportEvidenceToAssessmentControlErrorFilterSensitiveLog = (
  obj: BatchImportEvidenceToAssessmentControlError
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchImportEvidenceToAssessmentControlResponseFilterSensitiveLog = (
  obj: BatchImportEvidenceToAssessmentControlResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAssessmentRequestFilterSensitiveLog = (obj: CreateAssessmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAssessmentResponseFilterSensitiveLog = (obj: CreateAssessmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAssessmentFrameworkControlFilterSensitiveLog = (obj: CreateAssessmentFrameworkControl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAssessmentFrameworkControlSetFilterSensitiveLog = (
  obj: CreateAssessmentFrameworkControlSet
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAssessmentFrameworkRequestFilterSensitiveLog = (obj: CreateAssessmentFrameworkRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceKeywordFilterSensitiveLog = (obj: SourceKeyword): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ControlMappingSourceFilterSensitiveLog = (obj: ControlMappingSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ControlFilterSensitiveLog = (obj: Control): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ControlSetFilterSensitiveLog = (obj: ControlSet): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FrameworkFilterSensitiveLog = (obj: Framework): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAssessmentFrameworkResponseFilterSensitiveLog = (obj: CreateAssessmentFrameworkResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAssessmentReportRequestFilterSensitiveLog = (obj: CreateAssessmentReportRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAssessmentReportResponseFilterSensitiveLog = (obj: CreateAssessmentReportResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateControlMappingSourceFilterSensitiveLog = (obj: CreateControlMappingSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateControlRequestFilterSensitiveLog = (obj: CreateControlRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateControlResponseFilterSensitiveLog = (obj: CreateControlResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAssessmentRequestFilterSensitiveLog = (obj: DeleteAssessmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAssessmentResponseFilterSensitiveLog = (obj: DeleteAssessmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAssessmentFrameworkRequestFilterSensitiveLog = (obj: DeleteAssessmentFrameworkRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAssessmentFrameworkResponseFilterSensitiveLog = (obj: DeleteAssessmentFrameworkResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAssessmentFrameworkShareRequestFilterSensitiveLog = (
  obj: DeleteAssessmentFrameworkShareRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAssessmentFrameworkShareResponseFilterSensitiveLog = (
  obj: DeleteAssessmentFrameworkShareResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAssessmentReportRequestFilterSensitiveLog = (obj: DeleteAssessmentReportRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAssessmentReportResponseFilterSensitiveLog = (obj: DeleteAssessmentReportResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteControlRequestFilterSensitiveLog = (obj: DeleteControlRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteControlResponseFilterSensitiveLog = (obj: DeleteControlResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterAccountRequestFilterSensitiveLog = (obj: DeregisterAccountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterAccountResponseFilterSensitiveLog = (obj: DeregisterAccountResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterOrganizationAdminAccountRequestFilterSensitiveLog = (
  obj: DeregisterOrganizationAdminAccountRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterOrganizationAdminAccountResponseFilterSensitiveLog = (
  obj: DeregisterOrganizationAdminAccountResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateAssessmentReportEvidenceFolderRequestFilterSensitiveLog = (
  obj: DisassociateAssessmentReportEvidenceFolderRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateAssessmentReportEvidenceFolderResponseFilterSensitiveLog = (
  obj: DisassociateAssessmentReportEvidenceFolderResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccountStatusRequestFilterSensitiveLog = (obj: GetAccountStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccountStatusResponseFilterSensitiveLog = (obj: GetAccountStatusResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssessmentRequestFilterSensitiveLog = (obj: GetAssessmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssessmentResponseFilterSensitiveLog = (obj: GetAssessmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssessmentFrameworkRequestFilterSensitiveLog = (obj: GetAssessmentFrameworkRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssessmentFrameworkResponseFilterSensitiveLog = (obj: GetAssessmentFrameworkResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssessmentReportUrlRequestFilterSensitiveLog = (obj: GetAssessmentReportUrlRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const URLFilterSensitiveLog = (obj: URL): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssessmentReportUrlResponseFilterSensitiveLog = (obj: GetAssessmentReportUrlResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetChangeLogsRequestFilterSensitiveLog = (obj: GetChangeLogsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ChangeLogFilterSensitiveLog = (obj: ChangeLog): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetChangeLogsResponseFilterSensitiveLog = (obj: GetChangeLogsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetControlRequestFilterSensitiveLog = (obj: GetControlRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetControlResponseFilterSensitiveLog = (obj: GetControlResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDelegationsRequestFilterSensitiveLog = (obj: GetDelegationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DelegationMetadataFilterSensitiveLog = (obj: DelegationMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDelegationsResponseFilterSensitiveLog = (obj: GetDelegationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEvidenceRequestFilterSensitiveLog = (obj: GetEvidenceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceFilterSensitiveLog = (obj: Resource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EvidenceFilterSensitiveLog = (obj: Evidence): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEvidenceResponseFilterSensitiveLog = (obj: GetEvidenceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEvidenceByEvidenceFolderRequestFilterSensitiveLog = (obj: GetEvidenceByEvidenceFolderRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEvidenceByEvidenceFolderResponseFilterSensitiveLog = (
  obj: GetEvidenceByEvidenceFolderResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEvidenceFolderRequestFilterSensitiveLog = (obj: GetEvidenceFolderRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEvidenceFolderResponseFilterSensitiveLog = (obj: GetEvidenceFolderResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEvidenceFoldersByAssessmentRequestFilterSensitiveLog = (
  obj: GetEvidenceFoldersByAssessmentRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEvidenceFoldersByAssessmentResponseFilterSensitiveLog = (
  obj: GetEvidenceFoldersByAssessmentResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEvidenceFoldersByAssessmentControlRequestFilterSensitiveLog = (
  obj: GetEvidenceFoldersByAssessmentControlRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEvidenceFoldersByAssessmentControlResponseFilterSensitiveLog = (
  obj: GetEvidenceFoldersByAssessmentControlResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInsightsRequestFilterSensitiveLog = (obj: GetInsightsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InsightsFilterSensitiveLog = (obj: Insights): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInsightsResponseFilterSensitiveLog = (obj: GetInsightsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInsightsByAssessmentRequestFilterSensitiveLog = (obj: GetInsightsByAssessmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InsightsByAssessmentFilterSensitiveLog = (obj: InsightsByAssessment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInsightsByAssessmentResponseFilterSensitiveLog = (obj: GetInsightsByAssessmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetOrganizationAdminAccountRequestFilterSensitiveLog = (obj: GetOrganizationAdminAccountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetOrganizationAdminAccountResponseFilterSensitiveLog = (
  obj: GetOrganizationAdminAccountResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetServicesInScopeRequestFilterSensitiveLog = (obj: GetServicesInScopeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceMetadataFilterSensitiveLog = (obj: ServiceMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetServicesInScopeResponseFilterSensitiveLog = (obj: GetServicesInScopeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSettingsRequestFilterSensitiveLog = (obj: GetSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregistrationPolicyFilterSensitiveLog = (obj: DeregistrationPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EvidenceFinderEnablementFilterSensitiveLog = (obj: EvidenceFinderEnablement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SettingsFilterSensitiveLog = (obj: Settings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSettingsResponseFilterSensitiveLog = (obj: GetSettingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssessmentControlInsightsByControlDomainRequestFilterSensitiveLog = (
  obj: ListAssessmentControlInsightsByControlDomainRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EvidenceInsightsFilterSensitiveLog = (obj: EvidenceInsights): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ControlInsightsMetadataByAssessmentItemFilterSensitiveLog = (
  obj: ControlInsightsMetadataByAssessmentItem
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssessmentControlInsightsByControlDomainResponseFilterSensitiveLog = (
  obj: ListAssessmentControlInsightsByControlDomainResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssessmentFrameworksRequestFilterSensitiveLog = (obj: ListAssessmentFrameworksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssessmentFrameworksResponseFilterSensitiveLog = (obj: ListAssessmentFrameworksResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssessmentFrameworkShareRequestsRequestFilterSensitiveLog = (
  obj: ListAssessmentFrameworkShareRequestsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssessmentFrameworkShareRequestsResponseFilterSensitiveLog = (
  obj: ListAssessmentFrameworkShareRequestsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssessmentReportsRequestFilterSensitiveLog = (obj: ListAssessmentReportsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssessmentReportsResponseFilterSensitiveLog = (obj: ListAssessmentReportsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssessmentsRequestFilterSensitiveLog = (obj: ListAssessmentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssessmentsResponseFilterSensitiveLog = (obj: ListAssessmentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListControlDomainInsightsRequestFilterSensitiveLog = (obj: ListControlDomainInsightsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ControlDomainInsightsFilterSensitiveLog = (obj: ControlDomainInsights): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListControlDomainInsightsResponseFilterSensitiveLog = (obj: ListControlDomainInsightsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListControlDomainInsightsByAssessmentRequestFilterSensitiveLog = (
  obj: ListControlDomainInsightsByAssessmentRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListControlDomainInsightsByAssessmentResponseFilterSensitiveLog = (
  obj: ListControlDomainInsightsByAssessmentResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListControlInsightsByControlDomainRequestFilterSensitiveLog = (
  obj: ListControlInsightsByControlDomainRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ControlInsightsMetadataItemFilterSensitiveLog = (obj: ControlInsightsMetadataItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListControlInsightsByControlDomainResponseFilterSensitiveLog = (
  obj: ListControlInsightsByControlDomainResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListControlsRequestFilterSensitiveLog = (obj: ListControlsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ControlMetadataFilterSensitiveLog = (obj: ControlMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListControlsResponseFilterSensitiveLog = (obj: ListControlsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListKeywordsForDataSourceRequestFilterSensitiveLog = (obj: ListKeywordsForDataSourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListKeywordsForDataSourceResponseFilterSensitiveLog = (obj: ListKeywordsForDataSourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNotificationsRequestFilterSensitiveLog = (obj: ListNotificationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotificationFilterSensitiveLog = (obj: Notification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNotificationsResponseFilterSensitiveLog = (obj: ListNotificationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterAccountRequestFilterSensitiveLog = (obj: RegisterAccountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterAccountResponseFilterSensitiveLog = (obj: RegisterAccountResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterOrganizationAdminAccountRequestFilterSensitiveLog = (
  obj: RegisterOrganizationAdminAccountRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterOrganizationAdminAccountResponseFilterSensitiveLog = (
  obj: RegisterOrganizationAdminAccountResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartAssessmentFrameworkShareRequestFilterSensitiveLog = (
  obj: StartAssessmentFrameworkShareRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartAssessmentFrameworkShareResponseFilterSensitiveLog = (
  obj: StartAssessmentFrameworkShareResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAssessmentRequestFilterSensitiveLog = (obj: UpdateAssessmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAssessmentResponseFilterSensitiveLog = (obj: UpdateAssessmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAssessmentControlRequestFilterSensitiveLog = (obj: UpdateAssessmentControlRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAssessmentControlResponseFilterSensitiveLog = (obj: UpdateAssessmentControlResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAssessmentControlSetStatusRequestFilterSensitiveLog = (
  obj: UpdateAssessmentControlSetStatusRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAssessmentControlSetStatusResponseFilterSensitiveLog = (
  obj: UpdateAssessmentControlSetStatusResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAssessmentFrameworkControlSetFilterSensitiveLog = (
  obj: UpdateAssessmentFrameworkControlSet
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAssessmentFrameworkRequestFilterSensitiveLog = (obj: UpdateAssessmentFrameworkRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAssessmentFrameworkResponseFilterSensitiveLog = (obj: UpdateAssessmentFrameworkResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAssessmentFrameworkShareRequestFilterSensitiveLog = (
  obj: UpdateAssessmentFrameworkShareRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAssessmentFrameworkShareResponseFilterSensitiveLog = (
  obj: UpdateAssessmentFrameworkShareResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAssessmentStatusRequestFilterSensitiveLog = (obj: UpdateAssessmentStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAssessmentStatusResponseFilterSensitiveLog = (obj: UpdateAssessmentStatusResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateControlRequestFilterSensitiveLog = (obj: UpdateControlRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateControlResponseFilterSensitiveLog = (obj: UpdateControlResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSettingsRequestFilterSensitiveLog = (obj: UpdateSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSettingsResponseFilterSensitiveLog = (obj: UpdateSettingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidateAssessmentReportIntegrityRequestFilterSensitiveLog = (
  obj: ValidateAssessmentReportIntegrityRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidateAssessmentReportIntegrityResponseFilterSensitiveLog = (
  obj: ValidateAssessmentReportIntegrityResponse
): any => ({
  ...obj,
});
