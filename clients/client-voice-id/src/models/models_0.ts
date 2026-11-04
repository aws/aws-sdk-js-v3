// smithy-typescript generated code
import type {
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
   * The identifier of the domain that contains the fraudster.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The identifier of the watchlist you want to associate with the fraudster.
   *
   * @public
   */
  WatchlistId: string | undefined;

  /**
   * The identifier of the fraudster to be associated with the watchlist.
   *
   * @public
   */
  FraudsterId: string | undefined;
}

/**
 * Contains all the information about a fraudster.
 *
 * @public
 */
export interface Fraudster {
  /**
   * The identifier of the domain that contains the fraudster.
   *
   * @public
   */
  DomainId?: string | undefined;

  /**
   * The service-generated identifier for the fraudster.
   *
   * @public
   */
  GeneratedFraudsterId?: string | undefined;

  /**
   * The timestamp of when Voice ID identified the fraudster.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The identifier of the watchlists the fraudster is a part of.
   *
   * @public
   */
  WatchlistIds?: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateFraudsterResponse {
  /**
   * Contains all the information about a fraudster.
   *
   * @public
   */
  Fraudster?: Fraudster | undefined;
}

/**
 * The configuration used to authenticate a speaker during a session.
 *
 * @public
 */
export interface AuthenticationConfiguration {
  /**
   * The minimum threshold needed to successfully authenticate a speaker.
   *
   * @public
   */
  AcceptanceThreshold: number | undefined;
}

/**
 * The authentication result produced by Voice ID, processed against the current session state and streamed audio of the speaker.
 *
 * @public
 */
export interface AuthenticationResult {
  /**
   * The unique identifier for this authentication result. Because there can be multiple authentications for a given session, this field helps to identify if the returned result is from a previous streaming activity or a new result. Note that in absence of any new streaming activity, `AcceptanceThreshold` changes, or `SpeakerId` changes, Voice ID always returns cached Authentication Result for this API.
   *
   * @public
   */
  AuthenticationResultId?: string | undefined;

  /**
   * A timestamp of when audio aggregation started for this authentication result.
   *
   * @public
   */
  AudioAggregationStartedAt?: Date | undefined;

  /**
   * A timestamp of when audio aggregation ended for this authentication result.
   *
   * @public
   */
  AudioAggregationEndedAt?: Date | undefined;

  /**
   * The client-provided identifier for the speaker whose authentication result is produced. Only present if a `SpeakerId` is provided for the session.
   *
   * @public
   */
  CustomerSpeakerId?: string | undefined;

  /**
   * The service-generated identifier for the speaker whose authentication result is produced.
   *
   * @public
   */
  GeneratedSpeakerId?: string | undefined;

  /**
   * The authentication decision produced by Voice ID, processed against the current session state and streamed audio of the speaker.
   *
   * @public
   */
  Decision?: AuthenticationDecision | undefined;

  /**
   * The authentication score for the speaker whose authentication result is produced. This value is only present if the authentication decision is either `ACCEPT` or `REJECT`.
   *
   * @public
   */
  Score?: number | undefined;

  /**
   * The `AuthenticationConfiguration` used to generate this authentication result.
   *
   * @public
   */
  Configuration?: AuthenticationConfiguration | undefined;
}

/**
 * The configuration containing information about the customer managed key used for encrypting customer data.
 *
 * @public
 */
export interface ServerSideEncryptionConfiguration {
  /**
   * The identifier of the KMS key to use to encrypt data stored by Voice ID. Voice ID doesn't support asymmetric customer managed keys.
   *
   * @public
   */
  KmsKeyId: string | undefined;
}

/**
 * The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.
 *
 * @public
 */
export interface Tag {
  /**
   * The first part of a key:value pair that forms a tag associated with a given resource. For example, in the tag 'Department':'Sales', the key is 'Department'.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The second part of a key:value pair that forms a tag associated with a given resource. For example, in the tag 'Department':'Sales', the value is 'Sales'.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateDomainRequest {
  /**
   * The name of the domain.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A brief description of this domain.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The configuration, containing the KMS key identifier, to be used by Voice ID for the server-side encryption of your data. Refer to [Amazon Connect Voice ID encryption at rest](https://docs.aws.amazon.com/connect/latest/adminguide/encryption-at-rest.html#encryption-at-rest-voiceid) for more details on how the KMS key is used.
   *
   * @public
   */
  ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A list of tags you want added to the domain.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Details about the most recent server-side encryption configuration update. When the server-side encryption configuration is changed, dependency on the old KMS key is removed through an asynchronous process. When this update is complete, the domain’s data can only be accessed using the new KMS key.
 *
 * @public
 */
export interface ServerSideEncryptionUpdateDetails {
  /**
   * The previous KMS key ID the domain was encrypted with, before ServerSideEncryptionConfiguration was updated to a new KMS key ID.
   *
   * @public
   */
  OldKmsKeyId?: string | undefined;

  /**
   * Status of the server-side encryption update. During an update, if there is an issue with the domain's current or old KMS key ID, such as an inaccessible or disabled key, then the status is FAILED. In order to resolve this, the key needs to be made accessible, and then an UpdateDomain call with the existing server-side encryption configuration will re-attempt this update process.
   *
   * @public
   */
  UpdateStatus?: ServerSideEncryptionUpdateStatus | undefined;

  /**
   * Message explaining the current UpdateStatus. When the UpdateStatus is FAILED, this message explains the cause of the failure.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Details of the watchlists in a domain.
 *
 * @public
 */
export interface WatchlistDetails {
  /**
   * The identifier of the default watchlist.
   *
   * @public
   */
  DefaultWatchlistId: string | undefined;
}

/**
 * Contains all the information about a domain.
 *
 * @public
 */
export interface Domain {
  /**
   * The identifier of the domain.
   *
   * @public
   */
  DomainId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the domain.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name for the domain.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the domain.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The current status of the domain.
   *
   * @public
   */
  DomainStatus?: DomainStatus | undefined;

  /**
   * The server-side encryption configuration containing the KMS key identifier you want Voice ID to use to encrypt your data.
   *
   * @public
   */
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * The timestamp of when the domain was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp of when the domain was last update.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * Details about the most recent server-side encryption configuration update. When the server-side encryption configuration is changed, dependency on the old KMS key is removed through an asynchronous process. When this update is complete, the domain's data can only be accessed using the new KMS key.
   *
   * @public
   */
  ServerSideEncryptionUpdateDetails?: ServerSideEncryptionUpdateDetails | undefined;

  /**
   * The watchlist details of a domain. Contains the default watchlist ID of the domain.
   *
   * @public
   */
  WatchlistDetails?: WatchlistDetails | undefined;
}

/**
 * @public
 */
export interface CreateDomainResponse {
  /**
   * Information about the newly created domain.
   *
   * @public
   */
  Domain?: Domain | undefined;
}

/**
 * @public
 */
export interface CreateWatchlistRequest {
  /**
   * The identifier of the domain that contains the watchlist.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The name of the watchlist.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A brief description of this watchlist.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Contains all the information about a watchlist.
 *
 * @public
 */
export interface Watchlist {
  /**
   * The identifier of the domain that contains the watchlist.
   *
   * @public
   */
  DomainId?: string | undefined;

  /**
   * The identifier of the watchlist.
   *
   * @public
   */
  WatchlistId?: string | undefined;

  /**
   * The name for the watchlist.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the watchlist.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Whether the specified watchlist is the default watchlist of a domain.
   *
   * @public
   */
  DefaultWatchlist?: boolean | undefined;

  /**
   * The timestamp of when the watchlist was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp of when the watchlist was updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateWatchlistResponse {
  /**
   * Information about the newly created watchlist.
   *
   * @public
   */
  Watchlist?: Watchlist | undefined;
}

/**
 * @public
 */
export interface DeleteDomainRequest {
  /**
   * The identifier of the domain you want to delete.
   *
   * @public
   */
  DomainId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFraudsterRequest {
  /**
   * The identifier of the domain that contains the fraudster.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The identifier of the fraudster you want to delete.
   *
   * @public
   */
  FraudsterId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSpeakerRequest {
  /**
   * The identifier of the domain that contains the speaker.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The identifier of the speaker you want to delete.
   *
   * @public
   */
  SpeakerId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWatchlistRequest {
  /**
   * The identifier of the domain that contains the watchlist.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The identifier of the watchlist to be deleted.
   *
   * @public
   */
  WatchlistId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDomainRequest {
  /**
   * The identifier of the domain that you are describing.
   *
   * @public
   */
  DomainId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDomainResponse {
  /**
   * Information about the specified domain.
   *
   * @public
   */
  Domain?: Domain | undefined;
}

/**
 * @public
 */
export interface DescribeFraudsterRequest {
  /**
   * The identifier of the domain that contains the fraudster.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The identifier of the fraudster you are describing.
   *
   * @public
   */
  FraudsterId: string | undefined;
}

/**
 * @public
 */
export interface DescribeFraudsterResponse {
  /**
   * Information about the specified fraudster.
   *
   * @public
   */
  Fraudster?: Fraudster | undefined;
}

/**
 * @public
 */
export interface DescribeFraudsterRegistrationJobRequest {
  /**
   * The identifier of the domain that contains the fraudster registration job.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The identifier of the fraudster registration job you are describing.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * Contains error details for a failed batch job.
 *
 * @public
 */
export interface FailureDetails {
  /**
   * An HTTP status code representing the nature of the error.
   *
   * @public
   */
  StatusCode?: number | undefined;

  /**
   * A description of the error that caused the batch job failure.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The configuration containing input file information for a batch job.
 *
 * @public
 */
export interface InputDataConfig {
  /**
   * The S3 location for the input manifest file that contains the list of individual enrollment or registration job requests.
   *
   * @public
   */
  S3Uri: string | undefined;
}

/**
 * Indicates the completion progress for a batch job.
 *
 * @public
 */
export interface JobProgress {
  /**
   * Shows the completed percentage of enrollment or registration requests listed in the input file.
   *
   * @public
   */
  PercentComplete?: number | undefined;
}

/**
 * The configuration containing output file information for a batch job.
 *
 * @public
 */
export interface OutputDataConfig {
  /**
   * The S3 path of the folder where Voice ID writes the job output file. It has a `*.out` extension. For example, if the input file name is `input-file.json` and the output folder path is `s3://output-bucket/output-folder`, the full output file path is `s3://output-bucket/output-folder/job-Id/input-file.json.out`.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * The identifier of the KMS key you want Voice ID to use to encrypt the output file of a speaker enrollment job/fraudster registration job.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * The registration configuration to be used during the batch fraudster registration job.
 *
 * @public
 */
export interface RegistrationConfig {
  /**
   * The action to take when a fraudster is identified as a duplicate. The default action is `SKIP`, which skips registering the duplicate fraudster. Setting the value to `REGISTER_AS_NEW` always registers a new fraudster into the specified domain.
   *
   * @public
   */
  DuplicateRegistrationAction?: DuplicateRegistrationAction | undefined;

  /**
   * The minimum similarity score between the new and old fraudsters in order to consider the new fraudster a duplicate.
   *
   * @public
   */
  FraudsterSimilarityThreshold?: number | undefined;

  /**
   * The identifiers of watchlists that a fraudster is registered to. If a watchlist isn't provided, the fraudsters are registered to the default watchlist.
   *
   * @public
   */
  WatchlistIds?: string[] | undefined;
}

/**
 * Contains all the information about a fraudster registration job.
 *
 * @public
 */
export interface FraudsterRegistrationJob {
  /**
   * The client-provided name for the fraudster registration job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The service-generated identifier for the fraudster registration job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The current status of the fraudster registration job.
   *
   * @public
   */
  JobStatus?: FraudsterRegistrationJobStatus | undefined;

  /**
   * The identifier of the domain that contains the fraudster registration job.
   *
   * @public
   */
  DomainId?: string | undefined;

  /**
   * The IAM role Amazon Resource Name (ARN) that grants Voice ID permissions to access customer's buckets to read the input manifest file and write the job output file.
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * The registration config containing details such as the action to take when a duplicate fraudster is detected, and the similarity threshold to use for detecting a duplicate fraudster.
   *
   * @public
   */
  RegistrationConfig?: RegistrationConfig | undefined;

  /**
   * The input data config containing an S3 URI for the input manifest file that contains the list of fraudster registration job requests.
   *
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * The output data config containing the S3 location where you want Voice ID to write your job output file; you must also include a KMS key ID in order to encrypt the file.
   *
   * @public
   */
  OutputDataConfig?: OutputDataConfig | undefined;

  /**
   * A timestamp of when the fraudster registration job was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A timestamp of when the fraudster registration job ended.
   *
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * Contains details that are populated when an entire batch job fails. In cases of individual registration job failures, the batch job as a whole doesn't fail; it is completed with a `JobStatus` of `COMPLETED_WITH_ERRORS`. You can use the job output file to identify the individual registration requests that failed.
   *
   * @public
   */
  FailureDetails?: FailureDetails | undefined;

  /**
   * Shows the completed percentage of registration requests listed in the input file.
   *
   * @public
   */
  JobProgress?: JobProgress | undefined;
}

/**
 * @public
 */
export interface DescribeFraudsterRegistrationJobResponse {
  /**
   * Contains details about the specified fraudster registration job.
   *
   * @public
   */
  Job?: FraudsterRegistrationJob | undefined;
}

/**
 * @public
 */
export interface DescribeSpeakerRequest {
  /**
   * The identifier of the domain that contains the speaker.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The identifier of the speaker you are describing.
   *
   * @public
   */
  SpeakerId: string | undefined;
}

/**
 * Contains all the information about a speaker.
 *
 * @public
 */
export interface Speaker {
  /**
   * The identifier of the domain that contains the speaker.
   *
   * @public
   */
  DomainId?: string | undefined;

  /**
   * The client-provided identifier for the speaker.
   *
   * @public
   */
  CustomerSpeakerId?: string | undefined;

  /**
   * The service-generated identifier for the speaker.
   *
   * @public
   */
  GeneratedSpeakerId?: string | undefined;

  /**
   * The current status of the speaker.
   *
   * @public
   */
  Status?: SpeakerStatus | undefined;

  /**
   * A timestamp of when the speaker was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A timestamp of the speaker's last update.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The timestamp of when the speaker was last accessed for enrollment, re-enrollment or a successful authentication. This timestamp is accurate to one hour.
   *
   * @public
   */
  LastAccessedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeSpeakerResponse {
  /**
   * Information about the specified speaker.
   *
   * @public
   */
  Speaker?: Speaker | undefined;
}

/**
 * @public
 */
export interface DescribeSpeakerEnrollmentJobRequest {
  /**
   * The identifier of the domain that contains the speaker enrollment job.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The identifier of the speaker enrollment job you are describing.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * The fraud detection configuration to be used during the batch speaker enrollment job.
 *
 * @public
 */
export interface EnrollmentJobFraudDetectionConfig {
  /**
   * The action to take when the given speaker is flagged by the fraud detection system. The default value is `FAIL`, which fails the speaker enrollment. Changing this value to `IGNORE` results in the speaker being enrolled even if they are flagged by the fraud detection system.
   *
   * @public
   */
  FraudDetectionAction?: FraudDetectionAction | undefined;

  /**
   * Threshold value for determining whether the speaker is a high risk to be fraudulent. If the detected risk score calculated by Voice ID is greater than or equal to the threshold, the speaker is considered a fraudster.
   *
   * @public
   */
  RiskThreshold?: number | undefined;

  /**
   * The identifier of watchlists against which fraud detection is performed.
   *
   * @public
   */
  WatchlistIds?: string[] | undefined;
}

/**
 * Contains configurations defining enrollment behavior for the batch job.
 *
 * @public
 */
export interface EnrollmentConfig {
  /**
   * The action to take when the specified speaker is already enrolled in the specified domain. The default value is `SKIP`, which skips the enrollment for the existing speaker. Setting the value to `OVERWRITE` replaces the existing voice prints and enrollment audio stored for that speaker with new data generated from the latest audio.
   *
   * @public
   */
  ExistingEnrollmentAction?: ExistingEnrollmentAction | undefined;

  /**
   * The fraud detection configuration to use for the speaker enrollment job.
   *
   * @public
   */
  FraudDetectionConfig?: EnrollmentJobFraudDetectionConfig | undefined;
}

/**
 * Contains all the information about a speaker enrollment job.
 *
 * @public
 */
export interface SpeakerEnrollmentJob {
  /**
   * The client-provided name for the speaker enrollment job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The service-generated identifier for the speaker enrollment job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The current status of the speaker enrollment job.
   *
   * @public
   */
  JobStatus?: SpeakerEnrollmentJobStatus | undefined;

  /**
   * The identifier of the domain that contains the speaker enrollment job.
   *
   * @public
   */
  DomainId?: string | undefined;

  /**
   * The IAM role Amazon Resource Name (ARN) that grants Voice ID permissions to access customer's buckets to read the input manifest file and write the job output file.
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * The configuration that defines the action to take when the speaker is already enrolled in Voice ID, and the `FraudDetectionConfig` to use.
   *
   * @public
   */
  EnrollmentConfig?: EnrollmentConfig | undefined;

  /**
   * The input data config containing an S3 URI for the input manifest file that contains the list of speaker enrollment job requests.
   *
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * The output data config containing the S3 location where Voice ID writes the job output file; you must also include a KMS key ID to encrypt the file.
   *
   * @public
   */
  OutputDataConfig?: OutputDataConfig | undefined;

  /**
   * A timestamp of when the speaker enrollment job was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A timestamp of when the speaker enrollment job ended.
   *
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * Contains details that are populated when an entire batch job fails. In cases of individual registration job failures, the batch job as a whole doesn't fail; it is completed with a `JobStatus` of `COMPLETED_WITH_ERRORS`. You can use the job output file to identify the individual registration requests that failed.
   *
   * @public
   */
  FailureDetails?: FailureDetails | undefined;

  /**
   * Provides details on job progress. This field shows the completed percentage of registration requests listed in the input file.
   *
   * @public
   */
  JobProgress?: JobProgress | undefined;
}

/**
 * @public
 */
export interface DescribeSpeakerEnrollmentJobResponse {
  /**
   * Contains details about the specified speaker enrollment job.
   *
   * @public
   */
  Job?: SpeakerEnrollmentJob | undefined;
}

/**
 * @public
 */
export interface DescribeWatchlistRequest {
  /**
   * The identifier of the domain that contains the watchlist.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The identifier of the watchlist that you are describing.
   *
   * @public
   */
  WatchlistId: string | undefined;
}

/**
 * @public
 */
export interface DescribeWatchlistResponse {
  /**
   * Information about the specified watchlist.
   *
   * @public
   */
  Watchlist?: Watchlist | undefined;
}

/**
 * @public
 */
export interface DisassociateFraudsterRequest {
  /**
   * The identifier of the domain that contains the fraudster.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The identifier of the watchlist that you want to disassociate from the fraudster.
   *
   * @public
   */
  WatchlistId: string | undefined;

  /**
   * The identifier of the fraudster to be disassociated from the watchlist.
   *
   * @public
   */
  FraudsterId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateFraudsterResponse {
  /**
   * Contains all the information about a fraudster.
   *
   * @public
   */
  Fraudster?: Fraudster | undefined;
}

/**
 * @public
 */
export interface ListDomainsRequest {
  /**
   * The maximum number of results that are returned per call. You can use `NextToken` to obtain more pages of results. The default is 100; the maximum allowed page size is also 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If `NextToken` is returned, there are more results available. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains a summary of information about a domain.
 *
 * @public
 */
export interface DomainSummary {
  /**
   * The identifier of the domain.
   *
   * @public
   */
  DomainId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the domain.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The client-provided name for the domain.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the domain.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The current status of the domain.
   *
   * @public
   */
  DomainStatus?: DomainStatus | undefined;

  /**
   * The server-side encryption configuration containing the KMS key identifier you want Voice ID to use to encrypt your data.
   *
   * @public
   */
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * The timestamp of when the domain was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp of when the domain was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * Details about the most recent server-side encryption configuration update. When the server-side encryption configuration is changed, dependency on the old KMS key is removed through an asynchronous process. When this update is complete, the domain's data can only be accessed using the new KMS key.
   *
   * @public
   */
  ServerSideEncryptionUpdateDetails?: ServerSideEncryptionUpdateDetails | undefined;

  /**
   * Provides information about `watchlistDetails` and `DefaultWatchlistID`.
   *
   * @public
   */
  WatchlistDetails?: WatchlistDetails | undefined;
}

/**
 * @public
 */
export interface ListDomainsResponse {
  /**
   * A list containing details about each domain in the Amazon Web Services account.
   *
   * @public
   */
  DomainSummaries?: DomainSummary[] | undefined;

  /**
   * If `NextToken` is returned, there are more results available. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDomainRequest {
  /**
   * The identifier of the domain to be updated.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The name of the domain.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A brief description about this domain.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The configuration, containing the KMS key identifier, to be used by Voice ID for the server-side encryption of your data. Changing the domain's associated KMS key immediately triggers an asynchronous process to remove dependency on the old KMS key, such that the domain's data can only be accessed using the new KMS key. The domain's `ServerSideEncryptionUpdateDetails` contains the details for this process.
   *
   * @public
   */
  ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateDomainResponse {
  /**
   * Details about the updated domain
   *
   * @public
   */
  Domain?: Domain | undefined;
}

/**
 * @public
 */
export interface EvaluateSessionRequest {
  /**
   * The identifier of the domain where the session started.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The session identifier, or name of the session, that you want to evaluate. In Voice ID integration, this is the Contact-Id.
   *
   * @public
   */
  SessionNameOrId: string | undefined;
}

/**
 * The configuration used for performing fraud detection over a speaker during a session.
 *
 * @public
 */
export interface FraudDetectionConfiguration {
  /**
   * Threshold value for determining whether the speaker is a fraudster. If the detected risk score calculated by Voice ID is higher than the threshold, the speaker is considered a fraudster.
   *
   * @public
   */
  RiskThreshold?: number | undefined;

  /**
   * The identifier of the watchlist against which fraud detection is performed.
   *
   * @public
   */
  WatchlistId?: string | undefined;
}

/**
 * Contains details produced as a result of performing known fraudster risk analysis on a speaker.
 *
 * @public
 */
export interface KnownFraudsterRisk {
  /**
   * The score indicating the likelihood the speaker is a known fraudster.
   *
   * @public
   */
  RiskScore: number | undefined;

  /**
   * The identifier of the fraudster that is the closest match to the speaker. If there are no fraudsters registered in a given domain, or if there are no fraudsters with a non-zero RiskScore, this value is `null`.
   *
   * @public
   */
  GeneratedFraudsterId?: string | undefined;
}

/**
 * The details resulting from 'Voice Spoofing Risk' analysis of the speaker.
 *
 * @public
 */
export interface VoiceSpoofingRisk {
  /**
   * The score indicating the likelihood of speaker’s voice being spoofed.
   *
   * @public
   */
  RiskScore: number | undefined;
}

/**
 * Details regarding various fraud risk analyses performed against the current session state and streamed audio of the speaker.
 *
 * @public
 */
export interface FraudRiskDetails {
  /**
   * The details resulting from 'Known Fraudster Risk' analysis of the speaker.
   *
   * @public
   */
  KnownFraudsterRisk: KnownFraudsterRisk | undefined;

  /**
   * The details resulting from 'Voice Spoofing Risk' analysis of the speaker.
   *
   * @public
   */
  VoiceSpoofingRisk: VoiceSpoofingRisk | undefined;
}

/**
 * The fraud detection result produced by Voice ID, processed against the current session state and streamed audio of the speaker.
 *
 * @public
 */
export interface FraudDetectionResult {
  /**
   * The unique identifier for this fraud detection result. Given there can be multiple fraud detections for a given session, this field helps in identifying if the returned result is from previous streaming activity or a new result. Note that in the absence of any new streaming activity or risk threshold changes, Voice ID always returns cached Fraud Detection result for this API.
   *
   * @public
   */
  FraudDetectionResultId?: string | undefined;

  /**
   * A timestamp of when audio aggregation started for this fraud detection result.
   *
   * @public
   */
  AudioAggregationStartedAt?: Date | undefined;

  /**
   * A timestamp of when audio aggregation ended for this fraud detection result.
   *
   * @public
   */
  AudioAggregationEndedAt?: Date | undefined;

  /**
   * The `FraudDetectionConfiguration` used to generate this fraud detection result.
   *
   * @public
   */
  Configuration?: FraudDetectionConfiguration | undefined;

  /**
   * The fraud detection decision produced by Voice ID, processed against the current session state and streamed audio of the speaker.
   *
   * @public
   */
  Decision?: FraudDetectionDecision | undefined;

  /**
   * The reason speaker was flagged by the fraud detection system. This is only be populated if fraud detection Decision is `HIGH_RISK`, and the following possible values: `KNOWN_FRAUDSTER` and `VOICE_SPOOFING`.
   *
   * @public
   */
  Reasons?: FraudDetectionReason[] | undefined;

  /**
   * Details about each risk analyzed for this speaker. Currently, this contains KnownFraudsterRisk and VoiceSpoofingRisk details.
   *
   * @public
   */
  RiskDetails?: FraudRiskDetails | undefined;
}

/**
 * @public
 */
export interface EvaluateSessionResponse {
  /**
   * The identifier of the domain that contains the session.
   *
   * @public
   */
  DomainId?: string | undefined;

  /**
   * The service-generated identifier of the session.
   *
   * @public
   */
  SessionId?: string | undefined;

  /**
   * The client-provided name of the session.
   *
   * @public
   */
  SessionName?: string | undefined;

  /**
   * The current status of audio streaming for this session. This field is useful to infer next steps when the Authentication or Fraud Detection results are empty or the decision is `NOT_ENOUGH_SPEECH`. In this situation, if the `StreamingStatus` is `ONGOING/PENDING_CONFIGURATION`, it can mean that the client should call the API again later, after Voice ID has enough audio to produce a result. If the decision remains `NOT_ENOUGH_SPEECH` even after `StreamingStatus` is `ENDED`, it means that the previously streamed session did not have enough speech to perform evaluation, and a new streaming session is needed to try again.
   *
   * @public
   */
  StreamingStatus?: StreamingStatus | undefined;

  /**
   * Details resulting from the authentication process, such as authentication decision and authentication score.
   *
   * @public
   */
  AuthenticationResult?: AuthenticationResult | undefined;

  /**
   * Details resulting from the fraud detection process, such as fraud detection decision and risk score.
   *
   * @public
   */
  FraudDetectionResult?: FraudDetectionResult | undefined;
}

/**
 * Contains a summary of information about a fraudster registration job.
 *
 * @public
 */
export interface FraudsterRegistrationJobSummary {
  /**
   * The client-provided name for the fraudster registration job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The service-generated identifier for the fraudster registration job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The current status of the fraudster registration job.
   *
   * @public
   */
  JobStatus?: FraudsterRegistrationJobStatus | undefined;

  /**
   * The identifier of the domain that contains the fraudster registration job.
   *
   * @public
   */
  DomainId?: string | undefined;

  /**
   * A timestamp of when the fraudster registration job was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A timestamp of when the fraudster registration job ended.
   *
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * Contains details that are populated when an entire batch job fails. In cases of individual registration job failures, the batch job as a whole doesn't fail; it is completed with a `JobStatus` of `COMPLETED_WITH_ERRORS`. You can use the job output file to identify the individual registration requests that failed.
   *
   * @public
   */
  FailureDetails?: FailureDetails | undefined;

  /**
   * Shows the completed percentage of registration requests listed in the input file.
   *
   * @public
   */
  JobProgress?: JobProgress | undefined;
}

/**
 * Contains a summary of information about a fraudster.
 *
 * @public
 */
export interface FraudsterSummary {
  /**
   * The identifier of the domain that contains the fraudster summary.
   *
   * @public
   */
  DomainId?: string | undefined;

  /**
   * The service-generated identifier for the fraudster.
   *
   * @public
   */
  GeneratedFraudsterId?: string | undefined;

  /**
   * The timestamp of when the fraudster summary was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The identifier of the watchlists the fraudster is a part of.
   *
   * @public
   */
  WatchlistIds?: string[] | undefined;
}

/**
 * @public
 */
export interface ListFraudsterRegistrationJobsRequest {
  /**
   * The identifier of the domain that contains the fraudster registration Jobs.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * Provides the status of your fraudster registration job.
   *
   * @public
   */
  JobStatus?: FraudsterRegistrationJobStatus | undefined;

  /**
   * The maximum number of results that are returned per call. You can use `NextToken` to obtain more pages of results. The default is 100; the maximum allowed page size is also 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If `NextToken` is returned, there are more results available. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFraudsterRegistrationJobsResponse {
  /**
   * A list containing details about each specified fraudster registration job.
   *
   * @public
   */
  JobSummaries?: FraudsterRegistrationJobSummary[] | undefined;

  /**
   * If `NextToken` is returned, there are more results available. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFraudstersRequest {
  /**
   * The identifier of the domain.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The identifier of the watchlist. If provided, all fraudsters in the watchlist are listed. If not provided, all fraudsters in the domain are listed.
   *
   * @public
   */
  WatchlistId?: string | undefined;

  /**
   * The maximum number of results that are returned per call. You can use `NextToken` to obtain more pages of results. The default is 100; the maximum allowed page size is also 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If `NextToken` is returned, there are more results available. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFraudstersResponse {
  /**
   * A list that contains details about each fraudster in the Amazon Web Services account.
   *
   * @public
   */
  FraudsterSummaries?: FraudsterSummary[] | undefined;

  /**
   * If `NextToken` is returned, there are more results available. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSpeakerEnrollmentJobsRequest {
  /**
   * The identifier of the domain that contains the speaker enrollment jobs.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * Provides the status of your speaker enrollment Job.
   *
   * @public
   */
  JobStatus?: SpeakerEnrollmentJobStatus | undefined;

  /**
   * The maximum number of results that are returned per call. You can use `NextToken` to obtain more pages of results. The default is 100; the maximum allowed page size is also 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If `NextToken` is returned, there are more results available. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains a summary of information about a speaker enrollment job.
 *
 * @public
 */
export interface SpeakerEnrollmentJobSummary {
  /**
   * The client-provided name for the speaker enrollment job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The service-generated identifier for the speaker enrollment job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The current status of the speaker enrollment job.
   *
   * @public
   */
  JobStatus?: SpeakerEnrollmentJobStatus | undefined;

  /**
   * The identifier of the domain that contains the speaker enrollment job.
   *
   * @public
   */
  DomainId?: string | undefined;

  /**
   * A timestamp of when of the speaker enrollment job was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A timestamp of when the speaker enrollment job ended.
   *
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * Contains details that are populated when an entire batch job fails. In cases of individual registration job failures, the batch job as a whole doesn't fail; it is completed with a `JobStatus` of `COMPLETED_WITH_ERRORS`. You can use the job output file to identify the individual registration requests that failed.
   *
   * @public
   */
  FailureDetails?: FailureDetails | undefined;

  /**
   * Provides details regarding job progress. This field shows the completed percentage of enrollment requests listed in the input file.
   *
   * @public
   */
  JobProgress?: JobProgress | undefined;
}

/**
 * @public
 */
export interface ListSpeakerEnrollmentJobsResponse {
  /**
   * A list containing details about each specified speaker enrollment job.
   *
   * @public
   */
  JobSummaries?: SpeakerEnrollmentJobSummary[] | undefined;

  /**
   * If `NextToken` is returned, there are more results available. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSpeakersRequest {
  /**
   * The identifier of the domain.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The maximum number of results that are returned per call. You can use `NextToken` to obtain more pages of results. The default is 100; the maximum allowed page size is also 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If `NextToken` is returned, there are more results available. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains a summary of information about a speaker.
 *
 * @public
 */
export interface SpeakerSummary {
  /**
   * The identifier of the domain that contains the speaker.
   *
   * @public
   */
  DomainId?: string | undefined;

  /**
   * The client-provided identifier for the speaker.
   *
   * @public
   */
  CustomerSpeakerId?: string | undefined;

  /**
   * The service-generated identifier for the speaker.
   *
   * @public
   */
  GeneratedSpeakerId?: string | undefined;

  /**
   * The current status of the speaker.
   *
   * @public
   */
  Status?: SpeakerStatus | undefined;

  /**
   * A timestamp showing the speaker's creation time.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A timestamp showing the speaker's last update.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The timestamp when the speaker was last accessed for enrollment, re-enrollment or a successful authentication. This timestamp is accurate to one hour.
   *
   * @public
   */
  LastAccessedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListSpeakersResponse {
  /**
   * A list containing details about each speaker in the Amazon Web Services account.
   *
   * @public
   */
  SpeakerSummaries?: SpeakerSummary[] | undefined;

  /**
   * If `NextToken` is returned, there are more results available. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the Voice ID resource for which you want to list the tags.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The list of tags associated with the specified resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListWatchlistsRequest {
  /**
   * The identifier of the domain.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The maximum number of results that are returned per call. You can use `NextToken` to obtain more pages of results. The default is 100; the maximum allowed page size is also 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If `NextToken` is returned, there are more results available. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains a summary of information about a watchlist.
 *
 * @public
 */
export interface WatchlistSummary {
  /**
   * The identifier of the domain that contains the watchlist.
   *
   * @public
   */
  DomainId?: string | undefined;

  /**
   * The identifier of the watchlist.
   *
   * @public
   */
  WatchlistId?: string | undefined;

  /**
   * The name for the watchlist.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the watchlist.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Whether the specified watchlist is the default watchlist of a domain.
   *
   * @public
   */
  DefaultWatchlist?: boolean | undefined;

  /**
   * The timestamp of when the watchlist was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp of when the watchlist was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListWatchlistsResponse {
  /**
   * A list that contains details about each watchlist in the Amazon Web Services account.
   *
   * @public
   */
  WatchlistSummaries?: WatchlistSummary[] | undefined;

  /**
   * If `NextToken` is returned, there are more results available. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface OptOutSpeakerRequest {
  /**
   * The identifier of the domain that contains the speaker.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The identifier of the speaker you want opted-out.
   *
   * @public
   */
  SpeakerId: string | undefined;
}

/**
 * @public
 */
export interface OptOutSpeakerResponse {
  /**
   * Details about the opted-out speaker.
   *
   * @public
   */
  Speaker?: Speaker | undefined;
}

/**
 * @public
 */
export interface StartFraudsterRegistrationJobRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The name of the new fraudster registration job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The identifier of the domain that contains the fraudster registration job and in which the fraudsters are registered.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The IAM role Amazon Resource Name (ARN) that grants Voice ID permissions to access customer's buckets to read the input manifest file and write the Job output file. Refer to the [Create and edit a fraudster watchlist](https://docs.aws.amazon.com/connect/latest/adminguide/voiceid-fraudster-watchlist.html) documentation for the permissions needed in this role.
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * The registration config containing details such as the action to take when a duplicate fraudster is detected, and the similarity threshold to use for detecting a duplicate fraudster.
   *
   * @public
   */
  RegistrationConfig?: RegistrationConfig | undefined;

  /**
   * The input data config containing an S3 URI for the input manifest file that contains the list of fraudster registration requests.
   *
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * The output data config containing the S3 location where Voice ID writes the job output file; you must also include a KMS key ID to encrypt the file.
   *
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;
}

/**
 * @public
 */
export interface StartFraudsterRegistrationJobResponse {
  /**
   * Details about the started fraudster registration job.
   *
   * @public
   */
  Job?: FraudsterRegistrationJob | undefined;
}

/**
 * @public
 */
export interface StartSpeakerEnrollmentJobRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A name for your speaker enrollment job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The identifier of the domain that contains the speaker enrollment job and in which the speakers are enrolled.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The IAM role Amazon Resource Name (ARN) that grants Voice ID permissions to access customer's buckets to read the input manifest file and write the job output file. Refer to [Batch enrollment using audio data from prior calls](https://docs.aws.amazon.com/connect/latest/adminguide/voiceid-batch-enrollment.html) for the permissions needed in this role.
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * The enrollment config that contains details such as the action to take when a speaker is already enrolled in Voice ID or when a speaker is identified as a fraudster.
   *
   * @public
   */
  EnrollmentConfig?: EnrollmentConfig | undefined;

  /**
   * The input data config containing the S3 location for the input manifest file that contains the list of speaker enrollment requests.
   *
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * The output data config containing the S3 location where Voice ID writes the job output file; you must also include a KMS key ID to encrypt the file.
   *
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;
}

/**
 * @public
 */
export interface StartSpeakerEnrollmentJobResponse {
  /**
   * Details about the started speaker enrollment job.
   *
   * @public
   */
  Job?: SpeakerEnrollmentJob | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the Voice ID resource you want to tag.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The list of tags to assign to the specified resource.
   *
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
   * The Amazon Resource Name (ARN) of the Voice ID resource you want to remove tags from.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The list of tag keys you want to remove from the specified resource.
   *
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
   * The identifier of the domain that contains the watchlist.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The identifier of the watchlist to be updated.
   *
   * @public
   */
  WatchlistId: string | undefined;

  /**
   * The name of the watchlist.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A brief description about this watchlist.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWatchlistResponse {
  /**
   * Details about the updated watchlist.
   *
   * @public
   */
  Watchlist?: Watchlist | undefined;
}
