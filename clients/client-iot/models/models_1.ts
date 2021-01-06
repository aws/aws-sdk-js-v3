import {
  AbortConfig,
  Action,
  ActiveViolation,
  AlertTarget,
  AuditCheckDetails,
  AuditFinding,
  AuditFrequency,
  AuditMitigationActionExecutionMetadata,
  AuditMitigationActionsExecutionStatus,
  AuditMitigationActionsTaskMetadata,
  AuditMitigationActionsTaskStatus,
  AuditMitigationActionsTaskTarget,
  AuditSuppression,
  AuditTaskMetadata,
  AuditTaskStatus,
  AuditTaskType,
  AuthInfo,
  AuthResult,
  AuthorizerConfig,
  AuthorizerDescription,
  AuthorizerStatus,
  AuthorizerSummary,
  AutoRegistrationStatus,
  AwsJobExecutionsRolloutConfig,
  AwsJobPresignedUrlConfig,
  Behavior,
  BillingGroupProperties,
  DayOfWeek,
  DimensionType,
  JobExecutionsRolloutConfig,
  LogLevel,
  LogTargetType,
  MetricToRetain,
  MetricValue,
  MitigationActionParams,
  OTAUpdateFile,
  OTAUpdateStatus,
  Policy,
  PresignedUrlConfig,
  Protocol,
  ProvisioningHook,
  ResourceIdentifier,
  ServiceType,
  StreamFile,
  Tag,
  TargetSelection,
  TaskStatistics,
  ThingGroupProperties,
  ThingTypeProperties,
  TimeoutConfig,
  TopicRuleDestination,
  TopicRuleDestinationStatus,
  TopicRulePayload,
} from "./models_0";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface DescribeAuditTaskResponse {
  /**
   * <p>The status of the audit: one of "IN_PROGRESS", "COMPLETED",
   *             "FAILED", or "CANCELED".</p>
   */
  taskStatus?: AuditTaskStatus | string;

  /**
   * <p>The type of audit: "ON_DEMAND_AUDIT_TASK" or "SCHEDULED_AUDIT_TASK".</p>
   */
  taskType?: AuditTaskType | string;

  /**
   * <p>The time the audit started.</p>
   */
  taskStartTime?: Date;

  /**
   * <p>Statistical information about the audit.</p>
   */
  taskStatistics?: TaskStatistics;

  /**
   * <p>The name of the scheduled audit (only if the audit was a scheduled audit).</p>
   */
  scheduledAuditName?: string;

  /**
   * <p>Detailed information about each check performed during this audit.</p>
   */
  auditDetails?: { [key: string]: AuditCheckDetails };
}

export namespace DescribeAuditTaskResponse {
  export const filterSensitiveLog = (obj: DescribeAuditTaskResponse): any => ({
    ...obj,
  });
}

export interface DescribeAuthorizerRequest {
  /**
   * <p>The name of the authorizer to describe.</p>
   */
  authorizerName: string | undefined;
}

export namespace DescribeAuthorizerRequest {
  export const filterSensitiveLog = (obj: DescribeAuthorizerRequest): any => ({
    ...obj,
  });
}

export interface DescribeAuthorizerResponse {
  /**
   * <p>The authorizer description.</p>
   */
  authorizerDescription?: AuthorizerDescription;
}

export namespace DescribeAuthorizerResponse {
  export const filterSensitiveLog = (obj: DescribeAuthorizerResponse): any => ({
    ...obj,
  });
}

export interface DescribeBillingGroupRequest {
  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName: string | undefined;
}

export namespace DescribeBillingGroupRequest {
  export const filterSensitiveLog = (obj: DescribeBillingGroupRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Additional information about the billing group.</p>
 */
export interface BillingGroupMetadata {
  /**
   * <p>The date the billing group was created.</p>
   */
  creationDate?: Date;
}

export namespace BillingGroupMetadata {
  export const filterSensitiveLog = (obj: BillingGroupMetadata): any => ({
    ...obj,
  });
}

export interface DescribeBillingGroupResponse {
  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName?: string;

  /**
   * <p>The ID of the billing group.</p>
   */
  billingGroupId?: string;

  /**
   * <p>The ARN of the billing group.</p>
   */
  billingGroupArn?: string;

  /**
   * <p>The version of the billing group.</p>
   */
  version?: number;

  /**
   * <p>The properties of the billing group.</p>
   */
  billingGroupProperties?: BillingGroupProperties;

  /**
   * <p>Additional information about the billing group.</p>
   */
  billingGroupMetadata?: BillingGroupMetadata;
}

export namespace DescribeBillingGroupResponse {
  export const filterSensitiveLog = (obj: DescribeBillingGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the DescribeCACertificate operation.</p>
 */
export interface DescribeCACertificateRequest {
  /**
   * <p>The CA certificate identifier.</p>
   */
  certificateId: string | undefined;
}

export namespace DescribeCACertificateRequest {
  export const filterSensitiveLog = (obj: DescribeCACertificateRequest): any => ({
    ...obj,
  });
}

export enum CACertificateStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

/**
 * <p>When the certificate is valid.</p>
 */
export interface CertificateValidity {
  /**
   * <p>The certificate is not valid before this date.</p>
   */
  notBefore?: Date;

  /**
   * <p>The certificate is not valid after this date.</p>
   */
  notAfter?: Date;
}

export namespace CertificateValidity {
  export const filterSensitiveLog = (obj: CertificateValidity): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a CA certificate.</p>
 */
export interface CACertificateDescription {
  /**
   * <p>The CA certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * <p>The CA certificate ID.</p>
   */
  certificateId?: string;

  /**
   * <p>The status of a CA certificate.</p>
   */
  status?: CACertificateStatus | string;

  /**
   * <p>The CA certificate data, in PEM format.</p>
   */
  certificatePem?: string;

  /**
   * <p>The owner of the CA certificate.</p>
   */
  ownedBy?: string;

  /**
   * <p>The date the CA certificate was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>Whether the CA certificate configured for auto registration of device certificates.
   *          Valid values are "ENABLE" and "DISABLE"</p>
   */
  autoRegistrationStatus?: AutoRegistrationStatus | string;

  /**
   * <p>The date the CA certificate was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The customer version of the CA certificate.</p>
   */
  customerVersion?: number;

  /**
   * <p>The generation ID of the CA certificate.</p>
   */
  generationId?: string;

  /**
   * <p>When the CA certificate is valid.</p>
   */
  validity?: CertificateValidity;
}

export namespace CACertificateDescription {
  export const filterSensitiveLog = (obj: CACertificateDescription): any => ({
    ...obj,
  });
}

/**
 * <p>The registration configuration.</p>
 */
export interface RegistrationConfig {
  /**
   * <p>The template body.</p>
   */
  templateBody?: string;

  /**
   * <p>The ARN of the role.</p>
   */
  roleArn?: string;
}

export namespace RegistrationConfig {
  export const filterSensitiveLog = (obj: RegistrationConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the DescribeCACertificate operation.</p>
 */
export interface DescribeCACertificateResponse {
  /**
   * <p>The CA certificate description.</p>
   */
  certificateDescription?: CACertificateDescription;

  /**
   * <p>Information about the registration configuration.</p>
   */
  registrationConfig?: RegistrationConfig;
}

export namespace DescribeCACertificateResponse {
  export const filterSensitiveLog = (obj: DescribeCACertificateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the DescribeCertificate operation.</p>
 */
export interface DescribeCertificateRequest {
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId: string | undefined;
}

export namespace DescribeCertificateRequest {
  export const filterSensitiveLog = (obj: DescribeCertificateRequest): any => ({
    ...obj,
  });
}

export enum CertificateMode {
  DEFAULT = "DEFAULT",
  SNI_ONLY = "SNI_ONLY",
}

export enum CertificateStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  PENDING_ACTIVATION = "PENDING_ACTIVATION",
  PENDING_TRANSFER = "PENDING_TRANSFER",
  REGISTER_INACTIVE = "REGISTER_INACTIVE",
  REVOKED = "REVOKED",
}

/**
 * <p>Data used to transfer a certificate to an AWS account.</p>
 */
export interface TransferData {
  /**
   * <p>The transfer message.</p>
   */
  transferMessage?: string;

  /**
   * <p>The reason why the transfer was rejected.</p>
   */
  rejectReason?: string;

  /**
   * <p>The date the transfer took place.</p>
   */
  transferDate?: Date;

  /**
   * <p>The date the transfer was accepted.</p>
   */
  acceptDate?: Date;

  /**
   * <p>The date the transfer was rejected.</p>
   */
  rejectDate?: Date;
}

export namespace TransferData {
  export const filterSensitiveLog = (obj: TransferData): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a certificate.</p>
 */
export interface CertificateDescription {
  /**
   * <p>The ARN of the certificate.</p>
   */
  certificateArn?: string;

  /**
   * <p>The ID of the certificate.</p>
   */
  certificateId?: string;

  /**
   * <p>The certificate ID of the CA certificate used to sign this certificate.</p>
   */
  caCertificateId?: string;

  /**
   * <p>The status of the certificate.</p>
   */
  status?: CertificateStatus | string;

  /**
   * <p>The certificate data, in PEM format.</p>
   */
  certificatePem?: string;

  /**
   * <p>The ID of the AWS account that owns the certificate.</p>
   */
  ownedBy?: string;

  /**
   * <p>The ID of the AWS account of the previous owner of the certificate.</p>
   */
  previousOwnedBy?: string;

  /**
   * <p>The date and time the certificate was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date and time the certificate was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The customer version of the certificate.</p>
   */
  customerVersion?: number;

  /**
   * <p>The transfer data.</p>
   */
  transferData?: TransferData;

  /**
   * <p>The generation ID of the certificate.</p>
   */
  generationId?: string;

  /**
   * <p>When the certificate is valid.</p>
   */
  validity?: CertificateValidity;

  /**
   * <p>The mode of the certificate.</p>
   */
  certificateMode?: CertificateMode | string;
}

export namespace CertificateDescription {
  export const filterSensitiveLog = (obj: CertificateDescription): any => ({
    ...obj,
  });
}

/**
 * <p>The output of the DescribeCertificate operation.</p>
 */
export interface DescribeCertificateResponse {
  /**
   * <p>The description of the certificate.</p>
   */
  certificateDescription?: CertificateDescription;
}

export namespace DescribeCertificateResponse {
  export const filterSensitiveLog = (obj: DescribeCertificateResponse): any => ({
    ...obj,
  });
}

export interface DescribeDefaultAuthorizerRequest {}

export namespace DescribeDefaultAuthorizerRequest {
  export const filterSensitiveLog = (obj: DescribeDefaultAuthorizerRequest): any => ({
    ...obj,
  });
}

export interface DescribeDefaultAuthorizerResponse {
  /**
   * <p>The default authorizer's description.</p>
   */
  authorizerDescription?: AuthorizerDescription;
}

export namespace DescribeDefaultAuthorizerResponse {
  export const filterSensitiveLog = (obj: DescribeDefaultAuthorizerResponse): any => ({
    ...obj,
  });
}

export interface DescribeDimensionRequest {
  /**
   * <p>The unique identifier for the dimension.</p>
   */
  name: string | undefined;
}

export namespace DescribeDimensionRequest {
  export const filterSensitiveLog = (obj: DescribeDimensionRequest): any => ({
    ...obj,
  });
}

export interface DescribeDimensionResponse {
  /**
   * <p>The unique identifier for the dimension.</p>
   */
  name?: string;

  /**
   * <p>The ARN (Amazon resource name) for the dimension.</p>
   */
  arn?: string;

  /**
   * <p>The type of the dimension.</p>
   */
  type?: DimensionType | string;

  /**
   * <p>The value or list of values used to scope the dimension. For example, for topic filters, this is the pattern used to match the MQTT topic name.</p>
   */
  stringValues?: string[];

  /**
   * <p>The date the dimension was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date the dimension was last modified.</p>
   */
  lastModifiedDate?: Date;
}

export namespace DescribeDimensionResponse {
  export const filterSensitiveLog = (obj: DescribeDimensionResponse): any => ({
    ...obj,
  });
}

export interface DescribeDomainConfigurationRequest {
  /**
   * <p>The name of the domain configuration.</p>
   */
  domainConfigurationName: string | undefined;
}

export namespace DescribeDomainConfigurationRequest {
  export const filterSensitiveLog = (obj: DescribeDomainConfigurationRequest): any => ({
    ...obj,
  });
}

export enum DomainConfigurationStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum DomainType {
  AWS_MANAGED = "AWS_MANAGED",
  CUSTOMER_MANAGED = "CUSTOMER_MANAGED",
  ENDPOINT = "ENDPOINT",
}

export enum ServerCertificateStatus {
  INVALID = "INVALID",
  VALID = "VALID",
}

/**
 * <p>An object that contains information about a server certificate.</p>
 */
export interface ServerCertificateSummary {
  /**
   * <p>The ARN of the server certificate.</p>
   */
  serverCertificateArn?: string;

  /**
   * <p>The status of the server certificate.</p>
   */
  serverCertificateStatus?: ServerCertificateStatus | string;

  /**
   * <p>Details that explain the status of the server certificate.</p>
   */
  serverCertificateStatusDetail?: string;
}

export namespace ServerCertificateSummary {
  export const filterSensitiveLog = (obj: ServerCertificateSummary): any => ({
    ...obj,
  });
}

export interface DescribeDomainConfigurationResponse {
  /**
   * <p>The name of the domain configuration.</p>
   */
  domainConfigurationName?: string;

  /**
   * <p>The ARN of the domain configuration.</p>
   */
  domainConfigurationArn?: string;

  /**
   * <p>The name of the domain.</p>
   */
  domainName?: string;

  /**
   * <p>A list containing summary information about the server certificate included in the domain configuration.</p>
   */
  serverCertificates?: ServerCertificateSummary[];

  /**
   * <p>An object that specifies the authorization service for a domain.</p>
   */
  authorizerConfig?: AuthorizerConfig;

  /**
   * <p>A Boolean value that specifies the current state of the domain configuration.</p>
   */
  domainConfigurationStatus?: DomainConfigurationStatus | string;

  /**
   * <p>The type of service delivered by the endpoint.</p>
   */
  serviceType?: ServiceType | string;

  /**
   * <p>The type of the domain.</p>
   */
  domainType?: DomainType | string;

  /**
   * <p>The date and time the domain configuration's status was last changed.</p>
   */
  lastStatusChangeDate?: Date;
}

export namespace DescribeDomainConfigurationResponse {
  export const filterSensitiveLog = (obj: DescribeDomainConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the DescribeEndpoint operation.</p>
 */
export interface DescribeEndpointRequest {
  /**
   * <p>The endpoint type. Valid endpoint types include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>iot:Data</code> - Returns a VeriSign signed data endpoint.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>iot:Data-ATS</code> - Returns an ATS signed data endpoint.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>iot:CredentialProvider</code> - Returns an AWS IoT credentials provider API
   *                endpoint.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>iot:Jobs</code> - Returns an AWS IoT device management Jobs API
   *                endpoint.</p>
   *             </li>
   *          </ul>
   *          <p>We strongly recommend that customers use the newer <code>iot:Data-ATS</code> endpoint type to avoid
   *          issues related to the widespread distrust of Symantec certificate authorities.</p>
   */
  endpointType?: string;
}

export namespace DescribeEndpointRequest {
  export const filterSensitiveLog = (obj: DescribeEndpointRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the DescribeEndpoint operation.</p>
 */
export interface DescribeEndpointResponse {
  /**
   * <p>The endpoint. The format of the endpoint is as follows:
   *             <i>identifier</i>.iot.<i>region</i>.amazonaws.com.</p>
   */
  endpointAddress?: string;
}

export namespace DescribeEndpointResponse {
  export const filterSensitiveLog = (obj: DescribeEndpointResponse): any => ({
    ...obj,
  });
}

export interface DescribeEventConfigurationsRequest {}

export namespace DescribeEventConfigurationsRequest {
  export const filterSensitiveLog = (obj: DescribeEventConfigurationsRequest): any => ({
    ...obj,
  });
}

export enum EventType {
  CA_CERTIFICATE = "CA_CERTIFICATE",
  CERTIFICATE = "CERTIFICATE",
  JOB = "JOB",
  JOB_EXECUTION = "JOB_EXECUTION",
  POLICY = "POLICY",
  THING = "THING",
  THING_GROUP = "THING_GROUP",
  THING_GROUP_HIERARCHY = "THING_GROUP_HIERARCHY",
  THING_GROUP_MEMBERSHIP = "THING_GROUP_MEMBERSHIP",
  THING_TYPE = "THING_TYPE",
  THING_TYPE_ASSOCIATION = "THING_TYPE_ASSOCIATION",
}

/**
 * <p>Configuration.</p>
 */
export interface Configuration {
  /**
   * <p>True to enable the configuration.</p>
   */
  Enabled?: boolean;
}

export namespace Configuration {
  export const filterSensitiveLog = (obj: Configuration): any => ({
    ...obj,
  });
}

export interface DescribeEventConfigurationsResponse {
  /**
   * <p>The event configurations.</p>
   */
  eventConfigurations?: { [key: string]: Configuration };

  /**
   * <p>The creation date of the event configuration.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date the event configurations were last modified.</p>
   */
  lastModifiedDate?: Date;
}

export namespace DescribeEventConfigurationsResponse {
  export const filterSensitiveLog = (obj: DescribeEventConfigurationsResponse): any => ({
    ...obj,
  });
}

export interface DescribeIndexRequest {
  /**
   * <p>The index name.</p>
   */
  indexName: string | undefined;
}

export namespace DescribeIndexRequest {
  export const filterSensitiveLog = (obj: DescribeIndexRequest): any => ({
    ...obj,
  });
}

export enum IndexStatus {
  ACTIVE = "ACTIVE",
  BUILDING = "BUILDING",
  REBUILDING = "REBUILDING",
}

export interface DescribeIndexResponse {
  /**
   * <p>The index name.</p>
   */
  indexName?: string;

  /**
   * <p>The index status.</p>
   */
  indexStatus?: IndexStatus | string;

  /**
   * <p>Contains a value that specifies the type of indexing performed. Valid values
   *       are:</p>
   *          <ul>
   *             <li>
   *                <p>REGISTRY – Your thing index contains only registry data.</p>
   *             </li>
   *             <li>
   *                <p>REGISTRY_AND_SHADOW - Your thing index contains registry data and shadow data.</p>
   *             </li>
   *             <li>
   *                <p>REGISTRY_AND_CONNECTIVITY_STATUS - Your thing index contains registry data and
   *           thing connectivity status data.</p>
   *             </li>
   *             <li>
   *                <p>REGISTRY_AND_SHADOW_AND_CONNECTIVITY_STATUS - Your thing index contains registry
   *           data, shadow data, and thing connectivity status data.</p>
   *             </li>
   *          </ul>
   */
  schema?: string;
}

export namespace DescribeIndexResponse {
  export const filterSensitiveLog = (obj: DescribeIndexResponse): any => ({
    ...obj,
  });
}

export interface DescribeJobRequest {
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;
}

export namespace DescribeJobRequest {
  export const filterSensitiveLog = (obj: DescribeJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The job process details.</p>
 */
export interface JobProcessDetails {
  /**
   * <p>The target devices to which the job execution is being rolled out. This value will be null after the job execution has finished rolling out to all the target devices.</p>
   */
  processingTargets?: string[];

  /**
   * <p>The number of things that cancelled the job.</p>
   */
  numberOfCanceledThings?: number;

  /**
   * <p>The number of things which successfully completed the job.</p>
   */
  numberOfSucceededThings?: number;

  /**
   * <p>The number of things that failed executing the job.</p>
   */
  numberOfFailedThings?: number;

  /**
   * <p>The number of things that rejected the job.</p>
   */
  numberOfRejectedThings?: number;

  /**
   * <p>The number of things that are awaiting execution of the job.</p>
   */
  numberOfQueuedThings?: number;

  /**
   * <p>The number of things currently executing the job.</p>
   */
  numberOfInProgressThings?: number;

  /**
   * <p>The number of things that are no longer scheduled to execute the job because they have been deleted or
   *             have been removed from the group that was a target of the job.</p>
   */
  numberOfRemovedThings?: number;

  /**
   * <p>The number of things whose job execution status is <code>TIMED_OUT</code>.</p>
   */
  numberOfTimedOutThings?: number;
}

export namespace JobProcessDetails {
  export const filterSensitiveLog = (obj: JobProcessDetails): any => ({
    ...obj,
  });
}

export enum JobStatus {
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  DELETION_IN_PROGRESS = "DELETION_IN_PROGRESS",
  IN_PROGRESS = "IN_PROGRESS",
}

/**
 * <p>The <code>Job</code> object contains details about a job.</p>
 */
export interface Job {
  /**
   * <p>An ARN identifying the job with format "arn:aws:iot:region:account:job/jobId".</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things
   *             specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing
   *             when a change is detected in a target. For example, a job will run on a device when the thing representing
   *             the device is added to a target group, even after the job was completed by all things originally in the
   *             group. </p>
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>The status of the job, one of <code>IN_PROGRESS</code>, <code>CANCELED</code>,
   *             <code>DELETION_IN_PROGRESS</code> or <code>COMPLETED</code>. </p>
   */
  status?: JobStatus | string;

  /**
   * <p>Will be <code>true</code> if the job was canceled with the optional <code>force</code> parameter set to
   *           <code>true</code>.</p>
   */
  forceCanceled?: boolean;

  /**
   * <p>If the job was updated, provides the reason code for the update.</p>
   */
  reasonCode?: string;

  /**
   * <p>If the job was updated, describes the reason for the update.</p>
   */
  comment?: string;

  /**
   * <p>A list of IoT things and thing groups to which the job should be sent.</p>
   */
  targets?: string[];

  /**
   * <p>A short text description of the job.</p>
   */
  description?: string;

  /**
   * <p>Configuration for pre-signed S3 URLs.</p>
   */
  presignedUrlConfig?: PresignedUrlConfig;

  /**
   * <p>Allows you to create a staged rollout of a job.</p>
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

  /**
   * <p>Configuration for criteria to abort the job.</p>
   */
  abortConfig?: AbortConfig;

  /**
   * <p>The time, in seconds since the epoch, when the job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job was completed.</p>
   */
  completedAt?: Date;

  /**
   * <p>Details about the job process.</p>
   */
  jobProcessDetails?: JobProcessDetails;

  /**
   * <p>Specifies the amount of time each device has to finish its execution of the job.  A timer
   *            is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job
   *            execution status is not set to another terminal state before the timer expires, it will
   *            be automatically set to <code>TIMED_OUT</code>.</p>
   */
  timeoutConfig?: TimeoutConfig;

  /**
   * <p>The namespace used to indicate that a job is a customer-managed job.</p>
   *         <p>When you specify a value for this parameter, AWS IoT Core sends jobs notifications to MQTT topics that
   *             contain the value in the following format.</p>
   *         <p>
   *             <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code>
   *          </p>
   *         <note>
   *             <p>The <code>namespaceId</code> feature is in public preview.</p>
   *          </note>
   */
  namespaceId?: string;
}

export namespace Job {
  export const filterSensitiveLog = (obj: Job): any => ({
    ...obj,
  });
}

export interface DescribeJobResponse {
  /**
   * <p>An S3 link to the job document.</p>
   */
  documentSource?: string;

  /**
   * <p>Information about the job.</p>
   */
  job?: Job;
}

export namespace DescribeJobResponse {
  export const filterSensitiveLog = (obj: DescribeJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeJobExecutionRequest {
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The name of the thing on which the job execution is running.</p>
   */
  thingName: string | undefined;

  /**
   * <p>A string (consisting of the digits "0" through "9" which is used to specify a particular job execution
   *             on a particular device.</p>
   */
  executionNumber?: number;
}

export namespace DescribeJobExecutionRequest {
  export const filterSensitiveLog = (obj: DescribeJobExecutionRequest): any => ({
    ...obj,
  });
}

export enum JobExecutionStatus {
  CANCELED = "CANCELED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  QUEUED = "QUEUED",
  REJECTED = "REJECTED",
  REMOVED = "REMOVED",
  SUCCEEDED = "SUCCEEDED",
  TIMED_OUT = "TIMED_OUT",
}

/**
 * <p>Details of the job execution status.</p>
 */
export interface JobExecutionStatusDetails {
  /**
   * <p>The job execution status.</p>
   */
  detailsMap?: { [key: string]: string };
}

export namespace JobExecutionStatusDetails {
  export const filterSensitiveLog = (obj: JobExecutionStatusDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The job execution object represents the execution of a job on a particular device.</p>
 */
export interface JobExecution {
  /**
   * <p>The unique identifier you assigned to the job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>The status of the job execution (IN_PROGRESS, QUEUED, FAILED, SUCCEEDED, TIMED_OUT,
   *             CANCELED, or REJECTED).</p>
   */
  status?: JobExecutionStatus | string;

  /**
   * <p>Will be <code>true</code> if the job execution was canceled with the optional <code>force</code>
   *           parameter set to <code>true</code>.</p>
   */
  forceCanceled?: boolean;

  /**
   * <p>A collection of name/value pairs that describe the status of the job execution.</p>
   */
  statusDetails?: JobExecutionStatusDetails;

  /**
   * <p>The ARN of the thing on which the job execution is running.</p>
   */
  thingArn?: string;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was queued.</p>
   */
  queuedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job execution started.</p>
   */
  startedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>A string (consisting of the digits "0" through "9") which identifies this particular job execution on
   *             this particular device. It can be used in commands which return or update job execution information.
   *         </p>
   */
  executionNumber?: number;

  /**
   * <p>The version of the job execution. Job execution versions are incremented each time they are updated
   *       by a device.</p>
   */
  versionNumber?: number;

  /**
   * <p>The estimated number of seconds that remain before the job execution status will be
   *            changed to <code>TIMED_OUT</code>. The timeout interval can be anywhere between 1 minute and 7 days (1 to 10080 minutes).
   *            The actual job execution timeout can occur up to 60 seconds later than the estimated duration.
   *        This value will not be included if the job execution has reached a terminal status.</p>
   */
  approximateSecondsBeforeTimedOut?: number;
}

export namespace JobExecution {
  export const filterSensitiveLog = (obj: JobExecution): any => ({
    ...obj,
  });
}

export interface DescribeJobExecutionResponse {
  /**
   * <p>Information about the job execution.</p>
   */
  execution?: JobExecution;
}

export namespace DescribeJobExecutionResponse {
  export const filterSensitiveLog = (obj: DescribeJobExecutionResponse): any => ({
    ...obj,
  });
}

export interface DescribeMitigationActionRequest {
  /**
   * <p>The friendly name that uniquely identifies the mitigation action.</p>
   */
  actionName: string | undefined;
}

export namespace DescribeMitigationActionRequest {
  export const filterSensitiveLog = (obj: DescribeMitigationActionRequest): any => ({
    ...obj,
  });
}

export enum MitigationActionType {
  ADD_THINGS_TO_THING_GROUP = "ADD_THINGS_TO_THING_GROUP",
  ENABLE_IOT_LOGGING = "ENABLE_IOT_LOGGING",
  PUBLISH_FINDING_TO_SNS = "PUBLISH_FINDING_TO_SNS",
  REPLACE_DEFAULT_POLICY_VERSION = "REPLACE_DEFAULT_POLICY_VERSION",
  UPDATE_CA_CERTIFICATE = "UPDATE_CA_CERTIFICATE",
  UPDATE_DEVICE_CERTIFICATE = "UPDATE_DEVICE_CERTIFICATE",
}

export interface DescribeMitigationActionResponse {
  /**
   * <p>The friendly name that uniquely identifies the mitigation action.</p>
   */
  actionName?: string;

  /**
   * <p>The type of mitigation action.</p>
   */
  actionType?: MitigationActionType | string;

  /**
   * <p>The ARN that identifies this migration action.</p>
   */
  actionArn?: string;

  /**
   * <p>A unique identifier for this action.</p>
   */
  actionId?: string;

  /**
   * <p>The ARN of the IAM role used to apply this action.</p>
   */
  roleArn?: string;

  /**
   * <p>Parameters that control how the mitigation action is applied, specific to the type of mitigation action.</p>
   */
  actionParams?: MitigationActionParams;

  /**
   * <p>The date and time when the mitigation action was added to your AWS account.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date and time when the mitigation action was last changed.</p>
   */
  lastModifiedDate?: Date;
}

export namespace DescribeMitigationActionResponse {
  export const filterSensitiveLog = (obj: DescribeMitigationActionResponse): any => ({
    ...obj,
  });
}

export interface DescribeProvisioningTemplateRequest {
  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName: string | undefined;
}

export namespace DescribeProvisioningTemplateRequest {
  export const filterSensitiveLog = (obj: DescribeProvisioningTemplateRequest): any => ({
    ...obj,
  });
}

export interface DescribeProvisioningTemplateResponse {
  /**
   * <p>The ARN of the fleet provisioning template.</p>
   */
  templateArn?: string;

  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName?: string;

  /**
   * <p>The description of the fleet provisioning template.</p>
   */
  description?: string;

  /**
   * <p>The date when the fleet provisioning template was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date when the fleet provisioning template was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The default fleet template version ID.</p>
   */
  defaultVersionId?: number;

  /**
   * <p>The JSON formatted contents of the fleet provisioning template.</p>
   */
  templateBody?: string;

  /**
   * <p>True if the fleet provisioning template is enabled, otherwise false.</p>
   */
  enabled?: boolean;

  /**
   * <p>The ARN of the role associated with the provisioning template. This IoT role grants
   *          permission to provision a device.</p>
   */
  provisioningRoleArn?: string;

  /**
   * <p>Gets information about a pre-provisioned hook.</p>
   */
  preProvisioningHook?: ProvisioningHook;
}

export namespace DescribeProvisioningTemplateResponse {
  export const filterSensitiveLog = (obj: DescribeProvisioningTemplateResponse): any => ({
    ...obj,
  });
}

export interface DescribeProvisioningTemplateVersionRequest {
  /**
   * <p>The template name.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The fleet provisioning template version ID.</p>
   */
  versionId: number | undefined;
}

export namespace DescribeProvisioningTemplateVersionRequest {
  export const filterSensitiveLog = (obj: DescribeProvisioningTemplateVersionRequest): any => ({
    ...obj,
  });
}

export interface DescribeProvisioningTemplateVersionResponse {
  /**
   * <p>The fleet provisioning template version ID.</p>
   */
  versionId?: number;

  /**
   * <p>The date when the fleet provisioning template version was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The JSON formatted contents of the fleet provisioning template version.</p>
   */
  templateBody?: string;

  /**
   * <p>True if the fleet provisioning template version is the default version.</p>
   */
  isDefaultVersion?: boolean;
}

export namespace DescribeProvisioningTemplateVersionResponse {
  export const filterSensitiveLog = (obj: DescribeProvisioningTemplateVersionResponse): any => ({
    ...obj,
  });
}

export interface DescribeRoleAliasRequest {
  /**
   * <p>The role alias to describe.</p>
   */
  roleAlias: string | undefined;
}

export namespace DescribeRoleAliasRequest {
  export const filterSensitiveLog = (obj: DescribeRoleAliasRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Role alias description.</p>
 */
export interface RoleAliasDescription {
  /**
   * <p>The role alias.</p>
   */
  roleAlias?: string;

  /**
   * <p>The ARN of the role alias.</p>
   */
  roleAliasArn?: string;

  /**
   * <p>The role ARN.</p>
   */
  roleArn?: string;

  /**
   * <p>The role alias owner.</p>
   */
  owner?: string;

  /**
   * <p>The number of seconds for which the credential is valid.</p>
   */
  credentialDurationSeconds?: number;

  /**
   * <p>The UNIX timestamp of when the role alias was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The UNIX timestamp of when the role alias was last modified.</p>
   */
  lastModifiedDate?: Date;
}

export namespace RoleAliasDescription {
  export const filterSensitiveLog = (obj: RoleAliasDescription): any => ({
    ...obj,
  });
}

export interface DescribeRoleAliasResponse {
  /**
   * <p>The role alias description.</p>
   */
  roleAliasDescription?: RoleAliasDescription;
}

export namespace DescribeRoleAliasResponse {
  export const filterSensitiveLog = (obj: DescribeRoleAliasResponse): any => ({
    ...obj,
  });
}

export interface DescribeScheduledAuditRequest {
  /**
   * <p>The name of the scheduled audit whose information you want to get.</p>
   */
  scheduledAuditName: string | undefined;
}

export namespace DescribeScheduledAuditRequest {
  export const filterSensitiveLog = (obj: DescribeScheduledAuditRequest): any => ({
    ...obj,
  });
}

export interface DescribeScheduledAuditResponse {
  /**
   * <p>How often the scheduled audit takes place. One of "DAILY", "WEEKLY",
   *             "BIWEEKLY", or "MONTHLY". The start time of each audit is determined by
   *             the system.</p>
   */
  frequency?: AuditFrequency | string;

  /**
   * <p>The day of the month on which the scheduled audit takes place. Will be "1"
   *             through "31" or "LAST". If days 29-31 are specified, and the month does not have that many
   *             days, the audit takes place on the "LAST" day of the month.</p>
   */
  dayOfMonth?: string;

  /**
   * <p>The day of the week on which the scheduled audit takes place. One of
   *             "SUN", "MON", "TUE", "WED", "THU", "FRI", or "SAT".</p>
   */
  dayOfWeek?: DayOfWeek | string;

  /**
   * <p>Which checks are performed during the scheduled audit. Checks must be
   *             enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *             of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *             to select which checks are enabled.)</p>
   */
  targetCheckNames?: string[];

  /**
   * <p>The name of the scheduled audit.</p>
   */
  scheduledAuditName?: string;

  /**
   * <p>The ARN of the scheduled audit.</p>
   */
  scheduledAuditArn?: string;
}

export namespace DescribeScheduledAuditResponse {
  export const filterSensitiveLog = (obj: DescribeScheduledAuditResponse): any => ({
    ...obj,
  });
}

export interface DescribeSecurityProfileRequest {
  /**
   * <p>The name of the security profile whose information you want to get.</p>
   */
  securityProfileName: string | undefined;
}

export namespace DescribeSecurityProfileRequest {
  export const filterSensitiveLog = (obj: DescribeSecurityProfileRequest): any => ({
    ...obj,
  });
}

export interface DescribeSecurityProfileResponse {
  /**
   * <p>The name of the security profile.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The ARN of the security profile.</p>
   */
  securityProfileArn?: string;

  /**
   * <p>A description of the security profile (associated with the security profile
   *         when it was created or updated).</p>
   */
  securityProfileDescription?: string;

  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   */
  behaviors?: Behavior[];

  /**
   * <p>Where the alerts are sent. (Alerts are always sent to the console.)</p>
   */
  alertTargets?: { [key: string]: AlertTarget };

  /**
   * @deprecated
   *
   * <p>
   *             <i>Please use <a>DescribeSecurityProfileResponse$additionalMetricsToRetainV2</a> instead.</i>
   *          </p>
   *          <p>A list of metrics whose data is retained (stored). By default, data is retained
   *         for any metric used in the profile's <code>behaviors</code>, but it is also retained for
   *         any metric specified here.</p>
   */
  additionalMetricsToRetain?: string[];

  /**
   * <p>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here.</p>
   */
  additionalMetricsToRetainV2?: MetricToRetain[];

  /**
   * <p>The version of the security profile. A new version is generated whenever the
   *         security profile is updated.</p>
   */
  version?: number;

  /**
   * <p>The time the security profile was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The time the security profile was last modified.</p>
   */
  lastModifiedDate?: Date;
}

export namespace DescribeSecurityProfileResponse {
  export const filterSensitiveLog = (obj: DescribeSecurityProfileResponse): any => ({
    ...obj,
  });
}

export interface DescribeStreamRequest {
  /**
   * <p>The stream ID.</p>
   */
  streamId: string | undefined;
}

export namespace DescribeStreamRequest {
  export const filterSensitiveLog = (obj: DescribeStreamRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a stream.</p>
 */
export interface StreamInfo {
  /**
   * <p>The stream ID.</p>
   */
  streamId?: string;

  /**
   * <p>The stream ARN.</p>
   */
  streamArn?: string;

  /**
   * <p>The stream version.</p>
   */
  streamVersion?: number;

  /**
   * <p>The description of the stream.</p>
   */
  description?: string;

  /**
   * <p>The files to stream.</p>
   */
  files?: StreamFile[];

  /**
   * <p>The date when the stream was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The date when the stream was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>An IAM role AWS IoT assumes to access your S3 files.</p>
   */
  roleArn?: string;
}

export namespace StreamInfo {
  export const filterSensitiveLog = (obj: StreamInfo): any => ({
    ...obj,
  });
}

export interface DescribeStreamResponse {
  /**
   * <p>Information about the stream.</p>
   */
  streamInfo?: StreamInfo;
}

export namespace DescribeStreamResponse {
  export const filterSensitiveLog = (obj: DescribeStreamResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the DescribeThing operation.</p>
 */
export interface DescribeThingRequest {
  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;
}

export namespace DescribeThingRequest {
  export const filterSensitiveLog = (obj: DescribeThingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the DescribeThing operation.</p>
 */
export interface DescribeThingResponse {
  /**
   * <p>The default MQTT client ID. For a typical device, the thing name is also used as the default MQTT client ID.
   * 			Although we don’t require a mapping between a thing's registry name and its use of MQTT client IDs, certificates, or
   * 			shadow state, we recommend that you choose a thing name and use it as the MQTT client ID for the registry and the Device Shadow service.</p>
   * 		       <p>This lets you better organize your AWS IoT fleet without removing the flexibility of the underlying device certificate model or shadows.</p>
   */
  defaultClientId?: string;

  /**
   * <p>The name of the thing.</p>
   */
  thingName?: string;

  /**
   * <p>The ID of the thing to describe.</p>
   */
  thingId?: string;

  /**
   * <p>The ARN of the thing to describe.</p>
   */
  thingArn?: string;

  /**
   * <p>The thing type name.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The thing attributes.</p>
   */
  attributes?: { [key: string]: string };

  /**
   * <p>The current version of the thing record in the registry.</p>
   * 		       <note>
   * 			         <p>To avoid unintentional changes to the information in the registry, you can pass
   * 				the version information in the <code>expectedVersion</code> parameter of the
   * 					<code>UpdateThing</code> and <code>DeleteThing</code> calls.</p>
   * 		       </note>
   */
  version?: number;

  /**
   * <p>The name of the billing group the thing belongs to.</p>
   */
  billingGroupName?: string;
}

export namespace DescribeThingResponse {
  export const filterSensitiveLog = (obj: DescribeThingResponse): any => ({
    ...obj,
  });
}

export interface DescribeThingGroupRequest {
  /**
   * <p>The name of the thing group.</p>
   */
  thingGroupName: string | undefined;
}

export namespace DescribeThingGroupRequest {
  export const filterSensitiveLog = (obj: DescribeThingGroupRequest): any => ({
    ...obj,
  });
}

export enum DynamicGroupStatus {
  ACTIVE = "ACTIVE",
  BUILDING = "BUILDING",
  REBUILDING = "REBUILDING",
}

/**
 * <p>The name and ARN of a group.</p>
 */
export interface GroupNameAndArn {
  /**
   * <p>The group name.</p>
   */
  groupName?: string;

  /**
   * <p>The group ARN.</p>
   */
  groupArn?: string;
}

export namespace GroupNameAndArn {
  export const filterSensitiveLog = (obj: GroupNameAndArn): any => ({
    ...obj,
  });
}

/**
 * <p>Thing group metadata.</p>
 */
export interface ThingGroupMetadata {
  /**
   * <p>The parent thing group name.</p>
   */
  parentGroupName?: string;

  /**
   * <p>The root parent thing group.</p>
   */
  rootToParentThingGroups?: GroupNameAndArn[];

  /**
   * <p>The UNIX timestamp of when the thing group was created.</p>
   */
  creationDate?: Date;
}

export namespace ThingGroupMetadata {
  export const filterSensitiveLog = (obj: ThingGroupMetadata): any => ({
    ...obj,
  });
}

export interface DescribeThingGroupResponse {
  /**
   * <p>The name of the thing group.</p>
   */
  thingGroupName?: string;

  /**
   * <p>The thing group ID.</p>
   */
  thingGroupId?: string;

  /**
   * <p>The thing group ARN.</p>
   */
  thingGroupArn?: string;

  /**
   * <p>The version of the thing group.</p>
   */
  version?: number;

  /**
   * <p>The thing group properties.</p>
   */
  thingGroupProperties?: ThingGroupProperties;

  /**
   * <p>Thing group metadata.</p>
   */
  thingGroupMetadata?: ThingGroupMetadata;

  /**
   * <p>The dynamic thing group index name.</p>
   */
  indexName?: string;

  /**
   * <p>The dynamic thing group search query string.</p>
   */
  queryString?: string;

  /**
   * <p>The dynamic thing group query version.</p>
   */
  queryVersion?: string;

  /**
   * <p>The dynamic thing group status.</p>
   */
  status?: DynamicGroupStatus | string;
}

export namespace DescribeThingGroupResponse {
  export const filterSensitiveLog = (obj: DescribeThingGroupResponse): any => ({
    ...obj,
  });
}

export interface DescribeThingRegistrationTaskRequest {
  /**
   * <p>The task ID.</p>
   */
  taskId: string | undefined;
}

export namespace DescribeThingRegistrationTaskRequest {
  export const filterSensitiveLog = (obj: DescribeThingRegistrationTaskRequest): any => ({
    ...obj,
  });
}

export enum Status {
  Cancelled = "Cancelled",
  Cancelling = "Cancelling",
  Completed = "Completed",
  Failed = "Failed",
  InProgress = "InProgress",
}

export interface DescribeThingRegistrationTaskResponse {
  /**
   * <p>The task ID.</p>
   */
  taskId?: string;

  /**
   * <p>The task creation date.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date when the task was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The task's template.</p>
   */
  templateBody?: string;

  /**
   * <p>The S3 bucket that contains the input file.</p>
   */
  inputFileBucket?: string;

  /**
   * <p>The input file key.</p>
   */
  inputFileKey?: string;

  /**
   * <p>The role ARN that grants access to the input file bucket.</p>
   */
  roleArn?: string;

  /**
   * <p>The status of the bulk thing provisioning task.</p>
   */
  status?: Status | string;

  /**
   * <p>The message.</p>
   */
  message?: string;

  /**
   * <p>The number of things successfully provisioned.</p>
   */
  successCount?: number;

  /**
   * <p>The number of things that failed to be provisioned.</p>
   */
  failureCount?: number;

  /**
   * <p>The progress of the bulk provisioning task expressed as a percentage.</p>
   */
  percentageProgress?: number;
}

export namespace DescribeThingRegistrationTaskResponse {
  export const filterSensitiveLog = (obj: DescribeThingRegistrationTaskResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the DescribeThingType operation.</p>
 */
export interface DescribeThingTypeRequest {
  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName: string | undefined;
}

export namespace DescribeThingTypeRequest {
  export const filterSensitiveLog = (obj: DescribeThingTypeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The ThingTypeMetadata contains additional information about the thing type including: creation date and
 * 			time, a value indicating whether the thing type is deprecated, and a date and time when time was
 * 			deprecated.</p>
 */
export interface ThingTypeMetadata {
  /**
   * <p>Whether the thing type is deprecated. If <b>true</b>, no new things could be
   * 			associated with this type.</p>
   */
  deprecated?: boolean;

  /**
   * <p>The date and time when the thing type was deprecated.</p>
   */
  deprecationDate?: Date;

  /**
   * <p>The date and time when the thing type was created.</p>
   */
  creationDate?: Date;
}

export namespace ThingTypeMetadata {
  export const filterSensitiveLog = (obj: ThingTypeMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>The output for the DescribeThingType operation.</p>
 */
export interface DescribeThingTypeResponse {
  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The thing type ID.</p>
   */
  thingTypeId?: string;

  /**
   * <p>The thing type ARN.</p>
   */
  thingTypeArn?: string;

  /**
   * <p>The ThingTypeProperties contains information about the thing type including
   * 			description, and a list of searchable thing attribute names.</p>
   */
  thingTypeProperties?: ThingTypeProperties;

  /**
   * <p>The ThingTypeMetadata contains additional information about the thing type
   * 			including: creation date and time, a value indicating whether the thing type is
   * 			deprecated, and a date and time when it was deprecated.</p>
   */
  thingTypeMetadata?: ThingTypeMetadata;
}

export namespace DescribeThingTypeResponse {
  export const filterSensitiveLog = (obj: DescribeThingTypeResponse): any => ({
    ...obj,
  });
}

export interface DetachPolicyRequest {
  /**
   * <p>The policy to detach.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The target from which the policy will be detached.</p>
   */
  target: string | undefined;
}

export namespace DetachPolicyRequest {
  export const filterSensitiveLog = (obj: DetachPolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the DetachPrincipalPolicy operation.</p>
 */
export interface DetachPrincipalPolicyRequest {
  /**
   * <p>The name of the policy to detach.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The principal.</p>
   *          <p>Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).</p>
   */
  principal: string | undefined;
}

export namespace DetachPrincipalPolicyRequest {
  export const filterSensitiveLog = (obj: DetachPrincipalPolicyRequest): any => ({
    ...obj,
  });
}

export interface DetachSecurityProfileRequest {
  /**
   * <p>The security profile that is detached.</p>
   */
  securityProfileName: string | undefined;

  /**
   * <p>The ARN of the thing group from which the security profile is detached.</p>
   */
  securityProfileTargetArn: string | undefined;
}

export namespace DetachSecurityProfileRequest {
  export const filterSensitiveLog = (obj: DetachSecurityProfileRequest): any => ({
    ...obj,
  });
}

export interface DetachSecurityProfileResponse {}

export namespace DetachSecurityProfileResponse {
  export const filterSensitiveLog = (obj: DetachSecurityProfileResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the DetachThingPrincipal operation.</p>
 */
export interface DetachThingPrincipalRequest {
  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;

  /**
   * <p>If the principal is a certificate, this value must be ARN of the certificate. If
   * 			the principal is an Amazon Cognito identity, this value must be the ID of the Amazon
   * 			Cognito identity.</p>
   */
  principal: string | undefined;
}

export namespace DetachThingPrincipalRequest {
  export const filterSensitiveLog = (obj: DetachThingPrincipalRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the DetachThingPrincipal operation.</p>
 */
export interface DetachThingPrincipalResponse {}

export namespace DetachThingPrincipalResponse {
  export const filterSensitiveLog = (obj: DetachThingPrincipalResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the DisableTopicRuleRequest operation.</p>
 */
export interface DisableTopicRuleRequest {
  /**
   * <p>The name of the rule to disable.</p>
   */
  ruleName: string | undefined;
}

export namespace DisableTopicRuleRequest {
  export const filterSensitiveLog = (obj: DisableTopicRuleRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the EnableTopicRuleRequest operation.</p>
 */
export interface EnableTopicRuleRequest {
  /**
   * <p>The name of the topic rule to enable.</p>
   */
  ruleName: string | undefined;
}

export namespace EnableTopicRuleRequest {
  export const filterSensitiveLog = (obj: EnableTopicRuleRequest): any => ({
    ...obj,
  });
}

export interface GetCardinalityRequest {
  /**
   * <p>The name of the index to search.</p>
   */
  indexName?: string;

  /**
   * <p>The search query.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The field to aggregate.</p>
   */
  aggregationField?: string;

  /**
   * <p>The query version.</p>
   */
  queryVersion?: string;
}

export namespace GetCardinalityRequest {
  export const filterSensitiveLog = (obj: GetCardinalityRequest): any => ({
    ...obj,
  });
}

export interface GetCardinalityResponse {
  /**
   * <p>The approximate count of unique values that match the query.</p>
   */
  cardinality?: number;
}

export namespace GetCardinalityResponse {
  export const filterSensitiveLog = (obj: GetCardinalityResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The index is not ready.</p>
 */
export interface IndexNotReadyException extends __SmithyException, $MetadataBearer {
  name: "IndexNotReadyException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace IndexNotReadyException {
  export const filterSensitiveLog = (obj: IndexNotReadyException): any => ({
    ...obj,
  });
}

/**
 * <p>The aggregation is invalid.</p>
 */
export interface InvalidAggregationException extends __SmithyException, $MetadataBearer {
  name: "InvalidAggregationException";
  $fault: "client";
  message?: string;
}

export namespace InvalidAggregationException {
  export const filterSensitiveLog = (obj: InvalidAggregationException): any => ({
    ...obj,
  });
}

export interface GetEffectivePoliciesRequest {
  /**
   * <p>The principal. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).</p>
   */
  principal?: string;

  /**
   * <p>The Cognito identity pool ID.</p>
   */
  cognitoIdentityPoolId?: string;

  /**
   * <p>The thing name.</p>
   */
  thingName?: string;
}

export namespace GetEffectivePoliciesRequest {
  export const filterSensitiveLog = (obj: GetEffectivePoliciesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The policy that has the effect on the authorization results.</p>
 */
export interface EffectivePolicy {
  /**
   * <p>The policy name.</p>
   */
  policyName?: string;

  /**
   * <p>The policy ARN.</p>
   */
  policyArn?: string;

  /**
   * <p>The IAM policy document.</p>
   */
  policyDocument?: string;
}

export namespace EffectivePolicy {
  export const filterSensitiveLog = (obj: EffectivePolicy): any => ({
    ...obj,
  });
}

export interface GetEffectivePoliciesResponse {
  /**
   * <p>The effective policies.</p>
   */
  effectivePolicies?: EffectivePolicy[];
}

export namespace GetEffectivePoliciesResponse {
  export const filterSensitiveLog = (obj: GetEffectivePoliciesResponse): any => ({
    ...obj,
  });
}

export interface GetIndexingConfigurationRequest {}

export namespace GetIndexingConfigurationRequest {
  export const filterSensitiveLog = (obj: GetIndexingConfigurationRequest): any => ({
    ...obj,
  });
}

export enum FieldType {
  BOOLEAN = "Boolean",
  NUMBER = "Number",
  STRING = "String",
}

/**
 * <p>Describes the name and data type at a field.</p>
 */
export interface Field {
  /**
   * <p>The name of the field.</p>
   */
  name?: string;

  /**
   * <p>The datatype of the field.</p>
   */
  type?: FieldType | string;
}

export namespace Field {
  export const filterSensitiveLog = (obj: Field): any => ({
    ...obj,
  });
}

export enum ThingGroupIndexingMode {
  OFF = "OFF",
  ON = "ON",
}

/**
 * <p>Thing group indexing configuration.</p>
 */
export interface ThingGroupIndexingConfiguration {
  /**
   * <p>Thing group indexing mode.</p>
   */
  thingGroupIndexingMode: ThingGroupIndexingMode | string | undefined;

  /**
   * <p>Contains fields that are indexed and whose types are already known by the Fleet Indexing
   *       service.</p>
   */
  managedFields?: Field[];

  /**
   * <p>A list of thing group fields to index. This list cannot contain any managed fields. Use
   *       the GetIndexingConfiguration API to get a list of managed fields.</p>
   *          <p>Contains custom field names and their data type.</p>
   */
  customFields?: Field[];
}

export namespace ThingGroupIndexingConfiguration {
  export const filterSensitiveLog = (obj: ThingGroupIndexingConfiguration): any => ({
    ...obj,
  });
}

export enum ThingConnectivityIndexingMode {
  OFF = "OFF",
  STATUS = "STATUS",
}

export enum ThingIndexingMode {
  OFF = "OFF",
  REGISTRY = "REGISTRY",
  REGISTRY_AND_SHADOW = "REGISTRY_AND_SHADOW",
}

/**
 * <p>The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing
 *         Thing Indexing</a>.</p>
 */
export interface ThingIndexingConfiguration {
  /**
   * <p>Thing indexing mode. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>REGISTRY – Your thing index contains registry data only.</p>
   *             </li>
   *             <li>
   *                <p>REGISTRY_AND_SHADOW - Your thing index contains registry and shadow data.</p>
   *             </li>
   *             <li>
   *                <p>OFF - Thing indexing is disabled.</p>
   *             </li>
   *          </ul>
   */
  thingIndexingMode: ThingIndexingMode | string | undefined;

  /**
   * <p>Thing connectivity indexing mode. Valid values are: </p>
   *          <ul>
   *             <li>
   *                <p>STATUS – Your thing index contains connectivity status. To enable thing
   *           connectivity indexing, thingIndexMode must not be set to OFF.</p>
   *             </li>
   *             <li>
   *                <p>OFF - Thing connectivity status indexing is disabled.</p>
   *             </li>
   *          </ul>
   */
  thingConnectivityIndexingMode?: ThingConnectivityIndexingMode | string;

  /**
   * <p>Contains fields that are indexed and whose types are already known by the Fleet Indexing
   *       service.</p>
   */
  managedFields?: Field[];

  /**
   * <p>Contains custom field names and their data type.</p>
   */
  customFields?: Field[];
}

export namespace ThingIndexingConfiguration {
  export const filterSensitiveLog = (obj: ThingIndexingConfiguration): any => ({
    ...obj,
  });
}

export interface GetIndexingConfigurationResponse {
  /**
   * <p>Thing indexing configuration.</p>
   */
  thingIndexingConfiguration?: ThingIndexingConfiguration;

  /**
   * <p>The index configuration.</p>
   */
  thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration;
}

export namespace GetIndexingConfigurationResponse {
  export const filterSensitiveLog = (obj: GetIndexingConfigurationResponse): any => ({
    ...obj,
  });
}

export interface GetJobDocumentRequest {
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;
}

export namespace GetJobDocumentRequest {
  export const filterSensitiveLog = (obj: GetJobDocumentRequest): any => ({
    ...obj,
  });
}

export interface GetJobDocumentResponse {
  /**
   * <p>The job document content.</p>
   */
  document?: string;
}

export namespace GetJobDocumentResponse {
  export const filterSensitiveLog = (obj: GetJobDocumentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the GetLoggingOptions operation.</p>
 */
export interface GetLoggingOptionsRequest {}

export namespace GetLoggingOptionsRequest {
  export const filterSensitiveLog = (obj: GetLoggingOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the GetLoggingOptions operation.</p>
 */
export interface GetLoggingOptionsResponse {
  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn?: string;

  /**
   * <p>The logging level.</p>
   */
  logLevel?: LogLevel | string;
}

export namespace GetLoggingOptionsResponse {
  export const filterSensitiveLog = (obj: GetLoggingOptionsResponse): any => ({
    ...obj,
  });
}

export interface GetOTAUpdateRequest {
  /**
   * <p>The OTA update ID.</p>
   */
  otaUpdateId: string | undefined;
}

export namespace GetOTAUpdateRequest {
  export const filterSensitiveLog = (obj: GetOTAUpdateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Error information.</p>
 */
export interface ErrorInfo {
  /**
   * <p>The error code.</p>
   */
  code?: string;

  /**
   * <p>The error message.</p>
   */
  message?: string;
}

export namespace ErrorInfo {
  export const filterSensitiveLog = (obj: ErrorInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an OTA update.</p>
 */
export interface OTAUpdateInfo {
  /**
   * <p>The OTA update ID.</p>
   */
  otaUpdateId?: string;

  /**
   * <p>The OTA update ARN.</p>
   */
  otaUpdateArn?: string;

  /**
   * <p>The date when the OTA update was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date when the OTA update was last updated.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>A description of the OTA update.</p>
   */
  description?: string;

  /**
   * <p>The targets of the OTA update.</p>
   */
  targets?: string[];

  /**
   * <p>The protocol used to transfer the OTA update image. Valid values are [HTTP], [MQTT], [HTTP, MQTT]. When both
   *              HTTP and MQTT are specified, the target device can choose the protocol.</p>
   */
  protocols?: (Protocol | string)[];

  /**
   * <p>Configuration for the rollout of OTA updates.</p>
   */
  awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig;

  /**
   * <p>Configuration information for pre-signed URLs. Valid when <code>protocols</code>
   *              contains HTTP.</p>
   */
  awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig;

  /**
   * <p>Specifies whether the OTA update will continue to run (CONTINUOUS), or will be complete after all those
   *             things specified as targets have completed the OTA update (SNAPSHOT). If continuous, the OTA update may also
   *             be run on a thing when a change is detected in a target. For example, an OTA update will run on a thing when
   *             the thing is added to a target group, even after the OTA update was completed by all things originally in
   *             the group. </p>
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>A list of files associated with the OTA update.</p>
   */
  otaUpdateFiles?: OTAUpdateFile[];

  /**
   * <p>The status of the OTA update.</p>
   */
  otaUpdateStatus?: OTAUpdateStatus | string;

  /**
   * <p>The AWS IoT job ID associated with the OTA update.</p>
   */
  awsIotJobId?: string;

  /**
   * <p>The AWS IoT job ARN associated with the OTA update.</p>
   */
  awsIotJobArn?: string;

  /**
   * <p>Error information associated with the OTA update.</p>
   */
  errorInfo?: ErrorInfo;

  /**
   * <p>A collection of name/value pairs</p>
   */
  additionalParameters?: { [key: string]: string };
}

export namespace OTAUpdateInfo {
  export const filterSensitiveLog = (obj: OTAUpdateInfo): any => ({
    ...obj,
  });
}

export interface GetOTAUpdateResponse {
  /**
   * <p>The OTA update info.</p>
   */
  otaUpdateInfo?: OTAUpdateInfo;
}

export namespace GetOTAUpdateResponse {
  export const filterSensitiveLog = (obj: GetOTAUpdateResponse): any => ({
    ...obj,
  });
}

export interface GetPercentilesRequest {
  /**
   * <p>The name of the index to search.</p>
   */
  indexName?: string;

  /**
   * <p>The query string.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The field to aggregate.</p>
   */
  aggregationField?: string;

  /**
   * <p>The query version.</p>
   */
  queryVersion?: string;

  /**
   * <p>The percentile groups returned.</p>
   */
  percents?: number[];
}

export namespace GetPercentilesRequest {
  export const filterSensitiveLog = (obj: GetPercentilesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the percentile and percentile value.</p>
 */
export interface PercentPair {
  /**
   * <p>The percentile.</p>
   */
  percent?: number;

  /**
   * <p>The value of the percentile.</p>
   */
  value?: number;
}

export namespace PercentPair {
  export const filterSensitiveLog = (obj: PercentPair): any => ({
    ...obj,
  });
}

export interface GetPercentilesResponse {
  /**
   * <p>The percentile values of the aggregated fields.</p>
   */
  percentiles?: PercentPair[];
}

export namespace GetPercentilesResponse {
  export const filterSensitiveLog = (obj: GetPercentilesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the GetPolicy operation.</p>
 */
export interface GetPolicyRequest {
  /**
   * <p>The name of the policy.</p>
   */
  policyName: string | undefined;
}

export namespace GetPolicyRequest {
  export const filterSensitiveLog = (obj: GetPolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the GetPolicy operation.</p>
 */
export interface GetPolicyResponse {
  /**
   * <p>The policy name.</p>
   */
  policyName?: string;

  /**
   * <p>The policy ARN.</p>
   */
  policyArn?: string;

  /**
   * <p>The JSON document that describes the policy.</p>
   */
  policyDocument?: string;

  /**
   * <p>The default policy version ID.</p>
   */
  defaultVersionId?: string;

  /**
   * <p>The date the policy was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date the policy was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The generation ID of the policy.</p>
   */
  generationId?: string;
}

export namespace GetPolicyResponse {
  export const filterSensitiveLog = (obj: GetPolicyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the GetPolicyVersion operation.</p>
 */
export interface GetPolicyVersionRequest {
  /**
   * <p>The name of the policy.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The policy version ID.</p>
   */
  policyVersionId: string | undefined;
}

export namespace GetPolicyVersionRequest {
  export const filterSensitiveLog = (obj: GetPolicyVersionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the GetPolicyVersion operation.</p>
 */
export interface GetPolicyVersionResponse {
  /**
   * <p>The policy ARN.</p>
   */
  policyArn?: string;

  /**
   * <p>The policy name.</p>
   */
  policyName?: string;

  /**
   * <p>The JSON document that describes the policy.</p>
   */
  policyDocument?: string;

  /**
   * <p>The policy version ID.</p>
   */
  policyVersionId?: string;

  /**
   * <p>Specifies whether the policy version is the default.</p>
   */
  isDefaultVersion?: boolean;

  /**
   * <p>The date the policy was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date the policy was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The generation ID of the policy version.</p>
   */
  generationId?: string;
}

export namespace GetPolicyVersionResponse {
  export const filterSensitiveLog = (obj: GetPolicyVersionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input to the GetRegistrationCode operation.</p>
 */
export interface GetRegistrationCodeRequest {}

export namespace GetRegistrationCodeRequest {
  export const filterSensitiveLog = (obj: GetRegistrationCodeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the GetRegistrationCode operation.</p>
 */
export interface GetRegistrationCodeResponse {
  /**
   * <p>The CA certificate registration code.</p>
   */
  registrationCode?: string;
}

export namespace GetRegistrationCodeResponse {
  export const filterSensitiveLog = (obj: GetRegistrationCodeResponse): any => ({
    ...obj,
  });
}

export interface GetStatisticsRequest {
  /**
   * <p>The name of the index to search. The default value is <code>AWS_Things</code>.</p>
   */
  indexName?: string;

  /**
   * <p>The query used to search. You can specify "*" for the query string to get the count of all
   *       indexed things in your AWS account.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The aggregation field name.</p>
   */
  aggregationField?: string;

  /**
   * <p>The version of the query used to search.</p>
   */
  queryVersion?: string;
}

export namespace GetStatisticsRequest {
  export const filterSensitiveLog = (obj: GetStatisticsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A map of key-value pairs for all supported statistics. Currently, only count is
 *       supported.</p>
 */
export interface Statistics {
  /**
   * <p>The count of things that match the query.</p>
   */
  count?: number;

  /**
   * <p>The average of the aggregated field values.</p>
   */
  average?: number;

  /**
   * <p>The sum of the aggregated field values.</p>
   */
  sum?: number;

  /**
   * <p>The minimum aggregated field value.</p>
   */
  minimum?: number;

  /**
   * <p>The maximum aggregated field value.</p>
   */
  maximum?: number;

  /**
   * <p>The sum of the squares of the aggregated field values.</p>
   */
  sumOfSquares?: number;

  /**
   * <p>The variance of the aggregated field values.</p>
   */
  variance?: number;

  /**
   * <p>The standard deviation of the aggregated field values.</p>
   */
  stdDeviation?: number;
}

export namespace Statistics {
  export const filterSensitiveLog = (obj: Statistics): any => ({
    ...obj,
  });
}

export interface GetStatisticsResponse {
  /**
   * <p>The statistics returned by the Fleet Indexing service based on the query and aggregation
   *       field.</p>
   */
  statistics?: Statistics;
}

export namespace GetStatisticsResponse {
  export const filterSensitiveLog = (obj: GetStatisticsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the GetTopicRule operation.</p>
 */
export interface GetTopicRuleRequest {
  /**
   * <p>The name of the rule.</p>
   */
  ruleName: string | undefined;
}

export namespace GetTopicRuleRequest {
  export const filterSensitiveLog = (obj: GetTopicRuleRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a rule.</p>
 */
export interface TopicRule {
  /**
   * <p>The name of the rule.</p>
   */
  ruleName?: string;

  /**
   * <p>The SQL statement used to query the topic. When using a SQL query with multiple
   *          lines, be sure to escape the newline characters.</p>
   */
  sql?: string;

  /**
   * <p>The description of the rule.</p>
   */
  description?: string;

  /**
   * <p>The date and time the rule was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The actions associated with the rule.</p>
   */
  actions?: Action[];

  /**
   * <p>Specifies whether the rule is disabled.</p>
   */
  ruleDisabled?: boolean;

  /**
   * <p>The version of the SQL rules engine to use when evaluating the rule.</p>
   */
  awsIotSqlVersion?: string;

  /**
   * <p>The action to perform when an error occurs.</p>
   */
  errorAction?: Action;
}

export namespace TopicRule {
  export const filterSensitiveLog = (obj: TopicRule): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the GetTopicRule operation.</p>
 */
export interface GetTopicRuleResponse {
  /**
   * <p>The rule ARN.</p>
   */
  ruleArn?: string;

  /**
   * <p>The rule.</p>
   */
  rule?: TopicRule;
}

export namespace GetTopicRuleResponse {
  export const filterSensitiveLog = (obj: GetTopicRuleResponse): any => ({
    ...obj,
  });
}

export interface GetTopicRuleDestinationRequest {
  /**
   * <p>The ARN of the topic rule destination.</p>
   */
  arn: string | undefined;
}

export namespace GetTopicRuleDestinationRequest {
  export const filterSensitiveLog = (obj: GetTopicRuleDestinationRequest): any => ({
    ...obj,
  });
}

export interface GetTopicRuleDestinationResponse {
  /**
   * <p>The topic rule destination.</p>
   */
  topicRuleDestination?: TopicRuleDestination;
}

export namespace GetTopicRuleDestinationResponse {
  export const filterSensitiveLog = (obj: GetTopicRuleDestinationResponse): any => ({
    ...obj,
  });
}

export interface GetV2LoggingOptionsRequest {}

export namespace GetV2LoggingOptionsRequest {
  export const filterSensitiveLog = (obj: GetV2LoggingOptionsRequest): any => ({
    ...obj,
  });
}

export interface GetV2LoggingOptionsResponse {
  /**
   * <p>The IAM role ARN AWS IoT uses to write to your CloudWatch logs.</p>
   */
  roleArn?: string;

  /**
   * <p>The default log level.</p>
   */
  defaultLogLevel?: LogLevel | string;

  /**
   * <p>Disables all logs.</p>
   */
  disableAllLogs?: boolean;
}

export namespace GetV2LoggingOptionsResponse {
  export const filterSensitiveLog = (obj: GetV2LoggingOptionsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The resource is not configured.</p>
 */
export interface NotConfiguredException extends __SmithyException, $MetadataBearer {
  name: "NotConfiguredException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace NotConfiguredException {
  export const filterSensitiveLog = (obj: NotConfiguredException): any => ({
    ...obj,
  });
}

export interface ListActiveViolationsRequest {
  /**
   * <p>The name of the thing whose active violations are listed.</p>
   */
  thingName?: string;

  /**
   * <p>The name of the Device Defender security profile for which violations are listed.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

export namespace ListActiveViolationsRequest {
  export const filterSensitiveLog = (obj: ListActiveViolationsRequest): any => ({
    ...obj,
  });
}

export interface ListActiveViolationsResponse {
  /**
   * <p>The list of active violations.</p>
   */
  activeViolations?: ActiveViolation[];

  /**
   * <p>A token that can be used to retrieve the next set of results,
   *             or <code>null</code> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListActiveViolationsResponse {
  export const filterSensitiveLog = (obj: ListActiveViolationsResponse): any => ({
    ...obj,
  });
}

export interface ListAttachedPoliciesRequest {
  /**
   * <p>The group or principal for which the policies will be listed. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).</p>
   */
  target: string | undefined;

  /**
   * <p>When true, recursively list attached policies.</p>
   */
  recursive?: boolean;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  pageSize?: number;
}

export namespace ListAttachedPoliciesRequest {
  export const filterSensitiveLog = (obj: ListAttachedPoliciesRequest): any => ({
    ...obj,
  });
}

export interface ListAttachedPoliciesResponse {
  /**
   * <p>The policies.</p>
   */
  policies?: Policy[];

  /**
   * <p>The token to retrieve the next set of results, or ``null`` if there are no more
   *          results.</p>
   */
  nextMarker?: string;
}

export namespace ListAttachedPoliciesResponse {
  export const filterSensitiveLog = (obj: ListAttachedPoliciesResponse): any => ({
    ...obj,
  });
}

export interface ListAuditFindingsRequest {
  /**
   * <p>A filter to limit results to the audit with the specified ID. You must
   *             specify either the taskId or the startTime and endTime, but not both.</p>
   */
  taskId?: string;

  /**
   * <p>A filter to limit results to the findings for the specified audit check.</p>
   */
  checkName?: string;

  /**
   * <p>Information identifying the noncompliant resource.</p>
   */
  resourceIdentifier?: ResourceIdentifier;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A filter to limit results to those found after the specified time. You must
   *             specify either the startTime and endTime or the taskId, but not both.</p>
   */
  startTime?: Date;

  /**
   * <p>A filter to limit results to those found before the specified time. You must
   *             specify either the startTime and endTime or the taskId, but not both.</p>
   */
  endTime?: Date;

  /**
   * <p>
   *       Boolean flag indicating whether only the suppressed findings or the unsuppressed findings should be listed. If this parameter isn't provided, the response will list both suppressed and unsuppressed findings.
   *     </p>
   */
  listSuppressedFindings?: boolean;
}

export namespace ListAuditFindingsRequest {
  export const filterSensitiveLog = (obj: ListAuditFindingsRequest): any => ({
    ...obj,
  });
}

export interface ListAuditFindingsResponse {
  /**
   * <p>The findings (results) of the audit.</p>
   */
  findings?: AuditFinding[];

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code>
   *             if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListAuditFindingsResponse {
  export const filterSensitiveLog = (obj: ListAuditFindingsResponse): any => ({
    ...obj,
  });
}

export interface ListAuditMitigationActionsExecutionsRequest {
  /**
   * <p>Specify this filter to limit results to actions for a specific audit mitigation actions task.</p>
   */
  taskId: string | undefined;

  /**
   * <p>Specify this filter to limit results to those with a specific status.</p>
   */
  actionStatus?: AuditMitigationActionsExecutionStatus | string;

  /**
   * <p>Specify this filter to limit results to those that were applied to a specific audit finding.</p>
   */
  findingId: string | undefined;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListAuditMitigationActionsExecutionsRequest {
  export const filterSensitiveLog = (obj: ListAuditMitigationActionsExecutionsRequest): any => ({
    ...obj,
  });
}

export interface ListAuditMitigationActionsExecutionsResponse {
  /**
   * <p>A set of task execution results based on the input parameters. Details include the mitigation action applied, start time, and task status.</p>
   */
  actionsExecutions?: AuditMitigationActionExecutionMetadata[];

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListAuditMitigationActionsExecutionsResponse {
  export const filterSensitiveLog = (obj: ListAuditMitigationActionsExecutionsResponse): any => ({
    ...obj,
  });
}

export interface ListAuditMitigationActionsTasksRequest {
  /**
   * <p>Specify this filter to limit results to tasks that were applied to results for a specific audit.</p>
   */
  auditTaskId?: string;

  /**
   * <p>Specify this filter to limit results to tasks that were applied to a specific audit finding.</p>
   */
  findingId?: string;

  /**
   * <p>Specify this filter to limit results to tasks that are in a specific state.</p>
   */
  taskStatus?: AuditMitigationActionsTaskStatus | string;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>Specify this filter to limit results to tasks that began on or after a specific date and time.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>Specify this filter to limit results to tasks that were completed or canceled on or before a specific date and time.</p>
   */
  endTime: Date | undefined;
}

export namespace ListAuditMitigationActionsTasksRequest {
  export const filterSensitiveLog = (obj: ListAuditMitigationActionsTasksRequest): any => ({
    ...obj,
  });
}

export interface ListAuditMitigationActionsTasksResponse {
  /**
   * <p>The collection of audit mitigation tasks that matched the filter criteria.</p>
   */
  tasks?: AuditMitigationActionsTaskMetadata[];

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListAuditMitigationActionsTasksResponse {
  export const filterSensitiveLog = (obj: ListAuditMitigationActionsTasksResponse): any => ({
    ...obj,
  });
}

export interface ListAuditSuppressionsRequest {
  /**
   * <p>An audit check name. Checks must be enabled
   *         for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *         of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *         to select which checks are enabled.)</p>
   */
  checkName?: string;

  /**
   * <p>Information that identifies the noncompliant resource.</p>
   */
  resourceIdentifier?: ResourceIdentifier;

  /**
   * <p>
   *       Determines whether suppressions are listed in ascending order by expiration date or not. If parameter isn't provided, <code>ascendingOrder=true</code>.
   *     </p>
   */
  ascendingOrder?: boolean;

  /**
   * <p>
   *       The token for the next set of results.
   *     </p>
   */
  nextToken?: string;

  /**
   * <p>
   *       The maximum number of results to return at one time. The default is 25.
   *     </p>
   */
  maxResults?: number;
}

export namespace ListAuditSuppressionsRequest {
  export const filterSensitiveLog = (obj: ListAuditSuppressionsRequest): any => ({
    ...obj,
  });
}

export interface ListAuditSuppressionsResponse {
  /**
   * <p>
   *       List of audit suppressions.
   *     </p>
   */
  suppressions?: AuditSuppression[];

  /**
   * <p>
   *       A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.
   *     </p>
   */
  nextToken?: string;
}

export namespace ListAuditSuppressionsResponse {
  export const filterSensitiveLog = (obj: ListAuditSuppressionsResponse): any => ({
    ...obj,
  });
}

export interface ListAuditTasksRequest {
  /**
   * <p>The beginning of the time period. Audit information is retained for a
   *               limited time (90 days). Requesting a start time prior to what is retained
   *               results in an "InvalidRequestException".</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The end of the time period.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>A filter to limit the output to the specified type of audit: can be one of
   *             "ON_DEMAND_AUDIT_TASK" or "SCHEDULED__AUDIT_TASK".</p>
   */
  taskType?: AuditTaskType | string;

  /**
   * <p>A filter to limit the output to audits with the specified completion
   *             status: can be one of "IN_PROGRESS", "COMPLETED", "FAILED", or "CANCELED".</p>
   */
  taskStatus?: AuditTaskStatus | string;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;
}

export namespace ListAuditTasksRequest {
  export const filterSensitiveLog = (obj: ListAuditTasksRequest): any => ({
    ...obj,
  });
}

export interface ListAuditTasksResponse {
  /**
   * <p>The audits that were performed during the specified time period.</p>
   */
  tasks?: AuditTaskMetadata[];

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code>
   *             if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListAuditTasksResponse {
  export const filterSensitiveLog = (obj: ListAuditTasksResponse): any => ({
    ...obj,
  });
}

export interface ListAuthorizersRequest {
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  pageSize?: number;

  /**
   * <p>A marker used to get the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>Return the list of authorizers in ascending alphabetical order.</p>
   */
  ascendingOrder?: boolean;

  /**
   * <p>The status of the list authorizers request.</p>
   */
  status?: AuthorizerStatus | string;
}

export namespace ListAuthorizersRequest {
  export const filterSensitiveLog = (obj: ListAuthorizersRequest): any => ({
    ...obj,
  });
}

export interface ListAuthorizersResponse {
  /**
   * <p>The authorizers.</p>
   */
  authorizers?: AuthorizerSummary[];

  /**
   * <p>A marker used to get the next set of results.</p>
   */
  nextMarker?: string;
}

export namespace ListAuthorizersResponse {
  export const filterSensitiveLog = (obj: ListAuthorizersResponse): any => ({
    ...obj,
  });
}

export interface ListBillingGroupsRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per request.</p>
   */
  maxResults?: number;

  /**
   * <p>Limit the results to billing groups whose names have the given prefix.</p>
   */
  namePrefixFilter?: string;
}

export namespace ListBillingGroupsRequest {
  export const filterSensitiveLog = (obj: ListBillingGroupsRequest): any => ({
    ...obj,
  });
}

export interface ListBillingGroupsResponse {
  /**
   * <p>The list of billing groups.</p>
   */
  billingGroups?: GroupNameAndArn[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListBillingGroupsResponse {
  export const filterSensitiveLog = (obj: ListBillingGroupsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Input for the ListCACertificates operation.</p>
 */
export interface ListCACertificatesRequest {
  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>Determines the order of the results.</p>
   */
  ascendingOrder?: boolean;
}

export namespace ListCACertificatesRequest {
  export const filterSensitiveLog = (obj: ListCACertificatesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A CA certificate.</p>
 */
export interface CACertificate {
  /**
   * <p>The ARN of the CA certificate.</p>
   */
  certificateArn?: string;

  /**
   * <p>The ID of the CA certificate.</p>
   */
  certificateId?: string;

  /**
   * <p>The status of the CA certificate.</p>
   *          <p>The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
   */
  status?: CACertificateStatus | string;

  /**
   * <p>The date the CA certificate was created.</p>
   */
  creationDate?: Date;
}

export namespace CACertificate {
  export const filterSensitiveLog = (obj: CACertificate): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the ListCACertificates operation.</p>
 */
export interface ListCACertificatesResponse {
  /**
   * <p>The CA certificates registered in your AWS account.</p>
   */
  certificates?: CACertificate[];

  /**
   * <p>The current position within the list of CA certificates.</p>
   */
  nextMarker?: string;
}

export namespace ListCACertificatesResponse {
  export const filterSensitiveLog = (obj: ListCACertificatesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the ListCertificates operation.</p>
 */
export interface ListCertificatesRequest {
  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>Specifies the order for results. If True, the results are returned in ascending
   *          order, based on the creation date.</p>
   */
  ascendingOrder?: boolean;
}

export namespace ListCertificatesRequest {
  export const filterSensitiveLog = (obj: ListCertificatesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a certificate.</p>
 */
export interface Certificate {
  /**
   * <p>The ARN of the certificate.</p>
   */
  certificateArn?: string;

  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId?: string;

  /**
   * <p>The status of the certificate.</p>
   *          <p>The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
   */
  status?: CertificateStatus | string;

  /**
   * <p>The mode of the certificate.</p>
   */
  certificateMode?: CertificateMode | string;

  /**
   * <p>The date and time the certificate was created.</p>
   */
  creationDate?: Date;
}

export namespace Certificate {
  export const filterSensitiveLog = (obj: Certificate): any => ({
    ...obj,
  });
}

/**
 * <p>The output of the ListCertificates operation.</p>
 */
export interface ListCertificatesResponse {
  /**
   * <p>The descriptions of the certificates.</p>
   */
  certificates?: Certificate[];

  /**
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   */
  nextMarker?: string;
}

export namespace ListCertificatesResponse {
  export const filterSensitiveLog = (obj: ListCertificatesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input to the ListCertificatesByCA operation.</p>
 */
export interface ListCertificatesByCARequest {
  /**
   * <p>The ID of the CA certificate. This operation will list all registered device
   *          certificate that were signed by this CA certificate.</p>
   */
  caCertificateId: string | undefined;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>Specifies the order for results. If True, the results are returned in ascending
   *          order, based on the creation date.</p>
   */
  ascendingOrder?: boolean;
}

export namespace ListCertificatesByCARequest {
  export const filterSensitiveLog = (obj: ListCertificatesByCARequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output of the ListCertificatesByCA operation.</p>
 */
export interface ListCertificatesByCAResponse {
  /**
   * <p>The device certificates signed by the specified CA certificate.</p>
   */
  certificates?: Certificate[];

  /**
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   */
  nextMarker?: string;
}

export namespace ListCertificatesByCAResponse {
  export const filterSensitiveLog = (obj: ListCertificatesByCAResponse): any => ({
    ...obj,
  });
}

export interface ListDimensionsRequest {
  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to retrieve at one time.</p>
   */
  maxResults?: number;
}

export namespace ListDimensionsRequest {
  export const filterSensitiveLog = (obj: ListDimensionsRequest): any => ({
    ...obj,
  });
}

export interface ListDimensionsResponse {
  /**
   * <p>A list of the names of the defined dimensions. Use <code>DescribeDimension</code> to get details for a dimension.</p>
   */
  dimensionNames?: string[];

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListDimensionsResponse {
  export const filterSensitiveLog = (obj: ListDimensionsResponse): any => ({
    ...obj,
  });
}

export interface ListDomainConfigurationsRequest {
  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>The type of service delivered by the endpoint.</p>
   */
  serviceType?: ServiceType | string;
}

export namespace ListDomainConfigurationsRequest {
  export const filterSensitiveLog = (obj: ListDomainConfigurationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The summary of a domain configuration. A domain configuration specifies custom IoT-specific information about a domain.
 *          A domain configuration can be associated with an AWS-managed domain
 *          (for example, dbc123defghijk.iot.us-west-2.amazonaws.com), a customer managed domain, or a default endpoint.</p>
 *          <ul>
 *             <li>
 *                <p>Data</p>
 *             </li>
 *             <li>
 *                <p>Jobs</p>
 *             </li>
 *             <li>
 *                <p>CredentialProvider</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>The domain configuration feature is in public preview and is subject to change.</p>
 *          </note>
 */
export interface DomainConfigurationSummary {
  /**
   * <p>The name of the domain configuration. This value must be unique to a region.</p>
   */
  domainConfigurationName?: string;

  /**
   * <p>The ARN of the domain configuration.</p>
   */
  domainConfigurationArn?: string;

  /**
   * <p>The type of service delivered by the endpoint.</p>
   */
  serviceType?: ServiceType | string;
}

export namespace DomainConfigurationSummary {
  export const filterSensitiveLog = (obj: DomainConfigurationSummary): any => ({
    ...obj,
  });
}

export interface ListDomainConfigurationsResponse {
  /**
   * <p>A list of objects that contain summary information about the user's domain configurations.</p>
   */
  domainConfigurations?: DomainConfigurationSummary[];

  /**
   * <p>The marker for the next set of results.</p>
   */
  nextMarker?: string;
}

export namespace ListDomainConfigurationsResponse {
  export const filterSensitiveLog = (obj: ListDomainConfigurationsResponse): any => ({
    ...obj,
  });
}

export interface ListIndicesRequest {
  /**
   * <p>The token used to get the next set of results, or <code>null</code> if there are no additional
   *       results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

export namespace ListIndicesRequest {
  export const filterSensitiveLog = (obj: ListIndicesRequest): any => ({
    ...obj,
  });
}

export interface ListIndicesResponse {
  /**
   * <p>The index names.</p>
   */
  indexNames?: string[];

  /**
   * <p>The token used to get the next set of results, or <code>null</code> if there are no additional
   *       results.</p>
   */
  nextToken?: string;
}

export namespace ListIndicesResponse {
  export const filterSensitiveLog = (obj: ListIndicesResponse): any => ({
    ...obj,
  });
}

export interface ListJobExecutionsForJobRequest {
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The status of the job.</p>
   */
  status?: JobExecutionStatus | string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListJobExecutionsForJobRequest {
  export const filterSensitiveLog = (obj: ListJobExecutionsForJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The job execution summary.</p>
 */
export interface JobExecutionSummary {
  /**
   * <p>The status of the job execution.</p>
   */
  status?: JobExecutionStatus | string;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was queued.</p>
   */
  queuedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job execution started.</p>
   */
  startedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>A string (consisting of the digits "0" through "9") which identifies this particular job execution on
   *             this particular device. It can be used later in commands which return or update job execution
   *             information.</p>
   */
  executionNumber?: number;
}

export namespace JobExecutionSummary {
  export const filterSensitiveLog = (obj: JobExecutionSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a summary of information about job executions for a specific job.</p>
 */
export interface JobExecutionSummaryForJob {
  /**
   * <p>The ARN of the thing on which the job execution is running.</p>
   */
  thingArn?: string;

  /**
   * <p>Contains a subset of information about a job execution.</p>
   */
  jobExecutionSummary?: JobExecutionSummary;
}

export namespace JobExecutionSummaryForJob {
  export const filterSensitiveLog = (obj: JobExecutionSummaryForJob): any => ({
    ...obj,
  });
}

export interface ListJobExecutionsForJobResponse {
  /**
   * <p>A list of job execution summaries.</p>
   */
  executionSummaries?: JobExecutionSummaryForJob[];

  /**
   * <p>The token for the next set of results, or <b>null</b> if there are no
   *             additional results.</p>
   */
  nextToken?: string;
}

export namespace ListJobExecutionsForJobResponse {
  export const filterSensitiveLog = (obj: ListJobExecutionsForJobResponse): any => ({
    ...obj,
  });
}

export interface ListJobExecutionsForThingRequest {
  /**
   * <p>The thing name.</p>
   */
  thingName: string | undefined;

  /**
   * <p>An optional filter that lets you search for jobs that have the specified status.</p>
   */
  status?: JobExecutionStatus | string;

  /**
   * <p>The namespace used to indicate that a job is a customer-managed job.</p>
   *         <p>When you specify a value for this parameter, AWS IoT Core sends jobs notifications to MQTT topics that
   *             contain the value in the following format.</p>
   *         <p>
   *             <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code>
   *          </p>
   *         <note>
   *             <p>The <code>namespaceId</code> feature is in public preview.</p>
   *          </note>
   */
  namespaceId?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListJobExecutionsForThingRequest {
  export const filterSensitiveLog = (obj: ListJobExecutionsForThingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The job execution summary for a thing.</p>
 */
export interface JobExecutionSummaryForThing {
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>Contains a subset of information about a job execution.</p>
   */
  jobExecutionSummary?: JobExecutionSummary;
}

export namespace JobExecutionSummaryForThing {
  export const filterSensitiveLog = (obj: JobExecutionSummaryForThing): any => ({
    ...obj,
  });
}

export interface ListJobExecutionsForThingResponse {
  /**
   * <p>A list of job execution summaries.</p>
   */
  executionSummaries?: JobExecutionSummaryForThing[];

  /**
   * <p>The token for the next set of results, or <b>null</b> if there are no
   *             additional results.</p>
   */
  nextToken?: string;
}

export namespace ListJobExecutionsForThingResponse {
  export const filterSensitiveLog = (obj: ListJobExecutionsForThingResponse): any => ({
    ...obj,
  });
}

export interface ListJobsRequest {
  /**
   * <p>An optional filter that lets you search for jobs that have the specified status.</p>
   */
  status?: JobStatus | string;

  /**
   * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things
   *             specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing
   *             when a change is detected in a target. For example, a job will run on a thing when the thing is added to a
   *             target group, even after the job was completed by all things originally in the group. </p>
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>The maximum number of results to return per request.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A filter that limits the returned jobs to those for the specified group.</p>
   */
  thingGroupName?: string;

  /**
   * <p>A filter that limits the returned jobs to those for the specified group.</p>
   */
  thingGroupId?: string;

  /**
   * <p>The namespace used to indicate that a job is a customer-managed job.</p>
   *         <p>When you specify a value for this parameter, AWS IoT Core sends jobs notifications to MQTT topics that
   *             contain the value in the following format.</p>
   *         <p>
   *             <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code>
   *          </p>
   *         <note>
   *             <p>The <code>namespaceId</code> feature is in public preview.</p>
   *          </note>
   */
  namespaceId?: string;
}

export namespace ListJobsRequest {
  export const filterSensitiveLog = (obj: ListJobsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The job summary.</p>
 */
export interface JobSummary {
  /**
   * <p>The job ARN.</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>The ID of the thing group.</p>
   */
  thingGroupId?: string;

  /**
   * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things
   *             specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing
   *             when a change is detected in a target. For example, a job will run on a thing when the thing is added to a
   *             target group, even after the job was completed by all things originally in the group.</p>
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>The job summary status.</p>
   */
  status?: JobStatus | string;

  /**
   * <p>The time, in seconds since the epoch, when the job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job completed.</p>
   */
  completedAt?: Date;
}

export namespace JobSummary {
  export const filterSensitiveLog = (obj: JobSummary): any => ({
    ...obj,
  });
}

export interface ListJobsResponse {
  /**
   * <p>A list of jobs.</p>
   */
  jobs?: JobSummary[];

  /**
   * <p>The token for the next set of results, or <b>null</b> if there are no
   *             additional results.</p>
   */
  nextToken?: string;
}

export namespace ListJobsResponse {
  export const filterSensitiveLog = (obj: ListJobsResponse): any => ({
    ...obj,
  });
}

export interface ListMitigationActionsRequest {
  /**
   * <p>Specify a value to limit the result to mitigation actions with a specific action type.</p>
   */
  actionType?: MitigationActionType | string;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListMitigationActionsRequest {
  export const filterSensitiveLog = (obj: ListMitigationActionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information that identifies a mitigation action. This information is returned by ListMitigationActions.</p>
 */
export interface MitigationActionIdentifier {
  /**
   * <p>The friendly name of the mitigation action.</p>
   */
  actionName?: string;

  /**
   * <p>The IAM role ARN used to apply this mitigation action.</p>
   */
  actionArn?: string;

  /**
   * <p>The date when this mitigation action was created.</p>
   */
  creationDate?: Date;
}

export namespace MitigationActionIdentifier {
  export const filterSensitiveLog = (obj: MitigationActionIdentifier): any => ({
    ...obj,
  });
}

export interface ListMitigationActionsResponse {
  /**
   * <p>A set of actions that matched the specified filter criteria.</p>
   */
  actionIdentifiers?: MitigationActionIdentifier[];

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListMitigationActionsResponse {
  export const filterSensitiveLog = (obj: ListMitigationActionsResponse): any => ({
    ...obj,
  });
}

export interface ListOTAUpdatesRequest {
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>A token used to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The OTA update job status.</p>
   */
  otaUpdateStatus?: OTAUpdateStatus | string;
}

export namespace ListOTAUpdatesRequest {
  export const filterSensitiveLog = (obj: ListOTAUpdatesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An OTA update summary.</p>
 */
export interface OTAUpdateSummary {
  /**
   * <p>The OTA update ID.</p>
   */
  otaUpdateId?: string;

  /**
   * <p>The OTA update ARN.</p>
   */
  otaUpdateArn?: string;

  /**
   * <p>The date when the OTA update was created.</p>
   */
  creationDate?: Date;
}

export namespace OTAUpdateSummary {
  export const filterSensitiveLog = (obj: OTAUpdateSummary): any => ({
    ...obj,
  });
}

export interface ListOTAUpdatesResponse {
  /**
   * <p>A list of OTA update jobs.</p>
   */
  otaUpdates?: OTAUpdateSummary[];

  /**
   * <p>A token to use to get the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListOTAUpdatesResponse {
  export const filterSensitiveLog = (obj: ListOTAUpdatesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input to the ListOutgoingCertificates operation.</p>
 */
export interface ListOutgoingCertificatesRequest {
  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>Specifies the order for results. If True, the results are returned in ascending
   *          order, based on the creation date.</p>
   */
  ascendingOrder?: boolean;
}

export namespace ListOutgoingCertificatesRequest {
  export const filterSensitiveLog = (obj: ListOutgoingCertificatesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A certificate that has been transferred but not yet accepted.</p>
 */
export interface OutgoingCertificate {
  /**
   * <p>The certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * <p>The certificate ID.</p>
   */
  certificateId?: string;

  /**
   * <p>The AWS account to which the transfer was made.</p>
   */
  transferredTo?: string;

  /**
   * <p>The date the transfer was initiated.</p>
   */
  transferDate?: Date;

  /**
   * <p>The transfer message.</p>
   */
  transferMessage?: string;

  /**
   * <p>The certificate creation date.</p>
   */
  creationDate?: Date;
}

export namespace OutgoingCertificate {
  export const filterSensitiveLog = (obj: OutgoingCertificate): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the ListOutgoingCertificates operation.</p>
 */
export interface ListOutgoingCertificatesResponse {
  /**
   * <p>The certificates that are being transferred but not yet accepted.</p>
   */
  outgoingCertificates?: OutgoingCertificate[];

  /**
   * <p>The marker for the next set of results.</p>
   */
  nextMarker?: string;
}

export namespace ListOutgoingCertificatesResponse {
  export const filterSensitiveLog = (obj: ListOutgoingCertificatesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the ListPolicies operation.</p>
 */
export interface ListPoliciesRequest {
  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>Specifies the order for results. If true, the results are returned in ascending
   *          creation order.</p>
   */
  ascendingOrder?: boolean;
}

export namespace ListPoliciesRequest {
  export const filterSensitiveLog = (obj: ListPoliciesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the ListPolicies operation.</p>
 */
export interface ListPoliciesResponse {
  /**
   * <p>The descriptions of the policies.</p>
   */
  policies?: Policy[];

  /**
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   */
  nextMarker?: string;
}

export namespace ListPoliciesResponse {
  export const filterSensitiveLog = (obj: ListPoliciesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the ListPolicyPrincipals operation.</p>
 */
export interface ListPolicyPrincipalsRequest {
  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>Specifies the order for results. If true, the results are returned in ascending
   *          creation order.</p>
   */
  ascendingOrder?: boolean;
}

export namespace ListPolicyPrincipalsRequest {
  export const filterSensitiveLog = (obj: ListPolicyPrincipalsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the ListPolicyPrincipals operation.</p>
 */
export interface ListPolicyPrincipalsResponse {
  /**
   * <p>The descriptions of the principals.</p>
   */
  principals?: string[];

  /**
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   */
  nextMarker?: string;
}

export namespace ListPolicyPrincipalsResponse {
  export const filterSensitiveLog = (obj: ListPolicyPrincipalsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the ListPolicyVersions operation.</p>
 */
export interface ListPolicyVersionsRequest {
  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;
}

export namespace ListPolicyVersionsRequest {
  export const filterSensitiveLog = (obj: ListPolicyVersionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a policy version.</p>
 */
export interface PolicyVersion {
  /**
   * <p>The policy version ID.</p>
   */
  versionId?: string;

  /**
   * <p>Specifies whether the policy version is the default.</p>
   */
  isDefaultVersion?: boolean;

  /**
   * <p>The date and time the policy was created.</p>
   */
  createDate?: Date;
}

export namespace PolicyVersion {
  export const filterSensitiveLog = (obj: PolicyVersion): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the ListPolicyVersions operation.</p>
 */
export interface ListPolicyVersionsResponse {
  /**
   * <p>The policy versions.</p>
   */
  policyVersions?: PolicyVersion[];
}

export namespace ListPolicyVersionsResponse {
  export const filterSensitiveLog = (obj: ListPolicyVersionsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the ListPrincipalPolicies operation.</p>
 */
export interface ListPrincipalPoliciesRequest {
  /**
   * <p>The principal. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).</p>
   */
  principal: string | undefined;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>Specifies the order for results. If true, results are returned in ascending creation
   *          order.</p>
   */
  ascendingOrder?: boolean;
}

export namespace ListPrincipalPoliciesRequest {
  export const filterSensitiveLog = (obj: ListPrincipalPoliciesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the ListPrincipalPolicies operation.</p>
 */
export interface ListPrincipalPoliciesResponse {
  /**
   * <p>The policies.</p>
   */
  policies?: Policy[];

  /**
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   */
  nextMarker?: string;
}

export namespace ListPrincipalPoliciesResponse {
  export const filterSensitiveLog = (obj: ListPrincipalPoliciesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the ListPrincipalThings operation.</p>
 */
export interface ListPrincipalThingsRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  maxResults?: number;

  /**
   * <p>The principal.</p>
   */
  principal: string | undefined;
}

export namespace ListPrincipalThingsRequest {
  export const filterSensitiveLog = (obj: ListPrincipalThingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the ListPrincipalThings operation.</p>
 */
export interface ListPrincipalThingsResponse {
  /**
   * <p>The things.</p>
   */
  things?: string[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListPrincipalThingsResponse {
  export const filterSensitiveLog = (obj: ListPrincipalThingsResponse): any => ({
    ...obj,
  });
}

export interface ListProvisioningTemplatesRequest {
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>A token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListProvisioningTemplatesRequest {
  export const filterSensitiveLog = (obj: ListProvisioningTemplatesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of information about a fleet provisioning template.</p>
 */
export interface ProvisioningTemplateSummary {
  /**
   * <p>The ARN of the fleet provisioning template.</p>
   */
  templateArn?: string;

  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName?: string;

  /**
   * <p>The description of the fleet provisioning template.</p>
   */
  description?: string;

  /**
   * <p>The date when the fleet provisioning template summary was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date when the fleet provisioning template summary was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>True if the fleet provision template is enabled, otherwise false.</p>
   */
  enabled?: boolean;
}

export namespace ProvisioningTemplateSummary {
  export const filterSensitiveLog = (obj: ProvisioningTemplateSummary): any => ({
    ...obj,
  });
}

export interface ListProvisioningTemplatesResponse {
  /**
   * <p>A list of fleet provisioning templates</p>
   */
  templates?: ProvisioningTemplateSummary[];

  /**
   * <p>A token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListProvisioningTemplatesResponse {
  export const filterSensitiveLog = (obj: ListProvisioningTemplatesResponse): any => ({
    ...obj,
  });
}

export interface ListProvisioningTemplateVersionsRequest {
  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>A token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListProvisioningTemplateVersionsRequest {
  export const filterSensitiveLog = (obj: ListProvisioningTemplateVersionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of information about a fleet provision template version.</p>
 */
export interface ProvisioningTemplateVersionSummary {
  /**
   * <p>The ID of the fleet privisioning template version.</p>
   */
  versionId?: number;

  /**
   * <p>The date when the fleet provisioning template version was created</p>
   */
  creationDate?: Date;

  /**
   * <p>True if the fleet provisioning template version is the default version, otherwise
   *          false.</p>
   */
  isDefaultVersion?: boolean;
}

export namespace ProvisioningTemplateVersionSummary {
  export const filterSensitiveLog = (obj: ProvisioningTemplateVersionSummary): any => ({
    ...obj,
  });
}

export interface ListProvisioningTemplateVersionsResponse {
  /**
   * <p>The list of fleet provisioning template versions.</p>
   */
  versions?: ProvisioningTemplateVersionSummary[];

  /**
   * <p>A token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListProvisioningTemplateVersionsResponse {
  export const filterSensitiveLog = (obj: ListProvisioningTemplateVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListRoleAliasesRequest {
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  pageSize?: number;

  /**
   * <p>A marker used to get the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>Return the list of role aliases in ascending alphabetical order.</p>
   */
  ascendingOrder?: boolean;
}

export namespace ListRoleAliasesRequest {
  export const filterSensitiveLog = (obj: ListRoleAliasesRequest): any => ({
    ...obj,
  });
}

export interface ListRoleAliasesResponse {
  /**
   * <p>The role aliases.</p>
   */
  roleAliases?: string[];

  /**
   * <p>A marker used to get the next set of results.</p>
   */
  nextMarker?: string;
}

export namespace ListRoleAliasesResponse {
  export const filterSensitiveLog = (obj: ListRoleAliasesResponse): any => ({
    ...obj,
  });
}

export interface ListScheduledAuditsRequest {
  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;
}

export namespace ListScheduledAuditsRequest {
  export const filterSensitiveLog = (obj: ListScheduledAuditsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the scheduled audit.</p>
 */
export interface ScheduledAuditMetadata {
  /**
   * <p>The name of the scheduled audit.</p>
   */
  scheduledAuditName?: string;

  /**
   * <p>The ARN of the scheduled audit.</p>
   */
  scheduledAuditArn?: string;

  /**
   * <p>How often the scheduled audit occurs.</p>
   */
  frequency?: AuditFrequency | string;

  /**
   * <p>The day of the month on which the scheduled audit is run (if the
   *           <code>frequency</code> is "MONTHLY").
   *         If days 29-31 are specified, and the month does not have that many
   *         days, the audit takes place on the "LAST" day of the month.</p>
   */
  dayOfMonth?: string;

  /**
   * <p>The day of the week on which the scheduled audit is run (if the
   *           <code>frequency</code> is "WEEKLY" or "BIWEEKLY").</p>
   */
  dayOfWeek?: DayOfWeek | string;
}

export namespace ScheduledAuditMetadata {
  export const filterSensitiveLog = (obj: ScheduledAuditMetadata): any => ({
    ...obj,
  });
}

export interface ListScheduledAuditsResponse {
  /**
   * <p>The list of scheduled audits.</p>
   */
  scheduledAudits?: ScheduledAuditMetadata[];

  /**
   * <p>A token that can be used to retrieve the next set of results,
   *             or <code>null</code> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListScheduledAuditsResponse {
  export const filterSensitiveLog = (obj: ListScheduledAuditsResponse): any => ({
    ...obj,
  });
}

export interface ListSecurityProfilesRequest {
  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>A filter to limit results to the security profiles that use the defined dimension.</p>
   */
  dimensionName?: string;
}

export namespace ListSecurityProfilesRequest {
  export const filterSensitiveLog = (obj: ListSecurityProfilesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Identifying information for a Device Defender security profile.</p>
 */
export interface SecurityProfileIdentifier {
  /**
   * <p>The name you have given to the security profile.</p>
   */
  name: string | undefined;

  /**
   * <p>The ARN of the security profile.</p>
   */
  arn: string | undefined;
}

export namespace SecurityProfileIdentifier {
  export const filterSensitiveLog = (obj: SecurityProfileIdentifier): any => ({
    ...obj,
  });
}

export interface ListSecurityProfilesResponse {
  /**
   * <p>A list of security profile identifiers (names and ARNs).</p>
   */
  securityProfileIdentifiers?: SecurityProfileIdentifier[];

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
   *         additional results.</p>
   */
  nextToken?: string;
}

export namespace ListSecurityProfilesResponse {
  export const filterSensitiveLog = (obj: ListSecurityProfilesResponse): any => ({
    ...obj,
  });
}

export interface ListSecurityProfilesForTargetRequest {
  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>If true, return child groups too.</p>
   */
  recursive?: boolean;

  /**
   * <p>The ARN of the target (thing group) whose attached security profiles you want to get.</p>
   */
  securityProfileTargetArn: string | undefined;
}

export namespace ListSecurityProfilesForTargetRequest {
  export const filterSensitiveLog = (obj: ListSecurityProfilesForTargetRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A target to which an alert is sent when a security profile behavior is
 *           violated.</p>
 */
export interface SecurityProfileTarget {
  /**
   * <p>The ARN of the security profile.</p>
   */
  arn: string | undefined;
}

export namespace SecurityProfileTarget {
  export const filterSensitiveLog = (obj: SecurityProfileTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a security profile and the target associated with it.</p>
 */
export interface SecurityProfileTargetMapping {
  /**
   * <p>Information that identifies the security profile.</p>
   */
  securityProfileIdentifier?: SecurityProfileIdentifier;

  /**
   * <p>Information about the target (thing group) associated with the security profile.</p>
   */
  target?: SecurityProfileTarget;
}

export namespace SecurityProfileTargetMapping {
  export const filterSensitiveLog = (obj: SecurityProfileTargetMapping): any => ({
    ...obj,
  });
}

export interface ListSecurityProfilesForTargetResponse {
  /**
   * <p>A list of security profiles and their associated targets.</p>
   */
  securityProfileTargetMappings?: SecurityProfileTargetMapping[];

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
   *         additional results.</p>
   */
  nextToken?: string;
}

export namespace ListSecurityProfilesForTargetResponse {
  export const filterSensitiveLog = (obj: ListSecurityProfilesForTargetResponse): any => ({
    ...obj,
  });
}

export interface ListStreamsRequest {
  /**
   * <p>The maximum number of results to return at a time.</p>
   */
  maxResults?: number;

  /**
   * <p>A token used to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>Set to true to return the list of streams in ascending order.</p>
   */
  ascendingOrder?: boolean;
}

export namespace ListStreamsRequest {
  export const filterSensitiveLog = (obj: ListStreamsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of a stream.</p>
 */
export interface StreamSummary {
  /**
   * <p>The stream ID.</p>
   */
  streamId?: string;

  /**
   * <p>The stream ARN.</p>
   */
  streamArn?: string;

  /**
   * <p>The stream version.</p>
   */
  streamVersion?: number;

  /**
   * <p>A description of the stream.</p>
   */
  description?: string;
}

export namespace StreamSummary {
  export const filterSensitiveLog = (obj: StreamSummary): any => ({
    ...obj,
  });
}

export interface ListStreamsResponse {
  /**
   * <p>A list of streams.</p>
   */
  streams?: StreamSummary[];

  /**
   * <p>A token used to get the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListStreamsResponse {
  export const filterSensitiveLog = (obj: ListStreamsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tags assigned to the resource.</p>
   */
  tags?: Tag[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface ListTargetsForPolicyRequest {
  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;

  /**
   * <p>A marker used to get the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  pageSize?: number;
}

export namespace ListTargetsForPolicyRequest {
  export const filterSensitiveLog = (obj: ListTargetsForPolicyRequest): any => ({
    ...obj,
  });
}

export interface ListTargetsForPolicyResponse {
  /**
   * <p>The policy targets.</p>
   */
  targets?: string[];

  /**
   * <p>A marker used to get the next set of results.</p>
   */
  nextMarker?: string;
}

export namespace ListTargetsForPolicyResponse {
  export const filterSensitiveLog = (obj: ListTargetsForPolicyResponse): any => ({
    ...obj,
  });
}

export interface ListTargetsForSecurityProfileRequest {
  /**
   * <p>The security profile.</p>
   */
  securityProfileName: string | undefined;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

export namespace ListTargetsForSecurityProfileRequest {
  export const filterSensitiveLog = (obj: ListTargetsForSecurityProfileRequest): any => ({
    ...obj,
  });
}

export interface ListTargetsForSecurityProfileResponse {
  /**
   * <p>The thing groups to which the security profile is attached.</p>
   */
  securityProfileTargets?: SecurityProfileTarget[];

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
   *         additional results.</p>
   */
  nextToken?: string;
}

export namespace ListTargetsForSecurityProfileResponse {
  export const filterSensitiveLog = (obj: ListTargetsForSecurityProfileResponse): any => ({
    ...obj,
  });
}

export interface ListThingGroupsRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>A filter that limits the results to those with the specified parent group.</p>
   */
  parentGroup?: string;

  /**
   * <p>A filter that limits the results to those with the specified name prefix.</p>
   */
  namePrefixFilter?: string;

  /**
   * <p>If true, return child groups as well.</p>
   */
  recursive?: boolean;
}

export namespace ListThingGroupsRequest {
  export const filterSensitiveLog = (obj: ListThingGroupsRequest): any => ({
    ...obj,
  });
}

export interface ListThingGroupsResponse {
  /**
   * <p>The thing groups.</p>
   */
  thingGroups?: GroupNameAndArn[];

  /**
   * <p>The token to use to get the next set of results. Will not be returned if operation has returned all results.</p>
   */
  nextToken?: string;
}

export namespace ListThingGroupsResponse {
  export const filterSensitiveLog = (obj: ListThingGroupsResponse): any => ({
    ...obj,
  });
}

export interface ListThingGroupsForThingRequest {
  /**
   * <p>The thing name.</p>
   */
  thingName: string | undefined;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

export namespace ListThingGroupsForThingRequest {
  export const filterSensitiveLog = (obj: ListThingGroupsForThingRequest): any => ({
    ...obj,
  });
}

export interface ListThingGroupsForThingResponse {
  /**
   * <p>The thing groups.</p>
   */
  thingGroups?: GroupNameAndArn[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListThingGroupsForThingResponse {
  export const filterSensitiveLog = (obj: ListThingGroupsForThingResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the ListThingPrincipal operation.</p>
 */
export interface ListThingPrincipalsRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  maxResults?: number;

  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;
}

export namespace ListThingPrincipalsRequest {
  export const filterSensitiveLog = (obj: ListThingPrincipalsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the ListThingPrincipals operation.</p>
 */
export interface ListThingPrincipalsResponse {
  /**
   * <p>The principals associated with the thing.</p>
   */
  principals?: string[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListThingPrincipalsResponse {
  export const filterSensitiveLog = (obj: ListThingPrincipalsResponse): any => ({
    ...obj,
  });
}

export enum ReportType {
  ERRORS = "ERRORS",
  RESULTS = "RESULTS",
}

export interface ListThingRegistrationTaskReportsRequest {
  /**
   * <p>The id of the task.</p>
   */
  taskId: string | undefined;

  /**
   * <p>The type of task report.</p>
   */
  reportType: ReportType | string | undefined;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 		the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per request.</p>
   */
  maxResults?: number;
}

export namespace ListThingRegistrationTaskReportsRequest {
  export const filterSensitiveLog = (obj: ListThingRegistrationTaskReportsRequest): any => ({
    ...obj,
  });
}

export interface ListThingRegistrationTaskReportsResponse {
  /**
   * <p>Links to the task resources.</p>
   */
  resourceLinks?: string[];

  /**
   * <p>The type of task report.</p>
   */
  reportType?: ReportType | string;

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListThingRegistrationTaskReportsResponse {
  export const filterSensitiveLog = (obj: ListThingRegistrationTaskReportsResponse): any => ({
    ...obj,
  });
}

export interface ListThingRegistrationTasksRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The status of the bulk thing provisioning task.</p>
   */
  status?: Status | string;
}

export namespace ListThingRegistrationTasksRequest {
  export const filterSensitiveLog = (obj: ListThingRegistrationTasksRequest): any => ({
    ...obj,
  });
}

export interface ListThingRegistrationTasksResponse {
  /**
   * <p>A list of bulk thing provisioning task IDs.</p>
   */
  taskIds?: string[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListThingRegistrationTasksResponse {
  export const filterSensitiveLog = (obj: ListThingRegistrationTasksResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the ListThings operation.</p>
 */
export interface ListThingsRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  maxResults?: number;

  /**
   * <p>The attribute name used to search for things.</p>
   */
  attributeName?: string;

  /**
   * <p>The attribute value used to search for things.</p>
   */
  attributeValue?: string;

  /**
   * <p>The name of the thing type used to search for things.</p>
   */
  thingTypeName?: string;
}

export namespace ListThingsRequest {
  export const filterSensitiveLog = (obj: ListThingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The properties of the thing, including thing name, thing type name, and a list of thing
 * 			attributes.</p>
 */
export interface ThingAttribute {
  /**
   * <p>The name of the thing.</p>
   */
  thingName?: string;

  /**
   * <p>The name of the thing type, if the thing has been associated with a type.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The thing ARN.</p>
   */
  thingArn?: string;

  /**
   * <p>A list of thing attributes which are name-value pairs.</p>
   */
  attributes?: { [key: string]: string };

  /**
   * <p>The version of the thing record in the registry.</p>
   */
  version?: number;
}

export namespace ThingAttribute {
  export const filterSensitiveLog = (obj: ThingAttribute): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the ListThings operation.</p>
 */
export interface ListThingsResponse {
  /**
   * <p>The things.</p>
   */
  things?: ThingAttribute[];

  /**
   * <p>The token to use to get the next set of results. Will not be returned if operation has returned all results.</p>
   */
  nextToken?: string;
}

export namespace ListThingsResponse {
  export const filterSensitiveLog = (obj: ListThingsResponse): any => ({
    ...obj,
  });
}

export interface ListThingsInBillingGroupRequest {
  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName: string | undefined;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per request.</p>
   */
  maxResults?: number;
}

export namespace ListThingsInBillingGroupRequest {
  export const filterSensitiveLog = (obj: ListThingsInBillingGroupRequest): any => ({
    ...obj,
  });
}

export interface ListThingsInBillingGroupResponse {
  /**
   * <p>A list of things in the billing group.</p>
   */
  things?: string[];

  /**
   * <p>The token to use to get the next set of results. Will not be returned if operation has returned all results.</p>
   */
  nextToken?: string;
}

export namespace ListThingsInBillingGroupResponse {
  export const filterSensitiveLog = (obj: ListThingsInBillingGroupResponse): any => ({
    ...obj,
  });
}

export interface ListThingsInThingGroupRequest {
  /**
   * <p>The thing group name.</p>
   */
  thingGroupName: string | undefined;

  /**
   * <p>When true, list things in this thing group and in all child groups as
   * 			well.</p>
   */
  recursive?: boolean;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

export namespace ListThingsInThingGroupRequest {
  export const filterSensitiveLog = (obj: ListThingsInThingGroupRequest): any => ({
    ...obj,
  });
}

export interface ListThingsInThingGroupResponse {
  /**
   * <p>The things in the specified thing group.</p>
   */
  things?: string[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListThingsInThingGroupResponse {
  export const filterSensitiveLog = (obj: ListThingsInThingGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the ListThingTypes operation.</p>
 */
export interface ListThingTypesRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  maxResults?: number;

  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;
}

export namespace ListThingTypesRequest {
  export const filterSensitiveLog = (obj: ListThingTypesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The definition of the thing type, including thing type name and description.</p>
 */
export interface ThingTypeDefinition {
  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The thing type ARN.</p>
   */
  thingTypeArn?: string;

  /**
   * <p>The ThingTypeProperties for the thing type.</p>
   */
  thingTypeProperties?: ThingTypeProperties;

  /**
   * <p>The ThingTypeMetadata contains additional information about the thing type including: creation date and
   * 			time, a value indicating whether the thing type is deprecated, and a date and time when it was
   * 			deprecated.</p>
   */
  thingTypeMetadata?: ThingTypeMetadata;
}

export namespace ThingTypeDefinition {
  export const filterSensitiveLog = (obj: ThingTypeDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>The output for the ListThingTypes operation.</p>
 */
export interface ListThingTypesResponse {
  /**
   * <p>The thing types.</p>
   */
  thingTypes?: ThingTypeDefinition[];

  /**
   * <p>The token for the next set of results. Will not be returned if operation has returned all results.</p>
   */
  nextToken?: string;
}

export namespace ListThingTypesResponse {
  export const filterSensitiveLog = (obj: ListThingTypesResponse): any => ({
    ...obj,
  });
}

export interface ListTopicRuleDestinationsRequest {
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   *          value from a previous response; otherwise <b>null</b> to receive
   *          the first set of results.</p>
   */
  nextToken?: string;
}

export namespace ListTopicRuleDestinationsRequest {
  export const filterSensitiveLog = (obj: ListTopicRuleDestinationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an HTTP URL destination.</p>
 */
export interface HttpUrlDestinationSummary {
  /**
   * <p>The URL used to confirm ownership of or access to the HTTP topic rule destination
   *          URL.</p>
   */
  confirmationUrl?: string;
}

export namespace HttpUrlDestinationSummary {
  export const filterSensitiveLog = (obj: HttpUrlDestinationSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the topic rule destination.</p>
 */
export interface TopicRuleDestinationSummary {
  /**
   * <p>The topic rule destination ARN.</p>
   */
  arn?: string;

  /**
   * <p>The status of the topic rule destination. Valid values are:</p>
   *          <dl>
   *             <dt>IN_PROGRESS</dt>
   *             <dd>
   *                <p>A topic rule destination was created but has not been confirmed. You can set
   *                      <code>status</code> to <code>IN_PROGRESS</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>. Calling
   *                      <code>UpdateTopicRuleDestination</code> causes a new confirmation challenge to
   *                   be sent to your confirmation endpoint.</p>
   *             </dd>
   *             <dt>ENABLED</dt>
   *             <dd>
   *                <p>Confirmation was completed, and traffic to this destination is allowed. You can
   *                   set <code>status</code> to <code>DISABLED</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>.</p>
   *             </dd>
   *             <dt>DISABLED</dt>
   *             <dd>
   *                <p>Confirmation was completed, and traffic to this destination is not allowed. You
   *                   can set <code>status</code> to <code>ENABLED</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>.</p>
   *             </dd>
   *             <dt>ERROR</dt>
   *             <dd>
   *                <p>Confirmation could not be completed, for example if the confirmation timed out.
   *                   You can call <code>GetTopicRuleDestination</code> for details about the error. You
   *                   can set <code>status</code> to <code>IN_PROGRESS</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>. Calling
   *                      <code>UpdateTopicRuleDestination</code> causes a new confirmation challenge to
   *                   be sent to your confirmation endpoint.</p>
   *             </dd>
   *          </dl>
   */
  status?: TopicRuleDestinationStatus | string;

  /**
   * <p>The reason the topic rule destination is in the current status.</p>
   */
  statusReason?: string;

  /**
   * <p>Information about the HTTP URL.</p>
   */
  httpUrlSummary?: HttpUrlDestinationSummary;
}

export namespace TopicRuleDestinationSummary {
  export const filterSensitiveLog = (obj: TopicRuleDestinationSummary): any => ({
    ...obj,
  });
}

export interface ListTopicRuleDestinationsResponse {
  /**
   * <p>Information about a topic rule destination.</p>
   */
  destinationSummaries?: TopicRuleDestinationSummary[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListTopicRuleDestinationsResponse {
  export const filterSensitiveLog = (obj: ListTopicRuleDestinationsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the ListTopicRules operation.</p>
 */
export interface ListTopicRulesRequest {
  /**
   * <p>The topic.</p>
   */
  topic?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   *          value from a previous response; otherwise <b>null</b> to receive
   *          the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>Specifies whether the rule is disabled.</p>
   */
  ruleDisabled?: boolean;
}

export namespace ListTopicRulesRequest {
  export const filterSensitiveLog = (obj: ListTopicRulesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a rule.</p>
 */
export interface TopicRuleListItem {
  /**
   * <p>The rule ARN.</p>
   */
  ruleArn?: string;

  /**
   * <p>The name of the rule.</p>
   */
  ruleName?: string;

  /**
   * <p>The pattern for the topic names that apply.</p>
   */
  topicPattern?: string;

  /**
   * <p>The date and time the rule was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>Specifies whether the rule is disabled.</p>
   */
  ruleDisabled?: boolean;
}

export namespace TopicRuleListItem {
  export const filterSensitiveLog = (obj: TopicRuleListItem): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the ListTopicRules operation.</p>
 */
export interface ListTopicRulesResponse {
  /**
   * <p>The rules.</p>
   */
  rules?: TopicRuleListItem[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListTopicRulesResponse {
  export const filterSensitiveLog = (obj: ListTopicRulesResponse): any => ({
    ...obj,
  });
}

export interface ListV2LoggingLevelsRequest {
  /**
   * <p>The type of resource for which you are configuring logging. Must be
   *             <code>THING_Group</code>.</p>
   */
  targetType?: LogTargetType | string;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   *          value from a previous response; otherwise <b>null</b> to receive
   *          the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

export namespace ListV2LoggingLevelsRequest {
  export const filterSensitiveLog = (obj: ListV2LoggingLevelsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A log target.</p>
 */
export interface LogTarget {
  /**
   * <p>The target type.</p>
   */
  targetType: LogTargetType | string | undefined;

  /**
   * <p>The target name.</p>
   */
  targetName?: string;
}

export namespace LogTarget {
  export const filterSensitiveLog = (obj: LogTarget): any => ({
    ...obj,
  });
}

/**
 * <p>The target configuration.</p>
 */
export interface LogTargetConfiguration {
  /**
   * <p>A log target</p>
   */
  logTarget?: LogTarget;

  /**
   * <p>The logging level.</p>
   */
  logLevel?: LogLevel | string;
}

export namespace LogTargetConfiguration {
  export const filterSensitiveLog = (obj: LogTargetConfiguration): any => ({
    ...obj,
  });
}

export interface ListV2LoggingLevelsResponse {
  /**
   * <p>The logging configuration for a target.</p>
   */
  logTargetConfigurations?: LogTargetConfiguration[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListV2LoggingLevelsResponse {
  export const filterSensitiveLog = (obj: ListV2LoggingLevelsResponse): any => ({
    ...obj,
  });
}

export interface ListViolationEventsRequest {
  /**
   * <p>The start time for the alerts to be listed.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The end time for the alerts to be listed.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>A filter to limit results to those alerts caused by the specified thing.</p>
   */
  thingName?: string;

  /**
   * <p>A filter to limit results to those alerts generated by the specified security profile.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

export namespace ListViolationEventsRequest {
  export const filterSensitiveLog = (obj: ListViolationEventsRequest): any => ({
    ...obj,
  });
}

export enum ViolationEventType {
  ALARM_CLEARED = "alarm-cleared",
  ALARM_INVALIDATED = "alarm-invalidated",
  IN_ALARM = "in-alarm",
}

/**
 * <p>Information about a Device Defender security profile behavior violation.</p>
 */
export interface ViolationEvent {
  /**
   * <p>The ID of the violation event.</p>
   */
  violationId?: string;

  /**
   * <p>The name of the thing responsible for the violation event.</p>
   */
  thingName?: string;

  /**
   * <p>The name of the security profile whose behavior was violated.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The behavior which was violated.</p>
   */
  behavior?: Behavior;

  /**
   * <p>The value of the metric (the measurement).</p>
   */
  metricValue?: MetricValue;

  /**
   * <p>The type of violation event.</p>
   */
  violationEventType?: ViolationEventType | string;

  /**
   * <p>The time the violation event occurred.</p>
   */
  violationEventTime?: Date;
}

export namespace ViolationEvent {
  export const filterSensitiveLog = (obj: ViolationEvent): any => ({
    ...obj,
  });
}

export interface ListViolationEventsResponse {
  /**
   * <p>The security profile violation alerts issued for this account during the given time period,
   *       potentially filtered by security profile, behavior violated, or thing (device) violating.</p>
   */
  violationEvents?: ViolationEvent[];

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
   *         additional results.</p>
   */
  nextToken?: string;
}

export namespace ListViolationEventsResponse {
  export const filterSensitiveLog = (obj: ListViolationEventsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input to the RegisterCACertificate operation.</p>
 */
export interface RegisterCACertificateRequest {
  /**
   * <p>The CA certificate.</p>
   */
  caCertificate: string | undefined;

  /**
   * <p>The private key verification certificate.</p>
   */
  verificationCertificate: string | undefined;

  /**
   * <p>A boolean value that specifies if the CA certificate is set to active.</p>
   */
  setAsActive?: boolean;

  /**
   * <p>Allows this CA certificate to be used for auto registration of device
   *          certificates.</p>
   */
  allowAutoRegistration?: boolean;

  /**
   * <p>Information about the registration configuration.</p>
   */
  registrationConfig?: RegistrationConfig;

  /**
   * <p>Metadata which can be used to manage the CA certificate.</p>
   *          <note>
   *             <p>For URI Request parameters use format: ...key1=value1&key2=value2...</p>
   *             <p>For the CLI command-line parameter use format: &&tags
   *             "key1=value1&key2=value2..."</p>
   *             <p>For the cli-input-json file use format: "tags":
   *             "key1=value1&key2=value2..."</p>
   *          </note>
   */
  tags?: Tag[];
}

export namespace RegisterCACertificateRequest {
  export const filterSensitiveLog = (obj: RegisterCACertificateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the RegisterCACertificateResponse operation.</p>
 */
export interface RegisterCACertificateResponse {
  /**
   * <p>The CA certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * <p>The CA certificate identifier.</p>
   */
  certificateId?: string;
}

export namespace RegisterCACertificateResponse {
  export const filterSensitiveLog = (obj: RegisterCACertificateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The registration code is invalid.</p>
 */
export interface RegistrationCodeValidationException extends __SmithyException, $MetadataBearer {
  name: "RegistrationCodeValidationException";
  $fault: "client";
  /**
   * <p>Additional information about the exception.</p>
   */
  message?: string;
}

export namespace RegistrationCodeValidationException {
  export const filterSensitiveLog = (obj: RegistrationCodeValidationException): any => ({
    ...obj,
  });
}

/**
 * <p>Unable to verify the CA certificate used to sign the device certificate you are
 *          attempting to register. This is happens when you have registered more than one CA
 *          certificate that has the same subject field and public key.</p>
 */
export interface CertificateConflictException extends __SmithyException, $MetadataBearer {
  name: "CertificateConflictException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace CertificateConflictException {
  export const filterSensitiveLog = (obj: CertificateConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>The input to the RegisterCertificate operation.</p>
 */
export interface RegisterCertificateRequest {
  /**
   * <p>The certificate data, in PEM format.</p>
   */
  certificatePem: string | undefined;

  /**
   * <p>The CA certificate used to sign the device certificate being registered.</p>
   */
  caCertificatePem?: string;

  /**
   * @deprecated
   *
   * <p>A boolean value that specifies if the certificate is set to active.</p>
   */
  setAsActive?: boolean;

  /**
   * <p>The status of the register certificate request.</p>
   */
  status?: CertificateStatus | string;
}

export namespace RegisterCertificateRequest {
  export const filterSensitiveLog = (obj: RegisterCertificateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the RegisterCertificate operation.</p>
 */
export interface RegisterCertificateResponse {
  /**
   * <p>The certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * <p>The certificate identifier.</p>
   */
  certificateId?: string;
}

export namespace RegisterCertificateResponse {
  export const filterSensitiveLog = (obj: RegisterCertificateResponse): any => ({
    ...obj,
  });
}

export interface RegisterCertificateWithoutCARequest {
  /**
   * <p>The certificate data, in PEM format.</p>
   */
  certificatePem: string | undefined;

  /**
   * <p>The status of the register certificate request.</p>
   */
  status?: CertificateStatus | string;
}

export namespace RegisterCertificateWithoutCARequest {
  export const filterSensitiveLog = (obj: RegisterCertificateWithoutCARequest): any => ({
    ...obj,
  });
}

export interface RegisterCertificateWithoutCAResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the registered certificate.</p>
   */
  certificateArn?: string;

  /**
   * <p>The ID of the registered certificate. (The last part of the certificate ARN contains the
   *          certificate ID.</p>
   */
  certificateId?: string;
}

export namespace RegisterCertificateWithoutCAResponse {
  export const filterSensitiveLog = (obj: RegisterCertificateWithoutCAResponse): any => ({
    ...obj,
  });
}

export interface RegisterThingRequest {
  /**
   * <p>The provisioning template. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-w-cert.html">Provisioning Devices That Have Device Certificates</a> for more information.</p>
   */
  templateBody: string | undefined;

  /**
   * <p>The parameters for provisioning a thing. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html">Provisioning Templates</a> for more information.</p>
   */
  parameters?: { [key: string]: string };
}

export namespace RegisterThingRequest {
  export const filterSensitiveLog = (obj: RegisterThingRequest): any => ({
    ...obj,
  });
}

export interface RegisterThingResponse {
  /**
   * <p>The certificate data, in PEM format.</p>
   */
  certificatePem?: string;

  /**
   * <p>ARNs for the generated resources.</p>
   */
  resourceArns?: { [key: string]: string };
}

export namespace RegisterThingResponse {
  export const filterSensitiveLog = (obj: RegisterThingResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The resource registration failed.</p>
 */
export interface ResourceRegistrationFailureException extends __SmithyException, $MetadataBearer {
  name: "ResourceRegistrationFailureException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ResourceRegistrationFailureException {
  export const filterSensitiveLog = (obj: ResourceRegistrationFailureException): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the RejectCertificateTransfer operation.</p>
 */
export interface RejectCertificateTransferRequest {
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId: string | undefined;

  /**
   * <p>The reason the certificate transfer was rejected.</p>
   */
  rejectReason?: string;
}

export namespace RejectCertificateTransferRequest {
  export const filterSensitiveLog = (obj: RejectCertificateTransferRequest): any => ({
    ...obj,
  });
}

export interface RemoveThingFromBillingGroupRequest {
  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName?: string;

  /**
   * <p>The ARN of the billing group.</p>
   */
  billingGroupArn?: string;

  /**
   * <p>The name of the thing to be removed from the billing group.</p>
   */
  thingName?: string;

  /**
   * <p>The ARN of the thing to be removed from the billing group.</p>
   */
  thingArn?: string;
}

export namespace RemoveThingFromBillingGroupRequest {
  export const filterSensitiveLog = (obj: RemoveThingFromBillingGroupRequest): any => ({
    ...obj,
  });
}

export interface RemoveThingFromBillingGroupResponse {}

export namespace RemoveThingFromBillingGroupResponse {
  export const filterSensitiveLog = (obj: RemoveThingFromBillingGroupResponse): any => ({
    ...obj,
  });
}

export interface RemoveThingFromThingGroupRequest {
  /**
   * <p>The group name.</p>
   */
  thingGroupName?: string;

  /**
   * <p>The group ARN.</p>
   */
  thingGroupArn?: string;

  /**
   * <p>The name of the thing to remove from the group.</p>
   */
  thingName?: string;

  /**
   * <p>The ARN of the thing to remove from the group.</p>
   */
  thingArn?: string;
}

export namespace RemoveThingFromThingGroupRequest {
  export const filterSensitiveLog = (obj: RemoveThingFromThingGroupRequest): any => ({
    ...obj,
  });
}

export interface RemoveThingFromThingGroupResponse {}

export namespace RemoveThingFromThingGroupResponse {
  export const filterSensitiveLog = (obj: RemoveThingFromThingGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the ReplaceTopicRule operation.</p>
 */
export interface ReplaceTopicRuleRequest {
  /**
   * <p>The name of the rule.</p>
   */
  ruleName: string | undefined;

  /**
   * <p>The rule payload.</p>
   */
  topicRulePayload: TopicRulePayload | undefined;
}

export namespace ReplaceTopicRuleRequest {
  export const filterSensitiveLog = (obj: ReplaceTopicRuleRequest): any => ({
    ...obj,
  });
}

export interface SearchIndexRequest {
  /**
   * <p>The search index name.</p>
   */
  indexName?: string;

  /**
   * <p>The search query string.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The token used to get the next set of results, or <code>null</code> if there are no additional
   *       results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The query version.</p>
   */
  queryVersion?: string;
}

export namespace SearchIndexRequest {
  export const filterSensitiveLog = (obj: SearchIndexRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The thing group search index document.</p>
 */
export interface ThingGroupDocument {
  /**
   * <p>The thing group name.</p>
   */
  thingGroupName?: string;

  /**
   * <p>The thing group ID.</p>
   */
  thingGroupId?: string;

  /**
   * <p>The thing group description.</p>
   */
  thingGroupDescription?: string;

  /**
   * <p>The thing group attributes.</p>
   */
  attributes?: { [key: string]: string };

  /**
   * <p>Parent group names.</p>
   */
  parentGroupNames?: string[];
}

export namespace ThingGroupDocument {
  export const filterSensitiveLog = (obj: ThingGroupDocument): any => ({
    ...obj,
  });
}

/**
 * <p>The connectivity status of the thing.</p>
 */
export interface ThingConnectivity {
  /**
   * <p>True if the thing is connected to the AWS IoT service; false if it is not
   *       connected.</p>
   */
  connected?: boolean;

  /**
   * <p>The epoch time (in milliseconds) when the thing last connected or disconnected. If the
   *       thing has been disconnected for more than a few weeks, the time value might be missing.</p>
   */
  timestamp?: number;
}

export namespace ThingConnectivity {
  export const filterSensitiveLog = (obj: ThingConnectivity): any => ({
    ...obj,
  });
}

/**
 * <p>The thing search index document.</p>
 */
export interface ThingDocument {
  /**
   * <p>The thing name.</p>
   */
  thingName?: string;

  /**
   * <p>The thing ID.</p>
   */
  thingId?: string;

  /**
   * <p>The thing type name.</p>
   */
  thingTypeName?: string;

  /**
   * <p>Thing group names.</p>
   */
  thingGroupNames?: string[];

  /**
   * <p>The attributes.</p>
   */
  attributes?: { [key: string]: string };

  /**
   * <p>The shadow.</p>
   */
  shadow?: string;

  /**
   * <p>Indicates whether the thing is connected to the AWS IoT service.</p>
   */
  connectivity?: ThingConnectivity;
}

export namespace ThingDocument {
  export const filterSensitiveLog = (obj: ThingDocument): any => ({
    ...obj,
  });
}

export interface SearchIndexResponse {
  /**
   * <p>The token used to get the next set of results, or <code>null</code> if there are no additional
   *       results.</p>
   */
  nextToken?: string;

  /**
   * <p>The things that match the search query.</p>
   */
  things?: ThingDocument[];

  /**
   * <p>The thing groups that match the search query.</p>
   */
  thingGroups?: ThingGroupDocument[];
}

export namespace SearchIndexResponse {
  export const filterSensitiveLog = (obj: SearchIndexResponse): any => ({
    ...obj,
  });
}

export interface SetDefaultAuthorizerRequest {
  /**
   * <p>The authorizer name.</p>
   */
  authorizerName: string | undefined;
}

export namespace SetDefaultAuthorizerRequest {
  export const filterSensitiveLog = (obj: SetDefaultAuthorizerRequest): any => ({
    ...obj,
  });
}

export interface SetDefaultAuthorizerResponse {
  /**
   * <p>The authorizer name.</p>
   */
  authorizerName?: string;

  /**
   * <p>The authorizer ARN.</p>
   */
  authorizerArn?: string;
}

export namespace SetDefaultAuthorizerResponse {
  export const filterSensitiveLog = (obj: SetDefaultAuthorizerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the SetDefaultPolicyVersion operation.</p>
 */
export interface SetDefaultPolicyVersionRequest {
  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The policy version ID.</p>
   */
  policyVersionId: string | undefined;
}

export namespace SetDefaultPolicyVersionRequest {
  export const filterSensitiveLog = (obj: SetDefaultPolicyVersionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the logging options payload.</p>
 */
export interface LoggingOptionsPayload {
  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The log level.</p>
   */
  logLevel?: LogLevel | string;
}

export namespace LoggingOptionsPayload {
  export const filterSensitiveLog = (obj: LoggingOptionsPayload): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the SetLoggingOptions operation.</p>
 */
export interface SetLoggingOptionsRequest {
  /**
   * <p>The logging options payload.</p>
   */
  loggingOptionsPayload: LoggingOptionsPayload | undefined;
}

export namespace SetLoggingOptionsRequest {
  export const filterSensitiveLog = (obj: SetLoggingOptionsRequest): any => ({
    ...obj,
  });
}

export interface SetV2LoggingLevelRequest {
  /**
   * <p>The log target.</p>
   */
  logTarget: LogTarget | undefined;

  /**
   * <p>The log level.</p>
   */
  logLevel: LogLevel | string | undefined;
}

export namespace SetV2LoggingLevelRequest {
  export const filterSensitiveLog = (obj: SetV2LoggingLevelRequest): any => ({
    ...obj,
  });
}

export interface SetV2LoggingOptionsRequest {
  /**
   * <p>The ARN of the role that allows IoT to write to Cloudwatch logs.</p>
   */
  roleArn?: string;

  /**
   * <p>The default logging level.</p>
   */
  defaultLogLevel?: LogLevel | string;

  /**
   * <p>If true all logs are disabled. The default is false.</p>
   */
  disableAllLogs?: boolean;
}

export namespace SetV2LoggingOptionsRequest {
  export const filterSensitiveLog = (obj: SetV2LoggingOptionsRequest): any => ({
    ...obj,
  });
}

export interface StartAuditMitigationActionsTaskRequest {
  /**
   * <p>A unique identifier for the task. You can use this identifier to check the status of the task or to cancel it.</p>
   */
  taskId: string | undefined;

  /**
   * <p>Specifies the audit findings to which the mitigation actions are applied. You can apply them to a type of audit check, to all findings from an audit, or to a speecific set of findings.</p>
   */
  target: AuditMitigationActionsTaskTarget | undefined;

  /**
   * <p>For an audit check, specifies which mitigation actions to apply. Those actions must be defined in your AWS account.</p>
   */
  auditCheckToActionsMapping: { [key: string]: string[] } | undefined;

  /**
   * <p>Each audit mitigation task must have a unique client request token. If you try to start a new task with the same token as a task that already exists, an exception occurs. If you omit this value, a unique client request token is generated automatically.</p>
   */
  clientRequestToken?: string;
}

export namespace StartAuditMitigationActionsTaskRequest {
  export const filterSensitiveLog = (obj: StartAuditMitigationActionsTaskRequest): any => ({
    ...obj,
  });
}

export interface StartAuditMitigationActionsTaskResponse {
  /**
   * <p>The unique identifier for the audit mitigation task. This matches the <code>taskId</code> that you specified in the request.</p>
   */
  taskId?: string;
}

export namespace StartAuditMitigationActionsTaskResponse {
  export const filterSensitiveLog = (obj: StartAuditMitigationActionsTaskResponse): any => ({
    ...obj,
  });
}

/**
 * <p>This exception occurs if you attempt to start a task with the same task-id as an existing task but with a different clientRequestToken.</p>
 */
export interface TaskAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "TaskAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace TaskAlreadyExistsException {
  export const filterSensitiveLog = (obj: TaskAlreadyExistsException): any => ({
    ...obj,
  });
}

export interface StartOnDemandAuditTaskRequest {
  /**
   * <p>Which checks are performed during the audit. The checks you specify must be enabled
   *             for your account or an exception occurs. Use <code>DescribeAccountAuditConfiguration</code>
   *             to see the list of all checks, including those that are enabled or
   *             <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.</p>
   */
  targetCheckNames: string[] | undefined;
}

export namespace StartOnDemandAuditTaskRequest {
  export const filterSensitiveLog = (obj: StartOnDemandAuditTaskRequest): any => ({
    ...obj,
  });
}

export interface StartOnDemandAuditTaskResponse {
  /**
   * <p>The ID of the on-demand audit you started.</p>
   */
  taskId?: string;
}

export namespace StartOnDemandAuditTaskResponse {
  export const filterSensitiveLog = (obj: StartOnDemandAuditTaskResponse): any => ({
    ...obj,
  });
}

export interface StartThingRegistrationTaskRequest {
  /**
   * <p>The provisioning template.</p>
   */
  templateBody: string | undefined;

  /**
   * <p>The S3 bucket that contains the input file.</p>
   */
  inputFileBucket: string | undefined;

  /**
   * <p>The name of input file within the S3 bucket. This file contains a newline delimited
   * 			JSON file. Each line contains the parameter values to provision one device
   * 			(thing).</p>
   */
  inputFileKey: string | undefined;

  /**
   * <p>The IAM role ARN that grants permission the input file.</p>
   */
  roleArn: string | undefined;
}

export namespace StartThingRegistrationTaskRequest {
  export const filterSensitiveLog = (obj: StartThingRegistrationTaskRequest): any => ({
    ...obj,
  });
}

export interface StartThingRegistrationTaskResponse {
  /**
   * <p>The bulk thing provisioning task ID.</p>
   */
  taskId?: string;
}

export namespace StartThingRegistrationTaskResponse {
  export const filterSensitiveLog = (obj: StartThingRegistrationTaskResponse): any => ({
    ...obj,
  });
}

export interface StopThingRegistrationTaskRequest {
  /**
   * <p>The bulk thing provisioning task ID.</p>
   */
  taskId: string | undefined;
}

export namespace StopThingRegistrationTaskRequest {
  export const filterSensitiveLog = (obj: StopThingRegistrationTaskRequest): any => ({
    ...obj,
  });
}

export interface StopThingRegistrationTaskResponse {}

export namespace StopThingRegistrationTaskResponse {
  export const filterSensitiveLog = (obj: StopThingRegistrationTaskResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The new or modified tags for the resource.</p>
   */
  tags: Tag[] | undefined;
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

export interface TestAuthorizationRequest {
  /**
   * <p>The principal. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).</p>
   */
  principal?: string;

  /**
   * <p>The Cognito identity pool ID.</p>
   */
  cognitoIdentityPoolId?: string;

  /**
   * <p>A list of authorization info objects. Simulating authorization will create a response
   *          for each <code>authInfo</code> object in the list.</p>
   */
  authInfos: AuthInfo[] | undefined;

  /**
   * <p>The MQTT client ID.</p>
   */
  clientId?: string;

  /**
   * <p>When testing custom authorization, the policies specified here are treated as if they
   *          are attached to the principal being authorized.</p>
   */
  policyNamesToAdd?: string[];

  /**
   * <p>When testing custom authorization, the policies specified here are treated as if they
   *          are not attached to the principal being authorized.</p>
   */
  policyNamesToSkip?: string[];
}

export namespace TestAuthorizationRequest {
  export const filterSensitiveLog = (obj: TestAuthorizationRequest): any => ({
    ...obj,
  });
}

export interface TestAuthorizationResponse {
  /**
   * <p>The authentication results.</p>
   */
  authResults?: AuthResult[];
}

export namespace TestAuthorizationResponse {
  export const filterSensitiveLog = (obj: TestAuthorizationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The response is invalid.</p>
 */
export interface InvalidResponseException extends __SmithyException, $MetadataBearer {
  name: "InvalidResponseException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InvalidResponseException {
  export const filterSensitiveLog = (obj: InvalidResponseException): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the HTTP context to use for the test authorizer request.</p>
 */
export interface HttpContext {
  /**
   * <p>The header keys and values in an HTTP authorization request.</p>
   */
  headers?: { [key: string]: string };

  /**
   * <p>The query string keys and values in an HTTP authorization request.</p>
   */
  queryString?: string;
}

export namespace HttpContext {
  export const filterSensitiveLog = (obj: HttpContext): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the MQTT context to use for the test authorizer request</p>
 */
export interface MqttContext {
  /**
   * <p>The value of the <code>username</code> key in an MQTT authorization request.</p>
   */
  username?: string;

  /**
   * <p>The value of the <code>password</code> key in an MQTT authorization request.</p>
   */
  password?: Uint8Array;

  /**
   * <p>The value of the <code>clientId</code> key in an MQTT authorization request.</p>
   */
  clientId?: string;
}

export namespace MqttContext {
  export const filterSensitiveLog = (obj: MqttContext): any => ({
    ...obj,
  });
}
