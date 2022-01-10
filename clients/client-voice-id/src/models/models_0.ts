import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient permissions to perform this action. Check the error message and try
 *             again.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

/**
 * <p>The configuration used to authenticate a speaker during a session.</p>
 */
export interface AuthenticationConfiguration {
  /**
   * <p>The minimum threshold needed to successfully authenticate a speaker.</p>
   */
  AcceptanceThreshold: number | undefined;
}

export namespace AuthenticationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthenticationConfiguration): any => ({
    ...obj,
  });
}

export enum AuthenticationDecision {
  ACCEPT = "ACCEPT",
  NOT_ENOUGH_SPEECH = "NOT_ENOUGH_SPEECH",
  REJECT = "REJECT",
  SPEAKER_ID_NOT_PROVIDED = "SPEAKER_ID_NOT_PROVIDED",
  SPEAKER_NOT_ENROLLED = "SPEAKER_NOT_ENROLLED",
  SPEAKER_OPTED_OUT = "SPEAKER_OPTED_OUT",
}

/**
 * <p>The authentication result produced by Voice ID, processed against the current session state and streamed
 *             audio of the speaker.</p>
 */
export interface AuthenticationResult {
  /**
   * <p>The unique identifier for this authentication result. Because there can be multiple authentications
   *             for a given session, this field helps to identify if the returned result is from a previous streaming
   *             activity or a new result. Note that in absence of any new streaming activity,
   *             <code>AcceptanceThreshold</code> changes, or <code>SpeakerId</code> changes, Voice ID
   *             always returns cached Authentication Result for this API.</p>
   */
  AuthenticationResultId?: string;

  /**
   * <p>A timestamp indicating when audio aggregation started for this authentication result.</p>
   */
  AudioAggregationStartedAt?: Date;

  /**
   * <p>A timestamp indicating when audio aggregation ended for this authentication result.</p>
   */
  AudioAggregationEndedAt?: Date;

  /**
   * <p>The client-provided identifier for the speaker whose authentication result is produced. Only present if a
   *             <code>SpeakerId</code> is provided for the session.</p>
   */
  CustomerSpeakerId?: string;

  /**
   * <p>The service-generated identifier for the speaker whose authentication result is produced.</p>
   */
  GeneratedSpeakerId?: string;

  /**
   * <p>The authentication decision produced by Voice ID, processed against the current session state and streamed
   *             audio of the speaker.</p>
   */
  Decision?: AuthenticationDecision | string;

  /**
   * <p>The authentication score for the speaker whose authentication result is produced. This value is
   *             only present if the authentication decision is either <code>ACCEPT</code> or <code>REJECT</code>.</p>
   */
  Score?: number;

  /**
   * <p>The <code>AuthenticationConfiguration</code> used to generate this authentication result.</p>
   */
  Configuration?: AuthenticationConfiguration;
}

export namespace AuthenticationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthenticationResult): any => ({
    ...obj,
    ...(obj.CustomerSpeakerId && { CustomerSpeakerId: SENSITIVE_STRING }),
  });
}

export enum ConflictType {
  ANOTHER_ACTIVE_STREAM = "ANOTHER_ACTIVE_STREAM",
  CANNOT_CHANGE_SPEAKER_AFTER_ENROLLMENT = "CANNOT_CHANGE_SPEAKER_AFTER_ENROLLMENT",
  CONCURRENT_CHANGES = "CONCURRENT_CHANGES",
  DOMAIN_NOT_ACTIVE = "DOMAIN_NOT_ACTIVE",
  ENROLLMENT_ALREADY_EXISTS = "ENROLLMENT_ALREADY_EXISTS",
  SPEAKER_NOT_SET = "SPEAKER_NOT_SET",
  SPEAKER_OPTED_OUT = "SPEAKER_OPTED_OUT",
}

/**
 * <p>The request failed due to a conflict. Check the <code>ConflictType</code> and error message for
 *             more details.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The type of conflict which caused a ConflictException. Possible types and the corresponding error messages
   *             are as follows:</p>
   *         <ul>
   *             <li>
   *                     <p>
   *                   <code>DOMAIN_NOT_ACTIVE</code>: The domain is not active.</p>
   *                 </li>
   *             <li>
   *                     <p>
   *                   <code>CANNOT_CHANGE_SPEAKER_AFTER_ENROLLMENT</code>: You cannot change the speaker ID after an enrollment has been requested.</p>
   *                 </li>
   *             <li>
   *                     <p>
   *                   <code>ENROLLMENT_ALREADY_EXISTS</code>: There is already an enrollment for this session.</p>
   *                 </li>
   *             <li>
   *                     <p>
   *                   <code>SPEAKER_NOT_SET</code>: You must set the speaker ID before requesting an enrollment.</p>
   *                 </li>
   *             <li>
   *                     <p>
   *                   <code>SPEAKER_OPTED_OUT</code>: You cannot request an enrollment for an opted out speaker.</p>
   *                 </li>
   *             <li>
   *                     <p>
   *                   <code>CONCURRENT_CHANGES</code>: The request could not be processed as the resource was modified by another request during execution.</p>
   *                 </li>
   *          </ul>
   */
  ConflictType?: ConflictType | string;
}

/**
 * <p>The configuration containing information about the customer-managed KMS Key used for encrypting
 *             customer data.</p>
 */
export interface ServerSideEncryptionConfiguration {
  /**
   * <p>The identifier of the KMS Key you want Voice ID to use to encrypt your data.</p>
   */
  KmsKeyId: string | undefined;
}

export namespace ServerSideEncryptionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServerSideEncryptionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>A tag that can be assigned to a Voice ID resource.</p>
 */
export interface Tag {
  /**
   * <p>The first part of a key:value pair that forms a tag associated with a given resource. For example,
   *             in the tag ‘Department’:’Sales’, the key is 'Department'.
   *         </p>
   */
  Key: string | undefined;

  /**
   * <p>The second part of a key:value pair that forms a tag associated with a given resource. For example,
   *             in the tag ‘Department’:’Sales’, the value is 'Sales'.
   *         </p>
   */
  Value: string | undefined;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
    ...(obj.Key && { Key: SENSITIVE_STRING }),
    ...(obj.Value && { Value: SENSITIVE_STRING }),
  });
}

export interface CreateDomainRequest {
  /**
   * <p>The name of the domain.</p>
   */
  Name: string | undefined;

  /**
   * <p>A brief description of this domain.</p>
   */
  Description?: string;

  /**
   * <p>The configuration, containing the KMS Key Identifier, to be used by Voice ID for
   *             the server-side encryption of your data. Refer to <a href="https://docs.aws.amazon.com/connect/latest/adminguide/encryption-at-rest.html#encryption-at-rest-voiceid">
   *                 Amazon Connect VoiceID encryption at rest</a> for more details on how the KMS Key is used.
   *         </p>
   */
  ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration | undefined;

  /**
   * <p>The idempotency token for creating a new domain. If not provided, Amazon Web Services SDK populates
   *             this field.</p>
   */
  ClientToken?: string;

  /**
   * <p>A list of tags you want added to the domain.</p>
   */
  Tags?: Tag[];
}

export namespace CreateDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDomainRequest): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
}

export enum DomainStatus {
  ACTIVE = "ACTIVE",
  PENDING = "PENDING",
  SUSPENDED = "SUSPENDED",
}

/**
 * <p>Contains all the information about a domain.</p>
 */
export interface Domain {
  /**
   * <p>The service-generated identifier for the domain.</p>
   */
  DomainId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the domain.</p>
   */
  Arn?: string;

  /**
   * <p>The client-provided name for the domain.</p>
   */
  Name?: string;

  /**
   * <p>The client-provided description of the domain.</p>
   */
  Description?: string;

  /**
   * <p>The current status of the domain.</p>
   */
  DomainStatus?: DomainStatus | string;

  /**
   * <p>The server-side encryption configuration containing the KMS Key Identifier you want Voice ID to use
   *             to encrypt your data.</p>
   */
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * <p>The timestamp at which the domain is created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The timestamp showing the domain's last update.</p>
   */
  UpdatedAt?: Date;
}

export namespace Domain {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Domain): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface CreateDomainResponse {
  /**
   * <p>Information about the newly created domain.</p>
   */
  Domain?: Domain;
}

export namespace CreateDomainResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDomainResponse): any => ({
    ...obj,
    ...(obj.Domain && { Domain: Domain.filterSensitiveLog(obj.Domain) }),
  });
}

/**
 * <p>The request failed due to an unknown error on the server side.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
}

export enum ResourceType {
  BATCH_JOB = "BATCH_JOB",
  COMPLIANCE_CONSENT = "COMPLIANCE_CONSENT",
  DOMAIN = "DOMAIN",
  FRAUDSTER = "FRAUDSTER",
  SESSION = "SESSION",
  SPEAKER = "SPEAKER",
}

/**
 * <p>The specified resource cannot be found. Check the <code>ResourceType</code> and error message for
 *             more details.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The type of resource which cannot not be found. Possible types are <code>BATCH_JOB</code>, <code>COMPLIANCE_CONSENT</code>,
   *             <code>DOMAIN</code>, <code>FRAUDSTER</code>, <code>SESSION</code> and <code>SPEAKER</code>.</p>
   */
  ResourceType?: ResourceType | string;
}

/**
 * <p>The request exceeded the service quota. Refer to <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#voiceid-quotas">Voice ID Service
 *             Quotas</a> and try your request again.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  Message?: string;
}

/**
 * <p>The request was denied due to request throttling. Please slow down your request rate. Refer to
 *             <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html##voiceid-api-quotas">
 *                 Amazon Connect Voice ID Service API throttling quotas
 *             </a> and try your request again.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message?: string;
}

/**
 * <p>The request failed one or more validations; check the error message for more details.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
}

export interface DeleteDomainRequest {
  /**
   * <p>The identifier of the domain you want to delete.</p>
   */
  DomainId: string | undefined;
}

export namespace DeleteDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDomainRequest): any => ({
    ...obj,
  });
}

export interface DeleteFraudsterRequest {
  /**
   * <p>The identifier of the domain containing the fraudster.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The identifier of the fraudster you want to delete.</p>
   */
  FraudsterId: string | undefined;
}

export namespace DeleteFraudsterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFraudsterRequest): any => ({
    ...obj,
    ...(obj.FraudsterId && { FraudsterId: SENSITIVE_STRING }),
  });
}

export interface DeleteSpeakerRequest {
  /**
   * <p>The identifier of the domain containing the speaker.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The identifier of the speaker you want to delete.</p>
   */
  SpeakerId: string | undefined;
}

export namespace DeleteSpeakerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSpeakerRequest): any => ({
    ...obj,
    ...(obj.SpeakerId && { SpeakerId: SENSITIVE_STRING }),
  });
}

export interface DescribeDomainRequest {
  /**
   * <p>The identifier of the domain you are describing.</p>
   */
  DomainId: string | undefined;
}

export namespace DescribeDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDomainRequest): any => ({
    ...obj,
  });
}

export interface DescribeDomainResponse {
  /**
   * <p>Information about the specified domain.</p>
   */
  Domain?: Domain;
}

export namespace DescribeDomainResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDomainResponse): any => ({
    ...obj,
    ...(obj.Domain && { Domain: Domain.filterSensitiveLog(obj.Domain) }),
  });
}

export interface DescribeFraudsterRequest {
  /**
   * <p>The identifier of the domain containing the fraudster.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The identifier of the fraudster you are describing.</p>
   */
  FraudsterId: string | undefined;
}

export namespace DescribeFraudsterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFraudsterRequest): any => ({
    ...obj,
    ...(obj.FraudsterId && { FraudsterId: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains all the information about a fraudster.</p>
 */
export interface Fraudster {
  /**
   * <p>The identifier for the domain containing the fraudster.</p>
   */
  DomainId?: string;

  /**
   * <p>The service-generated identifier for the fraudster.</p>
   */
  GeneratedFraudsterId?: string;

  /**
   * <p>The timestamp when Voice ID identified the fraudster.</p>
   */
  CreatedAt?: Date;
}

export namespace Fraudster {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Fraudster): any => ({
    ...obj,
  });
}

export interface DescribeFraudsterResponse {
  /**
   * <p>Information about the specified fraudster.</p>
   */
  Fraudster?: Fraudster;
}

export namespace DescribeFraudsterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFraudsterResponse): any => ({
    ...obj,
  });
}

export interface DescribeFraudsterRegistrationJobRequest {
  /**
   * <p>The identifier for the domain containing the fraudster registration job.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The identifier for the fraudster registration job you are describing.</p>
   */
  JobId: string | undefined;
}

export namespace DescribeFraudsterRegistrationJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFraudsterRegistrationJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains error details for a failed batch job.</p>
 */
export interface FailureDetails {
  /**
   * <p>An HTTP status code representing the nature of the error.</p>
   */
  StatusCode?: number;

  /**
   * <p>A description of the error that caused the batch job failure.</p>
   */
  Message?: string;
}

export namespace FailureDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailureDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration containing input file information for a batch job.</p>
 */
export interface InputDataConfig {
  /**
   * <p>The S3 location for the input manifest file that contains the list of individual enrollment or registration
   *             job requests.</p>
   */
  S3Uri: string | undefined;
}

export namespace InputDataConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputDataConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates the completion progress for a batch job.</p>
 */
export interface JobProgress {
  /**
   * <p>Shows the completed percentage of enrollment or registration requests listed in the input file.</p>
   */
  PercentComplete?: number;
}

export namespace JobProgress {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobProgress): any => ({
    ...obj,
  });
}

export enum FraudsterRegistrationJobStatus {
  COMPLETED = "COMPLETED",
  COMPLETED_WITH_ERRORS = "COMPLETED_WITH_ERRORS",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUBMITTED = "SUBMITTED",
}

/**
 * <p>The configuration containing output file information for a batch job.</p>
 */
export interface OutputDataConfig {
  /**
   * <p>The S3 path of the folder to which Voice ID writes the job output file, which has a
   *             <code>*.out</code> extension. For example, if the input file name is <code>input-file.json</code> and
   *             the output folder path is <code>s3://output-bucket/output-folder</code>, the full output file path is
   *             <code>s3://output-bucket/output-folder/job-Id/input-file.json.out</code>.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>the identifier of the KMS key you want Voice ID to use to encrypt the output file of the fraudster
   *             registration job.</p>
   */
  KmsKeyId?: string;
}

export namespace OutputDataConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputDataConfig): any => ({
    ...obj,
  });
}

export enum DuplicateRegistrationAction {
  REGISTER_AS_NEW = "REGISTER_AS_NEW",
  SKIP = "SKIP",
}

/**
 * <p>The configuration definining the action to take when a duplicate fraudster is detected, and the
 *             similarity threshold to use for detecting a duplicate fraudster during a batch fraudster registration job.</p>
 */
export interface RegistrationConfig {
  /**
   * <p>The action to take when a fraudster is identified as a duplicate. The default action is
   *             <code>SKIP</code>, which skips registering the duplicate fraudster. Setting the value to
   *             <code>REGISTER_AS_NEW</code> always registers a new fraudster into the specified domain.</p>
   */
  DuplicateRegistrationAction?: DuplicateRegistrationAction | string;

  /**
   * <p>The minimum similarity score between the new and old fraudsters in order to consider the new
   *             fraudster a duplicate.</p>
   */
  FraudsterSimilarityThreshold?: number;
}

export namespace RegistrationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegistrationConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Contains all the information about a fraudster registration job.</p>
 */
export interface FraudsterRegistrationJob {
  /**
   * <p>The client-provied name for the fraudster registration job.</p>
   */
  JobName?: string;

  /**
   * <p>The service-generated identifier for the fraudster registration job.</p>
   */
  JobId?: string;

  /**
   * <p>The current status of the fraudster registration job.</p>
   */
  JobStatus?: FraudsterRegistrationJobStatus | string;

  /**
   * <p>The identifier of the domain containing the fraudster registration job.</p>
   */
  DomainId?: string;

  /**
   * <p>The IAM role Amazon Resource Name (ARN) that grants Voice ID permissions to access customer's buckets
   *             to read the input manifest file and write the job output file.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>The registration config containing details such as the action to take when a duplicate fraudster is
   *             detected, and the similarity threshold to use for detecting a duplicate fraudster.</p>
   */
  RegistrationConfig?: RegistrationConfig;

  /**
   * <p>The input data config containing an S3 URI for the input manifest file that contains the list
   *             of fraudster registration job requests.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The output data config containing the S3 location where you want Voice ID to write your job output
   *             file; you must also include a KMS Key ID in order to encrypt the file.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>A timestamp showing the creation time of the fraudster registration job.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>A timestamp showing when the fraudster registration job ended.</p>
   */
  EndedAt?: Date;

  /**
   * <p>Contains details that are populated when an entire batch job fails. In cases of individual registration
   *             job failures, the batch job as a whole doesn't fail; it is completed with a <code>JobStatus</code> of
   *             <code>COMPLETED_WITH_ERRORS</code>. You can use the job output file to identify the individual
   *             registration requests that failed.</p>
   */
  FailureDetails?: FailureDetails;

  /**
   * <p>Shows the completed percentage of registration requests listed in the input file.</p>
   */
  JobProgress?: JobProgress;
}

export namespace FraudsterRegistrationJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FraudsterRegistrationJob): any => ({
    ...obj,
    ...(obj.JobName && { JobName: SENSITIVE_STRING }),
  });
}

export interface DescribeFraudsterRegistrationJobResponse {
  /**
   * <p>Contains details about the specified fraudster registration job.</p>
   */
  Job?: FraudsterRegistrationJob;
}

export namespace DescribeFraudsterRegistrationJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFraudsterRegistrationJobResponse): any => ({
    ...obj,
    ...(obj.Job && { Job: FraudsterRegistrationJob.filterSensitiveLog(obj.Job) }),
  });
}

export interface DescribeSpeakerRequest {
  /**
   * <p>The identifier of the domain that contains the speaker.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The identifier of the speaker you are describing.</p>
   */
  SpeakerId: string | undefined;
}

export namespace DescribeSpeakerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSpeakerRequest): any => ({
    ...obj,
    ...(obj.SpeakerId && { SpeakerId: SENSITIVE_STRING }),
  });
}

export enum SpeakerStatus {
  ENROLLED = "ENROLLED",
  EXPIRED = "EXPIRED",
  OPTED_OUT = "OPTED_OUT",
  PENDING = "PENDING",
}

/**
 * <p>Contains all the information about a speaker.</p>
 */
export interface Speaker {
  /**
   * <p>The identifier of the domain that contains the speaker.</p>
   */
  DomainId?: string;

  /**
   * <p>The client-provided identifier for the speaker.</p>
   */
  CustomerSpeakerId?: string;

  /**
   * <p>The service-generated identifier for the speaker.</p>
   */
  GeneratedSpeakerId?: string;

  /**
   * <p>The current status of the speaker.</p>
   */
  Status?: SpeakerStatus | string;

  /**
   * <p>A timestamp showing when the speaker is created. </p>
   */
  CreatedAt?: Date;

  /**
   * <p>A timestamp showing the speaker's last update.</p>
   */
  UpdatedAt?: Date;
}

export namespace Speaker {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Speaker): any => ({
    ...obj,
    ...(obj.CustomerSpeakerId && { CustomerSpeakerId: SENSITIVE_STRING }),
  });
}

export interface DescribeSpeakerResponse {
  /**
   * <p>Information about the specified speaker.</p>
   */
  Speaker?: Speaker;
}

export namespace DescribeSpeakerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSpeakerResponse): any => ({
    ...obj,
    ...(obj.Speaker && { Speaker: Speaker.filterSensitiveLog(obj.Speaker) }),
  });
}

export interface DescribeSpeakerEnrollmentJobRequest {
  /**
   * <p>The identifier of the domain containing the speaker enrollment job.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The identifier of the speaker enrollment job you are describing.</p>
   */
  JobId: string | undefined;
}

export namespace DescribeSpeakerEnrollmentJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSpeakerEnrollmentJobRequest): any => ({
    ...obj,
  });
}

export enum ExistingEnrollmentAction {
  OVERWRITE = "OVERWRITE",
  SKIP = "SKIP",
}

export enum FraudDetectionAction {
  FAIL = "FAIL",
  IGNORE = "IGNORE",
}

/**
 * <p>The configuration defining the action to take when a speaker is flagged by the fraud detection system
 *             during a batch speaker enrollment job, and the risk threshold to use for identification.</p>
 */
export interface EnrollmentJobFraudDetectionConfig {
  /**
   * <p>The action to take when the given speaker is flagged by the fraud detection system. The default value is
   *             <code>FAIL</code>, which fails the speaker enrollment. Changing this value to <code>IGNORE</code>
   *             results in the speaker being enrolled even if they are flagged by the fraud detection system.</p>
   */
  FraudDetectionAction?: FraudDetectionAction | string;

  /**
   * <p>Threshold value for determining whether the speaker is a high risk to be fraudulent. If the detected risk
   *             score calculated by Voice ID is greater than or equal to the threshold, the speaker is considered a fraudster.</p>
   */
  RiskThreshold?: number;
}

export namespace EnrollmentJobFraudDetectionConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnrollmentJobFraudDetectionConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Contains configurations defining enrollment behavior for the batch job.</p>
 */
export interface EnrollmentConfig {
  /**
   * <p> The action to take when the specified speaker is already enrolled in the specified domain. The default
   *             value is <code>SKIP</code>, which skips the enrollment for the existing speaker. Setting the value to
   *             <code>OVERWRITE</code> replaces the existing voice prints and enrollment audio stored for that speaker
   *             with new data generated from the latest audio.</p>
   */
  ExistingEnrollmentAction?: ExistingEnrollmentAction | string;

  /**
   * <p>The fraud detection configuration to use for the speaker enrollment job.</p>
   */
  FraudDetectionConfig?: EnrollmentJobFraudDetectionConfig;
}

export namespace EnrollmentConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnrollmentConfig): any => ({
    ...obj,
  });
}

export enum SpeakerEnrollmentJobStatus {
  COMPLETED = "COMPLETED",
  COMPLETED_WITH_ERRORS = "COMPLETED_WITH_ERRORS",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUBMITTED = "SUBMITTED",
}

/**
 * <p>Contains all the information about a speaker enrollment job.</p>
 */
export interface SpeakerEnrollmentJob {
  /**
   * <p>The client-provided name for the speaker enrollment job.</p>
   */
  JobName?: string;

  /**
   * <p>The service-generated identifier for the speaker enrollment job.</p>
   */
  JobId?: string;

  /**
   * <p>The current status of the speaker enrollment job.</p>
   */
  JobStatus?: SpeakerEnrollmentJobStatus | string;

  /**
   * <p>The identifier of the domain that contains the speaker enrollment job.</p>
   */
  DomainId?: string;

  /**
   * <p>The IAM role Amazon Resource Name (ARN) that grants Voice ID permissions to access customer's buckets
   *             to read the input manifest file and write the job output file.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>The configuration that defines the action to take when the speaker is already enrolled in Voice ID, and the
   *             <code>FraudDetectionConfig</code> to use.</p>
   */
  EnrollmentConfig?: EnrollmentConfig;

  /**
   * <p>The input data config containing an S3 URI for the input manifest file that contains the list
   *             of speaker enrollment job requests.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The output data config containing the S3 location where Voice ID writes the job output file; you must
   *             also include a KMS Key ID to encrypt the file.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>A timestamp showing the creation of the speaker enrollment job.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>A timestamp showing when the speaker enrollment job ended. </p>
   */
  EndedAt?: Date;

  /**
   * <p>Contains details that are populated when an entire batch job fails. In cases of individual registration
   *             job failures, the batch job as a whole doesn't fail; it is completed with a <code>JobStatus</code> of
   *             <code>COMPLETED_WITH_ERRORS</code>. You can use the job output file to identify the individual
   *             registration requests that failed.</p>
   */
  FailureDetails?: FailureDetails;

  /**
   * <p>Provides details on job progress. This field shows the completed percentage of registration
   *             requests listed in the input file.</p>
   */
  JobProgress?: JobProgress;
}

export namespace SpeakerEnrollmentJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SpeakerEnrollmentJob): any => ({
    ...obj,
    ...(obj.JobName && { JobName: SENSITIVE_STRING }),
  });
}

export interface DescribeSpeakerEnrollmentJobResponse {
  /**
   * <p>Contains details about the specified speaker enrollment job.</p>
   */
  Job?: SpeakerEnrollmentJob;
}

export namespace DescribeSpeakerEnrollmentJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSpeakerEnrollmentJobResponse): any => ({
    ...obj,
    ...(obj.Job && { Job: SpeakerEnrollmentJob.filterSensitiveLog(obj.Job) }),
  });
}

/**
 * <p>Contains a summary of information about a domain.</p>
 */
export interface DomainSummary {
  /**
   * <p>The service-generated identifier for the domain.</p>
   */
  DomainId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the domain.</p>
   */
  Arn?: string;

  /**
   * <p>The client-provided name for the domain.</p>
   */
  Name?: string;

  /**
   * <p>The client-provided description of the domain.</p>
   */
  Description?: string;

  /**
   * <p>The current status of the domain.</p>
   */
  DomainStatus?: DomainStatus | string;

  /**
   * <p>The server-side encryption configuration containing the KMS Key Identifier you want Voice ID to use
   *             to encrypt your data..</p>
   */
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * <p>The timestamp showing when the domain is created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The timestamp showing the domain's last update.</p>
   */
  UpdatedAt?: Date;
}

export namespace DomainSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DomainSummary): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface EvaluateSessionRequest {
  /**
   * <p>The identifier of the domain where the session started.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The session identifier, or name of the session, that you want to evaluate. In Voice ID
   *             integration, this is the Contact-Id.</p>
   */
  SessionNameOrId: string | undefined;
}

export namespace EvaluateSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EvaluateSessionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration used for performing fraud detection over a speaker during a session.</p>
 */
export interface FraudDetectionConfiguration {
  /**
   * <p>Threshold value for determining whether the speaker is a fraudster. If the detected risk score
   *             calculated by Voice ID is higher than the threshold, the speaker is considered a fraudster.</p>
   */
  RiskThreshold: number | undefined;
}

export namespace FraudDetectionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FraudDetectionConfiguration): any => ({
    ...obj,
  });
}

export enum FraudDetectionDecision {
  HIGH_RISK = "HIGH_RISK",
  LOW_RISK = "LOW_RISK",
  NOT_ENOUGH_SPEECH = "NOT_ENOUGH_SPEECH",
}

export enum FraudDetectionReason {
  KNOWN_FRAUDSTER = "KNOWN_FRAUDSTER",
}

/**
 * <p>Contains details produced as a result of performing known fraudster risk analysis on a speaker.</p>
 */
export interface KnownFraudsterRisk {
  /**
   * <p>The score indicating the likelihood the speaker is a known fraudster.</p>
   */
  RiskScore: number | undefined;

  /**
   * <p>The identifier of the fraudster that is the closest match to the speaker. If there are no fraudsters
   *             registered in a given domain, or if there are no fraudsters with a non-zero RiskScore, this value is
   *             <code>null</code>.</p>
   */
  GeneratedFraudsterId?: string;
}

export namespace KnownFraudsterRisk {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KnownFraudsterRisk): any => ({
    ...obj,
  });
}

/**
 * <p>Details regarding various fraud risk analyses performed against the current session state and streamed
 *             audio of the speaker.</p>
 */
export interface FraudRiskDetails {
  /**
   * <p>The details resulting from 'Known Fraudster Risk' analysis of the speaker.</p>
   */
  KnownFraudsterRisk: KnownFraudsterRisk | undefined;
}

export namespace FraudRiskDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FraudRiskDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The fraud detection result produced by Voice ID, processed against the current session state and streamed
 *             audio of the speaker.</p>
 */
export interface FraudDetectionResult {
  /**
   * <p>The unique identifier for this fraud detection result. Given there can be multiple fraud detections
   *             for a given session, this field helps in identifying if the returned result is from previous streaming
   *             activity or a new result. Note that in the absence of any new streaming activity or risk threshold
   *             changes, Voice ID always returns cached Fraud Detection result for this API.</p>
   */
  FraudDetectionResultId?: string;

  /**
   * <p>A timestamp indicating when audio aggregation started for this fraud detection result.</p>
   */
  AudioAggregationStartedAt?: Date;

  /**
   * <p>A timestamp indicating when audio aggregation ended for this fraud detection result.</p>
   */
  AudioAggregationEndedAt?: Date;

  /**
   * <p>The <code>FraudDetectionConfiguration</code> used to generate this fraud detection result.</p>
   */
  Configuration?: FraudDetectionConfiguration;

  /**
   * <p>The fraud detection decision produced by Voice ID, processed against the current session state and
   *             streamed audio of the speaker.</p>
   */
  Decision?: FraudDetectionDecision | string;

  /**
   * <p>The reason speaker was flagged by the fraud detection system. This is only be populated if fraud
   *             detection Decision is <code>HIGH_RISK</code>, and only has one possible value:
   *             <code>KNOWN_FRAUDSTER</code>.</p>
   */
  Reasons?: (FraudDetectionReason | string)[];

  /**
   * <p>Details about each risk analyzed for this speaker.</p>
   */
  RiskDetails?: FraudRiskDetails;
}

export namespace FraudDetectionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FraudDetectionResult): any => ({
    ...obj,
  });
}

export enum StreamingStatus {
  ENDED = "ENDED",
  ONGOING = "ONGOING",
  PENDING_CONFIGURATION = "PENDING_CONFIGURATION",
}

export interface EvaluateSessionResponse {
  /**
   * <p>The identifier of the domain containing the session.</p>
   */
  DomainId?: string;

  /**
   * <p>The service-generated identifier of the session.</p>
   */
  SessionId?: string;

  /**
   * <p>The client-provided name of the session.</p>
   */
  SessionName?: string;

  /**
   * <p>The current status of audio streaming for this session. This field is useful to infer next steps when
   *             the Authentication or Fraud Detection results are empty or the decision is <code>NOT_ENOUGH_SPEECH</code>.
   *             In this situation, if the <code>StreamingStatus</code> is <code>ONGOING/PENDING_CONFIGURATION</code>, it can
   *             mean that the client should call the API again later, once Voice ID has enough audio to produce a result.
   *             If the decision remains <code>NOT_ENOUGH_SPEECH</code> even after <code>StreamingStatus</code> is <code>ENDED</code>,
   *             it means that the previously streamed session did not have enough speech to perform evaluation, and a new
   *             streaming session is needed to try again.</p>
   */
  StreamingStatus?: StreamingStatus | string;

  /**
   * <p>Details resulting from the authentication process, such as authentication decision and
   *             authentication score.</p>
   */
  AuthenticationResult?: AuthenticationResult;

  /**
   * <p>Details resulting from the fraud detection process, such as fraud detection decision and risk score.</p>
   */
  FraudDetectionResult?: FraudDetectionResult;
}

export namespace EvaluateSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EvaluateSessionResponse): any => ({
    ...obj,
    ...(obj.AuthenticationResult && {
      AuthenticationResult: AuthenticationResult.filterSensitiveLog(obj.AuthenticationResult),
    }),
  });
}

/**
 * <p>Contains a summary of information about a fraudster registration job.</p>
 */
export interface FraudsterRegistrationJobSummary {
  /**
   * <p>The client-provied name for the fraudster registration job.</p>
   */
  JobName?: string;

  /**
   * <p>The service-generated identifier for the fraudster registration job.</p>
   */
  JobId?: string;

  /**
   * <p>The current status of the fraudster registration job.</p>
   */
  JobStatus?: FraudsterRegistrationJobStatus | string;

  /**
   * <p>The identifier of the domain containing the fraudster registration job.</p>
   */
  DomainId?: string;

  /**
   * <p>A timestamp showing when the fraudster registration job is created. </p>
   */
  CreatedAt?: Date;

  /**
   * <p>A timestamp showing when the fraudster registration job ended.</p>
   */
  EndedAt?: Date;

  /**
   * <p>Contains details that are populated when an entire batch job fails. In cases of individual registration
   *             job failures, the batch job as a whole doesn't fail; it is completed with a <code>JobStatus</code> of
   *             <code>COMPLETED_WITH_ERRORS</code>. You can use the job output file to identify the individual
   *             registration requests that failed.</p>
   */
  FailureDetails?: FailureDetails;

  /**
   * <p>Shows the completed percentage of registration requests listed in the input file.</p>
   */
  JobProgress?: JobProgress;
}

export namespace FraudsterRegistrationJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FraudsterRegistrationJobSummary): any => ({
    ...obj,
    ...(obj.JobName && { JobName: SENSITIVE_STRING }),
  });
}

export interface ListDomainsRequest {
  /**
   * <p>The maximum number of results that are returned per call. You can use <code>NextToken</code> to obtain
   *             further pages of results. The default is 100; the maximum allowed page size is also 100.
   *         </p>
   */
  MaxResults?: number;

  /**
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of <code>NextToken</code>
   *             is a unique pagination token for each page. Make the call again using the returned token to retrieve the
   *             next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   *         </p>
   */
  NextToken?: string;
}

export namespace ListDomainsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDomainsRequest): any => ({
    ...obj,
  });
}

export interface ListDomainsResponse {
  /**
   * <p>A list containing details about each domain in the Amazon Web Services account.</p>
   */
  DomainSummaries?: DomainSummary[];

  /**
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of <code>NextToken</code>
   *             is a unique pagination token for each page. Make the call again using the returned token to retrieve the
   *             next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   *         </p>
   */
  NextToken?: string;
}

export namespace ListDomainsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDomainsResponse): any => ({
    ...obj,
    ...(obj.DomainSummaries && {
      DomainSummaries: obj.DomainSummaries.map((item) => DomainSummary.filterSensitiveLog(item)),
    }),
  });
}

export interface ListFraudsterRegistrationJobsRequest {
  /**
   * <p>The identifier of the domain containing the fraudster registration Jobs.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>Provides the status of your fraudster registration job.</p>
   */
  JobStatus?: FraudsterRegistrationJobStatus | string;

  /**
   * <p>The maximum number of results that are returned per call. You can use <code>NextToken</code> to obtain
   *             further pages of results. The default is 100; the maximum allowed page size is also 100.
   *         </p>
   */
  MaxResults?: number;

  /**
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of <code>NextToken</code>
   *             is a unique pagination token for each page. Make the call again using the returned token to retrieve the
   *             next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   *         </p>
   */
  NextToken?: string;
}

export namespace ListFraudsterRegistrationJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFraudsterRegistrationJobsRequest): any => ({
    ...obj,
  });
}

export interface ListFraudsterRegistrationJobsResponse {
  /**
   * <p>A list containing details about each specified fraudster registration job.</p>
   */
  JobSummaries?: FraudsterRegistrationJobSummary[];

  /**
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of <code>NextToken</code>
   *             is a unique pagination token for each page. Make the call again using the returned token to retrieve the
   *             next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   *         </p>
   */
  NextToken?: string;
}

export namespace ListFraudsterRegistrationJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFraudsterRegistrationJobsResponse): any => ({
    ...obj,
    ...(obj.JobSummaries && {
      JobSummaries: obj.JobSummaries.map((item) => FraudsterRegistrationJobSummary.filterSensitiveLog(item)),
    }),
  });
}

export interface ListSpeakerEnrollmentJobsRequest {
  /**
   * <p>The identifier of the domain containing the speaker enrollment jobs.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>Provides the status of your speaker enrollment Job.</p>
   */
  JobStatus?: SpeakerEnrollmentJobStatus | string;

  /**
   * <p>The maximum number of results that are returned per call. You can use <code>NextToken</code> to obtain
   *             further pages of results. The default is 100; the maximum allowed page size is also 100.
   *         </p>
   */
  MaxResults?: number;

  /**
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of <code>NextToken</code>
   *             is a unique pagination token for each page. Make the call again using the returned token to retrieve the
   *             next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   *         </p>
   */
  NextToken?: string;
}

export namespace ListSpeakerEnrollmentJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSpeakerEnrollmentJobsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a summary of information about a speaker enrollment job.</p>
 */
export interface SpeakerEnrollmentJobSummary {
  /**
   * <p>The client-provided name for the speaker enrollment job.</p>
   */
  JobName?: string;

  /**
   * <p>The service-generated identifier for the speaker enrollment job.</p>
   */
  JobId?: string;

  /**
   * <p>The current status of the speaker enrollment job.</p>
   */
  JobStatus?: SpeakerEnrollmentJobStatus | string;

  /**
   * <p>The identifier of the domain that contains the speaker enrollment job.</p>
   */
  DomainId?: string;

  /**
   * <p>A timestamp showing the creation time of the speaker enrollment job.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>A timestamp showing when the speaker enrollment job ended.</p>
   */
  EndedAt?: Date;

  /**
   * <p>Contains details that are populated when an entire batch job fails. In cases of individual registration
   *             job failures, the batch job as a whole doesn't fail; it is completed with a <code>JobStatus</code> of
   *             <code>COMPLETED_WITH_ERRORS</code>. You can use the job output file to identify the individual
   *             registration requests that failed.</p>
   */
  FailureDetails?: FailureDetails;

  /**
   * <p>Provides details regarding job progress. This field shows the completed percentage of enrollment
   *             requests listed in the input file.</p>
   */
  JobProgress?: JobProgress;
}

export namespace SpeakerEnrollmentJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SpeakerEnrollmentJobSummary): any => ({
    ...obj,
    ...(obj.JobName && { JobName: SENSITIVE_STRING }),
  });
}

export interface ListSpeakerEnrollmentJobsResponse {
  /**
   * <p>A list containing details about each specified speaker enrollment job.</p>
   */
  JobSummaries?: SpeakerEnrollmentJobSummary[];

  /**
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of <code>NextToken</code>
   *             is a unique pagination token for each page. Make the call again using the returned token to retrieve the
   *             next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   *         </p>
   */
  NextToken?: string;
}

export namespace ListSpeakerEnrollmentJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSpeakerEnrollmentJobsResponse): any => ({
    ...obj,
    ...(obj.JobSummaries && {
      JobSummaries: obj.JobSummaries.map((item) => SpeakerEnrollmentJobSummary.filterSensitiveLog(item)),
    }),
  });
}

export interface ListSpeakersRequest {
  /**
   * <p>The identifier of the domain.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use <code>NextToken</code> to obtain
   *             further pages of results. The default is 100; the maximum allowed page size is also 100.
   *         </p>
   */
  MaxResults?: number;

  /**
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of <code>NextToken</code>
   *             is a unique pagination token for each page. Make the call again using the returned token to retrieve the
   *             next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   *         </p>
   */
  NextToken?: string;
}

export namespace ListSpeakersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSpeakersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a summary of information about a speaker.</p>
 */
export interface SpeakerSummary {
  /**
   * <p>The identifier of the domain that contains the speaker.</p>
   */
  DomainId?: string;

  /**
   * <p>The client-provided identifier for the speaker.</p>
   */
  CustomerSpeakerId?: string;

  /**
   * <p>The service-generated identifier for the speaker. </p>
   */
  GeneratedSpeakerId?: string;

  /**
   * <p>The current status of the speaker.</p>
   */
  Status?: SpeakerStatus | string;

  /**
   * <p>A timestamp showing the speaker's creation time. </p>
   */
  CreatedAt?: Date;

  /**
   * <p>A timestamp showing the speaker's last update.</p>
   */
  UpdatedAt?: Date;
}

export namespace SpeakerSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SpeakerSummary): any => ({
    ...obj,
    ...(obj.CustomerSpeakerId && { CustomerSpeakerId: SENSITIVE_STRING }),
  });
}

export interface ListSpeakersResponse {
  /**
   * <p>A list containing details about each speaker in the Amazon Web Services account.
   *         </p>
   */
  SpeakerSummaries?: SpeakerSummary[];

  /**
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of <code>NextToken</code>
   *             is a unique pagination token for each page. Make the call again using the returned token to retrieve the
   *             next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   *         </p>
   */
  NextToken?: string;
}

export namespace ListSpeakersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSpeakersResponse): any => ({
    ...obj,
    ...(obj.SpeakerSummaries && {
      SpeakerSummaries: obj.SpeakerSummaries.map((item) => SpeakerSummary.filterSensitiveLog(item)),
    }),
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Voice ID resource for which you want to list the tags.</p>
   */
  ResourceArn: string | undefined;
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
   * <p>The list of tags associated with the specified resource.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
}

export interface OptOutSpeakerRequest {
  /**
   * <p>The identifier of the domain containing the speaker.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The identifier of the speaker you want opted-out.</p>
   */
  SpeakerId: string | undefined;
}

export namespace OptOutSpeakerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OptOutSpeakerRequest): any => ({
    ...obj,
    ...(obj.SpeakerId && { SpeakerId: SENSITIVE_STRING }),
  });
}

export interface OptOutSpeakerResponse {
  /**
   * <p>Details about the opted-out speaker.</p>
   */
  Speaker?: Speaker;
}

export namespace OptOutSpeakerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OptOutSpeakerResponse): any => ({
    ...obj,
    ...(obj.Speaker && { Speaker: Speaker.filterSensitiveLog(obj.Speaker) }),
  });
}

export interface StartFraudsterRegistrationJobRequest {
  /**
   * <p>The idempotency token for starting a new fraudster registration job. If not provided, Amazon Web Services
   *             SDK populates this field.</p>
   */
  ClientToken?: string;

  /**
   * <p>The name of the new fraudster registration job.</p>
   */
  JobName?: string;

  /**
   * <p>The identifier of the domain containing the fraudster registration job and in which the fraudsters are
   *             registered.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The IAM role Amazon Resource Name (ARN) that grants Voice ID permissions to access customer's buckets
   *             to read the input manifest file and write the Job output file. Refer to the
   *             <a href="https://docs.aws.amazon.com/connect/latest/adminguide/voiceid-fraudster-watchlist.html">Create and
   *                 edit a fraudster watchlist</a> documentation for the permissions needed in this role.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The registration config containing details such as the action to take when a duplicate fraudster is
   *             detected, and the similarity threshold to use for detecting a duplicate fraudster.</p>
   */
  RegistrationConfig?: RegistrationConfig;

  /**
   * <p>The input data config containing an S3 URI for the input manifest file that contains the list
   *             of fraudster registration requests.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>The output data config containing the S3 location where Voice ID writes the job output file; you must
   *             also include a KMS Key ID to encrypt the file.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;
}

export namespace StartFraudsterRegistrationJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartFraudsterRegistrationJobRequest): any => ({
    ...obj,
    ...(obj.JobName && { JobName: SENSITIVE_STRING }),
  });
}

export interface StartFraudsterRegistrationJobResponse {
  /**
   * <p>Details about the started fraudster registration job.</p>
   */
  Job?: FraudsterRegistrationJob;
}

export namespace StartFraudsterRegistrationJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartFraudsterRegistrationJobResponse): any => ({
    ...obj,
    ...(obj.Job && { Job: FraudsterRegistrationJob.filterSensitiveLog(obj.Job) }),
  });
}

export interface StartSpeakerEnrollmentJobRequest {
  /**
   * <p>The idempotency token for starting a new speaker enrollment Job. If not provided, Amazon Web Services
   *             SDK populates this field.</p>
   */
  ClientToken?: string;

  /**
   * <p>A name for your speaker enrollment job.</p>
   */
  JobName?: string;

  /**
   * <p>The identifier of the domain that contains the speaker enrollment job and in which the speakers are
   *             enrolled.
   *         </p>
   */
  DomainId: string | undefined;

  /**
   * <p>The IAM role Amazon Resource Name (ARN) that grants Voice ID permissions to access customer's buckets
   *             to read the input manifest file and write the job output file. Refer to <a href="https://docs.aws.amazon.com/connect/latest/adminguide/voiceid-batch-enrollment.html">Batch enrollment using audio data from prior
   *                 calls</a> documentation for the permissions needed in this role.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The enrollment config that contains details such as the action to take when a speaker is already
   *             enrolled in the Voice ID system or when a speaker is identified as a fraudster.</p>
   */
  EnrollmentConfig?: EnrollmentConfig;

  /**
   * <p>The input data config containing the S3 location for the input manifest file that contains the list of
   *             speaker enrollment requests.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>The output data config containing the S3 location where Voice ID writes the job output file; you must
   *             also include a KMS Key ID to encrypt the file.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;
}

export namespace StartSpeakerEnrollmentJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartSpeakerEnrollmentJobRequest): any => ({
    ...obj,
    ...(obj.JobName && { JobName: SENSITIVE_STRING }),
  });
}

export interface StartSpeakerEnrollmentJobResponse {
  /**
   * <p>Details about the started speaker enrollment job.</p>
   */
  Job?: SpeakerEnrollmentJob;
}

export namespace StartSpeakerEnrollmentJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartSpeakerEnrollmentJobResponse): any => ({
    ...obj,
    ...(obj.Job && { Job: SpeakerEnrollmentJob.filterSensitiveLog(obj.Job) }),
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Voice ID resource you want to tag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of tags to assign to the specified resource.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
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
   * <p>The Amazon Resource Name (ARN) of the Voice ID resource you want to remove tags from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of tag keys you want to remove from the specified resource.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
    ...(obj.TagKeys && { TagKeys: SENSITIVE_STRING }),
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

export interface UpdateDomainRequest {
  /**
   * <p>The identifier of the domain to be updated.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The name of the domain.</p>
   */
  Name: string | undefined;

  /**
   * <p>A brief description about this domain.</p>
   */
  Description?: string;

  /**
   * <p>The configuration, containing the KMS Key Identifier, to be used by Voice ID for the server-side
   *             encryption of your data. Note that all the existing data in the domain are still encrypted using the
   *             existing key, only the data added to domain after updating the key is encrypted using the new key. </p>
   */
  ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration | undefined;
}

export namespace UpdateDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDomainRequest): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface UpdateDomainResponse {
  /**
   * <p>Details about the updated domain</p>
   */
  Domain?: Domain;
}

export namespace UpdateDomainResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDomainResponse): any => ({
    ...obj,
    ...(obj.Domain && { Domain: Domain.filterSensitiveLog(obj.Domain) }),
  });
}
