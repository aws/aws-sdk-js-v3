import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

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

export namespace AWSAccount {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AWSAccount): any => ({
    ...obj,
  });
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

export namespace ControlComment {
  /**
   * @internal
   */
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
   * <p> The amount of evidence that's generated for the control. </p>
   */
  evidenceCount?: number;

  /**
   * <p> The amount of evidence in the assessment report. </p>
   */
  assessmentReportEvidenceCount?: number;
}

export namespace AssessmentControl {
  /**
   * @internal
   */
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

export namespace Delegation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Delegation): any => ({
    ...obj,
  });
}

/**
 * <p> The wrapper that contains the Audit Manager role information of the current
 *          user. This includes the role type and IAM Amazon Resource Name (ARN).
 *       </p>
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
  roleType?: RoleType | string;

  /**
   * <p> The Amazon Resource Name (ARN) of the IAM role. </p>
   */
  roleArn?: string;
}

export namespace Role {
  /**
   * @internal
   */
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
   * <p> Specifies the current status of the control set. </p>
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

export namespace AssessmentControlSet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssessmentControlSet): any => ({
    ...obj,
  });
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

export namespace FrameworkMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FrameworkMetadata): any => ({
    ...obj,
  });
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

export namespace AssessmentFramework {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssessmentFramework): any => ({
    ...obj,
  });
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

export namespace AssessmentReportsDestination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssessmentReportsDestination): any => ({
    ...obj,
  });
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

export namespace AWSService {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AWSService): any => ({
    ...obj,
  });
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

export namespace Scope {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Scope): any => ({
    ...obj,
  });
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

export namespace AssessmentMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssessmentMetadata): any => ({
    ...obj,
  });
}

/**
 * <p> An entity that defines the scope of audit evidence collected by Audit Manager.
 *          An Audit Manager assessment is an implementation of an Audit Manager
 *          framework. </p>
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
  tags?: { [key: string]: string };
}

export namespace Assessment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Assessment): any => ({
    ...obj,
  });
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
   * <p> The number of evidence that falls under the configuration data category. This
   *             evidence is collected from configuration snapshots of other Amazon Web Services services such as Amazon EC2, Amazon S3, or IAM. </p>
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

export namespace AssessmentEvidenceFolder {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssessmentEvidenceFolder): any => ({
    ...obj,
  });
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
   * <p> Specifies when the framework was created. </p>
   */
  createdAt?: Date;

  /**
   * <p> Specifies when the framework was most recently updated. </p>
   */
  lastUpdatedAt?: Date;
}

export namespace AssessmentFrameworkMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssessmentFrameworkMetadata): any => ({
    ...obj,
  });
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
   * <p>The compliance type that the shared custom framework supports, such as CIS or HIPAA.</p>
   */
  complianceType?: string;
}

export namespace AssessmentFrameworkShareRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssessmentFrameworkShareRequest): any => ({
    ...obj,
  });
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

export namespace AssessmentMetadataItem {
  /**
   * @internal
   */
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

export namespace AssessmentReport {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssessmentReport): any => ({
    ...obj,
  });
}

/**
 * <p> An error entity for the <code>AssessmentReportEvidence</code> API. This is used to
 *          provide more meaningful errors than a simple string message. </p>
 */
export interface AssessmentReportEvidenceError {
  /**
   * <p> The identifier for the evidence. </p>
   */
  evidenceId?: string;

  /**
   * <p> The error code that the <code>AssessmentReportEvidence</code> API returned. </p>
   */
  errorCode?: string;

  /**
   * <p> The error message that the <code>AssessmentReportEvidence</code> API returned. </p>
   */
  errorMessage?: string;
}

export namespace AssessmentReportEvidenceError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssessmentReportEvidenceError): any => ({
    ...obj,
  });
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

export namespace AssessmentReportMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssessmentReportMetadata): any => ({
    ...obj,
  });
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

export namespace AssociateAssessmentReportEvidenceFolderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateAssessmentReportEvidenceFolderRequest): any => ({
    ...obj,
  });
}

export interface AssociateAssessmentReportEvidenceFolderResponse {}

export namespace AssociateAssessmentReportEvidenceFolderResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateAssessmentReportEvidenceFolderResponse): any => ({
    ...obj,
  });
}

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

export namespace ValidationExceptionField {
  /**
   * @internal
   */
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

export namespace BatchAssociateAssessmentReportEvidenceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchAssociateAssessmentReportEvidenceRequest): any => ({
    ...obj,
  });
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

export namespace BatchAssociateAssessmentReportEvidenceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchAssociateAssessmentReportEvidenceResponse): any => ({
    ...obj,
  });
}

/**
 * <p> A collection of attributes that's used to create a delegation for an assessment in
 *          Audit Manager. </p>
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
   *             <code>PROCESS_OWNER</code>. </p>
   *             <p>In <code>UpdateSettings</code>, <code>roleType</code> can only be
   *             <code>PROCESS_OWNER</code>.</p>
   *             <p>In <code>BatchCreateDelegationByAssessment</code>, <code>roleType</code> can only be
   *             <code>RESOURCE_OWNER</code>.</p>
   *          </note>
   */
  roleType?: RoleType | string;
}

export namespace CreateDelegationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDelegationRequest): any => ({
    ...obj,
  });
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

export namespace BatchCreateDelegationByAssessmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchCreateDelegationByAssessmentRequest): any => ({
    ...obj,
  });
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

export namespace BatchCreateDelegationByAssessmentError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchCreateDelegationByAssessmentError): any => ({
    ...obj,
  });
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

export namespace BatchCreateDelegationByAssessmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchCreateDelegationByAssessmentResponse): any => ({
    ...obj,
  });
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

export namespace BatchDeleteDelegationByAssessmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeleteDelegationByAssessmentRequest): any => ({
    ...obj,
  });
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

export namespace BatchDeleteDelegationByAssessmentError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeleteDelegationByAssessmentError): any => ({
    ...obj,
  });
}

export interface BatchDeleteDelegationByAssessmentResponse {
  /**
   * <p> A list of errors that the <code>BatchDeleteDelegationByAssessment</code> API returned.
   *       </p>
   */
  errors?: BatchDeleteDelegationByAssessmentError[];
}

export namespace BatchDeleteDelegationByAssessmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeleteDelegationByAssessmentResponse): any => ({
    ...obj,
  });
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

export namespace BatchDisassociateAssessmentReportEvidenceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDisassociateAssessmentReportEvidenceRequest): any => ({
    ...obj,
  });
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

export namespace BatchDisassociateAssessmentReportEvidenceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDisassociateAssessmentReportEvidenceResponse): any => ({
    ...obj,
  });
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

export namespace ManualEvidence {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ManualEvidence): any => ({
    ...obj,
  });
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

export namespace BatchImportEvidenceToAssessmentControlRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchImportEvidenceToAssessmentControlRequest): any => ({
    ...obj,
  });
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

export namespace BatchImportEvidenceToAssessmentControlError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchImportEvidenceToAssessmentControlError): any => ({
    ...obj,
  });
}

export interface BatchImportEvidenceToAssessmentControlResponse {
  /**
   * <p> A list of errors that the <code>BatchImportEvidenceToAssessmentControl</code> API
   *          returned. </p>
   */
  errors?: BatchImportEvidenceToAssessmentControlError[];
}

export namespace BatchImportEvidenceToAssessmentControlResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchImportEvidenceToAssessmentControlResponse): any => ({
    ...obj,
  });
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
   * <p> The assessment report storage destination for the assessment that's being created. </p>
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
  tags?: { [key: string]: string };
}

export namespace CreateAssessmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAssessmentRequest): any => ({
    ...obj,
  });
}

export interface CreateAssessmentResponse {
  /**
   * <p> An entity that defines the scope of audit evidence collected by Audit Manager.
   *          An Audit Manager assessment is an implementation of an Audit Manager
   *          framework. </p>
   */
  assessment?: Assessment;
}

export namespace CreateAssessmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAssessmentResponse): any => ({
    ...obj,
  });
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

export namespace CreateAssessmentFrameworkControl {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAssessmentFrameworkControl): any => ({
    ...obj,
  });
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

export namespace CreateAssessmentFrameworkControlSet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAssessmentFrameworkControlSet): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace CreateAssessmentFrameworkRequest {
  /**
   * @internal
   */
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
 * <p> The keyword to search for in CloudTrail logs, Config rules,
 *          Security Hub checks, and Amazon Web Services API names. </p>
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
   *                      <p>Service-linked rule name: securityhub-api-gw-cache-encrypted-101104e1</p>
   *                      <p>
   *                         <code>keywordValue</code>:
   *                         <code>Custom_securityhub-api-gw-cache-encrypted</code>
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

export namespace SourceKeyword {
  /**
   * @internal
   */
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
   * <p> Specifies one of the five types of data sources for evidence collection. </p>
   */
  sourceType?: SourceType | string;

  /**
   * <p> The keyword to search for in CloudTrail logs, Config rules,
   *          Security Hub checks, and Amazon Web Services API names. </p>
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

export namespace ControlMappingSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ControlMappingSource): any => ({
    ...obj,
  });
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
   * <p> The data source that determines where Audit Manager collects evidence from for
   *          the control. </p>
   */
  controlSources?: string;

  /**
   * <p> The data mapping sources for the control. </p>
   */
  controlMappingSources?: ControlMappingSource[];

  /**
   * <p> Specifies when the control was created. </p>
   */
  createdAt?: Date;

  /**
   * <p> Specifies when the control was most recently updated. </p>
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
  tags?: { [key: string]: string };
}

export namespace Control {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Control): any => ({
    ...obj,
  });
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

export namespace ControlSet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ControlSet): any => ({
    ...obj,
  });
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
   * <p> Specifies when the framework was created. </p>
   */
  createdAt?: Date;

  /**
   * <p> Specifies when the framework was most recently updated. </p>
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
  tags?: { [key: string]: string };
}

export namespace Framework {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Framework): any => ({
    ...obj,
  });
}

export interface CreateAssessmentFrameworkResponse {
  /**
   * <p> The name of the new framework that the <code>CreateAssessmentFramework</code> API
   *          returned. </p>
   */
  framework?: Framework;
}

export namespace CreateAssessmentFrameworkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAssessmentFrameworkResponse): any => ({
    ...obj,
  });
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
}

export namespace CreateAssessmentReportRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAssessmentReportRequest): any => ({
    ...obj,
  });
}

export interface CreateAssessmentReportResponse {
  /**
   * <p> The new assessment report that the <code>CreateAssessmentReport</code> API returned.
   *       </p>
   */
  assessmentReport?: AssessmentReport;
}

export namespace CreateAssessmentReportResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAssessmentReportResponse): any => ({
    ...obj,
  });
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
   *          Security Hub checks, and Amazon Web Services API names. </p>
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

export namespace CreateControlMappingSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateControlMappingSource): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace CreateControlRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateControlRequest): any => ({
    ...obj,
  });
}

export interface CreateControlResponse {
  /**
   * <p> The new control that the <code>CreateControl</code> API returned. </p>
   */
  control?: Control;
}

export namespace CreateControlResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateControlResponse): any => ({
    ...obj,
  });
}

export interface DeleteAssessmentRequest {
  /**
   * <p> The identifier for the assessment. </p>
   */
  assessmentId: string | undefined;
}

export namespace DeleteAssessmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAssessmentRequest): any => ({
    ...obj,
  });
}

export interface DeleteAssessmentResponse {}

export namespace DeleteAssessmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAssessmentResponse): any => ({
    ...obj,
  });
}

export interface DeleteAssessmentFrameworkRequest {
  /**
   * <p> The identifier for the custom framework. </p>
   */
  frameworkId: string | undefined;
}

export namespace DeleteAssessmentFrameworkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAssessmentFrameworkRequest): any => ({
    ...obj,
  });
}

export interface DeleteAssessmentFrameworkResponse {}

export namespace DeleteAssessmentFrameworkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAssessmentFrameworkResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteAssessmentFrameworkShareRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAssessmentFrameworkShareRequest): any => ({
    ...obj,
  });
}

export interface DeleteAssessmentFrameworkShareResponse {}

export namespace DeleteAssessmentFrameworkShareResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAssessmentFrameworkShareResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteAssessmentReportRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAssessmentReportRequest): any => ({
    ...obj,
  });
}

export interface DeleteAssessmentReportResponse {}

export namespace DeleteAssessmentReportResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAssessmentReportResponse): any => ({
    ...obj,
  });
}

export interface DeleteControlRequest {
  /**
   * <p> The unique identifier for the control. </p>
   */
  controlId: string | undefined;
}

export namespace DeleteControlRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteControlRequest): any => ({
    ...obj,
  });
}

export interface DeleteControlResponse {}

export namespace DeleteControlResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteControlResponse): any => ({
    ...obj,
  });
}

export interface DeregisterAccountRequest {}

export namespace DeregisterAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterAccountRequest): any => ({
    ...obj,
  });
}

export interface DeregisterAccountResponse {
  /**
   * <p> The registration status of the account. </p>
   */
  status?: AccountStatus | string;
}

export namespace DeregisterAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterAccountResponse): any => ({
    ...obj,
  });
}

export interface DeregisterOrganizationAdminAccountRequest {
  /**
   * <p> The identifier for the administrator account. </p>
   */
  adminAccountId?: string;
}

export namespace DeregisterOrganizationAdminAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterOrganizationAdminAccountRequest): any => ({
    ...obj,
  });
}

export interface DeregisterOrganizationAdminAccountResponse {}

export namespace DeregisterOrganizationAdminAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterOrganizationAdminAccountResponse): any => ({
    ...obj,
  });
}

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

export namespace DisassociateAssessmentReportEvidenceFolderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateAssessmentReportEvidenceFolderRequest): any => ({
    ...obj,
  });
}

export interface DisassociateAssessmentReportEvidenceFolderResponse {}

export namespace DisassociateAssessmentReportEvidenceFolderResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateAssessmentReportEvidenceFolderResponse): any => ({
    ...obj,
  });
}

export interface GetAccountStatusRequest {}

export namespace GetAccountStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAccountStatusRequest): any => ({
    ...obj,
  });
}

export interface GetAccountStatusResponse {
  /**
   * <p> The status of the Amazon Web Services account. </p>
   */
  status?: AccountStatus | string;
}

export namespace GetAccountStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAccountStatusResponse): any => ({
    ...obj,
  });
}

export interface GetAssessmentRequest {
  /**
   * <p>The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;
}

export namespace GetAssessmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAssessmentRequest): any => ({
    ...obj,
  });
}

export interface GetAssessmentResponse {
  /**
   * <p> An entity that defines the scope of audit evidence collected by Audit Manager.
   *          An Audit Manager assessment is an implementation of an Audit Manager
   *          framework. </p>
   */
  assessment?: Assessment;

  /**
   * <p> The wrapper that contains the Audit Manager role information of the current
   *          user. This includes the role type and IAM Amazon Resource Name (ARN).
   *       </p>
   */
  userRole?: Role;
}

export namespace GetAssessmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAssessmentResponse): any => ({
    ...obj,
  });
}

export interface GetAssessmentFrameworkRequest {
  /**
   * <p> The identifier for the framework. </p>
   */
  frameworkId: string | undefined;
}

export namespace GetAssessmentFrameworkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAssessmentFrameworkRequest): any => ({
    ...obj,
  });
}

export interface GetAssessmentFrameworkResponse {
  /**
   * <p> The framework that the <code>GetAssessmentFramework</code> API returned. </p>
   */
  framework?: Framework;
}

export namespace GetAssessmentFrameworkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAssessmentFrameworkResponse): any => ({
    ...obj,
  });
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

export namespace GetAssessmentReportUrlRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAssessmentReportUrlRequest): any => ({
    ...obj,
  });
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

export namespace URL {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: URL): any => ({
    ...obj,
  });
}

export interface GetAssessmentReportUrlResponse {
  /**
   * <p> Short for uniform resource locator. A URL is used as a unique identifier to locate a
   *          resource on the internet. </p>
   */
  preSignedUrl?: URL;
}

export namespace GetAssessmentReportUrlResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAssessmentReportUrlResponse): any => ({
    ...obj,
  });
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

export namespace GetChangeLogsRequest {
  /**
   * @internal
   */
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

export namespace ChangeLog {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChangeLog): any => ({
    ...obj,
  });
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

export namespace GetChangeLogsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetChangeLogsResponse): any => ({
    ...obj,
  });
}

export interface GetControlRequest {
  /**
   * <p> The identifier for the control. </p>
   */
  controlId: string | undefined;
}

export namespace GetControlRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetControlRequest): any => ({
    ...obj,
  });
}

export interface GetControlResponse {
  /**
   * <p> The name of the control that the <code>GetControl</code> API returned. </p>
   */
  control?: Control;
}

export namespace GetControlResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetControlResponse): any => ({
    ...obj,
  });
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

export namespace GetDelegationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDelegationsRequest): any => ({
    ...obj,
  });
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

export namespace DelegationMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DelegationMetadata): any => ({
    ...obj,
  });
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

export namespace GetDelegationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDelegationsResponse): any => ({
    ...obj,
  });
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

export namespace GetEvidenceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEvidenceRequest): any => ({
    ...obj,
  });
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
}

export namespace Resource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Resource): any => ({
    ...obj,
  });
}

/**
 * <p> A record that contains the information needed to demonstrate compliance with the
 *          requirements specified by a control. Examples of evidence include change activity triggered
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
  attributes?: { [key: string]: string };

  /**
   * <p> The unique identifier for the IAM user or role that's associated with
   *          the evidence. </p>
   */
  iamId?: string;

  /**
   * <p> The evaluation status for evidence that falls under the compliance check category. For
   *          evidence collected from Security Hub, a <i>Pass</i> or
   *          <i>Fail</i> result is shown. For evidence collected from Config, a <i>Compliant</i> or <i>Noncompliant</i>
   *          result is shown. </p>
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

export namespace Evidence {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Evidence): any => ({
    ...obj,
  });
}

export interface GetEvidenceResponse {
  /**
   * <p> The evidence that the <code>GetEvidenceResponse</code> API returned. </p>
   */
  evidence?: Evidence;
}

export namespace GetEvidenceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEvidenceResponse): any => ({
    ...obj,
  });
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

export namespace GetEvidenceByEvidenceFolderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEvidenceByEvidenceFolderRequest): any => ({
    ...obj,
  });
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

export namespace GetEvidenceByEvidenceFolderResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEvidenceByEvidenceFolderResponse): any => ({
    ...obj,
  });
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

export namespace GetEvidenceFolderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEvidenceFolderRequest): any => ({
    ...obj,
  });
}

export interface GetEvidenceFolderResponse {
  /**
   * <p> The folder that the evidence is stored in. </p>
   */
  evidenceFolder?: AssessmentEvidenceFolder;
}

export namespace GetEvidenceFolderResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEvidenceFolderResponse): any => ({
    ...obj,
  });
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

export namespace GetEvidenceFoldersByAssessmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEvidenceFoldersByAssessmentRequest): any => ({
    ...obj,
  });
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

export namespace GetEvidenceFoldersByAssessmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEvidenceFoldersByAssessmentResponse): any => ({
    ...obj,
  });
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

export namespace GetEvidenceFoldersByAssessmentControlRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEvidenceFoldersByAssessmentControlRequest): any => ({
    ...obj,
  });
}

export interface GetEvidenceFoldersByAssessmentControlResponse {
  /**
   * <p> The list of evidence folders that the
   *          <code>GetEvidenceFoldersByAssessmentControl</code> API returned. </p>
   */
  evidenceFolders?: AssessmentEvidenceFolder[];

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

export namespace GetEvidenceFoldersByAssessmentControlResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEvidenceFoldersByAssessmentControlResponse): any => ({
    ...obj,
  });
}

export interface GetInsightsRequest {}

export namespace GetInsightsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInsightsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of the latest analytics data for all your active assessments. </p>
 *          <p>This summary is a snapshot of the data that your active assessments collected on the
 *          <code>lastUpdated</code> date. It’s important to understand that the following totals
 *          are daily counts based on this date — they aren’t a total sum to date. </p>
 *          <p>The <code>Insights</code> data is eventually consistent. This means that, when you read
 *          data from <code>Insights</code>, the response might not instantly reflect the results of a
 *          recently completed write or update operation. If you repeat your read request after a few
 *          hours, the response should return the latest data.</p>
 *          <note>
 *             <p>If you delete an assessment or change its status to inactive,
 *             <code>InsightsByAssessment</code> includes data for that assessment as
 *             follows.</p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <b>Inactive assessments</b> - If Audit Manager collected
 *                evidence for your assessment before you changed it inactive, that evidence is
 *                included in the <code>InsightsByAssessment</code> counts for that day.</p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <b>Deleted assessments</b> - If Audit Manager collected
 *                evidence for your assessment before you deleted it, that evidence isn't included
 *                in the <code>InsightsByAssessment</code> counts for that day.</p>
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
   * <p>The number of compliance check evidence that Audit Manager classified as non-compliant
   *          on the <code>lastUpdated</code> date. This includes evidence that was collected from
   *          Security Hub with a <i>Fail</i> ruling, or collected from
   *          Config with a <i>Non-compliant</i> ruling. </p>
   */
  noncompliantEvidenceCount?: number;

  /**
   * <p>The number of compliance check evidence that Audit Manager classified as compliant on
   *          the <code>lastUpdated</code> date. This includes evidence that was collected from Security Hub with a <i>Pass</i> ruling, or collected from Config with a <i>Compliant</i> ruling. </p>
   */
  compliantEvidenceCount?: number;

  /**
   * <p>The number of evidence without a compliance check ruling. Evidence is inconclusive when the
   *          associated control uses Security Hub or Config as a data source
   *          but you didn't enable those services. This is also the case when a control uses a data
   *          source that doesn’t support compliance checks (for example: manual evidence, API calls, or
   *          CloudTrail). </p>
   *          <note>
   *             <p>If evidence has a compliance check status of <i>not applicable</i>, it's classed
   *          as <i>inconclusive</i> in <code>Insights</code> data.</p>
   *          </note>
   */
  inconclusiveEvidenceCount?: number;

  /**
   * <p>The number of assessment controls that collected non-compliant evidence on the
   *          <code>lastUpdated</code> date. </p>
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

export namespace Insights {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Insights): any => ({
    ...obj,
  });
}

export interface GetInsightsResponse {
  /**
   * <p>The analytics data that the <code>GetInsights</code> API returned. </p>
   */
  insights?: Insights;
}

export namespace GetInsightsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInsightsResponse): any => ({
    ...obj,
  });
}

export interface GetInsightsByAssessmentRequest {
  /**
   * <p>The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;
}

export namespace GetInsightsByAssessmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInsightsByAssessmentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of the latest analytics data for a specific active assessment.</p>
 *          <p>This summary is a snapshot of the data that was collected on the <code>lastUpdated</code>
 *          date. It’s important to understand that the totals in <code>InsightsByAssessment</code> are
 *          daily counts based on this date — they aren’t a total sum to date. </p>
 *          <p>The <code>InsightsByAssessment</code> data is eventually consistent. This means that
 *          when you read data from <code>InsightsByAssessment</code>, the response might not instantly
 *          reflect the results of a recently completed write or update operation. If you repeat your
 *          read request after a few hours, the response returns the latest data.</p>
 *          <note>
 *             <p>If you delete an assessment or change its status to inactive,
 *             <code>InsightsByAssessment</code> includes data for that assessment as
 *             follows.</p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <b>Inactive assessments</b> - If Audit Manager collected
 *                evidence for your assessment before you changed it inactive, that evidence is
 *                included in the <code>InsightsByAssessment</code> counts for that day.</p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <b>Deleted assessments</b> - If Audit Manager collected
 *                evidence for your assessment before you deleted it, that evidence isn't included
 *                in the <code>InsightsByAssessment</code> counts for that day.</p>
 *                </li>
 *             </ul>
 *          </note>
 */
export interface InsightsByAssessment {
  /**
   * <p>The number of compliance check evidence that Audit Manager classified as non-compliant.
   *          This includes evidence that was collected from Security Hub with a
   *          <i>Fail</i> ruling, or collected from Config with a
   *          <i>Non-compliant</i> ruling. </p>
   */
  noncompliantEvidenceCount?: number;

  /**
   * <p>The number of compliance check evidence that Audit Manager classified as compliant.
   *          This includes evidence that was collected from Security Hub with a
   *          <i>Pass</i> ruling, or collected from Config with a
   *          <i>Compliant</i> ruling. </p>
   */
  compliantEvidenceCount?: number;

  /**
   * <p>The amount of evidence without a compliance check ruling. Evidence is inconclusive if the
   *          associated control uses Security Hub or Config as a data source
   *          and you didn't enable those services. This is also the case if a control uses a data source
   *          that doesn’t support compliance checks (for example, manual evidence, API calls, or CloudTrail). </p>
   *          <note>
   *             <p>If evidence has a compliance check status of <i>not applicable</i>, it's
   *          classified as <i>inconclusive</i> in <code>InsightsByAssessment</code>
   *          data.</p>
   *          </note>
   */
  inconclusiveEvidenceCount?: number;

  /**
   * <p>The number of assessment controls that collected non-compliant evidence on the
   *          <code>lastUpdated</code> date. </p>
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

export namespace InsightsByAssessment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsightsByAssessment): any => ({
    ...obj,
  });
}

export interface GetInsightsByAssessmentResponse {
  /**
   * <p> The assessment analytics data that the <code>GetInsightsByAssessment</code> API
   *          returned. </p>
   */
  insights?: InsightsByAssessment;
}

export namespace GetInsightsByAssessmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInsightsByAssessmentResponse): any => ({
    ...obj,
  });
}

export interface GetOrganizationAdminAccountRequest {}

export namespace GetOrganizationAdminAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOrganizationAdminAccountRequest): any => ({
    ...obj,
  });
}

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

export namespace GetOrganizationAdminAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOrganizationAdminAccountResponse): any => ({
    ...obj,
  });
}

export interface GetServicesInScopeRequest {}

export namespace GetServicesInScopeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetServicesInScopeRequest): any => ({
    ...obj,
  });
}

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

export namespace ServiceMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceMetadata): any => ({
    ...obj,
  });
}

export interface GetServicesInScopeResponse {
  /**
   * <p> The metadata that's associated with the Amazon Web Service. </p>
   */
  serviceMetadata?: ServiceMetadata[];
}

export namespace GetServicesInScopeResponse {
  /**
   * @internal
   */
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
   * <p> The list of <code>SettingAttribute</code> enum values. </p>
   */
  attribute: SettingAttribute | string | undefined;
}

export namespace GetSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSettingsRequest): any => ({
    ...obj,
  });
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
}

export namespace Settings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Settings): any => ({
    ...obj,
  });
}

export interface GetSettingsResponse {
  /**
   * <p> The settings object that holds all supported Audit Manager settings. </p>
   */
  settings?: Settings;
}

export namespace GetSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSettingsResponse): any => ({
    ...obj,
  });
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

export namespace ListAssessmentControlInsightsByControlDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssessmentControlInsightsByControlDomainRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A breakdown of the latest compliance check status for the evidence in your Audit Manager
 *          assessments. </p>
 */
export interface EvidenceInsights {
  /**
   * <p>The number of compliance check evidence that Audit Manager classified as non-compliant.
   *          This includes evidence that was collected from Security Hub with a
   *          <i>Fail</i> ruling, or collected from Config with a
   *          <i>Non-compliant</i> ruling. </p>
   */
  noncompliantEvidenceCount?: number;

  /**
   * <p>The number of compliance check evidence that Audit Manager classified as compliant. This
   *          includes evidence that was collected from Security Hub with a
   *          <i>Pass</i> ruling, or collected from Config with a
   *          <i>Compliant</i> ruling. </p>
   */
  compliantEvidenceCount?: number;

  /**
   * <p>The number of evidence that a compliance check ruling isn't available for. Evidence is
   *          inconclusive when the associated control uses Security Hub or Config as a data source but you didn't enable those services. This is also the case when a
   *          control uses a data source that doesn’t support compliance checks (for example, manual
   *          evidence, API calls, or CloudTrail). </p>
   *          <note>
   *             <p>If evidence has a compliance check status of <i>not applicable</i> in the
   *          console, it's classified as <i>inconclusive</i> in
   *          <code>EvidenceInsights</code> data.</p>
   *          </note>
   */
  inconclusiveEvidenceCount?: number;
}

export namespace EvidenceInsights {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EvidenceInsights): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of the latest analytics data for a specific control in a specific active
 *          assessment.</p>
 *          <p>Control insights are grouped by control domain, and ranked by the highest total count of non-compliant evidence.
 *       </p>
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

export namespace ControlInsightsMetadataByAssessmentItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ControlInsightsMetadataByAssessmentItem): any => ({
    ...obj,
  });
}

export interface ListAssessmentControlInsightsByControlDomainResponse {
  /**
   * <p>The assessment control analytics data that the
   *          <code>ListAssessmentControlInsightsByControlDomain</code> API returned. </p>
   */
  controlInsightsByAssessment?: ControlInsightsMetadataByAssessmentItem[];

  /**
   * <p>The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

export namespace ListAssessmentControlInsightsByControlDomainResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssessmentControlInsightsByControlDomainResponse): any => ({
    ...obj,
  });
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

export namespace ListAssessmentFrameworksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssessmentFrameworksRequest): any => ({
    ...obj,
  });
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

export namespace ListAssessmentFrameworksResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssessmentFrameworksResponse): any => ({
    ...obj,
  });
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

export namespace ListAssessmentFrameworkShareRequestsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssessmentFrameworkShareRequestsRequest): any => ({
    ...obj,
  });
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

export namespace ListAssessmentFrameworkShareRequestsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssessmentFrameworkShareRequestsResponse): any => ({
    ...obj,
  });
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

export namespace ListAssessmentReportsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssessmentReportsRequest): any => ({
    ...obj,
  });
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

export namespace ListAssessmentReportsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssessmentReportsResponse): any => ({
    ...obj,
  });
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

export namespace ListAssessmentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssessmentsRequest): any => ({
    ...obj,
  });
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

export namespace ListAssessmentsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssessmentsResponse): any => ({
    ...obj,
  });
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

export namespace ListControlDomainInsightsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListControlDomainInsightsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of the latest analytics data for a specific control domain.</p>
 *          <p>Control domain insights are grouped by control domain, and ranked by the highest total count of non-compliant evidence.</p>
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
   * <p>The number of controls in the control domain that collected non-compliant evidence on the
   *          <code>lastUpdated</code> date. </p>
   */
  controlsCountByNoncompliantEvidence?: number;

  /**
   * <p>The total number of controls in the control domain. </p>
   */
  totalControlsCount?: number;

  /**
   * <p>A breakdown of the compliance check status for the evidence that’s associated with the control
   *          domain. </p>
   */
  evidenceInsights?: EvidenceInsights;

  /**
   * <p>The time when the control domain insights were last updated. </p>
   */
  lastUpdated?: Date;
}

export namespace ControlDomainInsights {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ControlDomainInsights): any => ({
    ...obj,
  });
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

export namespace ListControlDomainInsightsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListControlDomainInsightsResponse): any => ({
    ...obj,
  });
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

export namespace ListControlDomainInsightsByAssessmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListControlDomainInsightsByAssessmentRequest): any => ({
    ...obj,
  });
}

export interface ListControlDomainInsightsByAssessmentResponse {
  /**
   * <p>The control domain analytics data that the
   *          <code>ListControlDomainInsightsByAssessment</code> API returned. </p>
   */
  controlDomainInsights?: ControlDomainInsights[];

  /**
   * <p>The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

export namespace ListControlDomainInsightsByAssessmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListControlDomainInsightsByAssessmentResponse): any => ({
    ...obj,
  });
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

export namespace ListControlInsightsByControlDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListControlInsightsByControlDomainRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of the latest analytics data for a specific control. </p>
 *          <p>This data reflects the total counts for the specified control across all active assessments. Control insights are grouped by control domain, and ranked by the highest total count of non-compliant evidence.</p>
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

export namespace ControlInsightsMetadataItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ControlInsightsMetadataItem): any => ({
    ...obj,
  });
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

export namespace ListControlInsightsByControlDomainResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListControlInsightsByControlDomainResponse): any => ({
    ...obj,
  });
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

export namespace ListControlsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListControlsRequest): any => ({
    ...obj,
  });
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
   * <p> The data source that determines where Audit Manager collects evidence from for
   *          the control. </p>
   */
  controlSources?: string;

  /**
   * <p> Specifies when the control was created. </p>
   */
  createdAt?: Date;

  /**
   * <p> Specifies when the control was most recently updated. </p>
   */
  lastUpdatedAt?: Date;
}

export namespace ControlMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ControlMetadata): any => ({
    ...obj,
  });
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

export namespace ListControlsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListControlsResponse): any => ({
    ...obj,
  });
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

export namespace ListKeywordsForDataSourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListKeywordsForDataSourceRequest): any => ({
    ...obj,
  });
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

export namespace ListKeywordsForDataSourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListKeywordsForDataSourceResponse): any => ({
    ...obj,
  });
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

export namespace ListNotificationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListNotificationsRequest): any => ({
    ...obj,
  });
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

export namespace Notification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Notification): any => ({
    ...obj,
  });
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

export namespace ListNotificationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListNotificationsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the resource. </p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p> The list of tags that the <code>ListTagsForResource</code> API returned. </p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
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

export namespace RegisterAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterAccountRequest): any => ({
    ...obj,
  });
}

export interface RegisterAccountResponse {
  /**
   * <p> The status of the account registration request. </p>
   */
  status?: AccountStatus | string;
}

export namespace RegisterAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterAccountResponse): any => ({
    ...obj,
  });
}

export interface RegisterOrganizationAdminAccountRequest {
  /**
   * <p> The identifier for the delegated administrator account. </p>
   */
  adminAccountId: string | undefined;
}

export namespace RegisterOrganizationAdminAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterOrganizationAdminAccountRequest): any => ({
    ...obj,
  });
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

export namespace RegisterOrganizationAdminAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterOrganizationAdminAccountResponse): any => ({
    ...obj,
  });
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

export namespace StartAssessmentFrameworkShareRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartAssessmentFrameworkShareRequest): any => ({
    ...obj,
  });
}

export interface StartAssessmentFrameworkShareResponse {
  /**
   * <p> The share request that's created by the <code>StartAssessmentFrameworkShare</code> API.
   *       </p>
   */
  assessmentFrameworkShareRequest?: AssessmentFrameworkShareRequest;
}

export namespace StartAssessmentFrameworkShareResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartAssessmentFrameworkShareResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the resource. </p>
   */
  resourceArn: string | undefined;

  /**
   * <p> The tags that are associated with the resource. </p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

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

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateAssessmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAssessmentRequest): any => ({
    ...obj,
  });
}

export interface UpdateAssessmentResponse {
  /**
   * <p> The response object for the <code>UpdateAssessmentRequest</code> API. This is the name
   *          of the updated assessment.</p>
   */
  assessment?: Assessment;
}

export namespace UpdateAssessmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAssessmentResponse): any => ({
    ...obj,
  });
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

export namespace UpdateAssessmentControlRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAssessmentControlRequest): any => ({
    ...obj,
  });
}

export interface UpdateAssessmentControlResponse {
  /**
   * <p> The name of the updated control set that the <code>UpdateAssessmentControl</code> API
   *          returned. </p>
   */
  control?: AssessmentControl;
}

export namespace UpdateAssessmentControlResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAssessmentControlResponse): any => ({
    ...obj,
  });
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

export namespace UpdateAssessmentControlSetStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAssessmentControlSetStatusRequest): any => ({
    ...obj,
  });
}

export interface UpdateAssessmentControlSetStatusResponse {
  /**
   * <p> The name of the updated control set that the
   *          <code>UpdateAssessmentControlSetStatus</code> API returned. </p>
   */
  controlSet?: AssessmentControlSet;
}

export namespace UpdateAssessmentControlSetStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAssessmentControlSetStatusResponse): any => ({
    ...obj,
  });
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

export namespace UpdateAssessmentFrameworkControlSet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAssessmentFrameworkControlSet): any => ({
    ...obj,
  });
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

export namespace UpdateAssessmentFrameworkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAssessmentFrameworkRequest): any => ({
    ...obj,
  });
}

export interface UpdateAssessmentFrameworkResponse {
  /**
   * <p> The name of the framework. </p>
   */
  framework?: Framework;
}

export namespace UpdateAssessmentFrameworkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAssessmentFrameworkResponse): any => ({
    ...obj,
  });
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

export namespace UpdateAssessmentFrameworkShareRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAssessmentFrameworkShareRequest): any => ({
    ...obj,
  });
}

export interface UpdateAssessmentFrameworkShareResponse {
  /**
   * <p> The updated share request that's returned by the
   *          <code>UpdateAssessmentFrameworkShare</code> operation. </p>
   */
  assessmentFrameworkShareRequest?: AssessmentFrameworkShareRequest;
}

export namespace UpdateAssessmentFrameworkShareResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAssessmentFrameworkShareResponse): any => ({
    ...obj,
  });
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

export namespace UpdateAssessmentStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAssessmentStatusRequest): any => ({
    ...obj,
  });
}

export interface UpdateAssessmentStatusResponse {
  /**
   * <p> The name of the updated assessment that the <code>UpdateAssessmentStatus</code> API
   *          returned. </p>
   */
  assessment?: Assessment;
}

export namespace UpdateAssessmentStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAssessmentStatusResponse): any => ({
    ...obj,
  });
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

export namespace UpdateControlRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateControlRequest): any => ({
    ...obj,
  });
}

export interface UpdateControlResponse {
  /**
   * <p> The name of the updated control set that the <code>UpdateControl</code> API returned.
   *       </p>
   */
  control?: Control;
}

export namespace UpdateControlResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateControlResponse): any => ({
    ...obj,
  });
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
}

export namespace UpdateSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSettingsRequest): any => ({
    ...obj,
  });
}

export interface UpdateSettingsResponse {
  /**
   * <p> The current list of settings. </p>
   */
  settings?: Settings;
}

export namespace UpdateSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSettingsResponse): any => ({
    ...obj,
  });
}

export interface ValidateAssessmentReportIntegrityRequest {
  /**
   * <p> The relative path of the Amazon S3 bucket that the assessment report is stored
   *          in. </p>
   */
  s3RelativePath: string | undefined;
}

export namespace ValidateAssessmentReportIntegrityRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidateAssessmentReportIntegrityRequest): any => ({
    ...obj,
  });
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

export namespace ValidateAssessmentReportIntegrityResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidateAssessmentReportIntegrityResponse): any => ({
    ...obj,
  });
}
