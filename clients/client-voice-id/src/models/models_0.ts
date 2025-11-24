// smithy-typescript generated code
import {
  AuthenticationDecision,
  DomainStatus,
  DuplicateRegistrationAction,
  ExistingEnrollmentAction,
  FraudDetectionAction,
  FraudDetectionDecision,
  FraudDetectionReason,
  FraudsterRegistrationJobStatus,
  ServerSideEncryptionUpdateStatus,
  SpeakerEnrollmentJobStatus,
  SpeakerStatus,
  StreamingStatus,
} from "./enums";

/**
 * @public
 */
export interface AssociateFraudsterRequest {
  /**
   * <p>The identifier of the domain that contains the fraudster.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The identifier of the watchlist you want to associate with the fraudster.</p>
   * @public
   */
  WatchlistId: string | undefined;

  /**
   * <p>The identifier of the fraudster to be associated with the watchlist.</p>
   * @public
   */
  FraudsterId: string | undefined;
}

/**
 * <p>Contains all the information about a fraudster.</p>
 * @public
 */
export interface Fraudster {
  /**
   * <p>The identifier of the domain that contains the fraudster.</p>
   * @public
   */
  DomainId?: string | undefined;

  /**
   * <p>The service-generated identifier for the fraudster.</p>
   * @public
   */
  GeneratedFraudsterId?: string | undefined;

  /**
   * <p>The timestamp of when Voice ID identified the fraudster.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The identifier of the watchlists the fraudster is a part of.</p>
   * @public
   */
  WatchlistIds?: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateFraudsterResponse {
  /**
   * <p>Contains all the information about a fraudster.</p>
   * @public
   */
  Fraudster?: Fraudster | undefined;
}

/**
 * <p>The configuration used to authenticate a speaker during a session.</p>
 * @public
 */
export interface AuthenticationConfiguration {
  /**
   * <p>The minimum threshold needed to successfully authenticate a speaker.</p>
   * @public
   */
  AcceptanceThreshold: number | undefined;
}

/**
 * <p>The authentication result produced by Voice ID, processed against the current session
 *             state and streamed audio of the speaker.</p>
 * @public
 */
export interface AuthenticationResult {
  /**
   * <p>The unique identifier for this authentication result. Because there can be multiple
   *             authentications for a given session, this field helps to identify if the returned result
   *             is from a previous streaming activity or a new result. Note that in absence of any new
   *             streaming activity, <code>AcceptanceThreshold</code> changes, or <code>SpeakerId</code>
   *             changes, Voice ID always returns cached Authentication Result for this API.</p>
   * @public
   */
  AuthenticationResultId?: string | undefined;

  /**
   * <p>A timestamp of when audio aggregation started for this authentication
   *             result.</p>
   * @public
   */
  AudioAggregationStartedAt?: Date | undefined;

  /**
   * <p>A timestamp of when audio aggregation ended for this authentication
   *             result.</p>
   * @public
   */
  AudioAggregationEndedAt?: Date | undefined;

  /**
   * <p>The client-provided identifier for the speaker whose authentication result is
   *             produced. Only present if a <code>SpeakerId</code> is provided for the session.</p>
   * @public
   */
  CustomerSpeakerId?: string | undefined;

  /**
   * <p>The service-generated identifier for the speaker whose authentication result is
   *             produced.</p>
   * @public
   */
  GeneratedSpeakerId?: string | undefined;

  /**
   * <p>The authentication decision produced by Voice ID, processed against the current
   *             session state and streamed audio of the speaker.</p>
   * @public
   */
  Decision?: AuthenticationDecision | undefined;

  /**
   * <p>The authentication score for the speaker whose authentication result is produced. This
   *             value is only present if the authentication decision is either <code>ACCEPT</code> or
   *                 <code>REJECT</code>.</p>
   * @public
   */
  Score?: number | undefined;

  /**
   * <p>The <code>AuthenticationConfiguration</code> used to generate this authentication
   *             result.</p>
   * @public
   */
  Configuration?: AuthenticationConfiguration | undefined;
}

/**
 * <p>The configuration containing information about the customer managed key used for
 *             encrypting customer data.</p>
 * @public
 */
export interface ServerSideEncryptionConfiguration {
  /**
   * <p>The identifier of the KMS key to use to encrypt data stored by
   *             Voice ID. Voice ID doesn't support asymmetric customer managed keys. </p>
   * @public
   */
  KmsKeyId: string | undefined;
}

/**
 * <p>The tags used to organize, track, or control access for this resource. For example, \{
 *             "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The first part of a key:value pair that forms a tag associated with a given resource.
   *             For example, in the tag 'Department':'Sales', the key is 'Department'. </p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The second part of a key:value pair that forms a tag associated with a given resource.
   *             For example, in the tag 'Department':'Sales', the value is 'Sales'. </p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateDomainRequest {
  /**
   * <p>The name of the domain.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A brief description of this domain.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The configuration, containing the KMS key identifier, to be used by
   *             Voice ID for the server-side encryption of your data. Refer to <a href="https://docs.aws.amazon.com/connect/latest/adminguide/encryption-at-rest.html#encryption-at-rest-voiceid">
   *                 Amazon Connect Voice ID encryption at rest</a> for more details on how the KMS key is used. </p>
   * @public
   */
  ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A list of tags you want added to the domain.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Details about the most recent server-side encryption configuration update. When the
 *             server-side encryption configuration is changed, dependency on the old KMS key is removed through an asynchronous process. When this update is
 *             complete, the domain’s data can only be accessed using the new KMS key.</p>
 * @public
 */
export interface ServerSideEncryptionUpdateDetails {
  /**
   * <p>The previous KMS key ID the domain was encrypted with, before
   *             ServerSideEncryptionConfiguration was updated to a new KMS key ID.</p>
   * @public
   */
  OldKmsKeyId?: string | undefined;

  /**
   * <p>Status of the server-side encryption update. During an update, if there is an issue
   *             with the domain's current or old KMS key ID, such as an inaccessible or
   *             disabled key, then the status is FAILED. In order to resolve this, the key needs to be
   *             made accessible, and then an UpdateDomain call with the existing server-side encryption
   *             configuration will re-attempt this update process.</p>
   * @public
   */
  UpdateStatus?: ServerSideEncryptionUpdateStatus | undefined;

  /**
   * <p>Message explaining the current UpdateStatus. When the UpdateStatus is FAILED, this
   *             message explains the cause of the failure.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Details of the watchlists in a domain.</p>
 * @public
 */
export interface WatchlistDetails {
  /**
   * <p>The identifier of the default watchlist.</p>
   * @public
   */
  DefaultWatchlistId: string | undefined;
}

/**
 * <p>Contains all the information about a domain.</p>
 * @public
 */
export interface Domain {
  /**
   * <p>The identifier of the domain.</p>
   * @public
   */
  DomainId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the domain.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name for the domain.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the domain.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The current status of the domain.</p>
   * @public
   */
  DomainStatus?: DomainStatus | undefined;

  /**
   * <p>The server-side encryption configuration containing the KMS key
   *             identifier you want Voice ID to use to encrypt your data.</p>
   * @public
   */
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * <p>The timestamp of when the domain was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp of when the domain was last update.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>Details about the most recent server-side encryption configuration update. When the
   *             server-side encryption configuration is changed, dependency on the old KMS key is removed through an asynchronous process. When this update is
   *             complete, the domain's data can only be accessed using the new KMS key.</p>
   * @public
   */
  ServerSideEncryptionUpdateDetails?: ServerSideEncryptionUpdateDetails | undefined;

  /**
   * <p>The watchlist details of a domain. Contains the default watchlist ID of the domain.</p>
   * @public
   */
  WatchlistDetails?: WatchlistDetails | undefined;
}

/**
 * @public
 */
export interface CreateDomainResponse {
  /**
   * <p>Information about the newly created domain.</p>
   * @public
   */
  Domain?: Domain | undefined;
}

/**
 * @public
 */
export interface CreateWatchlistRequest {
  /**
   * <p>The identifier of the domain that contains the watchlist.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The name of the watchlist.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A brief description of this watchlist.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>Contains all the information about a watchlist.</p>
 * @public
 */
export interface Watchlist {
  /**
   * <p>The identifier of the domain that contains the watchlist.</p>
   * @public
   */
  DomainId?: string | undefined;

  /**
   * <p>The identifier of the watchlist.</p>
   * @public
   */
  WatchlistId?: string | undefined;

  /**
   * <p>The name for the watchlist.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the watchlist.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Whether the specified watchlist is the default watchlist of a domain.</p>
   * @public
   */
  DefaultWatchlist?: boolean | undefined;

  /**
   * <p>The timestamp of when the watchlist was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp of when the watchlist was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateWatchlistResponse {
  /**
   * <p>Information about the newly created watchlist.</p>
   * @public
   */
  Watchlist?: Watchlist | undefined;
}

/**
 * @public
 */
export interface DeleteDomainRequest {
  /**
   * <p>The identifier of the domain you want to delete.</p>
   * @public
   */
  DomainId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFraudsterRequest {
  /**
   * <p>The identifier of the domain that contains the fraudster.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The identifier of the fraudster you want to delete.</p>
   * @public
   */
  FraudsterId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSpeakerRequest {
  /**
   * <p>The identifier of the domain that contains the speaker.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The identifier of the speaker you want to delete.</p>
   * @public
   */
  SpeakerId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWatchlistRequest {
  /**
   * <p>The identifier of the domain that contains the watchlist.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The identifier of the watchlist to be deleted.</p>
   * @public
   */
  WatchlistId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDomainRequest {
  /**
   * <p>The identifier of the domain that you are describing.</p>
   * @public
   */
  DomainId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDomainResponse {
  /**
   * <p>Information about the specified domain.</p>
   * @public
   */
  Domain?: Domain | undefined;
}

/**
 * @public
 */
export interface DescribeFraudsterRequest {
  /**
   * <p>The identifier of the domain that contains the fraudster.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The identifier of the fraudster you are describing.</p>
   * @public
   */
  FraudsterId: string | undefined;
}

/**
 * @public
 */
export interface DescribeFraudsterResponse {
  /**
   * <p>Information about the specified fraudster.</p>
   * @public
   */
  Fraudster?: Fraudster | undefined;
}

/**
 * @public
 */
export interface DescribeFraudsterRegistrationJobRequest {
  /**
   * <p>The identifier of the domain that contains the fraudster registration job.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The identifier of the fraudster registration job you are describing.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * <p>Contains error details for a failed batch job.</p>
 * @public
 */
export interface FailureDetails {
  /**
   * <p>An HTTP status code representing the nature of the error.</p>
   * @public
   */
  StatusCode?: number | undefined;

  /**
   * <p>A description of the error that caused the batch job failure.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>The configuration containing input file information for a batch job.</p>
 * @public
 */
export interface InputDataConfig {
  /**
   * <p>The S3 location for the input manifest file that contains the list of individual
   *             enrollment or registration job requests.</p>
   * @public
   */
  S3Uri: string | undefined;
}

/**
 * <p>Indicates the completion progress for a batch job.</p>
 * @public
 */
export interface JobProgress {
  /**
   * <p>Shows the completed percentage of enrollment or registration requests listed in the
   *             input file.</p>
   * @public
   */
  PercentComplete?: number | undefined;
}

/**
 * <p>The configuration containing output file information for a batch job.</p>
 * @public
 */
export interface OutputDataConfig {
  /**
   * <p>The S3 path of the folder where Voice ID writes the job output file. It has a
   *                 <code>*.out</code> extension. For example, if the input file name is
   *                 <code>input-file.json</code> and the output folder path is
   *                 <code>s3://output-bucket/output-folder</code>, the full output file path is
   *                 <code>s3://output-bucket/output-folder/job-Id/input-file.json.out</code>.</p>
   * @public
   */
  S3Uri: string | undefined;

  /**
   * <p>The identifier of the KMS key you want Voice ID to use to encrypt the
   *             output file of a speaker enrollment job/fraudster registration job.
   *             </p>
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * <p>The registration configuration to be used during the batch fraudster registration job.</p>
 * @public
 */
export interface RegistrationConfig {
  /**
   * <p>The action to take when a fraudster is identified as a duplicate. The default action
   *             is <code>SKIP</code>, which skips registering the duplicate fraudster. Setting the value
   *             to <code>REGISTER_AS_NEW</code> always registers a new fraudster into the specified
   *             domain.</p>
   * @public
   */
  DuplicateRegistrationAction?: DuplicateRegistrationAction | undefined;

  /**
   * <p>The minimum similarity score between the new and old fraudsters in order to consider
   *             the new fraudster a duplicate.</p>
   * @public
   */
  FraudsterSimilarityThreshold?: number | undefined;

  /**
   * <p>The identifiers of watchlists that a fraudster is registered to. If a watchlist isn't provided, the fraudsters are registered to the default watchlist.
   *         </p>
   * @public
   */
  WatchlistIds?: string[] | undefined;
}

/**
 * <p>Contains all the information about a fraudster registration job.</p>
 * @public
 */
export interface FraudsterRegistrationJob {
  /**
   * <p>The client-provided name for the fraudster registration job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The service-generated identifier for the fraudster registration job.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The current status of the fraudster registration job.</p>
   * @public
   */
  JobStatus?: FraudsterRegistrationJobStatus | undefined;

  /**
   * <p>The identifier of the domain that contains the fraudster registration job.</p>
   * @public
   */
  DomainId?: string | undefined;

  /**
   * <p>The IAM role Amazon Resource Name (ARN) that grants Voice ID permissions to access
   *             customer's buckets to read the input manifest file and write the job output file.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>The registration config containing details such as the action to take when a duplicate
   *             fraudster is detected, and the similarity threshold to use for detecting a duplicate
   *             fraudster.</p>
   * @public
   */
  RegistrationConfig?: RegistrationConfig | undefined;

  /**
   * <p>The input data config containing an S3 URI for the input manifest file that contains
   *             the list of fraudster registration job requests.</p>
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * <p>The output data config containing the S3 location where you want Voice ID to write
   *             your job output file; you must also include a KMS key ID in order to
   *             encrypt the file.</p>
   * @public
   */
  OutputDataConfig?: OutputDataConfig | undefined;

  /**
   * <p>A timestamp of when the fraudster registration job was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>A timestamp of when the fraudster registration job ended.</p>
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * <p>Contains details that are populated when an entire batch job fails. In cases of
   *             individual registration job failures, the batch job as a whole doesn't fail; it is
   *             completed with a <code>JobStatus</code> of <code>COMPLETED_WITH_ERRORS</code>. You can
   *             use the job output file to identify the individual registration requests that
   *             failed.</p>
   * @public
   */
  FailureDetails?: FailureDetails | undefined;

  /**
   * <p>Shows the completed percentage of registration requests listed in the input
   *             file.</p>
   * @public
   */
  JobProgress?: JobProgress | undefined;
}

/**
 * @public
 */
export interface DescribeFraudsterRegistrationJobResponse {
  /**
   * <p>Contains details about the specified fraudster registration job.</p>
   * @public
   */
  Job?: FraudsterRegistrationJob | undefined;
}

/**
 * @public
 */
export interface DescribeSpeakerRequest {
  /**
   * <p>The identifier of the domain that contains the speaker.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The identifier of the speaker you are describing.</p>
   * @public
   */
  SpeakerId: string | undefined;
}

/**
 * <p>Contains all the information about a speaker.</p>
 * @public
 */
export interface Speaker {
  /**
   * <p>The identifier of the domain that contains the speaker.</p>
   * @public
   */
  DomainId?: string | undefined;

  /**
   * <p>The client-provided identifier for the speaker.</p>
   * @public
   */
  CustomerSpeakerId?: string | undefined;

  /**
   * <p>The service-generated identifier for the speaker.</p>
   * @public
   */
  GeneratedSpeakerId?: string | undefined;

  /**
   * <p>The current status of the speaker.</p>
   * @public
   */
  Status?: SpeakerStatus | undefined;

  /**
   * <p>A timestamp of when the speaker was created. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>A timestamp of the speaker's last update.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The timestamp of when the speaker was last accessed for enrollment, re-enrollment or a
   *             successful authentication. This timestamp is accurate to one hour.</p>
   * @public
   */
  LastAccessedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeSpeakerResponse {
  /**
   * <p>Information about the specified speaker.</p>
   * @public
   */
  Speaker?: Speaker | undefined;
}

/**
 * @public
 */
export interface DescribeSpeakerEnrollmentJobRequest {
  /**
   * <p>The identifier of the domain that contains the speaker enrollment job.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The identifier of the speaker enrollment job you are describing.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * <p>The fraud detection configuration to be used during the batch speaker enrollment job.</p>
 * @public
 */
export interface EnrollmentJobFraudDetectionConfig {
  /**
   * <p>The action to take when the given speaker is flagged by the fraud detection system.
   *             The default value is <code>FAIL</code>, which fails the speaker enrollment. Changing
   *             this value to <code>IGNORE</code> results in the speaker being enrolled even if they are
   *             flagged by the fraud detection system.</p>
   * @public
   */
  FraudDetectionAction?: FraudDetectionAction | undefined;

  /**
   * <p>Threshold value for determining whether the speaker is a high risk to be fraudulent.
   *             If the detected risk score calculated by Voice ID is greater than or equal to the
   *             threshold, the speaker is considered a fraudster.</p>
   * @public
   */
  RiskThreshold?: number | undefined;

  /**
   * <p>The identifier of watchlists against which fraud detection is performed.
   *         </p>
   * @public
   */
  WatchlistIds?: string[] | undefined;
}

/**
 * <p>Contains configurations defining enrollment behavior for the batch job.</p>
 * @public
 */
export interface EnrollmentConfig {
  /**
   * <p> The action to take when the specified speaker is already enrolled in the specified
   *             domain. The default value is <code>SKIP</code>, which skips the enrollment for the
   *             existing speaker. Setting the value to <code>OVERWRITE</code> replaces the existing
   *             voice prints and enrollment audio stored for that speaker with new data generated from
   *             the latest audio.</p>
   * @public
   */
  ExistingEnrollmentAction?: ExistingEnrollmentAction | undefined;

  /**
   * <p>The fraud detection configuration to use for the speaker enrollment job.</p>
   * @public
   */
  FraudDetectionConfig?: EnrollmentJobFraudDetectionConfig | undefined;
}

/**
 * <p>Contains all the information about a speaker enrollment job.</p>
 * @public
 */
export interface SpeakerEnrollmentJob {
  /**
   * <p>The client-provided name for the speaker enrollment job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The service-generated identifier for the speaker enrollment job.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The current status of the speaker enrollment job.</p>
   * @public
   */
  JobStatus?: SpeakerEnrollmentJobStatus | undefined;

  /**
   * <p>The identifier of the domain that contains the speaker enrollment job.</p>
   * @public
   */
  DomainId?: string | undefined;

  /**
   * <p>The IAM role Amazon Resource Name (ARN) that grants Voice ID permissions to access
   *             customer's buckets to read the input manifest file and write the job output file.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>The configuration that defines the action to take when the speaker is already enrolled
   *             in Voice ID, and the <code>FraudDetectionConfig</code> to use.</p>
   * @public
   */
  EnrollmentConfig?: EnrollmentConfig | undefined;

  /**
   * <p>The input data config containing an S3 URI for the input manifest file that contains
   *             the list of speaker enrollment job requests.</p>
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * <p>The output data config containing the S3 location where Voice ID writes the job
   *             output file; you must also include a KMS key ID to encrypt the
   *             file.</p>
   * @public
   */
  OutputDataConfig?: OutputDataConfig | undefined;

  /**
   * <p>A timestamp of when the speaker enrollment job was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>A timestamp of when the speaker enrollment job ended. </p>
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * <p>Contains details that are populated when an entire batch job fails. In cases of
   *             individual registration job failures, the batch job as a whole doesn't fail; it is
   *             completed with a <code>JobStatus</code> of <code>COMPLETED_WITH_ERRORS</code>. You can
   *             use the job output file to identify the individual registration requests that
   *             failed.</p>
   * @public
   */
  FailureDetails?: FailureDetails | undefined;

  /**
   * <p>Provides details on job progress. This field shows the completed percentage of
   *             registration requests listed in the input file.</p>
   * @public
   */
  JobProgress?: JobProgress | undefined;
}

/**
 * @public
 */
export interface DescribeSpeakerEnrollmentJobResponse {
  /**
   * <p>Contains details about the specified speaker enrollment job.</p>
   * @public
   */
  Job?: SpeakerEnrollmentJob | undefined;
}

/**
 * @public
 */
export interface DescribeWatchlistRequest {
  /**
   * <p>The identifier of the domain that contains the watchlist.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The identifier of the watchlist that you are describing.</p>
   * @public
   */
  WatchlistId: string | undefined;
}

/**
 * @public
 */
export interface DescribeWatchlistResponse {
  /**
   * <p>Information about the specified watchlist.</p>
   * @public
   */
  Watchlist?: Watchlist | undefined;
}

/**
 * @public
 */
export interface DisassociateFraudsterRequest {
  /**
   * <p>The identifier of the domain that contains the fraudster.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The identifier of the watchlist that you want to disassociate from the fraudster.</p>
   * @public
   */
  WatchlistId: string | undefined;

  /**
   * <p>The identifier of the fraudster to be disassociated from the watchlist.</p>
   * @public
   */
  FraudsterId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateFraudsterResponse {
  /**
   * <p>Contains all the information about a fraudster.</p>
   * @public
   */
  Fraudster?: Fraudster | undefined;
}

/**
 * @public
 */
export interface ListDomainsRequest {
  /**
   * <p>The maximum number of results that are returned per call. You can use
   *             <code>NextToken</code> to obtain more pages of results. The default is 100; the maximum allowed page size is also 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of
   *             <code>NextToken</code> is a unique pagination token for each page. Make the call
   *             again using the returned token to retrieve the next page. Keep all other arguments
   *             unchanged. Each pagination token expires after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains a summary of information about a domain.</p>
 * @public
 */
export interface DomainSummary {
  /**
   * <p>The identifier of the domain.</p>
   * @public
   */
  DomainId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the domain.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The client-provided name for the domain.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the domain.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The current status of the domain.</p>
   * @public
   */
  DomainStatus?: DomainStatus | undefined;

  /**
   * <p>The server-side encryption configuration containing the KMS key
   *             identifier you want Voice ID to use to encrypt your data.</p>
   * @public
   */
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * <p>The timestamp of when the domain was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp of when the domain was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>Details about the most recent server-side encryption configuration update. When the
   *             server-side encryption configuration is changed, dependency on the old KMS key is removed through an asynchronous process. When this update is
   *             complete, the domain's data can only be accessed using the new KMS key.</p>
   * @public
   */
  ServerSideEncryptionUpdateDetails?: ServerSideEncryptionUpdateDetails | undefined;

  /**
   * <p>Provides information about <code>watchlistDetails</code> and <code>DefaultWatchlistID</code>. </p>
   * @public
   */
  WatchlistDetails?: WatchlistDetails | undefined;
}

/**
 * @public
 */
export interface ListDomainsResponse {
  /**
   * <p>A list containing details about each domain in the Amazon Web Services account.</p>
   * @public
   */
  DomainSummaries?: DomainSummary[] | undefined;

  /**
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of
   *             <code>NextToken</code> is a unique pagination token for each page. Make the call
   *             again using the returned token to retrieve the next page. Keep all other arguments
   *             unchanged. Each pagination token expires after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDomainRequest {
  /**
   * <p>The identifier of the domain to be updated.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The name of the domain.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A brief description about this domain.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The configuration, containing the KMS key identifier, to be used by
   *             Voice ID for the server-side encryption of your data. Changing the domain's associated
   *                 KMS key immediately triggers an asynchronous process to remove
   *             dependency on the old KMS key, such that the domain's data can only be
   *             accessed using the new KMS key. The domain's
   *                 <code>ServerSideEncryptionUpdateDetails</code> contains the details for this
   *             process.</p>
   * @public
   */
  ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateDomainResponse {
  /**
   * <p>Details about the updated domain</p>
   * @public
   */
  Domain?: Domain | undefined;
}

/**
 * @public
 */
export interface EvaluateSessionRequest {
  /**
   * <p>The identifier of the domain where the session started.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The session identifier, or name of the session, that you want to evaluate. In
   *             Voice ID integration, this is the Contact-Id.</p>
   * @public
   */
  SessionNameOrId: string | undefined;
}

/**
 * <p>The configuration used for performing fraud detection over a speaker during a
 *             session.</p>
 * @public
 */
export interface FraudDetectionConfiguration {
  /**
   * <p>Threshold value for determining whether the speaker is a fraudster. If the detected
   *             risk score calculated by Voice ID is higher than the threshold, the speaker is
   *             considered a fraudster.</p>
   * @public
   */
  RiskThreshold?: number | undefined;

  /**
   * <p>The identifier of the watchlist against which fraud detection is performed.
   *         </p>
   * @public
   */
  WatchlistId?: string | undefined;
}

/**
 * <p>Contains details produced as a result of performing known fraudster risk analysis on a
 *             speaker.</p>
 * @public
 */
export interface KnownFraudsterRisk {
  /**
   * <p>The score indicating the likelihood the speaker is a known fraudster.</p>
   * @public
   */
  RiskScore: number | undefined;

  /**
   * <p>The identifier of the fraudster that is the closest match to the speaker. If there are
   *             no fraudsters registered in a given domain, or if there are no fraudsters with a
   *             non-zero RiskScore, this value is <code>null</code>.</p>
   * @public
   */
  GeneratedFraudsterId?: string | undefined;
}

/**
 * <p>The details resulting from 'Voice Spoofing Risk' analysis of the speaker.</p>
 * @public
 */
export interface VoiceSpoofingRisk {
  /**
   * <p>The score indicating the likelihood of speaker’s voice being spoofed.</p>
   * @public
   */
  RiskScore: number | undefined;
}

/**
 * <p>Details regarding various fraud risk analyses performed against the current session
 *             state and streamed audio of the speaker.</p>
 * @public
 */
export interface FraudRiskDetails {
  /**
   * <p>The details resulting from 'Known Fraudster Risk' analysis of the speaker.</p>
   * @public
   */
  KnownFraudsterRisk: KnownFraudsterRisk | undefined;

  /**
   * <p>The details resulting from 'Voice Spoofing Risk' analysis of the speaker.</p>
   * @public
   */
  VoiceSpoofingRisk: VoiceSpoofingRisk | undefined;
}

/**
 * <p>The fraud detection result produced by Voice ID, processed against the current
 *             session state and streamed audio of the speaker.</p>
 * @public
 */
export interface FraudDetectionResult {
  /**
   * <p>The unique identifier for this fraud detection result. Given there can be multiple
   *             fraud detections for a given session, this field helps in identifying if the returned
   *             result is from previous streaming activity or a new result. Note that in the absence of
   *             any new streaming activity or risk threshold changes, Voice ID always returns cached
   *             Fraud Detection result for this API.</p>
   * @public
   */
  FraudDetectionResultId?: string | undefined;

  /**
   * <p>A timestamp of when audio aggregation started for this fraud detection
   *             result.</p>
   * @public
   */
  AudioAggregationStartedAt?: Date | undefined;

  /**
   * <p>A timestamp of when audio aggregation ended for this fraud detection
   *             result.</p>
   * @public
   */
  AudioAggregationEndedAt?: Date | undefined;

  /**
   * <p>The <code>FraudDetectionConfiguration</code> used to generate this fraud detection
   *             result.</p>
   * @public
   */
  Configuration?: FraudDetectionConfiguration | undefined;

  /**
   * <p>The fraud detection decision produced by Voice ID, processed against the current
   *             session state and streamed audio of the speaker.</p>
   * @public
   */
  Decision?: FraudDetectionDecision | undefined;

  /**
   * <p>The reason speaker was flagged by the fraud detection system. This is only be
   *             populated if fraud detection Decision is <code>HIGH_RISK</code>, and the following
   *             possible values: <code>KNOWN_FRAUDSTER</code> and <code>VOICE_SPOOFING</code>.</p>
   * @public
   */
  Reasons?: FraudDetectionReason[] | undefined;

  /**
   * <p>Details about each risk analyzed for this speaker. Currently, this contains
   *             KnownFraudsterRisk and VoiceSpoofingRisk details.</p>
   * @public
   */
  RiskDetails?: FraudRiskDetails | undefined;
}

/**
 * @public
 */
export interface EvaluateSessionResponse {
  /**
   * <p>The identifier of the domain that contains the session.</p>
   * @public
   */
  DomainId?: string | undefined;

  /**
   * <p>The service-generated identifier of the session.</p>
   * @public
   */
  SessionId?: string | undefined;

  /**
   * <p>The client-provided name of the session.</p>
   * @public
   */
  SessionName?: string | undefined;

  /**
   * <p>The current status of audio streaming for this session. This field is useful to infer
   *             next steps when the Authentication or Fraud Detection results are empty or the decision
   *             is <code>NOT_ENOUGH_SPEECH</code>. In this situation, if the
   *                 <code>StreamingStatus</code> is <code>ONGOING/PENDING_CONFIGURATION</code>, it can
   *             mean that the client should call the API again later, after Voice ID has enough audio
   *             to produce a result. If the decision remains <code>NOT_ENOUGH_SPEECH</code> even after
   *                 <code>StreamingStatus</code> is <code>ENDED</code>, it means that the previously
   *             streamed session did not have enough speech to perform evaluation, and a new streaming
   *             session is needed to try again.</p>
   * @public
   */
  StreamingStatus?: StreamingStatus | undefined;

  /**
   * <p>Details resulting from the authentication process, such as authentication decision and
   *             authentication score.</p>
   * @public
   */
  AuthenticationResult?: AuthenticationResult | undefined;

  /**
   * <p>Details resulting from the fraud detection process, such as fraud detection decision
   *             and risk score.</p>
   * @public
   */
  FraudDetectionResult?: FraudDetectionResult | undefined;
}

/**
 * <p>Contains a summary of information about a fraudster registration job.</p>
 * @public
 */
export interface FraudsterRegistrationJobSummary {
  /**
   * <p>The client-provided name for the fraudster registration job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The service-generated identifier for the fraudster registration job.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The current status of the fraudster registration job.</p>
   * @public
   */
  JobStatus?: FraudsterRegistrationJobStatus | undefined;

  /**
   * <p>The identifier of the domain that contains the fraudster registration job.</p>
   * @public
   */
  DomainId?: string | undefined;

  /**
   * <p>A timestamp of when the fraudster registration job was created. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>A timestamp of when the fraudster registration job ended.</p>
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * <p>Contains details that are populated when an entire batch job fails. In cases of
   *             individual registration job failures, the batch job as a whole doesn't fail; it is
   *             completed with a <code>JobStatus</code> of <code>COMPLETED_WITH_ERRORS</code>. You can
   *             use the job output file to identify the individual registration requests that
   *             failed.</p>
   * @public
   */
  FailureDetails?: FailureDetails | undefined;

  /**
   * <p>Shows the completed percentage of registration requests listed in the input
   *             file.</p>
   * @public
   */
  JobProgress?: JobProgress | undefined;
}

/**
 * <p>Contains a summary of information about a fraudster.
 *         </p>
 * @public
 */
export interface FraudsterSummary {
  /**
   * <p>The identifier of the domain that contains the fraudster summary.</p>
   * @public
   */
  DomainId?: string | undefined;

  /**
   * <p>The service-generated identifier for the fraudster.</p>
   * @public
   */
  GeneratedFraudsterId?: string | undefined;

  /**
   * <p>The timestamp of when the fraudster summary was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The identifier of the watchlists the fraudster is a part of.</p>
   * @public
   */
  WatchlistIds?: string[] | undefined;
}

/**
 * @public
 */
export interface ListFraudsterRegistrationJobsRequest {
  /**
   * <p>The identifier of the domain that contains the fraudster registration Jobs.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>Provides the status of your fraudster registration job.</p>
   * @public
   */
  JobStatus?: FraudsterRegistrationJobStatus | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use
   *             <code>NextToken</code> to obtain more pages of results. The default is 100; the maximum allowed page size is also 100. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of
   *             <code>NextToken</code> is a unique pagination token for each page. Make the call
   *             again using the returned token to retrieve the next page. Keep all other arguments
   *             unchanged. Each pagination token expires after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFraudsterRegistrationJobsResponse {
  /**
   * <p>A list containing details about each specified fraudster registration job.</p>
   * @public
   */
  JobSummaries?: FraudsterRegistrationJobSummary[] | undefined;

  /**
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of
   *             <code>NextToken</code> is a unique pagination token for each page. Make the call
   *             again using the returned token to retrieve the next page. Keep all other arguments
   *             unchanged. Each pagination token expires after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFraudstersRequest {
  /**
   * <p>The identifier of the domain. </p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The identifier of the watchlist. If provided, all fraudsters in the watchlist are listed. If not provided, all fraudsters in the domain are listed.</p>
   * @public
   */
  WatchlistId?: string | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use
   *             <code>NextToken</code> to obtain more pages of results. The default is 100; the maximum allowed page size is also 100.    </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of
   *             <code>NextToken</code> is a unique pagination token for each page. Make the call
   *             again using the returned token to retrieve the next page. Keep all other arguments
   *             unchanged. Each pagination token expires after 24 hours.
   *         </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFraudstersResponse {
  /**
   * <p>A list that contains details about each fraudster in the Amazon Web Services account.
   *         </p>
   * @public
   */
  FraudsterSummaries?: FraudsterSummary[] | undefined;

  /**
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of
   *             <code>NextToken</code> is a unique pagination token for each page. Make the call
   *             again using the returned token to retrieve the next page. Keep all other arguments
   *             unchanged. Each pagination token expires after 24 hours.
   *         </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSpeakerEnrollmentJobsRequest {
  /**
   * <p>The identifier of the domain that contains the speaker enrollment jobs.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>Provides the status of your speaker enrollment Job.</p>
   * @public
   */
  JobStatus?: SpeakerEnrollmentJobStatus | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use
   *             <code>NextToken</code> to obtain more pages of results. The default is 100; the maximum allowed page size is also 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of
   *             <code>NextToken</code> is a unique pagination token for each page. Make the call
   *             again using the returned token to retrieve the next page. Keep all other arguments
   *             unchanged. Each pagination token expires after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains a summary of information about a speaker enrollment job.</p>
 * @public
 */
export interface SpeakerEnrollmentJobSummary {
  /**
   * <p>The client-provided name for the speaker enrollment job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The service-generated identifier for the speaker enrollment job.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The current status of the speaker enrollment job.</p>
   * @public
   */
  JobStatus?: SpeakerEnrollmentJobStatus | undefined;

  /**
   * <p>The identifier of the domain that contains the speaker enrollment job.</p>
   * @public
   */
  DomainId?: string | undefined;

  /**
   * <p>A timestamp of when of the speaker enrollment job was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>A timestamp of when the speaker enrollment job ended.</p>
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * <p>Contains details that are populated when an entire batch job fails. In cases of
   *             individual registration job failures, the batch job as a whole doesn't fail; it is
   *             completed with a <code>JobStatus</code> of <code>COMPLETED_WITH_ERRORS</code>. You can
   *             use the job output file to identify the individual registration requests that
   *             failed.</p>
   * @public
   */
  FailureDetails?: FailureDetails | undefined;

  /**
   * <p>Provides details regarding job progress. This field shows the completed percentage of
   *             enrollment requests listed in the input file.</p>
   * @public
   */
  JobProgress?: JobProgress | undefined;
}

/**
 * @public
 */
export interface ListSpeakerEnrollmentJobsResponse {
  /**
   * <p>A list containing details about each specified speaker enrollment job.</p>
   * @public
   */
  JobSummaries?: SpeakerEnrollmentJobSummary[] | undefined;

  /**
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of
   *             <code>NextToken</code> is a unique pagination token for each page. Make the call
   *             again using the returned token to retrieve the next page. Keep all other arguments
   *             unchanged. Each pagination token expires after 24 hours. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSpeakersRequest {
  /**
   * <p>The identifier of the domain.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use
   *             <code>NextToken</code> to obtain more pages of results. The default is 100; the maximum allowed page size is also 100. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of
   *             <code>NextToken</code> is a unique pagination token for each page. Make the call
   *             again using the returned token to retrieve the next page. Keep all other arguments
   *             unchanged. Each pagination token expires after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains a summary of information about a speaker.</p>
 * @public
 */
export interface SpeakerSummary {
  /**
   * <p>The identifier of the domain that contains the speaker.</p>
   * @public
   */
  DomainId?: string | undefined;

  /**
   * <p>The client-provided identifier for the speaker.</p>
   * @public
   */
  CustomerSpeakerId?: string | undefined;

  /**
   * <p>The service-generated identifier for the speaker. </p>
   * @public
   */
  GeneratedSpeakerId?: string | undefined;

  /**
   * <p>The current status of the speaker.</p>
   * @public
   */
  Status?: SpeakerStatus | undefined;

  /**
   * <p>A timestamp showing the speaker's creation time. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>A timestamp showing the speaker's last update.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The timestamp when the speaker was last accessed for enrollment, re-enrollment or a
   *             successful authentication. This timestamp is accurate to one hour.</p>
   * @public
   */
  LastAccessedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListSpeakersResponse {
  /**
   * <p>A list containing details about each speaker in the Amazon Web Services account.
   *         </p>
   * @public
   */
  SpeakerSummaries?: SpeakerSummary[] | undefined;

  /**
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of
   *             <code>NextToken</code> is a unique pagination token for each page. Make the call
   *             again using the returned token to retrieve the next page. Keep all other arguments
   *             unchanged. Each pagination token expires after 24 hours. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Voice ID resource for which you want to list
   *             the tags.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tags associated with the specified resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListWatchlistsRequest {
  /**
   * <p>The identifier of the domain.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use
   *             <code>NextToken</code> to obtain more pages of results. The default is 100; the maximum allowed page size is also 100.
   *         </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of
   *             <code>NextToken</code> is a unique pagination token for each page. Make the call
   *             again using the returned token to retrieve the next page. Keep all other arguments
   *             unchanged. Each pagination token expires after 24 hours.
   *         </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains a summary of information about a watchlist.</p>
 * @public
 */
export interface WatchlistSummary {
  /**
   * <p>The identifier of the domain that contains the watchlist.</p>
   * @public
   */
  DomainId?: string | undefined;

  /**
   * <p>The identifier of the watchlist.</p>
   * @public
   */
  WatchlistId?: string | undefined;

  /**
   * <p>The name for the watchlist.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the watchlist.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Whether the specified watchlist is the default watchlist of a domain.</p>
   * @public
   */
  DefaultWatchlist?: boolean | undefined;

  /**
   * <p>The timestamp of when the watchlist was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp of when the watchlist was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListWatchlistsResponse {
  /**
   * <p>A list that contains details about each watchlist in the Amazon Web Services account.
   *         </p>
   * @public
   */
  WatchlistSummaries?: WatchlistSummary[] | undefined;

  /**
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of
   *             <code>NextToken</code> is a unique pagination token for each page. Make the call
   *             again using the returned token to retrieve the next page. Keep all other arguments
   *             unchanged. Each pagination token expires after 24 hours.
   *         </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface OptOutSpeakerRequest {
  /**
   * <p>The identifier of the domain that contains the speaker.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The identifier of the speaker you want opted-out.</p>
   * @public
   */
  SpeakerId: string | undefined;
}

/**
 * @public
 */
export interface OptOutSpeakerResponse {
  /**
   * <p>Details about the opted-out speaker.</p>
   * @public
   */
  Speaker?: Speaker | undefined;
}

/**
 * @public
 */
export interface StartFraudsterRegistrationJobRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The name of the new fraudster registration job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The identifier of the domain that contains the fraudster registration job and in which
   *             the fraudsters are registered.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The IAM role Amazon Resource Name (ARN) that grants Voice ID permissions to access
   *             customer's buckets to read the input manifest file and write the Job output file. Refer
   *             to the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/voiceid-fraudster-watchlist.html">Create and edit a
   *                 fraudster watchlist</a> documentation for the permissions needed in this
   *             role.</p>
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The registration config containing details such as the action to take when a duplicate
   *             fraudster is detected, and the similarity threshold to use for detecting a duplicate
   *             fraudster. </p>
   * @public
   */
  RegistrationConfig?: RegistrationConfig | undefined;

  /**
   * <p>The input data config containing an S3 URI for the input manifest file that contains
   *             the list of fraudster registration requests.</p>
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>The output data config containing the S3 location where Voice ID writes the job
   *             output file; you must also include a KMS key ID to encrypt the
   *             file.</p>
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;
}

/**
 * @public
 */
export interface StartFraudsterRegistrationJobResponse {
  /**
   * <p>Details about the started fraudster registration job.</p>
   * @public
   */
  Job?: FraudsterRegistrationJob | undefined;
}

/**
 * @public
 */
export interface StartSpeakerEnrollmentJobRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A name for your speaker enrollment job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The identifier of the domain that contains the speaker enrollment job and in which the
   *             speakers are enrolled. </p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The IAM role Amazon Resource Name (ARN) that grants Voice ID permissions to access
   *             customer's buckets to read the input manifest file and write the job output file. Refer
   *             to <a href="https://docs.aws.amazon.com/connect/latest/adminguide/voiceid-batch-enrollment.html">Batch enrollment using
   *                 audio data from prior calls</a> for the permissions needed in this role.</p>
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The enrollment config that contains details such as the action to take when a speaker
   *             is already enrolled in Voice ID or when a speaker is identified as a fraudster.</p>
   * @public
   */
  EnrollmentConfig?: EnrollmentConfig | undefined;

  /**
   * <p>The input data config containing the S3 location for the input manifest file that
   *             contains the list of speaker enrollment requests.</p>
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>The output data config containing the S3 location where Voice ID writes the job
   *             output file; you must also include a KMS key ID to encrypt the
   *             file.</p>
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;
}

/**
 * @public
 */
export interface StartSpeakerEnrollmentJobResponse {
  /**
   * <p>Details about the started speaker enrollment job.</p>
   * @public
   */
  Job?: SpeakerEnrollmentJob | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Voice ID resource you want to tag.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of tags to assign to the specified resource.</p>
   * @public
   */
  Tags: Tag[] | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the Voice ID resource you want to remove tags
   *             from.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of tag keys you want to remove from the specified resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateWatchlistRequest {
  /**
   * <p>The identifier of the domain that contains the watchlist.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The identifier of the watchlist to be updated.</p>
   * @public
   */
  WatchlistId: string | undefined;

  /**
   * <p>The name of the watchlist.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A brief description about this watchlist.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWatchlistResponse {
  /**
   * <p>Details about the updated watchlist.</p>
   * @public
   */
  Watchlist?: Watchlist | undefined;
}
