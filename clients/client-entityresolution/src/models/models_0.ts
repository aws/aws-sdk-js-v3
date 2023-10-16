// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";
import { DocumentType as __DocumentType } from "@smithy/types";

import { EntityResolutionServiceException as __BaseException } from "./EntityResolutionServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action. <code>HTTP Status Code:
 *             403</code>
 *          </p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const AttributeMatchingModel = {
  MANY_TO_MANY: "MANY_TO_MANY",
  ONE_TO_ONE: "ONE_TO_ONE",
} as const;

/**
 * @public
 */
export type AttributeMatchingModel = (typeof AttributeMatchingModel)[keyof typeof AttributeMatchingModel];

/**
 * @public
 * <p>The request could not be processed because of conflict in the current state of the
 *          resource. Example: Workflow already exists, Schema already exists, Workflow is currently
 *          running, etc. <code>HTTP Status Code: 400</code>
 *          </p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const IdMappingType = {
  PROVIDER: "PROVIDER",
} as const;

/**
 * @public
 */
export type IdMappingType = (typeof IdMappingType)[keyof typeof IdMappingType];

/**
 * @public
 * <p>The Amazon S3 location that temporarily stores your data while it processes.
 *          Your information won't be saved permanently.</p>
 */
export interface IntermediateSourceConfiguration {
  /**
   * @public
   * <p>The Amazon S3 location (bucket and prefix). For example:
   *             <code>s3://provider_bucket/DOC-EXAMPLE-BUCKET</code>
   *          </p>
   */
  intermediateS3Path: string | undefined;
}

/**
 * @public
 * <p>An object containing the <code>providerServiceARN</code>,
 *             <code>intermediateSourceConfiguration</code>, and
 *          <code>providerConfiguration</code>.</p>
 */
export interface ProviderProperties {
  /**
   * @public
   * <p>The ARN of the provider service.</p>
   */
  providerServiceArn: string | undefined;

  /**
   * @public
   * <p>The required configuration fields to use with the provider service.</p>
   */
  providerConfiguration?: __DocumentType;

  /**
   * @public
   * <p>The Amazon S3 location that temporarily stores your data while it processes.
   *          Your information won't be saved permanently.</p>
   */
  intermediateSourceConfiguration?: IntermediateSourceConfiguration;
}

/**
 * @public
 * <p>An object which defines the ID mapping techniques and provider configurations.</p>
 */
export interface IdMappingTechniques {
  /**
   * @public
   * <p>The type of ID mapping.</p>
   */
  idMappingType: IdMappingType | undefined;

  /**
   * @public
   * <p>An object which defines any additional configurations required by the provider
   *          service.</p>
   */
  providerProperties: ProviderProperties | undefined;
}

/**
 * @public
 * <p>An object containing <code>InputSourceARN</code> and <code>SchemaName</code>.</p>
 */
export interface IdMappingWorkflowInputSource {
  /**
   * @public
   * <p>An Gluetable ARN for the input source table.</p>
   */
  inputSourceARN: string | undefined;

  /**
   * @public
   * <p>The name of the schema to be retrieved.</p>
   */
  schemaName: string | undefined;
}

/**
 * @public
 * <p>The output source for the ID mapping workflow.</p>
 */
export interface IdMappingWorkflowOutputSource {
  /**
   * @public
   * <p>The S3 path to which Entity Resolution will write the output table.</p>
   */
  outputS3Path: string | undefined;

  /**
   * @public
   * <p>Customer KMS ARN for encryption at rest. If not provided, system will use
   *          an Entity Resolution managed KMS key.</p>
   */
  KMSArn?: string;
}

/**
 * @public
 */
export interface CreateIdMappingWorkflowInput {
  /**
   * @public
   * <p>The name of the workflow. There can't be multiple <code>IdMappingWorkflows</code> with
   *          the same name.</p>
   */
  workflowName: string | undefined;

  /**
   * @public
   * <p>A description of the workflow.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A list of <code>InputSource</code> objects, which have the fields
   *             <code>InputSourceARN</code> and <code>SchemaName</code>.</p>
   */
  inputSourceConfig: IdMappingWorkflowInputSource[] | undefined;

  /**
   * @public
   * <p>A list of <code>IdMappingWorkflowOutputSource</code> objects, each of which contains
   *          fields <code>OutputS3Path</code> and <code>Output</code>.</p>
   */
  outputSourceConfig: IdMappingWorkflowOutputSource[] | undefined;

  /**
   * @public
   * <p>An object which defines the <code>idMappingType</code> and the
   *             <code>providerProperties</code>.</p>
   */
  idMappingTechniques: IdMappingTechniques | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes
   *          this role to create resources on your behalf as part of workflow execution.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateIdMappingWorkflowOutput {
  /**
   * @public
   * <p>The name of the workflow.</p>
   */
  workflowName: string | undefined;

  /**
   * @public
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the
   *             <code>IDMappingWorkflow</code>.</p>
   */
  workflowArn: string | undefined;

  /**
   * @public
   * <p>A description of the workflow.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A list of <code>InputSource</code> objects, which have the fields
   *             <code>InputSourceARN</code> and <code>SchemaName</code>.</p>
   */
  inputSourceConfig: IdMappingWorkflowInputSource[] | undefined;

  /**
   * @public
   * <p>A list of <code>IdMappingWorkflowOutputSource</code> objects, each of which contains
   *          fields <code>OutputS3Path</code> and <code>Output</code>.</p>
   */
  outputSourceConfig: IdMappingWorkflowOutputSource[] | undefined;

  /**
   * @public
   * <p>An object which defines the <code>idMappingType</code> and the
   *             <code>providerProperties</code>.</p>
   */
  idMappingTechniques: IdMappingTechniques | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes
   *          this role to create resources on your behalf as part of workflow execution.</p>
   */
  roleArn: string | undefined;
}

/**
 * @public
 * <p>The request was rejected because it attempted to create resources beyond the current
 *             Entity Resolution account limits. The error message describes the limit exceeded.
 *             <code>HTTP Status Code: 402</code>
 *          </p>
 */
export class ExceedsLimitException extends __BaseException {
  readonly name: "ExceedsLimitException" = "ExceedsLimitException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The name of the quota that has been breached.</p>
   */
  quotaName?: string;

  /**
   * @public
   * <p>The current quota value for the customers.</p>
   */
  quotaValue?: number;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExceedsLimitException, __BaseException>) {
    super({
      name: "ExceedsLimitException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExceedsLimitException.prototype);
    this.quotaName = opts.quotaName;
    this.quotaValue = opts.quotaValue;
  }
}

/**
 * @public
 * <p>This exception occurs when there is an internal failure in the Entity Resolution
 *          service. <code>HTTP Status Code: 500</code>
 *          </p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
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
  }
}

/**
 * @public
 * <p>The request was denied due to request throttling. <code>HTTP Status Code:
 *          429</code>
 *          </p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * @public
 * <p>The input fails to satisfy the constraints specified by Entity Resolution. <code>HTTP
 *             Status Code: 400</code>
 *          </p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * @enum
 */
export const IncrementalRunType = {
  IMMEDIATE: "IMMEDIATE",
} as const;

/**
 * @public
 */
export type IncrementalRunType = (typeof IncrementalRunType)[keyof typeof IncrementalRunType];

/**
 * @public
 * <p>An object which defines an incremental run type and has only
 *             <code>incrementalRunType</code> as a field.</p>
 */
export interface IncrementalRunConfig {
  /**
   * @public
   * <p>The type of incremental run. It takes only one value: <code>IMMEDIATE</code>.</p>
   */
  incrementalRunType?: IncrementalRunType;
}

/**
 * @public
 * <p>An object containing <code>InputSourceARN</code>, <code>SchemaName</code>, and
 *             <code>ApplyNormalization</code>.</p>
 */
export interface InputSource {
  /**
   * @public
   * <p>An Glue table ARN for the input source table.</p>
   */
  inputSourceARN: string | undefined;

  /**
   * @public
   * <p>The name of the schema to be retrieved.</p>
   */
  schemaName: string | undefined;

  /**
   * @public
   * <p>Normalizes the attributes defined in the schema in the input data. For example, if an
   *          attribute has an <code>AttributeType</code> of <code>PHONE_NUMBER</code>, and the data in
   *          the input table is in a format of 1234567890, Entity Resolution will normalize this field
   *          in the output to (123)-456-7890.</p>
   */
  applyNormalization?: boolean;
}

/**
 * @public
 * <p>A list of <code>OutputAttribute</code> objects, each of which have the fields
 *             <code>Name</code> and <code>Hashed</code>. Each of these objects selects a column to be
 *          included in the output table, and whether the values of the column should be hashed.</p>
 */
export interface OutputAttribute {
  /**
   * @public
   * <p>A name of a column to be written to the output. This must be an <code>InputField</code>
   *          name in the schema mapping.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Enables the ability to hash the column values in the output.</p>
   */
  hashed?: boolean;
}

/**
 * @public
 * <p>A list of <code>OutputAttribute</code> objects, each of which have the fields
 *             <code>Name</code> and <code>Hashed</code>. Each of these objects selects a column to be
 *          included in the output table, and whether the values of the column should be hashed.</p>
 */
export interface OutputSource {
  /**
   * @public
   * <p>The S3 path to which Entity Resolution will write the output table.</p>
   */
  outputS3Path: string | undefined;

  /**
   * @public
   * <p>Customer KMS ARN for encryption at rest. If not provided, system will use an Entity Resolution managed KMS key.</p>
   */
  KMSArn?: string;

  /**
   * @public
   * <p>A list of <code>OutputAttribute</code> objects, each of which have the fields
   *             <code>Name</code> and <code>Hashed</code>. Each of these objects selects a column to be
   *          included in the output table, and whether the values of the column should be hashed.</p>
   */
  output: OutputAttribute[] | undefined;

  /**
   * @public
   * <p>Normalizes the attributes defined in the schema in the input data. For example, if an
   *          attribute has an <code>AttributeType</code> of <code>PHONE_NUMBER</code>, and the data in
   *          the input table is in a format of 1234567890, Entity Resolution will normalize this field
   *          in the output to (123)-456-7890.</p>
   */
  applyNormalization?: boolean;
}

/**
 * @public
 * @enum
 */
export const ResolutionType = {
  ML_MATCHING: "ML_MATCHING",
  PROVIDER: "PROVIDER",
  RULE_MATCHING: "RULE_MATCHING",
} as const;

/**
 * @public
 */
export type ResolutionType = (typeof ResolutionType)[keyof typeof ResolutionType];

/**
 * @public
 * <p>An object containing <code>RuleName</code>, and <code>MatchingKeys</code>.</p>
 */
export interface Rule {
  /**
   * @public
   * <p>A name for the matching rule.</p>
   */
  ruleName: string | undefined;

  /**
   * @public
   * <p>A list of <code>MatchingKeys</code>. The <code>MatchingKeys</code> must have been
   *          defined in the <code>SchemaMapping</code>. Two records are considered to match according to
   *          this rule if all of the <code>MatchingKeys</code> match.</p>
   */
  matchingKeys: string[] | undefined;
}

/**
 * @public
 * <p>An object which defines the list of matching rules to run and has a field
 *             <code>Rules</code>, which is a list of rule objects.</p>
 */
export interface RuleBasedProperties {
  /**
   * @public
   * <p>A list of <code>Rule</code> objects, each of which have fields <code>RuleName</code> and
   *             <code>MatchingKeys</code>.</p>
   */
  rules: Rule[] | undefined;

  /**
   * @public
   * <p>The comparison type. You can either choose <code>ONE_TO_ONE</code> or
   *             <code>MANY_TO_MANY</code> as the AttributeMatchingModel. When choosing
   *             <code>MANY_TO_MANY</code>, the system can match attributes across the sub-types of an
   *          attribute type. For example, if the value of the <code>Email</code> field of Profile A and
   *          the value of <code>BusinessEmail</code> field of Profile B matches, the two profiles are
   *          matched on the <code>Email</code> type. When choosing <code>ONE_TO_ONE</code> ,the system
   *          can only match if the sub-types are exact matches. For example, only when the value of the
   *             <code>Email</code> field of Profile A and the value of the <code>Email</code> field of
   *          Profile B matches, the two profiles are matched on the <code>Email</code> type.</p>
   */
  attributeMatchingModel: AttributeMatchingModel | undefined;
}

/**
 * @public
 * <p>An object which defines the <code>resolutionType</code> and the
 *             <code>ruleBasedProperties</code>.</p>
 */
export interface ResolutionTechniques {
  /**
   * @public
   * <p>The type of matching. There are two types of matching: <code>RULE_MATCHING</code> and
   *             <code>ML_MATCHING</code>.</p>
   */
  resolutionType: ResolutionType | undefined;

  /**
   * @public
   * <p>An object which defines the list of matching rules to run and has a field
   *             <code>Rules</code>, which is a list of rule objects.</p>
   */
  ruleBasedProperties?: RuleBasedProperties;

  /**
   * @public
   * <p>The properties of the provider service.</p>
   */
  providerProperties?: ProviderProperties;
}

/**
 * @public
 */
export interface CreateMatchingWorkflowInput {
  /**
   * @public
   * <p>The name of the workflow. There can't be multiple <code>MatchingWorkflows</code> with
   *          the same name.</p>
   */
  workflowName: string | undefined;

  /**
   * @public
   * <p>A description of the workflow.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A list of <code>InputSource</code> objects, which have the fields
   *             <code>InputSourceARN</code> and <code>SchemaName</code>.</p>
   */
  inputSourceConfig: InputSource[] | undefined;

  /**
   * @public
   * <p>A list of <code>OutputSource</code> objects, each of which contains fields
   *             <code>OutputS3Path</code>, <code>ApplyNormalization</code>, and
   *          <code>Output</code>.</p>
   */
  outputSourceConfig: OutputSource[] | undefined;

  /**
   * @public
   * <p>An object which defines the <code>resolutionType</code> and the
   *             <code>ruleBasedProperties</code>.</p>
   */
  resolutionTechniques: ResolutionTechniques | undefined;

  /**
   * @public
   * <p>An object which defines an incremental run type and has only
   *             <code>incrementalRunType</code> as a field.</p>
   */
  incrementalRunConfig?: IncrementalRunConfig;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes
   *          this role to create resources on your behalf as part of workflow execution.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateMatchingWorkflowOutput {
  /**
   * @public
   * <p>The name of the workflow.</p>
   */
  workflowName: string | undefined;

  /**
   * @public
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the
   *             <code>MatchingWorkflow</code>.</p>
   */
  workflowArn: string | undefined;

  /**
   * @public
   * <p>A description of the workflow.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A list of <code>InputSource</code> objects, which have the fields
   *             <code>InputSourceARN</code> and <code>SchemaName</code>.</p>
   */
  inputSourceConfig: InputSource[] | undefined;

  /**
   * @public
   * <p>A list of <code>OutputSource</code> objects, each of which contains fields
   *             <code>OutputS3Path</code>, <code>ApplyNormalization</code>, and
   *          <code>Output</code>.</p>
   */
  outputSourceConfig: OutputSource[] | undefined;

  /**
   * @public
   * <p>An object which defines the <code>resolutionType</code> and the
   *             <code>ruleBasedProperties</code>.</p>
   */
  resolutionTechniques: ResolutionTechniques | undefined;

  /**
   * @public
   * <p>An object which defines an incremental run type and has only
   *             <code>incrementalRunType</code> as a field.</p>
   */
  incrementalRunConfig?: IncrementalRunConfig;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes
   *          this role to create resources on your behalf as part of workflow execution.</p>
   */
  roleArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SchemaAttributeType = {
  ADDRESS: "ADDRESS",
  ADDRESS_CITY: "ADDRESS_CITY",
  ADDRESS_COUNTRY: "ADDRESS_COUNTRY",
  ADDRESS_POSTALCODE: "ADDRESS_POSTALCODE",
  ADDRESS_STATE: "ADDRESS_STATE",
  ADDRESS_STREET1: "ADDRESS_STREET1",
  ADDRESS_STREET2: "ADDRESS_STREET2",
  ADDRESS_STREET3: "ADDRESS_STREET3",
  DATE: "DATE",
  EMAIL_ADDRESS: "EMAIL_ADDRESS",
  NAME: "NAME",
  NAME_FIRST: "NAME_FIRST",
  NAME_LAST: "NAME_LAST",
  NAME_MIDDLE: "NAME_MIDDLE",
  PHONE: "PHONE",
  PHONE_COUNTRYCODE: "PHONE_COUNTRYCODE",
  PHONE_NUMBER: "PHONE_NUMBER",
  PROVIDER_ID: "PROVIDER_ID",
  STRING: "STRING",
  UNIQUE_ID: "UNIQUE_ID",
} as const;

/**
 * @public
 */
export type SchemaAttributeType = (typeof SchemaAttributeType)[keyof typeof SchemaAttributeType];

/**
 * @public
 * <p>An object containing <code>FieldName</code>, <code>Type</code>, <code>GroupName</code>,
 *          and <code>MatchKey</code>.</p>
 */
export interface SchemaInputAttribute {
  /**
   * @public
   * <p>A string containing the field name.</p>
   */
  fieldName: string | undefined;

  /**
   * @public
   * <p>The type of the attribute, selected from a list of values.</p>
   */
  type: SchemaAttributeType | undefined;

  /**
   * @public
   * <p>Instruct Entity Resolution to combine several columns into a unified column with the
   *          identical attribute type. For example, when working with columns such as first_name,
   *          middle_name, and last_name, assigning them a common <code>GroupName</code> will prompt
   *             Entity Resolution to concatenate them into a single value.</p>
   */
  groupName?: string;

  /**
   * @public
   * <p>A key that allows grouping of multiple input attributes into a unified matching group.
   *          For example, let's consider a scenario where the source table contains various addresses,
   *          such as <code>business_address</code> and <code>shipping_address</code>. By assigning the
   *             <code>MatchKey</code>
   *             <i>Address</i> to both attributes, Entity Resolution will match records
   *          across these fields to create a consolidated matching group. If no <code>MatchKey</code> is
   *          specified for a column, it won't be utilized for matching purposes but will still be
   *          included in the output table.</p>
   */
  matchKey?: string;

  /**
   * @public
   * <p>The subtype of the attribute, selected from a list of values.</p>
   */
  subType?: string;
}

/**
 * @public
 */
export interface CreateSchemaMappingInput {
  /**
   * @public
   * <p>The name of the schema. There can't be multiple <code>SchemaMappings</code> with the
   *          same name.</p>
   */
  schemaName: string | undefined;

  /**
   * @public
   * <p>A description of the schema.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A list of <code>MappedInputFields</code>. Each <code>MappedInputField</code> corresponds
   *          to a column the source data table, and contains column name plus additional information
   *          that Entity Resolution uses for matching.</p>
   */
  mappedInputFields: SchemaInputAttribute[] | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateSchemaMappingOutput {
  /**
   * @public
   * <p>The name of the schema.</p>
   */
  schemaName: string | undefined;

  /**
   * @public
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the
   *             <code>SchemaMapping</code>.</p>
   */
  schemaArn: string | undefined;

  /**
   * @public
   * <p>A description of the schema.</p>
   */
  description: string | undefined;

  /**
   * @public
   * <p>A list of <code>MappedInputFields</code>. Each <code>MappedInputField</code> corresponds
   *          to a column the source data table, and contains column name plus additional information
   *          that Entity Resolution uses for matching.</p>
   */
  mappedInputFields: SchemaInputAttribute[] | undefined;
}

/**
 * @public
 */
export interface DeleteIdMappingWorkflowInput {
  /**
   * @public
   * <p>The name of the workflow to be deleted.</p>
   */
  workflowName: string | undefined;
}

/**
 * @public
 */
export interface DeleteIdMappingWorkflowOutput {
  /**
   * @public
   * <p>A successful operation message.</p>
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeleteMatchingWorkflowInput {
  /**
   * @public
   * <p>The name of the workflow to be retrieved.</p>
   */
  workflowName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMatchingWorkflowOutput {
  /**
   * @public
   * <p>A successful operation message.</p>
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeleteSchemaMappingInput {
  /**
   * @public
   * <p>The name of the schema to delete.</p>
   */
  schemaName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSchemaMappingOutput {
  /**
   * @public
   * <p>A successful operation message.</p>
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface GetIdMappingJobInput {
  /**
   * @public
   * <p>The name of the workflow.</p>
   */
  workflowName: string | undefined;

  /**
   * @public
   * <p>The ID of the job.</p>
   */
  jobId: string | undefined;
}

/**
 * @public
 * <p>An object containing an error message, if there was an error.</p>
 */
export interface ErrorDetails {
  /**
   * @public
   * <p>The error message from the job, if there is one.</p>
   */
  errorMessage?: string;
}

/**
 * @public
 * <p>An object containing <code>InputRecords</code>, <code>TotalRecordsProcessed</code>,
 *             <code>MatchIDs</code>, and <code>RecordsNotProcessed</code>.</p>
 */
export interface IdMappingJobMetrics {
  /**
   * @public
   * <p>The total number of input records.</p>
   */
  inputRecords?: number;

  /**
   * @public
   * <p>The total number of records processed.</p>
   */
  totalRecordsProcessed?: number;

  /**
   * @public
   * <p>The total number of records that did not get processed.</p>
   */
  recordsNotProcessed?: number;
}

/**
 * @public
 * @enum
 */
export const JobStatus = {
  FAILED: "FAILED",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 */
export interface GetIdMappingJobOutput {
  /**
   * @public
   * <p>The ID of the job.</p>
   */
  jobId: string | undefined;

  /**
   * @public
   * <p>The current status of the job.</p>
   */
  status: JobStatus | undefined;

  /**
   * @public
   * <p>The time at which the job was started.</p>
   */
  startTime: Date | undefined;

  /**
   * @public
   * <p>The time at which the job has finished.</p>
   */
  endTime?: Date;

  /**
   * @public
   * <p>Metrics associated with the execution, specifically total records processed, unique IDs
   *          generated, and records the execution skipped.</p>
   */
  metrics?: IdMappingJobMetrics;

  /**
   * @public
   * <p>An object containing an error message, if there was an error.</p>
   */
  errorDetails?: ErrorDetails;
}

/**
 * @public
 * <p>The resource could not be found. <code>HTTP Status Code: 404</code>
 *          </p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 */
export interface GetIdMappingWorkflowInput {
  /**
   * @public
   * <p>The name of the workflow.</p>
   */
  workflowName: string | undefined;
}

/**
 * @public
 */
export interface GetIdMappingWorkflowOutput {
  /**
   * @public
   * <p>The name of the workflow.</p>
   */
  workflowName: string | undefined;

  /**
   * @public
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the
   *             <code>IdMappingWorkflow</code> .</p>
   */
  workflowArn: string | undefined;

  /**
   * @public
   * <p>A description of the workflow.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A list of <code>InputSource</code> objects, which have the fields
   *             <code>InputSourceARN</code> and <code>SchemaName</code>.</p>
   */
  inputSourceConfig: IdMappingWorkflowInputSource[] | undefined;

  /**
   * @public
   * <p>A list of <code>OutputSource</code> objects, each of which contains fields
   *             <code>OutputS3Path</code> and <code>KMSArn</code>.</p>
   */
  outputSourceConfig: IdMappingWorkflowOutputSource[] | undefined;

  /**
   * @public
   * <p>An object which defines the <code>idMappingType</code> and the
   *             <code>providerProperties</code>.</p>
   */
  idMappingTechniques: IdMappingTechniques | undefined;

  /**
   * @public
   * <p>The timestamp of when the workflow was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when the workflow was last updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes
   *          this role to access resources on your behalf.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetMatchIdInput {
  /**
   * @public
   * <p>The name of the workflow.</p>
   */
  workflowName: string | undefined;

  /**
   * @public
   * <p>The record to fetch the Match ID for.</p>
   */
  record: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetMatchIdOutput {
  /**
   * @public
   * <p>The unique identifiers for this group of match records.</p>
   */
  matchId?: string;
}

/**
 * @public
 */
export interface GetMatchingJobInput {
  /**
   * @public
   * <p>The name of the workflow.</p>
   */
  workflowName: string | undefined;

  /**
   * @public
   * <p>The ID of the job.</p>
   */
  jobId: string | undefined;
}

/**
 * @public
 * <p>An object containing <code>InputRecords</code>, <code>TotalRecordsProcessed</code>,
 *             <code>MatchIDs</code>, and <code>RecordsNotProcessed</code>.</p>
 */
export interface JobMetrics {
  /**
   * @public
   * <p>The total number of input records.</p>
   */
  inputRecords?: number;

  /**
   * @public
   * <p>The total number of records processed.</p>
   */
  totalRecordsProcessed?: number;

  /**
   * @public
   * <p>The total number of records that did not get processed.</p>
   */
  recordsNotProcessed?: number;

  /**
   * @public
   * <p>The total number of <code>matchID</code>s generated.</p>
   */
  matchIDs?: number;
}

/**
 * @public
 */
export interface GetMatchingJobOutput {
  /**
   * @public
   * <p>The ID of the job.</p>
   */
  jobId: string | undefined;

  /**
   * @public
   * <p>The current status of the job.</p>
   */
  status: JobStatus | undefined;

  /**
   * @public
   * <p>The time at which the job was started.</p>
   */
  startTime: Date | undefined;

  /**
   * @public
   * <p>The time at which the job has finished.</p>
   */
  endTime?: Date;

  /**
   * @public
   * <p>Metrics associated with the execution, specifically total records processed, unique IDs
   *          generated, and records the execution skipped.</p>
   */
  metrics?: JobMetrics;

  /**
   * @public
   * <p>An object containing an error message, if there was an error.</p>
   */
  errorDetails?: ErrorDetails;
}

/**
 * @public
 */
export interface GetMatchingWorkflowInput {
  /**
   * @public
   * <p>The name of the workflow.</p>
   */
  workflowName: string | undefined;
}

/**
 * @public
 */
export interface GetMatchingWorkflowOutput {
  /**
   * @public
   * <p>The name of the workflow.</p>
   */
  workflowName: string | undefined;

  /**
   * @public
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the
   *             <code>MatchingWorkflow</code>.</p>
   */
  workflowArn: string | undefined;

  /**
   * @public
   * <p>A description of the workflow.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A list of <code>InputSource</code> objects, which have the fields
   *             <code>InputSourceARN</code> and <code>SchemaName</code>.</p>
   */
  inputSourceConfig: InputSource[] | undefined;

  /**
   * @public
   * <p>A list of <code>OutputSource</code> objects, each of which contains fields
   *             <code>OutputS3Path</code>, <code>ApplyNormalization</code>, and
   *          <code>Output</code>.</p>
   */
  outputSourceConfig: OutputSource[] | undefined;

  /**
   * @public
   * <p>An object which defines the <code>resolutionType</code> and the
   *             <code>ruleBasedProperties</code>.</p>
   */
  resolutionTechniques: ResolutionTechniques | undefined;

  /**
   * @public
   * <p>The timestamp of when the workflow was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when the workflow was last updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * <p>An object which defines an incremental run type and has only
   *             <code>incrementalRunType</code> as a field.</p>
   */
  incrementalRunConfig?: IncrementalRunConfig;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes
   *          this role to access resources on your behalf.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetProviderServiceInput {
  /**
   * @public
   * <p>The name of the provider. This name is typically the company name.</p>
   */
  providerName: string | undefined;

  /**
   * @public
   * <p>The ARN (Amazon Resource Name) of the product that the provider service provides.</p>
   */
  providerServiceName: string | undefined;
}

/**
 * @public
 * <p>The identifiers of the provider service, from Data Exchange.</p>
 */
export interface ProviderMarketplaceConfiguration {
  /**
   * @public
   * <p>The dataset ID on Data Exchange.</p>
   */
  dataSetId: string | undefined;

  /**
   * @public
   * <p>The revision ID on Data Exchange.</p>
   */
  revisionId: string | undefined;

  /**
   * @public
   * <p>The asset ID on Data Exchange.</p>
   */
  assetId: string | undefined;

  /**
   * @public
   * <p>The listing ID on Data Exchange.</p>
   */
  listingId: string | undefined;
}

/**
 * @public
 * <p>The required configuration fields to use with the provider service.</p>
 */
export type ProviderEndpointConfiguration =
  | ProviderEndpointConfiguration.MarketplaceConfigurationMember
  | ProviderEndpointConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ProviderEndpointConfiguration {
  /**
   * @public
   * <p>The identifiers of the provider service, from Data Exchange.</p>
   */
  export interface MarketplaceConfigurationMember {
    marketplaceConfiguration: ProviderMarketplaceConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    marketplaceConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    marketplaceConfiguration: (value: ProviderMarketplaceConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ProviderEndpointConfiguration, visitor: Visitor<T>): T => {
    if (value.marketplaceConfiguration !== undefined)
      return visitor.marketplaceConfiguration(value.marketplaceConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>The required configuration fields to give intermediate access to a provider
 *          service.</p>
 */
export interface ProviderIntermediateDataAccessConfiguration {
  /**
   * @public
   * <p>The Amazon Web Services account
   *          that
   *          provider can use to read or write data into the customer's intermediate S3
   *          bucket.</p>
   */
  awsAccountIds?: string[];

  /**
   * @public
   * <p>The S3 bucket actions that the provider requires permission for.</p>
   */
  requiredBucketActions?: string[];
}

/**
 * @public
 * @enum
 */
export const ServiceType = {
  ASSIGNMENT: "ASSIGNMENT",
  ID_MAPPING: "ID_MAPPING",
} as const;

/**
 * @public
 */
export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType];

/**
 * @public
 */
export interface GetProviderServiceOutput {
  /**
   * @public
   * <p>The name of the provider. This name is typically the company name.</p>
   */
  providerName: string | undefined;

  /**
   * @public
   * <p>The name of the product that the provider service provides. </p>
   */
  providerServiceName: string | undefined;

  /**
   * @public
   * <p>The display name of the provider service.</p>
   */
  providerServiceDisplayName: string | undefined;

  /**
   * @public
   * <p>The type of provider service.</p>
   */
  providerServiceType: ServiceType | undefined;

  /**
   * @public
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the provider
   *          service.</p>
   */
  providerServiceArn: string | undefined;

  /**
   * @public
   * <p>The definition of the provider configuration.</p>
   */
  providerConfigurationDefinition?: __DocumentType;

  /**
   * @public
   * <p>The required configuration fields to use with the provider service.</p>
   */
  providerEndpointConfiguration: ProviderEndpointConfiguration | undefined;

  /**
   * @public
   * <p>Specifies whether output data from the provider is anonymized. A value of
   *             <code>TRUE</code> means the output will be anonymized and you can't relate the data that
   *          comes back from the provider to the identifying input. A value of <code>FALSE</code> means
   *          the output won't be anonymized and you can relate the data that comes back from the
   *          provider to your source data. </p>
   */
  anonymizedOutput: boolean | undefined;

  /**
   * @public
   * <p>The definition of the provider entity output.</p>
   */
  providerEntityOutputDefinition: __DocumentType | undefined;

  /**
   * @public
   * <p>The Amazon Web Services accounts and the S3 permissions that are required by some
   *          providers to create an S3 bucket for intermediate data storage.</p>
   */
  providerIntermediateDataAccessConfiguration?: ProviderIntermediateDataAccessConfiguration;
}

/**
 * @public
 */
export interface GetSchemaMappingInput {
  /**
   * @public
   * <p>The name of the schema to be retrieved.</p>
   */
  schemaName: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaMappingOutput {
  /**
   * @public
   * <p>The name of the schema.</p>
   */
  schemaName: string | undefined;

  /**
   * @public
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the
   *          SchemaMapping.</p>
   */
  schemaArn: string | undefined;

  /**
   * @public
   * <p>A description of the schema.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A list of <code>MappedInputFields</code>. Each <code>MappedInputField</code> corresponds
   *          to a column the source data table, and contains column name plus additional information
   *          Venice uses for matching.</p>
   */
  mappedInputFields: SchemaInputAttribute[] | undefined;

  /**
   * @public
   * <p>The timestamp of when the <code>SchemaMapping</code> was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when the <code>SchemaMapping</code> was last updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Specifies whether the schema mapping has been applied to a workflow.</p>
   */
  hasWorkflows: boolean | undefined;
}

/**
 * @public
 */
export interface ListIdMappingJobsInput {
  /**
   * @public
   * <p>The name of the workflow to be retrieved.</p>
   */
  workflowName: string | undefined;

  /**
   * @public
   * <p>The pagination token from the previous API call.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of objects returned per page.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>An object containing the <code>JobId</code>, <code>Status</code>,
 *          <code>StartTime</code>, and <code>EndTime</code> of a job.</p>
 */
export interface JobSummary {
  /**
   * @public
   * <p>The ID of the job.</p>
   */
  jobId: string | undefined;

  /**
   * @public
   * <p>The current status of the job.</p>
   */
  status: JobStatus | undefined;

  /**
   * @public
   * <p>The time at which the job was started.</p>
   */
  startTime: Date | undefined;

  /**
   * @public
   * <p>The time at which the job has finished.</p>
   */
  endTime?: Date;
}

/**
 * @public
 */
export interface ListIdMappingJobsOutput {
  /**
   * @public
   * <p>A list of <code>JobSummary</code> objects.</p>
   */
  jobs?: JobSummary[];

  /**
   * @public
   * <p>The pagination token from the previous API call.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListIdMappingWorkflowsInput {
  /**
   * @public
   * <p>The pagination token from the previous API call.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of objects returned per page.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>A list of <code>IdMappingWorkflowSummary</code> objects, each of which contain the
 *          fields <code>WorkflowName</code>, <code>WorkflowArn</code>, <code>CreatedAt</code>, and
 *             <code>UpdatedAt</code>.</p>
 */
export interface IdMappingWorkflowSummary {
  /**
   * @public
   * <p>The name of the workflow.</p>
   */
  workflowName: string | undefined;

  /**
   * @public
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the
   *             <code>IdMappingWorkflow</code>.</p>
   */
  workflowArn: string | undefined;

  /**
   * @public
   * <p>The timestamp of when the workflow was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when the workflow was last updated.</p>
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListIdMappingWorkflowsOutput {
  /**
   * @public
   * <p>A list of <code>IdMappingWorkflowSummary</code> objects.</p>
   */
  workflowSummaries?: IdMappingWorkflowSummary[];

  /**
   * @public
   * <p>The pagination token from the previous API call.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListMatchingJobsInput {
  /**
   * @public
   * <p>The name of the workflow to be retrieved.</p>
   */
  workflowName: string | undefined;

  /**
   * @public
   * <p>The pagination token from the previous API call.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of objects returned per page.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListMatchingJobsOutput {
  /**
   * @public
   * <p>A list of <code>JobSummary</code> objects, each of which contain the ID, status, start
   *          time, and end time of a job.</p>
   */
  jobs?: JobSummary[];

  /**
   * @public
   * <p>The pagination token from the previous API call.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListMatchingWorkflowsInput {
  /**
   * @public
   * <p>The pagination token from the previous API call.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of objects returned per page.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>A list of <code>MatchingWorkflowSummary</code> objects, each of which contain the fields
 *             <code>WorkflowName</code>, <code>WorkflowArn</code>, <code>CreatedAt</code>,
 *             <code>UpdatedAt</code>.</p>
 */
export interface MatchingWorkflowSummary {
  /**
   * @public
   * <p>The name of the workflow.</p>
   */
  workflowName: string | undefined;

  /**
   * @public
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the
   *             <code>MatchingWorkflow</code>.</p>
   */
  workflowArn: string | undefined;

  /**
   * @public
   * <p>The timestamp of when the workflow was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when the workflow was last updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * <p>The method that has been specified for data matching, either using matching provided by
   *             Entity Resolution or through a provider service.</p>
   */
  resolutionType: ResolutionType | undefined;
}

/**
 * @public
 */
export interface ListMatchingWorkflowsOutput {
  /**
   * @public
   * <p>A list of <code>MatchingWorkflowSummary</code> objects, each of which contain the fields
   *             <code>WorkflowName</code>, <code>WorkflowArn</code>, <code>CreatedAt</code>, and
   *             <code>UpdatedAt</code>.</p>
   */
  workflowSummaries?: MatchingWorkflowSummary[];

  /**
   * @public
   * <p>The pagination token from the previous API call.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListProviderServicesInput {
  /**
   * @public
   * <p>The pagination token from the previous API call.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of objects returned per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The name of the provider. This name is typically the company name.</p>
   */
  providerName?: string;
}

/**
 * @public
 * <p>A list of <code>ProviderService</code> objects, each of which contain the fields
 *             <code>providerName</code>, <code>providerServiceArn</code>,
 *             <code>providerServiceName</code>, and <code>providerServiceType</code>.</p>
 */
export interface ProviderServiceSummary {
  /**
   * @public
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the
   *             <code>providerService</code>.</p>
   */
  providerServiceArn: string | undefined;

  /**
   * @public
   * <p>The name of the provider. This name is typically the company name.</p>
   */
  providerName: string | undefined;

  /**
   * @public
   * <p>The display name of the provider service.</p>
   */
  providerServiceDisplayName: string | undefined;

  /**
   * @public
   * <p>The name of the product that the provider service provides.</p>
   */
  providerServiceName: string | undefined;

  /**
   * @public
   * <p>The type of provider service.</p>
   */
  providerServiceType: ServiceType | undefined;
}

/**
 * @public
 */
export interface ListProviderServicesOutput {
  /**
   * @public
   * <p>A list of <code>ProviderServices</code> objects.</p>
   */
  providerServiceSummaries?: ProviderServiceSummary[];

  /**
   * @public
   * <p>The pagination token from the previous API call.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSchemaMappingsInput {
  /**
   * @public
   * <p>The pagination token from the previous API call.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of objects returned per page.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>An object containing <code>SchemaName</code>, <code>SchemaArn</code>,
 *             <code>CreatedAt</code>, and<code>UpdatedAt</code>.</p>
 */
export interface SchemaMappingSummary {
  /**
   * @public
   * <p>The name of the schema.</p>
   */
  schemaName: string | undefined;

  /**
   * @public
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the
   *             <code>SchemaMapping</code>.</p>
   */
  schemaArn: string | undefined;

  /**
   * @public
   * <p>The timestamp of when the <code>SchemaMapping</code> was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when the <code>SchemaMapping</code> was last updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * <p>Specifies whether the schema mapping has been applied to a workflow.</p>
   */
  hasWorkflows: boolean | undefined;
}

/**
 * @public
 */
export interface ListSchemaMappingsOutput {
  /**
   * @public
   * <p>A list of <code>SchemaMappingSummary</code> objects, each of which contain the fields
   *             <code>SchemaName</code>, <code>SchemaArn</code>, <code>CreatedAt</code>,
   *             <code>UpdatedAt</code>.</p>
   */
  schemaList?: SchemaMappingSummary[];

  /**
   * @public
   * <p>The pagination token from the previous API call.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * @public
   * <p>The ARN of the resource for which you want to view tags.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartIdMappingJobInput {
  /**
   * @public
   * <p>The name of the ID mapping job to be retrieved.</p>
   */
  workflowName: string | undefined;
}

/**
 * @public
 */
export interface StartIdMappingJobOutput {
  /**
   * @public
   * <p>The ID of the job.</p>
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface StartMatchingJobInput {
  /**
   * @public
   * <p>The name of the matching job to be retrieved.</p>
   */
  workflowName: string | undefined;
}

/**
 * @public
 */
export interface StartMatchingJobOutput {
  /**
   * @public
   * <p>The ID of the job.</p>
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * @public
   * <p>The ARN of the resource for which you want to view tags.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * @public
   * <p>The ARN of the resource for which you want to untag.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The list of tag keys to remove from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @public
 */
export interface UpdateIdMappingWorkflowInput {
  /**
   * @public
   * <p>The name of the workflow.</p>
   */
  workflowName: string | undefined;

  /**
   * @public
   * <p>A description of the workflow.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A list of <code>InputSource</code> objects, which have the fields
   *             <code>InputSourceARN</code> and <code>SchemaName</code>.</p>
   */
  inputSourceConfig: IdMappingWorkflowInputSource[] | undefined;

  /**
   * @public
   * <p>A list of <code>OutputSource</code> objects, each of which contains fields
   *             <code>OutputS3Path</code> and <code>KMSArn</code>.</p>
   */
  outputSourceConfig: IdMappingWorkflowOutputSource[] | undefined;

  /**
   * @public
   * <p>An object which defines the <code>idMappingType</code> and the
   *             <code>providerProperties</code>.</p>
   */
  idMappingTechniques: IdMappingTechniques | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes
   *          this role to access resources on your behalf.</p>
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateIdMappingWorkflowOutput {
  /**
   * @public
   * <p>The name of the workflow.</p>
   */
  workflowName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the workflow role. Entity Resolution assumes this role
   *          to access resources on your behalf.</p>
   */
  workflowArn: string | undefined;

  /**
   * @public
   * <p>A description of the workflow.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A list of <code>InputSource</code> objects, which have the fields
   *             <code>InputSourceARN</code> and <code>SchemaName</code>.</p>
   */
  inputSourceConfig: IdMappingWorkflowInputSource[] | undefined;

  /**
   * @public
   * <p>A list of <code>OutputSource</code> objects, each of which contains fields
   *             <code>OutputS3Path</code> and <code>KMSArn</code>.</p>
   */
  outputSourceConfig: IdMappingWorkflowOutputSource[] | undefined;

  /**
   * @public
   * <p>An object which defines the <code>idMappingType</code> and the
   *             <code>providerProperties</code>.</p>
   */
  idMappingTechniques: IdMappingTechniques | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes
   *          this role to access resources on your behalf.</p>
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateMatchingWorkflowInput {
  /**
   * @public
   * <p>The name of the workflow to be retrieved.</p>
   */
  workflowName: string | undefined;

  /**
   * @public
   * <p>A description of the workflow.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A list of <code>InputSource</code> objects, which have the fields
   *             <code>InputSourceARN</code> and <code>SchemaName</code>.</p>
   */
  inputSourceConfig: InputSource[] | undefined;

  /**
   * @public
   * <p>A list of <code>OutputSource</code> objects, each of which contains fields
   *             <code>OutputS3Path</code>, <code>ApplyNormalization</code>, and
   *          <code>Output</code>.</p>
   */
  outputSourceConfig: OutputSource[] | undefined;

  /**
   * @public
   * <p>An object which defines the <code>resolutionType</code> and the
   *             <code>ruleBasedProperties</code>.</p>
   */
  resolutionTechniques: ResolutionTechniques | undefined;

  /**
   * @public
   * <p>An object which defines an incremental run type and has only
   *             <code>incrementalRunType</code> as a field.</p>
   */
  incrementalRunConfig?: IncrementalRunConfig;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to
   *          create resources on your behalf as part of workflow execution.</p>
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateMatchingWorkflowOutput {
  /**
   * @public
   * <p>The name of the workflow.</p>
   */
  workflowName: string | undefined;

  /**
   * @public
   * <p>A description of the workflow.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A list of <code>InputSource</code> objects, which have the fields
   *             <code>InputSourceARN</code> and <code>SchemaName</code>.</p>
   */
  inputSourceConfig: InputSource[] | undefined;

  /**
   * @public
   * <p>A list of <code>OutputSource</code> objects, each of which contains fields
   *             <code>OutputS3Path</code>, <code>ApplyNormalization</code>, and
   *          <code>Output</code>.</p>
   */
  outputSourceConfig: OutputSource[] | undefined;

  /**
   * @public
   * <p>An object which defines the <code>resolutionType</code> and the
   *             <code>ruleBasedProperties</code>
   *          </p>
   */
  resolutionTechniques: ResolutionTechniques | undefined;

  /**
   * @public
   * <p>An object which defines an incremental run type and has only
   *             <code>incrementalRunType</code> as a field.</p>
   */
  incrementalRunConfig?: IncrementalRunConfig;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes
   *          this role to create resources on your behalf as part of workflow execution.</p>
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateSchemaMappingInput {
  /**
   * @public
   * <p>The name of the schema. There can't be multiple <code>SchemaMappings</code> with the
   *          same name.</p>
   */
  schemaName: string | undefined;

  /**
   * @public
   * <p>A description of the schema.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A list of <code>MappedInputFields</code>. Each <code>MappedInputField</code> corresponds
   *          to a column the source data table, and contains column name plus additional information
   *          that Entity Resolution uses for matching.</p>
   */
  mappedInputFields: SchemaInputAttribute[] | undefined;
}

/**
 * @public
 */
export interface UpdateSchemaMappingOutput {
  /**
   * @public
   * <p>The name of the schema.</p>
   */
  schemaName: string | undefined;

  /**
   * @public
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the
   *             <code>SchemaMapping</code>.</p>
   */
  schemaArn: string | undefined;

  /**
   * @public
   * <p>A description of the schema.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A list of <code>MappedInputFields</code>. Each <code>MappedInputField</code> corresponds
   *          to a column the source data table, and contains column name plus additional information
   *          that Entity Resolution uses for matching.</p>
   */
  mappedInputFields: SchemaInputAttribute[] | undefined;
}

/**
 * @internal
 */
export const GetMatchIdInputFilterSensitiveLog = (obj: GetMatchIdInput): any => ({
  ...obj,
  ...(obj.record && { record: SENSITIVE_STRING }),
});
