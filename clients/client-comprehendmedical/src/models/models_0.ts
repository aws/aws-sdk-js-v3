// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ComprehendMedicalServiceException as __BaseException } from "./ComprehendMedicalServiceException";

/**
 * @public
 * @enum
 */
export const EntityType = {
  ANATOMY: "ANATOMY",
  BEHAVIORAL_ENVIRONMENTAL_SOCIAL: "BEHAVIORAL_ENVIRONMENTAL_SOCIAL",
  MEDICAL_CONDITION: "MEDICAL_CONDITION",
  MEDICATION: "MEDICATION",
  PROTECTED_HEALTH_INFORMATION: "PROTECTED_HEALTH_INFORMATION",
  TEST_TREATMENT_PROCEDURE: "TEST_TREATMENT_PROCEDURE",
  TIME_EXPRESSION: "TIME_EXPRESSION",
} as const;

/**
 * @public
 */
export type EntityType = (typeof EntityType)[keyof typeof EntityType];

/**
 * @public
 * @enum
 */
export const RelationshipType = {
  ACUITY: "ACUITY",
  ADMINISTERED_VIA: "ADMINISTERED_VIA",
  AMOUNT: "AMOUNT",
  DIRECTION: "DIRECTION",
  DOSAGE: "DOSAGE",
  DURATION: "DURATION",
  EVERY: "EVERY",
  FOR: "FOR",
  FORM: "FORM",
  FREQUENCY: "FREQUENCY",
  NEGATIVE: "NEGATIVE",
  OVERLAP: "OVERLAP",
  QUALITY: "QUALITY",
  RATE: "RATE",
  ROUTE_OR_MODE: "ROUTE_OR_MODE",
  STRENGTH: "STRENGTH",
  SYSTEM_ORGAN_SITE: "SYSTEM_ORGAN_SITE",
  TEST_UNIT: "TEST_UNIT",
  TEST_UNITS: "TEST_UNITS",
  TEST_VALUE: "TEST_VALUE",
  USAGE: "USAGE",
  WITH_DOSAGE: "WITH_DOSAGE",
} as const;

/**
 * @public
 */
export type RelationshipType = (typeof RelationshipType)[keyof typeof RelationshipType];

/**
 * @public
 * @enum
 */
export const AttributeName = {
  DIAGNOSIS: "DIAGNOSIS",
  FUTURE: "FUTURE",
  HYPOTHETICAL: "HYPOTHETICAL",
  LOW_CONFIDENCE: "LOW_CONFIDENCE",
  NEGATION: "NEGATION",
  PAST_HISTORY: "PAST_HISTORY",
  PERTAINS_TO_FAMILY: "PERTAINS_TO_FAMILY",
  SIGN: "SIGN",
  SYMPTOM: "SYMPTOM",
} as const;

/**
 * @public
 */
export type AttributeName = (typeof AttributeName)[keyof typeof AttributeName];

/**
 * @public
 * <p> Provides contextual information about the extracted entity. </p>
 */
export interface Trait {
  /**
   * @public
   * <p> Provides a name or contextual description about the trait. </p>
   */
  Name?: AttributeName | string;

  /**
   * @public
   * <p> The level of confidence that Amazon Comprehend Medical has in the accuracy of this trait.</p>
   */
  Score?: number;
}

/**
 * @public
 * @enum
 */
export const EntitySubType = {
  ACUITY: "ACUITY",
  ADDRESS: "ADDRESS",
  AGE: "AGE",
  ALCOHOL_CONSUMPTION: "ALCOHOL_CONSUMPTION",
  ALLERGIES: "ALLERGIES",
  AMOUNT: "AMOUNT",
  BRAND_NAME: "BRAND_NAME",
  CONTACT_POINT: "CONTACT_POINT",
  DATE: "DATE",
  DIRECTION: "DIRECTION",
  DOSAGE: "DOSAGE",
  DURATION: "DURATION",
  DX_NAME: "DX_NAME",
  EMAIL: "EMAIL",
  FORM: "FORM",
  FREQUENCY: "FREQUENCY",
  GENDER: "GENDER",
  GENERIC_NAME: "GENERIC_NAME",
  ID: "ID",
  IDENTIFIER: "IDENTIFIER",
  NAME: "NAME",
  PHONE_OR_FAX: "PHONE_OR_FAX",
  PROCEDURE_NAME: "PROCEDURE_NAME",
  PROFESSION: "PROFESSION",
  QUALITY: "QUALITY",
  QUANTITY: "QUANTITY",
  RACE_ETHNICITY: "RACE_ETHNICITY",
  RATE: "RATE",
  REC_DRUG_USE: "REC_DRUG_USE",
  ROUTE_OR_MODE: "ROUTE_OR_MODE",
  STRENGTH: "STRENGTH",
  SYSTEM_ORGAN_SITE: "SYSTEM_ORGAN_SITE",
  TEST_NAME: "TEST_NAME",
  TEST_UNIT: "TEST_UNIT",
  TEST_UNITS: "TEST_UNITS",
  TEST_VALUE: "TEST_VALUE",
  TIME_EXPRESSION: "TIME_EXPRESSION",
  TIME_TO_DX_NAME: "TIME_TO_DX_NAME",
  TIME_TO_MEDICATION_NAME: "TIME_TO_MEDICATION_NAME",
  TIME_TO_PROCEDURE_NAME: "TIME_TO_PROCEDURE_NAME",
  TIME_TO_TEST_NAME: "TIME_TO_TEST_NAME",
  TIME_TO_TREATMENT_NAME: "TIME_TO_TREATMENT_NAME",
  TOBACCO_USE: "TOBACCO_USE",
  TREATMENT_NAME: "TREATMENT_NAME",
  URL: "URL",
} as const;

/**
 * @public
 */
export type EntitySubType = (typeof EntitySubType)[keyof typeof EntitySubType];

/**
 * @public
 * <p> An extracted segment of the text that is an attribute of an entity, or otherwise related
 *       to an entity, such as the dosage of a medication taken. It contains information about the
 *       attribute such as id, begin and end offset within the input text, and the segment of the input
 *       text. </p>
 */
export interface Attribute {
  /**
   * @public
   * <p> The type of attribute. </p>
   */
  Type?: EntitySubType | string;

  /**
   * @public
   * <p> The level of confidence that Amazon Comprehend Medical has that the segment of text is correctly recognized
   *       as an attribute. </p>
   */
  Score?: number;

  /**
   * @public
   * <p> The level of confidence that Amazon Comprehend Medical has that this attribute is correctly related to this
   *       entity. </p>
   */
  RelationshipScore?: number;

  /**
   * @public
   * <p>The type of relationship between the entity and attribute. Type for the relationship is
   *         <code>OVERLAP</code>, indicating that the entity occurred at the same time as the
   *         <code>Date_Expression</code>. </p>
   */
  RelationshipType?: RelationshipType | string;

  /**
   * @public
   * <p> The numeric identifier for this attribute. This is a monotonically increasing id unique
   *       within this response rather than a global unique identifier. </p>
   */
  Id?: number;

  /**
   * @public
   * <p> The 0-based character offset in the input text that shows where the attribute begins. The
   *       offset returns the UTF-8 code point in the string. </p>
   */
  BeginOffset?: number;

  /**
   * @public
   * <p> The 0-based character offset in the input text that shows where the attribute ends. The
   *       offset returns the UTF-8 code point in the string.</p>
   */
  EndOffset?: number;

  /**
   * @public
   * <p> The segment of input text extracted as this attribute.</p>
   */
  Text?: string;

  /**
   * @public
   * <p> The category of attribute. </p>
   */
  Category?: EntityType | string;

  /**
   * @public
   * <p> Contextual information for this attribute. </p>
   */
  Traits?: Trait[];
}

/**
 * @public
 * <p>
 *       The number of characters in the input text to be analyzed.
 *     </p>
 */
export interface Characters {
  /**
   * @public
   * <p>
   *       The number of characters present in the input text document as processed by Amazon Comprehend Medical.
   *     </p>
   */
  OriginalTextCharacters?: number;
}

/**
 * @public
 */
export interface DescribeEntitiesDetectionV2JobRequest {
  /**
   * @public
   * <p>The identifier that Amazon Comprehend Medical generated for the job. The
   *         <code>StartEntitiesDetectionV2Job</code> operation returns this identifier in its
   *       response.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 * <p>The input properties for an entities detection job. This includes the name of the S3
 *       bucket and the path to the files to be analyzed. </p>
 */
export interface InputDataConfig {
  /**
   * @public
   * <p>The URI of the S3 bucket that contains the input data. The bucket must be in the same
   *       region as the API endpoint that you are calling.</p>
   */
  S3Bucket: string | undefined;

  /**
   * @public
   * <p>The path to the input data files in the S3 bucket.</p>
   */
  S3Key?: string;
}

/**
 * @public
 * @enum
 */
export const JobStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PARTIAL_SUCCESS: "PARTIAL_SUCCESS",
  STOPPED: "STOPPED",
  STOP_REQUESTED: "STOP_REQUESTED",
  SUBMITTED: "SUBMITTED",
} as const;

/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * @enum
 */
export const LanguageCode = {
  EN: "en",
} as const;

/**
 * @public
 */
export type LanguageCode = (typeof LanguageCode)[keyof typeof LanguageCode];

/**
 * @public
 * <p>The output properties for a detection job.</p>
 */
export interface OutputDataConfig {
  /**
   * @public
   * <p>When you use the <code>OutputDataConfig</code> object with asynchronous operations, you
   *       specify the Amazon S3 location where you want to write the output data. The URI must be in the
   *       same region as the API endpoint that you are calling. The location is used as the prefix for
   *       the actual location of the output.</p>
   */
  S3Bucket: string | undefined;

  /**
   * @public
   * <p>The path to the output data files in the S3 bucket. Amazon Comprehend Medical creates an output directory
   *       using the job ID so that the output from one job does not overwrite the output of
   *       another.</p>
   */
  S3Key?: string;
}

/**
 * @public
 * <p>Provides information about a detection job.</p>
 */
export interface ComprehendMedicalAsyncJobProperties {
  /**
   * @public
   * <p>The identifier assigned to the detection job.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The name that you assigned to the detection job.</p>
   */
  JobName?: string;

  /**
   * @public
   * <p>The current status of the detection job. If the status is <code>FAILED</code>, the
   *         <code>Message</code> field shows the reason for the failure.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * @public
   * <p>A description of the status of a job.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The time that the detection job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * @public
   * <p>The time that the detection job completed.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>The date and time that job metadata is deleted from the server. Output files in your S3
   *       bucket will not be deleted. After the metadata is deleted, the job will no longer appear in
   *       the results of the <code>ListEntitiesDetectionV2Job</code> or the
   *         <code>ListPHIDetectionJobs</code> operation.</p>
   */
  ExpirationTime?: Date;

  /**
   * @public
   * <p>The input data configuration that you supplied when you created the detection job.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * @public
   * <p>The output data configuration that you supplied when you created the detection job.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * @public
   * <p>The language code of the input documents.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that gives Amazon Comprehend Medical read access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * @public
   * <p>The path to the file that describes the results of a batch job.</p>
   */
  ManifestFilePath?: string;

  /**
   * @public
   * <p>The AWS Key Management Service key, if any, used to encrypt the output files. </p>
   */
  KMSKey?: string;

  /**
   * @public
   * <p>The version of the model used to analyze the documents. The version number looks like
   *       X.X.X. You can use this information to track the model used for a particular batch of
   *       documents.</p>
   */
  ModelVersion?: string;
}

/**
 * @public
 */
export interface DescribeEntitiesDetectionV2JobResponse {
  /**
   * @public
   * <p>An object that contains the properties associated with a detection job.</p>
   */
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
}

/**
 * @public
 * <p> An internal server error occurred. Retry your request. </p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p> The request that you made is invalid. Check your request to determine why it's invalid
 *       and then retry the request.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The resource identified by the specified Amazon Resource Name (ARN) was not found. Check
 *       the ARN and try your request again.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p> You have made too many requests within a short period of time. Wait for a short time and
 *       then try your request again. Contact customer support for more information about a service
 *       limit increase. </p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DescribeICD10CMInferenceJobRequest {
  /**
   * @public
   * <p>The identifier that Amazon Comprehend Medical generated for the job. <code>The
   *         StartICD10CMInferenceJob</code> operation returns this identifier in its response.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeICD10CMInferenceJobResponse {
  /**
   * @public
   * <p>An object that contains the properties associated with a detection job.</p>
   */
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
}

/**
 * @public
 */
export interface DescribePHIDetectionJobRequest {
  /**
   * @public
   * <p>The identifier that Amazon Comprehend Medical generated for the job. The <code>StartPHIDetectionJob</code>
   *       operation returns this identifier in its response.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface DescribePHIDetectionJobResponse {
  /**
   * @public
   * <p>An object that contains the properties associated with a detection job.</p>
   */
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
}

/**
 * @public
 */
export interface DescribeRxNormInferenceJobRequest {
  /**
   * @public
   * <p>The identifier that Amazon Comprehend Medical generated for the job. The
   *       StartRxNormInferenceJob operation returns this identifier in its response.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeRxNormInferenceJobResponse {
  /**
   * @public
   * <p>An object that contains the properties associated with a detection job.</p>
   */
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
}

/**
 * @public
 */
export interface DescribeSNOMEDCTInferenceJobRequest {
  /**
   * @public
   * <p>
   *       The identifier that Amazon Comprehend Medical generated for the job. The StartSNOMEDCTInferenceJob operation returns this identifier in its response.
   *     </p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeSNOMEDCTInferenceJobResponse {
  /**
   * @public
   * <p>Provides information about a detection job.</p>
   */
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
}

/**
 * @public
 */
export interface DetectEntitiesRequest {
  /**
   * @public
   * <p> A UTF-8 text string containing the clinical content being examined for entities.</p>
   */
  Text: string | undefined;
}

/**
 * @public
 * <p> Provides information about an extracted medical entity.</p>
 */
export interface Entity {
  /**
   * @public
   * <p> The numeric identifier for the entity. This is a monotonically increasing id unique
   *       within this response rather than a global unique identifier. </p>
   */
  Id?: number;

  /**
   * @public
   * <p> The 0-based character offset in the input text that shows where the entity begins. The
   *       offset returns the UTF-8 code point in the string. </p>
   */
  BeginOffset?: number;

  /**
   * @public
   * <p> The 0-based character offset in the input text that shows where the entity ends. The
   *       offset returns the UTF-8 code point in the string. </p>
   */
  EndOffset?: number;

  /**
   * @public
   * <p>The level of confidence that Amazon Comprehend Medical has in the accuracy of the detection.</p>
   */
  Score?: number;

  /**
   * @public
   * <p> The segment of input text extracted as this entity.</p>
   */
  Text?: string;

  /**
   * @public
   * <p> The category of the entity.</p>
   */
  Category?: EntityType | string;

  /**
   * @public
   * <p> Describes the specific type of entity with category of entities.</p>
   */
  Type?: EntitySubType | string;

  /**
   * @public
   * <p>Contextual information for the entity.</p>
   */
  Traits?: Trait[];

  /**
   * @public
   * <p> The extracted attributes that relate to this entity.</p>
   */
  Attributes?: Attribute[];
}

/**
 * @public
 * <p>An attribute that was extracted, but Amazon Comprehend Medical was unable to relate to an entity. </p>
 */
export interface UnmappedAttribute {
  /**
   * @public
   * <p> The type of the unmapped attribute, could be one of the following values: "MEDICATION",
   *       "MEDICAL_CONDITION", "ANATOMY", "TEST_AND_TREATMENT_PROCEDURE" or
   *       "PROTECTED_HEALTH_INFORMATION". </p>
   */
  Type?: EntityType | string;

  /**
   * @public
   * <p> The specific attribute that has been extracted but not mapped to an entity. </p>
   */
  Attribute?: Attribute;
}

/**
 * @public
 */
export interface DetectEntitiesResponse {
  /**
   * @public
   * <p>The collection of medical entities extracted from the input text and their associated
   *       information. For each entity, the response provides the entity text, the entity category,
   *       where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the
   *       detection and analysis. Attributes and traits of the entity are also returned.</p>
   */
  Entities: Entity[] | undefined;

  /**
   * @public
   * <p>Attributes extracted from the input text that we were unable to relate to an
   *       entity.</p>
   */
  UnmappedAttributes?: UnmappedAttribute[];

  /**
   * @public
   * <p>If the result of the previous request to <code>DetectEntities</code> was truncated,
   *       include the <code>PaginationToken</code> to fetch the next page of entities.</p>
   */
  PaginationToken?: string;

  /**
   * @public
   * <p>The version of the model used to analyze the documents. The version number looks like
   *       X.X.X. You can use this information to track the model used for a particular batch of
   *       documents.</p>
   */
  ModelVersion: string | undefined;
}

/**
 * @public
 * <p> The input text was not in valid UTF-8 character encoding. Check your text then retry your
 *       request.</p>
 */
export class InvalidEncodingException extends __BaseException {
  readonly name: "InvalidEncodingException" = "InvalidEncodingException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEncodingException, __BaseException>) {
    super({
      name: "InvalidEncodingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEncodingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p> The Amazon Comprehend Medical service is temporarily unavailable. Please wait and then retry your request.
 *     </p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p> The size of the text you submitted exceeds the size limit. Reduce the size of the text or
 *       use a smaller document and then retry your request. </p>
 */
export class TextSizeLimitExceededException extends __BaseException {
  readonly name: "TextSizeLimitExceededException" = "TextSizeLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TextSizeLimitExceededException, __BaseException>) {
    super({
      name: "TextSizeLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TextSizeLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DetectEntitiesV2Request {
  /**
   * @public
   * <p>A UTF-8 string containing the clinical content being examined for entities.</p>
   */
  Text: string | undefined;
}

/**
 * @public
 */
export interface DetectEntitiesV2Response {
  /**
   * @public
   * <p>The collection of medical entities extracted from the input text and their associated
   *       information. For each entity, the response provides the entity text, the entity category,
   *       where the entity text begins and ends, and the level of confidence in the detection and
   *       analysis. Attributes and traits of the entity are also returned.</p>
   */
  Entities: Entity[] | undefined;

  /**
   * @public
   * <p>Attributes extracted from the input text that couldn't be related to an entity.</p>
   */
  UnmappedAttributes?: UnmappedAttribute[];

  /**
   * @public
   * <p>If the result to the <code>DetectEntitiesV2</code> operation was truncated, include the
   *         <code>PaginationToken</code> to fetch the next page of entities.</p>
   */
  PaginationToken?: string;

  /**
   * @public
   * <p>The version of the model used to analyze the documents. The version number looks like
   *       X.X.X. You can use this information to track the model used for a particular batch of
   *       documents.</p>
   */
  ModelVersion: string | undefined;
}

/**
 * @public
 */
export interface DetectPHIRequest {
  /**
   * @public
   * <p>A UTF-8 text string containing the clinical content being examined for PHI entities.</p>
   */
  Text: string | undefined;
}

/**
 * @public
 */
export interface DetectPHIResponse {
  /**
   * @public
   * <p>The collection of PHI entities extracted from the input text and their associated
   *       information. For each entity, the response provides the entity text, the entity category,
   *       where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in its
   *       detection.</p>
   */
  Entities: Entity[] | undefined;

  /**
   * @public
   * <p>If the result of the previous request to <code>DetectPHI</code> was truncated, include
   *       the <code>PaginationToken</code> to fetch the next page of PHI entities. </p>
   */
  PaginationToken?: string;

  /**
   * @public
   * <p>The version of the model used to analyze the documents. The version number looks like
   *       X.X.X. You can use this information to track the model used for a particular batch of
   *       documents.</p>
   */
  ModelVersion: string | undefined;
}

/**
 * @public
 */
export interface InferICD10CMRequest {
  /**
   * @public
   * <p>The input text used for analysis.</p>
   */
  Text: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ICD10CMEntityType = {
  DX_NAME: "DX_NAME",
  TIME_EXPRESSION: "TIME_EXPRESSION",
} as const;

/**
 * @public
 */
export type ICD10CMEntityType = (typeof ICD10CMEntityType)[keyof typeof ICD10CMEntityType];

/**
 * @public
 * @enum
 */
export const ICD10CMRelationshipType = {
  OVERLAP: "OVERLAP",
  QUALITY: "QUALITY",
  SYSTEM_ORGAN_SITE: "SYSTEM_ORGAN_SITE",
} as const;

/**
 * @public
 */
export type ICD10CMRelationshipType = (typeof ICD10CMRelationshipType)[keyof typeof ICD10CMRelationshipType];

/**
 * @public
 * @enum
 */
export const ICD10CMTraitName = {
  DIAGNOSIS: "DIAGNOSIS",
  HYPOTHETICAL: "HYPOTHETICAL",
  LOW_CONFIDENCE: "LOW_CONFIDENCE",
  NEGATION: "NEGATION",
  PERTAINS_TO_FAMILY: "PERTAINS_TO_FAMILY",
  SIGN: "SIGN",
  SYMPTOM: "SYMPTOM",
} as const;

/**
 * @public
 */
export type ICD10CMTraitName = (typeof ICD10CMTraitName)[keyof typeof ICD10CMTraitName];

/**
 * @public
 * <p>Contextual information for the entity. The traits recognized by InferICD10CM are
 *         <code>DIAGNOSIS</code>, <code>SIGN</code>, <code>SYMPTOM</code>, and
 *       <code>NEGATION</code>.</p>
 */
export interface ICD10CMTrait {
  /**
   * @public
   * <p>Provides a name or contextual description about the trait.</p>
   */
  Name?: ICD10CMTraitName | string;

  /**
   * @public
   * <p>The level of confidence that Amazon Comprehend Medical has that the segment of text is correctly recognized
   *       as a trait.</p>
   */
  Score?: number;
}

/**
 * @public
 * @enum
 */
export const ICD10CMAttributeType = {
  ACUITY: "ACUITY",
  DIRECTION: "DIRECTION",
  QUALITY: "QUALITY",
  QUANTITY: "QUANTITY",
  SYSTEM_ORGAN_SITE: "SYSTEM_ORGAN_SITE",
  TIME_EXPRESSION: "TIME_EXPRESSION",
  TIME_TO_DX_NAME: "TIME_TO_DX_NAME",
} as const;

/**
 * @public
 */
export type ICD10CMAttributeType = (typeof ICD10CMAttributeType)[keyof typeof ICD10CMAttributeType];

/**
 * @public
 * <p>The detected attributes that relate to an entity. This includes an extracted segment of
 *       the text that is an attribute of an entity, or otherwise related to an entity. InferICD10CM
 *       detects the following attributes: <code>Direction</code>, <code>System, Organ or Site</code>,
 *       and <code>Acuity</code>.</p>
 */
export interface ICD10CMAttribute {
  /**
   * @public
   * <p>The type of attribute. InferICD10CM detects entities of the type <code>DX_NAME</code>.
   *     </p>
   */
  Type?: ICD10CMAttributeType | string;

  /**
   * @public
   * <p>The level of confidence that Amazon Comprehend Medical has that the segment of text is
   *       correctly recognized as an attribute.</p>
   */
  Score?: number;

  /**
   * @public
   * <p>The level of confidence that Amazon Comprehend Medical has that this attribute is
   *       correctly related to this entity.</p>
   */
  RelationshipScore?: number;

  /**
   * @public
   * <p>The numeric identifier for this attribute. This is a monotonically increasing id unique
   *       within this response rather than a global unique identifier.</p>
   */
  Id?: number;

  /**
   * @public
   * <p>The 0-based character offset in the input text that shows where the attribute begins. The
   *       offset returns the UTF-8 code point in the string.</p>
   */
  BeginOffset?: number;

  /**
   * @public
   * <p>The 0-based character offset in the input text that shows where the attribute ends. The
   *       offset returns the UTF-8 code point in the string.</p>
   */
  EndOffset?: number;

  /**
   * @public
   * <p>The segment of input text which contains the detected attribute.</p>
   */
  Text?: string;

  /**
   * @public
   * <p>The contextual information for the attribute. The traits recognized by InferICD10CM are
   *         <code>DIAGNOSIS</code>, <code>SIGN</code>, <code>SYMPTOM</code>, and
   *       <code>NEGATION</code>.</p>
   */
  Traits?: ICD10CMTrait[];

  /**
   * @public
   * <p>The category of attribute. Can be either of <code>DX_NAME</code> or <code>TIME_EXPRESSION</code>.</p>
   */
  Category?: ICD10CMEntityType | string;

  /**
   * @public
   * <p>The type of relationship between the entity and attribute. Type for the relationship can
   *         be either of <code>OVERLAP</code> or <code>SYSTEM_ORGAN_SITE</code>.</p>
   */
  RelationshipType?: ICD10CMRelationshipType | string;
}

/**
 * @public
 * @enum
 */
export const ICD10CMEntityCategory = {
  MEDICAL_CONDITION: "MEDICAL_CONDITION",
} as const;

/**
 * @public
 */
export type ICD10CMEntityCategory = (typeof ICD10CMEntityCategory)[keyof typeof ICD10CMEntityCategory];

/**
 * @public
 * <p> The ICD-10-CM concepts that the entity could refer to, along with a score indicating the
 *       likelihood of the match.</p>
 */
export interface ICD10CMConcept {
  /**
   * @public
   * <p>The long description of the ICD-10-CM code in the ontology.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ICD-10-CM code that identifies the concept found in the knowledge base from the
   *       Centers for Disease Control.</p>
   */
  Code?: string;

  /**
   * @public
   * <p>The level of confidence that Amazon Comprehend Medical has that the entity is accurately
   *       linked to an ICD-10-CM concept.</p>
   */
  Score?: number;
}

/**
 * @public
 * <p>The collection of medical entities extracted from the input text and their associated
 *       information. For each entity, the response provides the entity text, the entity category,
 *       where the entity text begins and ends, and the level of confidence that Amazon Comprehend
 *       Medical has in the detection and analysis. Attributes and traits of the entity are also
 *       returned. </p>
 */
export interface ICD10CMEntity {
  /**
   * @public
   * <p>The numeric identifier for the entity. This is a monotonically increasing id unique within
   *       this response rather than a global unique identifier.</p>
   */
  Id?: number;

  /**
   * @public
   * <p>The segment of input text that is matched to the detected entity.</p>
   */
  Text?: string;

  /**
   * @public
   * <p> The category of the entity. InferICD10CM detects entities in the
   *         <code>MEDICAL_CONDITION</code> category. </p>
   */
  Category?: ICD10CMEntityCategory | string;

  /**
   * @public
   * <p>Describes the specific type of entity with category of entities. InferICD10CM detects
   *       entities of the type <code>DX_NAME</code> and <code>TIME_EXPRESSION</code>.</p>
   */
  Type?: ICD10CMEntityType | string;

  /**
   * @public
   * <p>The level of confidence that Amazon Comprehend Medical has in the accuracy of the
   *       detection.</p>
   */
  Score?: number;

  /**
   * @public
   * <p>The 0-based character offset in the input text that shows where the entity begins. The
   *       offset returns the UTF-8 code point in the string.</p>
   */
  BeginOffset?: number;

  /**
   * @public
   * <p>The 0-based character offset in the input text that shows where the entity ends. The
   *       offset returns the UTF-8 code point in the string.</p>
   */
  EndOffset?: number;

  /**
   * @public
   * <p>The detected attributes that relate to the entity. An extracted segment of the text that
   *       is an attribute of an entity, or otherwise related to an entity, such as the nature of a
   *       medical condition.</p>
   */
  Attributes?: ICD10CMAttribute[];

  /**
   * @public
   * <p>Provides Contextual information for the entity. The traits recognized by InferICD10CM are
   *         <code>DIAGNOSIS</code>, <code>SIGN</code>, <code>SYMPTOM</code>, and
   *       <code>NEGATION.</code>
   *          </p>
   */
  Traits?: ICD10CMTrait[];

  /**
   * @public
   * <p>The ICD-10-CM concepts that the entity could refer to, along with a score indicating the
   *       likelihood of the match.</p>
   */
  ICD10CMConcepts?: ICD10CMConcept[];
}

/**
 * @public
 */
export interface InferICD10CMResponse {
  /**
   * @public
   * <p>The medical conditions detected in the text linked to ICD-10-CM concepts. If the action is
   *       successful, the service sends back an HTTP 200 response, as well as the entities
   *       detected.</p>
   */
  Entities: ICD10CMEntity[] | undefined;

  /**
   * @public
   * <p>If the result of the previous request to <code>InferICD10CM</code> was truncated, include
   *       the <code>PaginationToken</code> to fetch the next page of medical condition entities. </p>
   */
  PaginationToken?: string;

  /**
   * @public
   * <p>The version of the model used to analyze the documents, in the format
   *         <i>n</i>.<i>n</i>.<i>n</i> You can use this
   *       information to track the model used for a particular batch of documents.</p>
   */
  ModelVersion?: string;
}

/**
 * @public
 */
export interface InferRxNormRequest {
  /**
   * @public
   * <p>The input text used for analysis.</p>
   */
  Text: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RxNormTraitName = {
  NEGATION: "NEGATION",
  PAST_HISTORY: "PAST_HISTORY",
} as const;

/**
 * @public
 */
export type RxNormTraitName = (typeof RxNormTraitName)[keyof typeof RxNormTraitName];

/**
 * @public
 * <p>The contextual information for the entity. InferRxNorm recognizes the trait
 *         <code>NEGATION</code>, which is any indication that the patient is not taking a medication.
 *     </p>
 */
export interface RxNormTrait {
  /**
   * @public
   * <p>Provides a name or contextual description about the trait.</p>
   */
  Name?: RxNormTraitName | string;

  /**
   * @public
   * <p>The level of confidence that Amazon Comprehend Medical has in the accuracy of the detected
   *       trait.</p>
   */
  Score?: number;
}

/**
 * @public
 * @enum
 */
export const RxNormAttributeType = {
  DOSAGE: "DOSAGE",
  DURATION: "DURATION",
  FORM: "FORM",
  FREQUENCY: "FREQUENCY",
  RATE: "RATE",
  ROUTE_OR_MODE: "ROUTE_OR_MODE",
  STRENGTH: "STRENGTH",
} as const;

/**
 * @public
 */
export type RxNormAttributeType = (typeof RxNormAttributeType)[keyof typeof RxNormAttributeType];

/**
 * @public
 * <p>The extracted attributes that relate to this entity. The attributes recognized by
 *       InferRxNorm are <code>DOSAGE</code>, <code>DURATION</code>, <code>FORM</code>,
 *         <code>FREQUENCY</code>, <code>RATE</code>, <code>ROUTE_OR_MODE</code>.</p>
 */
export interface RxNormAttribute {
  /**
   * @public
   * <p>The type of attribute. The types of attributes recognized by InferRxNorm are
   *         <code>BRAND_NAME</code> and <code>GENERIC_NAME</code>.</p>
   */
  Type?: RxNormAttributeType | string;

  /**
   * @public
   * <p>The level of confidence that Amazon Comprehend Medical has that the segment of text is correctly
   *       recognized as an attribute.</p>
   */
  Score?: number;

  /**
   * @public
   * <p>The level of confidence that Amazon Comprehend Medical has that the attribute is
   *       accurately linked to an entity.</p>
   */
  RelationshipScore?: number;

  /**
   * @public
   * <p>The numeric identifier for this attribute. This is a monotonically increasing id unique
   *       within this response rather than a global unique identifier.</p>
   */
  Id?: number;

  /**
   * @public
   * <p>The 0-based character offset in the input text that shows where the attribute begins. The
   *       offset returns the UTF-8 code point in the string.</p>
   */
  BeginOffset?: number;

  /**
   * @public
   * <p>The 0-based character offset in the input text that shows where the attribute ends. The
   *       offset returns the UTF-8 code point in the string.</p>
   */
  EndOffset?: number;

  /**
   * @public
   * <p>The segment of input text which corresponds to the detected attribute.</p>
   */
  Text?: string;

  /**
   * @public
   * <p>Contextual information for the attribute. InferRxNorm recognizes the trait
   *         <code>NEGATION</code> for attributes, i.e. that the patient is not taking a specific dose or
   *       form of a medication.</p>
   */
  Traits?: RxNormTrait[];
}

/**
 * @public
 * @enum
 */
export const RxNormEntityCategory = {
  MEDICATION: "MEDICATION",
} as const;

/**
 * @public
 */
export type RxNormEntityCategory = (typeof RxNormEntityCategory)[keyof typeof RxNormEntityCategory];

/**
 * @public
 * <p>The RxNorm concept that the entity could refer to, along with a score indicating the
 *       likelihood of the match.</p>
 */
export interface RxNormConcept {
  /**
   * @public
   * <p>The description of the RxNorm concept.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>RxNorm concept ID, also known as the RxCUI.</p>
   */
  Code?: string;

  /**
   * @public
   * <p>The level of confidence that Amazon Comprehend Medical has that the entity is accurately
   *       linked to the reported RxNorm concept.</p>
   */
  Score?: number;
}

/**
 * @public
 * @enum
 */
export const RxNormEntityType = {
  BRAND_NAME: "BRAND_NAME",
  GENERIC_NAME: "GENERIC_NAME",
} as const;

/**
 * @public
 */
export type RxNormEntityType = (typeof RxNormEntityType)[keyof typeof RxNormEntityType];

/**
 * @public
 * <p>The collection of medical entities extracted from the input text and their associated
 *       information. For each entity, the response provides the entity text, the entity category,
 *       where the entity text begins and ends, and the level of confidence that Amazon Comprehend
 *       Medical has in the detection and analysis. Attributes and traits of the entity are also
 *       returned. </p>
 */
export interface RxNormEntity {
  /**
   * @public
   * <p>The numeric identifier for the entity. This is a monotonically increasing id unique within
   *       this response rather than a global unique identifier.</p>
   */
  Id?: number;

  /**
   * @public
   * <p>The segment of input text extracted from which the entity was detected.</p>
   */
  Text?: string;

  /**
   * @public
   * <p>The category of the entity. The recognized categories are <code>GENERIC</code> or
   *         <code>BRAND_NAME</code>.</p>
   */
  Category?: RxNormEntityCategory | string;

  /**
   * @public
   * <p> Describes the specific type of entity. For InferRxNorm, the recognized entity type is
   *         <code>MEDICATION</code>.</p>
   */
  Type?: RxNormEntityType | string;

  /**
   * @public
   * <p>The level of confidence that Amazon Comprehend Medical has in the accuracy of the detected
   *       entity.</p>
   */
  Score?: number;

  /**
   * @public
   * <p>The 0-based character offset in the input text that shows where the entity begins. The
   *       offset returns the UTF-8 code point in the string.</p>
   */
  BeginOffset?: number;

  /**
   * @public
   * <p>The 0-based character offset in the input text that shows where the entity ends. The
   *       offset returns the UTF-8 code point in the string.</p>
   */
  EndOffset?: number;

  /**
   * @public
   * <p>The extracted attributes that relate to the entity. The attributes recognized by
   *       InferRxNorm are <code>DOSAGE</code>, <code>DURATION</code>, <code>FORM</code>,
   *         <code>FREQUENCY</code>, <code>RATE</code>, <code>ROUTE_OR_MODE</code>, and
   *         <code>STRENGTH</code>.</p>
   */
  Attributes?: RxNormAttribute[];

  /**
   * @public
   * <p>Contextual information for the entity.</p>
   */
  Traits?: RxNormTrait[];

  /**
   * @public
   * <p>The RxNorm concepts that the entity could refer to, along with a score indicating the
   *       likelihood of the match.</p>
   */
  RxNormConcepts?: RxNormConcept[];
}

/**
 * @public
 */
export interface InferRxNormResponse {
  /**
   * @public
   * <p>The medication entities detected in the text linked to RxNorm concepts. If the action is
   *       successful, the service sends back an HTTP 200 response, as well as the entities
   *       detected.</p>
   */
  Entities: RxNormEntity[] | undefined;

  /**
   * @public
   * <p>If the result of the previous request to <code>InferRxNorm</code> was truncated, include
   *       the <code>PaginationToken</code> to fetch the next page of medication entities.</p>
   */
  PaginationToken?: string;

  /**
   * @public
   * <p>The version of the model used to analyze the documents, in the format
   *         <i>n</i>.<i>n</i>.<i>n</i> You can use this
   *       information to track the model used for a particular batch of documents.</p>
   */
  ModelVersion?: string;
}

/**
 * @public
 */
export interface InferSNOMEDCTRequest {
  /**
   * @public
   * <p>The input text to be analyzed using InferSNOMEDCT.</p>
   */
  Text: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SNOMEDCTEntityCategory = {
  ANATOMY: "ANATOMY",
  MEDICAL_CONDITION: "MEDICAL_CONDITION",
  TEST_TREATMENT_PROCEDURE: "TEST_TREATMENT_PROCEDURE",
} as const;

/**
 * @public
 */
export type SNOMEDCTEntityCategory = (typeof SNOMEDCTEntityCategory)[keyof typeof SNOMEDCTEntityCategory];

/**
 * @public
 * @enum
 */
export const SNOMEDCTRelationshipType = {
  ACUITY: "ACUITY",
  DIRECTION: "DIRECTION",
  QUALITY: "QUALITY",
  SYSTEM_ORGAN_SITE: "SYSTEM_ORGAN_SITE",
  TEST_UNIT: "TEST_UNIT",
  TEST_UNITS: "TEST_UNITS",
  TEST_VALUE: "TEST_VALUE",
} as const;

/**
 * @public
 */
export type SNOMEDCTRelationshipType = (typeof SNOMEDCTRelationshipType)[keyof typeof SNOMEDCTRelationshipType];

/**
 * @public
 * <p>
 *       The SNOMED-CT concepts that the entity could refer to, along with a score indicating the likelihood of the match.
 *     </p>
 */
export interface SNOMEDCTConcept {
  /**
   * @public
   * <p>
   *       The description of the SNOMED-CT concept.
   *     </p>
   */
  Description?: string;

  /**
   * @public
   * <p>
   *       The numeric ID for the SNOMED-CT concept.
   *     </p>
   */
  Code?: string;

  /**
   * @public
   * <p>
   *       The level of confidence Amazon Comprehend Medical has that the entity should be linked to the identified SNOMED-CT concept.
   *     </p>
   */
  Score?: number;
}

/**
 * @public
 * @enum
 */
export const SNOMEDCTTraitName = {
  DIAGNOSIS: "DIAGNOSIS",
  FUTURE: "FUTURE",
  HYPOTHETICAL: "HYPOTHETICAL",
  LOW_CONFIDENCE: "LOW_CONFIDENCE",
  NEGATION: "NEGATION",
  PAST_HISTORY: "PAST_HISTORY",
  PERTAINS_TO_FAMILY: "PERTAINS_TO_FAMILY",
  SIGN: "SIGN",
  SYMPTOM: "SYMPTOM",
} as const;

/**
 * @public
 */
export type SNOMEDCTTraitName = (typeof SNOMEDCTTraitName)[keyof typeof SNOMEDCTTraitName];

/**
 * @public
 * <p>
 *       Contextual information for an entity.
 *     </p>
 */
export interface SNOMEDCTTrait {
  /**
   * @public
   * <p>
   *       The name or contextual description of a detected trait.
   *     </p>
   */
  Name?: SNOMEDCTTraitName | string;

  /**
   * @public
   * <p>
   *       The level of confidence that Amazon Comprehend Medical has in the accuracy of a detected trait.
   *     </p>
   */
  Score?: number;
}

/**
 * @public
 * @enum
 */
export const SNOMEDCTAttributeType = {
  ACUITY: "ACUITY",
  DIRECTION: "DIRECTION",
  QUALITY: "QUALITY",
  SYSTEM_ORGAN_SITE: "SYSTEM_ORGAN_SITE",
  TEST_UNIT: "TEST_UNIT",
  TEST_VALUE: "TEST_VALUE",
} as const;

/**
 * @public
 */
export type SNOMEDCTAttributeType = (typeof SNOMEDCTAttributeType)[keyof typeof SNOMEDCTAttributeType];

/**
 * @public
 * <p>
 *       The extracted attributes that relate to an entity. An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken.
 *     </p>
 */
export interface SNOMEDCTAttribute {
  /**
   * @public
   * <p>
   *       The category of the detected attribute. Possible categories include MEDICAL_CONDITION, ANATOMY, and TEST_TREATMENT_PROCEDURE.
   *     </p>
   */
  Category?: SNOMEDCTEntityCategory | string;

  /**
   * @public
   * <p>
   *       The type of attribute. Possible types include DX_NAME, ACUITY, DIRECTION, SYSTEM_ORGAN_SITE,TEST_NAME, TEST_VALUE, TEST_UNIT, PROCEDURE_NAME, and TREATMENT_NAME.
   *     </p>
   */
  Type?: SNOMEDCTAttributeType | string;

  /**
   * @public
   * <p>
   *       The level of confidence that Amazon Comprehend Medical has that the segment of text is correctly recognized as an attribute.
   *     </p>
   */
  Score?: number;

  /**
   * @public
   * <p>
   *       The level of confidence that Amazon Comprehend Medical has that this attribute is correctly related to this entity.
   *     </p>
   */
  RelationshipScore?: number;

  /**
   * @public
   * <p>
   *       The type of relationship that exists between the entity and the related attribute.
   *     </p>
   */
  RelationshipType?: SNOMEDCTRelationshipType | string;

  /**
   * @public
   * <p>
   *       The numeric identifier for this attribute. This is a monotonically increasing id unique within this response rather than a global unique identifier.
   *     </p>
   */
  Id?: number;

  /**
   * @public
   * <p>
   *       The 0-based character offset in the input text that shows where the attribute begins. The offset returns the UTF-8 code point in the string.
   *     </p>
   */
  BeginOffset?: number;

  /**
   * @public
   * <p>
   *       The 0-based character offset in the input text that shows where the attribute ends. The offset returns the UTF-8 code point in the string.
   *     </p>
   */
  EndOffset?: number;

  /**
   * @public
   * <p>
   *       The segment of input text extracted as this attribute.
   *     </p>
   */
  Text?: string;

  /**
   * @public
   * <p>
   *       Contextual information for an attribute. Examples include signs, symptoms, diagnosis, and negation.
   *     </p>
   */
  Traits?: SNOMEDCTTrait[];

  /**
   * @public
   * <p>
   *       The SNOMED-CT concepts specific to an attribute, along with a score indicating the likelihood of the match.
   *     </p>
   */
  SNOMEDCTConcepts?: SNOMEDCTConcept[];
}

/**
 * @public
 * @enum
 */
export const SNOMEDCTEntityType = {
  DX_NAME: "DX_NAME",
  PROCEDURE_NAME: "PROCEDURE_NAME",
  TEST_NAME: "TEST_NAME",
  TREATMENT_NAME: "TREATMENT_NAME",
} as const;

/**
 * @public
 */
export type SNOMEDCTEntityType = (typeof SNOMEDCTEntityType)[keyof typeof SNOMEDCTEntityType];

/**
 * @public
 * <p>
 *       The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.
 *     </p>
 */
export interface SNOMEDCTEntity {
  /**
   * @public
   * <p>
   *       The numeric identifier for the entity. This is a monotonically increasing id unique within this response rather than a global unique identifier.
   *     </p>
   */
  Id?: number;

  /**
   * @public
   * <p>
   *       The segment of input text extracted as this entity.
   *     </p>
   */
  Text?: string;

  /**
   * @public
   * <p>
   *       The category of the detected entity. Possible categories are MEDICAL_CONDITION, ANATOMY, or TEST_TREATMENT_PROCEDURE.
   *     </p>
   */
  Category?: SNOMEDCTEntityCategory | string;

  /**
   * @public
   * <p>
   *       Describes the specific type of entity with category of entities. Possible types include DX_NAME, ACUITY, DIRECTION, SYSTEM_ORGAN_SITE, TEST_NAME, TEST_VALUE, TEST_UNIT, PROCEDURE_NAME, or TREATMENT_NAME.
   *     </p>
   */
  Type?: SNOMEDCTEntityType | string;

  /**
   * @public
   * <p>
   *       The level of confidence that Amazon Comprehend Medical has in the accuracy of the detected entity.
   *     </p>
   */
  Score?: number;

  /**
   * @public
   * <p>
   *       The 0-based character offset in the input text that shows where the entity begins. The offset returns the UTF-8 code point in the string.
   *     </p>
   */
  BeginOffset?: number;

  /**
   * @public
   * <p>
   *       The 0-based character offset in the input text that shows where the entity ends. The offset returns the UTF-8 code point in the string.
   *     </p>
   */
  EndOffset?: number;

  /**
   * @public
   * <p>
   *       An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken.
   *     </p>
   */
  Attributes?: SNOMEDCTAttribute[];

  /**
   * @public
   * <p>
   *       Contextual information for the entity.
   *     </p>
   */
  Traits?: SNOMEDCTTrait[];

  /**
   * @public
   * <p>
   *       The SNOMED concepts that the entity could refer to, along with a score indicating the likelihood of the match.
   *     </p>
   */
  SNOMEDCTConcepts?: SNOMEDCTConcept[];
}

/**
 * @public
 * <p>
 *       The information about the revision of the SNOMED-CT ontology in the response. Specifically, the details include the SNOMED-CT edition, language, and version date.
 *     </p>
 */
export interface SNOMEDCTDetails {
  /**
   * @public
   * <p>
   *       The edition of SNOMED-CT used. The edition used for the InferSNOMEDCT editions is the US edition.
   *     </p>
   */
  Edition?: string;

  /**
   * @public
   * <p>
   *       The language used in the SNOMED-CT ontology. All Amazon Comprehend Medical operations are US English (en).
   *     </p>
   */
  Language?: string;

  /**
   * @public
   * <p>
   *       The version date of the SNOMED-CT ontology used.
   *     </p>
   */
  VersionDate?: string;
}

/**
 * @public
 */
export interface InferSNOMEDCTResponse {
  /**
   * @public
   * <p>
   *       The collection of medical concept entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.
   *     </p>
   */
  Entities: SNOMEDCTEntity[] | undefined;

  /**
   * @public
   * <p>
   *       If the result of the request is truncated, the pagination token can be used to fetch the next page of entities.
   *     </p>
   */
  PaginationToken?: string;

  /**
   * @public
   * <p>
   *       The version of the model used to analyze the documents, in the format n.n.n You can use this information to track the model used for a particular batch of documents.
   *     </p>
   */
  ModelVersion?: string;

  /**
   * @public
   * <p>
   *       The details of the SNOMED-CT revision, including the edition, language, and version date.
   *     </p>
   */
  SNOMEDCTDetails?: SNOMEDCTDetails;

  /**
   * @public
   * <p>
   *       The number of characters in the input request documentation.
   *     </p>
   */
  Characters?: Characters;
}

/**
 * @public
 * <p>Provides information for filtering a list of detection jobs.</p>
 */
export interface ComprehendMedicalAsyncJobFilter {
  /**
   * @public
   * <p>Filters on the name of the job.</p>
   */
  JobName?: string;

  /**
   * @public
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *       status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * @public
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * @public
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;
}

/**
 * @public
 */
export interface ListEntitiesDetectionV2JobsRequest {
  /**
   * @public
   * <p>Filters the jobs that are returned. You can filter jobs based on their names, status, or
   *       the date and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: ComprehendMedicalAsyncJobFilter;

  /**
   * @public
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListEntitiesDetectionV2JobsResponse {
  /**
   * @public
   * <p>A list containing the properties of each job returned.</p>
   */
  ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[];

  /**
   * @public
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The filter that you specified for the operation is invalid. Check the filter values that
 *       you entered and try your request again.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface ListICD10CMInferenceJobsRequest {
  /**
   * @public
   * <p>Filters the jobs that are returned. You can filter jobs based on their names, status, or
   *       the date and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: ComprehendMedicalAsyncJobFilter;

  /**
   * @public
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListICD10CMInferenceJobsResponse {
  /**
   * @public
   * <p>A list containing the properties of each job that is returned.</p>
   */
  ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[];

  /**
   * @public
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPHIDetectionJobsRequest {
  /**
   * @public
   * <p>Filters the jobs that are returned. You can filter jobs based on their names, status, or
   *       the date and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: ComprehendMedicalAsyncJobFilter;

  /**
   * @public
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListPHIDetectionJobsResponse {
  /**
   * @public
   * <p>A list containing the properties of each job returned.</p>
   */
  ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[];

  /**
   * @public
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRxNormInferenceJobsRequest {
  /**
   * @public
   * <p>Filters the jobs that are returned. You can filter jobs based on their names, status, or
   *       the date and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: ComprehendMedicalAsyncJobFilter;

  /**
   * @public
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Identifies the next page of results to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListRxNormInferenceJobsResponse {
  /**
   * @public
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[];

  /**
   * @public
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSNOMEDCTInferenceJobsRequest {
  /**
   * @public
   * <p>Provides information for filtering a list of detection jobs.</p>
   */
  Filter?: ComprehendMedicalAsyncJobFilter;

  /**
   * @public
   * <p>
   *       Identifies the next page of InferSNOMEDCT results to return.
   *     </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>
   *       The maximum number of results to return in each page. The default is 100.
   *     </p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListSNOMEDCTInferenceJobsResponse {
  /**
   * @public
   * <p>
   *       A list containing the properties of each job that is returned.
   *     </p>
   */
  ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[];

  /**
   * @public
   * <p>
   *       Identifies the next page of results to return.
   *     </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface StartEntitiesDetectionV2JobRequest {
  /**
   * @public
   * <p>The input configuration that specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * @public
   * <p>The output configuration that specifies where to send the output files.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *       grants Amazon Comprehend Medical read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions-med.html#auth-role-permissions-med">Role-Based Permissions Required for Asynchronous Operations</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * @public
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon Comprehend Medical
   *       generates one for you.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>An AWS Key Management Service key to encrypt your output files. If you do not specify a
   *       key, the files are written in plain text.</p>
   */
  KMSKey?: string;

  /**
   * @public
   * <p>The language of the input documents. All documents must be in the same language. Amazon Comprehend Medical processes files in US English (en).</p>
   */
  LanguageCode: LanguageCode | string | undefined;
}

/**
 * @public
 */
export interface StartEntitiesDetectionV2JobResponse {
  /**
   * @public
   * <p>The identifier generated for the job. To get the status of a job, use this identifier with
   *       the <code>DescribeEntitiesDetectionV2Job</code> operation.</p>
   */
  JobId?: string;
}

/**
 * @public
 */
export interface StartICD10CMInferenceJobRequest {
  /**
   * @public
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * @public
   * <p>Specifies where to send the output files.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *       grants Amazon Comprehend Medical read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions-med.html#auth-role-permissions-med"> Role-Based Permissions Required for Asynchronous Operations</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * @public
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon Comprehend Medical generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>An AWS Key Management Service key to encrypt your output files. If you do not specify a
   *       key, the files are written in plain text.</p>
   */
  KMSKey?: string;

  /**
   * @public
   * <p>The language of the input documents. All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;
}

/**
 * @public
 */
export interface StartICD10CMInferenceJobResponse {
  /**
   * @public
   * <p>The identifier generated for the job. To get the status of a job, use this identifier with
   *       the <code>StartICD10CMInferenceJob</code> operation.</p>
   */
  JobId?: string;
}

/**
 * @public
 */
export interface StartPHIDetectionJobRequest {
  /**
   * @public
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * @public
   * <p>Specifies where to send the output files.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *       grants Amazon Comprehend Medical read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions-med.html#auth-role-permissions-med"> Role-Based Permissions Required for Asynchronous Operations</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * @public
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon Comprehend Medical
   *       generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>An AWS Key Management Service key to encrypt your output files. If you do not specify a
   *       key, the files are written in plain text.</p>
   */
  KMSKey?: string;

  /**
   * @public
   * <p>The language of the input documents. All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;
}

/**
 * @public
 */
export interface StartPHIDetectionJobResponse {
  /**
   * @public
   * <p>The identifier generated for the job. To get the status of a job, use this identifier with
   *       the <code>DescribePHIDetectionJob</code> operation.</p>
   */
  JobId?: string;
}

/**
 * @public
 */
export interface StartRxNormInferenceJobRequest {
  /**
   * @public
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * @public
   * <p>Specifies where to send the output files.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *       grants Amazon Comprehend Medical read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions-med.html#auth-role-permissions-med"> Role-Based Permissions Required for Asynchronous Operations</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * @public
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon Comprehend Medical
   *       generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>An AWS Key Management Service key to encrypt your output files. If you do not specify a
   *       key, the files are written in plain text.</p>
   */
  KMSKey?: string;

  /**
   * @public
   * <p>The language of the input documents. All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;
}

/**
 * @public
 */
export interface StartRxNormInferenceJobResponse {
  /**
   * @public
   * <p>The identifier of the job.</p>
   */
  JobId?: string;
}

/**
 * @public
 */
export interface StartSNOMEDCTInferenceJobRequest {
  /**
   * @public
   * <p>The input properties for an entities detection job. This includes the name of the S3
   *       bucket and the path to the files to be analyzed. </p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * @public
   * <p>The output properties for a detection job.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * @public
   * <p>
   *       The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend Medical read access to your input data.
   *     </p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * @public
   * <p>
   *       The user generated name the asynchronous InferSNOMEDCT job.
   *     </p>
   */
  JobName?: string;

  /**
   * @public
   * <p>
   *       A unique identifier for the request. If you don't set the client request token, Amazon Comprehend Medical generates one.
   *     </p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>
   *       An AWS Key Management Service key used to encrypt your output files. If you do not specify a key, the files are written in plain text.
   *     </p>
   */
  KMSKey?: string;

  /**
   * @public
   * <p>
   *       The language of the input documents. All documents must be in the same language.
   *     </p>
   */
  LanguageCode: LanguageCode | string | undefined;
}

/**
 * @public
 */
export interface StartSNOMEDCTInferenceJobResponse {
  /**
   * @public
   * <p>
   *       The identifier generated for the job. To get the status of a job, use this identifier with the StartSNOMEDCTInferenceJob operation.
   *     </p>
   */
  JobId?: string;
}

/**
 * @public
 */
export interface StopEntitiesDetectionV2JobRequest {
  /**
   * @public
   * <p>The identifier of the medical entities job to stop.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopEntitiesDetectionV2JobResponse {
  /**
   * @public
   * <p>The identifier of the medical entities detection job that was stopped.</p>
   */
  JobId?: string;
}

/**
 * @public
 */
export interface StopICD10CMInferenceJobRequest {
  /**
   * @public
   * <p>The identifier of the job.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopICD10CMInferenceJobResponse {
  /**
   * @public
   * <p>The identifier generated for the job. To get the status of job, use this identifier with
   *       the <code>DescribeICD10CMInferenceJob</code> operation.</p>
   */
  JobId?: string;
}

/**
 * @public
 */
export interface StopPHIDetectionJobRequest {
  /**
   * @public
   * <p>The identifier of the PHI detection job to stop.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopPHIDetectionJobResponse {
  /**
   * @public
   * <p>The identifier of the PHI detection job that was stopped.</p>
   */
  JobId?: string;
}

/**
 * @public
 */
export interface StopRxNormInferenceJobRequest {
  /**
   * @public
   * <p>The identifier of the job.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopRxNormInferenceJobResponse {
  /**
   * @public
   * <p>The identifier generated for the job. To get the status of job, use this identifier with
   *       the <code>DescribeRxNormInferenceJob</code> operation.</p>
   */
  JobId?: string;
}

/**
 * @public
 */
export interface StopSNOMEDCTInferenceJobRequest {
  /**
   * @public
   * <p>
   *       The job id of the asynchronous InferSNOMEDCT job to be stopped.
   *     </p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopSNOMEDCTInferenceJobResponse {
  /**
   * @public
   * <p>
   *       The identifier generated for the job. To get the status of job, use this identifier with the DescribeSNOMEDCTInferenceJob operation.
   *     </p>
   */
  JobId?: string;
}
