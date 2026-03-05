// smithy-typescript generated code
import {
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
import { InternalServerException, ValidationException } from "./errors";

/**
 * @public
 */
export interface ActivateSubscriptionInput {
  /**
   * <p>The unique identifier of the parent Domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The unique identifier of the Subscription.</p>
   * @public
   */
  subscriptionId: string | undefined;
}

/**
 * <p>Complete subscription resource data.</p>
 * @public
 */
export interface SubscriptionDescription {
  /**
   * <p/>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p/>
   * @public
   */
  subscriptionId: string | undefined;

  /**
   * <p/>
   * @public
   */
  arn: string | undefined;

  /**
   * <p/>
   * @public
   */
  status: SubscriptionStatus | undefined;

  /**
   * <p/>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p/>
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * <p/>
   * @public
   */
  activatedAt?: Date | undefined;

  /**
   * <p/>
   * @public
   */
  deactivatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ActivateSubscriptionOutput {
  /**
   * <p/>
   * @public
   */
  subscription?: SubscriptionDescription | undefined;
}

/**
 * <p>Details about a generated artifact including location and status</p>
 * @public
 */
export interface ArtifactDetails {
  /**
   * <p/>
   * @public
   */
  outputLocation?: string | undefined;

  /**
   * <p>The generation status of the artifact</p>
   * @public
   */
  status?: PostStreamArtifactGenerationStatus | undefined;

  /**
   * <p>The reason for failure if the artifact generation failed</p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * <p>Results of clinical note generation including note, transcript, and summary</p>
 * @public
 */
export interface ClinicalNoteGenerationResult {
  /**
   * <p>Details about the generated clinical note</p>
   * @public
   */
  noteResult?: ArtifactDetails | undefined;

  /**
   * <p>Details about the generated transcript</p>
   * @public
   */
  transcriptResult?: ArtifactDetails | undefined;

  /**
   * <p>Details about the generated after visit summary</p>
   * @public
   */
  afterVisitSummaryResult?: ArtifactDetails | undefined;
}

/**
 * <p>Instructions for generating a specific section of a clinical note</p>
 * @public
 */
export interface TemplateSectionInstruction {
  /**
   * <p>The header for this section of the template</p>
   * @public
   */
  sectionHeader: string | undefined;

  /**
   * <p>The instruction for generating this section</p>
   * @public
   */
  sectionInstruction: string | undefined;
}

/**
 * <p>Configuration for using a custom note template with specific instructions</p>
 * @public
 */
export interface CustomTemplate {
  /**
   * <p>The base template type to customize</p>
   * @public
   */
  templateType: CustomTemplateBase | undefined;

  /**
   * <p>Custom instructions for each section of the template</p>
   * @public
   */
  templateInstructions: TemplateSectionInstruction[] | undefined;
}

/**
 * <p>Configuration for using a managed note template</p>
 * @public
 */
export interface ManagedTemplate {
  /**
   * <p>The type of managed template to use</p>
   * @public
   */
  templateType: ManagedNoteTemplate | undefined;
}

/**
 * <p>Settings for the note template to use for clinical note generation</p>
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
   * <p/>
   * @public
   */
  export interface ManagedTemplateMember {
    managedTemplate: ManagedTemplate;
    customTemplate?: never;
    $unknown?: never;
  }

  /**
   * <p/>
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
 * <p>Settings for generating clinical notes from the audio stream</p>
 * @public
 */
export interface ClinicalNoteGenerationSettings {
  /**
   * <p>Settings for the note template to use</p>
   * @public
   */
  noteTemplateSettings: NoteTemplateSettings | undefined;
}

/**
 * <p>Response containing custom template information</p>
 * @public
 */
export interface CustomTemplateResponse {
  /**
   * <p>The base template type that was customized</p>
   * @public
   */
  templateType?: CustomTemplateBase | undefined;
}

/**
 * <p>Response containing managed template information</p>
 * @public
 */
export interface ManagedTemplateResponse {
  /**
   * <p>The type of managed template used</p>
   * @public
   */
  templateType?: ManagedNoteTemplate | undefined;
}

/**
 * <p>Response containing note template settings</p>
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
   * <p/>
   * @public
   */
  export interface ManagedTemplateMember {
    managedTemplate: ManagedTemplateResponse;
    customTemplate?: never;
    $unknown?: never;
  }

  /**
   * <p/>
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
 * <p>Response containing settings for clinical note generation</p>
 * @public
 */
export interface ClinicalNoteGenerationSettingsResponse {
  /**
   * <p>Settings for the note template used</p>
   * @public
   */
  noteTemplateSettings?: NoteTemplateSettingsResponse | undefined;
}

/**
 * <p>Input configuration for creating a Pulse web application. Used only in CreateDomain operation input.</p>
 * @public
 */
export interface CreateWebAppConfiguration {
  /**
   * <p>ARN of the IAM role used for EHR operations.</p>
   * @public
   */
  ehrRole: string | undefined;

  /**
   * <p>The Identity Center instance ID to use for creating the application.</p>
   * @public
   */
  idcInstanceId: string | undefined;

  /**
   * <p>The AWS region where Identity Center is configured.</p>
   * @public
   */
  idcRegion: string | undefined;
}

/**
 * @public
 */
export interface CreateDomainInput {
  /**
   * <p>The name for the new Domain.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the KMS key to use for encrypting data in this Domain.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>Configuration for the Domain web application. Optional, but if provided all fields are required.</p>
   * @public
   */
  webAppSetupConfiguration?: CreateWebAppConfiguration | undefined;

  /**
   * <p>Tags to associate with the Domain.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Encryption context for a Domain.</p>
 * @public
 */
export interface EncryptionContext {
  /**
   * <p>The type of encryption key used.</p>
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * <p>The ARN of the KMS key. Only present when encryptionType is CUSTOMER_MANAGED_KEY.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * <p>Configuration for the Domain web application, including Identity Center settings. If provided, all fields are required.</p>
 * @public
 */
export interface WebAppConfiguration {
  /**
   * <p>ARN of the IAM role used for EHR operations.</p>
   * @public
   */
  ehrRole: string | undefined;

  /**
   * <p>The Identity Center application ID associated with this Domain.</p>
   * @public
   */
  idcApplicationId: string | undefined;

  /**
   * <p>The AWS region where Identity Center is configured.</p>
   * @public
   */
  idcRegion: string | undefined;
}

/**
 * @public
 */
export interface CreateDomainOutput {
  /**
   * <p/>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p/>
   * @public
   */
  arn: string | undefined;

  /**
   * <p/>
   * @public
   */
  name: string | undefined;

  /**
   * <p/>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p/>
   * @public
   */
  encryptionContext?: EncryptionContext | undefined;

  /**
   * <p/>
   * @public
   */
  status: DomainStatus | undefined;

  /**
   * <p/>
   * @public
   */
  webAppUrl?: string | undefined;

  /**
   * <p/>
   * @public
   */
  webAppConfiguration?: WebAppConfiguration | undefined;

  /**
   * <p/>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateSubscriptionInput {
  /**
   * <p>The unique identifier of the parent Domain.</p>
   * @public
   */
  domainId: string | undefined;
}

/**
 * @public
 */
export interface CreateSubscriptionOutput {
  /**
   * <p/>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p/>
   * @public
   */
  subscriptionId: string | undefined;

  /**
   * <p/>
   * @public
   */
  arn: string | undefined;

  /**
   * <p/>
   * @public
   */
  status: SubscriptionStatus | undefined;

  /**
   * <p/>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p/>
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * <p/>
   * @public
   */
  activatedAt?: Date | undefined;

  /**
   * <p/>
   * @public
   */
  deactivatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DeactivateSubscriptionInput {
  /**
   * <p>The unique identifier of the parent Domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The unique identifier of the Subscription.</p>
   * @public
   */
  subscriptionId: string | undefined;
}

/**
 * @public
 */
export interface DeactivateSubscriptionOutput {
  /**
   * <p/>
   * @public
   */
  subscription?: SubscriptionDescription | undefined;
}

/**
 * @public
 */
export interface DeleteDomainInput {
  /**
   * <p>The id of the Domain to delete</p>
   * @public
   */
  domainId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainOutput {
  /**
   * <p>The id of the Domain requested for deletion</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ARN of the Domain that was requested for deletion</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Current status of Domain</p>
   * @public
   */
  status: DomainStatus | undefined;
}

/**
 * @public
 */
export interface GetDomainInput {
  /**
   * <p>The id of the Domain to get</p>
   * @public
   */
  domainId: string | undefined;
}

/**
 * @public
 */
export interface GetDomainOutput {
  /**
   * <p/>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p/>
   * @public
   */
  arn: string | undefined;

  /**
   * <p/>
   * @public
   */
  name: string | undefined;

  /**
   * <p/>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p/>
   * @public
   */
  encryptionContext?: EncryptionContext | undefined;

  /**
   * <p/>
   * @public
   */
  status: DomainStatus | undefined;

  /**
   * <p/>
   * @public
   */
  webAppUrl?: string | undefined;

  /**
   * <p/>
   * @public
   */
  webAppConfiguration?: WebAppConfiguration | undefined;

  /**
   * <p/>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Tags associated with the Domain</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetMedicalScribeListeningSessionInput {
  /**
   * <p>The Session identifier</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The Domain identifier</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The Subscription identifier</p>
   * @public
   */
  subscriptionId: string | undefined;
}

/**
 * <p>Defines a channel in the audio stream</p>
 * @public
 */
export interface MedicalScribeChannelDefinition {
  /**
   * <p>The channel identifier</p>
   * @public
   */
  channelId: number | undefined;

  /**
   * <p>The role of the participant on this channel</p>
   * @public
   */
  participantRole: MedicalScribeParticipantRole | undefined;
}

/**
 * <p>Results of post-stream actions performed after the audio stream ended</p>
 * @public
 */
export interface MedicalScribePostStreamActionsResult {
  /**
   * <p>Results of clinical note generation</p>
   * @public
   */
  clinicalNoteGenerationResult?: ClinicalNoteGenerationResult | undefined;
}

/**
 * <p>Response containing settings for post-stream actions</p>
 * @public
 */
export interface MedicalScribePostStreamActionSettingsResponse {
  /**
   * <p/>
   * @public
   */
  outputS3Uri: string | undefined;

  /**
   * <p>Settings for clinical note generation</p>
   * @public
   */
  clinicalNoteGenerationSettings: ClinicalNoteGenerationSettingsResponse | undefined;
}

/**
 * <p>Detailed information about a Medical Scribe listening session</p>
 * @public
 */
export interface MedicalScribeListeningSessionDetails {
  /**
   * <p>The Session identifier</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>The Domain identifier</p>
   * @public
   */
  domainId?: string | undefined;

  /**
   * <p>The Subscription identifier</p>
   * @public
   */
  subscriptionId?: string | undefined;

  /**
   * <p>The Language Code for the audio in the session</p>
   * @public
   */
  languageCode?: MedicalScribeLanguageCode | undefined;

  /**
   * <p>The sample rate of the input audio</p>
   * @public
   */
  mediaSampleRateHertz?: number | undefined;

  /**
   * <p>The encoding for the input audio</p>
   * @public
   */
  mediaEncoding?: MedicalScribeMediaEncoding | undefined;

  /**
   * <p>Channel definitions for the audio stream</p>
   * @public
   */
  channelDefinitions?: MedicalScribeChannelDefinition[] | undefined;

  /**
   * <p>Settings for post-stream actions</p>
   * @public
   */
  postStreamActionSettings?: MedicalScribePostStreamActionSettingsResponse | undefined;

  /**
   * <p>Results of post-stream actions</p>
   * @public
   */
  postStreamActionResult?: MedicalScribePostStreamActionsResult | undefined;

  /**
   * <p>Indicates whether encounter context was provided</p>
   * @public
   */
  encounterContextProvided?: boolean | undefined;

  /**
   * <p>The current status of the stream</p>
   * @public
   */
  streamStatus?: MedicalScribeStreamStatus | undefined;

  /**
   * <p>The timestamp when the stream was created</p>
   * @public
   */
  streamCreationTime?: Date | undefined;

  /**
   * <p>The timestamp when the stream ended</p>
   * @public
   */
  streamEndTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetMedicalScribeListeningSessionOutput {
  /**
   * <p>Details about the Medical Scribe listening session</p>
   * @public
   */
  medicalScribeListeningSessionDetails?: MedicalScribeListeningSessionDetails | undefined;
}

/**
 * @public
 */
export interface GetPatientInsightsJobRequest {
  /**
   * <p/>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p/>
   * @public
   */
  jobId: string | undefined;
}

/**
 * <p>Details for an encounter</p>
 * @public
 */
export interface PatientInsightsEncounterContext {
  /**
   * <p>Chief complaint for the visit</p>
   * @public
   */
  encounterReason: string | undefined;
}

/**
 * <p>FHIR server configuration for input data source</p>
 * @public
 */
export interface FHIRServer {
  /**
   * <p>FHIR server endpoint URL for accessing patient data.</p>
   * @public
   */
  fhirEndpoint: string | undefined;

  /**
   * <p>OAuth token for authenticating with the FHIR server.</p>
   * @public
   */
  oauthToken?: string | undefined;
}

/**
 * <p>S3 uri for input data source</p>
 * @public
 */
export interface S3Source {
  /**
   * <p>The S3 URI.</p>
   * @public
   */
  uri: string | undefined;
}

/**
 * <p>Configuration details for input patient data</p>
 * @public
 */
export interface InputDataConfig {
  /**
   * <p>FHIR server configuration to retrieve patient data.</p>
   * @public
   */
  fhirServer?: FHIRServer | undefined;

  /**
   * <p>List of S3 sources containing patient data.</p>
   * @public
   */
  s3Sources?: S3Source[] | undefined;
}

/**
 * <p>Details for insights that user wants to generate</p>
 * @public
 */
export interface InsightsContext {
  /**
   * <p/>
   * @public
   */
  insightsType: InsightsType | undefined;
}

/**
 * <p>Output of patient insights job</p>
 * @public
 */
export interface InsightsOutput {
  /**
   * <p/>
   * @public
   */
  uri: string | undefined;
}

/**
 * <p>Configuration details for insights output.</p>
 * @public
 */
export interface OutputDataConfig {
  /**
   * <p>S3 URI where the insights output will be stored.</p>
   * @public
   */
  s3OutputPath: string | undefined;
}

/**
 * <p>Details for a patient</p>
 * @public
 */
export interface PatientInsightsPatientContext {
  /**
   * <p>Unique identifier of the patient</p>
   * @public
   */
  patientId: string | undefined;

  /**
   * <p>Date of birth of the patient.</p>
   * @public
   */
  dateOfBirth?: string | undefined;

  /**
   * <p>Pronouns preferred by the patient.</p>
   * @public
   */
  pronouns?: Pronouns | undefined;
}

/**
 * <p>Details for user initiating insights job</p>
 * @public
 */
export interface UserContext {
  /**
   * <p/>
   * @public
   */
  role: ProviderRole | undefined;

  /**
   * <p>Unique identifier of the user</p>
   * @public
   */
  userId: string | undefined;

  /**
   * <p/>
   * @public
   */
  specialty?: Specialty | undefined;
}

/**
 * @public
 */
export interface GetPatientInsightsJobResponse {
  /**
   * <p/>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p/>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p/>
   * @public
   */
  jobStatus: JobStatus | undefined;

  /**
   * <p>Date and time the patient insights job was submitted.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>Date and time the patient insights job was last updated.</p>
   * @public
   */
  updatedTime?: Date | undefined;

  /**
   * <p/>
   * @public
   */
  insightsOutput?: InsightsOutput | undefined;

  /**
   * <p>Contains information about the status of a job.</p>
   * @public
   */
  statusDetails?: string | undefined;

  /**
   * <p/>
   * @public
   */
  patientContext: PatientInsightsPatientContext | undefined;

  /**
   * <p/>
   * @public
   */
  insightsContext: InsightsContext | undefined;

  /**
   * <p/>
   * @public
   */
  encounterContext: PatientInsightsEncounterContext | undefined;

  /**
   * <p/>
   * @public
   */
  userContext: UserContext | undefined;

  /**
   * <p/>
   * @public
   */
  inputDataConfig: InputDataConfig | undefined;

  /**
   * <p/>
   * @public
   */
  outputDataConfig: OutputDataConfig | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionInput {
  /**
   * <p>The unique identifier of the parent Domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The unique identifier of the Subscription.</p>
   * @public
   */
  subscriptionId: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionOutput {
  /**
   * <p/>
   * @public
   */
  subscription?: SubscriptionDescription | undefined;
}

/**
 * @public
 */
export interface ListDomainsInput {
  /**
   * <p>Filter by Domain status.</p>
   * @public
   */
  status?: DomainStatus | undefined;

  /**
   * <p>Maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Token for pagination.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Summary information about a Domain.</p>
 * @public
 */
export interface DomainSummary {
  /**
   * <p>The unique identifier of the Domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p/>
   * @public
   */
  arn: string | undefined;

  /**
   * <p/>
   * @public
   */
  name: string | undefined;

  /**
   * <p/>
   * @public
   */
  status: DomainStatus | undefined;

  /**
   * <p>The timestamp when the Domain was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface ListDomainsOutput {
  /**
   * <p>List of Domains.</p>
   * @public
   */
  domains: DomainSummary[] | undefined;

  /**
   * <p>Token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionsInput {
  /**
   * <p>The unique identifier of the parent Domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>Maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Token for pagination.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionsOutput {
  /**
   * <p>List of Subscriptions.</p>
   * @public
   */
  subscriptions: SubscriptionDescription[] | undefined;

  /**
   * <p>Token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The ARN of the resource to list tags for</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The tags associated with the resource</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>An event containing audio data for the Medical Scribe stream</p>
 * @public
 */
export interface MedicalScribeAudioEvent {
  /**
   * <p>The audio data chunk</p>
   * @public
   */
  audioChunk: Uint8Array | undefined;
}

/**
 * <p>Context information about the clinical encounter</p>
 * @public
 */
export interface EncounterContext {
  /**
   * <p>Unstructured context information in markdown format</p>
   * @public
   */
  unstructuredContext?: string | undefined;
}

/**
 * <p>Settings for actions to perform after the audio stream ends</p>
 * @public
 */
export interface MedicalScribePostStreamActionSettings {
  /**
   * <p/>
   * @public
   */
  outputS3Uri: string | undefined;

  /**
   * <p>Settings for clinical note generation</p>
   * @public
   */
  clinicalNoteGenerationSettings: ClinicalNoteGenerationSettings | undefined;
}

/**
 * <p>An event containing configuration for the Medical Scribe session</p>
 * @public
 */
export interface MedicalScribeConfigurationEvent {
  /**
   * <p>Settings for actions to perform after the stream ends</p>
   * @public
   */
  postStreamActionSettings: MedicalScribePostStreamActionSettings | undefined;

  /**
   * <p>Channel definitions for the audio stream</p>
   * @public
   */
  channelDefinitions?: MedicalScribeChannelDefinition[] | undefined;

  /**
   * <p>Context information about the clinical encounter</p>
   * @public
   */
  encounterContext?: EncounterContext | undefined;
}

/**
 * <p>An event for controlling the Medical Scribe session</p>
 * @public
 */
export interface MedicalScribeSessionControlEvent {
  /**
   * <p>The type of session control event</p>
   * @public
   */
  type?: MedicalScribeSessionControlEventType | undefined;
}

/**
 * <p>Input stream for Medical Scribe containing audio and configuration events</p>
 * @public
 */
export type MedicalScribeInputStream =
  | MedicalScribeInputStream.AudioEventMember
  | MedicalScribeInputStream.ConfigurationEventMember
  | MedicalScribeInputStream.SessionControlEventMember
  | MedicalScribeInputStream.$UnknownMember;

/**
 * @public
 */
export namespace MedicalScribeInputStream {
  /**
   * <p/>
   * @public
   */
  export interface AudioEventMember {
    audioEvent: MedicalScribeAudioEvent;
    sessionControlEvent?: never;
    configurationEvent?: never;
    $unknown?: never;
  }

  /**
   * <p/>
   * @public
   */
  export interface SessionControlEventMember {
    audioEvent?: never;
    sessionControlEvent: MedicalScribeSessionControlEvent;
    configurationEvent?: never;
    $unknown?: never;
  }

  /**
   * <p/>
   * @public
   */
  export interface ConfigurationEventMember {
    audioEvent?: never;
    sessionControlEvent?: never;
    configurationEvent: MedicalScribeConfigurationEvent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    audioEvent?: never;
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
   * <p>The Session identifier</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The Domain identifier</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The Subscription identifier</p>
   * @public
   */
  subscriptionId: string | undefined;

  /**
   * <p>The Language Code for the audio in the session</p>
   * @public
   */
  languageCode: MedicalScribeLanguageCode | undefined;

  /**
   * <p>The sample rate of the input audio</p>
   * @public
   */
  mediaSampleRateHertz: number | undefined;

  /**
   * <p>The encoding for the input audio</p>
   * @public
   */
  mediaEncoding: MedicalScribeMediaEncoding | undefined;

  /**
   * <p/>
   * @public
   */
  inputStream?: AsyncIterable<MedicalScribeInputStream> | undefined;
}

/**
 * <p>A segment of transcript text with timing and channel information</p>
 * @public
 */
export interface MedicalScribeTranscriptSegment {
  /**
   * <p>The unique identifier for this segment</p>
   * @public
   */
  segmentId?: string | undefined;

  /**
   * <p>The offset from audio start when the audio for this segment begins</p>
   * @public
   */
  audioBeginOffset?: number | undefined;

  /**
   * <p>The offset from audio start when the audio for this segment ends</p>
   * @public
   */
  audioEndOffset?: number | undefined;

  /**
   * <p>Indicates whether this is a partial or final transcript</p>
   * @public
   */
  isPartial?: boolean | undefined;

  /**
   * <p>The channel identifier for this segment</p>
   * @public
   */
  channelId?: string | undefined;

  /**
   * <p>The transcript text content</p>
   * @public
   */
  content?: string | undefined;
}

/**
 * <p>An event containing transcript data from the Medical Scribe stream</p>
 * @public
 */
export interface MedicalScribeTranscriptEvent {
  /**
   * <p>A segment of the transcript</p>
   * @public
   */
  transcriptSegment?: MedicalScribeTranscriptSegment | undefined;
}

/**
 * <p>Output stream from Medical Scribe containing transcript events and errors</p>
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
   * <p/>
   * @public
   */
  export interface TranscriptEventMember {
    transcriptEvent: MedicalScribeTranscriptEvent;
    internalFailureException?: never;
    validationException?: never;
    $unknown?: never;
  }

  /**
   * <p/>
   * @public
   */
  export interface InternalFailureExceptionMember {
    transcriptEvent?: never;
    internalFailureException: InternalServerException;
    validationException?: never;
    $unknown?: never;
  }

  /**
   * <p/>
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
   * <p>The Session identifier</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>The Domain identifier</p>
   * @public
   */
  domainId?: string | undefined;

  /**
   * <p>The Subscription identifier</p>
   * @public
   */
  subscriptionId?: string | undefined;

  /**
   * <p>The Request identifier</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The Language Code for the audio in the session</p>
   * @public
   */
  languageCode?: MedicalScribeLanguageCode | undefined;

  /**
   * <p>The sample rate of the input audio</p>
   * @public
   */
  mediaSampleRateHertz?: number | undefined;

  /**
   * <p>The encoding for the input audio</p>
   * @public
   */
  mediaEncoding?: MedicalScribeMediaEncoding | undefined;

  /**
   * <p>The output stream containing transcript events</p>
   * @public
   */
  responseStream?: AsyncIterable<MedicalScribeOutputStream> | undefined;
}

/**
 * @public
 */
export interface StartPatientInsightsJobRequest {
  /**
   * <p/>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p/>
   * @public
   */
  patientContext: PatientInsightsPatientContext | undefined;

  /**
   * <p/>
   * @public
   */
  insightsContext: InsightsContext | undefined;

  /**
   * <p/>
   * @public
   */
  encounterContext: PatientInsightsEncounterContext | undefined;

  /**
   * <p/>
   * @public
   */
  userContext: UserContext | undefined;

  /**
   * <p/>
   * @public
   */
  inputDataConfig: InputDataConfig | undefined;

  /**
   * <p/>
   * @public
   */
  outputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartPatientInsightsJobResponse {
  /**
   * <p/>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p/>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>Date and time the patient insights job was submitted.</p>
   * @public
   */
  creationTime?: Date | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The ARN of the resource to tag</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The ARN of the resource to untag</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys to remove from the resource</p>
   * @public
   */
  tagKeys: string[] | undefined;
}
