// smithy-typescript generated code
import {
  AudioExtractionCategoryType,
  AudioGenerativeOutputLanguage,
  AudioStandardGenerativeFieldType,
  BlueprintOptimizationJobStatus,
  BlueprintStage,
  BlueprintStageFilter,
  DataAutomationProjectStage,
  DataAutomationProjectStageFilter,
  DataAutomationProjectStatus,
  DataAutomationProjectType,
  DesiredModality,
  DocumentExtractionGranularityType,
  DocumentOutputTextFormatType,
  ImageExtractionCategoryType,
  ImageStandardGenerativeFieldType,
  Language,
  PIIEntityType,
  PIIRedactionMaskMode,
  ResourceOwner,
  SensitiveDataDetectionMode,
  SensitiveDataDetectionScopeType,
  State,
  Type,
  VideoExtractionCategoryType,
  VideoStandardGenerativeFieldType,
} from "./enums";

/**
 * Structure for request of GetBlueprintOptimizationStatus API.
 * @public
 */
export interface GetBlueprintOptimizationStatusRequest {
  /**
   * Invocation arn.
   * @public
   */
  invocationArn: string | undefined;
}

/**
 * S3 object
 * @public
 */
export interface S3Object {
  /**
   * S3 uri.
   * @public
   */
  s3Uri: string | undefined;

  /**
   * S3 object version.
   * @public
   */
  version?: string | undefined;
}

/**
 * Blueprint Optimization Output configuration.
 * @public
 */
export interface BlueprintOptimizationOutputConfiguration {
  /**
   * S3 object.
   * @public
   */
  s3Object: S3Object | undefined;
}

/**
 * Response of GetBlueprintOptimizationStatus API.
 * @public
 */
export interface GetBlueprintOptimizationStatusResponse {
  /**
   * Job Status.
   * @public
   */
  status?: BlueprintOptimizationJobStatus | undefined;

  /**
   * Error Type.
   * @public
   */
  errorType?: string | undefined;

  /**
   * Error Message.
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * Output configuration.
   * @public
   */
  outputConfiguration?: BlueprintOptimizationOutputConfiguration | undefined;
}

/**
 * Stores information about a field passed inside a request that resulted in an exception
 * @public
 */
export interface ValidationExceptionField {
  /**
   * Non Blank String
   * @public
   */
  name: string | undefined;

  /**
   * Non Blank String
   * @public
   */
  message: string | undefined;
}

/**
 * Structure for single blueprint entity.
 * @public
 */
export interface BlueprintOptimizationObject {
  /**
   * Arn of blueprint.
   * @public
   */
  blueprintArn: string | undefined;

  /**
   * Stage of blueprint.
   * @public
   */
  stage?: BlueprintStage | undefined;
}

/**
 * KMS Encryption Configuration
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * KMS Key Identifier
   * @public
   */
  kmsKeyId: string | undefined;

  /**
   * KMS Encryption Context
   * @public
   */
  kmsEncryptionContext?: Record<string, string> | undefined;
}

/**
 * Blueprint Recommendation Sample
 * @public
 */
export interface BlueprintOptimizationSample {
  /**
   * S3 Object of the asset
   * @public
   */
  assetS3Object: S3Object | undefined;

  /**
   * Ground truth for the Blueprint and Asset combination
   * @public
   */
  groundTruthS3Object: S3Object | undefined;
}

/**
 * Key value pair of a tag
 * @public
 */
export interface Tag {
  /**
   * Defines the context of the tag.
   * @public
   */
  key: string | undefined;

  /**
   * Defines the value within the context. e.g. <key=reason, value=training>.
   * @public
   */
  value: string | undefined;
}

/**
 * Invoke Blueprint Optimization Async Request
 * @public
 */
export interface InvokeBlueprintOptimizationAsyncRequest {
  /**
   * Blueprint to be optimized
   * @public
   */
  blueprint: BlueprintOptimizationObject | undefined;

  /**
   * List of Blueprint Optimization Samples
   * @public
   */
  samples: BlueprintOptimizationSample[] | undefined;

  /**
   * Output configuration where the results should be placed
   * @public
   */
  outputConfiguration: BlueprintOptimizationOutputConfiguration | undefined;

  /**
   * Data automation profile ARN
   * @public
   */
  dataAutomationProfileArn: string | undefined;

  /**
   * Encryption configuration.
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * List of tags.
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Invoke Blueprint Optimization Async Response
 * @public
 */
export interface InvokeBlueprintOptimizationAsyncResponse {
  /**
   * ARN of the blueprint optimization job
   * @public
   */
  invocationArn: string | undefined;
}

/**
 * Create Blueprint Request
 * @public
 */
export interface CreateBlueprintRequest {
  /**
   * Name of the Blueprint
   * @public
   */
  blueprintName: string | undefined;

  /**
   * Type
   * @public
   */
  type: Type | undefined;

  /**
   * Stage of the Blueprint
   * @public
   */
  blueprintStage?: BlueprintStage | undefined;

  /**
   * Schema of the blueprint
   * @public
   */
  schema: string | undefined;

  /**
   * Client specified token used for idempotency checks
   * @public
   */
  clientToken?: string | undefined;

  /**
   * KMS Encryption Configuration
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * List of tags
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Contains the information of a Blueprint.
 * @public
 */
export interface Blueprint {
  /**
   * ARN of a Blueprint
   * @public
   */
  blueprintArn: string | undefined;

  /**
   * Schema of the blueprint
   * @public
   */
  schema: string | undefined;

  /**
   * Type
   * @public
   */
  type: Type | undefined;

  /**
   * Time Stamp
   * @public
   */
  creationTime: Date | undefined;

  /**
   * Time Stamp
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * Name of the Blueprint
   * @public
   */
  blueprintName: string | undefined;

  /**
   * Blueprint Version
   * @public
   */
  blueprintVersion?: string | undefined;

  /**
   * Stage of the Blueprint
   * @public
   */
  blueprintStage?: BlueprintStage | undefined;

  /**
   * KMS Key Identifier
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * KMS Encryption Context
   * @public
   */
  kmsEncryptionContext?: Record<string, string> | undefined;

  /**
   * List of Blueprint Optimization Samples
   * @public
   */
  optimizationSamples?: BlueprintOptimizationSample[] | undefined;

  /**
   * Time Stamp
   * @public
   */
  optimizationTime?: Date | undefined;
}

/**
 * Create Blueprint Response
 * @public
 */
export interface CreateBlueprintResponse {
  /**
   * Contains the information of a Blueprint.
   * @public
   */
  blueprint: Blueprint | undefined;
}

/**
 * Delete Blueprint Request
 * @public
 */
export interface DeleteBlueprintRequest {
  /**
   * ARN generated at the server side when a Blueprint is created
   * @public
   */
  blueprintArn: string | undefined;

  /**
   * Optional field to delete a specific Blueprint version
   * @public
   */
  blueprintVersion?: string | undefined;
}

/**
 * Delete Blueprint Response
 * @public
 */
export interface DeleteBlueprintResponse {}

/**
 * Get Blueprint Request
 * @public
 */
export interface GetBlueprintRequest {
  /**
   * ARN generated at the server side when a Blueprint is created
   * @public
   */
  blueprintArn: string | undefined;

  /**
   * Optional field to get a specific Blueprint version
   * @public
   */
  blueprintVersion?: string | undefined;

  /**
   * Optional field to get a specific Blueprint stage
   * @public
   */
  blueprintStage?: BlueprintStage | undefined;
}

/**
 * Get Blueprint Response
 * @public
 */
export interface GetBlueprintResponse {
  /**
   * Contains the information of a Blueprint.
   * @public
   */
  blueprint: Blueprint | undefined;
}

/**
 * Data Automation Project Filter
 * @public
 */
export interface DataAutomationProjectFilter {
  /**
   * ARN of a DataAutomationProject
   * @public
   */
  projectArn: string | undefined;

  /**
   * Stage of the Project
   * @public
   */
  projectStage?: DataAutomationProjectStage | undefined;
}

/**
 * List Blueprint Request
 * @public
 */
export interface ListBlueprintsRequest {
  /**
   * ARN of a Blueprint
   * @public
   */
  blueprintArn?: string | undefined;

  /**
   * Resource Owner
   * @public
   */
  resourceOwner?: ResourceOwner | undefined;

  /**
   * Blueprint Stage filter
   * @public
   */
  blueprintStageFilter?: BlueprintStageFilter | undefined;

  /**
   * Max Results
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Data Automation Project Filter
   * @public
   */
  projectFilter?: DataAutomationProjectFilter | undefined;
}

/**
 * Summary of a Blueprint
 * @public
 */
export interface BlueprintSummary {
  /**
   * ARN of a Blueprint
   * @public
   */
  blueprintArn: string | undefined;

  /**
   * Blueprint Version
   * @public
   */
  blueprintVersion?: string | undefined;

  /**
   * Stage of the Blueprint
   * @public
   */
  blueprintStage?: BlueprintStage | undefined;

  /**
   * Name of the Blueprint
   * @public
   */
  blueprintName?: string | undefined;

  /**
   * Time Stamp
   * @public
   */
  creationTime: Date | undefined;

  /**
   * Time Stamp
   * @public
   */
  lastModifiedTime?: Date | undefined;
}

/**
 * List Blueprint Response
 * @public
 */
export interface ListBlueprintsResponse {
  /**
   * List of Blueprints
   * @public
   */
  blueprints: BlueprintSummary[] | undefined;

  /**
   * Pagination token
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Update Blueprint Request
 * @public
 */
export interface UpdateBlueprintRequest {
  /**
   * ARN generated at the server side when a Blueprint is created
   * @public
   */
  blueprintArn: string | undefined;

  /**
   * Schema of the blueprint
   * @public
   */
  schema: string | undefined;

  /**
   * Stage of the Blueprint
   * @public
   */
  blueprintStage?: BlueprintStage | undefined;

  /**
   * KMS Encryption Configuration
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * Update Blueprint Response
 * @public
 */
export interface UpdateBlueprintResponse {
  /**
   * Contains the information of a Blueprint.
   * @public
   */
  blueprint: Blueprint | undefined;
}

/**
 * CopyBlueprintStage Request
 * @public
 */
export interface CopyBlueprintStageRequest {
  /**
   * Blueprint to be copied
   * @public
   */
  blueprintArn: string | undefined;

  /**
   * Source stage to copy from
   * @public
   */
  sourceStage: BlueprintStage | undefined;

  /**
   * Target stage to copy to
   * @public
   */
  targetStage: BlueprintStage | undefined;

  /**
   * Client token for idempotency
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * CopyBlueprintStage Response
 * @public
 */
export interface CopyBlueprintStageResponse {}

/**
 * Create Blueprint Version Request
 * @public
 */
export interface CreateBlueprintVersionRequest {
  /**
   * ARN generated at the server side when a Blueprint is created
   * @public
   */
  blueprintArn: string | undefined;

  /**
   * Client specified token used for idempotency checks
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Create Blueprint Version Response
 * @public
 */
export interface CreateBlueprintVersionResponse {
  /**
   * Contains the information of a Blueprint.
   * @public
   */
  blueprint: Blueprint | undefined;
}

/**
 * Blueprint Item
 * @public
 */
export interface BlueprintItem {
  /**
   * ARN of a Blueprint
   * @public
   */
  blueprintArn: string | undefined;

  /**
   * Blueprint Version
   * @public
   */
  blueprintVersion?: string | undefined;

  /**
   * Stage of the Blueprint
   * @public
   */
  blueprintStage?: BlueprintStage | undefined;
}

/**
 * Custom output configuration
 * @public
 */
export interface CustomOutputConfiguration {
  /**
   * List of Blueprint Item
   * @public
   */
  blueprints?: BlueprintItem[] | undefined;
}

/**
 * Optional configuration for audio language settings
 * @public
 */
export interface AudioLanguageConfiguration {
  /**
   * List of supported audio languages
   * @public
   */
  inputLanguages?: Language[] | undefined;

  /**
   * Configuration for Audio output language
   * @public
   */
  generativeOutputLanguage?: AudioGenerativeOutputLanguage | undefined;

  /**
   * Enable multiple language identification in audio
   * @public
   */
  identifyMultipleLanguages?: boolean | undefined;
}

/**
 * Configuration to enable/disable processing of modality
 * @public
 */
export interface ModalityProcessingConfiguration {
  /**
   * State
   * @public
   */
  state?: State | undefined;
}

/**
 * Configuration for PII entities detection and redaction
 * @public
 */
export interface PIIEntitiesConfiguration {
  /**
   * Types of PII entities to detect
   * @public
   */
  piiEntityTypes?: PIIEntityType[] | undefined;

  /**
   * Mode for redacting detected PII
   * @public
   */
  redactionMaskMode?: PIIRedactionMaskMode | undefined;
}

/**
 * Configuration for sensitive data detection and redaction
 * @public
 */
export interface SensitiveDataConfiguration {
  /**
   * Mode for sensitive data detection
   * @public
   */
  detectionMode: SensitiveDataDetectionMode | undefined;

  /**
   * Scope of detection - what types of sensitive data to detect
   * @public
   */
  detectionScope?: SensitiveDataDetectionScopeType[] | undefined;

  /**
   * Configuration for PII entities detection and redaction
   * @public
   */
  piiEntitiesConfiguration?: PIIEntitiesConfiguration | undefined;
}

/**
 * Override Configuration of Audio
 * @public
 */
export interface AudioOverrideConfiguration {
  /**
   * Configuration to enable/disable processing of modality
   * @public
   */
  modalityProcessing?: ModalityProcessingConfiguration | undefined;

  /**
   * Optional configuration for audio language settings
   * @public
   */
  languageConfiguration?: AudioLanguageConfiguration | undefined;

  /**
   * Configuration for sensitive data detection and redaction
   * @public
   */
  sensitiveDataConfiguration?: SensitiveDataConfiguration | undefined;
}

/**
 * Configuration of Splitter
 * @public
 */
export interface SplitterConfiguration {
  /**
   * State
   * @public
   */
  state?: State | undefined;
}

/**
 * Override Configuration of Document
 * @public
 */
export interface DocumentOverrideConfiguration {
  /**
   * Configuration of Splitter
   * @public
   */
  splitter?: SplitterConfiguration | undefined;

  /**
   * Configuration to enable/disable processing of modality
   * @public
   */
  modalityProcessing?: ModalityProcessingConfiguration | undefined;

  /**
   * Configuration for sensitive data detection and redaction
   * @public
   */
  sensitiveDataConfiguration?: SensitiveDataConfiguration | undefined;
}

/**
 * Override Configuration of Image
 * @public
 */
export interface ImageOverrideConfiguration {
  /**
   * Configuration to enable/disable processing of modality
   * @public
   */
  modalityProcessing?: ModalityProcessingConfiguration | undefined;

  /**
   * Configuration for sensitive data detection and redaction
   * @public
   */
  sensitiveDataConfiguration?: SensitiveDataConfiguration | undefined;
}

/**
 * Configuration for routing file type to desired modality
 * @public
 */
export interface ModalityRoutingConfiguration {
  /**
   * Desired Modality types
   * @public
   */
  jpeg?: DesiredModality | undefined;

  /**
   * Desired Modality types
   * @public
   */
  png?: DesiredModality | undefined;

  /**
   * Desired Modality types
   * @public
   */
  mp4?: DesiredModality | undefined;

  /**
   * Desired Modality types
   * @public
   */
  mov?: DesiredModality | undefined;
}

/**
 * Override Configuration of Video
 * @public
 */
export interface VideoOverrideConfiguration {
  /**
   * Configuration to enable/disable processing of modality
   * @public
   */
  modalityProcessing?: ModalityProcessingConfiguration | undefined;

  /**
   * Configuration for sensitive data detection and redaction
   * @public
   */
  sensitiveDataConfiguration?: SensitiveDataConfiguration | undefined;
}

/**
 * Override configuration
 * @public
 */
export interface OverrideConfiguration {
  /**
   * Override Configuration of Document
   * @public
   */
  document?: DocumentOverrideConfiguration | undefined;

  /**
   * Override Configuration of Image
   * @public
   */
  image?: ImageOverrideConfiguration | undefined;

  /**
   * Override Configuration of Video
   * @public
   */
  video?: VideoOverrideConfiguration | undefined;

  /**
   * Override Configuration of Audio
   * @public
   */
  audio?: AudioOverrideConfiguration | undefined;

  /**
   * Configuration for routing file type to desired modality
   * @public
   */
  modalityRouting?: ModalityRoutingConfiguration | undefined;
}

/**
 * Channel labeling configuration
 * @public
 */
export interface ChannelLabelingConfiguration {
  /**
   * State
   * @public
   */
  state: State | undefined;
}

/**
 * Speaker labeling configuration
 * @public
 */
export interface SpeakerLabelingConfiguration {
  /**
   * State
   * @public
   */
  state: State | undefined;
}

/**
 * Configuration for transcript related features
 * @public
 */
export interface TranscriptConfiguration {
  /**
   * Speaker labeling configuration
   * @public
   */
  speakerLabeling?: SpeakerLabelingConfiguration | undefined;

  /**
   * Channel labeling configuration
   * @public
   */
  channelLabeling?: ChannelLabelingConfiguration | undefined;
}

/**
 * Configuration for different audio extraction category types
 * @public
 */
export interface AudioExtractionCategoryTypeConfiguration {
  /**
   * Configuration for transcript related features
   * @public
   */
  transcript?: TranscriptConfiguration | undefined;
}

/**
 * Category of Audio Extraction
 * @public
 */
export interface AudioExtractionCategory {
  /**
   * State
   * @public
   */
  state: State | undefined;

  /**
   * List of Audio Extraction Category Type
   * @public
   */
  types?: AudioExtractionCategoryType[] | undefined;

  /**
   * Configuration for different audio extraction category types
   * @public
   */
  typeConfiguration?: AudioExtractionCategoryTypeConfiguration | undefined;
}

/**
 * Standard Extraction Configuration of Audio
 * @public
 */
export interface AudioStandardExtraction {
  /**
   * Category of Audio Extraction
   * @public
   */
  category: AudioExtractionCategory | undefined;
}

/**
 * Standard Generative Field Configuration of Audio
 * @public
 */
export interface AudioStandardGenerativeField {
  /**
   * State
   * @public
   */
  state: State | undefined;

  /**
   * List of Audio Standard Generative Field Type
   * @public
   */
  types?: AudioStandardGenerativeFieldType[] | undefined;
}

/**
 * Standard Output Configuration of Audio
 * @public
 */
export interface AudioStandardOutputConfiguration {
  /**
   * Standard Extraction Configuration of Audio
   * @public
   */
  extraction?: AudioStandardExtraction | undefined;

  /**
   * Standard Generative Field Configuration of Audio
   * @public
   */
  generativeField?: AudioStandardGenerativeField | undefined;
}

/**
 * Bounding Box Configuration of Document Extraction
 * @public
 */
export interface DocumentBoundingBox {
  /**
   * State
   * @public
   */
  state: State | undefined;
}

/**
 * Granularity of Document Extraction
 * @public
 */
export interface DocumentExtractionGranularity {
  /**
   * List of Document Extraction Granularity Type
   * @public
   */
  types?: DocumentExtractionGranularityType[] | undefined;
}

/**
 * Standard Extraction Configuration of Document
 * @public
 */
export interface DocumentStandardExtraction {
  /**
   * Granularity of Document Extraction
   * @public
   */
  granularity: DocumentExtractionGranularity | undefined;

  /**
   * Bounding Box Configuration of Document Extraction
   * @public
   */
  boundingBox: DocumentBoundingBox | undefined;
}

/**
 * Standard Generative Field Configuration of Document
 * @public
 */
export interface DocumentStandardGenerativeField {
  /**
   * State
   * @public
   */
  state: State | undefined;
}

/**
 * Additional File Format of Document Output
 * @public
 */
export interface DocumentOutputAdditionalFileFormat {
  /**
   * State
   * @public
   */
  state: State | undefined;
}

/**
 * Text Format of Document Output
 * @public
 */
export interface DocumentOutputTextFormat {
  /**
   * List of Document Output Text Format Type
   * @public
   */
  types?: DocumentOutputTextFormatType[] | undefined;
}

/**
 * Output Format of Document
 * @public
 */
export interface DocumentOutputFormat {
  /**
   * Text Format of Document Output
   * @public
   */
  textFormat: DocumentOutputTextFormat | undefined;

  /**
   * Additional File Format of Document Output
   * @public
   */
  additionalFileFormat: DocumentOutputAdditionalFileFormat | undefined;
}

/**
 * Standard Output Configuration of Document
 * @public
 */
export interface DocumentStandardOutputConfiguration {
  /**
   * Standard Extraction Configuration of Document
   * @public
   */
  extraction?: DocumentStandardExtraction | undefined;

  /**
   * Standard Generative Field Configuration of Document
   * @public
   */
  generativeField?: DocumentStandardGenerativeField | undefined;

  /**
   * Output Format of Document
   * @public
   */
  outputFormat?: DocumentOutputFormat | undefined;
}

/**
 * Bounding Box Configuration of Image Extraction
 * @public
 */
export interface ImageBoundingBox {
  /**
   * State
   * @public
   */
  state: State | undefined;
}

/**
 * Category of Image Extraction
 * @public
 */
export interface ImageExtractionCategory {
  /**
   * State
   * @public
   */
  state: State | undefined;

  /**
   * List of Image Extraction Category
   * @public
   */
  types?: ImageExtractionCategoryType[] | undefined;
}

/**
 * Standard Extraction Configuration of Image
 * @public
 */
export interface ImageStandardExtraction {
  /**
   * Category of Image Extraction
   * @public
   */
  category: ImageExtractionCategory | undefined;

  /**
   * Bounding Box Configuration of Image Extraction
   * @public
   */
  boundingBox: ImageBoundingBox | undefined;
}

/**
 * Standard Generative Field Configuration of Image
 * @public
 */
export interface ImageStandardGenerativeField {
  /**
   * State
   * @public
   */
  state: State | undefined;

  /**
   * List of Image Standard Generative Field Type
   * @public
   */
  types?: ImageStandardGenerativeFieldType[] | undefined;
}

/**
 * Standard Output Configuration of Image
 * @public
 */
export interface ImageStandardOutputConfiguration {
  /**
   * Standard Extraction Configuration of Image
   * @public
   */
  extraction?: ImageStandardExtraction | undefined;

  /**
   * Standard Generative Field Configuration of Image
   * @public
   */
  generativeField?: ImageStandardGenerativeField | undefined;
}

/**
 * Bounding Box Configuration of Video Extraction
 * @public
 */
export interface VideoBoundingBox {
  /**
   * State
   * @public
   */
  state: State | undefined;
}

/**
 * Category of Video Extraction
 * @public
 */
export interface VideoExtractionCategory {
  /**
   * State
   * @public
   */
  state: State | undefined;

  /**
   * List of Video Extraction Category Type
   * @public
   */
  types?: VideoExtractionCategoryType[] | undefined;
}

/**
 * Standard Extraction Configuration of Video
 * @public
 */
export interface VideoStandardExtraction {
  /**
   * Category of Video Extraction
   * @public
   */
  category: VideoExtractionCategory | undefined;

  /**
   * Bounding Box Configuration of Video Extraction
   * @public
   */
  boundingBox: VideoBoundingBox | undefined;
}

/**
 * Standard Generative Field Configuration of Video
 * @public
 */
export interface VideoStandardGenerativeField {
  /**
   * State
   * @public
   */
  state: State | undefined;

  /**
   * List of Video Standard Generative Field Type
   * @public
   */
  types?: VideoStandardGenerativeFieldType[] | undefined;
}

/**
 * Standard Output Configuration of Video
 * @public
 */
export interface VideoStandardOutputConfiguration {
  /**
   * Standard Extraction Configuration of Video
   * @public
   */
  extraction?: VideoStandardExtraction | undefined;

  /**
   * Standard Generative Field Configuration of Video
   * @public
   */
  generativeField?: VideoStandardGenerativeField | undefined;
}

/**
 * Standard output configuration
 * @public
 */
export interface StandardOutputConfiguration {
  /**
   * Standard Output Configuration of Document
   * @public
   */
  document?: DocumentStandardOutputConfiguration | undefined;

  /**
   * Standard Output Configuration of Image
   * @public
   */
  image?: ImageStandardOutputConfiguration | undefined;

  /**
   * Standard Output Configuration of Video
   * @public
   */
  video?: VideoStandardOutputConfiguration | undefined;

  /**
   * Standard Output Configuration of Audio
   * @public
   */
  audio?: AudioStandardOutputConfiguration | undefined;
}

/**
 * Create DataAutomationProject Request
 * @public
 */
export interface CreateDataAutomationProjectRequest {
  /**
   * Name of the DataAutomationProject
   * @public
   */
  projectName: string | undefined;

  /**
   * Description of the DataAutomationProject
   * @public
   */
  projectDescription?: string | undefined;

  /**
   * Stage of the Project
   * @public
   */
  projectStage?: DataAutomationProjectStage | undefined;

  /**
   * Type of the DataAutomationProject
   * @public
   */
  projectType?: DataAutomationProjectType | undefined;

  /**
   * Standard output configuration
   * @public
   */
  standardOutputConfiguration: StandardOutputConfiguration | undefined;

  /**
   * Custom output configuration
   * @public
   */
  customOutputConfiguration?: CustomOutputConfiguration | undefined;

  /**
   * Override configuration
   * @public
   */
  overrideConfiguration?: OverrideConfiguration | undefined;

  /**
   * Client specified token used for idempotency checks
   * @public
   */
  clientToken?: string | undefined;

  /**
   * KMS Encryption Configuration
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * List of tags
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Create DataAutomationProject Response
 * @public
 */
export interface CreateDataAutomationProjectResponse {
  /**
   * ARN of a DataAutomationProject
   * @public
   */
  projectArn: string | undefined;

  /**
   * Stage of the Project
   * @public
   */
  projectStage?: DataAutomationProjectStage | undefined;

  /**
   * Status of Data Automation Project
   * @public
   */
  status?: DataAutomationProjectStatus | undefined;
}

/**
 * Delete DataAutomationProject Request
 * @public
 */
export interface DeleteDataAutomationProjectRequest {
  /**
   * ARN generated at the server side when a DataAutomationProject is created
   * @public
   */
  projectArn: string | undefined;
}

/**
 * Delete DataAutomationProject Response
 * @public
 */
export interface DeleteDataAutomationProjectResponse {
  /**
   * ARN of a DataAutomationProject
   * @public
   */
  projectArn: string | undefined;

  /**
   * Status of Data Automation Project
   * @public
   */
  status?: DataAutomationProjectStatus | undefined;
}

/**
 * Get DataAutomationProject Request
 * @public
 */
export interface GetDataAutomationProjectRequest {
  /**
   * ARN generated at the server side when a DataAutomationProject is created
   * @public
   */
  projectArn: string | undefined;

  /**
   * Optional field to delete a specific DataAutomationProject stage
   * @public
   */
  projectStage?: DataAutomationProjectStage | undefined;
}

/**
 * Contains the information of a DataAutomationProject.
 * @public
 */
export interface DataAutomationProject {
  /**
   * ARN of a DataAutomationProject
   * @public
   */
  projectArn: string | undefined;

  /**
   * Time Stamp
   * @public
   */
  creationTime: Date | undefined;

  /**
   * Time Stamp
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * Name of the DataAutomationProject
   * @public
   */
  projectName: string | undefined;

  /**
   * Stage of the Project
   * @public
   */
  projectStage?: DataAutomationProjectStage | undefined;

  /**
   * Type of the DataAutomationProject
   * @public
   */
  projectType?: DataAutomationProjectType | undefined;

  /**
   * Description of the DataAutomationProject
   * @public
   */
  projectDescription?: string | undefined;

  /**
   * Standard output configuration
   * @public
   */
  standardOutputConfiguration?: StandardOutputConfiguration | undefined;

  /**
   * Custom output configuration
   * @public
   */
  customOutputConfiguration?: CustomOutputConfiguration | undefined;

  /**
   * Override configuration
   * @public
   */
  overrideConfiguration?: OverrideConfiguration | undefined;

  /**
   * Status of Data Automation Project
   * @public
   */
  status: DataAutomationProjectStatus | undefined;

  /**
   * KMS Key Identifier
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * KMS Encryption Context
   * @public
   */
  kmsEncryptionContext?: Record<string, string> | undefined;
}

/**
 * Get DataAutomationProject Response
 * @public
 */
export interface GetDataAutomationProjectResponse {
  /**
   * Contains the information of a DataAutomationProject.
   * @public
   */
  project: DataAutomationProject | undefined;
}

/**
 * Blueprint Filter
 * @public
 */
export interface BlueprintFilter {
  /**
   * ARN of a Blueprint
   * @public
   */
  blueprintArn: string | undefined;

  /**
   * Blueprint Version
   * @public
   */
  blueprintVersion?: string | undefined;

  /**
   * Stage of the Blueprint
   * @public
   */
  blueprintStage?: BlueprintStage | undefined;
}

/**
 * List DataAutomationProject Request
 * @public
 */
export interface ListDataAutomationProjectsRequest {
  /**
   * Max Results
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Project Stage filter
   * @public
   */
  projectStageFilter?: DataAutomationProjectStageFilter | undefined;

  /**
   * Blueprint Filter
   * @public
   */
  blueprintFilter?: BlueprintFilter | undefined;

  /**
   * Resource Owner
   * @public
   */
  resourceOwner?: ResourceOwner | undefined;
}

/**
 * Summary of a DataAutomationProject
 * @public
 */
export interface DataAutomationProjectSummary {
  /**
   * ARN of a DataAutomationProject
   * @public
   */
  projectArn: string | undefined;

  /**
   * Stage of the Project
   * @public
   */
  projectStage?: DataAutomationProjectStage | undefined;

  /**
   * Type of the DataAutomationProject
   * @public
   */
  projectType?: DataAutomationProjectType | undefined;

  /**
   * Name of the DataAutomationProject
   * @public
   */
  projectName?: string | undefined;

  /**
   * Time Stamp
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * List DataAutomationProject Response
 * @public
 */
export interface ListDataAutomationProjectsResponse {
  /**
   * List of DataAutomationProjectSummary
   * @public
   */
  projects: DataAutomationProjectSummary[] | undefined;

  /**
   * Pagination token
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Update DataAutomationProject Request
 * @public
 */
export interface UpdateDataAutomationProjectRequest {
  /**
   * ARN generated at the server side when a DataAutomationProject is created
   * @public
   */
  projectArn: string | undefined;

  /**
   * Stage of the Project
   * @public
   */
  projectStage?: DataAutomationProjectStage | undefined;

  /**
   * Description of the DataAutomationProject
   * @public
   */
  projectDescription?: string | undefined;

  /**
   * Standard output configuration
   * @public
   */
  standardOutputConfiguration: StandardOutputConfiguration | undefined;

  /**
   * Custom output configuration
   * @public
   */
  customOutputConfiguration?: CustomOutputConfiguration | undefined;

  /**
   * Override configuration
   * @public
   */
  overrideConfiguration?: OverrideConfiguration | undefined;

  /**
   * KMS Encryption Configuration
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * Update DataAutomationProject Response
 * @public
 */
export interface UpdateDataAutomationProjectResponse {
  /**
   * ARN of a DataAutomationProject
   * @public
   */
  projectArn: string | undefined;

  /**
   * Stage of the Project
   * @public
   */
  projectStage?: DataAutomationProjectStage | undefined;

  /**
   * Status of Data Automation Project
   * @public
   */
  status?: DataAutomationProjectStatus | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * ARN of a taggable resource
   * @public
   */
  resourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * List of tags
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * ARN of a taggable resource
   * @public
   */
  resourceARN: string | undefined;

  /**
   * List of tags
   * @public
   */
  tags: Tag[] | undefined;
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
   * ARN of a taggable resource
   * @public
   */
  resourceARN: string | undefined;

  /**
   * List of tag keys
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
