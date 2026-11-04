// smithy-typescript generated code
import type {
  AgentErrorType,
  AgentInputMessageType,
  AnalyticsStatus,
  AuthorizationStrategy,
  BackupStatus,
  BackupType,
  CmkType,
  DatastoreStatus,
  ErrorCategory,
  FHIRVersion,
  JobStatus,
  NlpStatus,
  PreloadDataType,
  SourceFormat,
  TargetFormat,
  TransformationJobStatus,
  ValidationLevel,
} from "./enums";

/**
 * Identifies an existing data transformation profile and version to clone when creating a new profile.
 *
 * @public
 */
export interface ExistingVersionedProfileSource {
  /**
   * The unique identifier of the existing profile to clone from.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * The version number of the existing profile to clone from.
   *
   * @public
   */
  Version: number | undefined;
}

/**
 * Contains raw content to use as the source when creating a data transformation profile directly from a mapping.
 *
 * @public
 */
export interface ProfileMappingSource {
  /**
   * The content as a map of file paths to profile strings.
   *
   * @public
   */
  ProfileMapping: Record<string, string> | undefined;
}

/**
 * Identifies a sample data file in Amazon S3 to use as the source when creating a data transformation profile. Valid only when the source format is Comma-separated values (CSV).
 *
 * @public
 */
export interface SampleDataSource {
  /**
   * The Amazon S3 URI of the sample data file.
   *
   * @public
   */
  S3Uri: string | undefined;
}

/**
 * Identifies a built-in starter profile to use as the source when creating a data transformation profile. Valid only when the source format is Consolidated Clinical Document Architecture (C-CDA).
 *
 * @public
 */
export interface StarterProfileSource {
  /**
   * The name of the built-in starter profile.
   *
   * @public
   */
  StarterProfileName: string | undefined;
}

/**
 * The source for initial content when creating a data transformation profile. Specify exactly one variant: a built-in starter profile, an existing profile version to clone, raw profile content, or a sample data file.
 *
 * @public
 */
export type CreateDataTransformationProfileSource =
  | CreateDataTransformationProfileSource.ExistingVersionedProfileIdMember
  | CreateDataTransformationProfileSource.ProfileMappingMember
  | CreateDataTransformationProfileSource.SampleDataMember
  | CreateDataTransformationProfileSource.StarterProfileMember
  | CreateDataTransformationProfileSource.$UnknownMember;

/**
 * @public
 */
export namespace CreateDataTransformationProfileSource {
  /**
   * Creates the profile from a built-in starter profile. Valid only when the source format is Consolidated Clinical Document Architecture (C-CDA).
   *
   * @public
   */
  export interface StarterProfileMember {
    StarterProfile: StarterProfileSource;
    ExistingVersionedProfileId?: never;
    ProfileMapping?: never;
    SampleData?: never;
    $unknown?: never;
  }

  /**
   * Creates the profile by cloning an existing profile at a specific version.
   *
   * @public
   */
  export interface ExistingVersionedProfileIdMember {
    StarterProfile?: never;
    ExistingVersionedProfileId: ExistingVersionedProfileSource;
    ProfileMapping?: never;
    SampleData?: never;
    $unknown?: never;
  }

  /**
   * Creates the profile from raw profile content that you provide directly. Use this variant for continuous integration and continuous delivery (CI/CD) workflows.
   *
   * @public
   */
  export interface ProfileMappingMember {
    StarterProfile?: never;
    ExistingVersionedProfileId?: never;
    ProfileMapping: ProfileMappingSource;
    SampleData?: never;
    $unknown?: never;
  }

  /**
   * Creates the profile from a sample data file stored in Amazon S3. Valid only when the source format is Comma-separated values (CSV).
   *
   * @public
   */
  export interface SampleDataMember {
    StarterProfile?: never;
    ExistingVersionedProfileId?: never;
    ProfileMapping?: never;
    SampleData: SampleDataSource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    StarterProfile?: never;
    ExistingVersionedProfileId?: never;
    ProfileMapping?: never;
    SampleData?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    StarterProfile: (value: StarterProfileSource) => T;
    ExistingVersionedProfileId: (value: ExistingVersionedProfileSource) => T;
    ProfileMapping: (value: ProfileMappingSource) => T;
    SampleData: (value: SampleDataSource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The request parameters for the `CreateDataTransformationProfile` operation.
 *
 * @public
 */
export interface CreateDataTransformationProfileRequest {
  /**
   * The source data format that this profile converts from (Consolidated Clinical Document Architecture (C-CDA) or Comma-separated values (CSV)).
   *
   * @public
   */
  SourceFormat: SourceFormat | undefined;

  /**
   * The source for the initial profile content. Specify a built-in starter profile, an existing profile version to clone, raw profile content for CI/CD workflows, or a sample data file in Amazon S3.
   *
   * @public
   */
  Source: CreateDataTransformationProfileSource | undefined;

  /**
   * The Amazon Web Services Key Management Service (Amazon Web Services KMS) key identifier used to encrypt the profile content at rest.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * A human-readable description of the profile's purpose.
   *
   * @public
   */
  ProfileDescription?: string | undefined;

  /**
   * A name for the data transformation profile.
   *
   * @public
   */
  ProfileName: string | undefined;

  /**
   * The tags to associate with the profile at creation time.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the service ignores the request but does not return an error.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * The response from the `CreateDataTransformationProfile` operation.
 *
 * @public
 */
export interface CreateDataTransformationProfileResponse {
  /**
   * The unique identifier of the created profile.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * The version number of the newly created profile. The starting version is always 0, which indicates the profile is in DRAFT state.
   *
   * @public
   */
  Version: number | undefined;

  /**
   * The source data format of the profile.
   *
   * @public
   */
  SourceFormat: SourceFormat | undefined;

  /**
   * The target output format. Always `FHIR_R4`.
   *
   * @public
   */
  TargetFormat: TargetFormat | undefined;

  /**
   * The name of the created profile.
   *
   * @public
   */
  ProfileName: string | undefined;

  /**
   * The timestamp when the profile was last updated.
   *
   * @public
   */
  LastUpdatedAt: Date | undefined;
}

/**
 * The request parameters for the `DeleteDataTransformationProfile` operation.
 *
 * @public
 */
export interface DeleteDataTransformationProfileRequest {
  /**
   * The unique identifier of the profile to delete.
   *
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * The response from the `DeleteDataTransformationProfile` operation.
 *
 * @public
 */
export interface DeleteDataTransformationProfileResponse {
  /**
   * The unique identifier of the deleted profile.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * The name of the deleted profile.
   *
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * The timestamp when the profile was deleted.
   *
   * @public
   */
  DeletionTime: Date | undefined;
}

/**
 * The request parameters for the `GetDataTransformationProfile` operation.
 *
 * @public
 */
export interface GetDataTransformationProfileRequest {
  /**
   * The unique identifier of the profile to retrieve.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * The version number to retrieve. Specify 0 to retrieve the DRAFT version. If you omit this parameter, the service returns the latest published version.
   *
   * @public
   */
  ProfileVersion?: number | undefined;
}

/**
 * The response from the `GetDataTransformationProfile` operation.
 *
 * @public
 */
export interface GetDataTransformationProfileResponse {
  /**
   * The unique identifier of the profile.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * The version number of the retrieved profile.
   *
   * @public
   */
  Version: number | undefined;

  /**
   * The source data format of the profile.
   *
   * @public
   */
  SourceFormat: SourceFormat | undefined;

  /**
   * The target output format of the profile.
   *
   * @public
   */
  TargetFormat: TargetFormat | undefined;

  /**
   * The profile content as a map of file paths to content strings.
   *
   * @public
   */
  ProfileMapping: Record<string, string> | undefined;

  /**
   * The name of the profile.
   *
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * The description of the profile.
   *
   * @public
   */
  ProfileDescription?: string | undefined;

  /**
   * A description of what changed in this version.
   *
   * @public
   */
  ChangeDescription?: string | undefined;

  /**
   * The timestamp when this version was last updated.
   *
   * @public
   */
  LastUpdatedAt: Date | undefined;
}

/**
 * The request parameters for the `ListDataTransformationProfiles` operation.
 *
 * @public
 */
export interface ListDataTransformationProfilesRequest {
  /**
   * Filters the results by source data format.
   *
   * @public
   */
  SourceFormat: SourceFormat | undefined;

  /**
   * The maximum number of profiles to return per page. If you don't specify a value, the service returns up to 100 results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token from a previous response. Pass this value to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains summary information about a data transformation profile. To retrieve profile content, call `GetDataTransformationProfile`.
 *
 * @public
 */
export interface DataTransformationProfileSummary {
  /**
   * The unique identifier of the profile.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * The latest version number of the profile.
   *
   * @public
   */
  Version: number | undefined;

  /**
   * The source data format that this profile converts from.
   *
   * @public
   */
  SourceFormat: SourceFormat | undefined;

  /**
   * The target output format of the profile.
   *
   * @public
   */
  TargetFormat: TargetFormat | undefined;

  /**
   * The name of the profile.
   *
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * A description of the profile's purpose.
   *
   * @public
   */
  ProfileDescription?: string | undefined;

  /**
   * The timestamp when the profile was last updated.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;
}

/**
 * The response from the `ListDataTransformationProfiles` operation.
 *
 * @public
 */
export interface ListDataTransformationProfilesResponse {
  /**
   * The list of data transformation profile summaries.
   *
   * @public
   */
  Items: DataTransformationProfileSummary[] | undefined;

  /**
   * The pagination token to use in the next request. If this value is `null`, there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The request parameters for the `ListDataTransformationProfileVersions` operation.
 *
 * @public
 */
export interface ListDataTransformationProfileVersionsRequest {
  /**
   * The unique identifier of the profile whose versions to list.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * The maximum number of profile versions to return per page. If you don't specify a value, the service returns up to 100 results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token from a previous response. Pass this value to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains summary information about a specific version of a data transformation profile. To retrieve profile content, call `GetDataTransformationProfile`.
 *
 * @public
 */
export interface DataTransformationProfileVersionSummary {
  /**
   * The unique identifier of the profile.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * The version number.
   *
   * @public
   */
  Version: number | undefined;

  /**
   * The source data format that this profile converts from.
   *
   * @public
   */
  SourceFormat: SourceFormat | undefined;

  /**
   * The target output format of the profile.
   *
   * @public
   */
  TargetFormat: TargetFormat | undefined;

  /**
   * The name of the profile.
   *
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * A description of what changed in this version.
   *
   * @public
   */
  ChangeDescription?: string | undefined;

  /**
   * The timestamp when this version was last updated.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;
}

/**
 * The response from the `ListDataTransformationProfileVersions` operation.
 *
 * @public
 */
export interface ListDataTransformationProfileVersionsResponse {
  /**
   * The list of data transformation profile version summaries.
   *
   * @public
   */
  Items: DataTransformationProfileVersionSummary[] | undefined;

  /**
   * The pagination token to use in the next request. If this value is `null`, there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The request parameters for the `PublishDataTransformationProfile` operation.
 *
 * @public
 */
export interface PublishDataTransformationProfileRequest {
  /**
   * The unique identifier of the profile to publish.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * The source data format of the profile.
   *
   * @public
   */
  SourceFormat: SourceFormat | undefined;

  /**
   * The version number of a previously published version to republish as the new latest version. Use this parameter for rollback scenarios. If you omit this parameter, the service publishes the current DRAFT version.
   *
   * @public
   */
  FromExistingVersion?: number | undefined;

  /**
   * A description of what changed or why this version is being published.
   *
   * @public
   */
  ChangeDescription?: string | undefined;
}

/**
 * The response from the `PublishDataTransformationProfile` operation.
 *
 * @public
 */
export interface PublishDataTransformationProfileResponse {
  /**
   * The unique identifier of the published profile.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * The new version number that was created.
   *
   * @public
   */
  Version: number | undefined;

  /**
   * The source data format of the profile.
   *
   * @public
   */
  SourceFormat: SourceFormat | undefined;

  /**
   * The target output format of the profile.
   *
   * @public
   */
  TargetFormat: TargetFormat | undefined;

  /**
   * The name of the published profile.
   *
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * The timestamp when the profile was last updated.
   *
   * @public
   */
  LastUpdatedAt: Date | undefined;
}

/**
 * The Amazon S3 location and source format configuration for input data in a transformation job.
 *
 * @public
 */
export interface TransformationInputDataConfig {
  /**
   * The Amazon S3 URI of the input data to transform.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * The format of the source data files (C-CDA or CSV).
   *
   * @public
   */
  SourceFormat?: SourceFormat | undefined;
}

/**
 * The Amazon S3 output configuration for a data transformation job, including the output location and encryption settings.
 *
 * @public
 */
export interface DataTransformationS3Configuration {
  /**
   * The Amazon S3 URI where HealthLake writes the converted output files.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * The Amazon Web Services Key Management Service (Amazon Web Services KMS) key identifier used to encrypt the transformation job output written to Amazon S3.
   *
   * @public
   */
  KmsKeyId: string | undefined;
}

/**
 * The Amazon S3 output location and encryption configuration for a transformation job.
 *
 * @public
 */
export interface TransformationOutputDataConfig {
  /**
   * The Amazon S3 output location and Amazon Web Services Key Management Service (Amazon Web Services KMS) encryption configuration.
   *
   * @public
   */
  S3Configuration: DataTransformationS3Configuration | undefined;
}

/**
 * The request parameters for the `StartDataTransformationJob` operation.
 *
 * @public
 */
export interface StartDataTransformationJobRequest {
  /**
   * The Amazon S3 location and format of the source files to transform.
   *
   * @public
   */
  InputDataConfig: TransformationInputDataConfig | undefined;

  /**
   * The Amazon S3 output location and Amazon Web Services Key Management Service (Amazon Web Services KMS) encryption configuration.
   *
   * @public
   */
  OutputDataConfig: TransformationOutputDataConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) role that HealthLake assumes to read from and write to the specified Amazon S3 locations.
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the service ignores the request but does not return an error.
   *
   * @public
   */
  ClientToken: string | undefined;

  /**
   * A descriptive name for the data transformation job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The unique identifier of the data transformation profile to use for conversion.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * Specifies whether drift detection is enabled for this job. When enabled, HealthLake writes a drift report to the output Amazon S3 location alongside the converted files.
   *
   * @public
   */
  DriftDetectionEnabled?: boolean | undefined;

  /**
   * Specifies whether FHIR R4 Provenance resource generation is enabled for this transformation job. When provenance is enabled, the service also generates related DocumentReference and Device resources. If you don't specify a value, the default is `true`. To disable provenance output, set this parameter to `false`.
   *
   * @public
   */
  ProvenanceEnabled?: boolean | undefined;
}

/**
 * The response from the `StartDataTransformationJob` operation.
 *
 * @public
 */
export interface StartDataTransformationJobResponse {
  /**
   * The unique identifier assigned to the data transformation job.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * The initial status of the data transformation job.
   *
   * @public
   */
  JobStatus: TransformationJobStatus | undefined;
}

/**
 * The request parameters for the `UpdateDataTransformationProfile` operation.
 *
 * @public
 */
export interface UpdateDataTransformationProfileRequest {
  /**
   * The unique identifier of the profile to update.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * The new profile content for the DRAFT version. This is a full replacement of all profile files.
   *
   * @public
   */
  ProfileMapping: Record<string, string> | undefined;

  /**
   * A description of what changed in this update.
   *
   * @public
   */
  ChangeDescription?: string | undefined;
}

/**
 * The response from the `UpdateDataTransformationProfile` operation.
 *
 * @public
 */
export interface UpdateDataTransformationProfileResponse {
  /**
   * The unique identifier of the updated profile.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * The source data format of the profile.
   *
   * @public
   */
  SourceFormat: SourceFormat | undefined;

  /**
   * The target output format of the profile.
   *
   * @public
   */
  TargetFormat: TargetFormat | undefined;

  /**
   * The name of the updated profile.
   *
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * The timestamp when the profile was last updated.
   *
   * @public
   */
  LastUpdatedAt: Date | undefined;
}

/**
 * Represents a message sent to the agent during chat-based profile customization.
 *
 * @public
 */
export interface AgentInputMessage {
  /**
   * The text of your message to the agent.
   *
   * @public
   */
  Body: string | undefined;

  /**
   * The type of input message, which determines how the agent processes your request. Valid values:
   *
   * - `normal`: A regular message to the agent.
   * - `confirmation_response`: A response to a confirmation request from the agent.
   *
   * @public
   */
  Type: AgentInputMessageType | undefined;
}

/**
 * The request parameters for the `UpdateProfileWithAgent` operation.
 *
 * @public
 */
export interface UpdateProfileWithAgentRequest {
  /**
   * The unique identifier of the profile to update via the agent.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * The message to send to the agent.
   *
   * @public
   */
  InputMessage: AgentInputMessage | undefined;

  /**
   * The conversation identifier for multi-turn interactions. Omit to start a new conversation.
   *
   * @public
   */
  ConversationId?: string | undefined;
}

/**
 * Contains the final response event from the agent, including the response message, response options, and conversation ID.
 *
 * @public
 */
export interface EndOfOutputEvent {
  /**
   * The final response message from the agent.
   *
   * @public
   */
  FinalResponseMessage: string | undefined;

  /**
   * The response options that you can use to easily answer follow-up questions from the agent.
   *
   * @public
   */
  Options?: string[] | undefined;

  /**
   * The conversation ID of the request. You can use this ID to continue the profile mapping based on this request's context at a later time.
   *
   * @public
   */
  ConversationId?: string | undefined;
}

/**
 * The type of an event that returns an exception encountered while serving the request.
 *
 * @public
 */
export interface ErrorEvent {
  /**
   * The type of the exception.
   *
   * @public
   */
  Error: AgentErrorType | undefined;

  /**
   * The exception message.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * The type for a periodically emitted event to keep the connection alive.
 *
 * @public
 */
export interface HeartbeatEvent {}

/**
 * The type for an incremental progress update from the agent.
 *
 * @public
 */
export interface ProgressEvent {
  /**
   * An incremental progress update message by the agent
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * The type for an incremental text update from the agent.
 *
 * @public
 */
export interface TextMessageEvent {
  /**
   * An incremental text update from the agent.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * Represents the response stream type from the agent during chat-based profile customization.
 *
 * @public
 */
export type AgentOutputMessageStream =
  | AgentOutputMessageStream.EndOfOutputEventMember
  | AgentOutputMessageStream.ErrorEventMember
  | AgentOutputMessageStream.HeartbeatEventMember
  | AgentOutputMessageStream.ProgressEventMember
  | AgentOutputMessageStream.TextMessageEventMember
  | AgentOutputMessageStream.$UnknownMember;

/**
 * @public
 */
export namespace AgentOutputMessageStream {
  /**
   * An incremental text update from the agent.
   *
   * @public
   */
  export interface TextMessageEventMember {
    TextMessageEvent: TextMessageEvent;
    ProgressEvent?: never;
    HeartbeatEvent?: never;
    ErrorEvent?: never;
    EndOfOutputEvent?: never;
    $unknown?: never;
  }

  /**
   * An incremental progress update from the agent.
   *
   * @public
   */
  export interface ProgressEventMember {
    TextMessageEvent?: never;
    ProgressEvent: ProgressEvent;
    HeartbeatEvent?: never;
    ErrorEvent?: never;
    EndOfOutputEvent?: never;
    $unknown?: never;
  }

  /**
   * Periodically emitted event to keep the connection alive.
   *
   * @public
   */
  export interface HeartbeatEventMember {
    TextMessageEvent?: never;
    ProgressEvent?: never;
    HeartbeatEvent: HeartbeatEvent;
    ErrorEvent?: never;
    EndOfOutputEvent?: never;
    $unknown?: never;
  }

  /**
   * An exception encountered while serving the request.
   *
   * @public
   */
  export interface ErrorEventMember {
    TextMessageEvent?: never;
    ProgressEvent?: never;
    HeartbeatEvent?: never;
    ErrorEvent: ErrorEvent;
    EndOfOutputEvent?: never;
    $unknown?: never;
  }

  /**
   * The final event in the response stream from the agent during chat-based profile customization. The caller can assume that the stream has ended upon receiving this event.
   *
   * @public
   */
  export interface EndOfOutputEventMember {
    TextMessageEvent?: never;
    ProgressEvent?: never;
    HeartbeatEvent?: never;
    ErrorEvent?: never;
    EndOfOutputEvent: EndOfOutputEvent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    TextMessageEvent?: never;
    ProgressEvent?: never;
    HeartbeatEvent?: never;
    ErrorEvent?: never;
    EndOfOutputEvent?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    TextMessageEvent: (value: TextMessageEvent) => T;
    ProgressEvent: (value: ProgressEvent) => T;
    HeartbeatEvent: (value: HeartbeatEvent) => T;
    ErrorEvent: (value: ErrorEvent) => T;
    EndOfOutputEvent: (value: EndOfOutputEvent) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The response from the `UpdateProfileWithAgent` operation.
 *
 * @public
 */
export interface UpdateProfileWithAgentResponse {
  /**
   * The streaming response from the agent.
   *
   * @public
   */
  AgentResponse: AsyncIterable<AgentOutputMessageStream> | undefined;
}

/**
 * The analytics configuration for a data store.
 *
 * @public
 */
export interface AnalyticsConfiguration {
  /**
   * The status of the analytics configuration.
   *
   * @public
   */
  Status?: AnalyticsStatus | undefined;
}

/**
 * The backup configuration for the data store.
 * @public
 */
export interface BackupConfiguration {
  /**
   * The backup status of the data store.
   * @public
   */
  Status?: BackupStatus | undefined;

  /**
   * The type of backup.
   * @public
   */
  BackupType?: BackupType | undefined;

  /**
   * The number of days backup data is retained.
   * @public
   */
  RetentionPeriodInDays?: number | undefined;

  /**
   * Specifies whether tags are included in backups.
   * @public
   */
  BackupTagsEnabled?: boolean | undefined;
}

/**
 * Configuration for continuous backup (point-in-time) restore.
 * @public
 */
export interface ContinuousBackupRestoreConfiguration {
  /**
   * The point in time to restore the data store to, specified as a UTC timestamp.
   * @public
   */
  RestorePointTime?: Date | undefined;
}

/**
 * The identity provider configuration selected when the data store was created.
 *
 * @public
 */
export interface IdentityProviderConfiguration {
  /**
   * The authorization strategy selected when the HealthLake data store is created.
   *
   * > **Note:**
   * >
   * > HealthLake provides support for both SMART on FHIR V1 and V2 as described below.
   * >
   * > - `SMART_ON_FHIR_V1` – Support for only SMART on FHIR V1, which includes `read` (read/search) and `write` (create/update/delete) permissions.
   * > - `SMART_ON_FHIR` – Support for both SMART on FHIR V1 and V2, which includes `create`, `read`, `update`, `delete`, and `search` permissions.
   * > - `Amazon Web Services_AUTH` – The default HealthLake authorization strategy; not affiliated with SMART on FHIR.
   *
   * @public
   */
  AuthorizationStrategy: AuthorizationStrategy | undefined;

  /**
   * The parameter to enable SMART on FHIR fine-grained authorization for the data store.
   *
   * @public
   */
  FineGrainedAuthorizationEnabled?: boolean | undefined;

  /**
   * The JSON metadata elements to use in your identity provider configuration. Required elements are listed based on the launch specification of the SMART application. For more information on all possible elements, see [Metadata](https://build.fhir.org/ig/HL7/smart-app-launch/conformance.html#metadata) in SMART's App Launch specification.
   *
   * `authorization_endpoint`: The URL to the OAuth2 authorization endpoint.
   *
   * `grant_types_supported`: An array of grant types that are supported at the token endpoint. You must provide at least one grant type option. Valid options are `authorization_code` and `client_credentials`.
   *
   * `token_endpoint`: The URL to the OAuth2 token endpoint.
   *
   * `capabilities`: An array of strings of the SMART capabilities that the authorization server supports.
   *
   * `code_challenge_methods_supported`: An array of strings of supported PKCE code challenge methods. You must include the `S256` method in the array of PKCE code challenge methods.
   *
   * @public
   */
  Metadata?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lambda function to use to decode the access token created by the authorization server.
   *
   * @public
   */
  IdpLambdaArn?: string | undefined;
}

/**
 * The natural language processing (NLP) configuration for a data store.
 *
 * @public
 */
export interface NlpConfiguration {
  /**
   * The status of the NLP configuration.
   *
   * @public
   */
  Status?: NlpStatus | undefined;
}

/**
 * The input properties for the preloaded (Synthea) data store.
 *
 * @public
 */
export interface PreloadDataConfig {
  /**
   * The type of preloaded data. Only Synthea preloaded data is supported.
   *
   * @public
   */
  PreloadDataType: PreloadDataType | undefined;
}

/**
 * The profile configuration for a data store.
 *
 * @public
 */
export interface ProfileConfiguration {
  /**
   * The list of default profiles for the data store.
   *
   * @public
   */
  DefaultProfiles?: string[] | undefined;
}

/**
 * The customer-managed-key (CMK) used when creating a data store. If a customer-owned key is not specified, an Amazon Web Services-owned key is used for encryption.
 *
 * @public
 */
export interface KmsEncryptionConfig {
  /**
   * The type of customer-managed-key (CMK) used for encryption.
   *
   * @public
   */
  CmkType: CmkType | undefined;

  /**
   * The Key Management Service (KMS) encryption key id/alias used to encrypt the data store contents at rest.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * The server-side encryption key configuration for a customer-provided encryption key.
 *
 * @public
 */
export interface SseConfiguration {
  /**
   * The Key Management Service (KMS) encryption configuration used to provide details for data encryption.
   *
   * @public
   */
  KmsEncryptionConfig: KmsEncryptionConfig | undefined;
}

/**
 * A label consisting of a user-defined key and value. The form for tags is \{"Key", "Value"\}
 *
 * @public
 */
export interface Tag {
  /**
   * The key portion of a tag. Tag keys are case sensitive.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value portion of a tag. Tag values are case-sensitive.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateFHIRDatastoreRequest {
  /**
   * The data store name (user-generated).
   *
   * @public
   */
  DatastoreName?: string | undefined;

  /**
   * The FHIR release version supported by the data store. Current support is for version `R4`.
   *
   * @public
   */
  DatastoreTypeVersion: FHIRVersion | undefined;

  /**
   * The server-side encryption key configuration for a customer-provided encryption key specified for creating a data store.
   *
   * @public
   */
  SseConfiguration?: SseConfiguration | undefined;

  /**
   * An optional parameter to preload (import) open source Synthea FHIR data upon creation of the data store.
   *
   * @public
   */
  PreloadDataConfig?: PreloadDataConfig | undefined;

  /**
   * An optional user-provided token to ensure API idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The resource tags applied to a data store when it is created.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The identity provider configuration to use for the data store.
   *
   * @public
   */
  IdentityProviderConfiguration?: IdentityProviderConfiguration | undefined;

  /**
   * The analytics configuration for the data store.
   *
   * @public
   */
  AnalyticsConfiguration?: AnalyticsConfiguration | undefined;

  /**
   * The natural language processing (NLP) configuration for the data store.
   *
   * @public
   */
  NlpConfiguration?: NlpConfiguration | undefined;

  /**
   * The profile configuration for the data store.
   *
   * @public
   */
  ProfileConfiguration?: ProfileConfiguration | undefined;

  /**
   * The backup configuration for the data store.
   * @public
   */
  BackupConfiguration?: BackupConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateFHIRDatastoreResponse {
  /**
   * The data store identifier.
   *
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the data store.
   *
   * @public
   */
  DatastoreArn: string | undefined;

  /**
   * The data store status.
   *
   * @public
   */
  DatastoreStatus: DatastoreStatus | undefined;

  /**
   * The Amazon Web Services endpoint created for the data store.
   *
   * @public
   */
  DatastoreEndpoint: string | undefined;
}

/**
 * The backup status information for the data store.
 * @public
 */
export interface DatastoreBackupStatus {
  /**
   * The backup configuration for the data store.
   * @public
   */
  Configuration?: BackupConfiguration | undefined;

  /**
   * The time backup was enabled on the data store.
   * @public
   */
  BackupEnabledAt?: Date | undefined;

  /**
   * The earliest point in time the data store can be restored to.
   * @public
   */
  EarliestRestorePoint?: Date | undefined;

  /**
   * The latest point in time the data store can be restored to.
   * @public
   */
  LatestRestorePoint?: Date | undefined;

  /**
   * The time the retained backup data is scheduled for permanent deletion.
   * @public
   */
  ScheduledPermanentDeletionTime?: Date | undefined;
}

/**
 * The filters applied to a data store query.
 *
 * @public
 */
export interface DatastoreFilter {
  /**
   * Filter data store results by name.
   *
   * @public
   */
  DatastoreName?: string | undefined;

  /**
   * Filter data store results by status.
   *
   * @public
   */
  DatastoreStatus?: DatastoreStatus | undefined;

  /**
   * Filter to set cutoff dates for records. All data stores created before the specified date are included in the results.
   *
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * Filter to set cutoff dates for records. All data stores created after the specified date are included in the results.
   *
   * @public
   */
  CreatedAfter?: Date | undefined;
}

/**
 * The error information for `CreateFHIRDatastore` and `DeleteFHIRDatastore` actions.
 *
 * @public
 */
export interface ErrorCause {
  /**
   * The error message text for `ErrorCause`.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The error category for `ErrorCause`.
   *
   * @public
   */
  ErrorCategory?: ErrorCategory | undefined;
}

/**
 * The data store properties.
 *
 * @public
 */
export interface DatastoreProperties {
  /**
   * The data store identifier.
   *
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) used in the creation of the data store.
   *
   * @public
   */
  DatastoreArn: string | undefined;

  /**
   * The data store name.
   *
   * @public
   */
  DatastoreName?: string | undefined;

  /**
   * The data store status.
   *
   * @public
   */
  DatastoreStatus: DatastoreStatus | undefined;

  /**
   * The time the data store was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The FHIR release version supported by the data store. Current support is for version `R4`.
   *
   * @public
   */
  DatastoreTypeVersion: FHIRVersion | undefined;

  /**
   * The Amazon Web Services endpoint for the data store.
   *
   * @public
   */
  DatastoreEndpoint: string | undefined;

  /**
   * The server-side encryption key configuration for a customer provided encryption key.
   *
   * @public
   */
  SseConfiguration?: SseConfiguration | undefined;

  /**
   * The preloaded Synthea data configuration for the data store.
   *
   * @public
   */
  PreloadDataConfig?: PreloadDataConfig | undefined;

  /**
   * The identity provider selected during data store creation.
   *
   * @public
   */
  IdentityProviderConfiguration?: IdentityProviderConfiguration | undefined;

  /**
   * The error cause for the current data store operation.
   *
   * @public
   */
  ErrorCause?: ErrorCause | undefined;

  /**
   * The natural language processing (NLP) configuration for the data store.
   *
   * @public
   */
  NlpConfiguration?: NlpConfiguration | undefined;

  /**
   * The analytics configuration for the data store.
   *
   * @public
   */
  AnalyticsConfiguration?: AnalyticsConfiguration | undefined;

  /**
   * The profile configuration for the data store.
   *
   * @public
   */
  ProfileConfiguration?: ProfileConfiguration | undefined;

  /**
   * The backup status information for the data store.
   * @public
   */
  BackupStatusInfo?: DatastoreBackupStatus | undefined;
}

/**
 * @public
 */
export interface DeleteFHIRDatastoreRequest {
  /**
   * The Amazon Web Services-generated identifier for the data store to be deleted.
   *
   * @public
   */
  DatastoreId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFHIRDatastoreResponse {
  /**
   * The Amazon Web Services-generated ID for the deleted data store.
   *
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that grants access permission to HealthLake.
   *
   * @public
   */
  DatastoreArn: string | undefined;

  /**
   * The data store status.
   *
   * @public
   */
  DatastoreStatus: DatastoreStatus | undefined;

  /**
   * The Amazon Web Services endpoint of the data store to be deleted.
   *
   * @public
   */
  DatastoreEndpoint: string | undefined;
}

/**
 * The request parameters for the `DescribeDataTransformationJob` operation.
 *
 * @public
 */
export interface DescribeDataTransformationJobRequest {
  /**
   * The unique identifier of the data transformation job to describe.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * Contains progress metrics for a data transformation job, including counts of files scanned, converted, and failed.
 *
 * @public
 */
export interface TransformationJobProgressReport {
  /**
   * The total number of source files scanned by the job.
   *
   * @public
   */
  TotalFilesScanned: number | undefined;

  /**
   * The total number of source files successfully converted.
   *
   * @public
   */
  TotalFilesConverted: number | undefined;

  /**
   * The total number of source files that failed conversion.
   *
   * @public
   */
  TotalFilesFailed: number | undefined;

  /**
   * The total number of FHIR R4 resources generated across all converted files.
   *
   * @public
   */
  TotalResourcesGenerated: number | undefined;
}

/**
 * Contains the properties of a data transformation job, including its status, configuration, and progress information. You retrieve this structure by calling `DescribeDataTransformationJob`.
 *
 * @public
 */
export interface TransformationJobProperties {
  /**
   * The unique identifier of the data transformation job.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * The current status of the data transformation job.
   *
   * @public
   */
  JobStatus: TransformationJobStatus | undefined;

  /**
   * The Amazon S3 location and format of the source files for this job.
   *
   * @public
   */
  InputDataConfig: TransformationInputDataConfig | undefined;

  /**
   * The Amazon S3 location and encryption configuration for the converted output.
   *
   * @public
   */
  OutputDataConfig: TransformationOutputDataConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) role that grants HealthLake access to the specified Amazon S3 locations. HealthLake assumes this role to read input files and write output files.
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * The timestamp when the job was submitted.
   *
   * @public
   */
  SubmitTime: Date | undefined;

  /**
   * The name of the data transformation job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The unique identifier of the data transformation profile used for this job.
   *
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * The name of the data transformation profile used for this job.
   *
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * The version number of the data transformation profile used for this job.
   *
   * @public
   */
  ProfileVersion?: number | undefined;

  /**
   * The timestamp when the job completed or failed.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * Specifies whether drift detection is enabled for this job. When enabled, HealthLake writes a drift report to the output Amazon S3 location alongside the converted files.
   *
   * @public
   */
  DriftDetectionEnabled?: boolean | undefined;

  /**
   * Specifies whether FHIR R4 Provenance resource generation is enabled for this transformation job. When provenance is enabled, the service also generates related DocumentReference and Device resources.
   *
   * @public
   */
  ProvenanceEnabled?: boolean | undefined;

  /**
   * An informational message about the job, such as an error description if the job failed.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The progress report for the data transformation job, including counts of files processed and resources generated.
   *
   * @public
   */
  JobProgressReport?: TransformationJobProgressReport | undefined;
}

/**
 * The response from the `DescribeDataTransformationJob` operation.
 *
 * @public
 */
export interface DescribeDataTransformationJobResponse {
  /**
   * The properties of the data transformation job, including status, configuration, and progress information.
   *
   * @public
   */
  TransformationJobProperties: TransformationJobProperties | undefined;
}

/**
 * @public
 */
export interface DescribeFHIRDatastoreRequest {
  /**
   * The data store identifier.
   *
   * @public
   */
  DatastoreId: string | undefined;
}

/**
 * @public
 */
export interface DescribeFHIRDatastoreResponse {
  /**
   * The data store properties.
   *
   * @public
   */
  DatastoreProperties: DatastoreProperties | undefined;
}

/**
 * @public
 */
export interface DescribeFHIRExportJobRequest {
  /**
   * The data store identifier from which FHIR data is being exported from.
   *
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * The export job identifier.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * The configuration of the Amazon S3 bucket for either an import or export job. This includes assigning access permissions.
 *
 * @public
 */
export interface S3Configuration {
  /**
   * The `S3Uri` is the user-specified Amazon S3 location of the FHIR data to be imported into HealthLake.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * The Key Management Service (KMS) key ID used to access the Amazon S3 bucket.
   *
   * @public
   */
  KmsKeyId: string | undefined;
}

/**
 * The output data configuration supplied when the export job was created.
 *
 * @public
 */
export type OutputDataConfig =
  | OutputDataConfig.S3ConfigurationMember
  | OutputDataConfig.$UnknownMember;

/**
 * @public
 */
export namespace OutputDataConfig {
  /**
   * The output data configuration supplied when the export job was created.
   *
   * @public
   */
  export interface S3ConfigurationMember {
    S3Configuration: S3Configuration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    S3Configuration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    S3Configuration: (value: S3Configuration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The properties of a FHIR export job.
 *
 * @public
 */
export interface ExportJobProperties {
  /**
   * The export job identifier.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * The export job name.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The export job status.
   *
   * @public
   */
  JobStatus: JobStatus | undefined;

  /**
   * The time the export job was initiated.
   *
   * @public
   */
  SubmitTime: Date | undefined;

  /**
   * The time the export job completed.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The data store identifier from which files are being exported.
   *
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * The output data configuration supplied when the export job was created.
   *
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) used during the initiation of the export job.
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * An explanation of any errors that might have occurred during the export job.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFHIRExportJobResponse {
  /**
   * The export job properties.
   *
   * @public
   */
  ExportJobProperties: ExportJobProperties | undefined;
}

/**
 * @public
 */
export interface DescribeFHIRImportJobRequest {
  /**
   * The data store identifier.
   *
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * The import job identifier.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * The import job input properties.
 *
 * @public
 */
export type InputDataConfig =
  | InputDataConfig.S3UriMember
  | InputDataConfig.$UnknownMember;

/**
 * @public
 */
export namespace InputDataConfig {
  /**
   * The `S3Uri` is the user-specified Amazon S3 location of the FHIR data to be imported into HealthLake.
   *
   * @public
   */
  export interface S3UriMember {
    S3Uri: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    S3Uri?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    S3Uri: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The progress report for the import job.
 *
 * @public
 */
export interface JobProgressReport {
  /**
   * The number of files scanned from the Amazon S3 input bucket.
   *
   * @public
   */
  TotalNumberOfScannedFiles?: number | undefined;

  /**
   * The size (in MB) of files scanned from the Amazon S3 input bucket.
   *
   * @public
   */
  TotalSizeOfScannedFilesInMB?: number | undefined;

  /**
   * The number of files imported.
   *
   * @public
   */
  TotalNumberOfImportedFiles?: number | undefined;

  /**
   * The number of resources scanned from the Amazon S3 input bucket.
   *
   * @public
   */
  TotalNumberOfResourcesScanned?: number | undefined;

  /**
   * The number of resources imported.
   *
   * @public
   */
  TotalNumberOfResourcesImported?: number | undefined;

  /**
   * The number of resources that failed due to customer error.
   *
   * @public
   */
  TotalNumberOfResourcesWithCustomerError?: number | undefined;

  /**
   * The number of files that failed to be read from the Amazon S3 input bucket due to customer error.
   *
   * @public
   */
  TotalNumberOfFilesReadWithCustomerError?: number | undefined;

  /**
   * The number of non-FHIR files scanned from the Amazon S3 input bucket.
   *
   * @public
   */
  TotalNumberOfScannedNonFhirFiles?: number | undefined;

  /**
   * The size (in MB) of non-FHIR files scanned from the Amazon S3 input bucket.
   *
   * @public
   */
  TotalSizeOfScannedNonFhirFilesInMB?: number | undefined;

  /**
   * The number of non-FHIR files imported.
   *
   * @public
   */
  TotalNumberOfImportedNonFhirFiles?: number | undefined;

  /**
   * The number of non-FHIR resources scanned from the Amazon S3 input bucket.
   *
   * @public
   */
  TotalNumberOfNonFhirResourcesScanned?: number | undefined;

  /**
   * The number of non-FHIR resources imported.
   *
   * @public
   */
  TotalNumberOfNonFhirResourcesImported?: number | undefined;

  /**
   * The number of non-FHIR resources that failed due to customer error.
   *
   * @public
   */
  TotalNumberOfNonFhirResourcesWithCustomerError?: number | undefined;

  /**
   * The number of non-FHIR files that failed to be read from the Amazon S3 input bucket due to customer error.
   *
   * @public
   */
  TotalNumberOfNonFhirFilesReadWithCustomerError?: number | undefined;

  /**
   * The transaction rate the import job is processed at.
   *
   * @public
   */
  Throughput?: number | undefined;

  /**
   * Number of CCDA files successfully transformed during the import's transformation phase. Populated only for import jobs that use the two-Step-Function (transformation + ingestion) flow; null for legacy single-SF imports and for pure FHIR imports that skip transformation.
   *
   * @public
   */
  TotalFilesConverted?: number | undefined;

  /**
   * Number of FHIR resources produced by the transformation phase. Populated only for import jobs that use the two-Step-Function flow; null for legacy single-SF imports and for pure FHIR imports.
   *
   * @public
   */
  TotalResourcesGenerated?: number | undefined;
}

/**
 * The import job properties.
 *
 * @public
 */
export interface ImportJobProperties {
  /**
   * The import job identifier.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * The import job name.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The import job status.
   *
   * @public
   */
  JobStatus: JobStatus | undefined;

  /**
   * The time the import job was submitted for processing.
   *
   * @public
   */
  SubmitTime: Date | undefined;

  /**
   * The time the import job was completed.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The data store identifier.
   *
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * The input data configuration supplied when the import job was created.
   *
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * The output data configuration supplied when the export job was created.
   *
   * @public
   */
  JobOutputDataConfig?: OutputDataConfig | undefined;

  /**
   * Displays the progress of the import job, including total resources scanned, total resources imported, and total size of data imported.
   *
   * @public
   */
  JobProgressReport?: JobProgressReport | undefined;

  /**
   * The Amazon Resource Name (ARN) that grants HealthLake access to the input data.
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * An explanation of any errors that might have occurred during the FHIR import job.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The validation level of the import job.
   *
   * @public
   */
  ValidationLevel?: ValidationLevel | undefined;
}

/**
 * @public
 */
export interface DescribeFHIRImportJobResponse {
  /**
   * The import job properties.
   *
   * @public
   */
  ImportJobProperties: ImportJobProperties | undefined;
}

/**
 * The request parameters for the `ListDataTransformationJobs` operation.
 *
 * @public
 */
export interface ListDataTransformationJobsRequest {
  /**
   * The maximum number of jobs to return per page. If you don't specify a value, the service returns up to 100 results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token from a previous response. Pass this value to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Filters the results to include only jobs with the specified status.
   *
   * @public
   */
  JobStatus?: TransformationJobStatus | undefined;

  /**
   * Filters the results to include only jobs with the specified name.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * Filters the results to include only jobs submitted at or after this timestamp.
   *
   * @public
   */
  SubmittedAfter?: Date | undefined;

  /**
   * Filters the results to include only jobs submitted at or before this timestamp.
   *
   * @public
   */
  SubmittedBefore?: Date | undefined;
}

/**
 * Contains summary information about a data transformation job. To retrieve full job details, call `DescribeDataTransformationJob`.
 *
 * @public
 */
export interface TransformationJobSummary {
  /**
   * The unique identifier of the job.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * The current status of the job.
   *
   * @public
   */
  JobStatus: TransformationJobStatus | undefined;

  /**
   * The timestamp when the job was submitted.
   *
   * @public
   */
  SubmitTime: Date | undefined;

  /**
   * The name of the job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The timestamp when the job completed.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The source data format for this job.
   *
   * @public
   */
  SourceFormat?: SourceFormat | undefined;
}

/**
 * The response from the `ListDataTransformationJobs` operation.
 *
 * @public
 */
export interface ListDataTransformationJobsResponse {
  /**
   * The list of data transformation job summaries.
   *
   * @public
   */
  Items: TransformationJobSummary[] | undefined;

  /**
   * The pagination token to use in the next request. If this value is `null`, there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFHIRDatastoresRequest {
  /**
   * List all filters associated with a FHIR data store request.
   *
   * @public
   */
  Filter?: DatastoreFilter | undefined;

  /**
   * The token used to retrieve the next page of data stores when results are paginated.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of data stores returned on a page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFHIRDatastoresResponse {
  /**
   * The properties associated with all listed data stores.
   *
   * @public
   */
  DatastorePropertiesList: DatastoreProperties[] | undefined;

  /**
   * The pagination token used to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFHIRExportJobsRequest {
  /**
   * Limits the response to the export job with the specified data store ID.
   *
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * A pagination token used to identify the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Limits the number of results returned for a ListFHIRExportJobs to a maximum quantity specified by the user.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Limits the response to the export job with the specified job name.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * Limits the response to export jobs with the specified job status.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * Limits the response to FHIR export jobs submitted before a user- specified date.
   *
   * @public
   */
  SubmittedBefore?: Date | undefined;

  /**
   * Limits the response to FHIR export jobs submitted after a user-specified date.
   *
   * @public
   */
  SubmittedAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListFHIRExportJobsResponse {
  /**
   * The properties of listed FHIR export jobs.
   *
   * @public
   */
  ExportJobPropertiesList: ExportJobProperties[] | undefined;

  /**
   * The pagination token used to identify the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFHIRImportJobsRequest {
  /**
   * Limits the response to the import job with the specified data store ID.
   *
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * The pagination token used to identify the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Limits the number of results returned for `ListFHIRImportJobs` to a maximum quantity specified by the user.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Limits the response to the import job with the specified job name.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * Limits the response to the import job with the specified job status.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * Limits the response to FHIR import jobs submitted before a user- specified date.
   *
   * @public
   */
  SubmittedBefore?: Date | undefined;

  /**
   * Limits the response to FHIR import jobs submitted after a user-specified date.
   *
   * @public
   */
  SubmittedAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListFHIRImportJobsResponse {
  /**
   * The properties for listed import jobs.
   *
   * @public
   */
  ImportJobPropertiesList: ImportJobProperties[] | undefined;

  /**
   * The pagination token used to identify the next page of results to return.
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
   * The Amazon Resource Name (ARN) of the data store to which tags are being added.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Returns a list of tags associated with a data store.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Specifies the type and parameters for the restore operation.
 * @public
 */
export type RestoreConfiguration =
  | RestoreConfiguration.ContinuousBackupRestoreConfigurationMember
  | RestoreConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace RestoreConfiguration {
  /**
   * Configuration for restoring from continuous backup to a specific point in time.
   * @public
   */
  export interface ContinuousBackupRestoreConfigurationMember {
    ContinuousBackupRestoreConfiguration: ContinuousBackupRestoreConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ContinuousBackupRestoreConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ContinuousBackupRestoreConfiguration: (value: ContinuousBackupRestoreConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface RestoreFHIRDatastoreRequest {
  /**
   * The identifier of the source data store to restore from.
   * @public
   */
  SourceDatastoreId: string | undefined;

  /**
   * The restore configuration specifying the type and parameters for the restore.
   * @public
   */
  RestoreConfiguration: RestoreConfiguration | undefined;

  /**
   * The name for the restored data store.
   * @public
   */
  DatastoreName?: string | undefined;

  /**
   * The server-side encryption key configuration for the restored data store.
   * @public
   */
  SseConfiguration?: SseConfiguration | undefined;

  /**
   * An optional user-provided token to ensure API idempotency of the restore.
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The resource tags applied to the restored data store.
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The identity provider configuration for the restored data store.
   * @public
   */
  IdentityProviderConfiguration?: IdentityProviderConfiguration | undefined;

  /**
   * The analytics configuration for the restored data store.
   * @public
   */
  AnalyticsConfiguration?: AnalyticsConfiguration | undefined;

  /**
   * The NLP configuration for the restored data store.
   * @public
   */
  NlpConfiguration?: NlpConfiguration | undefined;

  /**
   * The profile configuration for the restored data store.
   * @public
   */
  ProfileConfiguration?: ProfileConfiguration | undefined;
}

/**
 * @public
 */
export interface RestoreFHIRDatastoreResponse {
  /**
   * The restored data store identifier.
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the restored data store.
   * @public
   */
  DatastoreArn: string | undefined;

  /**
   * The restored data store status.
   * @public
   */
  DatastoreStatus: DatastoreStatus | undefined;

  /**
   * The AWS endpoint for the restored data store.
   * @public
   */
  DatastoreEndpoint: string | undefined;
}

/**
 * @public
 */
export interface StartFHIRExportJobRequest {
  /**
   * The export job name.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The output data configuration supplied when the export job was started.
   *
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * The data store identifier from which files are being exported.
   *
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) used during initiation of the export job.
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * An optional user provided token used for ensuring API idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartFHIRExportJobResponse {
  /**
   * The export job identifier.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * The export job status.
   *
   * @public
   */
  JobStatus: JobStatus | undefined;

  /**
   * The data store identifier from which files are being exported.
   *
   * @public
   */
  DatastoreId?: string | undefined;
}

/**
 * @public
 */
export interface StartFHIRImportJobRequest {
  /**
   * The import job name.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The input properties for the import job request.
   *
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * The output data configuration supplied when the export job was created.
   *
   * @public
   */
  JobOutputDataConfig: OutputDataConfig | undefined;

  /**
   * The data store identifier.
   *
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that grants access permission to HealthLake.
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * The optional user-provided token used for ensuring API idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The validation level of the import job.
   *
   * @public
   */
  ValidationLevel?: ValidationLevel | undefined;

  /**
   * The data transformation profile identifier to use for the import job.
   *
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * The input format of the data to be imported.
   *
   * @public
   */
  InputFormat?: string | undefined;

  /**
   * Specifies whether to enable drift detection for the import job.
   *
   * @public
   */
  DriftDetectionEnabled?: boolean | undefined;

  /**
   * Specifies whether to enable provenance for the import job.
   *
   * @public
   */
  ProvenanceEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface StartFHIRImportJobResponse {
  /**
   * The import job identifier.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * The import job status.
   *
   * @public
   */
  JobStatus: JobStatus | undefined;

  /**
   * The data store identifier.
   *
   * @public
   */
  DatastoreId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that grants access to the data store tags are being added to.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The user-specified key and value pair tags being added to a data store.
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
   * The Amazon Resource Name (ARN) of the data store from which tags are being removed.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The keys for the tags to be removed from the data store.
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
export interface UpdateFHIRDatastoreRequest {
  /**
   * The data store identifier.
   *
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * The data store name.
   *
   * @public
   */
  DatastoreName?: string | undefined;

  /**
   * The analytics configuration for the data store.
   *
   * @public
   */
  AnalyticsConfiguration?: AnalyticsConfiguration | undefined;

  /**
   * The natural language processing (NLP) configuration for the data store.
   *
   * @public
   */
  NlpConfiguration?: NlpConfiguration | undefined;

  /**
   * The profile configuration for the data store.
   *
   * @public
   */
  ProfileConfiguration?: ProfileConfiguration | undefined;

  /**
   * The identity provider configuration for the data store.
   *
   * @public
   */
  IdentityProviderConfiguration?: IdentityProviderConfiguration | undefined;

  /**
   * The backup configuration for the data store.
   * @public
   */
  BackupConfiguration?: BackupConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateFHIRDatastoreResponse {
  /**
   * The data store properties.
   *
   * @public
   */
  DatastoreProperties: DatastoreProperties | undefined;
}
