// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { AuditManagerServiceException as __BaseException } from "./AuditManagerServiceException";

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const AccountStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  PENDING_ACTIVATION: "PENDING_ACTIVATION",
} as const;

/**
 * @public
 */
export type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus];

/**
 * @public
 * @enum
 */
export const ActionEnum = {
  ACTIVE: "ACTIVE",
  CREATE: "CREATE",
  DELETE: "DELETE",
  IMPORT_EVIDENCE: "IMPORT_EVIDENCE",
  INACTIVE: "INACTIVE",
  REVIEWED: "REVIEWED",
  UNDER_REVIEW: "UNDER_REVIEW",
  UPDATE_METADATA: "UPDATE_METADATA",
} as const;

/**
 * @public
 */
export type ActionEnum = (typeof ActionEnum)[keyof typeof ActionEnum];

/**
 * @public
 * <p> The wrapper of Amazon Web Services account details, such as account ID or email address.
 *       </p>
 */
export interface AWSAccount {
  /**
   * @public
   * <p> The identifier for the Amazon Web Services account. </p>
   */
  id?: string;

  /**
   * @public
   * <p> The email address that's associated with the Amazon Web Services account. </p>
   */
  emailAddress?: string;

  /**
   * @public
   * <p> The name of the Amazon Web Services account. </p>
   */
  name?: string;
}

/**
 * @public
 * <p> A comment that's posted by a user on a control. This includes the author's name, the
 *          comment text, and a timestamp. </p>
 */
export interface ControlComment {
  /**
   * @public
   * <p> The name of the user who authored the comment. </p>
   */
  authorName?: string;

  /**
   * @public
   * <p> The body text of a control comment. </p>
   */
  commentBody?: string;

  /**
   * @public
   * <p> The time when the comment was posted. </p>
   */
  postedDate?: Date;
}

/**
 * @public
 * @enum
 */
export const ControlResponse = {
  AUTOMATE: "AUTOMATE",
  DEFER: "DEFER",
  IGNORE: "IGNORE",
  MANUAL: "MANUAL",
} as const;

/**
 * @public
 */
export type ControlResponse = (typeof ControlResponse)[keyof typeof ControlResponse];

/**
 * @public
 * @enum
 */
export const ControlStatus = {
  INACTIVE: "INACTIVE",
  REVIEWED: "REVIEWED",
  UNDER_REVIEW: "UNDER_REVIEW",
} as const;

/**
 * @public
 */
export type ControlStatus = (typeof ControlStatus)[keyof typeof ControlStatus];

/**
 * @public
 * <p> The control entity that represents a standard control or a custom control in an Audit Manager assessment. </p>
 */
export interface AssessmentControl {
  /**
   * @public
   * <p> The identifier for the control. </p>
   */
  id?: string;

  /**
   * @public
   * <p> The name of the control. </p>
   */
  name?: string;

  /**
   * @public
   * <p> The description of the control. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The status of the control. </p>
   */
  status?: ControlStatus;

  /**
   * @public
   * <p> The response of the control. </p>
   */
  response?: ControlResponse;

  /**
   * @public
   * <p> The list of comments that's attached to the control. </p>
   */
  comments?: ControlComment[];

  /**
   * @public
   * <p> The list of data sources for the evidence. </p>
   */
  evidenceSources?: string[];

  /**
   * @public
   * <p> The amount of evidence that's collected for the control. </p>
   */
  evidenceCount?: number;

  /**
   * @public
   * <p> The amount of evidence in the assessment report. </p>
   */
  assessmentReportEvidenceCount?: number;
}

/**
 * @public
 * @enum
 */
export const RoleType = {
  PROCESS_OWNER: "PROCESS_OWNER",
  RESOURCE_OWNER: "RESOURCE_OWNER",
} as const;

/**
 * @public
 */
export type RoleType = (typeof RoleType)[keyof typeof RoleType];

/**
 * @public
 * @enum
 */
export const DelegationStatus = {
  COMPLETE: "COMPLETE",
  IN_PROGRESS: "IN_PROGRESS",
  UNDER_REVIEW: "UNDER_REVIEW",
} as const;

/**
 * @public
 */
export type DelegationStatus = (typeof DelegationStatus)[keyof typeof DelegationStatus];

/**
 * @public
 * <p> The assignment of a control set to a delegate for review. </p>
 */
export interface Delegation {
  /**
   * @public
   * <p> The unique identifier for the delegation. </p>
   */
  id?: string;

  /**
   * @public
   * <p> The name of the assessment that's associated with the delegation. </p>
   */
  assessmentName?: string;

  /**
   * @public
   * <p> The identifier for the assessment that's associated with the delegation. </p>
   */
  assessmentId?: string;

  /**
   * @public
   * <p> The status of the delegation. </p>
   */
  status?: DelegationStatus;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the IAM role. </p>
   */
  roleArn?: string;

  /**
   * @public
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
  roleType?: RoleType;

  /**
   * @public
   * <p> Specifies when the delegation was created. </p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p> Specifies when the delegation was last updated. </p>
   */
  lastUpdated?: Date;

  /**
   * @public
   * <p> The identifier for the control set that's associated with the delegation. </p>
   */
  controlSetId?: string;

  /**
   * @public
   * <p> The comment that's related to the delegation. </p>
   */
  comment?: string;

  /**
   * @public
   * <p> The user or role that created the delegation. </p>
   */
  createdBy?: string;
}

/**
 * @public
 * <p> The wrapper that contains the Audit Manager role information of the current user.
 *          This includes the role type and IAM Amazon Resource Name (ARN). </p>
 */
export interface Role {
  /**
   * @public
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
  roleType: RoleType | undefined;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the IAM role. </p>
   */
  roleArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ControlSetStatus = {
  ACTIVE: "ACTIVE",
  REVIEWED: "REVIEWED",
  UNDER_REVIEW: "UNDER_REVIEW",
} as const;

/**
 * @public
 */
export type ControlSetStatus = (typeof ControlSetStatus)[keyof typeof ControlSetStatus];

/**
 * @public
 * <p> Represents a set of controls in an Audit Manager assessment. </p>
 */
export interface AssessmentControlSet {
  /**
   * @public
   * <p> The identifier of the control set in the assessment. This is the control set name in a
   *          plain string format. </p>
   */
  id?: string;

  /**
   * @public
   * <p> The description for the control set. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The current status of the control set. </p>
   */
  status?: ControlSetStatus;

  /**
   * @public
   * <p> The roles that are associated with the control set. </p>
   */
  roles?: Role[];

  /**
   * @public
   * <p> The list of controls that's contained with the control set. </p>
   */
  controls?: AssessmentControl[];

  /**
   * @public
   * <p> The delegations that are associated with the control set. </p>
   */
  delegations?: Delegation[];

  /**
   * @public
   * <p> The total number of evidence objects that are retrieved automatically for the control
   *          set. </p>
   */
  systemEvidenceCount?: number;

  /**
   * @public
   * <p> The total number of evidence objects that are uploaded manually to the control set.
   *       </p>
   */
  manualEvidenceCount?: number;
}

/**
 * @public
 * <p> The metadata of a framework, such as the name, ID, or description. </p>
 */
export interface FrameworkMetadata {
  /**
   * @public
   * <p> The name of the framework. </p>
   */
  name?: string;

  /**
   * @public
   * <p> The description of the framework. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The logo that's associated with the framework. </p>
   */
  logo?: string;

  /**
   * @public
   * <p> The compliance standard that's associated with the framework. For example, this could
   *          be PCI DSS or HIPAA. </p>
   */
  complianceType?: string;
}

/**
 * @public
 * <p> The file used to structure and automate Audit Manager assessments for a given
 *          compliance standard. </p>
 */
export interface AssessmentFramework {
  /**
   * @public
   * <p> The unique identifier for the framework. </p>
   */
  id?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the framework. </p>
   */
  arn?: string;

  /**
   * @public
   * <p> The metadata of a framework, such as the name, ID, or description. </p>
   */
  metadata?: FrameworkMetadata;

  /**
   * @public
   * <p> The control sets that are associated with the framework. </p>
   */
  controlSets?: AssessmentControlSet[];
}

/**
 * @public
 * @enum
 */
export const AssessmentReportDestinationType = {
  S3: "S3",
} as const;

/**
 * @public
 */
export type AssessmentReportDestinationType =
  (typeof AssessmentReportDestinationType)[keyof typeof AssessmentReportDestinationType];

/**
 * @public
 * <p> The location where Audit Manager saves assessment reports for the given
 *          assessment. </p>
 */
export interface AssessmentReportsDestination {
  /**
   * @public
   * <p> The destination type, such as Amazon S3. </p>
   */
  destinationType?: AssessmentReportDestinationType;

  /**
   * @public
   * <p> The destination bucket where Audit Manager stores assessment reports. </p>
   */
  destination?: string;
}

/**
 * @public
 * <p> An Amazon Web Service such as Amazon S3 or CloudTrail.
 *       </p>
 *          <p>For an example of how to find an Amazon Web Service name and how to define it in
 *          your assessment scope, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetServicesInScope.html#API_GetServicesInScope_Example_2">Finding an Amazon Web Service name to use in your assessment scope</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetServicesInScope.html#API_GetServicesInScope_Example_3">Defining an Amazon Web Service name in your assessment scope</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface AWSService {
  /**
   * @public
   * <p> The name of the Amazon Web Service. </p>
   */
  serviceName?: string;
}

/**
 * @public
 * <p> The wrapper that contains the Amazon Web Services accounts and services that are in
 *          scope for the assessment. </p>
 */
export interface Scope {
  /**
   * @public
   * <p> The Amazon Web Services accounts that are included in the scope of the assessment.
   *       </p>
   */
  awsAccounts?: AWSAccount[];

  /**
   * @public
   * <p> The Amazon Web Services services that are included in the scope of the assessment.
   *       </p>
   */
  awsServices?: AWSService[];
}

/**
 * @public
 * @enum
 */
export const AssessmentStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type AssessmentStatus = (typeof AssessmentStatus)[keyof typeof AssessmentStatus];

/**
 * @public
 * <p> The metadata that's associated with the specified assessment. </p>
 */
export interface AssessmentMetadata {
  /**
   * @public
   * <p> The name of the assessment. </p>
   */
  name?: string;

  /**
   * @public
   * <p> The unique identifier for the assessment. </p>
   */
  id?: string;

  /**
   * @public
   * <p> The description of the assessment. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The name of the compliance standard that's related to the assessment, such as PCI-DSS.
   *       </p>
   */
  complianceType?: string;

  /**
   * @public
   * <p> The overall status of the assessment. </p>
   */
  status?: AssessmentStatus;

  /**
   * @public
   * <p> The destination that evidence reports are stored in for the assessment. </p>
   */
  assessmentReportsDestination?: AssessmentReportsDestination;

  /**
   * @public
   * <p> The wrapper of Amazon Web Services accounts and services that are in scope for the
   *          assessment. </p>
   */
  scope?: Scope;

  /**
   * @public
   * <p> The roles that are associated with the assessment. </p>
   */
  roles?: Role[];

  /**
   * @public
   * <p> The delegations that are associated with the assessment. </p>
   */
  delegations?: Delegation[];

  /**
   * @public
   * <p> Specifies when the assessment was created. </p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p> The time of the most recent update. </p>
   */
  lastUpdated?: Date;
}

/**
 * @public
 * <p> An entity that defines the scope of audit evidence collected by Audit Manager.
 *          An Audit Manager assessment is an implementation of an Audit Manager framework. </p>
 */
export interface Assessment {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the assessment. </p>
   */
  arn?: string;

  /**
   * @public
   * <p> The Amazon Web Services account that's associated with the assessment. </p>
   */
  awsAccount?: AWSAccount;

  /**
   * @public
   * <p> The metadata for the assessment. </p>
   */
  metadata?: AssessmentMetadata;

  /**
   * @public
   * <p> The framework that the assessment was created from. </p>
   */
  framework?: AssessmentFramework;

  /**
   * @public
   * <p> The tags that are associated with the assessment. </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p> The folder where Audit Manager stores evidence for an assessment. </p>
 */
export interface AssessmentEvidenceFolder {
  /**
   * @public
   * <p> The name of the evidence folder. </p>
   */
  name?: string;

  /**
   * @public
   * <p> The date when the first evidence was added to the evidence folder. </p>
   */
  date?: Date;

  /**
   * @public
   * <p> The identifier for the assessment. </p>
   */
  assessmentId?: string;

  /**
   * @public
   * <p> The identifier for the control set. </p>
   */
  controlSetId?: string;

  /**
   * @public
   * <p> The unique identifier for the control. </p>
   */
  controlId?: string;

  /**
   * @public
   * <p> The identifier for the folder that the evidence is stored in. </p>
   */
  id?: string;

  /**
   * @public
   * <p> The Amazon Web Service that the evidence was collected from. </p>
   */
  dataSource?: string;

  /**
   * @public
   * <p> The name of the user who created the evidence folder. </p>
   */
  author?: string;

  /**
   * @public
   * <p> The total amount of evidence in the evidence folder. </p>
   */
  totalEvidence?: number;

  /**
   * @public
   * <p> The total count of evidence that's included in the assessment report. </p>
   */
  assessmentReportSelectionCount?: number;

  /**
   * @public
   * <p> The name of the control. </p>
   */
  controlName?: string;

  /**
   * @public
   * <p> The amount of evidence that's included in the evidence folder. </p>
   */
  evidenceResourcesIncludedCount?: number;

  /**
   * @public
   * <p> The number of evidence that falls under the configuration data category. This evidence
   *          is collected from configuration snapshots of other Amazon Web Services such as
   *             Amazon EC2, Amazon S3, or IAM. </p>
   */
  evidenceByTypeConfigurationDataCount?: number;

  /**
   * @public
   * <p> The number of evidence that falls under the manual category. This evidence is imported
   *          manually. </p>
   */
  evidenceByTypeManualCount?: number;

  /**
   * @public
   * <p> The number of evidence that falls under the compliance check category. This evidence is
   *          collected from Config or Security Hub. </p>
   */
  evidenceByTypeComplianceCheckCount?: number;

  /**
   * @public
   * <p> The total number of issues that were reported directly from Security Hub,
   *             Config, or both. </p>
   */
  evidenceByTypeComplianceCheckIssuesCount?: number;

  /**
   * @public
   * <p> The number of evidence that falls under the user activity category. This evidence is
   *          collected from CloudTrail logs. </p>
   */
  evidenceByTypeUserActivityCount?: number;

  /**
   * @public
   * <p> The total number of Amazon Web Services resources that were assessed to generate the
   *          evidence. </p>
   */
  evidenceAwsServiceSourceCount?: number;
}

/**
 * @public
 * @enum
 */
export const FrameworkType = {
  CUSTOM: "Custom",
  STANDARD: "Standard",
} as const;

/**
 * @public
 */
export type FrameworkType = (typeof FrameworkType)[keyof typeof FrameworkType];

/**
 * @public
 * <p> The metadata that's associated with a standard framework or a custom framework. </p>
 */
export interface AssessmentFrameworkMetadata {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the framework. </p>
   */
  arn?: string;

  /**
   * @public
   * <p> The unique identifier for the framework. </p>
   */
  id?: string;

  /**
   * @public
   * <p> The framework type, such as a standard framework or a custom framework. </p>
   */
  type?: FrameworkType;

  /**
   * @public
   * <p> The name of the framework. </p>
   */
  name?: string;

  /**
   * @public
   * <p> The description of the framework. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The logo that's associated with the framework. </p>
   */
  logo?: string;

  /**
   * @public
   * <p> The compliance type that the new custom framework supports, such as CIS or HIPAA.
   *       </p>
   */
  complianceType?: string;

  /**
   * @public
   * <p> The number of controls that are associated with the framework. </p>
   */
  controlsCount?: number;

  /**
   * @public
   * <p> The number of control sets that are associated with the framework. </p>
   */
  controlSetsCount?: number;

  /**
   * @public
   * <p> The time when the framework was created. </p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p> The time when the framework was most recently updated. </p>
   */
  lastUpdatedAt?: Date;
}

/**
 * @public
 * @enum
 */
export const ShareRequestStatus = {
  ACTIVE: "ACTIVE",
  DECLINED: "DECLINED",
  EXPIRED: "EXPIRED",
  EXPIRING: "EXPIRING",
  FAILED: "FAILED",
  REPLICATING: "REPLICATING",
  REVOKED: "REVOKED",
  SHARED: "SHARED",
} as const;

/**
 * @public
 */
export type ShareRequestStatus = (typeof ShareRequestStatus)[keyof typeof ShareRequestStatus];

/**
 * @public
 * <p> Represents a share request for a custom framework in Audit Manager. </p>
 */
export interface AssessmentFrameworkShareRequest {
  /**
   * @public
   * <p> The unique identifier for the share request. </p>
   */
  id?: string;

  /**
   * @public
   * <p>The unique identifier for the shared custom framework. </p>
   */
  frameworkId?: string;

  /**
   * @public
   * <p> The name of the custom framework that the share request is for. </p>
   */
  frameworkName?: string;

  /**
   * @public
   * <p>The description of the shared custom framework.</p>
   */
  frameworkDescription?: string;

  /**
   * @public
   * <p> The status of the share request. </p>
   */
  status?: ShareRequestStatus;

  /**
   * @public
   * <p> The Amazon Web Services account of the sender. </p>
   */
  sourceAccount?: string;

  /**
   * @public
   * <p> The Amazon Web Services account of the recipient. </p>
   */
  destinationAccount?: string;

  /**
   * @public
   * <p> The Amazon Web Services Region of the recipient. </p>
   */
  destinationRegion?: string;

  /**
   * @public
   * <p> The time when the share request expires. </p>
   */
  expirationTime?: Date;

  /**
   * @public
   * <p> The time when the share request was created. </p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p> Specifies when the share request was last updated. </p>
   */
  lastUpdated?: Date;

  /**
   * @public
   * <p> An optional comment from the sender about the share request. </p>
   */
  comment?: string;

  /**
   * @public
   * <p>The number of standard controls that are part of the shared custom framework. </p>
   */
  standardControlsCount?: number;

  /**
   * @public
   * <p>The number of custom controls that are part of the shared custom framework.</p>
   */
  customControlsCount?: number;

  /**
   * @public
   * <p>The compliance type that the shared custom framework supports, such as CIS or
   *          HIPAA.</p>
   */
  complianceType?: string;
}

/**
 * @public
 * <p> A metadata object that's associated with an assessment in Audit Manager.
 *       </p>
 */
export interface AssessmentMetadataItem {
  /**
   * @public
   * <p> The name of the assessment. </p>
   */
  name?: string;

  /**
   * @public
   * <p> The unique identifier for the assessment. </p>
   */
  id?: string;

  /**
   * @public
   * <p> The name of the compliance standard that's related to the assessment, such as PCI-DSS.
   *       </p>
   */
  complianceType?: string;

  /**
   * @public
   * <p> The current status of the assessment. </p>
   */
  status?: AssessmentStatus;

  /**
   * @public
   * <p> The roles that are associated with the assessment. </p>
   */
  roles?: Role[];

  /**
   * @public
   * <p> The delegations that are associated with the assessment. </p>
   */
  delegations?: Delegation[];

  /**
   * @public
   * <p> Specifies when the assessment was created. </p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p> The time of the most recent update. </p>
   */
  lastUpdated?: Date;
}

/**
 * @public
 * @enum
 */
export const AssessmentReportStatus = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type AssessmentReportStatus = (typeof AssessmentReportStatus)[keyof typeof AssessmentReportStatus];

/**
 * @public
 * <p> A finalized document that's generated from an Audit Manager assessment. These
 *          reports summarize the relevant evidence that was collected for your audit, and link to the
 *          relevant evidence folders. These evidence folders are named and organized according to the
 *          controls that are specified in your assessment. </p>
 */
export interface AssessmentReport {
  /**
   * @public
   * <p> The unique identifier for the assessment report. </p>
   */
  id?: string;

  /**
   * @public
   * <p> The name that's given to the assessment report. </p>
   */
  name?: string;

  /**
   * @public
   * <p> The description of the specified assessment report. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The identifier for the specified Amazon Web Services account. </p>
   */
  awsAccountId?: string;

  /**
   * @public
   * <p> The identifier for the specified assessment. </p>
   */
  assessmentId?: string;

  /**
   * @public
   * <p> The name of the associated assessment. </p>
   */
  assessmentName?: string;

  /**
   * @public
   * <p> The name of the user who created the assessment report. </p>
   */
  author?: string;

  /**
   * @public
   * <p> The current status of the specified assessment report. </p>
   */
  status?: AssessmentReportStatus;

  /**
   * @public
   * <p> Specifies when the assessment report was created. </p>
   */
  creationTime?: Date;
}

/**
 * @public
 * <p> An error entity for assessment report evidence errors. This is used to provide more
 *          meaningful errors than a simple string message. </p>
 */
export interface AssessmentReportEvidenceError {
  /**
   * @public
   * <p> The identifier for the evidence. </p>
   */
  evidenceId?: string;

  /**
   * @public
   * <p> The error code that was returned. </p>
   */
  errorCode?: string;

  /**
   * @public
   * <p> The error message that was returned. </p>
   */
  errorMessage?: string;
}

/**
 * @public
 * <p> The metadata objects that are associated with the specified assessment report. </p>
 */
export interface AssessmentReportMetadata {
  /**
   * @public
   * <p> The unique identifier for the assessment report. </p>
   */
  id?: string;

  /**
   * @public
   * <p> The name of the assessment report. </p>
   */
  name?: string;

  /**
   * @public
   * <p> The description of the assessment report. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The unique identifier for the associated assessment. </p>
   */
  assessmentId?: string;

  /**
   * @public
   * <p>The name of the associated assessment. </p>
   */
  assessmentName?: string;

  /**
   * @public
   * <p> The name of the user who created the assessment report. </p>
   */
  author?: string;

  /**
   * @public
   * <p> The current status of the assessment report. </p>
   */
  status?: AssessmentReportStatus;

  /**
   * @public
   * <p> Specifies when the assessment report was created. </p>
   */
  creationTime?: Date;
}

/**
 * @public
 */
export interface AssociateAssessmentReportEvidenceFolderRequest {
  /**
   * @public
   * <p> The identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * @public
   * <p> The identifier for the folder that the evidence is stored in. </p>
   */
  evidenceFolderId: string | undefined;
}

/**
 * @public
 */
export interface AssociateAssessmentReportEvidenceFolderResponse {}

/**
 * @public
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
 * @public
 * <p> The resource that's specified in the request can't be found. </p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p> The unique identifier for the resource. </p>
   */
  resourceId: string | undefined;

  /**
   * @public
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
 * @public
 * <p> Indicates that the request has invalid or missing parameters for the field. </p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p> The name of the validation error. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> The body of the error message. </p>
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * <p> The request has invalid or missing parameters. </p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p> The reason the request failed validation. </p>
   */
  reason?: ValidationExceptionReason;

  /**
   * @public
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

/**
 * @public
 */
export interface BatchAssociateAssessmentReportEvidenceRequest {
  /**
   * @public
   * <p> The identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * @public
   * <p> The identifier for the folder that the evidence is stored in. </p>
   */
  evidenceFolderId: string | undefined;

  /**
   * @public
   * <p> The list of evidence identifiers. </p>
   */
  evidenceIds: string[] | undefined;
}

/**
 * @public
 */
export interface BatchAssociateAssessmentReportEvidenceResponse {
  /**
   * @public
   * <p> The list of evidence identifiers. </p>
   */
  evidenceIds?: string[];

  /**
   * @public
   * <p> A list of errors that the <code>BatchAssociateAssessmentReportEvidence</code> API
   *          returned. </p>
   */
  errors?: AssessmentReportEvidenceError[];
}

/**
 * @public
 * <p> A collection of attributes that's used to create a delegation for an assessment in
 *             Audit Manager. </p>
 */
export interface CreateDelegationRequest {
  /**
   * @public
   * <p> A comment that's related to the delegation request. </p>
   */
  comment?: string;

  /**
   * @public
   * <p> The unique identifier for the control set. </p>
   */
  controlSetId?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the IAM role. </p>
   */
  roleArn?: string;

  /**
   * @public
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
  roleType?: RoleType;
}

/**
 * @public
 */
export interface BatchCreateDelegationByAssessmentRequest {
  /**
   * @public
   * <p> The API request to batch create delegations in Audit Manager. </p>
   */
  createDelegationRequests: CreateDelegationRequest[] | undefined;

  /**
   * @public
   * <p> The identifier for the assessment. </p>
   */
  assessmentId: string | undefined;
}

/**
 * @public
 * <p> An error entity for the <code>BatchCreateDelegationByAssessment</code> API. This is
 *          used to provide more meaningful errors than a simple string message. </p>
 */
export interface BatchCreateDelegationByAssessmentError {
  /**
   * @public
   * <p> The API request to batch create delegations in Audit Manager. </p>
   */
  createDelegationRequest?: CreateDelegationRequest;

  /**
   * @public
   * <p> The error code that the <code>BatchCreateDelegationByAssessment</code> API returned.
   *       </p>
   */
  errorCode?: string;

  /**
   * @public
   * <p> The error message that the <code>BatchCreateDelegationByAssessment</code> API returned.
   *       </p>
   */
  errorMessage?: string;
}

/**
 * @public
 */
export interface BatchCreateDelegationByAssessmentResponse {
  /**
   * @public
   * <p> The delegations that are associated with the assessment. </p>
   */
  delegations?: Delegation[];

  /**
   * @public
   * <p> A list of errors that the <code>BatchCreateDelegationByAssessment</code> API returned.
   *       </p>
   */
  errors?: BatchCreateDelegationByAssessmentError[];
}

/**
 * @public
 */
export interface BatchDeleteDelegationByAssessmentRequest {
  /**
   * @public
   * <p> The identifiers for the delegations. </p>
   */
  delegationIds: string[] | undefined;

  /**
   * @public
   * <p> The identifier for the assessment. </p>
   */
  assessmentId: string | undefined;
}

/**
 * @public
 * <p> An error entity for the <code>BatchDeleteDelegationByAssessment</code> API. This is
 *          used to provide more meaningful errors than a simple string message. </p>
 */
export interface BatchDeleteDelegationByAssessmentError {
  /**
   * @public
   * <p> The identifier for the delegation. </p>
   */
  delegationId?: string;

  /**
   * @public
   * <p> The error code that the <code>BatchDeleteDelegationByAssessment</code> API returned.
   *       </p>
   */
  errorCode?: string;

  /**
   * @public
   * <p> The error message that the <code>BatchDeleteDelegationByAssessment</code> API returned.
   *       </p>
   */
  errorMessage?: string;
}

/**
 * @public
 */
export interface BatchDeleteDelegationByAssessmentResponse {
  /**
   * @public
   * <p> A list of errors that the <code>BatchDeleteDelegationByAssessment</code> API returned.
   *       </p>
   */
  errors?: BatchDeleteDelegationByAssessmentError[];
}

/**
 * @public
 */
export interface BatchDisassociateAssessmentReportEvidenceRequest {
  /**
   * @public
   * <p> The identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * @public
   * <p> The identifier for the folder that the evidence is stored in. </p>
   */
  evidenceFolderId: string | undefined;

  /**
   * @public
   * <p> The list of evidence identifiers. </p>
   */
  evidenceIds: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateAssessmentReportEvidenceResponse {
  /**
   * @public
   * <p> The identifier for the evidence. </p>
   */
  evidenceIds?: string[];

  /**
   * @public
   * <p> A list of errors that the <code>BatchDisassociateAssessmentReportEvidence</code> API
   *          returned. </p>
   */
  errors?: AssessmentReportEvidenceError[];
}

/**
 * @public
 * <p> Evidence that's manually added to a control in Audit Manager.
 *             <code>manualEvidence</code> can be one of the following: <code>evidenceFileName</code>,
 *             <code>s3ResourcePath</code>, or <code>textResponse</code>.</p>
 */
export interface ManualEvidence {
  /**
   * @public
   * <p>The S3 URL of the object that's imported as manual evidence. </p>
   */
  s3ResourcePath?: string;

  /**
   * @public
   * <p>The plain text response that's entered and saved as manual evidence.</p>
   */
  textResponse?: string;

  /**
   * @public
   * <p>The name of the file that's uploaded as manual evidence. This name is populated using
   *          the <code>evidenceFileName</code> value from the <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetEvidenceFileUploadUrl.html">
   *                <code>GetEvidenceFileUploadUrl</code>
   *             </a> API response.</p>
   */
  evidenceFileName?: string;
}

/**
 * @public
 */
export interface BatchImportEvidenceToAssessmentControlRequest {
  /**
   * @public
   * <p> The identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * @public
   * <p> The identifier for the control set. </p>
   */
  controlSetId: string | undefined;

  /**
   * @public
   * <p> The identifier for the control. </p>
   */
  controlId: string | undefined;

  /**
   * @public
   * <p> The list of manual evidence objects. </p>
   */
  manualEvidence: ManualEvidence[] | undefined;
}

/**
 * @public
 * <p> An error entity for the <code>BatchImportEvidenceToAssessmentControl</code> API. This
 *          is used to provide more meaningful errors than a simple string message. </p>
 */
export interface BatchImportEvidenceToAssessmentControlError {
  /**
   * @public
   * <p> Manual evidence that can't be collected automatically by Audit Manager. </p>
   */
  manualEvidence?: ManualEvidence;

  /**
   * @public
   * <p> The error code that the <code>BatchImportEvidenceToAssessmentControl</code> API
   *          returned. </p>
   */
  errorCode?: string;

  /**
   * @public
   * <p> The error message that the <code>BatchImportEvidenceToAssessmentControl</code> API
   *          returned. </p>
   */
  errorMessage?: string;
}

/**
 * @public
 */
export interface BatchImportEvidenceToAssessmentControlResponse {
  /**
   * @public
   * <p> A list of errors that the <code>BatchImportEvidenceToAssessmentControl</code> API
   *          returned. </p>
   */
  errors?: BatchImportEvidenceToAssessmentControlError[];
}

/**
 * @public
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

/**
 * @public
 */
export interface CreateAssessmentRequest {
  /**
   * @public
   * <p> The name of the assessment to be created. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> The optional description of the assessment to be created. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The assessment report storage destination for the assessment that's being created.
   *       </p>
   */
  assessmentReportsDestination: AssessmentReportsDestination | undefined;

  /**
   * @public
   * <p> The wrapper that contains the Amazon Web Services accounts and services that are in
   *          scope for the assessment. </p>
   */
  scope: Scope | undefined;

  /**
   * @public
   * <p> The list of roles for the assessment. </p>
   */
  roles: Role[] | undefined;

  /**
   * @public
   * <p> The identifier for the framework that the assessment will be created from. </p>
   */
  frameworkId: string | undefined;

  /**
   * @public
   * <p> The tags that are associated with the assessment. </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateAssessmentResponse {
  /**
   * @public
   * <p> An entity that defines the scope of audit evidence collected by Audit Manager.
   *          An Audit Manager assessment is an implementation of an Audit Manager framework. </p>
   */
  assessment?: Assessment;
}

/**
 * @public
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
 * @public
 * <p> The control entity attributes that uniquely identify an existing control to be added to
 *          a framework in Audit Manager. </p>
 */
export interface CreateAssessmentFrameworkControl {
  /**
   * @public
   * <p> The unique identifier of the control. </p>
   */
  id: string | undefined;
}

/**
 * @public
 * <p> A <code>controlSet</code> entity that represents a collection of controls in Audit Manager. This doesn't contain the control set ID. </p>
 */
export interface CreateAssessmentFrameworkControlSet {
  /**
   * @public
   * <p> The name of the control set. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> The list of controls within the control set. This doesn't contain the control set ID.
   *       </p>
   */
  controls?: CreateAssessmentFrameworkControl[];
}

/**
 * @public
 */
export interface CreateAssessmentFrameworkRequest {
  /**
   * @public
   * <p> The name of the new custom framework. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> An optional description for the new custom framework. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The compliance type that the new custom framework supports, such as CIS or HIPAA.
   *       </p>
   */
  complianceType?: string;

  /**
   * @public
   * <p> The control sets that are associated with the framework. </p>
   */
  controlSets: CreateAssessmentFrameworkControlSet[] | undefined;

  /**
   * @public
   * <p> The tags that are associated with the framework. </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const SourceFrequency = {
  DAILY: "DAILY",
  MONTHLY: "MONTHLY",
  WEEKLY: "WEEKLY",
} as const;

/**
 * @public
 */
export type SourceFrequency = (typeof SourceFrequency)[keyof typeof SourceFrequency];

/**
 * @public
 * @enum
 */
export const KeywordInputType = {
  INPUT_TEXT: "INPUT_TEXT",
  SELECT_FROM_LIST: "SELECT_FROM_LIST",
  UPLOAD_FILE: "UPLOAD_FILE",
} as const;

/**
 * @public
 */
export type KeywordInputType = (typeof KeywordInputType)[keyof typeof KeywordInputType];

/**
 * @public
 * <p>A keyword that relates to the control data source.</p>
 *          <p>For manual evidence, this keyword indicates if the manual evidence is a file or
 *          text.</p>
 *          <p>For automated evidence, this keyword identifies a specific CloudTrail event,
 *             Config rule, Security Hub control, or Amazon Web Services API name. </p>
 *          <p> To learn more about the supported keywords that you can use when mapping a control data
 *          source, see the following pages in the <i>Audit Manager User
 *             Guide</i>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-config.html">Config rules supported by Audit Manager</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-ash.html">Security Hub controls supported by Audit Manager</a>
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
   * @public
   * <p> The input method for the keyword. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SELECT_FROM_LIST</code> is used when mapping a data source for automated
   *                evidence.</p>
   *                <ul>
   *                   <li>
   *                      <p>When <code>keywordInputType</code> is <code>SELECT_FROM_LIST</code>, a
   *                      keyword must be selected to collect automated evidence. For example, this
   *                      keyword can be a CloudTrail event name, a rule name for Config, a Security Hub control, or the name of an Amazon Web Services API call.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPLOAD_FILE</code> and <code>INPUT_TEXT</code> are only used when mapping a
   *                data source for manual evidence.</p>
   *                <ul>
   *                   <li>
   *                      <p>When <code>keywordInputType</code> is <code>UPLOAD_FILE</code>, a file must
   *                      be uploaded as manual evidence.</p>
   *                   </li>
   *                   <li>
   *                      <p>When <code>keywordInputType</code> is <code>INPUT_TEXT</code>, text must be
   *                      entered as manual evidence.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  keywordInputType?: KeywordInputType;

  /**
   * @public
   * <p> The value of the keyword that's used when mapping a control data source. For example,
   *          this can be a CloudTrail event name, a rule name for Config, a
   *             Security Hub control, or the name of an Amazon Web Services API call. </p>
   *          <p>If you’re mapping a data source to a rule in Config, the
   *             <code>keywordValue</code> that you specify depends on the type of rule:</p>
   *          <ul>
   *             <li>
   *                <p>For <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html">managed rules</a>, you can use the rule identifier as the
   *                   <code>keywordValue</code>. You can find the rule identifier from the <a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">list of Config managed rules</a>. For some
   *                rules, the rule identifier is different from the rule name. For example, the rule
   *                name <code>restricted-ssh</code> has the following rule identifier:
   *                   <code>INCOMING_SSH_DISABLED</code>. Make sure to use the rule identifier, not the
   *                rule name. </p>
   *                <p>Keyword example for managed rules:</p>
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
   *                the custom rule from a managed rule. </p>
   *                <p>Keyword example for custom rules:</p>
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
   *                name. In addition, you remove the suffix ID that appears at the end of the rule name. </p>
   *                <p>Keyword examples for service-linked rules:</p>
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
   *          <important>
   *             <p>The <code>keywordValue</code> is case sensitive. If you enter a value incorrectly, Audit Manager might not recognize the data source mapping. As a result, you might not
   *          successfully collect evidence from that data source as intended. </p>
   *             <p>Keep in mind the following requirements, depending on the data source type that
   *             you're using. </p>
   *             <ol>
   *                <li>
   *                   <p>For Config: </p>
   *                   <ul>
   *                      <li>
   *                         <p>For managed rules, make sure that the <code>keywordValue</code> is the rule identifier in
   *                      <code>ALL_CAPS_WITH_UNDERSCORES</code>. For example,
   *                      <code>CLOUDWATCH_LOG_GROUP_ENCRYPTED</code>. For accuracy, we recommend
   *                      that you reference the list of <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-config.html">supported Config managed rules</a>.</p>
   *                      </li>
   *                      <li>
   *                         <p>For custom rules, make sure that the <code>keywordValue</code> has the <code>Custom_</code>
   *                      prefix followed by the custom rule name. The format of the custom rule name
   *                      itself may vary. For accuracy, we recommend that you visit the <a href="https://console.aws.amazon.com/config/">Config console</a> to
   *                      verify your custom rule name.</p>
   *                      </li>
   *                   </ul>
   *                </li>
   *                <li>
   *                   <p>For Security Hub: The format varies for Security Hub control names.
   *                   For accuracy, we recommend that you reference the list of <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-ash.html">supported
   *                      Security Hub controls</a>.</p>
   *                </li>
   *                <li>
   *                   <p>For Amazon Web Services API calls: Make sure that the <code>keywordValue</code>
   *                   is written as <code>serviceprefix_ActionName</code>. For example,
   *                   <code>iam_ListGroups</code>. For accuracy, we recommend that you reference the
   *                   list of <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-api.html">supported
   *                      API calls</a>.</p>
   *                </li>
   *                <li>
   *                   <p>For CloudTrail: Make sure that the <code>keywordValue</code> is written
   *                   as <code>serviceprefix_ActionName</code>. For example,
   *                   <code>cloudtrail_StartLogging</code>. For accuracy, we recommend that you
   *                   review the Amazon Web Service prefix and action names in the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html">Service Authorization Reference</a>.</p>
   *                </li>
   *             </ol>
   *          </important>
   */
  keywordValue?: string;
}

/**
 * @public
 * @enum
 */
export const SourceSetUpOption = {
  PROCEDURAL_CONTROLS_MAPPING: "Procedural_Controls_Mapping",
  SYSTEM_CONTROLS_MAPPING: "System_Controls_Mapping",
} as const;

/**
 * @public
 */
export type SourceSetUpOption = (typeof SourceSetUpOption)[keyof typeof SourceSetUpOption];

/**
 * @public
 * @enum
 */
export const SourceType = {
  AWS_API_CALL: "AWS_API_Call",
  AWS_CLOUDTRAIL: "AWS_Cloudtrail",
  AWS_CONFIG: "AWS_Config",
  AWS_SECURITY_HUB: "AWS_Security_Hub",
  MANUAL: "MANUAL",
} as const;

/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * @public
 * <p> The data source that determines where Audit Manager collects evidence from for
 *          the control. </p>
 */
export interface ControlMappingSource {
  /**
   * @public
   * <p> The unique identifier for the source. </p>
   */
  sourceId?: string;

  /**
   * @public
   * <p> The name of the source. </p>
   */
  sourceName?: string;

  /**
   * @public
   * <p> The description of the source. </p>
   */
  sourceDescription?: string;

  /**
   * @public
   * <p> The setup option for the data source. This option reflects if the evidence collection
   *          is automated or manual. </p>
   */
  sourceSetUpOption?: SourceSetUpOption;

  /**
   * @public
   * <p> Specifies one of the five data source types for evidence collection. </p>
   */
  sourceType?: SourceType;

  /**
   * @public
   * <p>A keyword that relates to the control data source.</p>
   *          <p>For manual evidence, this keyword indicates if the manual evidence is a file or
   *          text.</p>
   *          <p>For automated evidence, this keyword identifies a specific CloudTrail event,
   *             Config rule, Security Hub control, or Amazon Web Services API name. </p>
   *          <p> To learn more about the supported keywords that you can use when mapping a control data
   *          source, see the following pages in the <i>Audit Manager User
   *             Guide</i>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-config.html">Config rules supported by Audit Manager</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-ash.html">Security Hub controls supported by Audit Manager</a>
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
   * @public
   * <p>Specifies how often evidence is collected from the control mapping source. </p>
   */
  sourceFrequency?: SourceFrequency;

  /**
   * @public
   * <p> The instructions for troubleshooting the control. </p>
   */
  troubleshootingText?: string;
}

/**
 * @public
 * @enum
 */
export const ControlType = {
  CUSTOM: "Custom",
  STANDARD: "Standard",
} as const;

/**
 * @public
 */
export type ControlType = (typeof ControlType)[keyof typeof ControlType];

/**
 * @public
 * <p> A control in Audit Manager. </p>
 */
export interface Control {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the control. </p>
   */
  arn?: string;

  /**
   * @public
   * <p> The unique identifier for the control. </p>
   */
  id?: string;

  /**
   * @public
   * <p> Specifies whether the control is a standard control or a custom control.</p>
   */
  type?: ControlType;

  /**
   * @public
   * <p> The name of the control. </p>
   */
  name?: string;

  /**
   * @public
   * <p> The description of the control. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The steps that you should follow to determine if the control has been satisfied.
   *       </p>
   */
  testingInformation?: string;

  /**
   * @public
   * <p> The title of the action plan for remediating the control. </p>
   */
  actionPlanTitle?: string;

  /**
   * @public
   * <p> The recommended actions to carry out if the control isn't fulfilled. </p>
   */
  actionPlanInstructions?: string;

  /**
   * @public
   * <p> The data source types that determine where Audit Manager collects evidence from for
   *          the control. </p>
   */
  controlSources?: string;

  /**
   * @public
   * <p> The data mapping sources for the control. </p>
   */
  controlMappingSources?: ControlMappingSource[];

  /**
   * @public
   * <p> The time when the control was created. </p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p> The time when the control was most recently updated. </p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p> The user or role that created the control. </p>
   */
  createdBy?: string;

  /**
   * @public
   * <p> The user or role that most recently updated the control. </p>
   */
  lastUpdatedBy?: string;

  /**
   * @public
   * <p> The tags associated with the control. </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p> A set of controls in Audit Manager. </p>
 */
export interface ControlSet {
  /**
   * @public
   * <p> The identifier of the control set in the assessment. This is the control set name in a
   *          plain string format. </p>
   */
  id?: string;

  /**
   * @public
   * <p> The name of the control set. </p>
   */
  name?: string;

  /**
   * @public
   * <p> The list of controls within the control set. </p>
   */
  controls?: Control[];
}

/**
 * @public
 * <p> The file that's used to structure and automate Audit Manager assessments for a
 *          given compliance standard. </p>
 */
export interface Framework {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the framework. </p>
   */
  arn?: string;

  /**
   * @public
   * <p> The unique identifier for the framework. </p>
   */
  id?: string;

  /**
   * @public
   * <p> The name of the framework. </p>
   */
  name?: string;

  /**
   * @public
   * <p> Specifies whether the framework is a standard framework or a custom framework.</p>
   */
  type?: FrameworkType;

  /**
   * @public
   * <p> The compliance type that the framework supports, such as CIS or HIPAA. </p>
   */
  complianceType?: string;

  /**
   * @public
   * <p> The description of the framework. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The logo that's associated with the framework. </p>
   */
  logo?: string;

  /**
   * @public
   * <p> The control data sources where Audit Manager collects evidence from.</p>
   */
  controlSources?: string;

  /**
   * @public
   * <p> The control sets that are associated with the framework. </p>
   */
  controlSets?: ControlSet[];

  /**
   * @public
   * <p> The time when the framework was created. </p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p> The time when the framework was most recently updated. </p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p> The user or role that created the framework. </p>
   */
  createdBy?: string;

  /**
   * @public
   * <p> The user or role that most recently updated the framework. </p>
   */
  lastUpdatedBy?: string;

  /**
   * @public
   * <p> The tags that are associated with the framework. </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateAssessmentFrameworkResponse {
  /**
   * @public
   * <p> The name of the new framework that the <code>CreateAssessmentFramework</code> API
   *          returned. </p>
   */
  framework?: Framework;
}

/**
 * @public
 */
export interface CreateAssessmentReportRequest {
  /**
   * @public
   * <p> The name of the new assessment report. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> The description of the assessment report. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * @public
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

/**
 * @public
 */
export interface CreateAssessmentReportResponse {
  /**
   * @public
   * <p> The new assessment report that the <code>CreateAssessmentReport</code> API returned.
   *       </p>
   */
  assessmentReport?: AssessmentReport;
}

/**
 * @public
 * <p> The control mapping fields that represent the source for evidence collection, along
 *          with related parameters and metadata. This doesn't contain <code>mappingID</code>. </p>
 */
export interface CreateControlMappingSource {
  /**
   * @public
   * <p> The name of the control mapping data source. </p>
   */
  sourceName?: string;

  /**
   * @public
   * <p> The description of the data source that determines where Audit Manager collects
   *          evidence from for the control. </p>
   */
  sourceDescription?: string;

  /**
   * @public
   * <p> The setup option for the data source, which reflects if the evidence collection is
   *          automated or manual. </p>
   */
  sourceSetUpOption?: SourceSetUpOption;

  /**
   * @public
   * <p> Specifies one of the five types of data sources for evidence collection. </p>
   */
  sourceType?: SourceType;

  /**
   * @public
   * <p>A keyword that relates to the control data source.</p>
   *          <p>For manual evidence, this keyword indicates if the manual evidence is a file or
   *          text.</p>
   *          <p>For automated evidence, this keyword identifies a specific CloudTrail event,
   *             Config rule, Security Hub control, or Amazon Web Services API name. </p>
   *          <p> To learn more about the supported keywords that you can use when mapping a control data
   *          source, see the following pages in the <i>Audit Manager User
   *             Guide</i>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-config.html">Config rules supported by Audit Manager</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-ash.html">Security Hub controls supported by Audit Manager</a>
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
   * @public
   * <p>Specifies how often evidence is collected from the control mapping source. </p>
   */
  sourceFrequency?: SourceFrequency;

  /**
   * @public
   * <p> The instructions for troubleshooting the control. </p>
   */
  troubleshootingText?: string;
}

/**
 * @public
 */
export interface CreateControlRequest {
  /**
   * @public
   * <p> The name of the control. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> The description of the control. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The steps to follow to determine if the control is satisfied. </p>
   */
  testingInformation?: string;

  /**
   * @public
   * <p> The title of the action plan for remediating the control. </p>
   */
  actionPlanTitle?: string;

  /**
   * @public
   * <p> The recommended actions to carry out if the control isn't fulfilled. </p>
   */
  actionPlanInstructions?: string;

  /**
   * @public
   * <p> The data mapping sources for the control. </p>
   */
  controlMappingSources: CreateControlMappingSource[] | undefined;

  /**
   * @public
   * <p> The tags that are associated with the control. </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateControlResponse {
  /**
   * @public
   * <p> The new control that the <code>CreateControl</code> API returned. </p>
   */
  control?: Control;
}

/**
 * @public
 */
export interface DeleteAssessmentRequest {
  /**
   * @public
   * <p> The identifier for the assessment. </p>
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
   * @public
   * <p> The identifier for the custom framework. </p>
   */
  frameworkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssessmentFrameworkResponse {}

/**
 * @public
 * @enum
 */
export const ShareRequestType = {
  RECEIVED: "RECEIVED",
  SENT: "SENT",
} as const;

/**
 * @public
 */
export type ShareRequestType = (typeof ShareRequestType)[keyof typeof ShareRequestType];

/**
 * @public
 */
export interface DeleteAssessmentFrameworkShareRequest {
  /**
   * @public
   * <p>The unique identifier for the share request to be deleted.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>Specifies whether the share request is a sent request or a received request.</p>
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
   * @public
   * <p> The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * @public
   * <p> The unique identifier for the assessment report. </p>
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
   * @public
   * <p> The unique identifier for the control. </p>
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
   * @public
   * <p> The registration status of the account. </p>
   */
  status?: AccountStatus;
}

/**
 * @public
 */
export interface DeregisterOrganizationAdminAccountRequest {
  /**
   * @public
   * <p> The identifier for the administrator account. </p>
   */
  adminAccountId?: string;
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
   * @public
   * <p> The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * @public
   * <p> The unique identifier for the folder that the evidence is stored in. </p>
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
   * @public
   * <p> The status of the Amazon Web Services account. </p>
   */
  status?: AccountStatus;
}

/**
 * @public
 */
export interface GetAssessmentRequest {
  /**
   * @public
   * <p>The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;
}

/**
 * @public
 */
export interface GetAssessmentResponse {
  /**
   * @public
   * <p> An entity that defines the scope of audit evidence collected by Audit Manager.
   *          An Audit Manager assessment is an implementation of an Audit Manager framework. </p>
   */
  assessment?: Assessment;

  /**
   * @public
   * <p> The wrapper that contains the Audit Manager role information of the current user.
   *          This includes the role type and IAM Amazon Resource Name (ARN). </p>
   */
  userRole?: Role;
}

/**
 * @public
 */
export interface GetAssessmentFrameworkRequest {
  /**
   * @public
   * <p> The identifier for the framework. </p>
   */
  frameworkId: string | undefined;
}

/**
 * @public
 */
export interface GetAssessmentFrameworkResponse {
  /**
   * @public
   * <p> The framework that the <code>GetAssessmentFramework</code> API returned. </p>
   */
  framework?: Framework;
}

/**
 * @public
 */
export interface GetAssessmentReportUrlRequest {
  /**
   * @public
   * <p> The unique identifier for the assessment report. </p>
   */
  assessmentReportId: string | undefined;

  /**
   * @public
   * <p> The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;
}

/**
 * @public
 * <p> Short for uniform resource locator. A URL is used as a unique identifier to locate a
 *          resource on the internet. </p>
 */
export interface URL {
  /**
   * @public
   * <p> The name or word that's used as a hyperlink to the URL. </p>
   */
  hyperlinkName?: string;

  /**
   * @public
   * <p> The unique identifier for the internet resource. </p>
   */
  link?: string;
}

/**
 * @public
 */
export interface GetAssessmentReportUrlResponse {
  /**
   * @public
   * <p> Short for uniform resource locator. A URL is used as a unique identifier to locate a
   *          resource on the internet. </p>
   */
  preSignedUrl?: URL;
}

/**
 * @public
 */
export interface GetChangeLogsRequest {
  /**
   * @public
   * <p>The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * @public
   * <p> The unique identifier for the control set. </p>
   */
  controlSetId?: string;

  /**
   * @public
   * <p> The unique identifier for the control. </p>
   */
  controlId?: string;

  /**
   * @public
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

/**
 * @public
 * @enum
 */
export const ObjectTypeEnum = {
  ASSESSMENT: "ASSESSMENT",
  ASSESSMENT_REPORT: "ASSESSMENT_REPORT",
  CONTROL: "CONTROL",
  CONTROL_SET: "CONTROL_SET",
  DELEGATION: "DELEGATION",
} as const;

/**
 * @public
 */
export type ObjectTypeEnum = (typeof ObjectTypeEnum)[keyof typeof ObjectTypeEnum];

/**
 * @public
 * <p> The record of a change within Audit Manager. For example, this could be the
 *          status change of an assessment or the delegation of a control set. </p>
 */
export interface ChangeLog {
  /**
   * @public
   * <p> The object that was changed, such as an assessment, control, or control set. </p>
   */
  objectType?: ObjectTypeEnum;

  /**
   * @public
   * <p> The name of the object that changed. This could be the name of an assessment, control,
   *          or control set.</p>
   */
  objectName?: string;

  /**
   * @public
   * <p> The action that was performed. </p>
   */
  action?: ActionEnum;

  /**
   * @public
   * <p> The time when the action was performed and the changelog record was created. </p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p> The user or role that performed the action. </p>
   */
  createdBy?: string;
}

/**
 * @public
 */
export interface GetChangeLogsResponse {
  /**
   * @public
   * <p>The list of user activity for the control. </p>
   */
  changeLogs?: ChangeLog[];

  /**
   * @public
   * <p>The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetControlRequest {
  /**
   * @public
   * <p> The identifier for the control. </p>
   */
  controlId: string | undefined;
}

/**
 * @public
 */
export interface GetControlResponse {
  /**
   * @public
   * <p> The details of the control that the <code>GetControl</code> API returned. </p>
   */
  control?: Control;
}

/**
 * @public
 */
export interface GetDelegationsRequest {
  /**
   * @public
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p> The metadata that's associated with the delegation. </p>
 */
export interface DelegationMetadata {
  /**
   * @public
   * <p> The unique identifier for the delegation. </p>
   */
  id?: string;

  /**
   * @public
   * <p> The name of the associated assessment. </p>
   */
  assessmentName?: string;

  /**
   * @public
   * <p> The unique identifier for the assessment. </p>
   */
  assessmentId?: string;

  /**
   * @public
   * <p> The current status of the delegation. </p>
   */
  status?: DelegationStatus;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the IAM role. </p>
   */
  roleArn?: string;

  /**
   * @public
   * <p> Specifies when the delegation was created. </p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p> Specifies the name of the control set that was delegated for review. </p>
   */
  controlSetName?: string;
}

/**
 * @public
 */
export interface GetDelegationsResponse {
  /**
   * @public
   * <p> The list of delegations that the <code>GetDelegations</code> API returned. </p>
   */
  delegations?: DelegationMetadata[];

  /**
   * @public
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetEvidenceRequest {
  /**
   * @public
   * <p> The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * @public
   * <p> The unique identifier for the control set. </p>
   */
  controlSetId: string | undefined;

  /**
   * @public
   * <p> The unique identifier for the folder that the evidence is stored in. </p>
   */
  evidenceFolderId: string | undefined;

  /**
   * @public
   * <p> The unique identifier for the evidence. </p>
   */
  evidenceId: string | undefined;
}

/**
 * @public
 * <p> A system asset that's evaluated in an Audit Manager assessment. </p>
 */
export interface Resource {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) for the resource. </p>
   */
  arn?: string;

  /**
   * @public
   * <p> The value of the resource. </p>
   */
  value?: string;

  /**
   * @public
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
 * @public
 * <p> A record that contains the information needed to demonstrate compliance with the
 *          requirements specified by a control. Examples of evidence include change activity invoked
 *          by a user, or a system configuration snapshot. </p>
 */
export interface Evidence {
  /**
   * @public
   * <p> The data source where the evidence was collected from. </p>
   */
  dataSource?: string;

  /**
   * @public
   * <p> The identifier for the Amazon Web Services account. </p>
   */
  evidenceAwsAccountId?: string;

  /**
   * @public
   * <p> The timestamp that represents when the evidence was collected. </p>
   */
  time?: Date;

  /**
   * @public
   * <p> The Amazon Web Service that the evidence is collected from. </p>
   */
  eventSource?: string;

  /**
   * @public
   * <p> The name of the evidence event. </p>
   */
  eventName?: string;

  /**
   * @public
   * <p> The type of automated evidence. </p>
   */
  evidenceByType?: string;

  /**
   * @public
   * <p> The list of resources that are assessed to generate the evidence. </p>
   */
  resourcesIncluded?: Resource[];

  /**
   * @public
   * <p> The names and values that are used by the evidence event. This includes an attribute
   *          name (such as <code>allowUsersToChangePassword</code>) and value (such as <code>true</code>
   *          or <code>false</code>). </p>
   */
  attributes?: Record<string, string>;

  /**
   * @public
   * <p> The unique identifier for the user or role that's associated with
   *          the evidence. </p>
   */
  iamId?: string;

  /**
   * @public
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
   * @public
   * <p> The Amazon Web Services account that the evidence is collected from, and its
   *          organization path. </p>
   */
  awsOrganization?: string;

  /**
   * @public
   * <p> The identifier for the Amazon Web Services account. </p>
   */
  awsAccountId?: string;

  /**
   * @public
   * <p> The identifier for the folder that the evidence is stored in. </p>
   */
  evidenceFolderId?: string;

  /**
   * @public
   * <p> The identifier for the evidence. </p>
   */
  id?: string;

  /**
   * @public
   * <p> Specifies whether the evidence is included in the assessment report. </p>
   */
  assessmentReportSelection?: string;
}

/**
 * @public
 */
export interface GetEvidenceResponse {
  /**
   * @public
   * <p> The evidence that the <code>GetEvidence</code> API returned. </p>
   */
  evidence?: Evidence;
}

/**
 * @public
 */
export interface GetEvidenceByEvidenceFolderRequest {
  /**
   * @public
   * <p> The identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * @public
   * <p> The identifier for the control set. </p>
   */
  controlSetId: string | undefined;

  /**
   * @public
   * <p> The unique identifier for the folder that the evidence is stored in. </p>
   */
  evidenceFolderId: string | undefined;

  /**
   * @public
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface GetEvidenceByEvidenceFolderResponse {
  /**
   * @public
   * <p> The list of evidence that the <code>GetEvidenceByEvidenceFolder</code> API returned.
   *       </p>
   */
  evidence?: Evidence[];

  /**
   * @public
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetEvidenceFileUploadUrlRequest {
  /**
   * @public
   * <p>The file that you want to upload. For a list of supported file formats, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/upload-evidence.html#supported-manual-evidence-files">Supported file types for manual evidence</a> in the <i>Audit Manager
   *             User Guide</i>.</p>
   */
  fileName: string | undefined;
}

/**
 * @public
 */
export interface GetEvidenceFileUploadUrlResponse {
  /**
   * @public
   * <p>The name of the uploaded manual evidence file that the presigned URL was generated
   *          for.</p>
   */
  evidenceFileName?: string;

  /**
   * @public
   * <p>The presigned URL that was generated.</p>
   */
  uploadUrl?: string;
}

/**
 * @public
 */
export interface GetEvidenceFolderRequest {
  /**
   * @public
   * <p> The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * @public
   * <p> The unique identifier for the control set. </p>
   */
  controlSetId: string | undefined;

  /**
   * @public
   * <p> The unique identifier for the folder that the evidence is stored in. </p>
   */
  evidenceFolderId: string | undefined;
}

/**
 * @public
 */
export interface GetEvidenceFolderResponse {
  /**
   * @public
   * <p> The folder that the evidence is stored in. </p>
   */
  evidenceFolder?: AssessmentEvidenceFolder;
}

/**
 * @public
 */
export interface GetEvidenceFoldersByAssessmentRequest {
  /**
   * @public
   * <p> The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * @public
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface GetEvidenceFoldersByAssessmentResponse {
  /**
   * @public
   * <p> The list of evidence folders that the <code>GetEvidenceFoldersByAssessment</code> API
   *          returned. </p>
   */
  evidenceFolders?: AssessmentEvidenceFolder[];

  /**
   * @public
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetEvidenceFoldersByAssessmentControlRequest {
  /**
   * @public
   * <p> The identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * @public
   * <p> The identifier for the control set. </p>
   */
  controlSetId: string | undefined;

  /**
   * @public
   * <p> The identifier for the control. </p>
   */
  controlId: string | undefined;

  /**
   * @public
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface GetEvidenceFoldersByAssessmentControlResponse {
  /**
   * @public
   * <p> The list of evidence folders that the
   *             <code>GetEvidenceFoldersByAssessmentControl</code> API returned. </p>
   */
  evidenceFolders?: AssessmentEvidenceFolder[];

  /**
   * @public
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetInsightsRequest {}

/**
 * @public
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
   * @public
   * <p>The number of active assessments in Audit Manager. </p>
   */
  activeAssessmentsCount?: number;

  /**
   * @public
   * <p>The number of compliance check evidence that Audit Manager classified as
   *          non-compliant on the <code>lastUpdated</code> date. This includes evidence that was
   *          collected from Security Hub with a <i>Fail</i> ruling, or collected
   *          from Config with a <i>Non-compliant</i> ruling. </p>
   */
  noncompliantEvidenceCount?: number;

  /**
   * @public
   * <p>The number of compliance check evidence that Audit Manager classified as compliant
   *          on the <code>lastUpdated</code> date. This includes evidence that was collected from
   *             Security Hub with a <i>Pass</i> ruling, or collected from
   *             Config with a <i>Compliant</i> ruling. </p>
   */
  compliantEvidenceCount?: number;

  /**
   * @public
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
   * @public
   * <p>The number of assessment controls that collected non-compliant evidence on the
   *             <code>lastUpdated</code> date. </p>
   */
  assessmentControlsCountByNoncompliantEvidence?: number;

  /**
   * @public
   * <p>The total number of controls across all active assessments. </p>
   */
  totalAssessmentControlsCount?: number;

  /**
   * @public
   * <p>The time when the cross-assessment insights were last updated. </p>
   */
  lastUpdated?: Date;
}

/**
 * @public
 */
export interface GetInsightsResponse {
  /**
   * @public
   * <p>The analytics data that the <code>GetInsights</code> API returned. </p>
   */
  insights?: Insights;
}

/**
 * @public
 */
export interface GetInsightsByAssessmentRequest {
  /**
   * @public
   * <p>The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;
}

/**
 * @public
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
   * @public
   * <p>The number of compliance check evidence that Audit Manager classified as
   *          non-compliant. This includes evidence that was collected from Security Hub with a
   *             <i>Fail</i> ruling, or collected from Config with a
   *             <i>Non-compliant</i> ruling. </p>
   */
  noncompliantEvidenceCount?: number;

  /**
   * @public
   * <p>The number of compliance check evidence that Audit Manager classified as compliant.
   *          This includes evidence that was collected from Security Hub with a
   *             <i>Pass</i> ruling, or collected from Config with a
   *             <i>Compliant</i> ruling. </p>
   */
  compliantEvidenceCount?: number;

  /**
   * @public
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
   * @public
   * <p>The number of assessment controls that collected non-compliant evidence on the
   *             <code>lastUpdated</code> date. </p>
   */
  assessmentControlsCountByNoncompliantEvidence?: number;

  /**
   * @public
   * <p>The total number of controls in the assessment. </p>
   */
  totalAssessmentControlsCount?: number;

  /**
   * @public
   * <p>The time when the assessment insights were last updated.</p>
   */
  lastUpdated?: Date;
}

/**
 * @public
 */
export interface GetInsightsByAssessmentResponse {
  /**
   * @public
   * <p> The assessment analytics data that the <code>GetInsightsByAssessment</code> API
   *          returned. </p>
   */
  insights?: InsightsByAssessment;
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
   * @public
   * <p> The identifier for the administrator account. </p>
   */
  adminAccountId?: string;

  /**
   * @public
   * <p> The identifier for the organization. </p>
   */
  organizationId?: string;
}

/**
 * @public
 */
export interface GetServicesInScopeRequest {}

/**
 * @public
 * <p> The metadata that's associated with the Amazon Web Service. </p>
 */
export interface ServiceMetadata {
  /**
   * @public
   * <p> The name of the Amazon Web Service. </p>
   */
  name?: string;

  /**
   * @public
   * <p> The display name of the Amazon Web Service. </p>
   */
  displayName?: string;

  /**
   * @public
   * <p> The description of the Amazon Web Service. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The category that the Amazon Web Service belongs to, such as compute, storage,
   *          or database. </p>
   */
  category?: string;
}

/**
 * @public
 */
export interface GetServicesInScopeResponse {
  /**
   * @public
   * <p> The metadata that's associated with the Amazon Web Service. </p>
   */
  serviceMetadata?: ServiceMetadata[];
}

/**
 * @public
 * @enum
 */
export const SettingAttribute = {
  ALL: "ALL",
  DEFAULT_ASSESSMENT_REPORTS_DESTINATION: "DEFAULT_ASSESSMENT_REPORTS_DESTINATION",
  DEFAULT_EXPORT_DESTINATION: "DEFAULT_EXPORT_DESTINATION",
  DEFAULT_PROCESS_OWNERS: "DEFAULT_PROCESS_OWNERS",
  DEREGISTRATION_POLICY: "DEREGISTRATION_POLICY",
  EVIDENCE_FINDER_ENABLEMENT: "EVIDENCE_FINDER_ENABLEMENT",
  IS_AWS_ORG_ENABLED: "IS_AWS_ORG_ENABLED",
  SNS_TOPIC: "SNS_TOPIC",
} as const;

/**
 * @public
 */
export type SettingAttribute = (typeof SettingAttribute)[keyof typeof SettingAttribute];

/**
 * @public
 */
export interface GetSettingsRequest {
  /**
   * @public
   * <p> The list of setting attribute enum values. </p>
   */
  attribute: SettingAttribute | undefined;
}

/**
 * @public
 * @enum
 */
export const ExportDestinationType = {
  S3: "S3",
} as const;

/**
 * @public
 */
export type ExportDestinationType = (typeof ExportDestinationType)[keyof typeof ExportDestinationType];

/**
 * @public
 * <p>The default s3 bucket where Audit Manager saves the files that you export from evidence finder.</p>
 */
export interface DefaultExportDestination {
  /**
   * @public
   * <p>The destination type, such as Amazon S3.</p>
   */
  destinationType?: ExportDestinationType;

  /**
   * @public
   * <p>The destination bucket where Audit Manager stores exported files.</p>
   */
  destination?: string;
}

/**
 * @public
 * @enum
 */
export const DeleteResources = {
  ALL: "ALL",
  DEFAULT: "DEFAULT",
} as const;

/**
 * @public
 */
export type DeleteResources = (typeof DeleteResources)[keyof typeof DeleteResources];

/**
 * @public
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
   * @public
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
  deleteResources?: DeleteResources;
}

/**
 * @public
 * @enum
 */
export const EvidenceFinderBackfillStatus = {
  COMPLETED: "COMPLETED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
} as const;

/**
 * @public
 */
export type EvidenceFinderBackfillStatus =
  (typeof EvidenceFinderBackfillStatus)[keyof typeof EvidenceFinderBackfillStatus];

/**
 * @public
 * @enum
 */
export const EvidenceFinderEnablementStatus = {
  DISABLED: "DISABLED",
  DISABLE_IN_PROGRESS: "DISABLE_IN_PROGRESS",
  ENABLED: "ENABLED",
  ENABLE_IN_PROGRESS: "ENABLE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type EvidenceFinderEnablementStatus =
  (typeof EvidenceFinderEnablementStatus)[keyof typeof EvidenceFinderEnablementStatus];

/**
 * @public
 * <p>The settings object that specifies whether evidence finder is enabled. This object also
 *          describes the related event data store, and the backfill status for populating the event
 *          data store with evidence data.</p>
 */
export interface EvidenceFinderEnablement {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the CloudTrail Lake event data store that’s
   *          used by evidence finder. The event data store is the lake of evidence data that evidence
   *          finder runs queries against.</p>
   */
  eventDataStoreArn?: string;

  /**
   * @public
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
  enablementStatus?: EvidenceFinderEnablementStatus;

  /**
   * @public
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
  backfillStatus?: EvidenceFinderBackfillStatus;

  /**
   * @public
   * <p>Represents any errors that occurred when enabling or disabling evidence finder. </p>
   */
  error?: string;
}

/**
 * @public
 * <p> The settings object that holds all supported Audit Manager settings. </p>
 */
export interface Settings {
  /**
   * @public
   * <p> Specifies whether Organizations is enabled. </p>
   */
  isAwsOrgEnabled?: boolean;

  /**
   * @public
   * <p> The designated Amazon Simple Notification Service (Amazon SNS) topic. </p>
   */
  snsTopic?: string;

  /**
   * @public
   * <p>The default S3 destination bucket for storing assessment reports.</p>
   */
  defaultAssessmentReportsDestination?: AssessmentReportsDestination;

  /**
   * @public
   * <p> The designated default audit owners. </p>
   */
  defaultProcessOwners?: Role[];

  /**
   * @public
   * <p> The KMS key details. </p>
   */
  kmsKey?: string;

  /**
   * @public
   * <p>The current evidence finder status and event data store details.</p>
   */
  evidenceFinderEnablement?: EvidenceFinderEnablement;

  /**
   * @public
   * <p>The deregistration policy for your Audit Manager data. You can
   *       use this attribute to determine how your data is handled when you deregister Audit Manager.</p>
   */
  deregistrationPolicy?: DeregistrationPolicy;

  /**
   * @public
   * <p>The default S3 destination bucket for storing evidence finder exports.</p>
   */
  defaultExportDestination?: DefaultExportDestination;
}

/**
 * @public
 */
export interface GetSettingsResponse {
  /**
   * @public
   * <p> The settings object that holds all supported Audit Manager settings. </p>
   */
  settings?: Settings;
}

/**
 * @public
 */
export interface ListAssessmentControlInsightsByControlDomainRequest {
  /**
   * @public
   * <p>The unique identifier for the control domain. </p>
   */
  controlDomainId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the active assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * @public
   * <p>The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>A breakdown of the latest compliance check status for the evidence in your Audit Manager assessments. </p>
 */
export interface EvidenceInsights {
  /**
   * @public
   * <p>The number of compliance check evidence that Audit Manager classified as
   *          non-compliant. This includes evidence that was collected from Security Hub with a
   *             <i>Fail</i> ruling, or collected from Config with a
   *             <i>Non-compliant</i> ruling. </p>
   */
  noncompliantEvidenceCount?: number;

  /**
   * @public
   * <p>The number of compliance check evidence that Audit Manager classified as compliant.
   *          This includes evidence that was collected from Security Hub with a
   *             <i>Pass</i> ruling, or collected from Config with a
   *             <i>Compliant</i> ruling. </p>
   */
  compliantEvidenceCount?: number;

  /**
   * @public
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
 * @public
 * <p>A summary of the latest analytics data for a specific control in a specific active
 *          assessment.</p>
 *          <p>Control insights are grouped by control domain, and ranked by the highest total count of
 *          non-compliant evidence. </p>
 */
export interface ControlInsightsMetadataByAssessmentItem {
  /**
   * @public
   * <p>The name of the assessment control. </p>
   */
  name?: string;

  /**
   * @public
   * <p>The unique identifier for the assessment control. </p>
   */
  id?: string;

  /**
   * @public
   * <p>A breakdown of the compliance check status for the evidence that’s associated with the
   *          assessment control. </p>
   */
  evidenceInsights?: EvidenceInsights;

  /**
   * @public
   * <p>The name of the control set that the assessment control belongs to. </p>
   */
  controlSetName?: string;

  /**
   * @public
   * <p>The time when the assessment control insights were last updated. </p>
   */
  lastUpdated?: Date;
}

/**
 * @public
 */
export interface ListAssessmentControlInsightsByControlDomainResponse {
  /**
   * @public
   * <p>The assessment control analytics data that the
   *             <code>ListAssessmentControlInsightsByControlDomain</code> API returned. </p>
   */
  controlInsightsByAssessment?: ControlInsightsMetadataByAssessmentItem[];

  /**
   * @public
   * <p>The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAssessmentFrameworksRequest {
  /**
   * @public
   * <p> The type of framework, such as a standard framework or a custom framework. </p>
   */
  frameworkType: FrameworkType | undefined;

  /**
   * @public
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAssessmentFrameworksResponse {
  /**
   * @public
   * <p> A list of metadata that the <code>ListAssessmentFrameworks</code> API returns for each
   *          framework.</p>
   */
  frameworkMetadataList?: AssessmentFrameworkMetadata[];

  /**
   * @public
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAssessmentFrameworkShareRequestsRequest {
  /**
   * @public
   * <p> Specifies whether the share request is a sent request or a received request.</p>
   */
  requestType: ShareRequestType | undefined;

  /**
   * @public
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAssessmentFrameworkShareRequestsResponse {
  /**
   * @public
   * <p> The list of share requests that the <code>ListAssessmentFrameworkShareRequests</code>
   *          API returned. </p>
   */
  assessmentFrameworkShareRequests?: AssessmentFrameworkShareRequest[];

  /**
   * @public
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAssessmentReportsRequest {
  /**
   * @public
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAssessmentReportsResponse {
  /**
   * @public
   * <p> The list of assessment reports that the <code>ListAssessmentReports</code> API
   *          returned. </p>
   */
  assessmentReports?: AssessmentReportMetadata[];

  /**
   * @public
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAssessmentsRequest {
  /**
   * @public
   * <p> The current status of the assessment.</p>
   */
  status?: AssessmentStatus;

  /**
   * @public
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAssessmentsResponse {
  /**
   * @public
   * <p>The metadata that the <code>ListAssessments</code> API returns for each
   *          assessment.</p>
   */
  assessmentMetadata?: AssessmentMetadataItem[];

  /**
   * @public
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListControlDomainInsightsRequest {
  /**
   * @public
   * <p>The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>A summary of the latest analytics data for a specific control domain.</p>
 *          <p>Control domain insights are grouped by control domain, and ranked by the highest total
 *          count of non-compliant evidence.</p>
 */
export interface ControlDomainInsights {
  /**
   * @public
   * <p>The name of the control domain. </p>
   */
  name?: string;

  /**
   * @public
   * <p>The unique identifier for the control domain. </p>
   */
  id?: string;

  /**
   * @public
   * <p>The number of controls in the control domain that collected non-compliant evidence on
   *          the <code>lastUpdated</code> date. </p>
   */
  controlsCountByNoncompliantEvidence?: number;

  /**
   * @public
   * <p>The total number of controls in the control domain. </p>
   */
  totalControlsCount?: number;

  /**
   * @public
   * <p>A breakdown of the compliance check status for the evidence that’s associated with the
   *          control domain. </p>
   */
  evidenceInsights?: EvidenceInsights;

  /**
   * @public
   * <p>The time when the control domain insights were last updated. </p>
   */
  lastUpdated?: Date;
}

/**
 * @public
 */
export interface ListControlDomainInsightsResponse {
  /**
   * @public
   * <p>The control domain analytics data that the <code>ListControlDomainInsights</code> API
   *          returned. </p>
   */
  controlDomainInsights?: ControlDomainInsights[];

  /**
   * @public
   * <p>The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListControlDomainInsightsByAssessmentRequest {
  /**
   * @public
   * <p>The unique identifier for the active assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * @public
   * <p>The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListControlDomainInsightsByAssessmentResponse {
  /**
   * @public
   * <p>The control domain analytics data that the
   *             <code>ListControlDomainInsightsByAssessment</code> API returned. </p>
   */
  controlDomainInsights?: ControlDomainInsights[];

  /**
   * @public
   * <p>The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListControlInsightsByControlDomainRequest {
  /**
   * @public
   * <p>The unique identifier for the control domain. </p>
   */
  controlDomainId: string | undefined;

  /**
   * @public
   * <p>The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>A summary of the latest analytics data for a specific control. </p>
 *          <p>This data reflects the total counts for the specified control across all active
 *          assessments. Control insights are grouped by control domain, and ranked by the highest
 *          total count of non-compliant evidence.</p>
 */
export interface ControlInsightsMetadataItem {
  /**
   * @public
   * <p>The name of the control. </p>
   */
  name?: string;

  /**
   * @public
   * <p>The unique identifier for the control. </p>
   */
  id?: string;

  /**
   * @public
   * <p>A breakdown of the compliance check status for the evidence that’s associated with the
   *          control. </p>
   */
  evidenceInsights?: EvidenceInsights;

  /**
   * @public
   * <p>The time when the control insights were last updated. </p>
   */
  lastUpdated?: Date;
}

/**
 * @public
 */
export interface ListControlInsightsByControlDomainResponse {
  /**
   * @public
   * <p>The control analytics data that the <code>ListControlInsightsByControlDomain</code> API
   *          returned. </p>
   */
  controlInsightsMetadata?: ControlInsightsMetadataItem[];

  /**
   * @public
   * <p>The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListControlsRequest {
  /**
   * @public
   * <p> The type of control, such as a standard control or a custom control. </p>
   */
  controlType: ControlType | undefined;

  /**
   * @public
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p> The metadata that's associated with the standard control or custom control. </p>
 */
export interface ControlMetadata {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the control. </p>
   */
  arn?: string;

  /**
   * @public
   * <p> The unique identifier for the control. </p>
   */
  id?: string;

  /**
   * @public
   * <p> The name of the control. </p>
   */
  name?: string;

  /**
   * @public
   * <p> The data source that determines where Audit Manager collects evidence from for the
   *          control. </p>
   */
  controlSources?: string;

  /**
   * @public
   * <p> The time when the control was created. </p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p> The time when the control was most recently updated. </p>
   */
  lastUpdatedAt?: Date;
}

/**
 * @public
 */
export interface ListControlsResponse {
  /**
   * @public
   * <p> A list of metadata that the <code>ListControls</code> API returns for each
   *          control.</p>
   */
  controlMetadataList?: ControlMetadata[];

  /**
   * @public
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListKeywordsForDataSourceRequest {
  /**
   * @public
   * <p> The control mapping data source that the keywords apply to. </p>
   */
  source: SourceType | undefined;

  /**
   * @public
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListKeywordsForDataSourceResponse {
  /**
   * @public
   * <p> The list of keywords for the event mapping source. </p>
   */
  keywords?: string[];

  /**
   * @public
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListNotificationsRequest {
  /**
   * @public
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p> The notification that informs a user of an update in Audit Manager. For
 *          example, this includes the notification that's sent when a control set is delegated for
 *          review. </p>
 */
export interface Notification {
  /**
   * @public
   * <p> The unique identifier for the notification. </p>
   */
  id?: string;

  /**
   * @public
   * <p> The identifier for the assessment. </p>
   */
  assessmentId?: string;

  /**
   * @public
   * <p> The name of the related assessment. </p>
   */
  assessmentName?: string;

  /**
   * @public
   * <p> The identifier for the control set. </p>
   */
  controlSetId?: string;

  /**
   * @public
   * <p> Specifies the name of the control set that the notification is about. </p>
   */
  controlSetName?: string;

  /**
   * @public
   * <p> The description of the notification. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The time when the notification was sent. </p>
   */
  eventTime?: Date;

  /**
   * @public
   * <p> The sender of the notification. </p>
   */
  source?: string;
}

/**
 * @public
 */
export interface ListNotificationsResponse {
  /**
   * @public
   * <p> The returned list of notifications. </p>
   */
  notifications?: Notification[];

  /**
   * @public
   * <p> The pagination token that's used to fetch the next set of results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the resource. </p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p> The list of tags that the <code>ListTagsForResource</code> API returned. </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface RegisterAccountRequest {
  /**
   * @public
   * <p> The KMS key details. </p>
   */
  kmsKey?: string;

  /**
   * @public
   * <p> The delegated administrator account for Audit Manager. </p>
   */
  delegatedAdminAccount?: string;
}

/**
 * @public
 */
export interface RegisterAccountResponse {
  /**
   * @public
   * <p> The status of the account registration request. </p>
   */
  status?: AccountStatus;
}

/**
 * @public
 */
export interface RegisterOrganizationAdminAccountRequest {
  /**
   * @public
   * <p> The identifier for the delegated administrator account. </p>
   */
  adminAccountId: string | undefined;
}

/**
 * @public
 */
export interface RegisterOrganizationAdminAccountResponse {
  /**
   * @public
   * <p> The identifier for the delegated administrator account. </p>
   */
  adminAccountId?: string;

  /**
   * @public
   * <p> The identifier for the organization. </p>
   */
  organizationId?: string;
}

/**
 * @public
 */
export interface StartAssessmentFrameworkShareRequest {
  /**
   * @public
   * <p> The unique identifier for the custom framework to be shared. </p>
   */
  frameworkId: string | undefined;

  /**
   * @public
   * <p> The Amazon Web Services account of the recipient. </p>
   */
  destinationAccount: string | undefined;

  /**
   * @public
   * <p> The Amazon Web Services Region of the recipient. </p>
   */
  destinationRegion: string | undefined;

  /**
   * @public
   * <p> An optional comment from the sender about the share request. </p>
   */
  comment?: string;
}

/**
 * @public
 */
export interface StartAssessmentFrameworkShareResponse {
  /**
   * @public
   * <p> The share request that's created by the <code>StartAssessmentFrameworkShare</code> API.
   *       </p>
   */
  assessmentFrameworkShareRequest?: AssessmentFrameworkShareRequest;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the resource. </p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p> The tags that are associated with the resource. </p>
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
   * @public
   * <p> The Amazon Resource Name (ARN) of the specified resource. </p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p> The name or key of the tag. </p>
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
   * @public
   * <p> The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * @public
   * <p> The name of the assessment to be updated. </p>
   */
  assessmentName?: string;

  /**
   * @public
   * <p> The description of the assessment. </p>
   */
  assessmentDescription?: string;

  /**
   * @public
   * <p> The scope of the assessment. </p>
   */
  scope: Scope | undefined;

  /**
   * @public
   * <p> The assessment report storage destination for the assessment that's being updated.
   *       </p>
   */
  assessmentReportsDestination?: AssessmentReportsDestination;

  /**
   * @public
   * <p> The list of roles for the assessment. </p>
   */
  roles?: Role[];
}

/**
 * @public
 */
export interface UpdateAssessmentResponse {
  /**
   * @public
   * <p> The response object for the <code>UpdateAssessment</code> API. This is the name of the
   *          updated assessment.</p>
   */
  assessment?: Assessment;
}

/**
 * @public
 */
export interface UpdateAssessmentControlRequest {
  /**
   * @public
   * <p> The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * @public
   * <p> The unique identifier for the control set. </p>
   */
  controlSetId: string | undefined;

  /**
   * @public
   * <p> The unique identifier for the control. </p>
   */
  controlId: string | undefined;

  /**
   * @public
   * <p> The status of the control. </p>
   */
  controlStatus?: ControlStatus;

  /**
   * @public
   * <p> The comment body text for the control. </p>
   */
  commentBody?: string;
}

/**
 * @public
 */
export interface UpdateAssessmentControlResponse {
  /**
   * @public
   * <p> The name of the updated control set that the <code>UpdateAssessmentControl</code> API
   *          returned. </p>
   */
  control?: AssessmentControl;
}

/**
 * @public
 */
export interface UpdateAssessmentControlSetStatusRequest {
  /**
   * @public
   * <p> The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * @public
   * <p> The unique identifier for the control set. </p>
   */
  controlSetId: string | undefined;

  /**
   * @public
   * <p> The status of the control set that's being updated. </p>
   */
  status: ControlSetStatus | undefined;

  /**
   * @public
   * <p> The comment that's related to the status update. </p>
   */
  comment: string | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentControlSetStatusResponse {
  /**
   * @public
   * <p> The name of the updated control set that the
   *             <code>UpdateAssessmentControlSetStatus</code> API returned. </p>
   */
  controlSet?: AssessmentControlSet;
}

/**
 * @public
 * <p> A <code>controlSet</code> entity that represents a collection of controls in Audit Manager. This doesn't contain the control set ID. </p>
 */
export interface UpdateAssessmentFrameworkControlSet {
  /**
   * @public
   * <p> The unique identifier for the control set. </p>
   */
  id?: string;

  /**
   * @public
   * <p> The name of the control set. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> The list of controls that are contained within the control set. </p>
   */
  controls: CreateAssessmentFrameworkControl[] | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentFrameworkRequest {
  /**
   * @public
   * <p> The unique identifier for the framework. </p>
   */
  frameworkId: string | undefined;

  /**
   * @public
   * <p> The name of the framework to be updated. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> The description of the updated framework. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The compliance type that the new custom framework supports, such as CIS or HIPAA.
   *       </p>
   */
  complianceType?: string;

  /**
   * @public
   * <p> The control sets that are associated with the framework. </p>
   */
  controlSets: UpdateAssessmentFrameworkControlSet[] | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentFrameworkResponse {
  /**
   * @public
   * <p> The name of the framework. </p>
   */
  framework?: Framework;
}

/**
 * @public
 * @enum
 */
export const ShareRequestAction = {
  ACCEPT: "ACCEPT",
  DECLINE: "DECLINE",
  REVOKE: "REVOKE",
} as const;

/**
 * @public
 */
export type ShareRequestAction = (typeof ShareRequestAction)[keyof typeof ShareRequestAction];

/**
 * @public
 */
export interface UpdateAssessmentFrameworkShareRequest {
  /**
   * @public
   * <p> The unique identifier for the share request. </p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>Specifies whether the share request is a sent request or a received request.</p>
   */
  requestType: ShareRequestType | undefined;

  /**
   * @public
   * <p>Specifies the update action for the share request.</p>
   */
  action: ShareRequestAction | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentFrameworkShareResponse {
  /**
   * @public
   * <p> The updated share request that's returned by the
   *             <code>UpdateAssessmentFrameworkShare</code> operation. </p>
   */
  assessmentFrameworkShareRequest?: AssessmentFrameworkShareRequest;
}

/**
 * @public
 */
export interface UpdateAssessmentStatusRequest {
  /**
   * @public
   * <p> The unique identifier for the assessment. </p>
   */
  assessmentId: string | undefined;

  /**
   * @public
   * <p> The current status of the assessment. </p>
   */
  status: AssessmentStatus | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentStatusResponse {
  /**
   * @public
   * <p> The name of the updated assessment that the <code>UpdateAssessmentStatus</code> API
   *          returned. </p>
   */
  assessment?: Assessment;
}

/**
 * @public
 */
export interface UpdateControlRequest {
  /**
   * @public
   * <p> The identifier for the control. </p>
   */
  controlId: string | undefined;

  /**
   * @public
   * <p> The name of the updated control. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> The optional description of the control. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The steps that you should follow to determine if the control is met. </p>
   */
  testingInformation?: string;

  /**
   * @public
   * <p> The title of the action plan for remediating the control. </p>
   */
  actionPlanTitle?: string;

  /**
   * @public
   * <p> The recommended actions to carry out if the control isn't fulfilled. </p>
   */
  actionPlanInstructions?: string;

  /**
   * @public
   * <p> The data mapping sources for the control. </p>
   */
  controlMappingSources: ControlMappingSource[] | undefined;
}

/**
 * @public
 */
export interface UpdateControlResponse {
  /**
   * @public
   * <p> The name of the updated control set that the <code>UpdateControl</code> API returned.
   *       </p>
   */
  control?: Control;
}

/**
 * @public
 */
export interface UpdateSettingsRequest {
  /**
   * @public
   * <p> The Amazon Simple Notification Service (Amazon SNS) topic that Audit Manager sends
   *          notifications to. </p>
   */
  snsTopic?: string;

  /**
   * @public
   * <p> The default S3 destination bucket for storing assessment reports. </p>
   */
  defaultAssessmentReportsDestination?: AssessmentReportsDestination;

  /**
   * @public
   * <p> A list of the default audit owners. </p>
   */
  defaultProcessOwners?: Role[];

  /**
   * @public
   * <p> The KMS key details. </p>
   */
  kmsKey?: string;

  /**
   * @public
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
   * @public
   * <p>The deregistration policy for your Audit Manager data. You can
   *          use this attribute to determine how your data is handled when you deregister Audit Manager.</p>
   */
  deregistrationPolicy?: DeregistrationPolicy;

  /**
   * @public
   * <p> The default S3 destination bucket for storing evidence finder exports. </p>
   */
  defaultExportDestination?: DefaultExportDestination;
}

/**
 * @public
 */
export interface UpdateSettingsResponse {
  /**
   * @public
   * <p> The current list of settings. </p>
   */
  settings?: Settings;
}

/**
 * @public
 */
export interface ValidateAssessmentReportIntegrityRequest {
  /**
   * @public
   * <p> The relative path of the Amazon S3 bucket that the assessment report is stored
   *          in. </p>
   */
  s3RelativePath: string | undefined;
}

/**
 * @public
 */
export interface ValidateAssessmentReportIntegrityResponse {
  /**
   * @public
   * <p> Specifies whether the signature key is valid. </p>
   */
  signatureValid?: boolean;

  /**
   * @public
   * <p> The signature algorithm that's used to code sign the assessment report file. </p>
   */
  signatureAlgorithm?: string;

  /**
   * @public
   * <p> The date and time signature that specifies when the assessment report was created.
   *       </p>
   */
  signatureDateTime?: string;

  /**
   * @public
   * <p> The unique identifier for the validation signature key. </p>
   */
  signatureKeyId?: string;

  /**
   * @public
   * <p> Represents any errors that occurred when validating the assessment report. </p>
   */
  validationErrors?: string[];
}

/**
 * @internal
 */
export const AWSAccountFilterSensitiveLog = (obj: AWSAccount): any => ({
  ...obj,
  ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ControlCommentFilterSensitiveLog = (obj: ControlComment): any => ({
  ...obj,
  ...(obj.authorName && { authorName: SENSITIVE_STRING }),
  ...(obj.commentBody && { commentBody: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssessmentControlFilterSensitiveLog = (obj: AssessmentControl): any => ({
  ...obj,
  ...(obj.comments && { comments: obj.comments.map((item) => ControlCommentFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const DelegationFilterSensitiveLog = (obj: Delegation): any => ({
  ...obj,
  ...(obj.assessmentName && { assessmentName: SENSITIVE_STRING }),
  ...(obj.comment && { comment: SENSITIVE_STRING }),
  ...(obj.createdBy && { createdBy: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssessmentControlSetFilterSensitiveLog = (obj: AssessmentControlSet): any => ({
  ...obj,
  ...(obj.roles && { roles: SENSITIVE_STRING }),
  ...(obj.delegations && { delegations: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FrameworkMetadataFilterSensitiveLog = (obj: FrameworkMetadata): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.complianceType && { complianceType: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssessmentFrameworkFilterSensitiveLog = (obj: AssessmentFramework): any => ({
  ...obj,
  ...(obj.metadata && { metadata: FrameworkMetadataFilterSensitiveLog(obj.metadata) }),
  ...(obj.controlSets && { controlSets: obj.controlSets.map((item) => AssessmentControlSetFilterSensitiveLog(item)) }),
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
export const ScopeFilterSensitiveLog = (obj: Scope): any => ({
  ...obj,
  ...(obj.awsAccounts && { awsAccounts: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssessmentMetadataFilterSensitiveLog = (obj: AssessmentMetadata): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.complianceType && { complianceType: SENSITIVE_STRING }),
  ...(obj.assessmentReportsDestination && { assessmentReportsDestination: SENSITIVE_STRING }),
  ...(obj.scope && { scope: SENSITIVE_STRING }),
  ...(obj.roles && { roles: SENSITIVE_STRING }),
  ...(obj.delegations && { delegations: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssessmentFilterSensitiveLog = (obj: Assessment): any => ({
  ...obj,
  ...(obj.awsAccount && { awsAccount: AWSAccountFilterSensitiveLog(obj.awsAccount) }),
  ...(obj.metadata && { metadata: AssessmentMetadataFilterSensitiveLog(obj.metadata) }),
  ...(obj.framework && { framework: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssessmentFrameworkMetadataFilterSensitiveLog = (obj: AssessmentFrameworkMetadata): any => ({
  ...obj,
  ...(obj.complianceType && { complianceType: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssessmentFrameworkShareRequestFilterSensitiveLog = (obj: AssessmentFrameworkShareRequest): any => ({
  ...obj,
  ...(obj.complianceType && { complianceType: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssessmentMetadataItemFilterSensitiveLog = (obj: AssessmentMetadataItem): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.complianceType && { complianceType: SENSITIVE_STRING }),
  ...(obj.roles && { roles: SENSITIVE_STRING }),
  ...(obj.delegations && { delegations: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssessmentReportFilterSensitiveLog = (obj: AssessmentReport): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.assessmentName && { assessmentName: SENSITIVE_STRING }),
  ...(obj.author && { author: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssessmentReportMetadataFilterSensitiveLog = (obj: AssessmentReportMetadata): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.assessmentName && { assessmentName: SENSITIVE_STRING }),
  ...(obj.author && { author: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateDelegationRequestFilterSensitiveLog = (obj: CreateDelegationRequest): any => ({
  ...obj,
  ...(obj.comment && { comment: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchCreateDelegationByAssessmentRequestFilterSensitiveLog = (
  obj: BatchCreateDelegationByAssessmentRequest
): any => ({
  ...obj,
  ...(obj.createDelegationRequests && { createDelegationRequests: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchCreateDelegationByAssessmentErrorFilterSensitiveLog = (
  obj: BatchCreateDelegationByAssessmentError
): any => ({
  ...obj,
  ...(obj.createDelegationRequest && {
    createDelegationRequest: CreateDelegationRequestFilterSensitiveLog(obj.createDelegationRequest),
  }),
});

/**
 * @internal
 */
export const BatchCreateDelegationByAssessmentResponseFilterSensitiveLog = (
  obj: BatchCreateDelegationByAssessmentResponse
): any => ({
  ...obj,
  ...(obj.delegations && { delegations: SENSITIVE_STRING }),
  ...(obj.errors && { errors: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchDeleteDelegationByAssessmentResponseFilterSensitiveLog = (
  obj: BatchDeleteDelegationByAssessmentResponse
): any => ({
  ...obj,
  ...(obj.errors && { errors: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ManualEvidenceFilterSensitiveLog = (obj: ManualEvidence): any => ({
  ...obj,
  ...(obj.textResponse && { textResponse: SENSITIVE_STRING }),
  ...(obj.evidenceFileName && { evidenceFileName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchImportEvidenceToAssessmentControlRequestFilterSensitiveLog = (
  obj: BatchImportEvidenceToAssessmentControlRequest
): any => ({
  ...obj,
  ...(obj.manualEvidence && {
    manualEvidence: obj.manualEvidence.map((item) => ManualEvidenceFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const BatchImportEvidenceToAssessmentControlErrorFilterSensitiveLog = (
  obj: BatchImportEvidenceToAssessmentControlError
): any => ({
  ...obj,
  ...(obj.manualEvidence && { manualEvidence: ManualEvidenceFilterSensitiveLog(obj.manualEvidence) }),
});

/**
 * @internal
 */
export const BatchImportEvidenceToAssessmentControlResponseFilterSensitiveLog = (
  obj: BatchImportEvidenceToAssessmentControlResponse
): any => ({
  ...obj,
  ...(obj.errors && {
    errors: obj.errors.map((item) => BatchImportEvidenceToAssessmentControlErrorFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateAssessmentRequestFilterSensitiveLog = (obj: CreateAssessmentRequest): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.assessmentReportsDestination && { assessmentReportsDestination: SENSITIVE_STRING }),
  ...(obj.scope && { scope: SENSITIVE_STRING }),
  ...(obj.roles && { roles: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAssessmentResponseFilterSensitiveLog = (obj: CreateAssessmentResponse): any => ({
  ...obj,
  ...(obj.assessment && { assessment: AssessmentFilterSensitiveLog(obj.assessment) }),
});

/**
 * @internal
 */
export const CreateAssessmentFrameworkRequestFilterSensitiveLog = (obj: CreateAssessmentFrameworkRequest): any => ({
  ...obj,
  ...(obj.complianceType && { complianceType: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ControlMappingSourceFilterSensitiveLog = (obj: ControlMappingSource): any => ({
  ...obj,
  ...(obj.troubleshootingText && { troubleshootingText: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ControlFilterSensitiveLog = (obj: Control): any => ({
  ...obj,
  ...(obj.testingInformation && { testingInformation: SENSITIVE_STRING }),
  ...(obj.actionPlanTitle && { actionPlanTitle: SENSITIVE_STRING }),
  ...(obj.actionPlanInstructions && { actionPlanInstructions: SENSITIVE_STRING }),
  ...(obj.controlMappingSources && {
    controlMappingSources: obj.controlMappingSources.map((item) => ControlMappingSourceFilterSensitiveLog(item)),
  }),
  ...(obj.createdBy && { createdBy: SENSITIVE_STRING }),
  ...(obj.lastUpdatedBy && { lastUpdatedBy: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ControlSetFilterSensitiveLog = (obj: ControlSet): any => ({
  ...obj,
  ...(obj.controls && { controls: obj.controls.map((item) => ControlFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const FrameworkFilterSensitiveLog = (obj: Framework): any => ({
  ...obj,
  ...(obj.complianceType && { complianceType: SENSITIVE_STRING }),
  ...(obj.controlSets && { controlSets: SENSITIVE_STRING }),
  ...(obj.createdBy && { createdBy: SENSITIVE_STRING }),
  ...(obj.lastUpdatedBy && { lastUpdatedBy: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAssessmentFrameworkResponseFilterSensitiveLog = (obj: CreateAssessmentFrameworkResponse): any => ({
  ...obj,
  ...(obj.framework && { framework: FrameworkFilterSensitiveLog(obj.framework) }),
});

/**
 * @internal
 */
export const CreateAssessmentReportRequestFilterSensitiveLog = (obj: CreateAssessmentReportRequest): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAssessmentReportResponseFilterSensitiveLog = (obj: CreateAssessmentReportResponse): any => ({
  ...obj,
  ...(obj.assessmentReport && { assessmentReport: AssessmentReportFilterSensitiveLog(obj.assessmentReport) }),
});

/**
 * @internal
 */
export const CreateControlMappingSourceFilterSensitiveLog = (obj: CreateControlMappingSource): any => ({
  ...obj,
  ...(obj.troubleshootingText && { troubleshootingText: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateControlRequestFilterSensitiveLog = (obj: CreateControlRequest): any => ({
  ...obj,
  ...(obj.testingInformation && { testingInformation: SENSITIVE_STRING }),
  ...(obj.actionPlanTitle && { actionPlanTitle: SENSITIVE_STRING }),
  ...(obj.actionPlanInstructions && { actionPlanInstructions: SENSITIVE_STRING }),
  ...(obj.controlMappingSources && {
    controlMappingSources: obj.controlMappingSources.map((item) => CreateControlMappingSourceFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateControlResponseFilterSensitiveLog = (obj: CreateControlResponse): any => ({
  ...obj,
  ...(obj.control && { control: ControlFilterSensitiveLog(obj.control) }),
});

/**
 * @internal
 */
export const GetAssessmentResponseFilterSensitiveLog = (obj: GetAssessmentResponse): any => ({
  ...obj,
  ...(obj.assessment && { assessment: AssessmentFilterSensitiveLog(obj.assessment) }),
});

/**
 * @internal
 */
export const GetAssessmentFrameworkResponseFilterSensitiveLog = (obj: GetAssessmentFrameworkResponse): any => ({
  ...obj,
  ...(obj.framework && { framework: FrameworkFilterSensitiveLog(obj.framework) }),
});

/**
 * @internal
 */
export const GetControlResponseFilterSensitiveLog = (obj: GetControlResponse): any => ({
  ...obj,
  ...(obj.control && { control: ControlFilterSensitiveLog(obj.control) }),
});

/**
 * @internal
 */
export const DelegationMetadataFilterSensitiveLog = (obj: DelegationMetadata): any => ({
  ...obj,
  ...(obj.assessmentName && { assessmentName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetDelegationsResponseFilterSensitiveLog = (obj: GetDelegationsResponse): any => ({
  ...obj,
  ...(obj.delegations && { delegations: obj.delegations.map((item) => DelegationMetadataFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetEvidenceFileUploadUrlRequestFilterSensitiveLog = (obj: GetEvidenceFileUploadUrlRequest): any => ({
  ...obj,
  ...(obj.fileName && { fileName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetEvidenceFileUploadUrlResponseFilterSensitiveLog = (obj: GetEvidenceFileUploadUrlResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SettingsFilterSensitiveLog = (obj: Settings): any => ({
  ...obj,
  ...(obj.snsTopic && { snsTopic: SENSITIVE_STRING }),
  ...(obj.defaultAssessmentReportsDestination && { defaultAssessmentReportsDestination: SENSITIVE_STRING }),
  ...(obj.defaultProcessOwners && { defaultProcessOwners: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetSettingsResponseFilterSensitiveLog = (obj: GetSettingsResponse): any => ({
  ...obj,
  ...(obj.settings && { settings: SettingsFilterSensitiveLog(obj.settings) }),
});

/**
 * @internal
 */
export const ListAssessmentFrameworksResponseFilterSensitiveLog = (obj: ListAssessmentFrameworksResponse): any => ({
  ...obj,
  ...(obj.frameworkMetadataList && {
    frameworkMetadataList: obj.frameworkMetadataList.map((item) => AssessmentFrameworkMetadataFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListAssessmentFrameworkShareRequestsResponseFilterSensitiveLog = (
  obj: ListAssessmentFrameworkShareRequestsResponse
): any => ({
  ...obj,
  ...(obj.assessmentFrameworkShareRequests && {
    assessmentFrameworkShareRequests: obj.assessmentFrameworkShareRequests.map((item) =>
      AssessmentFrameworkShareRequestFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const ListAssessmentReportsResponseFilterSensitiveLog = (obj: ListAssessmentReportsResponse): any => ({
  ...obj,
  ...(obj.assessmentReports && {
    assessmentReports: obj.assessmentReports.map((item) => AssessmentReportMetadataFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListAssessmentsResponseFilterSensitiveLog = (obj: ListAssessmentsResponse): any => ({
  ...obj,
  ...(obj.assessmentMetadata && {
    assessmentMetadata: obj.assessmentMetadata.map((item) => AssessmentMetadataItemFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const NotificationFilterSensitiveLog = (obj: Notification): any => ({
  ...obj,
  ...(obj.assessmentName && { assessmentName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListNotificationsResponseFilterSensitiveLog = (obj: ListNotificationsResponse): any => ({
  ...obj,
  ...(obj.notifications && { notifications: obj.notifications.map((item) => NotificationFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const StartAssessmentFrameworkShareResponseFilterSensitiveLog = (
  obj: StartAssessmentFrameworkShareResponse
): any => ({
  ...obj,
  ...(obj.assessmentFrameworkShareRequest && {
    assessmentFrameworkShareRequest: AssessmentFrameworkShareRequestFilterSensitiveLog(
      obj.assessmentFrameworkShareRequest
    ),
  }),
});

/**
 * @internal
 */
export const UpdateAssessmentRequestFilterSensitiveLog = (obj: UpdateAssessmentRequest): any => ({
  ...obj,
  ...(obj.assessmentName && { assessmentName: SENSITIVE_STRING }),
  ...(obj.assessmentDescription && { assessmentDescription: SENSITIVE_STRING }),
  ...(obj.scope && { scope: SENSITIVE_STRING }),
  ...(obj.assessmentReportsDestination && { assessmentReportsDestination: SENSITIVE_STRING }),
  ...(obj.roles && { roles: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAssessmentResponseFilterSensitiveLog = (obj: UpdateAssessmentResponse): any => ({
  ...obj,
  ...(obj.assessment && { assessment: AssessmentFilterSensitiveLog(obj.assessment) }),
});

/**
 * @internal
 */
export const UpdateAssessmentControlRequestFilterSensitiveLog = (obj: UpdateAssessmentControlRequest): any => ({
  ...obj,
  ...(obj.commentBody && { commentBody: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAssessmentControlResponseFilterSensitiveLog = (obj: UpdateAssessmentControlResponse): any => ({
  ...obj,
  ...(obj.control && { control: AssessmentControlFilterSensitiveLog(obj.control) }),
});

/**
 * @internal
 */
export const UpdateAssessmentControlSetStatusRequestFilterSensitiveLog = (
  obj: UpdateAssessmentControlSetStatusRequest
): any => ({
  ...obj,
  ...(obj.comment && { comment: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAssessmentControlSetStatusResponseFilterSensitiveLog = (
  obj: UpdateAssessmentControlSetStatusResponse
): any => ({
  ...obj,
  ...(obj.controlSet && { controlSet: AssessmentControlSetFilterSensitiveLog(obj.controlSet) }),
});

/**
 * @internal
 */
export const UpdateAssessmentFrameworkRequestFilterSensitiveLog = (obj: UpdateAssessmentFrameworkRequest): any => ({
  ...obj,
  ...(obj.complianceType && { complianceType: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAssessmentFrameworkResponseFilterSensitiveLog = (obj: UpdateAssessmentFrameworkResponse): any => ({
  ...obj,
  ...(obj.framework && { framework: FrameworkFilterSensitiveLog(obj.framework) }),
});

/**
 * @internal
 */
export const UpdateAssessmentFrameworkShareResponseFilterSensitiveLog = (
  obj: UpdateAssessmentFrameworkShareResponse
): any => ({
  ...obj,
  ...(obj.assessmentFrameworkShareRequest && {
    assessmentFrameworkShareRequest: AssessmentFrameworkShareRequestFilterSensitiveLog(
      obj.assessmentFrameworkShareRequest
    ),
  }),
});

/**
 * @internal
 */
export const UpdateAssessmentStatusResponseFilterSensitiveLog = (obj: UpdateAssessmentStatusResponse): any => ({
  ...obj,
  ...(obj.assessment && { assessment: AssessmentFilterSensitiveLog(obj.assessment) }),
});

/**
 * @internal
 */
export const UpdateControlRequestFilterSensitiveLog = (obj: UpdateControlRequest): any => ({
  ...obj,
  ...(obj.testingInformation && { testingInformation: SENSITIVE_STRING }),
  ...(obj.actionPlanTitle && { actionPlanTitle: SENSITIVE_STRING }),
  ...(obj.actionPlanInstructions && { actionPlanInstructions: SENSITIVE_STRING }),
  ...(obj.controlMappingSources && {
    controlMappingSources: obj.controlMappingSources.map((item) => ControlMappingSourceFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateControlResponseFilterSensitiveLog = (obj: UpdateControlResponse): any => ({
  ...obj,
  ...(obj.control && { control: ControlFilterSensitiveLog(obj.control) }),
});

/**
 * @internal
 */
export const UpdateSettingsRequestFilterSensitiveLog = (obj: UpdateSettingsRequest): any => ({
  ...obj,
  ...(obj.defaultAssessmentReportsDestination && { defaultAssessmentReportsDestination: SENSITIVE_STRING }),
  ...(obj.defaultProcessOwners && { defaultProcessOwners: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateSettingsResponseFilterSensitiveLog = (obj: UpdateSettingsResponse): any => ({
  ...obj,
  ...(obj.settings && { settings: SettingsFilterSensitiveLog(obj.settings) }),
});
