// smithy-typescript generated code
import type {
  CustomTemplateBase,
  DomainStatus,
  EncryptionType,
  InsightsType,
  JobStatus,
  ManagedNoteTemplate,
  MedicalScribeLanguageCode,
  MedicalScribeMediaEncoding,
  MedicalScribeParticipantRole,
  MedicalScribeSessionControlEventType,
  MedicalScribeStreamStatus,
  PostStreamArtifactGenerationStatus,
  Pronouns,
  ProviderRole,
  Specialty,
  SubscriptionStatus,
} from "./enums";
import type { InternalServerException, ValidationException } from "./errors";

/**
 * @public
 */
export interface ActivateSubscriptionInput {
  /**
   * The unique identifier of the parent Domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The unique identifier of the Subscription.
   *
   * @public
   */
  subscriptionId: string | undefined;
}

/**
 * Complete subscription resource data.
 *
 * @public
 */
export interface SubscriptionDescription {
  /**
   * @public
   */
  domainId: string | undefined;

  /**
   * @public
   */
  subscriptionId: string | undefined;

  /**
   * @public
   */
  arn: string | undefined;

  /**
   * @public
   */
  status: SubscriptionStatus | undefined;

  /**
   * @public
   */
  createdAt: Date | undefined;

  /**
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * @public
   */
  activatedAt?: Date | undefined;

  /**
   * @public
   */
  deactivatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ActivateSubscriptionOutput {
  /**
   * @public
   */
  subscription?: SubscriptionDescription | undefined;
}

/**
 * Details about a generated artifact including location and status
 *
 * @public
 */
export interface ArtifactDetails {
  /**
   * @public
   */
  outputLocation?: string | undefined;

  /**
   * The generation status of the artifact
   *
   * @public
   */
  status?: PostStreamArtifactGenerationStatus | undefined;

  /**
   * The reason for failure if the artifact generation failed
   *
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * Results of clinical note generation including note, transcript, and summary
 *
 * @public
 */
export interface ClinicalNoteGenerationResult {
  /**
   * Details about the generated clinical note
   *
   * @public
   */
  noteResult?: ArtifactDetails | undefined;

  /**
   * Details about the generated transcript
   *
   * @public
   */
  transcriptResult?: ArtifactDetails | undefined;

  /**
   * Details about the generated after visit summary
   *
   * @public
   */
  afterVisitSummaryResult?: ArtifactDetails | undefined;
}

/**
 * Instructions for generating a specific section of a clinical note
 *
 * @public
 */
export interface TemplateSectionInstruction {
  /**
   * The header for this section of the template
   *
   * @public
   */
  sectionHeader: string | undefined;

  /**
   * The instruction for generating this section
   *
   * @public
   */
  sectionInstruction: string | undefined;
}

/**
 * Configuration for using a custom note template with specific instructions
 *
 * @public
 */
export interface CustomTemplate {
  /**
   * The base template type to customize
   *
   * @public
   */
  templateType: CustomTemplateBase | undefined;

  /**
   * Custom instructions for each section of the template
   *
   * @public
   */
  templateInstructions: TemplateSectionInstruction[] | undefined;
}

/**
 * Configuration for using a managed note template
 *
 * @public
 */
export interface ManagedTemplate {
  /**
   * The type of managed template to use
   *
   * @public
   */
  templateType: ManagedNoteTemplate | undefined;
}

/**
 * Settings for the note template to use for clinical note generation
 *
 * @public
 */
export type NoteTemplateSettings =
  | NoteTemplateSettings.CustomTemplateMember
  | NoteTemplateSettings.ManagedTemplateMember
  | NoteTemplateSettings.$UnknownMember;

/**
 * @public
 */
export namespace NoteTemplateSettings {
  /**
   * @public
   */
  export interface ManagedTemplateMember {
    managedTemplate: ManagedTemplate;
    customTemplate?: never;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface CustomTemplateMember {
    managedTemplate?: never;
    customTemplate: CustomTemplate;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    managedTemplate?: never;
    customTemplate?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    managedTemplate: (value: ManagedTemplate) => T;
    customTemplate: (value: CustomTemplate) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Settings for generating clinical notes from the audio stream
 *
 * @public
 */
export interface ClinicalNoteGenerationSettings {
  /**
   * Settings for the note template to use
   *
   * @public
   */
  noteTemplateSettings: NoteTemplateSettings | undefined;
}

/**
 * Response containing custom template information
 *
 * @public
 */
export interface CustomTemplateResponse {
  /**
   * The base template type that was customized
   *
   * @public
   */
  templateType?: CustomTemplateBase | undefined;
}

/**
 * Response containing managed template information
 *
 * @public
 */
export interface ManagedTemplateResponse {
  /**
   * The type of managed template used
   *
   * @public
   */
  templateType?: ManagedNoteTemplate | undefined;
}

/**
 * Response containing note template settings
 *
 * @public
 */
export type NoteTemplateSettingsResponse =
  | NoteTemplateSettingsResponse.CustomTemplateMember
  | NoteTemplateSettingsResponse.ManagedTemplateMember
  | NoteTemplateSettingsResponse.$UnknownMember;

/**
 * @public
 */
export namespace NoteTemplateSettingsResponse {
  /**
   * @public
   */
  export interface ManagedTemplateMember {
    managedTemplate: ManagedTemplateResponse;
    customTemplate?: never;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface CustomTemplateMember {
    managedTemplate?: never;
    customTemplate: CustomTemplateResponse;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    managedTemplate?: never;
    customTemplate?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    managedTemplate: (value: ManagedTemplateResponse) => T;
    customTemplate: (value: CustomTemplateResponse) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Response containing settings for clinical note generation
 *
 * @public
 */
export interface ClinicalNoteGenerationSettingsResponse {
  /**
   * Settings for the note template used
   *
   * @public
   */
  noteTemplateSettings?: NoteTemplateSettingsResponse | undefined;
}

/**
 * Input configuration for creating a web application. Used only in CreateDomain operation input.
 *
 * @public
 */
export interface CreateWebAppConfiguration {
  /**
   * ARN of the IAM role used for EHR operations.
   *
   * @public
   */
  ehrRole: string | undefined;

  /**
   * The Identity Center instance ID to use for creating the application.
   *
   * @public
   */
  idcInstanceId: string | undefined;

  /**
   * The AWS region where Identity Center is configured.
   *
   * @public
   */
  idcRegion: string | undefined;
}

/**
 * @public
 */
export interface CreateDomainInput {
  /**
   * The name for the new Domain.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the KMS key to use for encrypting data in this Domain.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * Configuration for the Domain web application. Optional, but if provided all fields are required.
   *
   * @public
   */
  webAppSetupConfiguration?: CreateWebAppConfiguration | undefined;

  /**
   * Tags to associate with the Domain.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Encryption context for a Domain.
 *
 * @public
 */
export interface EncryptionContext {
  /**
   * The type of encryption key used.
   *
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * The ARN of the KMS key. Only present when encryptionType is CUSTOMER_MANAGED_KEY.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * Configuration for the Domain web application, including Identity Center settings. If provided, all fields are required.
 *
 * @public
 */
export interface WebAppConfiguration {
  /**
   * ARN of the IAM role used for EHR operations.
   *
   * @public
   */
  ehrRole: string | undefined;

  /**
   * The Identity Center application ID associated with this Domain.
   *
   * @public
   */
  idcApplicationId: string | undefined;

  /**
   * The AWS region where Identity Center is configured.
   *
   * @public
   */
  idcRegion: string | undefined;
}

/**
 * @public
 */
export interface CreateDomainOutput {
  /**
   * @public
   */
  domainId: string | undefined;

  /**
   * @public
   */
  arn: string | undefined;

  /**
   * @public
   */
  name: string | undefined;

  /**
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * @public
   */
  encryptionContext?: EncryptionContext | undefined;

  /**
   * @public
   */
  status: DomainStatus | undefined;

  /**
   * @public
   */
  webAppUrl?: string | undefined;

  /**
   * @public
   */
  webAppConfiguration?: WebAppConfiguration | undefined;

  /**
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateSubscriptionInput {
  /**
   * The unique identifier of the parent Domain.
   *
   * @public
   */
  domainId: string | undefined;
}

/**
 * @public
 */
export interface CreateSubscriptionOutput {
  /**
   * @public
   */
  domainId: string | undefined;

  /**
   * @public
   */
  subscriptionId: string | undefined;

  /**
   * @public
   */
  arn: string | undefined;

  /**
   * @public
   */
  status: SubscriptionStatus | undefined;

  /**
   * @public
   */
  createdAt: Date | undefined;

  /**
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * @public
   */
  activatedAt?: Date | undefined;

  /**
   * @public
   */
  deactivatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DeactivateSubscriptionInput {
  /**
   * The unique identifier of the parent Domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The unique identifier of the Subscription.
   *
   * @public
   */
  subscriptionId: string | undefined;
}

/**
 * @public
 */
export interface DeactivateSubscriptionOutput {
  /**
   * @public
   */
  subscription?: SubscriptionDescription | undefined;
}

/**
 * @public
 */
export interface DeleteDomainInput {
  /**
   * The id of the Domain to delete
   *
   * @public
   */
  domainId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainOutput {
  /**
   * The id of the Domain requested for deletion
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The ARN of the Domain that was requested for deletion
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Current status of Domain
   *
   * @public
   */
  status: DomainStatus | undefined;
}

/**
 * @public
 */
export interface GetDomainInput {
  /**
   * The id of the Domain to get
   *
   * @public
   */
  domainId: string | undefined;
}

/**
 * @public
 */
export interface GetDomainOutput {
  /**
   * @public
   */
  domainId: string | undefined;

  /**
   * @public
   */
  arn: string | undefined;

  /**
   * @public
   */
  name: string | undefined;

  /**
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * @public
   */
  encryptionContext?: EncryptionContext | undefined;

  /**
   * @public
   */
  status: DomainStatus | undefined;

  /**
   * @public
   */
  webAppUrl?: string | undefined;

  /**
   * @public
   */
  webAppConfiguration?: WebAppConfiguration | undefined;

  /**
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Tags associated with the Domain
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetMedicalScribeListeningSessionInput {
  /**
   * The Session identifier
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The Domain identifier
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The Subscription identifier
   *
   * @public
   */
  subscriptionId: string | undefined;
}

/**
 * Defines a channel in the audio stream
 *
 * @public
 */
export interface MedicalScribeChannelDefinition {
  /**
   * The channel identifier
   *
   * @public
   */
  channelId: number | undefined;

  /**
   * The role of the participant on this channel
   *
   * @public
   */
  participantRole: MedicalScribeParticipantRole | undefined;
}

/**
 * Results of post-stream actions performed after the audio stream ended
 *
 * @public
 */
export interface MedicalScribePostStreamActionsResult {
  /**
   * Results of clinical note generation
   *
   * @public
   */
  clinicalNoteGenerationResult?: ClinicalNoteGenerationResult | undefined;
}

/**
 * Response containing settings for post-stream actions
 *
 * @public
 */
export interface MedicalScribePostStreamActionSettingsResponse {
  /**
   * @public
   */
  outputS3Uri: string | undefined;

  /**
   * Settings for clinical note generation
   *
   * @public
   */
  clinicalNoteGenerationSettings: ClinicalNoteGenerationSettingsResponse | undefined;
}

/**
 * Detailed information about a Medical Scribe listening session
 *
 * @public
 */
export interface MedicalScribeListeningSessionDetails {
  /**
   * The Session identifier
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * The Domain identifier
   *
   * @public
   */
  domainId?: string | undefined;

  /**
   * The Subscription identifier
   *
   * @public
   */
  subscriptionId?: string | undefined;

  /**
   * The Language Code for the audio in the session
   *
   * @public
   */
  languageCode?: MedicalScribeLanguageCode | undefined;

  /**
   * The sample rate of the input audio
   *
   * @public
   */
  mediaSampleRateHertz?: number | undefined;

  /**
   * The encoding for the input audio
   *
   * @public
   */
  mediaEncoding?: MedicalScribeMediaEncoding | undefined;

  /**
   * Channel definitions for the audio stream
   *
   * @public
   */
  channelDefinitions?: MedicalScribeChannelDefinition[] | undefined;

  /**
   * Settings for post-stream actions
   *
   * @public
   */
  postStreamActionSettings?: MedicalScribePostStreamActionSettingsResponse | undefined;

  /**
   * Results of post-stream actions
   *
   * @public
   */
  postStreamActionResult?: MedicalScribePostStreamActionsResult | undefined;

  /**
   * Indicates whether encounter context was provided
   *
   * @public
   */
  encounterContextProvided?: boolean | undefined;

  /**
   * The current status of the stream
   *
   * @public
   */
  streamStatus?: MedicalScribeStreamStatus | undefined;

  /**
   * The timestamp when the stream was created
   *
   * @public
   */
  streamCreationTime?: Date | undefined;

  /**
   * The timestamp when the stream ended
   *
   * @public
   */
  streamEndTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetMedicalScribeListeningSessionOutput {
  /**
   * Details about the Medical Scribe listening session
   *
   * @public
   */
  medicalScribeListeningSessionDetails?: MedicalScribeListeningSessionDetails | undefined;
}

/**
 * @public
 */
export interface GetPatientInsightsJobRequest {
  /**
   * @public
   */
  domainId: string | undefined;

  /**
   * @public
   */
  jobId: string | undefined;
}

/**
 * Details for an encounter
 *
 * @public
 */
export interface PatientInsightsEncounterContext {
  /**
   * Chief complaint for the visit
   *
   * @public
   */
  encounterReason: string | undefined;
}

/**
 * FHIR server configuration for input data source
 *
 * @public
 */
export interface FHIRServer {
  /**
   * FHIR server endpoint URL for accessing patient data.
   *
   * @public
   */
  fhirEndpoint: string | undefined;

  /**
   * OAuth token for authenticating with the FHIR server.
   *
   * @public
   */
  oauthToken?: string | undefined;
}

/**
 * S3 uri for input data source
 *
 * @public
 */
export interface S3Source {
  /**
   * The S3 URI.
   *
   * @public
   */
  uri: string | undefined;
}

/**
 * Configuration details for input patient data
 *
 * @public
 */
export interface InputDataConfig {
  /**
   * FHIR server configuration to retrieve patient data.
   *
   * @public
   */
  fhirServer?: FHIRServer | undefined;

  /**
   * List of S3 sources containing patient data.
   *
   * @public
   */
  s3Sources?: S3Source[] | undefined;
}

/**
 * Details for insights that user wants to generate
 *
 * @public
 */
export interface InsightsContext {
  /**
   * @public
   */
  insightsType: InsightsType | undefined;
}

/**
 * Output of patient insights job
 *
 * @public
 */
export interface InsightsOutput {
  /**
   * @public
   */
  uri: string | undefined;
}

/**
 * Configuration details for insights output.
 *
 * @public
 */
export interface OutputDataConfig {
  /**
   * S3 URI where the insights output will be stored.
   *
   * @public
   */
  s3OutputPath: string | undefined;
}

/**
 * Details for a patient
 *
 * @public
 */
export interface PatientInsightsPatientContext {
  /**
   * Unique identifier of the patient
   *
   * @public
   */
  patientId: string | undefined;

  /**
   * Date of birth of the patient.
   *
   * @public
   */
  dateOfBirth?: string | undefined;

  /**
   * Pronouns preferred by the patient.
   *
   * @public
   */
  pronouns?: Pronouns | undefined;
}

/**
 * Details for user initiating insights job
 *
 * @public
 */
export interface UserContext {
  /**
   * @public
   */
  role: ProviderRole | undefined;

  /**
   * Unique identifier of the user
   *
   * @public
   */
  userId: string | undefined;

  /**
   * @public
   */
  specialty?: Specialty | undefined;
}

/**
 * @public
 */
export interface GetPatientInsightsJobResponse {
  /**
   * @public
   */
  jobId: string | undefined;

  /**
   * @public
   */
  jobArn: string | undefined;

  /**
   * @public
   */
  jobStatus: JobStatus | undefined;

  /**
   * Date and time the patient insights job was submitted.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * Date and time the patient insights job was last updated.
   *
   * @public
   */
  updatedTime?: Date | undefined;

  /**
   * @public
   */
  insightsOutput?: InsightsOutput | undefined;

  /**
   * Contains information about the status of a job.
   *
   * @public
   */
  statusDetails?: string | undefined;

  /**
   * @public
   */
  patientContext: PatientInsightsPatientContext | undefined;

  /**
   * @public
   */
  insightsContext: InsightsContext | undefined;

  /**
   * @public
   */
  encounterContext: PatientInsightsEncounterContext | undefined;

  /**
   * @public
   */
  userContext: UserContext | undefined;

  /**
   * @public
   */
  inputDataConfig: InputDataConfig | undefined;

  /**
   * @public
   */
  outputDataConfig: OutputDataConfig | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionInput {
  /**
   * The unique identifier of the parent Domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The unique identifier of the Subscription.
   *
   * @public
   */
  subscriptionId: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionOutput {
  /**
   * @public
   */
  subscription?: SubscriptionDescription | undefined;
}

/**
 * @public
 */
export interface ListDomainsInput {
  /**
   * Filter by Domain status.
   *
   * @public
   */
  status?: DomainStatus | undefined;

  /**
   * Maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Token for pagination.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about a Domain.
 *
 * @public
 */
export interface DomainSummary {
  /**
   * The unique identifier of the Domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * @public
   */
  arn: string | undefined;

  /**
   * @public
   */
  name: string | undefined;

  /**
   * @public
   */
  status: DomainStatus | undefined;

  /**
   * The timestamp when the Domain was created.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface ListDomainsOutput {
  /**
   * List of Domains.
   *
   * @public
   */
  domains: DomainSummary[] | undefined;

  /**
   * Token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionsInput {
  /**
   * The unique identifier of the parent Domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * Maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Token for pagination.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionsOutput {
  /**
   * List of Subscriptions.
   *
   * @public
   */
  subscriptions: SubscriptionDescription[] | undefined;

  /**
   * Token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The ARN of the resource to list tags for
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * The tags associated with the resource
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * An event containing audio data for the Medical Scribe stream
 *
 * @public
 */
export interface MedicalScribeAudioEvent {
  /**
   * The audio data chunk
   *
   * @public
   */
  audioChunk: Uint8Array | undefined;
}

/**
 * An event containing raw binary audio data for the Medical Scribe stream. The audio is sent as a raw binary payload rather than as a base64-encoded value.
 *
 * @public
 */
export interface MedicalScribeBinaryAudioEvent {
  /**
   * The raw binary audio data chunk
   *
   * @public
   */
  audioChunk: Uint8Array | undefined;
}

/**
 * Context information about the clinical encounter
 *
 * @public
 */
export interface EncounterContext {
  /**
   * Unstructured context information in markdown format
   *
   * @public
   */
  unstructuredContext?: string | undefined;
}

/**
 * Settings for actions to perform after the audio stream ends
 *
 * @public
 */
export interface MedicalScribePostStreamActionSettings {
  /**
   * @public
   */
  outputS3Uri: string | undefined;

  /**
   * Settings for clinical note generation
   *
   * @public
   */
  clinicalNoteGenerationSettings: ClinicalNoteGenerationSettings | undefined;
}

/**
 * An event containing configuration for the Medical Scribe session
 *
 * @public
 */
export interface MedicalScribeConfigurationEvent {
  /**
   * Settings for actions to perform after the stream ends
   *
   * @public
   */
  postStreamActionSettings: MedicalScribePostStreamActionSettings | undefined;

  /**
   * Channel definitions for the audio stream
   *
   * @public
   */
  channelDefinitions?: MedicalScribeChannelDefinition[] | undefined;

  /**
   * Context information about the clinical encounter
   *
   * @public
   */
  encounterContext?: EncounterContext | undefined;
}

/**
 * An event for controlling the Medical Scribe session
 *
 * @public
 */
export interface MedicalScribeSessionControlEvent {
  /**
   * The type of session control event
   *
   * @public
   */
  type?: MedicalScribeSessionControlEventType | undefined;
}

/**
 * Input stream for Medical Scribe containing audio and configuration events
 *
 * @public
 */
export type MedicalScribeInputStream =
  | MedicalScribeInputStream.AudioEventMember
  | MedicalScribeInputStream.BinaryAudioEventMember
  | MedicalScribeInputStream.ConfigurationEventMember
  | MedicalScribeInputStream.SessionControlEventMember
  | MedicalScribeInputStream.$UnknownMember;

/**
 * @public
 */
export namespace MedicalScribeInputStream {
  /**
   * @public
   */
  export interface AudioEventMember {
    audioEvent: MedicalScribeAudioEvent;
    binaryAudioEvent?: never;
    sessionControlEvent?: never;
    configurationEvent?: never;
    $unknown?: never;
  }

  /**
   * An event containing raw binary audio data for the Medical Scribe stream. The audio is sent as a raw binary payload rather than as a base64-encoded value.
   *
   * @public
   */
  export interface BinaryAudioEventMember {
    audioEvent?: never;
    binaryAudioEvent: MedicalScribeBinaryAudioEvent;
    sessionControlEvent?: never;
    configurationEvent?: never;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface SessionControlEventMember {
    audioEvent?: never;
    binaryAudioEvent?: never;
    sessionControlEvent: MedicalScribeSessionControlEvent;
    configurationEvent?: never;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface ConfigurationEventMember {
    audioEvent?: never;
    binaryAudioEvent?: never;
    sessionControlEvent?: never;
    configurationEvent: MedicalScribeConfigurationEvent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    audioEvent?: never;
    binaryAudioEvent?: never;
    sessionControlEvent?: never;
    configurationEvent?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    audioEvent: (value: MedicalScribeAudioEvent) => T;
    binaryAudioEvent: (value: MedicalScribeBinaryAudioEvent) => T;
    sessionControlEvent: (value: MedicalScribeSessionControlEvent) => T;
    configurationEvent: (value: MedicalScribeConfigurationEvent) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface StartMedicalScribeListeningSessionInput {
  /**
   * The Session identifier
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The Domain identifier
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The Subscription identifier
   *
   * @public
   */
  subscriptionId: string | undefined;

  /**
   * The Language Code for the audio in the session
   *
   * @public
   */
  languageCode: MedicalScribeLanguageCode | undefined;

  /**
   * The sample rate of the input audio
   *
   * @public
   */
  mediaSampleRateHertz: number | undefined;

  /**
   * The encoding for the input audio
   *
   * @public
   */
  mediaEncoding: MedicalScribeMediaEncoding | undefined;

  /**
   * @public
   */
  inputStream?: AsyncIterable<MedicalScribeInputStream> | undefined;
}

/**
 * A segment of transcript text with timing and channel information
 *
 * @public
 */
export interface MedicalScribeTranscriptSegment {
  /**
   * The unique identifier for this segment
   *
   * @public
   */
  segmentId?: string | undefined;

  /**
   * The offset from audio start when the audio for this segment begins
   *
   * @public
   */
  audioBeginOffset?: number | undefined;

  /**
   * The offset from audio start when the audio for this segment ends
   *
   * @public
   */
  audioEndOffset?: number | undefined;

  /**
   * Indicates whether this is a partial or final transcript
   *
   * @public
   */
  isPartial?: boolean | undefined;

  /**
   * The channel identifier for this segment
   *
   * @public
   */
  channelId?: string | undefined;

  /**
   * The transcript text content
   *
   * @public
   */
  content?: string | undefined;
}

/**
 * An event containing transcript data from the Medical Scribe stream
 *
 * @public
 */
export interface MedicalScribeTranscriptEvent {
  /**
   * A segment of the transcript
   *
   * @public
   */
  transcriptSegment?: MedicalScribeTranscriptSegment | undefined;
}

/**
 * Output stream from Medical Scribe containing transcript events and errors
 *
 * @public
 */
export type MedicalScribeOutputStream =
  | MedicalScribeOutputStream.InternalFailureExceptionMember
  | MedicalScribeOutputStream.TranscriptEventMember
  | MedicalScribeOutputStream.ValidationExceptionMember
  | MedicalScribeOutputStream.$UnknownMember;

/**
 * @public
 */
export namespace MedicalScribeOutputStream {
  /**
   * @public
   */
  export interface TranscriptEventMember {
    transcriptEvent: MedicalScribeTranscriptEvent;
    internalFailureException?: never;
    validationException?: never;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface InternalFailureExceptionMember {
    transcriptEvent?: never;
    internalFailureException: InternalServerException;
    validationException?: never;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface ValidationExceptionMember {
    transcriptEvent?: never;
    internalFailureException?: never;
    validationException: ValidationException;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    transcriptEvent?: never;
    internalFailureException?: never;
    validationException?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    transcriptEvent: (value: MedicalScribeTranscriptEvent) => T;
    internalFailureException: (value: InternalServerException) => T;
    validationException: (value: ValidationException) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface StartMedicalScribeListeningSessionOutput {
  /**
   * The Session identifier
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * The Domain identifier
   *
   * @public
   */
  domainId?: string | undefined;

  /**
   * The Subscription identifier
   *
   * @public
   */
  subscriptionId?: string | undefined;

  /**
   * The Request identifier
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The Language Code for the audio in the session
   *
   * @public
   */
  languageCode?: MedicalScribeLanguageCode | undefined;

  /**
   * The sample rate of the input audio
   *
   * @public
   */
  mediaSampleRateHertz?: number | undefined;

  /**
   * The encoding for the input audio
   *
   * @public
   */
  mediaEncoding?: MedicalScribeMediaEncoding | undefined;

  /**
   * The output stream containing transcript events
   *
   * @public
   */
  responseStream?: AsyncIterable<MedicalScribeOutputStream> | undefined;
}

/**
 * @public
 */
export interface StartPatientInsightsJobRequest {
  /**
   * @public
   */
  domainId: string | undefined;

  /**
   * @public
   */
  patientContext: PatientInsightsPatientContext | undefined;

  /**
   * @public
   */
  insightsContext: InsightsContext | undefined;

  /**
   * @public
   */
  encounterContext: PatientInsightsEncounterContext | undefined;

  /**
   * @public
   */
  userContext: UserContext | undefined;

  /**
   * @public
   */
  inputDataConfig: InputDataConfig | undefined;

  /**
   * @public
   */
  outputDataConfig: OutputDataConfig | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartPatientInsightsJobResponse {
  /**
   * @public
   */
  jobArn: string | undefined;

  /**
   * @public
   */
  jobId: string | undefined;

  /**
   * Date and time the patient insights job was submitted.
   *
   * @public
   */
  creationTime?: Date | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The ARN of the resource to tag
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags to add to the resource
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * The ARN of the resource to untag
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tag keys to remove from the resource
   *
   * @public
   */
  tagKeys: string[] | undefined;
}
