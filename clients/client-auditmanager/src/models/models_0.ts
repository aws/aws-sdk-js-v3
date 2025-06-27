// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { AuditManagerServiceException as __BaseException } from "./AuditManagerServiceException";

/**
 * <p> Your account isn't registered with Audit Manager. Check the delegated
 *          administrator setup on the Audit Manager settings page, and try again. </p>
 * @public
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
 * <p> The wrapper of Amazon Web Services account details, such as account ID or email address.
 *       </p>
 * @public
 */
export interface AWSAccount {
  /**
   * <p> The identifier for the Amazon Web Services account. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p> The email address that's associated with the Amazon Web Services account. </p>
   * @public
   */
  emailAddress?: string | undefined;

  /**
   * <p> The name of the Amazon Web Services account. </p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p> A comment that's posted by a user on a control. This includes the author's name, the
 *          comment text, and a timestamp. </p>
 * @public
 */
export interface ControlComment {
  /**
   * <p> The name of the user who authored the comment. </p>
   * @public
   */
  authorName?: string | undefined;

  /**
   * <p> The body text of a control comment. </p>
   * @public
   */
  commentBody?: string | undefined;

  /**
   * <p> The time when the comment was posted. </p>
   * @public
   */
  postedDate?: Date | undefined;
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
 * <p> The control entity that represents a standard control or a custom control in an Audit Manager assessment. </p>
 * @public
 */
export interface AssessmentControl {
  /**
   * <p> The identifier for the control. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p> The name of the control. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The description of the control. </p>
   *
   * @deprecated
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The status of the control. </p>
   * @public
   */
  status?: ControlStatus | undefined;

  /**
   * <p> The response of the control. </p>
   * @public
   */
  response?: ControlResponse | undefined;

  /**
   * <p> The list of comments that's attached to the control. </p>
   * @public
   */
  comments?: ControlComment[] | undefined;

  /**
   * <p> The list of data sources for the evidence. </p>
   * @public
   */
  evidenceSources?: string[] | undefined;

  /**
   * <p> The amount of evidence that's collected for the control. </p>
   * @public
   */
  evidenceCount?: number | undefined;

  /**
   * <p> The amount of evidence in the assessment report. </p>
   * @public
   */
  assessmentReportEvidenceCount?: number | undefined;
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
 * <p> The assignment of a control set to a delegate for review. </p>
 * @public
 */
export interface Delegation {
  /**
   * <p> The unique identifier for the delegation. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p> The name of the assessment that's associated with the delegation. </p>
   * @public
   */
  assessmentName?: string | undefined;

  /**
   * <p> The identifier for the assessment that's associated with the delegation. </p>
   * @public
   */
  assessmentId?: string | undefined;

  /**
   * <p> The status of the delegation. </p>
   * @public
   */
  status?: DelegationStatus | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the IAM role. </p>
   * @public
   */
  roleArn?: string | undefined;

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
   * @public
   */
  roleType?: RoleType | undefined;

  /**
   * <p> Specifies when the delegation was created. </p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p> Specifies when the delegation was last updated. </p>
   * @public
   */
  lastUpdated?: Date | undefined;

  /**
   * <p> The identifier for the control set that's associated with the delegation. </p>
   * @public
   */
  controlSetId?: string | undefined;

  /**
   * <p> The comment that's related to the delegation. </p>
   * @public
   */
  comment?: string | undefined;

  /**
   * <p> The user or role that created the delegation. </p>
   * @public
   */
  createdBy?: string | undefined;
}

/**
 * <p> The wrapper that contains the Audit Manager role information of the current user.
 *          This includes the role type and IAM Amazon Resource Name (ARN). </p>
 * @public
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
   * @public
   */
  roleType: RoleType | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the IAM role. </p>
   * @public
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
 * <p> Represents a set of controls in an Audit Manager assessment. </p>
 * @public
 */
export interface AssessmentControlSet {
  /**
   * <p> The identifier of the control set in the assessment. This is the control set name in a
   *          plain string format. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p> The description for the control set. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The current status of the control set. </p>
   * @public
   */
  status?: ControlSetStatus | undefined;

  /**
   * <p> The roles that are associated with the control set. </p>
   * @public
   */
  roles?: Role[] | undefined;

  /**
   * <p> The list of controls that's contained with the control set. </p>
   * @public
   */
  controls?: AssessmentControl[] | undefined;

  /**
   * <p> The delegations that are associated with the control set. </p>
   * @public
   */
  delegations?: Delegation[] | undefined;

  /**
   * <p> The total number of evidence objects that are retrieved automatically for the control
   *          set. </p>
   * @public
   */
  systemEvidenceCount?: number | undefined;

  /**
   * <p> The total number of evidence objects that are uploaded manually to the control set.
   *       </p>
   * @public
   */
  manualEvidenceCount?: number | undefined;
}

/**
 * <p> The metadata of a framework, such as the name, ID, or description. </p>
 * @public
 */
export interface FrameworkMetadata {
  /**
   * <p> The name of the framework. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The description of the framework. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The logo that's associated with the framework. </p>
   * @public
   */
  logo?: string | undefined;

  /**
   * <p> The compliance standard that's associated with the framework. For example, this could
   *          be PCI DSS or HIPAA. </p>
   * @public
   */
  complianceType?: string | undefined;
}

/**
 * <p> The file used to structure and automate Audit Manager assessments for a given
 *          compliance standard. </p>
 * @public
 */
export interface AssessmentFramework {
  /**
   * <p> The unique identifier for the framework. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the framework. </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p> The metadata of a framework, such as the name, ID, or description. </p>
   * @public
   */
  metadata?: FrameworkMetadata | undefined;

  /**
   * <p> The control sets that are associated with the framework. </p>
   * @public
   */
  controlSets?: AssessmentControlSet[] | undefined;
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
 * <p> The location where Audit Manager saves assessment reports for the given
 *          assessment. </p>
 * @public
 */
export interface AssessmentReportsDestination {
  /**
   * <p> The destination type, such as Amazon S3. </p>
   * @public
   */
  destinationType?: AssessmentReportDestinationType | undefined;

  /**
   * <p> The destination bucket where Audit Manager stores assessment reports. </p>
   * @public
   */
  destination?: string | undefined;
}

/**
 * <p> An Amazon Web Services service such as Amazon S3 or CloudTrail.
 *       </p>
 *          <p>For an example of how to find an Amazon Web Services service name and how to define it in
 *          your assessment scope, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetServicesInScope.html#API_GetServicesInScope_Example_2">Finding an Amazon Web Services service name to use in your assessment scope</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetServicesInScope.html#API_GetServicesInScope_Example_3">Defining an Amazon Web Services service name in your assessment scope</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface AWSService {
  /**
   * <p> The name of the Amazon Web Services service. </p>
   * @public
   */
  serviceName?: string | undefined;
}

/**
 * <p> The wrapper that contains the Amazon Web Services accounts that are in
 *          scope for the assessment. </p>
 *          <note>
 *             <p>You no longer need to specify which Amazon Web Services services are in scope when you
 *             create or update an assessment. Audit Manager infers the services in scope by
 *             examining your assessment controls and their data sources, and then mapping this
 *             information to the relevant Amazon Web Services services. </p>
 *             <p>If an underlying data source changes for your assessment, we automatically update the
 *             services scope as needed to reflect the correct Amazon Web Services services. This
 *             ensures that your assessment collects accurate and comprehensive evidence about all of
 *             the relevant services in your AWS environment.</p>
 *          </note>
 * @public
 */
export interface Scope {
  /**
   * <p> The Amazon Web Services accounts that are included in the scope of the assessment.
   *       </p>
   * @public
   */
  awsAccounts?: AWSAccount[] | undefined;

  /**
   * <p> The Amazon Web Services services that are included in the scope of the assessment.
   *       </p>
   *          <important>
   *             <p>This API parameter is no longer supported. If you use this parameter to specify one
   *             or more Amazon Web Services services, Audit Manager ignores this input. Instead, the
   *             value for <code>awsServices</code> will show as empty.</p>
   *          </important>
   *
   * @deprecated
   * @public
   */
  awsServices?: AWSService[] | undefined;
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
 * <p> The metadata that's associated with the specified assessment. </p>
 * @public
 */
export interface AssessmentMetadata {
  /**
   * <p> The name of the assessment. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The unique identifier for the assessment. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p> The description of the assessment. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The name of the compliance standard that's related to the assessment, such as PCI-DSS.
   *       </p>
   * @public
   */
  complianceType?: string | undefined;

  /**
   * <p> The overall status of the assessment. </p>
   * @public
   */
  status?: AssessmentStatus | undefined;

  /**
   * <p> The destination that evidence reports are stored in for the assessment. </p>
   * @public
   */
  assessmentReportsDestination?: AssessmentReportsDestination | undefined;

  /**
   * <p> The wrapper of Amazon Web Services accounts and services that are in scope for the
   *          assessment. </p>
   * @public
   */
  scope?: Scope | undefined;

  /**
   * <p> The roles that are associated with the assessment. </p>
   * @public
   */
  roles?: Role[] | undefined;

  /**
   * <p> The delegations that are associated with the assessment. </p>
   * @public
   */
  delegations?: Delegation[] | undefined;

  /**
   * <p> Specifies when the assessment was created. </p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p> The time of the most recent update. </p>
   * @public
   */
  lastUpdated?: Date | undefined;
}

/**
 * <p> An entity that defines the scope of audit evidence collected by Audit Manager.
 *          An Audit Manager assessment is an implementation of an Audit Manager framework. </p>
 * @public
 */
export interface Assessment {
  /**
   * <p> The Amazon Resource Name (ARN) of the assessment. </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p> The Amazon Web Services account that's associated with the assessment. </p>
   * @public
   */
  awsAccount?: AWSAccount | undefined;

  /**
   * <p> The metadata for the assessment. </p>
   * @public
   */
  metadata?: AssessmentMetadata | undefined;

  /**
   * <p> The framework that the assessment was created from. </p>
   * @public
   */
  framework?: AssessmentFramework | undefined;

  /**
   * <p> The tags that are associated with the assessment. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p> The folder where Audit Manager stores evidence for an assessment. </p>
 * @public
 */
export interface AssessmentEvidenceFolder {
  /**
   * <p> The name of the evidence folder. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The date when the first evidence was added to the evidence folder. </p>
   * @public
   */
  date?: Date | undefined;

  /**
   * <p> The identifier for the assessment. </p>
   * @public
   */
  assessmentId?: string | undefined;

  /**
   * <p> The identifier for the control set. </p>
   * @public
   */
  controlSetId?: string | undefined;

  /**
   * <p> The unique identifier for the control. </p>
   * @public
   */
  controlId?: string | undefined;

  /**
   * <p> The identifier for the folder that the evidence is stored in. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p> The Amazon Web Services service that the evidence was collected from. </p>
   * @public
   */
  dataSource?: string | undefined;

  /**
   * <p> The name of the user who created the evidence folder. </p>
   * @public
   */
  author?: string | undefined;

  /**
   * <p> The total amount of evidence in the evidence folder. </p>
   * @public
   */
  totalEvidence?: number | undefined;

  /**
   * <p> The total count of evidence that's included in the assessment report. </p>
   * @public
   */
  assessmentReportSelectionCount?: number | undefined;

  /**
   * <p> The name of the control. </p>
   * @public
   */
  controlName?: string | undefined;

  /**
   * <p> The amount of evidence that's included in the evidence folder. </p>
   * @public
   */
  evidenceResourcesIncludedCount?: number | undefined;

  /**
   * <p> The number of evidence that falls under the configuration data category. This evidence
   *          is collected from configuration snapshots of other Amazon Web Services services such as
   *             Amazon EC2, Amazon S3, or IAM. </p>
   * @public
   */
  evidenceByTypeConfigurationDataCount?: number | undefined;

  /**
   * <p> The number of evidence that falls under the manual category. This evidence is imported
   *          manually. </p>
   * @public
   */
  evidenceByTypeManualCount?: number | undefined;

  /**
   * <p> The number of evidence that falls under the compliance check category. This evidence is
   *          collected from Config or Security Hub. </p>
   * @public
   */
  evidenceByTypeComplianceCheckCount?: number | undefined;

  /**
   * <p> The total number of issues that were reported directly from Security Hub,
   *             Config, or both. </p>
   * @public
   */
  evidenceByTypeComplianceCheckIssuesCount?: number | undefined;

  /**
   * <p> The number of evidence that falls under the user activity category. This evidence is
   *          collected from CloudTrail logs. </p>
   * @public
   */
  evidenceByTypeUserActivityCount?: number | undefined;

  /**
   * <p> The total number of Amazon Web Services resources that were assessed to generate the
   *          evidence. </p>
   * @public
   */
  evidenceAwsServiceSourceCount?: number | undefined;
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
 * <p> The metadata that's associated with a standard framework or a custom framework. </p>
 * @public
 */
export interface AssessmentFrameworkMetadata {
  /**
   * <p> The Amazon Resource Name (ARN) of the framework. </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p> The unique identifier for the framework. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p> The framework type, such as a standard framework or a custom framework. </p>
   * @public
   */
  type?: FrameworkType | undefined;

  /**
   * <p> The name of the framework. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The description of the framework. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The logo that's associated with the framework. </p>
   * @public
   */
  logo?: string | undefined;

  /**
   * <p> The compliance type that the new custom framework supports, such as CIS or HIPAA.
   *       </p>
   * @public
   */
  complianceType?: string | undefined;

  /**
   * <p> The number of controls that are associated with the framework. </p>
   * @public
   */
  controlsCount?: number | undefined;

  /**
   * <p> The number of control sets that are associated with the framework. </p>
   * @public
   */
  controlSetsCount?: number | undefined;

  /**
   * <p> The time when the framework was created. </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p> The time when the framework was most recently updated. </p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
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
 * <p> Represents a share request for a custom framework in Audit Manager. </p>
 * @public
 */
export interface AssessmentFrameworkShareRequest {
  /**
   * <p> The unique identifier for the share request. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The unique identifier for the shared custom framework. </p>
   * @public
   */
  frameworkId?: string | undefined;

  /**
   * <p> The name of the custom framework that the share request is for. </p>
   * @public
   */
  frameworkName?: string | undefined;

  /**
   * <p>The description of the shared custom framework.</p>
   * @public
   */
  frameworkDescription?: string | undefined;

  /**
   * <p> The status of the share request. </p>
   * @public
   */
  status?: ShareRequestStatus | undefined;

  /**
   * <p> The Amazon Web Services account of the sender. </p>
   * @public
   */
  sourceAccount?: string | undefined;

  /**
   * <p> The Amazon Web Services account of the recipient. </p>
   * @public
   */
  destinationAccount?: string | undefined;

  /**
   * <p> The Amazon Web Services Region of the recipient. </p>
   * @public
   */
  destinationRegion?: string | undefined;

  /**
   * <p> The time when the share request expires. </p>
   * @public
   */
  expirationTime?: Date | undefined;

  /**
   * <p> The time when the share request was created. </p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p> Specifies when the share request was last updated. </p>
   * @public
   */
  lastUpdated?: Date | undefined;

  /**
   * <p> An optional comment from the sender about the share request. </p>
   * @public
   */
  comment?: string | undefined;

  /**
   * <p>The number of standard controls that are part of the shared custom framework. </p>
   * @public
   */
  standardControlsCount?: number | undefined;

  /**
   * <p>The number of custom controls that are part of the shared custom framework.</p>
   * @public
   */
  customControlsCount?: number | undefined;

  /**
   * <p>The compliance type that the shared custom framework supports, such as CIS or
   *          HIPAA.</p>
   * @public
   */
  complianceType?: string | undefined;
}

/**
 * <p> A metadata object that's associated with an assessment in Audit Manager.
 *       </p>
 * @public
 */
export interface AssessmentMetadataItem {
  /**
   * <p> The name of the assessment. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The unique identifier for the assessment. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p> The name of the compliance standard that's related to the assessment, such as PCI-DSS.
   *       </p>
   * @public
   */
  complianceType?: string | undefined;

  /**
   * <p> The current status of the assessment. </p>
   * @public
   */
  status?: AssessmentStatus | undefined;

  /**
   * <p> The roles that are associated with the assessment. </p>
   * @public
   */
  roles?: Role[] | undefined;

  /**
   * <p> The delegations that are associated with the assessment. </p>
   * @public
   */
  delegations?: Delegation[] | undefined;

  /**
   * <p> Specifies when the assessment was created. </p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p> The time of the most recent update. </p>
   * @public
   */
  lastUpdated?: Date | undefined;
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
 * <p> A finalized document that's generated from an Audit Manager assessment. These
 *          reports summarize the relevant evidence that was collected for your audit, and link to the
 *          relevant evidence folders. These evidence folders are named and organized according to the
 *          controls that are specified in your assessment. </p>
 * @public
 */
export interface AssessmentReport {
  /**
   * <p> The unique identifier for the assessment report. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p> The name that's given to the assessment report. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The description of the specified assessment report. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The identifier for the specified Amazon Web Services account. </p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p> The identifier for the specified assessment. </p>
   * @public
   */
  assessmentId?: string | undefined;

  /**
   * <p> The name of the associated assessment. </p>
   * @public
   */
  assessmentName?: string | undefined;

  /**
   * <p> The name of the user who created the assessment report. </p>
   * @public
   */
  author?: string | undefined;

  /**
   * <p> The current status of the specified assessment report. </p>
   * @public
   */
  status?: AssessmentReportStatus | undefined;

  /**
   * <p> Specifies when the assessment report was created. </p>
   * @public
   */
  creationTime?: Date | undefined;
}

/**
 * <p> An error entity for assessment report evidence errors. This is used to provide more
 *          meaningful errors than a simple string message. </p>
 * @public
 */
export interface AssessmentReportEvidenceError {
  /**
   * <p> The identifier for the evidence. </p>
   * @public
   */
  evidenceId?: string | undefined;

  /**
   * <p> The error code that was returned. </p>
   * @public
   */
  errorCode?: string | undefined;

  /**
   * <p> The error message that was returned. </p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * <p> The metadata objects that are associated with the specified assessment report. </p>
 * @public
 */
export interface AssessmentReportMetadata {
  /**
   * <p> The unique identifier for the assessment report. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p> The name of the assessment report. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The description of the assessment report. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The unique identifier for the associated assessment. </p>
   * @public
   */
  assessmentId?: string | undefined;

  /**
   * <p>The name of the associated assessment. </p>
   * @public
   */
  assessmentName?: string | undefined;

  /**
   * <p> The name of the user who created the assessment report. </p>
   * @public
   */
  author?: string | undefined;

  /**
   * <p> The current status of the assessment report. </p>
   * @public
   */
  status?: AssessmentReportStatus | undefined;

  /**
   * <p> Specifies when the assessment report was created. </p>
   * @public
   */
  creationTime?: Date | undefined;
}

/**
 * @public
 */
export interface AssociateAssessmentReportEvidenceFolderRequest {
  /**
   * <p> The identifier for the assessment. </p>
   * @public
   */
  assessmentId: string | undefined;

  /**
   * <p> The identifier for the folder that the evidence is stored in. </p>
   * @public
   */
  evidenceFolderId: string | undefined;
}

/**
 * @public
 */
export interface AssociateAssessmentReportEvidenceFolderResponse {}

/**
 * <p> An internal service error occurred during the processing of your request. Try again
 *          later. </p>
 * @public
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
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p> The unique identifier for the resource. </p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p> The type of resource that's affected by the error. </p>
   * @public
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
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p> The name of the validation error. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The body of the error message. </p>
   * @public
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
 * <p> The request has invalid or missing parameters. </p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p> The reason the request failed validation. </p>
   * @public
   */
  reason?: ValidationExceptionReason | undefined;

  /**
   * <p> The fields that caused the error, if applicable. </p>
   * @public
   */
  fields?: ValidationExceptionField[] | undefined;

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
   * <p> The identifier for the assessment. </p>
   * @public
   */
  assessmentId: string | undefined;

  /**
   * <p> The identifier for the folder that the evidence is stored in. </p>
   * @public
   */
  evidenceFolderId: string | undefined;

  /**
   * <p> The list of evidence identifiers. </p>
   * @public
   */
  evidenceIds: string[] | undefined;
}

/**
 * @public
 */
export interface BatchAssociateAssessmentReportEvidenceResponse {
  /**
   * <p> The list of evidence identifiers. </p>
   * @public
   */
  evidenceIds?: string[] | undefined;

  /**
   * <p> A list of errors that the <code>BatchAssociateAssessmentReportEvidence</code> API
   *          returned. </p>
   * @public
   */
  errors?: AssessmentReportEvidenceError[] | undefined;
}

/**
 * <p> A collection of attributes that's used to create a delegation for an assessment in
 *             Audit Manager. </p>
 * @public
 */
export interface CreateDelegationRequest {
  /**
   * <p> A comment that's related to the delegation request. </p>
   * @public
   */
  comment?: string | undefined;

  /**
   * <p> The unique identifier for the control set. </p>
   * @public
   */
  controlSetId?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the IAM role. </p>
   * @public
   */
  roleArn?: string | undefined;

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
   * @public
   */
  roleType?: RoleType | undefined;
}

/**
 * @public
 */
export interface BatchCreateDelegationByAssessmentRequest {
  /**
   * <p> The API request to batch create delegations in Audit Manager. </p>
   * @public
   */
  createDelegationRequests: CreateDelegationRequest[] | undefined;

  /**
   * <p> The identifier for the assessment. </p>
   * @public
   */
  assessmentId: string | undefined;
}

/**
 * <p> An error entity for the <code>BatchCreateDelegationByAssessment</code> API. This is
 *          used to provide more meaningful errors than a simple string message. </p>
 * @public
 */
export interface BatchCreateDelegationByAssessmentError {
  /**
   * <p> The API request to batch create delegations in Audit Manager. </p>
   * @public
   */
  createDelegationRequest?: CreateDelegationRequest | undefined;

  /**
   * <p> The error code that the <code>BatchCreateDelegationByAssessment</code> API returned.
   *       </p>
   * @public
   */
  errorCode?: string | undefined;

  /**
   * <p> The error message that the <code>BatchCreateDelegationByAssessment</code> API returned.
   *       </p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateDelegationByAssessmentResponse {
  /**
   * <p> The delegations that are associated with the assessment. </p>
   * @public
   */
  delegations?: Delegation[] | undefined;

  /**
   * <p> A list of errors that the <code>BatchCreateDelegationByAssessment</code> API returned.
   *       </p>
   * @public
   */
  errors?: BatchCreateDelegationByAssessmentError[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteDelegationByAssessmentRequest {
  /**
   * <p> The identifiers for the delegations. </p>
   * @public
   */
  delegationIds: string[] | undefined;

  /**
   * <p> The identifier for the assessment. </p>
   * @public
   */
  assessmentId: string | undefined;
}

/**
 * <p> An error entity for the <code>BatchDeleteDelegationByAssessment</code> API. This is
 *          used to provide more meaningful errors than a simple string message. </p>
 * @public
 */
export interface BatchDeleteDelegationByAssessmentError {
  /**
   * <p> The identifier for the delegation. </p>
   * @public
   */
  delegationId?: string | undefined;

  /**
   * <p> The error code that the <code>BatchDeleteDelegationByAssessment</code> API returned.
   *       </p>
   * @public
   */
  errorCode?: string | undefined;

  /**
   * <p> The error message that the <code>BatchDeleteDelegationByAssessment</code> API returned.
   *       </p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteDelegationByAssessmentResponse {
  /**
   * <p> A list of errors that the <code>BatchDeleteDelegationByAssessment</code> API returned.
   *       </p>
   * @public
   */
  errors?: BatchDeleteDelegationByAssessmentError[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateAssessmentReportEvidenceRequest {
  /**
   * <p> The identifier for the assessment. </p>
   * @public
   */
  assessmentId: string | undefined;

  /**
   * <p> The identifier for the folder that the evidence is stored in. </p>
   * @public
   */
  evidenceFolderId: string | undefined;

  /**
   * <p> The list of evidence identifiers. </p>
   * @public
   */
  evidenceIds: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateAssessmentReportEvidenceResponse {
  /**
   * <p> The identifier for the evidence. </p>
   * @public
   */
  evidenceIds?: string[] | undefined;

  /**
   * <p> A list of errors that the <code>BatchDisassociateAssessmentReportEvidence</code> API
   *          returned. </p>
   * @public
   */
  errors?: AssessmentReportEvidenceError[] | undefined;
}

/**
 * <p> Evidence that's manually added to a control in Audit Manager.
 *             <code>manualEvidence</code> can be one of the following: <code>evidenceFileName</code>,
 *             <code>s3ResourcePath</code>, or <code>textResponse</code>.</p>
 * @public
 */
export interface ManualEvidence {
  /**
   * <p>The S3 URL of the object that's imported as manual evidence. </p>
   * @public
   */
  s3ResourcePath?: string | undefined;

  /**
   * <p>The plain text response that's entered and saved as manual evidence.</p>
   * @public
   */
  textResponse?: string | undefined;

  /**
   * <p>The name of the file that's uploaded as manual evidence. This name is populated using
   *          the <code>evidenceFileName</code> value from the <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetEvidenceFileUploadUrl.html">
   *                <code>GetEvidenceFileUploadUrl</code>
   *             </a> API response.</p>
   * @public
   */
  evidenceFileName?: string | undefined;
}

/**
 * @public
 */
export interface BatchImportEvidenceToAssessmentControlRequest {
  /**
   * <p> The identifier for the assessment. </p>
   * @public
   */
  assessmentId: string | undefined;

  /**
   * <p> The identifier for the control set. </p>
   * @public
   */
  controlSetId: string | undefined;

  /**
   * <p> The identifier for the control. </p>
   * @public
   */
  controlId: string | undefined;

  /**
   * <p> The list of manual evidence objects. </p>
   * @public
   */
  manualEvidence: ManualEvidence[] | undefined;
}

/**
 * <p> An error entity for the <code>BatchImportEvidenceToAssessmentControl</code> API. This
 *          is used to provide more meaningful errors than a simple string message. </p>
 * @public
 */
export interface BatchImportEvidenceToAssessmentControlError {
  /**
   * <p> Manual evidence that can't be collected automatically by Audit Manager. </p>
   * @public
   */
  manualEvidence?: ManualEvidence | undefined;

  /**
   * <p> The error code that the <code>BatchImportEvidenceToAssessmentControl</code> API
   *          returned. </p>
   * @public
   */
  errorCode?: string | undefined;

  /**
   * <p> The error message that the <code>BatchImportEvidenceToAssessmentControl</code> API
   *          returned. </p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchImportEvidenceToAssessmentControlResponse {
  /**
   * <p> A list of errors that the <code>BatchImportEvidenceToAssessmentControl</code> API
   *          returned. </p>
   * @public
   */
  errors?: BatchImportEvidenceToAssessmentControlError[] | undefined;
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
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
   * <p> The name of the assessment to be created. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The optional description of the assessment to be created. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The assessment report storage destination for the assessment that's being created.
   *       </p>
   * @public
   */
  assessmentReportsDestination: AssessmentReportsDestination | undefined;

  /**
   * <p> The wrapper that contains the Amazon Web Services accounts that are in
   *          scope for the assessment. </p>
   *          <note>
   *             <p>You no longer need to specify which Amazon Web Services services are in scope when you
   *             create or update an assessment. Audit Manager infers the services in scope by
   *             examining your assessment controls and their data sources, and then mapping this
   *             information to the relevant Amazon Web Services services. </p>
   *             <p>If an underlying data source changes for your assessment, we automatically update the
   *             services scope as needed to reflect the correct Amazon Web Services services. This
   *             ensures that your assessment collects accurate and comprehensive evidence about all of
   *             the relevant services in your AWS environment.</p>
   *          </note>
   * @public
   */
  scope: Scope | undefined;

  /**
   * <p> The list of roles for the assessment. </p>
   * @public
   */
  roles: Role[] | undefined;

  /**
   * <p> The identifier for the framework that the assessment will be created from. </p>
   * @public
   */
  frameworkId: string | undefined;

  /**
   * <p> The tags that are associated with the assessment. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAssessmentResponse {
  /**
   * <p> An entity that defines the scope of audit evidence collected by Audit Manager.
   *          An Audit Manager assessment is an implementation of an Audit Manager framework. </p>
   * @public
   */
  assessment?: Assessment | undefined;
}

/**
 * <p>You've reached your account quota for this resource type. To perform the requested
 *          action, delete some existing resources or <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">request a quota increase</a> from
 *          the Service Quotas console. For a list of Audit Manager service quotas, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/service-quotas.html">Quotas and
 *             restrictions for Audit Manager</a>.</p>
 * @public
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
 * @public
 */
export interface CreateAssessmentFrameworkControl {
  /**
   * <p> The unique identifier of the control. </p>
   * @public
   */
  id: string | undefined;
}

/**
 * <p> A <code>controlSet</code> entity that represents a collection of controls in Audit Manager. This doesn't contain the control set ID. </p>
 * @public
 */
export interface CreateAssessmentFrameworkControlSet {
  /**
   * <p> The name of the control set. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The list of controls within the control set. This doesn't contain the control set ID.
   *       </p>
   * @public
   */
  controls?: CreateAssessmentFrameworkControl[] | undefined;
}

/**
 * @public
 */
export interface CreateAssessmentFrameworkRequest {
  /**
   * <p> The name of the new custom framework. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> An optional description for the new custom framework. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The compliance type that the new custom framework supports, such as CIS or HIPAA.
   *       </p>
   * @public
   */
  complianceType?: string | undefined;

  /**
   * <p> The control sets that are associated with the framework. </p>
   * @public
   */
  controlSets: CreateAssessmentFrameworkControlSet[] | undefined;

  /**
   * <p> The tags that are associated with the framework. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
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
 * @public
 */
export interface SourceKeyword {
  /**
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
   * @public
   */
  keywordInputType?: KeywordInputType | undefined;

  /**
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
   *                   review the Amazon Web Services service prefix and action names in the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html">Service Authorization Reference</a>.</p>
   *                </li>
   *             </ol>
   *          </important>
   * @public
   */
  keywordValue?: string | undefined;
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
  COMMON_CONTROL: "Common_Control",
  CORE_CONTROL: "Core_Control",
  MANUAL: "MANUAL",
} as const;

/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * <p> The data source that determines where Audit Manager collects evidence from for
 *          the control. </p>
 * @public
 */
export interface ControlMappingSource {
  /**
   * <p> The unique identifier for the source. </p>
   * @public
   */
  sourceId?: string | undefined;

  /**
   * <p> The name of the source. </p>
   * @public
   */
  sourceName?: string | undefined;

  /**
   * <p> The description of the source. </p>
   * @public
   */
  sourceDescription?: string | undefined;

  /**
   * <p>The setup option for the data source. This option reflects if the evidence collection
   *          method is automated or manual. If you don’t provide a value for
   *             <code>sourceSetUpOption</code>, Audit Manager automatically infers and populates
   *          the correct value based on the <code>sourceType</code> that you specify.</p>
   * @public
   */
  sourceSetUpOption?: SourceSetUpOption | undefined;

  /**
   * <p> Specifies which type of data source is used to collect evidence. </p>
   *          <ul>
   *             <li>
   *                <p>The source can be an individual data source type, such as
   *                   <code>AWS_Cloudtrail</code>, <code>AWS_Config</code>,
   *                   <code>AWS_Security_Hub</code>, <code>AWS_API_Call</code>, or <code>MANUAL</code>.
   *             </p>
   *             </li>
   *             <li>
   *                <p>The source can also be a managed grouping of data sources, such as a
   *                   <code>Core_Control</code> or a <code>Common_Control</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  sourceType?: SourceType | undefined;

  /**
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
   * @public
   */
  sourceKeyword?: SourceKeyword | undefined;

  /**
   * <p>Specifies how often evidence is collected from the control mapping source. </p>
   * @public
   */
  sourceFrequency?: SourceFrequency | undefined;

  /**
   * <p> The instructions for troubleshooting the control. </p>
   * @public
   */
  troubleshootingText?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ControlState = {
  ACTIVE: "ACTIVE",
  END_OF_SUPPORT: "END_OF_SUPPORT",
} as const;

/**
 * @public
 */
export type ControlState = (typeof ControlState)[keyof typeof ControlState];

/**
 * @public
 * @enum
 */
export const ControlType = {
  CORE: "Core",
  CUSTOM: "Custom",
  STANDARD: "Standard",
} as const;

/**
 * @public
 */
export type ControlType = (typeof ControlType)[keyof typeof ControlType];

/**
 * <p> A control in Audit Manager. </p>
 * @public
 */
export interface Control {
  /**
   * <p> The Amazon Resource Name (ARN) of the control. </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p> The unique identifier for the control. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p> Specifies whether the control is a standard control or a custom control.</p>
   * @public
   */
  type?: ControlType | undefined;

  /**
   * <p> The name of the control. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The description of the control. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The steps that you should follow to determine if the control has been satisfied.
   *       </p>
   * @public
   */
  testingInformation?: string | undefined;

  /**
   * <p> The title of the action plan for remediating the control. </p>
   * @public
   */
  actionPlanTitle?: string | undefined;

  /**
   * <p> The recommended actions to carry out if the control isn't fulfilled. </p>
   * @public
   */
  actionPlanInstructions?: string | undefined;

  /**
   * <p> The data source types that determine where Audit Manager collects evidence from for
   *          the control. </p>
   * @public
   */
  controlSources?: string | undefined;

  /**
   * <p> The data mapping sources for the control. </p>
   * @public
   */
  controlMappingSources?: ControlMappingSource[] | undefined;

  /**
   * <p> The time when the control was created. </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p> The time when the control was most recently updated. </p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p> The user or role that created the control. </p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p> The user or role that most recently updated the control. </p>
   * @public
   */
  lastUpdatedBy?: string | undefined;

  /**
   * <p> The tags associated with the control. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The state of the control. The <code>END_OF_SUPPORT</code> state is applicable to
   *          standard controls only. This state indicates that the standard control can still be used to
   *          collect evidence, but Audit Manager is no longer updating or maintaining that
   *          control.</p>
   * @public
   */
  state?: ControlState | undefined;
}

/**
 * <p> A set of controls in Audit Manager. </p>
 * @public
 */
export interface ControlSet {
  /**
   * <p> The identifier of the control set in the assessment. This is the control set name in a
   *          plain string format. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p> The name of the control set. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The list of controls within the control set. </p>
   * @public
   */
  controls?: Control[] | undefined;
}

/**
 * <p> The file that's used to structure and automate Audit Manager assessments for a
 *          given compliance standard. </p>
 * @public
 */
export interface Framework {
  /**
   * <p> The Amazon Resource Name (ARN) of the framework. </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p> The unique identifier for the framework. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p> The name of the framework. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> Specifies whether the framework is a standard framework or a custom framework.</p>
   * @public
   */
  type?: FrameworkType | undefined;

  /**
   * <p> The compliance type that the framework supports, such as CIS or HIPAA. </p>
   * @public
   */
  complianceType?: string | undefined;

  /**
   * <p> The description of the framework. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The logo that's associated with the framework. </p>
   * @public
   */
  logo?: string | undefined;

  /**
   * <p> The control data sources where Audit Manager collects evidence from.</p>
   * @public
   */
  controlSources?: string | undefined;

  /**
   * <p> The control sets that are associated with the framework. </p>
   * @public
   */
  controlSets?: ControlSet[] | undefined;

  /**
   * <p> The time when the framework was created. </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p> The time when the framework was most recently updated. </p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p> The user or role that created the framework. </p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p> The user or role that most recently updated the framework. </p>
   * @public
   */
  lastUpdatedBy?: string | undefined;

  /**
   * <p> The tags that are associated with the framework. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAssessmentFrameworkResponse {
  /**
   * <p> The name of the new framework that the <code>CreateAssessmentFramework</code> API
   *          returned. </p>
   * @public
   */
  framework?: Framework | undefined;
}

/**
 * @public
 */
export interface CreateAssessmentReportRequest {
  /**
   * <p> The name of the new assessment report. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The description of the assessment report. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The identifier for the assessment. </p>
   * @public
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
   * @public
   */
  queryStatement?: string | undefined;
}

/**
 * @public
 */
export interface CreateAssessmentReportResponse {
  /**
   * <p> The new assessment report that the <code>CreateAssessmentReport</code> API returned.
   *       </p>
   * @public
   */
  assessmentReport?: AssessmentReport | undefined;
}

/**
 * <p>The mapping attributes that determine the evidence source for a given control, along
 *          with related parameters and metadata. This doesn't contain <code>mappingID</code>. </p>
 * @public
 */
export interface CreateControlMappingSource {
  /**
   * <p> The name of the control mapping data source. </p>
   * @public
   */
  sourceName?: string | undefined;

  /**
   * <p> The description of the data source that determines where Audit Manager collects
   *          evidence from for the control. </p>
   * @public
   */
  sourceDescription?: string | undefined;

  /**
   * <p>The setup option for the data source. This option reflects if the evidence collection
   *          method is automated or manual. If you don’t provide a value for
   *             <code>sourceSetUpOption</code>, Audit Manager automatically infers and populates
   *          the correct value based on the <code>sourceType</code> that you specify.</p>
   * @public
   */
  sourceSetUpOption?: SourceSetUpOption | undefined;

  /**
   * <p> Specifies which type of data source is used to collect evidence. </p>
   *          <ul>
   *             <li>
   *                <p>The source can be an individual data source type, such as
   *                   <code>AWS_Cloudtrail</code>, <code>AWS_Config</code>,
   *                   <code>AWS_Security_Hub</code>, <code>AWS_API_Call</code>, or <code>MANUAL</code>.
   *             </p>
   *             </li>
   *             <li>
   *                <p>The source can also be a managed grouping of data sources, such as a
   *                   <code>Core_Control</code> or a <code>Common_Control</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  sourceType?: SourceType | undefined;

  /**
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
   * @public
   */
  sourceKeyword?: SourceKeyword | undefined;

  /**
   * <p>Specifies how often evidence is collected from the control mapping source. </p>
   * @public
   */
  sourceFrequency?: SourceFrequency | undefined;

  /**
   * <p> The instructions for troubleshooting the control. </p>
   * @public
   */
  troubleshootingText?: string | undefined;
}

/**
 * @public
 */
export interface CreateControlRequest {
  /**
   * <p> The name of the control. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The description of the control. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The steps to follow to determine if the control is satisfied. </p>
   * @public
   */
  testingInformation?: string | undefined;

  /**
   * <p> The title of the action plan for remediating the control. </p>
   * @public
   */
  actionPlanTitle?: string | undefined;

  /**
   * <p> The recommended actions to carry out if the control isn't fulfilled. </p>
   * @public
   */
  actionPlanInstructions?: string | undefined;

  /**
   * <p> The data mapping sources for the control. </p>
   * @public
   */
  controlMappingSources: CreateControlMappingSource[] | undefined;

  /**
   * <p> The tags that are associated with the control. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateControlResponse {
  /**
   * <p> The new control that the <code>CreateControl</code> API returned. </p>
   * @public
   */
  control?: Control | undefined;
}

/**
 * @public
 */
export interface DeleteAssessmentRequest {
  /**
   * <p> The identifier for the assessment. </p>
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
   * <p> The identifier for the custom framework. </p>
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
   * <p>The unique identifier for the share request to be deleted.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>Specifies whether the share request is a sent request or a received request.</p>
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
   * <p> The unique identifier for the assessment. </p>
   * @public
   */
  assessmentId: string | undefined;

  /**
   * <p> The unique identifier for the assessment report. </p>
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
   * <p> The unique identifier for the control. </p>
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
   * <p> The registration status of the account. </p>
   * @public
   */
  status?: AccountStatus | undefined;
}

/**
 * @public
 */
export interface DeregisterOrganizationAdminAccountRequest {
  /**
   * <p> The identifier for the administrator account. </p>
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
   * <p> The unique identifier for the assessment. </p>
   * @public
   */
  assessmentId: string | undefined;

  /**
   * <p> The unique identifier for the folder that the evidence is stored in. </p>
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
   * <p> The status of the Amazon Web Services account. </p>
   * @public
   */
  status?: AccountStatus | undefined;
}

/**
 * @public
 */
export interface GetAssessmentRequest {
  /**
   * <p>The unique identifier for the assessment. </p>
   * @public
   */
  assessmentId: string | undefined;
}

/**
 * @public
 */
export interface GetAssessmentResponse {
  /**
   * <p> An entity that defines the scope of audit evidence collected by Audit Manager.
   *          An Audit Manager assessment is an implementation of an Audit Manager framework. </p>
   * @public
   */
  assessment?: Assessment | undefined;

  /**
   * <p> The wrapper that contains the Audit Manager role information of the current user.
   *          This includes the role type and IAM Amazon Resource Name (ARN). </p>
   * @public
   */
  userRole?: Role | undefined;
}

/**
 * @public
 */
export interface GetAssessmentFrameworkRequest {
  /**
   * <p> The identifier for the framework. </p>
   * @public
   */
  frameworkId: string | undefined;
}

/**
 * @public
 */
export interface GetAssessmentFrameworkResponse {
  /**
   * <p> The framework that the <code>GetAssessmentFramework</code> API returned. </p>
   * @public
   */
  framework?: Framework | undefined;
}

/**
 * @public
 */
export interface GetAssessmentReportUrlRequest {
  /**
   * <p> The unique identifier for the assessment report. </p>
   * @public
   */
  assessmentReportId: string | undefined;

  /**
   * <p> The unique identifier for the assessment. </p>
   * @public
   */
  assessmentId: string | undefined;
}

/**
 * <p> Short for uniform resource locator. A URL is used as a unique identifier to locate a
 *          resource on the internet. </p>
 * @public
 */
export interface URL {
  /**
   * <p> The name or word that's used as a hyperlink to the URL. </p>
   * @public
   */
  hyperlinkName?: string | undefined;

  /**
   * <p> The unique identifier for the internet resource. </p>
   * @public
   */
  link?: string | undefined;
}

/**
 * @public
 */
export interface GetAssessmentReportUrlResponse {
  /**
   * <p> Short for uniform resource locator. A URL is used as a unique identifier to locate a
   *          resource on the internet. </p>
   * @public
   */
  preSignedUrl?: URL | undefined;
}

/**
 * @public
 */
export interface GetChangeLogsRequest {
  /**
   * <p>The unique identifier for the assessment. </p>
   * @public
   */
  assessmentId: string | undefined;

  /**
   * <p> The unique identifier for the control set. </p>
   * @public
   */
  controlSetId?: string | undefined;

  /**
   * <p> The unique identifier for the control. </p>
   * @public
   */
  controlId?: string | undefined;

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Represents the maximum number of results on a page or for an API request call. </p>
   * @public
   */
  maxResults?: number | undefined;
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
 * <p> The record of a change within Audit Manager. For example, this could be the
 *          status change of an assessment or the delegation of a control set. </p>
 * @public
 */
export interface ChangeLog {
  /**
   * <p> The object that was changed, such as an assessment, control, or control set. </p>
   * @public
   */
  objectType?: ObjectTypeEnum | undefined;

  /**
   * <p> The name of the object that changed. This could be the name of an assessment, control,
   *          or control set.</p>
   * @public
   */
  objectName?: string | undefined;

  /**
   * <p> The action that was performed. </p>
   * @public
   */
  action?: ActionEnum | undefined;

  /**
   * <p> The time when the action was performed and the changelog record was created. </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p> The user or role that performed the action. </p>
   * @public
   */
  createdBy?: string | undefined;
}

/**
 * @public
 */
export interface GetChangeLogsResponse {
  /**
   * <p>The list of user activity for the control. </p>
   * @public
   */
  changeLogs?: ChangeLog[] | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetControlRequest {
  /**
   * <p> The identifier for the control. </p>
   * @public
   */
  controlId: string | undefined;
}

/**
 * @public
 */
export interface GetControlResponse {
  /**
   * <p> The details of the control that the <code>GetControl</code> API returned. </p>
   * @public
   */
  control?: Control | undefined;
}

/**
 * @public
 */
export interface GetDelegationsRequest {
  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p> The metadata that's associated with the delegation. </p>
 * @public
 */
export interface DelegationMetadata {
  /**
   * <p> The unique identifier for the delegation. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p> The name of the associated assessment. </p>
   * @public
   */
  assessmentName?: string | undefined;

  /**
   * <p> The unique identifier for the assessment. </p>
   * @public
   */
  assessmentId?: string | undefined;

  /**
   * <p> The current status of the delegation. </p>
   * @public
   */
  status?: DelegationStatus | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the IAM role. </p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p> Specifies when the delegation was created. </p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p> Specifies the name of the control set that was delegated for review. </p>
   * @public
   */
  controlSetName?: string | undefined;
}

/**
 * @public
 */
export interface GetDelegationsResponse {
  /**
   * <p> The list of delegations that the <code>GetDelegations</code> API returned. </p>
   * @public
   */
  delegations?: DelegationMetadata[] | undefined;

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetEvidenceRequest {
  /**
   * <p> The unique identifier for the assessment. </p>
   * @public
   */
  assessmentId: string | undefined;

  /**
   * <p> The unique identifier for the control set. </p>
   * @public
   */
  controlSetId: string | undefined;

  /**
   * <p> The unique identifier for the folder that the evidence is stored in. </p>
   * @public
   */
  evidenceFolderId: string | undefined;

  /**
   * <p> The unique identifier for the evidence. </p>
   * @public
   */
  evidenceId: string | undefined;
}

/**
 * <p> A system asset that's evaluated in an Audit Manager assessment. </p>
 * @public
 */
export interface Resource {
  /**
   * <p> The Amazon Resource Name (ARN) for the resource. </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p> The value of the resource. </p>
   * @public
   */
  value?: string | undefined;

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
   * @public
   */
  complianceCheck?: string | undefined;
}

/**
 * <p> A record that contains the information needed to demonstrate compliance with the
 *          requirements specified by a control. Examples of evidence include change activity invoked
 *          by a user, or a system configuration snapshot. </p>
 * @public
 */
export interface Evidence {
  /**
   * <p> The data source where the evidence was collected from. </p>
   * @public
   */
  dataSource?: string | undefined;

  /**
   * <p> The identifier for the Amazon Web Services account. </p>
   * @public
   */
  evidenceAwsAccountId?: string | undefined;

  /**
   * <p> The timestamp that represents when the evidence was collected. </p>
   * @public
   */
  time?: Date | undefined;

  /**
   * <p> The Amazon Web Services service that the evidence is collected from. </p>
   * @public
   */
  eventSource?: string | undefined;

  /**
   * <p> The name of the evidence event. </p>
   * @public
   */
  eventName?: string | undefined;

  /**
   * <p> The type of automated evidence. </p>
   * @public
   */
  evidenceByType?: string | undefined;

  /**
   * <p> The list of resources that are assessed to generate the evidence. </p>
   * @public
   */
  resourcesIncluded?: Resource[] | undefined;

  /**
   * <p> The names and values that are used by the evidence event. This includes an attribute
   *          name (such as <code>allowUsersToChangePassword</code>) and value (such as <code>true</code>
   *          or <code>false</code>). </p>
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * <p> The unique identifier for the user or role that's associated with
   *          the evidence. </p>
   * @public
   */
  iamId?: string | undefined;

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
   * @public
   */
  complianceCheck?: string | undefined;

  /**
   * <p> The Amazon Web Services account that the evidence is collected from, and its
   *          organization path. </p>
   * @public
   */
  awsOrganization?: string | undefined;

  /**
   * <p> The identifier for the Amazon Web Services account. </p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p> The identifier for the folder that the evidence is stored in. </p>
   * @public
   */
  evidenceFolderId?: string | undefined;

  /**
   * <p> The identifier for the evidence. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p> Specifies whether the evidence is included in the assessment report. </p>
   * @public
   */
  assessmentReportSelection?: string | undefined;
}

/**
 * @public
 */
export interface GetEvidenceResponse {
  /**
   * <p> The evidence that the <code>GetEvidence</code> API returned. </p>
   * @public
   */
  evidence?: Evidence | undefined;
}

/**
 * @public
 */
export interface GetEvidenceByEvidenceFolderRequest {
  /**
   * <p> The identifier for the assessment. </p>
   * @public
   */
  assessmentId: string | undefined;

  /**
   * <p> The identifier for the control set. </p>
   * @public
   */
  controlSetId: string | undefined;

  /**
   * <p> The unique identifier for the folder that the evidence is stored in. </p>
   * @public
   */
  evidenceFolderId: string | undefined;

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetEvidenceByEvidenceFolderResponse {
  /**
   * <p> The list of evidence that the <code>GetEvidenceByEvidenceFolder</code> API returned.
   *       </p>
   * @public
   */
  evidence?: Evidence[] | undefined;

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetEvidenceFileUploadUrlRequest {
  /**
   * <p>The file that you want to upload. For a list of supported file formats, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/upload-evidence.html#supported-manual-evidence-files">Supported file types for manual evidence</a> in the <i>Audit Manager
   *             User Guide</i>.</p>
   * @public
   */
  fileName: string | undefined;
}

/**
 * @public
 */
export interface GetEvidenceFileUploadUrlResponse {
  /**
   * <p>The name of the uploaded manual evidence file that the presigned URL was generated
   *          for.</p>
   * @public
   */
  evidenceFileName?: string | undefined;

  /**
   * <p>The presigned URL that was generated.</p>
   * @public
   */
  uploadUrl?: string | undefined;
}

/**
 * @public
 */
export interface GetEvidenceFolderRequest {
  /**
   * <p> The unique identifier for the assessment. </p>
   * @public
   */
  assessmentId: string | undefined;

  /**
   * <p> The unique identifier for the control set. </p>
   * @public
   */
  controlSetId: string | undefined;

  /**
   * <p> The unique identifier for the folder that the evidence is stored in. </p>
   * @public
   */
  evidenceFolderId: string | undefined;
}

/**
 * @public
 */
export interface GetEvidenceFolderResponse {
  /**
   * <p> The folder that the evidence is stored in. </p>
   * @public
   */
  evidenceFolder?: AssessmentEvidenceFolder | undefined;
}

/**
 * @public
 */
export interface GetEvidenceFoldersByAssessmentRequest {
  /**
   * <p> The unique identifier for the assessment. </p>
   * @public
   */
  assessmentId: string | undefined;

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetEvidenceFoldersByAssessmentResponse {
  /**
   * <p> The list of evidence folders that the <code>GetEvidenceFoldersByAssessment</code> API
   *          returned. </p>
   * @public
   */
  evidenceFolders?: AssessmentEvidenceFolder[] | undefined;

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetEvidenceFoldersByAssessmentControlRequest {
  /**
   * <p> The identifier for the assessment. </p>
   * @public
   */
  assessmentId: string | undefined;

  /**
   * <p> The identifier for the control set. </p>
   * @public
   */
  controlSetId: string | undefined;

  /**
   * <p> The identifier for the control. </p>
   * @public
   */
  controlId: string | undefined;

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetEvidenceFoldersByAssessmentControlResponse {
  /**
   * <p> The list of evidence folders that the
   *             <code>GetEvidenceFoldersByAssessmentControl</code> API returned. </p>
   * @public
   */
  evidenceFolders?: AssessmentEvidenceFolder[] | undefined;

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
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
 * @public
 */
export interface Insights {
  /**
   * <p>The number of active assessments in Audit Manager. </p>
   * @public
   */
  activeAssessmentsCount?: number | undefined;

  /**
   * <p>The number of compliance check evidence that Audit Manager classified as
   *          non-compliant on the <code>lastUpdated</code> date. This includes evidence that was
   *          collected from Security Hub with a <i>Fail</i> ruling, or collected
   *          from Config with a <i>Non-compliant</i> ruling. </p>
   * @public
   */
  noncompliantEvidenceCount?: number | undefined;

  /**
   * <p>The number of compliance check evidence that Audit Manager classified as compliant
   *          on the <code>lastUpdated</code> date. This includes evidence that was collected from
   *             Security Hub with a <i>Pass</i> ruling, or collected from
   *             Config with a <i>Compliant</i> ruling. </p>
   * @public
   */
  compliantEvidenceCount?: number | undefined;

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
   * @public
   */
  inconclusiveEvidenceCount?: number | undefined;

  /**
   * <p>The number of assessment controls that collected non-compliant evidence on the
   *             <code>lastUpdated</code> date. </p>
   * @public
   */
  assessmentControlsCountByNoncompliantEvidence?: number | undefined;

  /**
   * <p>The total number of controls across all active assessments. </p>
   * @public
   */
  totalAssessmentControlsCount?: number | undefined;

  /**
   * <p>The time when the cross-assessment insights were last updated. </p>
   * @public
   */
  lastUpdated?: Date | undefined;
}

/**
 * @public
 */
export interface GetInsightsResponse {
  /**
   * <p>The analytics data that the <code>GetInsights</code> API returned. </p>
   * @public
   */
  insights?: Insights | undefined;
}

/**
 * @public
 */
export interface GetInsightsByAssessmentRequest {
  /**
   * <p>The unique identifier for the assessment. </p>
   * @public
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
 * @public
 */
export interface InsightsByAssessment {
  /**
   * <p>The number of compliance check evidence that Audit Manager classified as
   *          non-compliant. This includes evidence that was collected from Security Hub with a
   *             <i>Fail</i> ruling, or collected from Config with a
   *             <i>Non-compliant</i> ruling. </p>
   * @public
   */
  noncompliantEvidenceCount?: number | undefined;

  /**
   * <p>The number of compliance check evidence that Audit Manager classified as compliant.
   *          This includes evidence that was collected from Security Hub with a
   *             <i>Pass</i> ruling, or collected from Config with a
   *             <i>Compliant</i> ruling. </p>
   * @public
   */
  compliantEvidenceCount?: number | undefined;

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
   * @public
   */
  inconclusiveEvidenceCount?: number | undefined;

  /**
   * <p>The number of assessment controls that collected non-compliant evidence on the
   *             <code>lastUpdated</code> date. </p>
   * @public
   */
  assessmentControlsCountByNoncompliantEvidence?: number | undefined;

  /**
   * <p>The total number of controls in the assessment. </p>
   * @public
   */
  totalAssessmentControlsCount?: number | undefined;

  /**
   * <p>The time when the assessment insights were last updated.</p>
   * @public
   */
  lastUpdated?: Date | undefined;
}

/**
 * @public
 */
export interface GetInsightsByAssessmentResponse {
  /**
   * <p> The assessment analytics data that the <code>GetInsightsByAssessment</code> API
   *          returned. </p>
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
   * <p> The identifier for the administrator account. </p>
   * @public
   */
  adminAccountId?: string | undefined;

  /**
   * <p> The identifier for the organization. </p>
   * @public
   */
  organizationId?: string | undefined;
}

/**
 * @public
 */
export interface GetServicesInScopeRequest {}

/**
 * <p> The metadata that's associated with the Amazon Web Services service. </p>
 * @public
 */
export interface ServiceMetadata {
  /**
   * <p> The name of the Amazon Web Services service. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The display name of the Amazon Web Services service. </p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p> The description of the Amazon Web Services service. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The category that the Amazon Web Services service belongs to, such as compute, storage,
   *          or database. </p>
   * @public
   */
  category?: string | undefined;
}

/**
 * @public
 */
export interface GetServicesInScopeResponse {
  /**
   * <p> The metadata that's associated with the Amazon Web Services service. </p>
   * @public
   */
  serviceMetadata?: ServiceMetadata[] | undefined;
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
   * <p> The list of setting attribute enum values. </p>
   * @public
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
 * <p>The default s3 bucket where Audit Manager saves the files that you export from evidence finder.</p>
 * @public
 */
export interface DefaultExportDestination {
  /**
   * <p>The destination type, such as Amazon S3.</p>
   * @public
   */
  destinationType?: ExportDestinationType | undefined;

  /**
   * <p>The destination bucket where Audit Manager stores exported files.</p>
   * @public
   */
  destination?: string | undefined;
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
 * @public
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
   * @public
   */
  deleteResources?: DeleteResources | undefined;
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
 * <p>The settings object that specifies whether evidence finder is enabled. This object also
 *          describes the related event data store, and the backfill status for populating the event
 *          data store with evidence data.</p>
 * @public
 */
export interface EvidenceFinderEnablement {
  /**
   * <p>The Amazon Resource Name (ARN) of the CloudTrail Lake event data store that’s
   *          used by evidence finder. The event data store is the lake of evidence data that evidence
   *          finder runs queries against.</p>
   * @public
   */
  eventDataStoreArn?: string | undefined;

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
   * @public
   */
  enablementStatus?: EvidenceFinderEnablementStatus | undefined;

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
   * @public
   */
  backfillStatus?: EvidenceFinderBackfillStatus | undefined;

  /**
   * <p>Represents any errors that occurred when enabling or disabling evidence finder. </p>
   * @public
   */
  error?: string | undefined;
}

/**
 * <p> The settings object that holds all supported Audit Manager settings. </p>
 * @public
 */
export interface Settings {
  /**
   * <p> Specifies whether Organizations is enabled. </p>
   * @public
   */
  isAwsOrgEnabled?: boolean | undefined;

  /**
   * <p> The designated Amazon Simple Notification Service (Amazon SNS) topic. </p>
   * @public
   */
  snsTopic?: string | undefined;

  /**
   * <p>The default S3 destination bucket for storing assessment reports.</p>
   * @public
   */
  defaultAssessmentReportsDestination?: AssessmentReportsDestination | undefined;

  /**
   * <p> The designated default audit owners. </p>
   * @public
   */
  defaultProcessOwners?: Role[] | undefined;

  /**
   * <p> The KMS key details. </p>
   * @public
   */
  kmsKey?: string | undefined;

  /**
   * <p>The current evidence finder status and event data store details.</p>
   * @public
   */
  evidenceFinderEnablement?: EvidenceFinderEnablement | undefined;

  /**
   * <p>The deregistration policy for your Audit Manager data. You can
   *       use this attribute to determine how your data is handled when you deregister Audit Manager.</p>
   * @public
   */
  deregistrationPolicy?: DeregistrationPolicy | undefined;

  /**
   * <p>The default S3 destination bucket for storing evidence finder exports.</p>
   * @public
   */
  defaultExportDestination?: DefaultExportDestination | undefined;
}

/**
 * @public
 */
export interface GetSettingsResponse {
  /**
   * <p> The settings object that holds all supported Audit Manager settings. </p>
   * @public
   */
  settings?: Settings | undefined;
}

/**
 * @public
 */
export interface ListAssessmentControlInsightsByControlDomainRequest {
  /**
   * <p>The unique identifier for the control domain. </p>
   *          <p>Audit Manager supports the control domains that are provided by Amazon Web Services
   *          Control Catalog. For information about how to find a list of available control domains, see
   *             <a href="https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_ListDomains.html">
   *                <code>ListDomains</code>
   *             </a> in the Amazon Web Services Control
   *          Catalog API Reference.</p>
   * @public
   */
  controlDomainId: string | undefined;

  /**
   * <p>The unique identifier for the active assessment. </p>
   * @public
   */
  assessmentId: string | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Represents the maximum number of results on a page or for an API request call. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A breakdown of the latest compliance check status for the evidence in your Audit Manager assessments. </p>
 * @public
 */
export interface EvidenceInsights {
  /**
   * <p>The number of compliance check evidence that Audit Manager classified as
   *          non-compliant. This includes evidence that was collected from Security Hub with a
   *             <i>Fail</i> ruling, or collected from Config with a
   *             <i>Non-compliant</i> ruling. </p>
   * @public
   */
  noncompliantEvidenceCount?: number | undefined;

  /**
   * <p>The number of compliance check evidence that Audit Manager classified as compliant.
   *          This includes evidence that was collected from Security Hub with a
   *             <i>Pass</i> ruling, or collected from Config with a
   *             <i>Compliant</i> ruling. </p>
   * @public
   */
  compliantEvidenceCount?: number | undefined;

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
   * @public
   */
  inconclusiveEvidenceCount?: number | undefined;
}

/**
 * <p>A summary of the latest analytics data for a specific control in a specific active
 *          assessment.</p>
 *          <p>Control insights are grouped by control domain, and ranked by the highest total count of
 *          non-compliant evidence. </p>
 * @public
 */
export interface ControlInsightsMetadataByAssessmentItem {
  /**
   * <p>The name of the assessment control. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The unique identifier for the assessment control. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>A breakdown of the compliance check status for the evidence that’s associated with the
   *          assessment control. </p>
   * @public
   */
  evidenceInsights?: EvidenceInsights | undefined;

  /**
   * <p>The name of the control set that the assessment control belongs to. </p>
   * @public
   */
  controlSetName?: string | undefined;

  /**
   * <p>The time when the assessment control insights were last updated. </p>
   * @public
   */
  lastUpdated?: Date | undefined;
}

/**
 * @public
 */
export interface ListAssessmentControlInsightsByControlDomainResponse {
  /**
   * <p>The assessment control analytics data that the
   *             <code>ListAssessmentControlInsightsByControlDomain</code> API returned. </p>
   * @public
   */
  controlInsightsByAssessment?: ControlInsightsMetadataByAssessmentItem[] | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssessmentFrameworksRequest {
  /**
   * <p> The type of framework, such as a standard framework or a custom framework. </p>
   * @public
   */
  frameworkType: FrameworkType | undefined;

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssessmentFrameworksResponse {
  /**
   * <p> A list of metadata that the <code>ListAssessmentFrameworks</code> API returns for each
   *          framework.</p>
   * @public
   */
  frameworkMetadataList?: AssessmentFrameworkMetadata[] | undefined;

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssessmentFrameworkShareRequestsRequest {
  /**
   * <p> Specifies whether the share request is a sent request or a received request.</p>
   * @public
   */
  requestType: ShareRequestType | undefined;

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssessmentFrameworkShareRequestsResponse {
  /**
   * <p> The list of share requests that the <code>ListAssessmentFrameworkShareRequests</code>
   *          API returned. </p>
   * @public
   */
  assessmentFrameworkShareRequests?: AssessmentFrameworkShareRequest[] | undefined;

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssessmentReportsRequest {
  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssessmentReportsResponse {
  /**
   * <p> The list of assessment reports that the <code>ListAssessmentReports</code> API
   *          returned. </p>
   * @public
   */
  assessmentReports?: AssessmentReportMetadata[] | undefined;

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssessmentsRequest {
  /**
   * <p> The current status of the assessment.</p>
   * @public
   */
  status?: AssessmentStatus | undefined;

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssessmentsResponse {
  /**
   * <p>The metadata that the <code>ListAssessments</code> API returns for each
   *          assessment.</p>
   * @public
   */
  assessmentMetadata?: AssessmentMetadataItem[] | undefined;

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListControlDomainInsightsRequest {
  /**
   * <p>The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Represents the maximum number of results on a page or for an API request call. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A summary of the latest analytics data for a specific control domain.</p>
 *          <p>Control domain insights are grouped by control domain, and ranked by the highest total
 *          count of non-compliant evidence.</p>
 * @public
 */
export interface ControlDomainInsights {
  /**
   * <p>The name of the control domain. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The unique identifier for the control domain. Audit Manager supports the control
   *          domains that are provided by Amazon Web Services Control Catalog. For information about how
   *          to find a list of available control domains, see <a href="https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_ListDomains.html">
   *                <code>ListDomains</code>
   *             </a> in the Amazon Web Services Control Catalog API
   *          Reference.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The number of controls in the control domain that collected non-compliant evidence on
   *          the <code>lastUpdated</code> date. </p>
   * @public
   */
  controlsCountByNoncompliantEvidence?: number | undefined;

  /**
   * <p>The total number of controls in the control domain. </p>
   * @public
   */
  totalControlsCount?: number | undefined;

  /**
   * <p>A breakdown of the compliance check status for the evidence that’s associated with the
   *          control domain. </p>
   * @public
   */
  evidenceInsights?: EvidenceInsights | undefined;

  /**
   * <p>The time when the control domain insights were last updated. </p>
   * @public
   */
  lastUpdated?: Date | undefined;
}

/**
 * @public
 */
export interface ListControlDomainInsightsResponse {
  /**
   * <p>The control domain analytics data that the <code>ListControlDomainInsights</code> API
   *          returned. </p>
   * @public
   */
  controlDomainInsights?: ControlDomainInsights[] | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListControlDomainInsightsByAssessmentRequest {
  /**
   * <p>The unique identifier for the active assessment. </p>
   * @public
   */
  assessmentId: string | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Represents the maximum number of results on a page or for an API request call. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListControlDomainInsightsByAssessmentResponse {
  /**
   * <p>The control domain analytics data that the
   *             <code>ListControlDomainInsightsByAssessment</code> API returned. </p>
   * @public
   */
  controlDomainInsights?: ControlDomainInsights[] | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListControlInsightsByControlDomainRequest {
  /**
   * <p>The unique identifier for the control domain. </p>
   *          <p>Audit Manager supports the control domains that are provided by Amazon Web Services
   *          Control Catalog. For information about how to find a list of available control domains, see
   *             <a href="https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_ListDomains.html">
   *                <code>ListDomains</code>
   *             </a> in the Amazon Web Services Control
   *          Catalog API Reference.</p>
   * @public
   */
  controlDomainId: string | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Represents the maximum number of results on a page or for an API request call. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A summary of the latest analytics data for a specific control. </p>
 *          <p>This data reflects the total counts for the specified control across all active
 *          assessments. Control insights are grouped by control domain, and ranked by the highest
 *          total count of non-compliant evidence.</p>
 * @public
 */
export interface ControlInsightsMetadataItem {
  /**
   * <p>The name of the control. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The unique identifier for the control. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>A breakdown of the compliance check status for the evidence that’s associated with the
   *          control. </p>
   * @public
   */
  evidenceInsights?: EvidenceInsights | undefined;

  /**
   * <p>The time when the control insights were last updated. </p>
   * @public
   */
  lastUpdated?: Date | undefined;
}

/**
 * @public
 */
export interface ListControlInsightsByControlDomainResponse {
  /**
   * <p>The control analytics data that the <code>ListControlInsightsByControlDomain</code> API
   *          returned. </p>
   * @public
   */
  controlInsightsMetadata?: ControlInsightsMetadataItem[] | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListControlsRequest {
  /**
   * <p>A filter that narrows the list of controls to a specific type. </p>
   * @public
   */
  controlType: ControlType | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results on a page or for an API request call. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A filter that narrows the list of controls to a specific resource from the Amazon Web Services
   *          Control Catalog. </p>
   *          <p>To use this parameter, specify the ARN of the Control Catalog resource. You can specify either
   *          a control domain, a control objective, or a common control. For information about how to find the ARNs
   *          for these resources, see <a href="https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_ListDomains.html">
   *                <code>ListDomains</code>
   *             </a>, <a href="https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_ListObjectives.html">
   *                <code>ListObjectives</code>
   *             </a>, and <a href="https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_ListCommonControls.html">
   *                <code>ListCommonControls</code>
   *             </a>.</p>
   *          <note>
   *             <p>You can only filter by one Control Catalog resource at a time.
   *             Specifying multiple resource ARNs isn’t currently supported. If you want to filter by more
   *             than one ARN, we recommend that you run the <code>ListControls</code> operation separately
   *             for each ARN. </p>
   *          </note>
   *          <p>Alternatively, specify <code>UNCATEGORIZED</code> to list controls that aren't
   *          mapped to a Control Catalog resource. For example, this operation might return a list of
   *          custom controls that don't belong to any control domain or control objective.</p>
   * @public
   */
  controlCatalogId?: string | undefined;
}

/**
 * <p> The metadata that's associated with the standard control or custom control. </p>
 * @public
 */
export interface ControlMetadata {
  /**
   * <p> The Amazon Resource Name (ARN) of the control. </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p> The unique identifier for the control. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p> The name of the control. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The data source that determines where Audit Manager collects evidence from for the
   *          control. </p>
   * @public
   */
  controlSources?: string | undefined;

  /**
   * <p> The time when the control was created. </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p> The time when the control was most recently updated. </p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListControlsResponse {
  /**
   * <p> A list of metadata that the <code>ListControls</code> API returns for each
   *          control.</p>
   * @public
   */
  controlMetadataList?: ControlMetadata[] | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DataSourceType = {
  AWS_API_CALL: "AWS_API_Call",
  AWS_CLOUDTRAIL: "AWS_Cloudtrail",
  AWS_CONFIG: "AWS_Config",
  AWS_SECURITY_HUB: "AWS_Security_Hub",
  MANUAL: "MANUAL",
} as const;

/**
 * @public
 */
export type DataSourceType = (typeof DataSourceType)[keyof typeof DataSourceType];

/**
 * @public
 */
export interface ListKeywordsForDataSourceRequest {
  /**
   * <p>The control mapping data source that the keywords apply to. </p>
   * @public
   */
  source: DataSourceType | undefined;

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListKeywordsForDataSourceResponse {
  /**
   * <p>The list of keywords for the control mapping source.</p>
   * @public
   */
  keywords?: string[] | undefined;

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNotificationsRequest {
  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> Represents the maximum number of results on a page or for an API request call. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p> The notification that informs a user of an update in Audit Manager. For
 *          example, this includes the notification that's sent when a control set is delegated for
 *          review. </p>
 * @public
 */
export interface Notification {
  /**
   * <p> The unique identifier for the notification. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p> The identifier for the assessment. </p>
   * @public
   */
  assessmentId?: string | undefined;

  /**
   * <p> The name of the related assessment. </p>
   * @public
   */
  assessmentName?: string | undefined;

  /**
   * <p> The identifier for the control set. </p>
   * @public
   */
  controlSetId?: string | undefined;

  /**
   * <p> Specifies the name of the control set that the notification is about. </p>
   * @public
   */
  controlSetName?: string | undefined;

  /**
   * <p> The description of the notification. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The time when the notification was sent. </p>
   * @public
   */
  eventTime?: Date | undefined;

  /**
   * <p> The sender of the notification. </p>
   * @public
   */
  source?: string | undefined;
}

/**
 * @public
 */
export interface ListNotificationsResponse {
  /**
   * <p> The returned list of notifications. </p>
   * @public
   */
  notifications?: Notification[] | undefined;

  /**
   * <p> The pagination token that's used to fetch the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the resource. </p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p> The list of tags that the <code>ListTagsForResource</code> API returned. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RegisterAccountRequest {
  /**
   * <p> The KMS key details. </p>
   * @public
   */
  kmsKey?: string | undefined;

  /**
   * <p> The delegated administrator account for Audit Manager. </p>
   * @public
   */
  delegatedAdminAccount?: string | undefined;
}

/**
 * @public
 */
export interface RegisterAccountResponse {
  /**
   * <p> The status of the account registration request. </p>
   * @public
   */
  status?: AccountStatus | undefined;
}

/**
 * @public
 */
export interface RegisterOrganizationAdminAccountRequest {
  /**
   * <p> The identifier for the delegated administrator account. </p>
   * @public
   */
  adminAccountId: string | undefined;
}

/**
 * @public
 */
export interface RegisterOrganizationAdminAccountResponse {
  /**
   * <p> The identifier for the delegated administrator account. </p>
   * @public
   */
  adminAccountId?: string | undefined;

  /**
   * <p> The identifier for the organization. </p>
   * @public
   */
  organizationId?: string | undefined;
}

/**
 * @public
 */
export interface StartAssessmentFrameworkShareRequest {
  /**
   * <p> The unique identifier for the custom framework to be shared. </p>
   * @public
   */
  frameworkId: string | undefined;

  /**
   * <p> The Amazon Web Services account of the recipient. </p>
   * @public
   */
  destinationAccount: string | undefined;

  /**
   * <p> The Amazon Web Services Region of the recipient. </p>
   * @public
   */
  destinationRegion: string | undefined;

  /**
   * <p> An optional comment from the sender about the share request. </p>
   * @public
   */
  comment?: string | undefined;
}

/**
 * @public
 */
export interface StartAssessmentFrameworkShareResponse {
  /**
   * <p> The share request that's created by the <code>StartAssessmentFrameworkShare</code> API.
   *       </p>
   * @public
   */
  assessmentFrameworkShareRequest?: AssessmentFrameworkShareRequest | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the resource. </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p> The tags that are associated with the resource. </p>
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
   * <p> The Amazon Resource Name (ARN) of the specified resource. </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p> The name or key of the tag. </p>
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
   * <p> The unique identifier for the assessment. </p>
   * @public
   */
  assessmentId: string | undefined;

  /**
   * <p> The name of the assessment to be updated. </p>
   * @public
   */
  assessmentName?: string | undefined;

  /**
   * <p> The description of the assessment. </p>
   * @public
   */
  assessmentDescription?: string | undefined;

  /**
   * <p> The scope of the assessment. </p>
   * @public
   */
  scope: Scope | undefined;

  /**
   * <p> The assessment report storage destination for the assessment that's being updated.
   *       </p>
   * @public
   */
  assessmentReportsDestination?: AssessmentReportsDestination | undefined;

  /**
   * <p> The list of roles for the assessment. </p>
   * @public
   */
  roles?: Role[] | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentResponse {
  /**
   * <p> The response object for the <code>UpdateAssessment</code> API. This is the name of the
   *          updated assessment.</p>
   * @public
   */
  assessment?: Assessment | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentControlRequest {
  /**
   * <p> The unique identifier for the assessment. </p>
   * @public
   */
  assessmentId: string | undefined;

  /**
   * <p> The unique identifier for the control set. </p>
   * @public
   */
  controlSetId: string | undefined;

  /**
   * <p> The unique identifier for the control. </p>
   * @public
   */
  controlId: string | undefined;

  /**
   * <p> The status of the control. </p>
   * @public
   */
  controlStatus?: ControlStatus | undefined;

  /**
   * <p> The comment body text for the control. </p>
   * @public
   */
  commentBody?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentControlResponse {
  /**
   * <p> The name of the updated control set that the <code>UpdateAssessmentControl</code> API
   *          returned. </p>
   * @public
   */
  control?: AssessmentControl | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentControlSetStatusRequest {
  /**
   * <p> The unique identifier for the assessment. </p>
   * @public
   */
  assessmentId: string | undefined;

  /**
   * <p> The unique identifier for the control set. </p>
   * @public
   */
  controlSetId: string | undefined;

  /**
   * <p> The status of the control set that's being updated. </p>
   * @public
   */
  status: ControlSetStatus | undefined;

  /**
   * <p> The comment that's related to the status update. </p>
   * @public
   */
  comment: string | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentControlSetStatusResponse {
  /**
   * <p> The name of the updated control set that the
   *             <code>UpdateAssessmentControlSetStatus</code> API returned. </p>
   * @public
   */
  controlSet?: AssessmentControlSet | undefined;
}

/**
 * <p> A <code>controlSet</code> entity that represents a collection of controls in Audit Manager. This doesn't contain the control set ID. </p>
 * @public
 */
export interface UpdateAssessmentFrameworkControlSet {
  /**
   * <p> The unique identifier for the control set. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p> The name of the control set. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The list of controls that are contained within the control set. </p>
   * @public
   */
  controls: CreateAssessmentFrameworkControl[] | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentFrameworkRequest {
  /**
   * <p> The unique identifier for the framework. </p>
   * @public
   */
  frameworkId: string | undefined;

  /**
   * <p> The name of the framework to be updated. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The description of the updated framework. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The compliance type that the new custom framework supports, such as CIS or HIPAA.
   *       </p>
   * @public
   */
  complianceType?: string | undefined;

  /**
   * <p> The control sets that are associated with the framework. </p>
   * @public
   */
  controlSets: UpdateAssessmentFrameworkControlSet[] | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentFrameworkResponse {
  /**
   * <p> The name of the framework. </p>
   * @public
   */
  framework?: Framework | undefined;
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
   * <p> The unique identifier for the share request. </p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>Specifies whether the share request is a sent request or a received request.</p>
   * @public
   */
  requestType: ShareRequestType | undefined;

  /**
   * <p>Specifies the update action for the share request.</p>
   * @public
   */
  action: ShareRequestAction | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentFrameworkShareResponse {
  /**
   * <p> The updated share request that's returned by the
   *             <code>UpdateAssessmentFrameworkShare</code> operation. </p>
   * @public
   */
  assessmentFrameworkShareRequest?: AssessmentFrameworkShareRequest | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentStatusRequest {
  /**
   * <p> The unique identifier for the assessment. </p>
   * @public
   */
  assessmentId: string | undefined;

  /**
   * <p> The current status of the assessment. </p>
   * @public
   */
  status: AssessmentStatus | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentStatusResponse {
  /**
   * <p> The name of the updated assessment that the <code>UpdateAssessmentStatus</code> API
   *          returned. </p>
   * @public
   */
  assessment?: Assessment | undefined;
}

/**
 * @public
 */
export interface UpdateControlRequest {
  /**
   * <p> The identifier for the control. </p>
   * @public
   */
  controlId: string | undefined;

  /**
   * <p> The name of the updated control. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The optional description of the control. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The steps that you should follow to determine if the control is met. </p>
   * @public
   */
  testingInformation?: string | undefined;

  /**
   * <p> The title of the action plan for remediating the control. </p>
   * @public
   */
  actionPlanTitle?: string | undefined;

  /**
   * <p> The recommended actions to carry out if the control isn't fulfilled. </p>
   * @public
   */
  actionPlanInstructions?: string | undefined;

  /**
   * <p> The data mapping sources for the control. </p>
   * @public
   */
  controlMappingSources: ControlMappingSource[] | undefined;
}

/**
 * @public
 */
export interface UpdateControlResponse {
  /**
   * <p> The name of the updated control set that the <code>UpdateControl</code> API returned.
   *       </p>
   * @public
   */
  control?: Control | undefined;
}

/**
 * @public
 */
export interface UpdateSettingsRequest {
  /**
   * <p> The Amazon Simple Notification Service (Amazon SNS) topic that Audit Manager sends
   *          notifications to. </p>
   * @public
   */
  snsTopic?: string | undefined;

  /**
   * <p> The default S3 destination bucket for storing assessment reports. </p>
   * @public
   */
  defaultAssessmentReportsDestination?: AssessmentReportsDestination | undefined;

  /**
   * <p> A list of the default audit owners. </p>
   * @public
   */
  defaultProcessOwners?: Role[] | undefined;

  /**
   * <p> The KMS key details. </p>
   * @public
   */
  kmsKey?: string | undefined;

  /**
   * <p>Specifies whether the evidence finder feature is enabled. Change this attribute to
   *          enable or disable evidence finder.</p>
   *          <important>
   *             <p>When you use this attribute to disable evidence finder, Audit Manager deletes the
   *             event data store that’s used to query your evidence data. As a result, you can’t
   *             re-enable evidence finder and use the feature again. Your only alternative is to <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeregisterAccount.html">deregister</a> and then <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_RegisterAccount.html">re-register</a>
   *             Audit Manager. </p>
   *          </important>
   * @public
   */
  evidenceFinderEnabled?: boolean | undefined;

  /**
   * <p>The deregistration policy for your Audit Manager data. You can
   *          use this attribute to determine how your data is handled when you deregister Audit Manager.</p>
   * @public
   */
  deregistrationPolicy?: DeregistrationPolicy | undefined;

  /**
   * <p> The default S3 destination bucket for storing evidence finder exports. </p>
   * @public
   */
  defaultExportDestination?: DefaultExportDestination | undefined;
}

/**
 * @public
 */
export interface UpdateSettingsResponse {
  /**
   * <p> The current list of settings. </p>
   * @public
   */
  settings?: Settings | undefined;
}

/**
 * @public
 */
export interface ValidateAssessmentReportIntegrityRequest {
  /**
   * <p> The relative path of the Amazon S3 bucket that the assessment report is stored
   *          in. </p>
   * @public
   */
  s3RelativePath: string | undefined;
}

/**
 * @public
 */
export interface ValidateAssessmentReportIntegrityResponse {
  /**
   * <p> Specifies whether the signature key is valid. </p>
   * @public
   */
  signatureValid?: boolean | undefined;

  /**
   * <p> The signature algorithm that's used to code sign the assessment report file. </p>
   * @public
   */
  signatureAlgorithm?: string | undefined;

  /**
   * <p> The date and time signature that specifies when the assessment report was created.
   *       </p>
   * @public
   */
  signatureDateTime?: string | undefined;

  /**
   * <p> The unique identifier for the validation signature key. </p>
   * @public
   */
  signatureKeyId?: string | undefined;

  /**
   * <p> Represents any errors that occurred when validating the assessment report. </p>
   * @public
   */
  validationErrors?: string[] | undefined;
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
  ...(obj.description && { description: SENSITIVE_STRING }),
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
  ...(obj.controls && { controls: obj.controls.map((item) => AssessmentControlFilterSensitiveLog(item)) }),
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
  ...(obj.description && { description: SENSITIVE_STRING }),
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
  ...(obj.description && { description: SENSITIVE_STRING }),
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
  ...(obj.description && { description: SENSITIVE_STRING }),
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
