import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p> An extracted segment of the text that is an attribute of an entity, or otherwise related to
 *    an entity, such as the dosage of a medication taken. It contains information about the attribute
 *    such as id, begin and end offset within the input text, and the segment of the input text.
 *   </p>
 */
export interface Attribute {
  __type?: "Attribute";
  /**
   * <p> The 0-based character offset in the input text that shows where the attribute begins. The
   *    offset returns the UTF-8 code point in the string. </p>
   */
  BeginOffset?: number;

  /**
   * <p> The 0-based character offset in the input text that shows where the attribute ends. The
   *    offset returns the UTF-8 code point in the string.</p>
   */
  EndOffset?: number;

  /**
   * <p> The numeric identifier for this attribute. This is a monotonically increasing id unique
   *    within this response rather than a global unique identifier. </p>
   */
  Id?: number;

  /**
   * <p> The level of confidence that Amazon Comprehend Medical has that this attribute is correctly related to this
   *    entity. </p>
   */
  RelationshipScore?: number;

  /**
   * <p> The level of confidence that Amazon Comprehend Medical has that the segment of text is correctly recognized as
   *    an attribute. </p>
   */
  Score?: number;

  /**
   * <p> The segment of input text extracted as this attribute.</p>
   */
  Text?: string;

  /**
   * <p> Contextual information for this attribute. </p>
   */
  Traits?: Trait[];

  /**
   * <p> The type of attribute. </p>
   */
  Type?: EntitySubType | string;
}

export namespace Attribute {
  export const filterSensitiveLog = (obj: Attribute): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Attribute => __isa(o, "Attribute");
}

export enum AttributeName {
  DIAGNOSIS = "DIAGNOSIS",
  NEGATION = "NEGATION",
  SIGN = "SIGN",
  SYMPTOM = "SYMPTOM",
}

/**
 * <p>Provides information for filtering a list of detection jobs.</p>
 */
export interface ComprehendMedicalAsyncJobFilter {
  __type?: "ComprehendMedicalAsyncJobFilter";
  /**
   * <p>Filters on the name of the job.</p>
   */
  JobName?: string;

  /**
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *    status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *    Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *    newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *    Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *    oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;
}

export namespace ComprehendMedicalAsyncJobFilter {
  export const filterSensitiveLog = (obj: ComprehendMedicalAsyncJobFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ComprehendMedicalAsyncJobFilter => __isa(o, "ComprehendMedicalAsyncJobFilter");
}

/**
 * <p>Provides information about a detection job.</p>
 */
export interface ComprehendMedicalAsyncJobProperties {
  __type?: "ComprehendMedicalAsyncJobProperties";
  /**
   * <p>The Amazon Resource Name (ARN) that gives Amazon Comprehend Medical read access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>The time that the detection job completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The date and time that job metadata is deleted from the server. Output files in your S3
   *    bucket will not be deleted. After the metadata is deleted, the job will no longer appear in the
   *    results of the <code>ListEntitiesDetectionV2Job</code> or the <code>ListPHIDetectionJobs</code>
   *    operation.</p>
   */
  ExpirationTime?: Date;

  /**
   * <p>The input data configuration that you supplied when you created the detection job.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The identifier assigned to the detection job.</p>
   */
  JobId?: string;

  /**
   * <p>The name that you assigned to the detection job.</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the detection job. If the status is <code>FAILED</code>, the
   *     <code>Message</code> field shows the reason for the failure.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>The AWS Key Management Service key, if any, used to encrypt the output files. </p>
   */
  KMSKey?: string;

  /**
   * <p>The language code of the input documents.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The path to the file that describes the results of a batch job.</p>
   */
  ManifestFilePath?: string;

  /**
   * <p>A description of the status of a job.</p>
   */
  Message?: string;

  /**
   * <p>The version of the model used to analyze the documents. The version number looks like X.X.X.
   *    You can use this information to track the model used for a particular batch of documents.</p>
   */
  ModelVersion?: string;

  /**
   * <p>The output data configuration that you supplied when you created the detection job.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>The time that the detection job was submitted for processing.</p>
   */
  SubmitTime?: Date;
}

export namespace ComprehendMedicalAsyncJobProperties {
  export const filterSensitiveLog = (obj: ComprehendMedicalAsyncJobProperties): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ComprehendMedicalAsyncJobProperties =>
    __isa(o, "ComprehendMedicalAsyncJobProperties");
}

export interface DescribeEntitiesDetectionV2JobRequest {
  __type?: "DescribeEntitiesDetectionV2JobRequest";
  /**
   * <p>The identifier that Amazon Comprehend Medical generated for the job. The
   *     <code>StartEntitiesDetectionV2Job</code> operation returns this identifier in its
   *    response.</p>
   */
  JobId: string | undefined;
}

export namespace DescribeEntitiesDetectionV2JobRequest {
  export const filterSensitiveLog = (obj: DescribeEntitiesDetectionV2JobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeEntitiesDetectionV2JobRequest =>
    __isa(o, "DescribeEntitiesDetectionV2JobRequest");
}

export interface DescribeEntitiesDetectionV2JobResponse {
  __type?: "DescribeEntitiesDetectionV2JobResponse";
  /**
   * <p>An object that contains the properties associated with a detection job.</p>
   */
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
}

export namespace DescribeEntitiesDetectionV2JobResponse {
  export const filterSensitiveLog = (obj: DescribeEntitiesDetectionV2JobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeEntitiesDetectionV2JobResponse =>
    __isa(o, "DescribeEntitiesDetectionV2JobResponse");
}

export interface DescribePHIDetectionJobRequest {
  __type?: "DescribePHIDetectionJobRequest";
  /**
   * <p>The identifier that Amazon Comprehend Medical generated for the job. The <code>StartPHIDetectionJob</code>
   *    operation returns this identifier in its response.</p>
   */
  JobId: string | undefined;
}

export namespace DescribePHIDetectionJobRequest {
  export const filterSensitiveLog = (obj: DescribePHIDetectionJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribePHIDetectionJobRequest => __isa(o, "DescribePHIDetectionJobRequest");
}

export interface DescribePHIDetectionJobResponse {
  __type?: "DescribePHIDetectionJobResponse";
  /**
   * <p>An object that contains the properties associated with a detection job.</p>
   */
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
}

export namespace DescribePHIDetectionJobResponse {
  export const filterSensitiveLog = (obj: DescribePHIDetectionJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribePHIDetectionJobResponse => __isa(o, "DescribePHIDetectionJobResponse");
}

export interface DetectEntitiesRequest {
  __type?: "DetectEntitiesRequest";
  /**
   * <p> A UTF-8 text string containing the clinical content being examined for entities. Each
   *    string must contain fewer than 20,000 bytes of characters.</p>
   */
  Text: string | undefined;
}

export namespace DetectEntitiesRequest {
  export const filterSensitiveLog = (obj: DetectEntitiesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetectEntitiesRequest => __isa(o, "DetectEntitiesRequest");
}

export interface DetectEntitiesResponse {
  __type?: "DetectEntitiesResponse";
  /**
   * <p> The collection of medical entities extracted from the input text and their associated
   *    information. For each entity, the response provides the entity text, the entity category, where
   *    the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and
   *    analysis. Attributes and traits of the entity are also returned.</p>
   */
  Entities: Entity[] | undefined;

  /**
   * <p>The version of the model used to analyze the documents. The version number looks like X.X.X.
   *    You can use this information to track the model used for a particular batch of documents.</p>
   */
  ModelVersion: string | undefined;

  /**
   * <p> If the result of the previous request to <code>DetectEntities</code> was truncated, include
   *    the <code>PaginationToken</code> to fetch the next page of entities.</p>
   */
  PaginationToken?: string;

  /**
   * <p> Attributes extracted from the input text that we were unable to relate to an entity.</p>
   */
  UnmappedAttributes?: UnmappedAttribute[];
}

export namespace DetectEntitiesResponse {
  export const filterSensitiveLog = (obj: DetectEntitiesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetectEntitiesResponse => __isa(o, "DetectEntitiesResponse");
}

export interface DetectEntitiesV2Request {
  __type?: "DetectEntitiesV2Request";
  /**
   * <p>A UTF-8 string containing the clinical content being examined for entities. Each string must
   *    contain fewer than 20,000 bytes of characters.</p>
   */
  Text: string | undefined;
}

export namespace DetectEntitiesV2Request {
  export const filterSensitiveLog = (obj: DetectEntitiesV2Request): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetectEntitiesV2Request => __isa(o, "DetectEntitiesV2Request");
}

export interface DetectEntitiesV2Response {
  __type?: "DetectEntitiesV2Response";
  /**
   * <p>The collection of medical entities extracted from the input text and their associated
   *    information. For each entity, the response provides the entity text, the entity category, where
   *    the entity text begins and ends, and the level of confidence in the detection and analysis.
   *    Attributes and traits of the entity are also returned.</p>
   */
  Entities: Entity[] | undefined;

  /**
   * <p>The version of the model used to analyze the documents. The version number looks like X.X.X.
   *    You can use this information to track the model used for a particular batch of documents.</p>
   */
  ModelVersion: string | undefined;

  /**
   * <p>If the result to the <code>DetectEntitiesV2</code> operation was truncated, include the
   *     <code>PaginationToken</code> to fetch the next page of entities.</p>
   */
  PaginationToken?: string;

  /**
   * <p>Attributes extracted from the input text that couldn't be related to an entity.</p>
   */
  UnmappedAttributes?: UnmappedAttribute[];
}

export namespace DetectEntitiesV2Response {
  export const filterSensitiveLog = (obj: DetectEntitiesV2Response): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetectEntitiesV2Response => __isa(o, "DetectEntitiesV2Response");
}

export interface DetectPHIRequest {
  __type?: "DetectPHIRequest";
  /**
   * <p> A UTF-8 text string containing the clinical content being examined for PHI entities. Each
   *    string must contain fewer than 20,000 bytes of characters.</p>
   */
  Text: string | undefined;
}

export namespace DetectPHIRequest {
  export const filterSensitiveLog = (obj: DetectPHIRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetectPHIRequest => __isa(o, "DetectPHIRequest");
}

export interface DetectPHIResponse {
  __type?: "DetectPHIResponse";
  /**
   * <p> The collection of PHI entities extracted from the input text and their associated
   *    information. For each entity, the response provides the entity text, the entity category, where
   *    the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in its detection.
   *   </p>
   */
  Entities: Entity[] | undefined;

  /**
   * <p>The version of the model used to analyze the documents. The version number looks like X.X.X.
   *    You can use this information to track the model used for a particular batch of documents.</p>
   */
  ModelVersion: string | undefined;

  /**
   * <p> If the result of the previous request to <code>DetectPHI</code> was truncated, include the
   *     <code>PaginationToken</code> to fetch the next page of PHI entities. </p>
   */
  PaginationToken?: string;
}

export namespace DetectPHIResponse {
  export const filterSensitiveLog = (obj: DetectPHIResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetectPHIResponse => __isa(o, "DetectPHIResponse");
}

/**
 * <p> Provides information about an extracted medical entity.</p>
 */
export interface Entity {
  __type?: "Entity";
  /**
   * <p> The extracted attributes that relate to this entity.</p>
   */
  Attributes?: Attribute[];

  /**
   * <p> The 0-based character offset in the input text that shows where the entity begins. The
   *    offset returns the UTF-8 code point in the string. </p>
   */
  BeginOffset?: number;

  /**
   * <p> The category of the entity.</p>
   */
  Category?: EntityType | string;

  /**
   * <p> The 0-based character offset in the input text that shows where the entity ends. The offset
   *    returns the UTF-8 code point in the string. </p>
   */
  EndOffset?: number;

  /**
   * <p> The numeric identifier for the entity. This is a monotonically increasing id unique within
   *    this response rather than a global unique identifier. </p>
   */
  Id?: number;

  /**
   * <p>The level of confidence that Amazon Comprehend Medical has in the accuracy of the detection.</p>
   */
  Score?: number;

  /**
   * <p> The segment of input text extracted as this entity.</p>
   */
  Text?: string;

  /**
   * <p>Contextual information for the entity.</p>
   */
  Traits?: Trait[];

  /**
   * <p> Describes the specific type of entity with category of entities.</p>
   */
  Type?: EntitySubType | string;
}

export namespace Entity {
  export const filterSensitiveLog = (obj: Entity): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Entity => __isa(o, "Entity");
}

export enum EntitySubType {
  ACUITY = "ACUITY",
  ADDRESS = "ADDRESS",
  AGE = "AGE",
  BRAND_NAME = "BRAND_NAME",
  CONTACT_POINT = "CONTACT_POINT",
  DATE = "DATE",
  DIRECTION = "DIRECTION",
  DOSAGE = "DOSAGE",
  DURATION = "DURATION",
  EMAIL = "EMAIL",
  FORM = "FORM",
  FREQUENCY = "FREQUENCY",
  GENERIC_NAME = "GENERIC_NAME",
  IDENTIFIER = "IDENTIFIER",
  NAME = "NAME",
  PROCEDURE_NAME = "PROCEDURE_NAME",
  PROFESSION = "PROFESSION",
  QUALITY = "QUALITY",
  QUANTITY = "QUANTITY",
  RATE = "RATE",
  ROUTE_OR_MODE = "ROUTE_OR_MODE",
  STRENGTH = "STRENGTH",
  SYSTEM_ORGAN_SITE = "SYSTEM_ORGAN_SITE",
  TEST_NAME = "TEST_NAME",
  TEST_UNITS = "TEST_UNITS",
  TEST_VALUE = "TEST_VALUE",
  TREATMENT_NAME = "TREATMENT_NAME",
  URL = "URL",
}

export enum EntityType {
  ANATOMY = "ANATOMY",
  MEDICAL_CONDITION = "MEDICAL_CONDITION",
  MEDICATION = "MEDICATION",
  PROTECTED_HEALTH_INFORMATION = "PROTECTED_HEALTH_INFORMATION",
  TEST_TREATMENT_PROCEDURE = "TEST_TREATMENT_PROCEDURE",
}

/**
 * <p>The detected attributes that relate to an entity. This includes an extracted segment of the
 *    text that is an attribute of an entity, or otherwise related to an entity. InferICD10CM detects
 *    the following attributes: <code>Direction</code>, <code>System, Organ or Site</code>, and
 *     <code>Acuity</code>.</p>
 */
export interface ICD10CMAttribute {
  __type?: "ICD10CMAttribute";
  /**
   * <p>The 0-based character offset in the input text that shows where the attribute begins. The
   *    offset returns the UTF-8 code point in the string.</p>
   */
  BeginOffset?: number;

  /**
   * <p>The 0-based character offset in the input text that shows where the attribute ends. The
   *    offset returns the UTF-8 code point in the string.</p>
   */
  EndOffset?: number;

  /**
   * <p>The numeric identifier for this attribute. This is a monotonically increasing id unique
   *    within this response rather than a global unique identifier.</p>
   */
  Id?: number;

  /**
   * <p>The level of confidence that Amazon Comprehend Medical has that this attribute is correctly related
   *    to this entity.</p>
   */
  RelationshipScore?: number;

  /**
   * <p>The level of confidence that Amazon Comprehend Medical has that the segment of text is correctly
   *    recognized as an attribute.</p>
   */
  Score?: number;

  /**
   * <p>The segment of input text which contains the detected attribute.</p>
   */
  Text?: string;

  /**
   * <p>The contextual information for the attribute. The traits recognized by InferICD10CM are
   *     <code>DIAGNOSIS</code>, <code>SIGN</code>, <code>SYMPTOM</code>, and <code>NEGATION</code>.</p>
   */
  Traits?: ICD10CMTrait[];

  /**
   * <p>The type of attribute. InferICD10CM detects entities of the type <code>DX_NAME</code>.
   *   </p>
   */
  Type?: ICD10CMAttributeType | string;
}

export namespace ICD10CMAttribute {
  export const filterSensitiveLog = (obj: ICD10CMAttribute): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ICD10CMAttribute => __isa(o, "ICD10CMAttribute");
}

export enum ICD10CMAttributeType {
  ACUITY = "ACUITY",
  DIRECTION = "DIRECTION",
  QUALITY = "QUALITY",
  QUANTITY = "QUANTITY",
  SYSTEM_ORGAN_SITE = "SYSTEM_ORGAN_SITE",
}

/**
 * <p> The ICD-10-CM concepts that the entity could refer to, along with a score indicating the
 *    likelihood of the match.</p>
 */
export interface ICD10CMConcept {
  __type?: "ICD10CMConcept";
  /**
   * <p>The ICD-10-CM code that identifies the concept found in the knowledge base from the Centers for Disease Control.</p>
   */
  Code?: string;

  /**
   * <p>The long description of the ICD-10-CM code in the ontology.</p>
   */
  Description?: string;

  /**
   * <p>The level of confidence that Amazon Comprehend Medical has that the entity is accurately linked to an
   *    ICD-10-CM concept.</p>
   */
  Score?: number;
}

export namespace ICD10CMConcept {
  export const filterSensitiveLog = (obj: ICD10CMConcept): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ICD10CMConcept => __isa(o, "ICD10CMConcept");
}

/**
 * <p>The collection of medical entities extracted from the input text and their associated
 *    information. For each entity, the response provides the entity text, the entity category, where
 *    the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the
 *    detection and analysis. Attributes and traits of the entity are also returned. </p>
 */
export interface ICD10CMEntity {
  __type?: "ICD10CMEntity";
  /**
   * <p>The detected attributes that relate to the entity. An extracted segment of the text that
   *    is an attribute of an entity, or otherwise related to an entity, such as the nature of a medical
   *    condition.</p>
   */
  Attributes?: ICD10CMAttribute[];

  /**
   * <p>The 0-based character offset in the input text that shows where the entity begins. The
   *    offset returns the UTF-8 code point in the string.</p>
   */
  BeginOffset?: number;

  /**
   * <p> The category of the entity. InferICD10CM detects entities in the
   *     <code>MEDICAL_CONDITION</code> category.
   *   </p>
   */
  Category?: ICD10CMEntityCategory | string;

  /**
   * <p>The 0-based character offset in the input text that shows where the entity ends. The offset
   *    returns the UTF-8 code point in the string.</p>
   */
  EndOffset?: number;

  /**
   * <p>The ICD-10-CM concepts that the entity could refer to, along with a score indicating the
   *    likelihood of the match.</p>
   */
  ICD10CMConcepts?: ICD10CMConcept[];

  /**
   * <p>The numeric identifier for the entity. This is a monotonically increasing id unique within
   *    this response rather than a global unique identifier.</p>
   */
  Id?: number;

  /**
   * <p>The level of confidence that Amazon Comprehend Medical has in the accuracy of the detection.</p>
   */
  Score?: number;

  /**
   * <p>The segment of input text that is matched to the detected entity.</p>
   */
  Text?: string;

  /**
   * <p>Provides Contextual information for the entity. The traits recognized by InferICD10CM are
   *    <code>DIAGNOSIS</code>, <code>SIGN</code>, <code>SYMPTOM</code>, and <code>NEGATION.</code>
   *          </p>
   */
  Traits?: ICD10CMTrait[];

  /**
   * <p>Describes the specific type of entity with category of entities. InferICD10CM detects
   *    entities of the type <code>DX_NAME</code>.</p>
   */
  Type?: ICD10CMEntityType | string;
}

export namespace ICD10CMEntity {
  export const filterSensitiveLog = (obj: ICD10CMEntity): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ICD10CMEntity => __isa(o, "ICD10CMEntity");
}

export enum ICD10CMEntityCategory {
  MEDICAL_CONDITION = "MEDICAL_CONDITION",
}

export enum ICD10CMEntityType {
  DX_NAME = "DX_NAME",
}

/**
 * <p>Contextual information for the entity. The traits recognized by InferICD10CM are
 *     <code>DIAGNOSIS</code>, <code>SIGN</code>, <code>SYMPTOM</code>, and
 *    <code>NEGATION</code>.</p>
 */
export interface ICD10CMTrait {
  __type?: "ICD10CMTrait";
  /**
   * <p>Provides a name or contextual description about the trait.</p>
   */
  Name?: ICD10CMTraitName | string;

  /**
   * <p>The level of confidence that Amazon Comprehend Medical has that the segment of text is correctly recognized as
   *    a trait.</p>
   */
  Score?: number;
}

export namespace ICD10CMTrait {
  export const filterSensitiveLog = (obj: ICD10CMTrait): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ICD10CMTrait => __isa(o, "ICD10CMTrait");
}

export enum ICD10CMTraitName {
  DIAGNOSIS = "DIAGNOSIS",
  NEGATION = "NEGATION",
  SIGN = "SIGN",
  SYMPTOM = "SYMPTOM",
}

export interface InferICD10CMRequest {
  __type?: "InferICD10CMRequest";
  /**
   * <p>The input text used for analysis. The input for InferICD10CM is a string from 1 to 10000
   *    characters.</p>
   */
  Text: string | undefined;
}

export namespace InferICD10CMRequest {
  export const filterSensitiveLog = (obj: InferICD10CMRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InferICD10CMRequest => __isa(o, "InferICD10CMRequest");
}

export interface InferICD10CMResponse {
  __type?: "InferICD10CMResponse";
  /**
   * <p>The medical conditions detected in the text linked to ICD-10-CM concepts. If the action is
   *    successful, the service sends back an HTTP 200 response, as well as the entities detected.</p>
   */
  Entities: ICD10CMEntity[] | undefined;

  /**
   * <p>The version of the model used to analyze the documents, in the format
   *     <i>n</i>.<i>n</i>.<i>n</i> You can use this
   *    information to track the model used for a particular batch of documents.</p>
   */
  ModelVersion?: string;

  /**
   * <p>If the result of the previous request to <code>InferICD10CM</code> was truncated, include
   *    the <code>PaginationToken</code> to fetch the next page of medical condition entities. </p>
   */
  PaginationToken?: string;
}

export namespace InferICD10CMResponse {
  export const filterSensitiveLog = (obj: InferICD10CMResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InferICD10CMResponse => __isa(o, "InferICD10CMResponse");
}

export interface InferRxNormRequest {
  __type?: "InferRxNormRequest";
  /**
   * <p>The input text used for analysis. The input for InferRxNorm is a string from 1 to 10000
   *    characters.</p>
   */
  Text: string | undefined;
}

export namespace InferRxNormRequest {
  export const filterSensitiveLog = (obj: InferRxNormRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InferRxNormRequest => __isa(o, "InferRxNormRequest");
}

export interface InferRxNormResponse {
  __type?: "InferRxNormResponse";
  /**
   * <p>The medication entities detected in the text linked to RxNorm concepts. If the action is
   *    successful, the service sends back an HTTP 200 response, as well as the entities detected.</p>
   */
  Entities: RxNormEntity[] | undefined;

  /**
   * <p>The version of the model used to analyze the documents, in the format
   *     <i>n</i>.<i>n</i>.<i>n</i> You can use this
   *    information to track the model used for a particular batch of documents.</p>
   */
  ModelVersion?: string;

  /**
   * <p>If the result of the previous request to <code>InferRxNorm</code> was truncated, include the
   *     <code>PaginationToken</code> to fetch the next page of medication entities.</p>
   */
  PaginationToken?: string;
}

export namespace InferRxNormResponse {
  export const filterSensitiveLog = (obj: InferRxNormResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InferRxNormResponse => __isa(o, "InferRxNormResponse");
}

/**
 * <p>The input properties for an entities detection job</p>
 */
export interface InputDataConfig {
  __type?: "InputDataConfig";
  /**
   * <p>The URI of the S3 bucket that contains the input data. The bucket must be in the same region
   *    as the API endpoint that you are calling.</p>
   *          <p>Each file in the document collection must be less than 40 KB. You can store a maximum of 30
   *    GB in the bucket.</p>
   */
  S3Bucket: string | undefined;

  /**
   * <p>The path to the input data files in the S3 bucket.</p>
   */
  S3Key?: string;
}

export namespace InputDataConfig {
  export const filterSensitiveLog = (obj: InputDataConfig): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InputDataConfig => __isa(o, "InputDataConfig");
}

/**
 * <p> An internal server error occurred. Retry your request. </p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalServerException => __isa(o, "InternalServerException");
}

/**
 * <p> The input text was not in valid UTF-8 character encoding. Check your text then retry your
 *    request.</p>
 */
export interface InvalidEncodingException extends __SmithyException, $MetadataBearer {
  name: "InvalidEncodingException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidEncodingException {
  export const filterSensitiveLog = (obj: InvalidEncodingException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidEncodingException => __isa(o, "InvalidEncodingException");
}

/**
 * <p> The request that you made is invalid. Check your request to determine why it's invalid and
 *    then retry the request.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidRequestException => __isa(o, "InvalidRequestException");
}

export enum JobStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PARTIAL_SUCCESS = "PARTIAL_SUCCESS",
  STOPPED = "STOPPED",
  STOP_REQUESTED = "STOP_REQUESTED",
  SUBMITTED = "SUBMITTED",
}

export enum LanguageCode {
  EN = "en",
}

export interface ListEntitiesDetectionV2JobsRequest {
  __type?: "ListEntitiesDetectionV2JobsRequest";
  /**
   * <p>Filters the jobs that are returned. You can filter jobs based on their names, status, or the
   *    date and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: ComprehendMedicalAsyncJobFilter;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListEntitiesDetectionV2JobsRequest {
  export const filterSensitiveLog = (obj: ListEntitiesDetectionV2JobsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListEntitiesDetectionV2JobsRequest =>
    __isa(o, "ListEntitiesDetectionV2JobsRequest");
}

export interface ListEntitiesDetectionV2JobsResponse {
  __type?: "ListEntitiesDetectionV2JobsResponse";
  /**
   * <p>A list containing the properties of each job returned.</p>
   */
  ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListEntitiesDetectionV2JobsResponse {
  export const filterSensitiveLog = (obj: ListEntitiesDetectionV2JobsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListEntitiesDetectionV2JobsResponse =>
    __isa(o, "ListEntitiesDetectionV2JobsResponse");
}

export interface ListPHIDetectionJobsRequest {
  __type?: "ListPHIDetectionJobsRequest";
  /**
   * <p>Filters the jobs that are returned. You can filter jobs based on their names, status, or the
   *    date and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: ComprehendMedicalAsyncJobFilter;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListPHIDetectionJobsRequest {
  export const filterSensitiveLog = (obj: ListPHIDetectionJobsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListPHIDetectionJobsRequest => __isa(o, "ListPHIDetectionJobsRequest");
}

export interface ListPHIDetectionJobsResponse {
  __type?: "ListPHIDetectionJobsResponse";
  /**
   * <p>A list containing the properties of each job returned.</p>
   */
  ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListPHIDetectionJobsResponse {
  export const filterSensitiveLog = (obj: ListPHIDetectionJobsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListPHIDetectionJobsResponse => __isa(o, "ListPHIDetectionJobsResponse");
}

/**
 * <p>The output properties for a detection job.</p>
 */
export interface OutputDataConfig {
  __type?: "OutputDataConfig";
  /**
   * <p>When you use the <code>OutputDataConfig</code> object with asynchronous operations, you
   *    specify the Amazon S3 location where you want to write the output data. The URI must be in the
   *    same region as the API endpoint that you are calling. The location is used as the prefix for the
   *    actual location of the output.</p>
   */
  S3Bucket: string | undefined;

  /**
   * <p>The path to the output data files in the S3 bucket. Amazon Comprehend Medical creates an output directory using
   *    the job ID so that the output from one job does not overwrite the output of another.</p>
   */
  S3Key?: string;
}

export namespace OutputDataConfig {
  export const filterSensitiveLog = (obj: OutputDataConfig): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OutputDataConfig => __isa(o, "OutputDataConfig");
}

/**
 * <p>The resource identified by the specified Amazon Resource Name (ARN) was not found. Check the
 *    ARN and try your request again.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceNotFoundException => __isa(o, "ResourceNotFoundException");
}

/**
 * <p>The extracted attributes that relate to this entity. The attributes recognized by
 *    InferRxNorm are <code>DOSAGE</code>, <code>DURATION</code>, <code>FORM</code>,
 *     <code>FREQUENCY</code>, <code>RATE</code>, <code>ROUTE_OR_MODE</code>.</p>
 */
export interface RxNormAttribute {
  __type?: "RxNormAttribute";
  /**
   * <p>The 0-based character offset in the input text that shows where the attribute begins. The
   *    offset returns the UTF-8 code point in the string.</p>
   */
  BeginOffset?: number;

  /**
   * <p>The 0-based character offset in the input text that shows where the attribute ends. The
   *    offset returns the UTF-8 code point in the string.</p>
   */
  EndOffset?: number;

  /**
   * <p>The numeric identifier for this attribute. This is a monotonically increasing id unique
   *    within this response rather than a global unique identifier.</p>
   */
  Id?: number;

  /**
   * <p>The level of confidence that Amazon Comprehend Medical has that the attribute is accurately linked
   *    to an entity.</p>
   */
  RelationshipScore?: number;

  /**
   * <p>The level of confidence that Comprehend Medical has that the segment of text is correctly
   *    recognized as an attribute.</p>
   */
  Score?: number;

  /**
   * <p>The segment of input text which corresponds to the detected attribute.</p>
   */
  Text?: string;

  /**
   * <p>Contextual information for the attribute. InferRxNorm recognizes the trait
   *      <code>NEGATION</code> for attributes, i.e. that the patient is not taking a specific dose or form of a medication.</p>
   */
  Traits?: RxNormTrait[];

  /**
   * <p>The type of attribute. The types of attributes recognized by InferRxNorm are
   *     <code>BRAND_NAME</code> and <code>GENERIC_NAME</code>.</p>
   */
  Type?: RxNormAttributeType | string;
}

export namespace RxNormAttribute {
  export const filterSensitiveLog = (obj: RxNormAttribute): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RxNormAttribute => __isa(o, "RxNormAttribute");
}

export enum RxNormAttributeType {
  DOSAGE = "DOSAGE",
  DURATION = "DURATION",
  FORM = "FORM",
  FREQUENCY = "FREQUENCY",
  RATE = "RATE",
  ROUTE_OR_MODE = "ROUTE_OR_MODE",
  STRENGTH = "STRENGTH",
}

/**
 * <p>The RxNorm concept that the entity could refer to, along with a score indicating the
 *    likelihood of the match.</p>
 */
export interface RxNormConcept {
  __type?: "RxNormConcept";
  /**
   * <p>RxNorm concept ID, also known as the RxCUI.</p>
   */
  Code?: string;

  /**
   * <p>The description of the RxNorm concept.</p>
   */
  Description?: string;

  /**
   * <p>The level of confidence that Amazon Comprehend Medical has that the entity is accurately linked to
   *    the reported RxNorm concept.</p>
   */
  Score?: number;
}

export namespace RxNormConcept {
  export const filterSensitiveLog = (obj: RxNormConcept): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RxNormConcept => __isa(o, "RxNormConcept");
}

/**
 * <p>The collection of medical entities extracted from the input text and their associated
 *    information. For each entity, the response provides the entity text, the entity category, where
 *    the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the
 *    detection and analysis. Attributes and traits of the entity are also returned. </p>
 */
export interface RxNormEntity {
  __type?: "RxNormEntity";
  /**
   * <p>The extracted attributes that relate to the entity. The attributes recognized by
   *    InferRxNorm are <code>DOSAGE</code>, <code>DURATION</code>, <code>FORM</code>,
   *     <code>FREQUENCY</code>, <code>RATE</code>, <code>ROUTE_OR_MODE</code>, and
   *    <code>STRENGTH</code>.</p>
   */
  Attributes?: RxNormAttribute[];

  /**
   * <p>The 0-based character offset in the input text that shows where the entity begins. The
   *    offset returns the UTF-8 code point in the string.</p>
   */
  BeginOffset?: number;

  /**
   * <p>The category of the entity. The recognized categories are <code>GENERIC</code> or
   *     <code>BRAND_NAME</code>.</p>
   */
  Category?: RxNormEntityCategory | string;

  /**
   * <p>The 0-based character offset in the input text that shows where the entity ends. The offset
   *    returns the UTF-8 code point in the string.</p>
   */
  EndOffset?: number;

  /**
   * <p>The numeric identifier for the entity. This is a monotonically increasing id unique within
   *    this response rather than a global unique identifier.</p>
   */
  Id?: number;

  /**
   * <p> The RxNorm concepts that the entity could refer to, along with a score indicating the
   *    likelihood of the match.</p>
   */
  RxNormConcepts?: RxNormConcept[];

  /**
   * <p>The level of confidence that Amazon Comprehend Medical has in the accuracy of the detected entity.</p>
   */
  Score?: number;

  /**
   * <p>The segment of input text extracted from which the entity was detected.</p>
   */
  Text?: string;

  /**
   * <p> Contextual information for the entity.</p>
   */
  Traits?: RxNormTrait[];

  /**
   * <p> Describes the specific type of entity. For InferRxNorm, the
   *    recognized entity type is <code>MEDICATION</code>.</p>
   */
  Type?: RxNormEntityType | string;
}

export namespace RxNormEntity {
  export const filterSensitiveLog = (obj: RxNormEntity): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RxNormEntity => __isa(o, "RxNormEntity");
}

export enum RxNormEntityCategory {
  MEDICATION = "MEDICATION",
}

export enum RxNormEntityType {
  BRAND_NAME = "BRAND_NAME",
  GENERIC_NAME = "GENERIC_NAME",
}

/**
 * <p>The contextual information for the entity. InferRxNorm recognizes the trait
 *     <code>NEGATION</code>, which is any indication that the patient is not taking a medication.
 *   </p>
 */
export interface RxNormTrait {
  __type?: "RxNormTrait";
  /**
   * <p>Provides a name or contextual description about the trait.</p>
   */
  Name?: RxNormTraitName | string;

  /**
   * <p>The level of confidence that Amazon Comprehend Medical has in the accuracy of the detected trait.</p>
   */
  Score?: number;
}

export namespace RxNormTrait {
  export const filterSensitiveLog = (obj: RxNormTrait): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RxNormTrait => __isa(o, "RxNormTrait");
}

export enum RxNormTraitName {
  NEGATION = "NEGATION",
}

/**
 * <p> The Amazon Comprehend Medical service is temporarily unavailable. Please wait and then retry your request.
 *   </p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  Message?: string;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServiceUnavailableException => __isa(o, "ServiceUnavailableException");
}

export interface StartEntitiesDetectionV2JobRequest {
  __type?: "StartEntitiesDetectionV2JobRequest";
  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon Comprehend Medical
   *    generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *    grants Amazon Comprehend Medical read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions-med.html#auth-role-permissions-med"> Role-Based Permissions Required for Asynchronous Operations</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * <p>An AWS Key Management Service key to encrypt your output files. If you do not specify a key,
   *    the files are written in plain text.</p>
   */
  KMSKey?: string;

  /**
   * <p>The language of the input documents. All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>Specifies where to send the output files.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;
}

export namespace StartEntitiesDetectionV2JobRequest {
  export const filterSensitiveLog = (obj: StartEntitiesDetectionV2JobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartEntitiesDetectionV2JobRequest =>
    __isa(o, "StartEntitiesDetectionV2JobRequest");
}

export interface StartEntitiesDetectionV2JobResponse {
  __type?: "StartEntitiesDetectionV2JobResponse";
  /**
   * <p>The identifier generated for the job. To get the status of a job, use this identifier with
   *    the <code>DescribeEntitiesDetectionV2Job</code> operation.</p>
   */
  JobId?: string;
}

export namespace StartEntitiesDetectionV2JobResponse {
  export const filterSensitiveLog = (obj: StartEntitiesDetectionV2JobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartEntitiesDetectionV2JobResponse =>
    __isa(o, "StartEntitiesDetectionV2JobResponse");
}

export interface StartPHIDetectionJobRequest {
  __type?: "StartPHIDetectionJobRequest";
  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon Comprehend Medical
   *    generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *    grants Amazon Comprehend Medical read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions-med.html#auth-role-permissions-med"> Role-Based Permissions Required for Asynchronous Operations</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * <p>An AWS Key Management Service key to encrypt your output files. If you do not specify a key,
   *    the files are written in plain text.</p>
   */
  KMSKey?: string;

  /**
   * <p>The language of the input documents. All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>Specifies where to send the output files.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;
}

export namespace StartPHIDetectionJobRequest {
  export const filterSensitiveLog = (obj: StartPHIDetectionJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartPHIDetectionJobRequest => __isa(o, "StartPHIDetectionJobRequest");
}

export interface StartPHIDetectionJobResponse {
  __type?: "StartPHIDetectionJobResponse";
  /**
   * <p>The identifier generated for the job. To get the status of a job, use this identifier with
   *    the <code>DescribePHIDetectionJob</code> operation.</p>
   */
  JobId?: string;
}

export namespace StartPHIDetectionJobResponse {
  export const filterSensitiveLog = (obj: StartPHIDetectionJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartPHIDetectionJobResponse => __isa(o, "StartPHIDetectionJobResponse");
}

export interface StopEntitiesDetectionV2JobRequest {
  __type?: "StopEntitiesDetectionV2JobRequest";
  /**
   * <p>The identifier of the medical entities job to stop.</p>
   */
  JobId: string | undefined;
}

export namespace StopEntitiesDetectionV2JobRequest {
  export const filterSensitiveLog = (obj: StopEntitiesDetectionV2JobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopEntitiesDetectionV2JobRequest => __isa(o, "StopEntitiesDetectionV2JobRequest");
}

export interface StopEntitiesDetectionV2JobResponse {
  __type?: "StopEntitiesDetectionV2JobResponse";
  /**
   * <p>The identifier of the medical entities detection job that was stopped.</p>
   */
  JobId?: string;
}

export namespace StopEntitiesDetectionV2JobResponse {
  export const filterSensitiveLog = (obj: StopEntitiesDetectionV2JobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopEntitiesDetectionV2JobResponse =>
    __isa(o, "StopEntitiesDetectionV2JobResponse");
}

export interface StopPHIDetectionJobRequest {
  __type?: "StopPHIDetectionJobRequest";
  /**
   * <p>The identifier of the PHI detection job to stop.</p>
   */
  JobId: string | undefined;
}

export namespace StopPHIDetectionJobRequest {
  export const filterSensitiveLog = (obj: StopPHIDetectionJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopPHIDetectionJobRequest => __isa(o, "StopPHIDetectionJobRequest");
}

export interface StopPHIDetectionJobResponse {
  __type?: "StopPHIDetectionJobResponse";
  /**
   * <p>The identifier of the PHI detection job that was stopped.</p>
   */
  JobId?: string;
}

export namespace StopPHIDetectionJobResponse {
  export const filterSensitiveLog = (obj: StopPHIDetectionJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopPHIDetectionJobResponse => __isa(o, "StopPHIDetectionJobResponse");
}

/**
 * <p> The size of the text you submitted exceeds the size limit. Reduce the size of the text or
 *    use a smaller document and then retry your request. </p>
 */
export interface TextSizeLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "TextSizeLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace TextSizeLimitExceededException {
  export const filterSensitiveLog = (obj: TextSizeLimitExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TextSizeLimitExceededException => __isa(o, "TextSizeLimitExceededException");
}

/**
 * <p> You have made too many requests within a short period of time. Wait for a short time and
 *    then try your request again. Contact customer support for more information about a service limit
 *    increase. </p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TooManyRequestsException => __isa(o, "TooManyRequestsException");
}

/**
 * <p> Provides contextual information about the extracted entity. </p>
 */
export interface Trait {
  __type?: "Trait";
  /**
   * <p> Provides a name or contextual description about the trait. </p>
   */
  Name?: AttributeName | string;

  /**
   * <p> The level of confidence that Amazon Comprehend Medical has in the accuracy of this trait.</p>
   */
  Score?: number;
}

export namespace Trait {
  export const filterSensitiveLog = (obj: Trait): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Trait => __isa(o, "Trait");
}

/**
 * <p> An attribute that we extracted, but were unable to relate to an entity. </p>
 */
export interface UnmappedAttribute {
  __type?: "UnmappedAttribute";
  /**
   * <p> The specific attribute that has been extracted but not mapped to an entity. </p>
   */
  Attribute?: Attribute;

  /**
   * <p> The type of the attribute, could be one of the following values: "MEDICATION",
   *    "MEDICAL_CONDITION", "ANATOMY", "TEST_AND_TREATMENT_PROCEDURE" or "PROTECTED_HEALTH_INFORMATION".
   *   </p>
   */
  Type?: EntityType | string;
}

export namespace UnmappedAttribute {
  export const filterSensitiveLog = (obj: UnmappedAttribute): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnmappedAttribute => __isa(o, "UnmappedAttribute");
}

/**
 * <p>The filter that you specified for the operation is invalid. Check the filter values that you
 *    entered and try your request again.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ValidationException => __isa(o, "ValidationException");
}
