// smithy-typescript generated code
import type {
  AttributeName,
  EntitySubType,
  EntityType,
  ICD10CMAttributeType,
  ICD10CMEntityCategory,
  ICD10CMEntityType,
  ICD10CMRelationshipType,
  ICD10CMTraitName,
  JobStatus,
  LanguageCode,
  RelationshipType,
  RxNormAttributeType,
  RxNormEntityCategory,
  RxNormEntityType,
  RxNormTraitName,
  SNOMEDCTAttributeType,
  SNOMEDCTEntityCategory,
  SNOMEDCTEntityType,
  SNOMEDCTRelationshipType,
  SNOMEDCTTraitName,
} from "./enums";

/**
 * Provides contextual information about the extracted entity.
 *
 * @public
 */
export interface Trait {
  /**
   * Provides a name or contextual description about the trait.
   *
   * @public
   */
  Name?: AttributeName | undefined;

  /**
   * The level of confidence that Amazon Comprehend Medical has in the accuracy of this trait.
   *
   * @public
   */
  Score?: number | undefined;
}

/**
 * An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken. It contains information about the attribute such as id, begin and end offset within the input text, and the segment of the input text.
 *
 * @public
 */
export interface Attribute {
  /**
   * The type of attribute.
   *
   * @public
   */
  Type?: EntitySubType | undefined;

  /**
   * The level of confidence that Amazon Comprehend Medical has that the segment of text is correctly recognized as an attribute.
   *
   * @public
   */
  Score?: number | undefined;

  /**
   * The level of confidence that Amazon Comprehend Medical has that this attribute is correctly related to this entity.
   *
   * @public
   */
  RelationshipScore?: number | undefined;

  /**
   * The type of relationship between the entity and attribute. Type for the relationship is `OVERLAP`, indicating that the entity occurred at the same time as the `Date_Expression`.
   *
   * @public
   */
  RelationshipType?: RelationshipType | undefined;

  /**
   * The numeric identifier for this attribute. This is a monotonically increasing id unique within this response rather than a global unique identifier.
   *
   * @public
   */
  Id?: number | undefined;

  /**
   * The 0-based character offset in the input text that shows where the attribute begins. The offset returns the UTF-8 code point in the string.
   *
   * @public
   */
  BeginOffset?: number | undefined;

  /**
   * The 0-based character offset in the input text that shows where the attribute ends. The offset returns the UTF-8 code point in the string.
   *
   * @public
   */
  EndOffset?: number | undefined;

  /**
   * The segment of input text extracted as this attribute.
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * The category of attribute.
   *
   * @public
   */
  Category?: EntityType | undefined;

  /**
   * Contextual information for this attribute.
   *
   * @public
   */
  Traits?: Trait[] | undefined;
}

/**
 * The number of characters in the input text to be analyzed.
 *
 * @public
 */
export interface Characters {
  /**
   * The number of characters present in the input text document as processed by Amazon Comprehend Medical.
   *
   * @public
   */
  OriginalTextCharacters?: number | undefined;
}

/**
 * @public
 */
export interface DescribeEntitiesDetectionV2JobRequest {
  /**
   * The identifier that Amazon Comprehend Medical generated for the job. The `StartEntitiesDetectionV2Job` operation returns this identifier in its response.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed.
 *
 * @public
 */
export interface InputDataConfig {
  /**
   * The URI of the S3 bucket that contains the input data. The bucket must be in the same region as the API endpoint that you are calling.
   *
   * @public
   */
  S3Bucket: string | undefined;

  /**
   * The path to the input data files in the S3 bucket.
   *
   * @public
   */
  S3Key?: string | undefined;
}

/**
 * The output properties for a detection job.
 *
 * @public
 */
export interface OutputDataConfig {
  /**
   * When you use the `OutputDataConfig` object with asynchronous operations, you specify the Amazon S3 location where you want to write the output data. The URI must be in the same region as the API endpoint that you are calling. The location is used as the prefix for the actual location of the output.
   *
   * @public
   */
  S3Bucket: string | undefined;

  /**
   * The path to the output data files in the S3 bucket. Amazon Comprehend Medical creates an output directory using the job ID so that the output from one job does not overwrite the output of another.
   *
   * @public
   */
  S3Key?: string | undefined;
}

/**
 * Provides information about a detection job.
 *
 * @public
 */
export interface ComprehendMedicalAsyncJobProperties {
  /**
   * The identifier assigned to the detection job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The name that you assigned to the detection job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The current status of the detection job. If the status is `FAILED`, the `Message` field shows the reason for the failure.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * A description of the status of a job.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The time that the detection job was submitted for processing.
   *
   * @public
   */
  SubmitTime?: Date | undefined;

  /**
   * The time that the detection job completed.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The date and time that job metadata is deleted from the server. Output files in your S3 bucket will not be deleted. After the metadata is deleted, the job will no longer appear in the results of the `ListEntitiesDetectionV2Job` or the `ListPHIDetectionJobs` operation.
   *
   * @public
   */
  ExpirationTime?: Date | undefined;

  /**
   * The input data configuration that you supplied when you created the detection job.
   *
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * The output data configuration that you supplied when you created the detection job.
   *
   * @public
   */
  OutputDataConfig?: OutputDataConfig | undefined;

  /**
   * The language code of the input documents.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The Amazon Resource Name (ARN) that gives Amazon Comprehend Medical read access to your input data.
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * The path to the file that describes the results of a batch job.
   *
   * @public
   */
  ManifestFilePath?: string | undefined;

  /**
   * The AWS Key Management Service key, if any, used to encrypt the output files.
   *
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * The version of the model used to analyze the documents. The version number looks like X.X.X. You can use this information to track the model used for a particular batch of documents.
   *
   * @public
   */
  ModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEntitiesDetectionV2JobResponse {
  /**
   * An object that contains the properties associated with a detection job.
   *
   * @public
   */
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties | undefined;
}

/**
 * @public
 */
export interface DescribeICD10CMInferenceJobRequest {
  /**
   * The identifier that Amazon Comprehend Medical generated for the job. `The StartICD10CMInferenceJob` operation returns this identifier in its response.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeICD10CMInferenceJobResponse {
  /**
   * An object that contains the properties associated with a detection job.
   *
   * @public
   */
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties | undefined;
}

/**
 * @public
 */
export interface DescribePHIDetectionJobRequest {
  /**
   * The identifier that Amazon Comprehend Medical generated for the job. The `StartPHIDetectionJob` operation returns this identifier in its response.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface DescribePHIDetectionJobResponse {
  /**
   * An object that contains the properties associated with a detection job.
   *
   * @public
   */
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties | undefined;
}

/**
 * @public
 */
export interface DescribeRxNormInferenceJobRequest {
  /**
   * The identifier that Amazon Comprehend Medical generated for the job. The StartRxNormInferenceJob operation returns this identifier in its response.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeRxNormInferenceJobResponse {
  /**
   * An object that contains the properties associated with a detection job.
   *
   * @public
   */
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties | undefined;
}

/**
 * @public
 */
export interface DescribeSNOMEDCTInferenceJobRequest {
  /**
   * The identifier that Amazon Comprehend Medical generated for the job. The StartSNOMEDCTInferenceJob operation returns this identifier in its response.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeSNOMEDCTInferenceJobResponse {
  /**
   * Provides information about a detection job.
   *
   * @public
   */
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties | undefined;
}

/**
 * @public
 */
export interface DetectEntitiesRequest {
  /**
   * A UTF-8 text string containing the clinical content being examined for entities.
   *
   * @public
   */
  Text: string | undefined;
}

/**
 * Provides information about an extracted medical entity.
 *
 * @public
 */
export interface Entity {
  /**
   * The numeric identifier for the entity. This is a monotonically increasing id unique within this response rather than a global unique identifier.
   *
   * @public
   */
  Id?: number | undefined;

  /**
   * The 0-based character offset in the input text that shows where the entity begins. The offset returns the UTF-8 code point in the string.
   *
   * @public
   */
  BeginOffset?: number | undefined;

  /**
   * The 0-based character offset in the input text that shows where the entity ends. The offset returns the UTF-8 code point in the string.
   *
   * @public
   */
  EndOffset?: number | undefined;

  /**
   * The level of confidence that Amazon Comprehend Medical has in the accuracy of the detection.
   *
   * @public
   */
  Score?: number | undefined;

  /**
   * The segment of input text extracted as this entity.
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * The category of the entity.
   *
   * @public
   */
  Category?: EntityType | undefined;

  /**
   * Describes the specific type of entity with category of entities.
   *
   * @public
   */
  Type?: EntitySubType | undefined;

  /**
   * Contextual information for the entity.
   *
   * @public
   */
  Traits?: Trait[] | undefined;

  /**
   * The extracted attributes that relate to this entity.
   *
   * @public
   */
  Attributes?: Attribute[] | undefined;
}

/**
 * An attribute that was extracted, but Amazon Comprehend Medical was unable to relate to an entity.
 *
 * @public
 */
export interface UnmappedAttribute {
  /**
   * The type of the unmapped attribute, could be one of the following values: "MEDICATION", "MEDICAL_CONDITION", "ANATOMY", "TEST_AND_TREATMENT_PROCEDURE" or "PROTECTED_HEALTH_INFORMATION".
   *
   * @public
   */
  Type?: EntityType | undefined;

  /**
   * The specific attribute that has been extracted but not mapped to an entity.
   *
   * @public
   */
  Attribute?: Attribute | undefined;
}

/**
 * @public
 */
export interface DetectEntitiesResponse {
  /**
   * The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.
   *
   * @public
   */
  Entities: Entity[] | undefined;

  /**
   * Attributes extracted from the input text that we were unable to relate to an entity.
   *
   * @public
   */
  UnmappedAttributes?: UnmappedAttribute[] | undefined;

  /**
   * If the result of the previous request to `DetectEntities` was truncated, include the `PaginationToken` to fetch the next page of entities.
   *
   * @public
   */
  PaginationToken?: string | undefined;

  /**
   * The version of the model used to analyze the documents. The version number looks like X.X.X. You can use this information to track the model used for a particular batch of documents.
   *
   * @public
   */
  ModelVersion: string | undefined;
}

/**
 * @public
 */
export interface DetectEntitiesV2Request {
  /**
   * A UTF-8 string containing the clinical content being examined for entities.
   *
   * @public
   */
  Text: string | undefined;
}

/**
 * @public
 */
export interface DetectEntitiesV2Response {
  /**
   * The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence in the detection and analysis. Attributes and traits of the entity are also returned.
   *
   * @public
   */
  Entities: Entity[] | undefined;

  /**
   * Attributes extracted from the input text that couldn't be related to an entity.
   *
   * @public
   */
  UnmappedAttributes?: UnmappedAttribute[] | undefined;

  /**
   * If the result to the `DetectEntitiesV2` operation was truncated, include the `PaginationToken` to fetch the next page of entities.
   *
   * @public
   */
  PaginationToken?: string | undefined;

  /**
   * The version of the model used to analyze the documents. The version number looks like X.X.X. You can use this information to track the model used for a particular batch of documents.
   *
   * @public
   */
  ModelVersion: string | undefined;
}

/**
 * @public
 */
export interface DetectPHIRequest {
  /**
   * A UTF-8 text string containing the clinical content being examined for PHI entities.
   *
   * @public
   */
  Text: string | undefined;
}

/**
 * @public
 */
export interface DetectPHIResponse {
  /**
   * The collection of PHI entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in its detection.
   *
   * @public
   */
  Entities: Entity[] | undefined;

  /**
   * If the result of the previous request to `DetectPHI` was truncated, include the `PaginationToken` to fetch the next page of PHI entities.
   *
   * @public
   */
  PaginationToken?: string | undefined;

  /**
   * The version of the model used to analyze the documents. The version number looks like X.X.X. You can use this information to track the model used for a particular batch of documents.
   *
   * @public
   */
  ModelVersion: string | undefined;
}

/**
 * @public
 */
export interface InferICD10CMRequest {
  /**
   * The input text used for analysis.
   *
   * @public
   */
  Text: string | undefined;
}

/**
 * Contextual information for the entity. The traits recognized by InferICD10CM are `DIAGNOSIS`, `SIGN`, `SYMPTOM`, and `NEGATION`.
 *
 * @public
 */
export interface ICD10CMTrait {
  /**
   * Provides a name or contextual description about the trait.
   *
   * @public
   */
  Name?: ICD10CMTraitName | undefined;

  /**
   * The level of confidence that Amazon Comprehend Medical has that the segment of text is correctly recognized as a trait.
   *
   * @public
   */
  Score?: number | undefined;
}

/**
 * The detected attributes that relate to an entity. This includes an extracted segment of the text that is an attribute of an entity, or otherwise related to an entity. InferICD10CM detects the following attributes: `Direction`, `System, Organ or Site`, and `Acuity`.
 *
 * @public
 */
export interface ICD10CMAttribute {
  /**
   * The type of attribute. InferICD10CM detects entities of the type `DX_NAME`.
   *
   * @public
   */
  Type?: ICD10CMAttributeType | undefined;

  /**
   * The level of confidence that Amazon Comprehend Medical has that the segment of text is correctly recognized as an attribute.
   *
   * @public
   */
  Score?: number | undefined;

  /**
   * The level of confidence that Amazon Comprehend Medical has that this attribute is correctly related to this entity.
   *
   * @public
   */
  RelationshipScore?: number | undefined;

  /**
   * The numeric identifier for this attribute. This is a monotonically increasing id unique within this response rather than a global unique identifier.
   *
   * @public
   */
  Id?: number | undefined;

  /**
   * The 0-based character offset in the input text that shows where the attribute begins. The offset returns the UTF-8 code point in the string.
   *
   * @public
   */
  BeginOffset?: number | undefined;

  /**
   * The 0-based character offset in the input text that shows where the attribute ends. The offset returns the UTF-8 code point in the string.
   *
   * @public
   */
  EndOffset?: number | undefined;

  /**
   * The segment of input text which contains the detected attribute.
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * The contextual information for the attribute. The traits recognized by InferICD10CM are `DIAGNOSIS`, `SIGN`, `SYMPTOM`, and `NEGATION`.
   *
   * @public
   */
  Traits?: ICD10CMTrait[] | undefined;

  /**
   * The category of attribute. Can be either of `DX_NAME` or `TIME_EXPRESSION`.
   *
   * @public
   */
  Category?: ICD10CMEntityType | undefined;

  /**
   * The type of relationship between the entity and attribute. Type for the relationship can be either of `OVERLAP` or `SYSTEM_ORGAN_SITE`.
   *
   * @public
   */
  RelationshipType?: ICD10CMRelationshipType | undefined;
}

/**
 * The ICD-10-CM concepts that the entity could refer to, along with a score indicating the likelihood of the match.
 *
 * @public
 */
export interface ICD10CMConcept {
  /**
   * The long description of the ICD-10-CM code in the ontology.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ICD-10-CM code that identifies the concept found in the knowledge base from the Centers for Disease Control.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * The level of confidence that Amazon Comprehend Medical has that the entity is accurately linked to an ICD-10-CM concept.
   *
   * @public
   */
  Score?: number | undefined;
}

/**
 * The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.
 *
 * @public
 */
export interface ICD10CMEntity {
  /**
   * The numeric identifier for the entity. This is a monotonically increasing id unique within this response rather than a global unique identifier.
   *
   * @public
   */
  Id?: number | undefined;

  /**
   * The segment of input text that is matched to the detected entity.
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * The category of the entity. InferICD10CM detects entities in the `MEDICAL_CONDITION` category.
   *
   * @public
   */
  Category?: ICD10CMEntityCategory | undefined;

  /**
   * Describes the specific type of entity with category of entities. InferICD10CM detects entities of the type `DX_NAME` and `TIME_EXPRESSION`.
   *
   * @public
   */
  Type?: ICD10CMEntityType | undefined;

  /**
   * The level of confidence that Amazon Comprehend Medical has in the accuracy of the detection.
   *
   * @public
   */
  Score?: number | undefined;

  /**
   * The 0-based character offset in the input text that shows where the entity begins. The offset returns the UTF-8 code point in the string.
   *
   * @public
   */
  BeginOffset?: number | undefined;

  /**
   * The 0-based character offset in the input text that shows where the entity ends. The offset returns the UTF-8 code point in the string.
   *
   * @public
   */
  EndOffset?: number | undefined;

  /**
   * The detected attributes that relate to the entity. An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the nature of a medical condition.
   *
   * @public
   */
  Attributes?: ICD10CMAttribute[] | undefined;

  /**
   * Provides Contextual information for the entity. The traits recognized by InferICD10CM are `DIAGNOSIS`, `SIGN`, `SYMPTOM`, and `NEGATION.`
   *
   * @public
   */
  Traits?: ICD10CMTrait[] | undefined;

  /**
   * The ICD-10-CM concepts that the entity could refer to, along with a score indicating the likelihood of the match.
   *
   * @public
   */
  ICD10CMConcepts?: ICD10CMConcept[] | undefined;
}

/**
 * @public
 */
export interface InferICD10CMResponse {
  /**
   * The medical conditions detected in the text linked to ICD-10-CM concepts. If the action is successful, the service sends back an HTTP 200 response, as well as the entities detected.
   *
   * @public
   */
  Entities: ICD10CMEntity[] | undefined;

  /**
   * If the result of the previous request to `InferICD10CM` was truncated, include the `PaginationToken` to fetch the next page of medical condition entities.
   *
   * @public
   */
  PaginationToken?: string | undefined;

  /**
   * The version of the model used to analyze the documents, in the format *n*.*n*.*n* You can use this information to track the model used for a particular batch of documents.
   *
   * @public
   */
  ModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface InferRxNormRequest {
  /**
   * The input text used for analysis.
   *
   * @public
   */
  Text: string | undefined;
}

/**
 * The contextual information for the entity. InferRxNorm recognizes the trait `NEGATION`, which is any indication that the patient is not taking a medication.
 *
 * @public
 */
export interface RxNormTrait {
  /**
   * Provides a name or contextual description about the trait.
   *
   * @public
   */
  Name?: RxNormTraitName | undefined;

  /**
   * The level of confidence that Amazon Comprehend Medical has in the accuracy of the detected trait.
   *
   * @public
   */
  Score?: number | undefined;
}

/**
 * The extracted attributes that relate to this entity. The attributes recognized by InferRxNorm are `DOSAGE`, `DURATION`, `FORM`, `FREQUENCY`, `RATE`, `ROUTE_OR_MODE`.
 *
 * @public
 */
export interface RxNormAttribute {
  /**
   * The type of attribute. The types of attributes recognized by InferRxNorm are `BRAND_NAME` and `GENERIC_NAME`.
   *
   * @public
   */
  Type?: RxNormAttributeType | undefined;

  /**
   * The level of confidence that Amazon Comprehend Medical has that the segment of text is correctly recognized as an attribute.
   *
   * @public
   */
  Score?: number | undefined;

  /**
   * The level of confidence that Amazon Comprehend Medical has that the attribute is accurately linked to an entity.
   *
   * @public
   */
  RelationshipScore?: number | undefined;

  /**
   * The numeric identifier for this attribute. This is a monotonically increasing id unique within this response rather than a global unique identifier.
   *
   * @public
   */
  Id?: number | undefined;

  /**
   * The 0-based character offset in the input text that shows where the attribute begins. The offset returns the UTF-8 code point in the string.
   *
   * @public
   */
  BeginOffset?: number | undefined;

  /**
   * The 0-based character offset in the input text that shows where the attribute ends. The offset returns the UTF-8 code point in the string.
   *
   * @public
   */
  EndOffset?: number | undefined;

  /**
   * The segment of input text which corresponds to the detected attribute.
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * Contextual information for the attribute. InferRxNorm recognizes the trait `NEGATION` for attributes, i.e. that the patient is not taking a specific dose or form of a medication.
   *
   * @public
   */
  Traits?: RxNormTrait[] | undefined;
}

/**
 * The RxNorm concept that the entity could refer to, along with a score indicating the likelihood of the match.
 *
 * @public
 */
export interface RxNormConcept {
  /**
   * The description of the RxNorm concept.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * RxNorm concept ID, also known as the RxCUI.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * The level of confidence that Amazon Comprehend Medical has that the entity is accurately linked to the reported RxNorm concept.
   *
   * @public
   */
  Score?: number | undefined;
}

/**
 * The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.
 *
 * @public
 */
export interface RxNormEntity {
  /**
   * The numeric identifier for the entity. This is a monotonically increasing id unique within this response rather than a global unique identifier.
   *
   * @public
   */
  Id?: number | undefined;

  /**
   * The segment of input text extracted from which the entity was detected.
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * The category of the entity. The recognized categories are `GENERIC` or `BRAND_NAME`.
   *
   * @public
   */
  Category?: RxNormEntityCategory | undefined;

  /**
   * Describes the specific type of entity. For InferRxNorm, the recognized entity type is `MEDICATION`.
   *
   * @public
   */
  Type?: RxNormEntityType | undefined;

  /**
   * The level of confidence that Amazon Comprehend Medical has in the accuracy of the detected entity.
   *
   * @public
   */
  Score?: number | undefined;

  /**
   * The 0-based character offset in the input text that shows where the entity begins. The offset returns the UTF-8 code point in the string.
   *
   * @public
   */
  BeginOffset?: number | undefined;

  /**
   * The 0-based character offset in the input text that shows where the entity ends. The offset returns the UTF-8 code point in the string.
   *
   * @public
   */
  EndOffset?: number | undefined;

  /**
   * The extracted attributes that relate to the entity. The attributes recognized by InferRxNorm are `DOSAGE`, `DURATION`, `FORM`, `FREQUENCY`, `RATE`, `ROUTE_OR_MODE`, and `STRENGTH`.
   *
   * @public
   */
  Attributes?: RxNormAttribute[] | undefined;

  /**
   * Contextual information for the entity.
   *
   * @public
   */
  Traits?: RxNormTrait[] | undefined;

  /**
   * The RxNorm concepts that the entity could refer to, along with a score indicating the likelihood of the match.
   *
   * @public
   */
  RxNormConcepts?: RxNormConcept[] | undefined;
}

/**
 * @public
 */
export interface InferRxNormResponse {
  /**
   * The medication entities detected in the text linked to RxNorm concepts. If the action is successful, the service sends back an HTTP 200 response, as well as the entities detected.
   *
   * @public
   */
  Entities: RxNormEntity[] | undefined;

  /**
   * If the result of the previous request to `InferRxNorm` was truncated, include the `PaginationToken` to fetch the next page of medication entities.
   *
   * @public
   */
  PaginationToken?: string | undefined;

  /**
   * The version of the model used to analyze the documents, in the format *n*.*n*.*n* You can use this information to track the model used for a particular batch of documents.
   *
   * @public
   */
  ModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface InferSNOMEDCTRequest {
  /**
   * The input text to be analyzed using InferSNOMEDCT.
   *
   * @public
   */
  Text: string | undefined;
}

/**
 * The SNOMED-CT concepts that the entity could refer to, along with a score indicating the likelihood of the match.
 *
 * @public
 */
export interface SNOMEDCTConcept {
  /**
   * The description of the SNOMED-CT concept.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The numeric ID for the SNOMED-CT concept.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * The level of confidence Amazon Comprehend Medical has that the entity should be linked to the identified SNOMED-CT concept.
   *
   * @public
   */
  Score?: number | undefined;
}

/**
 * Contextual information for an entity.
 *
 * @public
 */
export interface SNOMEDCTTrait {
  /**
   * The name or contextual description of a detected trait.
   *
   * @public
   */
  Name?: SNOMEDCTTraitName | undefined;

  /**
   * The level of confidence that Amazon Comprehend Medical has in the accuracy of a detected trait.
   *
   * @public
   */
  Score?: number | undefined;
}

/**
 * The extracted attributes that relate to an entity. An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken.
 *
 * @public
 */
export interface SNOMEDCTAttribute {
  /**
   * The category of the detected attribute. Possible categories include MEDICAL_CONDITION, ANATOMY, and TEST_TREATMENT_PROCEDURE.
   *
   * @public
   */
  Category?: SNOMEDCTEntityCategory | undefined;

  /**
   * The type of attribute. Possible types include DX_NAME, ACUITY, DIRECTION, SYSTEM_ORGAN_SITE,TEST_NAME, TEST_VALUE, TEST_UNIT, PROCEDURE_NAME, and TREATMENT_NAME.
   *
   * @public
   */
  Type?: SNOMEDCTAttributeType | undefined;

  /**
   * The level of confidence that Amazon Comprehend Medical has that the segment of text is correctly recognized as an attribute.
   *
   * @public
   */
  Score?: number | undefined;

  /**
   * The level of confidence that Amazon Comprehend Medical has that this attribute is correctly related to this entity.
   *
   * @public
   */
  RelationshipScore?: number | undefined;

  /**
   * The type of relationship that exists between the entity and the related attribute.
   *
   * @public
   */
  RelationshipType?: SNOMEDCTRelationshipType | undefined;

  /**
   * The numeric identifier for this attribute. This is a monotonically increasing id unique within this response rather than a global unique identifier.
   *
   * @public
   */
  Id?: number | undefined;

  /**
   * The 0-based character offset in the input text that shows where the attribute begins. The offset returns the UTF-8 code point in the string.
   *
   * @public
   */
  BeginOffset?: number | undefined;

  /**
   * The 0-based character offset in the input text that shows where the attribute ends. The offset returns the UTF-8 code point in the string.
   *
   * @public
   */
  EndOffset?: number | undefined;

  /**
   * The segment of input text extracted as this attribute.
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * Contextual information for an attribute. Examples include signs, symptoms, diagnosis, and negation.
   *
   * @public
   */
  Traits?: SNOMEDCTTrait[] | undefined;

  /**
   * The SNOMED-CT concepts specific to an attribute, along with a score indicating the likelihood of the match.
   *
   * @public
   */
  SNOMEDCTConcepts?: SNOMEDCTConcept[] | undefined;
}

/**
 * The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.
 *
 * @public
 */
export interface SNOMEDCTEntity {
  /**
   * The numeric identifier for the entity. This is a monotonically increasing id unique within this response rather than a global unique identifier.
   *
   * @public
   */
  Id?: number | undefined;

  /**
   * The segment of input text extracted as this entity.
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * The category of the detected entity. Possible categories are MEDICAL_CONDITION, ANATOMY, or TEST_TREATMENT_PROCEDURE.
   *
   * @public
   */
  Category?: SNOMEDCTEntityCategory | undefined;

  /**
   * Describes the specific type of entity with category of entities. Possible types include DX_NAME, ACUITY, DIRECTION, SYSTEM_ORGAN_SITE, TEST_NAME, TEST_VALUE, TEST_UNIT, PROCEDURE_NAME, or TREATMENT_NAME.
   *
   * @public
   */
  Type?: SNOMEDCTEntityType | undefined;

  /**
   * The level of confidence that Amazon Comprehend Medical has in the accuracy of the detected entity.
   *
   * @public
   */
  Score?: number | undefined;

  /**
   * The 0-based character offset in the input text that shows where the entity begins. The offset returns the UTF-8 code point in the string.
   *
   * @public
   */
  BeginOffset?: number | undefined;

  /**
   * The 0-based character offset in the input text that shows where the entity ends. The offset returns the UTF-8 code point in the string.
   *
   * @public
   */
  EndOffset?: number | undefined;

  /**
   * An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken.
   *
   * @public
   */
  Attributes?: SNOMEDCTAttribute[] | undefined;

  /**
   * Contextual information for the entity.
   *
   * @public
   */
  Traits?: SNOMEDCTTrait[] | undefined;

  /**
   * The SNOMED concepts that the entity could refer to, along with a score indicating the likelihood of the match.
   *
   * @public
   */
  SNOMEDCTConcepts?: SNOMEDCTConcept[] | undefined;
}

/**
 * The information about the revision of the SNOMED-CT ontology in the response. Specifically, the details include the SNOMED-CT edition, language, and version date.
 *
 * @public
 */
export interface SNOMEDCTDetails {
  /**
   * The edition of SNOMED-CT used. The edition used for the InferSNOMEDCT editions is the US edition.
   *
   * @public
   */
  Edition?: string | undefined;

  /**
   * The language used in the SNOMED-CT ontology. All Amazon Comprehend Medical operations are US English (en).
   *
   * @public
   */
  Language?: string | undefined;

  /**
   * The version date of the SNOMED-CT ontology used.
   *
   * @public
   */
  VersionDate?: string | undefined;
}

/**
 * @public
 */
export interface InferSNOMEDCTResponse {
  /**
   * The collection of medical concept entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.
   *
   * @public
   */
  Entities: SNOMEDCTEntity[] | undefined;

  /**
   * If the result of the request is truncated, the pagination token can be used to fetch the next page of entities.
   *
   * @public
   */
  PaginationToken?: string | undefined;

  /**
   * The version of the model used to analyze the documents, in the format n.n.n You can use this information to track the model used for a particular batch of documents.
   *
   * @public
   */
  ModelVersion?: string | undefined;

  /**
   * The details of the SNOMED-CT revision, including the edition, language, and version date.
   *
   * @public
   */
  SNOMEDCTDetails?: SNOMEDCTDetails | undefined;

  /**
   * The number of characters in the input request documentation.
   *
   * @public
   */
  Characters?: Characters | undefined;
}

/**
 * Provides information for filtering a list of detection jobs.
 *
 * @public
 */
export interface ComprehendMedicalAsyncJobFilter {
  /**
   * Filters on the name of the job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * Filters the list of jobs based on job status. Returns only jobs with the specified status.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.
   *
   * @public
   */
  SubmitTimeBefore?: Date | undefined;

  /**
   * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.
   *
   * @public
   */
  SubmitTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListEntitiesDetectionV2JobsRequest {
  /**
   * Filters the jobs that are returned. You can filter jobs based on their names, status, or the date and time that they were submitted. You can only set one filter at a time.
   *
   * @public
   */
  Filter?: ComprehendMedicalAsyncJobFilter | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in each page. The default is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEntitiesDetectionV2JobsResponse {
  /**
   * A list containing the properties of each job returned.
   *
   * @public
   */
  ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[] | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListICD10CMInferenceJobsRequest {
  /**
   * Filters the jobs that are returned. You can filter jobs based on their names, status, or the date and time that they were submitted. You can only set one filter at a time.
   *
   * @public
   */
  Filter?: ComprehendMedicalAsyncJobFilter | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in each page. The default is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListICD10CMInferenceJobsResponse {
  /**
   * A list containing the properties of each job that is returned.
   *
   * @public
   */
  ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[] | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPHIDetectionJobsRequest {
  /**
   * Filters the jobs that are returned. You can filter jobs based on their names, status, or the date and time that they were submitted. You can only set one filter at a time.
   *
   * @public
   */
  Filter?: ComprehendMedicalAsyncJobFilter | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in each page. The default is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListPHIDetectionJobsResponse {
  /**
   * A list containing the properties of each job returned.
   *
   * @public
   */
  ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[] | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRxNormInferenceJobsRequest {
  /**
   * Filters the jobs that are returned. You can filter jobs based on their names, status, or the date and time that they were submitted. You can only set one filter at a time.
   *
   * @public
   */
  Filter?: ComprehendMedicalAsyncJobFilter | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListRxNormInferenceJobsResponse {
  /**
   * The maximum number of results to return in each page. The default is 100.
   *
   * @public
   */
  ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[] | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSNOMEDCTInferenceJobsRequest {
  /**
   * Provides information for filtering a list of detection jobs.
   *
   * @public
   */
  Filter?: ComprehendMedicalAsyncJobFilter | undefined;

  /**
   * Identifies the next page of InferSNOMEDCT results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in each page. The default is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListSNOMEDCTInferenceJobsResponse {
  /**
   * A list containing the properties of each job that is returned.
   *
   * @public
   */
  ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[] | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartEntitiesDetectionV2JobRequest {
  /**
   * The input configuration that specifies the format and location of the input data for the job.
   *
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * The output configuration that specifies where to send the output files.
   *
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend Medical read access to your input data. For more information, see [Role-Based Permissions Required for Asynchronous Operations](https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions-med.html#auth-role-permissions-med).
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * The identifier of the job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * A unique identifier for the request. If you don't set the client request token, Amazon Comprehend Medical generates one for you.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * An AWS Key Management Service key to encrypt your output files. If you do not specify a key, the files are written in plain text.
   *
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * The language of the input documents. All documents must be in the same language. Amazon Comprehend Medical processes files in US English (en).
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;
}

/**
 * @public
 */
export interface StartEntitiesDetectionV2JobResponse {
  /**
   * The identifier generated for the job. To get the status of a job, use this identifier with the `DescribeEntitiesDetectionV2Job` operation.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface StartICD10CMInferenceJobRequest {
  /**
   * Specifies the format and location of the input data for the job.
   *
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * Specifies where to send the output files.
   *
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend Medical read access to your input data. For more information, see [Role-Based Permissions Required for Asynchronous Operations](https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions-med.html#auth-role-permissions-med).
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * The identifier of the job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * A unique identifier for the request. If you don't set the client request token, Amazon Comprehend Medical generates one.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * An AWS Key Management Service key to encrypt your output files. If you do not specify a key, the files are written in plain text.
   *
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * The language of the input documents. All documents must be in the same language.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;
}

/**
 * @public
 */
export interface StartICD10CMInferenceJobResponse {
  /**
   * The identifier generated for the job. To get the status of a job, use this identifier with the `StartICD10CMInferenceJob` operation.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface StartPHIDetectionJobRequest {
  /**
   * Specifies the format and location of the input data for the job.
   *
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * Specifies where to send the output files.
   *
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend Medical read access to your input data. For more information, see [Role-Based Permissions Required for Asynchronous Operations](https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions-med.html#auth-role-permissions-med).
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * The identifier of the job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * A unique identifier for the request. If you don't set the client request token, Amazon Comprehend Medical generates one.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * An AWS Key Management Service key to encrypt your output files. If you do not specify a key, the files are written in plain text.
   *
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * The language of the input documents. All documents must be in the same language.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;
}

/**
 * @public
 */
export interface StartPHIDetectionJobResponse {
  /**
   * The identifier generated for the job. To get the status of a job, use this identifier with the `DescribePHIDetectionJob` operation.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface StartRxNormInferenceJobRequest {
  /**
   * Specifies the format and location of the input data for the job.
   *
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * Specifies where to send the output files.
   *
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend Medical read access to your input data. For more information, see [Role-Based Permissions Required for Asynchronous Operations](https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions-med.html#auth-role-permissions-med).
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * The identifier of the job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * A unique identifier for the request. If you don't set the client request token, Amazon Comprehend Medical generates one.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * An AWS Key Management Service key to encrypt your output files. If you do not specify a key, the files are written in plain text.
   *
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * The language of the input documents. All documents must be in the same language.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;
}

/**
 * @public
 */
export interface StartRxNormInferenceJobResponse {
  /**
   * The identifier of the job.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface StartSNOMEDCTInferenceJobRequest {
  /**
   * The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed.
   *
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * The output properties for a detection job.
   *
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend Medical read access to your input data.
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * The user generated name the asynchronous InferSNOMEDCT job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * A unique identifier for the request. If you don't set the client request token, Amazon Comprehend Medical generates one.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * An AWS Key Management Service key used to encrypt your output files. If you do not specify a key, the files are written in plain text.
   *
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * The language of the input documents. All documents must be in the same language.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;
}

/**
 * @public
 */
export interface StartSNOMEDCTInferenceJobResponse {
  /**
   * The identifier generated for the job. To get the status of a job, use this identifier with the StartSNOMEDCTInferenceJob operation.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface StopEntitiesDetectionV2JobRequest {
  /**
   * The identifier of the medical entities job to stop.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopEntitiesDetectionV2JobResponse {
  /**
   * The identifier of the medical entities detection job that was stopped.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface StopICD10CMInferenceJobRequest {
  /**
   * The identifier of the job.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopICD10CMInferenceJobResponse {
  /**
   * The identifier generated for the job. To get the status of job, use this identifier with the `DescribeICD10CMInferenceJob` operation.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface StopPHIDetectionJobRequest {
  /**
   * The identifier of the PHI detection job to stop.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopPHIDetectionJobResponse {
  /**
   * The identifier of the PHI detection job that was stopped.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface StopRxNormInferenceJobRequest {
  /**
   * The identifier of the job.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopRxNormInferenceJobResponse {
  /**
   * The identifier generated for the job. To get the status of job, use this identifier with the `DescribeRxNormInferenceJob` operation.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface StopSNOMEDCTInferenceJobRequest {
  /**
   * The job id of the asynchronous InferSNOMEDCT job to be stopped.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopSNOMEDCTInferenceJobResponse {
  /**
   * The identifier generated for the job. To get the status of job, use this identifier with the DescribeSNOMEDCTInferenceJob operation.
   *
   * @public
   */
  JobId?: string | undefined;
}
