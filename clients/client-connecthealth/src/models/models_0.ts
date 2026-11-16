// smithy-typescript generated code
import type {
  ChecklistItemStatus,
  CustomTemplateBase,
  DatasetStatus,
  DatasetType,
  DomainStatus,
  EncounterType,
  EncryptionType,
  FeedbackArtifactType,
  InsightsType,
  JobStatus,
  ManagedNoteTemplate,
  MedicalScribeLanguageCode,
  MedicalScribeMediaEncoding,
  MedicalScribeParticipantRole,
  MedicalScribeSessionControlEventType,
  MedicalScribeStreamStatus,
  PatientStatus,
  PeriodontalReviewReason,
  PeriodontalSiteName,
  PostStreamArtifactGenerationStatus,
  Pronouns,
  ProviderRole,
  Sex,
  Specialty,
  SubscriptionStatus,
} from "./enums";
import type { InternalServerException, ValidationException } from "./errors";

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
 * <p>Contains a checklist item and its discussion status.</p>
 * @public
 */
export interface ChecklistItem {
  /**
   * <p>The key that uniquely identifies the item within the checklist. For a managed note template, this value is a service-defined section key, such as <code>CHIEF_COMPLAINT</code>. For a custom note template, this value is the <code>sectionHeader</code> of the section that you defined.</p>
   * @public
   */
  itemKey: string | undefined;

  /**
   * <p>The discussion status of the checklist item. The following values are valid:</p> <ul> <li> <p> <code>DISCUSSED</code>: The conversation has covered the item.</p> </li> <li> <p> <code>PARTIALLY_DISCUSSED</code>: The conversation has covered part of the item.</p> </li> <li> <p> <code>NOT_DISCUSSED</code>: The conversation has not covered the item.</p> </li> </ul> <p>The status usually progresses toward <code>DISCUSSED</code>, but it can return to <code>NOT_DISCUSSED</code> if a speaker retracts a statement.</p>
   * @public
   */
  status: ChecklistItemStatus | undefined;
}

/**
 * <p>Contains the sections of a note template checklist and the discussion status of each section.</p>
 * @public
 */
export interface Checklist {
  /**
   * <p>The identifier of the checklist. For a managed note template, this value is the template type, such as <code>HISTORY_AND_PHYSICAL</code>. For a custom note template, this value is <code>CUSTOM_</code> followed by the template base, such as <code>CUSTOM_GIRPP</code>.</p>
   * @public
   */
  checklistId: string | undefined;

  /**
   * <p>The checklist items in template order. The list contains one item for each checklist section, including sections that have not been discussed.</p>
   * @public
   */
  items: ChecklistItem[] | undefined;
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
 * <p>The configuration of a medical coding dataset. Amazon Connect Health uses the coded examples that are in the input location when you create the dataset, and writes evaluation scores to the output location, with your permissions. Later changes to the input location don't change the dataset.</p>
 * @public
 */
export interface MedicalCodingDatasetConfig {
  /**
   * <p>The Amazon S3 location of your coded examples. You need s3:GetObject and s3:ListBucket permissions for it, and kms:Decrypt if you encrypt it with an AWS KMS key.</p>
   * @public
   */
  s3InputPath: string | undefined;

  /**
   * <p>The Amazon S3 location where Amazon Connect Health writes the evaluation scores for the dataset. You need s3:PutObject permission for it, and kms:GenerateDataKey if you encrypt it with an AWS KMS key.</p>
   * @public
   */
  s3OutputPath: string | undefined;
}

/**
 * <p>The configuration of a Dataset. Set one member, which determines the dataset type.</p>
 * @public
 */
export type DatasetConfig =
  | DatasetConfig.MedicalCodingMember
  | DatasetConfig.$UnknownMember;

/**
 * @public
 */
export namespace DatasetConfig {
  /**
   * <p>The configuration of a medical coding dataset, which tailors medical coding jobs to your coded examples.</p>
   * @public
   */
  export interface MedicalCodingMember {
    medicalCoding: MedicalCodingDatasetConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    medicalCoding?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    medicalCoding: (value: MedicalCodingDatasetConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateDatasetInput {
  /**
   * <p>The unique identifier of the parent Domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>A name for the dataset.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The configuration of the dataset. The member that you set determines the dataset type. You can't change the configuration after you create the dataset.</p>
   * @public
   */
  config: DatasetConfig | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the operation returns the dataset that the first request created. If you reuse a clientToken with different parameters, the request fails with ConflictException. Use a new clientToken for a request with different parameters.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateDatasetOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique identifier of the dataset.</p>
   * @public
   */
  datasetId: string | undefined;

  /**
   * <p>The type of the dataset, determined by the configuration that you provided.</p>
   * @public
   */
  type: DatasetType | undefined;

  /**
   * <p>The status of the dataset. A new dataset has the status CREATING.</p>
   * @public
   */
  status: DatasetStatus | undefined;

  /**
   * <p>The date and time that the dataset was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * <p>Input configuration for creating a web application. Used only in CreateDomain operation input.</p>
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
export interface DeleteDatasetInput {
  /**
   * <p>The unique identifier of the parent Domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The unique identifier of the dataset to delete.</p>
   * @public
   */
  datasetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique identifier of the dataset.</p>
   * @public
   */
  datasetId: string | undefined;

  /**
   * <p>The status of the dataset. After Amazon Connect Health accepts the request, the status is DELETING.</p>
   * @public
   */
  status: DatasetStatus | undefined;
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
export interface GetDatasetInput {
  /**
   * <p>The unique identifier of the parent Domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The unique identifier of the dataset.</p>
   * @public
   */
  datasetId: string | undefined;
}

/**
 * <p>The results of building a medical coding dataset.</p>
 * @public
 */
export interface MedicalCodingDatasetArtifacts {
  /**
   * <p>The Amazon S3 location, under the s3OutputPath of the dataset, of the evaluation scores for the dataset.</p>
   * @public
   */
  evaluationS3Uri?: string | undefined;
}

/**
 * <p>The results of building a Dataset, by dataset type.</p>
 * @public
 */
export type DatasetArtifacts =
  | DatasetArtifacts.MedicalCodingMember
  | DatasetArtifacts.$UnknownMember;

/**
 * @public
 */
export namespace DatasetArtifacts {
  /**
   * <p>The results of building a medical coding dataset.</p>
   * @public
   */
  export interface MedicalCodingMember {
    medicalCoding: MedicalCodingDatasetArtifacts;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    medicalCoding?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    medicalCoding: (value: MedicalCodingDatasetArtifacts) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetDatasetOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique identifier of the dataset.</p>
   * @public
   */
  datasetId: string | undefined;

  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the dataset.</p>
   * @public
   */
  type: DatasetType | undefined;

  /**
   * <p>The configuration that you provided when you created the dataset.</p>
   * @public
   */
  config: DatasetConfig | undefined;

  /**
   * <p>The status of the dataset.</p>
   * @public
   */
  status: DatasetStatus | undefined;

  /**
   * <p>Details about the status of the dataset, such as the reason that it failed to build or delete.</p>
   * @public
   */
  statusDetails?: string | undefined;

  /**
   * <p>The results of building the dataset, such as medical coding evaluation scores. Available after Amazon Connect Health builds the dataset.</p>
   * @public
   */
  artifacts?: DatasetArtifacts | undefined;

  /**
   * <p>The date and time that the dataset was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time that the dataset was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
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
export interface GetMedicalCodingJobRequest {
  /**
   * <p>The unique identifier of the parent Domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The unique identifier of the medical coding job.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * <p>Encounter context for a medical coding job. All fields are optional.</p>
 * @public
 */
export interface MedicalCodesEncounterContext {
  /**
   * <p>The type of the encounter, either in person or telehealth.</p>
   * @public
   */
  encounterType?: EncounterType | undefined;

  /**
   * <p>The reason for the encounter. The reason can contain letters, numbers, spaces, periods, commas, and hyphens, and can't contain only spaces.</p>
   * @public
   */
  encounterReason?: string | undefined;

  /**
   * <p>Specifies whether the encounter took place outside regular business hours.</p>
   * @public
   */
  afterHours?: boolean | undefined;

  /**
   * <p>The date of the encounter, in YYYY-MM-DD format. The date can't be more than one day after the current date in UTC.</p>
   * @public
   */
  encounterDate?: string | undefined;

  /**
   * <p>The duration of the encounter, in minutes, from 1 to 1440.</p>
   * @public
   */
  encounterDurationMinutes?: number | undefined;
}

/**
 * <p>The location of the results of a medical coding job.</p>
 * @public
 */
export interface MedicalCodingOutput {
  /**
   * <p>The Amazon S3 location of the medical codes that the job generated.</p>
   * @public
   */
  uri: string | undefined;
}

/**
 * <p>The output configuration for a medical coding job.</p>
 * @public
 */
export interface MedicalCodingOutputDataConfig {
  /**
   * <p>The Amazon S3 location where Amazon Connect Health writes the results of the job.</p>
   * @public
   */
  s3OutputPath: string | undefined;
}

/**
 * <p>Patient context for a medical coding job. All fields are optional.</p>
 * @public
 */
export interface MedicalCodesPatientContext {
  /**
   * <p>The sex of the patient.</p>
   * @public
   */
  sex?: Sex | undefined;

  /**
   * <p>The status of the patient, either new or established.</p>
   * @public
   */
  status?: PatientStatus | undefined;

  /**
   * <p>The date of birth of the patient, in YYYY-MM-DD format. The date can't be after the current date in UTC.</p>
   * @public
   */
  dateOfBirth?: string | undefined;

  /**
   * <p>The insurance of the patient.</p>
   * @public
   */
  insurance?: string | undefined;
}

/**
 * @public
 */
export interface GetMedicalCodingJobResponse {
  /**
   * <p>The unique identifier of the medical coding job.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the medical coding job.</p>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p>The status of the medical coding job.</p>
   * @public
   */
  jobStatus: JobStatus | undefined;

  /**
   * <p>The date and time that the medical coding job was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The date and time that the medical coding job was last updated.</p>
   * @public
   */
  updatedTime?: Date | undefined;

  /**
   * <p>The clinical text that the medical coding job codes.</p>
   * @public
   */
  text: string | undefined;

  /**
   * <p>The patient context that you provided for the job.</p>
   * @public
   */
  patientContext?: MedicalCodesPatientContext | undefined;

  /**
   * <p>The encounter context that you provided for the job.</p>
   * @public
   */
  encounterContext?: MedicalCodesEncounterContext | undefined;

  /**
   * <p>The output configuration that you provided for the job.</p>
   * @public
   */
  outputDataConfig: MedicalCodingOutputDataConfig | undefined;

  /**
   * <p>The unique identifier of the dataset that the job codes against. Not returned if the job uses the general medical coding knowledge base.</p>
   * @public
   */
  datasetId?: string | undefined;

  /**
   * <p>The location of the job results. Returned when the job succeeds.</p>
   * @public
   */
  medicalCodingOutput?: MedicalCodingOutput | undefined;

  /**
   * <p>Details about the status of the job, such as the reason that it failed.</p>
   * @public
   */
  statusDetails?: string | undefined;
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
 * <p>Results of medical code generation, including the medical codes and the medical coding job.</p>
 * @public
 */
export interface MedicalCodeGenerationResult {
  /**
   * <p>Details about the generated medical codes. If the status is SKIPPED, medical codes weren't generated, for example because the clinical note wasn't generated or had no content.</p>
   * @public
   */
  medicalCodesResult?: ArtifactDetails | undefined;

  /**
   * <p>The identifier of the medical coding job that generated the medical codes. To submit feedback on the medical codes, use this value as the artifactSourceId, with the artifactType MEDICAL_CODES, in SubmitFeedback.</p>
   * @public
   */
  jobId?: string | undefined;
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

  /**
   * <p>Results of medical code generation. Returned if medical code generation runs for the session. Not returned if you set enabled to false in medicalCodeGenerationSettings.</p>
   * @public
   */
  medicalCodeGenerationResult?: MedicalCodeGenerationResult | undefined;
}

/**
 * <p>Response containing settings for medical code generation.</p>
 * @public
 */
export interface MedicalCodeGenerationSettingsResponse {
  /**
   * <p>Indicates whether medical code generation was requested for the session.</p>
   * @public
   */
  enabled?: boolean | undefined;
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

  /**
   * <p>Settings for medical code generation. Returned only if you specified medicalCodeGenerationSettings when you started the session.</p>
   * @public
   */
  medicalCodeGenerationSettings?: MedicalCodeGenerationSettingsResponse | undefined;
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
   * <p>Indicates whether medical coding context was provided.</p>
   * @public
   */
  medicalCodingContextProvided?: boolean | undefined;

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
export interface ListDatasetsInput {
  /**
   * <p>The unique identifier of the parent Domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>Returns only datasets of this type.</p>
   * @public
   */
  type?: DatasetType | undefined;

  /**
   * <p>The token for the next page of results, from a previous ListDatasets response. If you don't specify a value, the operation returns the first page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of datasets to return in one page. The default is 100.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Summary information about a Dataset.</p>
 * @public
 */
export interface DatasetSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique identifier of the dataset.</p>
   * @public
   */
  datasetId: string | undefined;

  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the dataset.</p>
   * @public
   */
  type: DatasetType | undefined;

  /**
   * <p>The status of the dataset.</p>
   * @public
   */
  status: DatasetStatus | undefined;

  /**
   * <p>Details about the status of the dataset, such as the reason that it failed to build or delete.</p>
   * @public
   */
  statusDetails?: string | undefined;

  /**
   * <p>The date and time that the dataset was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time that the dataset was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListDatasetsOutput {
  /**
   * <p>A list of dataset summaries.</p>
   * @public
   */
  items: DatasetSummary[] | undefined;

  /**
   * <p>The token for the next page of results. Not returned if there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
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
 * @public
 */
export interface StartMedicalCodingJobRequest {
  /**
   * <p>The unique identifier of the parent Domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The clinical text to generate medical codes for, such as a clinical note.</p>
   * @public
   */
  text: string | undefined;

  /**
   * <p>Patient context for the job. Providing this information can improve the accuracy of the medical codes.</p>
   * @public
   */
  patientContext?: MedicalCodesPatientContext | undefined;

  /**
   * <p>Encounter context for the job. Providing this information can improve the accuracy of the medical codes.</p>
   * @public
   */
  encounterContext?: MedicalCodesEncounterContext | undefined;

  /**
   * <p>The output configuration for the job.</p>
   * @public
   */
  outputDataConfig: MedicalCodingOutputDataConfig | undefined;

  /**
   * <p>The unique identifier of an ACTIVE medical coding dataset in the Domain to code against. If you don't specify a dataset, the job uses the general medical coding knowledge base.</p>
   * @public
   */
  datasetId?: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartMedicalCodingJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the medical coding job.</p>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p>The unique identifier of the medical coding job.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The date and time that the medical coding job was created.</p>
   * @public
   */
  creationTime?: Date | undefined;
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
 * <p>An event containing raw binary audio data for the Medical Scribe stream. The audio is sent as a raw binary payload rather than as a base64-encoded value.</p>
 * @public
 */
export interface MedicalScribeBinaryAudioEvent {
  /**
   * <p>The raw binary audio data chunk</p>
   * @public
   */
  audioChunk: Uint8Array | undefined;
}

/**
 * <p>Patient and encounter context for medical code generation. Providing this information can improve the accuracy of the medical codes. To provide it, you must also set enabled to true in medicalCodeGenerationSettings. All fields are optional. The service generates medical codes without any field that you leave out.</p>
 * @public
 */
export interface MedicalCodingContext {
  /**
   * <p>The sex of the patient.</p>
   * @public
   */
  sex?: Sex | undefined;

  /**
   * <p>The status of the patient, either new or established.</p>
   * @public
   */
  status?: PatientStatus | undefined;

  /**
   * <p>The date of birth of the patient, in YYYY-MM-DD format. The date can't be after the current date in UTC.</p>
   * @public
   */
  dateOfBirth?: string | undefined;

  /**
   * <p>The type of the encounter, either in person or telehealth.</p>
   * @public
   */
  encounterType?: EncounterType | undefined;

  /**
   * <p>The reason for the encounter. The reason can contain letters, numbers, spaces, periods, commas, and hyphens, and can't contain only spaces.</p>
   * @public
   */
  encounterReason?: string | undefined;

  /**
   * <p>Specifies whether the encounter took place outside regular business hours.</p>
   * @public
   */
  afterHours?: boolean | undefined;

  /**
   * <p>The date of the encounter, in YYYY-MM-DD format. The date can't be more than one day after the current date in UTC.</p>
   * @public
   */
  encounterDate?: string | undefined;
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

  /**
   * <p>Structured patient and encounter context for medical code generation.</p>
   * @public
   */
  medicalCodingContext?: MedicalCodingContext | undefined;
}

/**
 * <p>Settings for generating medical codes from the clinical note after the session ends. Medical code generation is in preview release and is subject to change. Medical code generation is available in the US East (N. Virginia) and US West (Oregon) AWS Regions.</p>
 * @public
 */
export interface MedicalCodeGenerationSettings {
  /**
   * <p>Specifies whether to generate medical codes for the session. If you set this to true, the service generates medical codes from the clinical note after the session ends, using your permissions for medical coding, the output Amazon S3 location, and the AWS KMS key. You can set this to true only in a Region where medical code generation is available. To provide a medicalCodingContext, you must set this to true.</p>
   * @public
   */
  enabled: boolean | undefined;
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

  /**
   * <p>Settings for medical code generation. Medical code generation is in preview release and is subject to change.</p>
   * @public
   */
  medicalCodeGenerationSettings?: MedicalCodeGenerationSettings | undefined;
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
  | MedicalScribeInputStream.BinaryAudioEventMember
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
    binaryAudioEvent?: never;
    sessionControlEvent?: never;
    configurationEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>An event containing raw binary audio data for the Medical Scribe stream. The audio is sent as a raw binary payload rather than as a base64-encoded value.</p>
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
   * <p/>
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
   * <p/>
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
 * <p>Real-time extraction is in preview release for Amazon Connect Health and is subject to change. To request access to this feature, contact your AWS account team.</p> <p>The session's checklist as of this point in the session. Each event carries every item with its current status, not only the items that changed.</p>
 * @public
 */
export interface MedicalScribeChecklistEvent {
  /**
   * <p>The version of this snapshot. Versions increase within a session and can skip values. Keep the snapshot with the highest version and ignore any event whose version is not higher, including after you reconnect to the session. Versions of checklist events and periodontal chart events are independent.</p>
   * @public
   */
  snapshotVersion: number | undefined;

  /**
   * <p>The checklists for the session. The list is empty when no checklist is active.</p>
   * @public
   */
  checklists: Checklist[] | undefined;
}

/**
 * <p>An item of the periodontal chart that needs the clinician's confirmation.</p>
 * @public
 */
export interface PeriodontalReview {
  /**
   * <p>The reason for review. The following values are valid:</p> <ul> <li> <p> <code>SITE_NOT_CHARTED</code>: One or more sites have no reading.</p> </li> <li> <p> <code>VALUE_NOT_CHARTED</code>: A dictated value or charting instruction was not charted, for example because the value was out of range or not valid at its position.</p> </li> <li> <p> <code>READING_COUNT_MISMATCH</code>: The number of dictated values did not match the number of open sites. The values were charted as dictated.</p> </li> <li> <p> <code>LINE_UNCLEAR</code>: A line of dictation could not be interpreted and was not charted.</p> </li> <li> <p> <code>TOOTH_UNCLEAR</code>: A line of dictation did not identify the tooth and was not charted.</p> </li> <li> <p> <code>MISSING_TOOTH_CONFLICT</code>: The dictation conflicts with a tooth marked as missing.</p> </li> <li> <p> <code>MEASUREMENT_NOT_CHARTED</code>: The dictation included a measurement that the chart does not record, such as plaque, calculus, or the mucogingival junction.</p> </li> <li> <p> <code>SESSION_ISSUE</code>: The exam setup could not be used and all teeth were assumed to be present, or the earlier chart could not be restored and charting restarted.</p> </li> </ul>
   * @public
   */
  reason: PeriodontalReviewReason | undefined;

  /**
   * <p>The tooth that the item refers to.</p>
   * @public
   */
  toothNumber?: number | undefined;

  /**
   * <p>The probing sites of that tooth that the item refers to.</p>
   * @public
   */
  sites?: PeriodontalSiteName[] | undefined;
}

/**
 * <p>The measurements at one probing site of a tooth.</p>
 * @public
 */
export interface PeriodontalSite {
  /**
   * <p>The probing site. The following values are valid:</p> <ul> <li> <p> <code>DB</code>: Distobuccal.</p> </li> <li> <p> <code>B</code>: Buccal.</p> </li> <li> <p> <code>MB</code>: Mesiobuccal.</p> </li> <li> <p> <code>DL</code>: Distolingual.</p> </li> <li> <p> <code>L</code>: Lingual.</p> </li> <li> <p> <code>ML</code>: Mesiolingual.</p> </li> </ul>
   * @public
   */
  site: PeriodontalSiteName | undefined;

  /**
   * <p>The probing depth, in millimeters. The value ranges from 0 to 15.</p>
   * @public
   */
  probingDepth?: number | undefined;

  /**
   * <p>The gingival recession, in millimeters. The value ranges from -5 to 15. For example, <code>-1</code> represents "plus one."</p>
   * @public
   */
  recession?: number | undefined;

  /**
   * <p>Specifies whether the site bled during probing.</p>
   * @public
   */
  bleeding?: boolean | undefined;

  /**
   * <p>Specifies whether suppuration was present at the site.</p>
   * @public
   */
  suppuration?: boolean | undefined;
}

/**
 * <p>The chart for one tooth.</p>
 * @public
 */
export interface PeriodontalTooth {
  /**
   * <p>The tooth number in the Universal Numbering System. The value ranges from 1 to 32.</p>
   * @public
   */
  toothNumber: number | undefined;

  /**
   * <p>Specifies whether the tooth is missing.</p>
   * @public
   */
  missing: boolean | undefined;

  /**
   * <p>The tooth mobility grade. The value ranges from 0 to 3.</p>
   * @public
   */
  mobility?: number | undefined;

  /**
   * <p>The furcation involvement class. The value ranges from 0 to 3.</p>
   * @public
   */
  furcation?: number | undefined;

  /**
   * <p>The probing sites that have a recorded measurement, in the order <code>MB</code>, <code>B</code>, <code>DB</code>, <code>ML</code>, <code>L</code>, <code>DL</code>.</p>
   * @public
   */
  sites?: PeriodontalSite[] | undefined;
}

/**
 * <p>Real-time extraction is in preview release for Amazon Connect Health and is subject to change. To request access to this feature, contact your AWS account team.</p> <p>The periodontal chart as of this point in the session. Each event carries every tooth charted so far, not only the teeth that changed.</p>
 * @public
 */
export interface MedicalScribePeriodontalChartEvent {
  /**
   * <p>The version of this snapshot. Versions increase within a session and can skip values. Keep the snapshot with the highest version and ignore any event whose version is not higher, including after you reconnect to the session. Versions of checklist events and periodontal chart events are independent.</p>
   * @public
   */
  snapshotVersion: number | undefined;

  /**
   * <p>The teeth that have a recorded value or are marked missing, in ascending <code>toothNumber</code> order.</p>
   * @public
   */
  teeth: PeriodontalTooth[] | undefined;

  /**
   * <p>Items that need the clinician's confirmation.</p>
   * @public
   */
  reviewItems?: PeriodontalReview[] | undefined;
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
 * <p>The output stream of a listening session. It carries transcript events, periodontal chart events, checklist events, and errors.</p>
 * @public
 */
export type MedicalScribeOutputStream =
  | MedicalScribeOutputStream.ChecklistEventMember
  | MedicalScribeOutputStream.InternalFailureExceptionMember
  | MedicalScribeOutputStream.PeriodontalChartEventMember
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
    periodontalChartEvent?: never;
    checklistEvent?: never;
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
    periodontalChartEvent?: never;
    checklistEvent?: never;
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
    periodontalChartEvent?: never;
    checklistEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>Real-time extraction is in preview release for Amazon Connect Health and is subject to change. To request access to this feature, contact your AWS account team.</p> <p>A snapshot of the periodontal chart. Amazon Connect Health sends this event only when real-time extraction is enabled for the account and periodontal charting is dictated during the session.</p>
   * @public
   */
  export interface PeriodontalChartEventMember {
    transcriptEvent?: never;
    internalFailureException?: never;
    validationException?: never;
    periodontalChartEvent: MedicalScribePeriodontalChartEvent;
    checklistEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>Real-time extraction is in preview release for Amazon Connect Health and is subject to change. To request access to this feature, contact your AWS account team.</p> <p>A snapshot of the session's checklist. Amazon Connect Health sends this event only when real-time extraction is enabled for the account and the session uses a supported note template.</p>
   * @public
   */
  export interface ChecklistEventMember {
    transcriptEvent?: never;
    internalFailureException?: never;
    validationException?: never;
    periodontalChartEvent?: never;
    checklistEvent: MedicalScribeChecklistEvent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    transcriptEvent?: never;
    internalFailureException?: never;
    validationException?: never;
    periodontalChartEvent?: never;
    checklistEvent?: never;
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
    periodontalChartEvent: (value: MedicalScribePeriodontalChartEvent) => T;
    checklistEvent: (value: MedicalScribeChecklistEvent) => T;
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
   * <p>The output stream that contains transcript events, periodontal chart events, checklist events, and errors.</p>
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
export interface SubmitFeedbackRequest {
  /**
   * <p>The unique identifier of the parent Domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of the artifact source. For a clinical document, this is the session ID. For a set of medical codes, this is the medical coding job ID.</p>
   * @public
   */
  artifactSourceId: string | undefined;

  /**
   * <p>The unique identifier of the Subscription.</p>
   * @public
   */
  subscriptionId?: string | undefined;

  /**
   * <p>The type of artifact that you submit feedback for. The following values are valid:</p> <ul> <li> <p>CLINICAL_DOC is the clinical document generated for an ambient documentation session.</p> </li> <li> <p>MEDICAL_CODES is the set of medical codes generated by a medical coding job.</p> </li> </ul>
   * @public
   */
  artifactType: FeedbackArtifactType | undefined;

  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) URI of the final artifact that the clinician signed.</p>
   * @public
   */
  signedArtifactS3Uri: string | undefined;

  /**
   * <p>The Amazon S3 URI of the clinical document or set of medical codes that Amazon Connect Health generated.</p>
   * @public
   */
  generatedArtifactS3Uri?: string | undefined;

  /**
   * <p>Optional comments about the feedback.</p>
   * @public
   */
  comments?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure that the operation completes no more than one time. If this token matches a previous request, the service ignores the request but does not return an error.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface SubmitFeedbackResponse {}

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
