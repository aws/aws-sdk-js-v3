// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { EntityResolutionServiceException as __BaseException } from "./EntityResolutionServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action. <code>HTTP Status Code: 403</code>
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
 * <p>The request could not be processed because of conflict in the current state of the resource. Example: Workflow already exists,
 *       Schema already exists, Workflow is currently running, etc.  <code>HTTP Status Code: 400</code>
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
export const IncrementalRunType = {
  IMMEDIATE: "IMMEDIATE",
} as const;

/**
 * @public
 */
export type IncrementalRunType = (typeof IncrementalRunType)[keyof typeof IncrementalRunType];

/**
 * @public
 * <p>An object which defines an incremental run type and has only <code>incrementalRunType</code> as a field.</p>
 */
export interface IncrementalRunConfig {
  /**
   * <p>The type of incremental run. It takes only one value: <code>IMMEDIATE</code>.</p>
   */
  incrementalRunType?: IncrementalRunType | string;
}

/**
 * @public
 * <p>An object containing <code>InputSourceARN</code>, <code>SchemaName</code>,
 *       and <code>ApplyNormalization</code>.</p>
 */
export interface InputSource {
  /**
   * <p>An Glue table ARN for the input source table.</p>
   */
  inputSourceARN: string | undefined;

  /**
   * <p>The name of the schema to be retrieved.</p>
   */
  schemaName: string | undefined;

  /**
   * <p>Normalizes the attributes defined in the schema in the input data. For example, if an
   *          attribute has an <code>AttributeType</code> of <code>PHONE_NUMBER</code>, and the data in
   *          the input table is in a format of 1234567890, Entity Resolution will normalize this field
   *          in the output to (123)-456-7890.</p>
   */
  applyNormalization?: boolean;
}

/**
 * @public
 * <p>A list of <code>OutputAttribute</code> objects, each of which have the fields Name and Hashed. Each of
 *          these objects selects a column to be included in the output table, and whether the
 *          values of the column should be hashed.</p>
 */
export interface OutputAttribute {
  /**
   * <p>A name of a column to be written to the output. This must be an <code>InputField</code> name
   *          in the schema mapping.</p>
   */
  name: string | undefined;

  /**
   * <p>Enables the ability to hash the column values in the output.</p>
   */
  hashed?: boolean;
}

/**
 * @public
 * <p>A list of <code>OutputAttribute</code> objects, each of which have the fields Name and Hashed. Each of
 *          these objects selects a column to be included in the output table, and whether the
 *          values of the column should be hashed.</p>
 */
export interface OutputSource {
  /**
   * <p>The S3 path to which Entity Resolution will write the output table.</p>
   */
  outputS3Path: string | undefined;

  /**
   * <p>A list of <code>OutputAttribute</code> objects, each of which have the fields Name and Hashed. Each of
   *          these objects selects a column to be included in the output table, and whether the
   *          values of the column should be hashed.</p>
   */
  output: OutputAttribute[] | undefined;

  /**
   * <p>Customer KMS ARN for encryption at rest. If not provided, system will use an
   *          Entity Resolution managed KMS key.</p>
   */
  KMSArn?: string;

  /**
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
   * <p>A name for the matching rule.</p>
   */
  ruleName: string | undefined;

  /**
   * <p>A list of <code>MatchingKeys</code>. The <code>MatchingKeys</code> must have been defined in
   *          the <code>SchemaMapping</code>. Two records are considered to match according to this rule if all
   *          of the <code>MatchingKeys</code> match.</p>
   */
  matchingKeys: string[] | undefined;
}

/**
 * @public
 * <p>An object which defines the list of matching rules to run and has a field <code>Rules</code>, which
 *          is a list of rule objects.</p>
 */
export interface RuleBasedProperties {
  /**
   * <p>A list of Rule objects, each of which have fields <code>RuleName</code> and <code>MatchingKeys</code>.</p>
   */
  rules: Rule[] | undefined;

  /**
   * <p>You can either choose <code>ONE_TO_ONE</code> or <code>MANY_TO_MANY</code> as the AttributeMatchingModel. When
   *          choosing <code>MANY_TO_MANY</code>, the system can match attribute across the sub-types of an attribute type. For
   *          example, if the value of the Email field of Profile A and the value of BusinessEmail field of Profile B matches,
   *          the two profiles are matched on the Email type. When choosing <code>ONE_TO_ONE</code> the system can only match if
   *          the sub-types are exact matches. For example, only when the value of the Email field of Profile A and the value of
   *          the Email field of Profile B matches, the two profiles are matched on the Email type.</p>
   */
  attributeMatchingModel: AttributeMatchingModel | string | undefined;
}

/**
 * @public
 * <p>An object which defines the <code>resolutionType</code> and the <code>ruleBasedProperties</code>
 *          </p>
 */
export interface ResolutionTechniques {
  /**
   * <p>There are two types of matching, <code>RULE_MATCHING</code> and <code>ML_MATCHING</code>
   *          </p>
   */
  resolutionType?: ResolutionType | string;

  /**
   * <p>An object which defines the list of matching rules to run and has a field <code>Rules</code>, which
   *          is a list of rule objects.</p>
   */
  ruleBasedProperties?: RuleBasedProperties;
}

/**
 * @public
 */
export interface CreateMatchingWorkflowInput {
  /**
   * <p>The name of the workflow. There cannot be multiple <code>DataIntegrationWorkflows</code> with the same name.</p>
   */
  workflowName: string | undefined;

  /**
   * <p>A description of the workflow.</p>
   */
  description?: string;

  /**
   * <p>A list of <code>InputSource</code> objects, which have the fields <code>InputSourceARN</code> and
   *          <code>SchemaName</code>.</p>
   */
  inputSourceConfig: InputSource[] | undefined;

  /**
   * <p>A list of <code>OutputSource</code> objects, each of which contains fields <code>OutputS3Path</code>,
   *          <code>ApplyNormalization</code>, and <code>Output</code>.</p>
   */
  outputSourceConfig: OutputSource[] | undefined;

  /**
   * <p>An object which defines the <code>resolutionType</code> and the <code>ruleBasedProperties</code>
   *          </p>
   */
  resolutionTechniques: ResolutionTechniques | undefined;

  /**
   * <p>An object which defines an incremental run type and has only <code>incrementalRunType</code> as a field.</p>
   */
  incrementalRunConfig?: IncrementalRunConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. AWS Entity Resolution assumes this role
   *          to create resources on your behalf as part of workflow execution.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateMatchingWorkflowOutput {
  /**
   * <p>The name of the workflow.</p>
   */
  workflowName: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the <code>MatchingWorkflow</code>.</p>
   */
  workflowArn: string | undefined;

  /**
   * <p>A description of the workflow.</p>
   */
  description?: string;

  /**
   * <p>A list of <code>InputSource</code> objects, which have the fields <code>InputSourceARN</code> and
   *          <code>SchemaName</code>.</p>
   */
  inputSourceConfig: InputSource[] | undefined;

  /**
   * <p>A list of <code>OutputSource</code> objects, each of which contains fields <code>OutputS3Path</code>,
   *          <code>ApplyNormalization</code>, and <code>Output</code>.</p>
   */
  outputSourceConfig: OutputSource[] | undefined;

  /**
   * <p>An object which defines the <code>resolutionType</code> and the <code>ruleBasedProperties</code>
   *          </p>
   */
  resolutionTechniques: ResolutionTechniques | undefined;

  /**
   * <p>An object which defines an incremental run type and has only <code>incrementalRunType</code> as a field.</p>
   */
  incrementalRunConfig?: IncrementalRunConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. AWS Entity Resolution assumes this role
   *          to create resources on your behalf as part of workflow execution.</p>
   */
  roleArn: string | undefined;
}

/**
 * @public
 * <p>The request was rejected because it attempted to create resources beyond the current AWS Entity Resolution account limits.
 *       The error message describes the limit exceeded. <code>HTTP Status Code: 402</code>
 *          </p>
 */
export class ExceedsLimitException extends __BaseException {
  readonly name: "ExceedsLimitException" = "ExceedsLimitException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * <p>This exception occurs when there is an internal failure in the AWS Entity Resolution service. <code>HTTP Status Code: 500</code>
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
 * <p>The request was denied due to request throttling. <code>HTTP Status Code: 429</code>
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
 * <p>The input fails to satisfy the constraints specified by AWS Entity Resolution. <code>HTTP Status Code: 400</code>
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
  STRING: "STRING",
  UNIQUE_ID: "UNIQUE_ID",
} as const;

/**
 * @public
 */
export type SchemaAttributeType = (typeof SchemaAttributeType)[keyof typeof SchemaAttributeType];

/**
 * @public
 * <p>An object containing <code>FieldField</code>, <code>Type</code>, <code>GroupName</code>,
 *       and <code>MatchKey</code>.</p>
 */
export interface SchemaInputAttribute {
  /**
   * <p>A string containing the field name.</p>
   */
  fieldName: string | undefined;

  /**
   * <p>The type of the attribute, selected from a list of values.</p>
   */
  type: SchemaAttributeType | string | undefined;

  /**
   * <p>Instruct Entity Resolution to combine several columns into a unified column with the
   *          identical attribute type. For example, when working with columns such as first_name,
   *          middle_name, and last_name, assigning them a common <code>GroupName</code> will prompt
   *          Entity Resolution to concatenate them into a single value.</p>
   */
  groupName?: string;

  /**
   * <p>A key that allows grouping of multiple input attributes into a unified matching group.
   *          For example, let's consider a scenario where the source table contains various addresses,
   *          such as business_address and shipping_address. By assigning the <code>MatchKey</code>
   *             <i>Address</i>' to both attributes, Entity Resolution will match records
   *          across these fields to create a consolidated matching group. If no <code>MatchKey</code> is
   *          specified for a column, it won't be utilized for matching purposes but will still be
   *          included in the output table.</p>
   */
  matchKey?: string;
}

/**
 * @public
 */
export interface CreateSchemaMappingInput {
  /**
   * <p>The name of the schema. There cannot be multiple <code>SchemaMappings</code> with the
   *          same name.</p>
   */
  schemaName: string | undefined;

  /**
   * <p>A description of the schema.</p>
   */
  description?: string;

  /**
   * <p>A list of <code>MappedInputFields</code>. Each <code>MappedInputField</code> corresponds
   *          to a column the source data table, and contains column name plus additional information
   *          that Entity Resolution uses for matching.</p>
   */
  mappedInputFields?: SchemaInputAttribute[];

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateSchemaMappingOutput {
  /**
   * <p>The name of the schema.</p>
   */
  schemaName: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the
   *             <code>SchemaMapping</code>.</p>
   */
  schemaArn: string | undefined;

  /**
   * <p>A description of the schema.</p>
   */
  description: string | undefined;

  /**
   * <p>A list of <code>MappedInputFields</code>. Each <code>MappedInputField</code> corresponds
   *          to a column the source data table, and contains column name plus additional information
   *          that Entity Resolution uses for matching.</p>
   */
  mappedInputFields: SchemaInputAttribute[] | undefined;
}

/**
 * @public
 */
export interface DeleteMatchingWorkflowInput {
  /**
   * <p>The name of the workflow to be retrieved.</p>
   */
  workflowName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMatchingWorkflowOutput {
  /**
   * <p>A successful operation message.</p>
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeleteSchemaMappingInput {
  /**
   * <p>The name of the schema to delete.</p>
   */
  schemaName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSchemaMappingOutput {
  /**
   * <p>A successful operation message.</p>
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface GetMatchIdInput {
  /**
   * <p>The name of the workflow.</p>
   */
  workflowName: string | undefined;

  /**
   * <p>The record to fetch the Match ID for.</p>
   */
  record: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetMatchIdOutput {
  /**
   * <p>The unique identifiers for this group of match records.</p>
   */
  matchId?: string;
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
export interface GetMatchingJobInput {
  /**
   * <p>The name of the workflow.</p>
   */
  workflowName: string | undefined;

  /**
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
   * <p>The error message from the job, if there is one.</p>
   */
  errorMessage?: string;
}

/**
 * @public
 * <p>An object containing <code>InputRecords</code>, <code>TotalRecordsProcessed</code>,
 *       <code>MatchIDs</code>, and <code>RecordsNotProcessed</code>.</p>
 */
export interface JobMetrics {
  /**
   * <p>The total number of input records.</p>
   */
  inputRecords?: number;

  /**
   * <p>The total number of records processed.</p>
   */
  totalRecordsProcessed?: number;

  /**
   * <p>The total number of <code>matchID</code>s generated.</p>
   */
  matchIDs?: number;

  /**
   * <p>The total number of records that did not get processed,</p>
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
export interface GetMatchingJobOutput {
  /**
   * <p>The ID of the job.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The current status of the job. Either <code>running</code>, <code>succeeded</code>,
   *          <code>queued</code>, or <code>failed</code>.</p>
   */
  status: JobStatus | string | undefined;

  /**
   * <p>The time at which the job was started.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The time at which the job has finished.</p>
   */
  endTime?: Date;

  /**
   * <p>Metrics associated with the execution, specifically total records processed,
   *       unique IDs generated, and records the execution skipped.</p>
   */
  metrics?: JobMetrics;

  /**
   * <p>An object containing an error message, if there was an error.</p>
   */
  errorDetails?: ErrorDetails;
}

/**
 * @public
 */
export interface GetMatchingWorkflowInput {
  /**
   * <p>The name of the workflow.</p>
   */
  workflowName: string | undefined;
}

/**
 * @public
 */
export interface GetMatchingWorkflowOutput {
  /**
   * <p>The name of the workflow.</p>
   */
  workflowName: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the <code>MatchingWorkflow</code>.</p>
   */
  workflowArn: string | undefined;

  /**
   * <p>A description of the workflow.</p>
   */
  description?: string;

  /**
   * <p>A list of <code>InputSource</code> objects, which have the fields <code>InputSourceARN</code> and
   *          <code>SchemaName</code>.</p>
   */
  inputSourceConfig: InputSource[] | undefined;

  /**
   * <p>A list of <code>OutputSource</code> objects, each of which contains fields <code>OutputS3Path</code>,
   *          <code>ApplyNormalization</code>, and <code>Output</code>.</p>
   */
  outputSourceConfig: OutputSource[] | undefined;

  /**
   * <p>An object which defines the <code>resolutionType</code> and the <code>ruleBasedProperties</code>
   *          </p>
   */
  resolutionTechniques: ResolutionTechniques | undefined;

  /**
   * <p>The timestamp of when the workflow was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the workflow was last updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * <p>An object which defines an incremental run type and has only <code>incrementalRunType</code> as a field.</p>
   */
  incrementalRunConfig?: IncrementalRunConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. AWS Entity Resolution assumes this role to access
   *       resources on your behalf.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetSchemaMappingInput {
  /**
   * <p>The name of the schema to be retrieved.</p>
   */
  schemaName: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaMappingOutput {
  /**
   * <p>The name of the schema.</p>
   */
  schemaName: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the SchemaMapping.</p>
   */
  schemaArn: string | undefined;

  /**
   * <p>A description of the schema.</p>
   */
  description?: string;

  /**
   * <p>A list of <code>MappedInputFields</code>. Each <code>MappedInputField</code> corresponds
   *          to a column the source data table, and contains column name plus additional information
   *          Venice uses for matching.</p>
   */
  mappedInputFields: SchemaInputAttribute[] | undefined;

  /**
   * <p>The timestamp of when the <code>SchemaMapping</code> was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the <code>SchemaMapping</code> was last updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListMatchingJobsInput {
  /**
   * <p>The name of the workflow to be retrieved.</p>
   */
  workflowName: string | undefined;

  /**
   * <p>The pagination token from the previous <code>ListSchemaMappings</code> API call.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of objects returned per page.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>An object containing the <code>JobId</code>, <code>Status</code>,
 *       <code>StartTime</code>, and <code>EndTime</code> of a job.</p>
 */
export interface JobSummary {
  /**
   * <p>The ID of the job.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The current status of the job. Either <code>running</code>, <code>succeeded</code>,
   *          <code>queued</code>, or <code>failed</code>.</p>
   */
  status: JobStatus | string | undefined;

  /**
   * <p>The time at which the job was started.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The time at which the job has finished.</p>
   */
  endTime?: Date;
}

/**
 * @public
 */
export interface ListMatchingJobsOutput {
  /**
   * <p>A list of JobSummary objects, each of which contain the ID, status, start time, and end time of a job.</p>
   */
  jobs?: JobSummary[];

  /**
   * <p>The pagination token from the previous <code>ListSchemaMappings</code> API call.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListMatchingWorkflowsInput {
  /**
   * <p>The pagination token from the previous <code>ListSchemaMappings</code> API call.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of objects returned per page.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>A list of <code>MatchingWorkflowSummary</code> objects, each of which contain the fields
 *          <code>WorkflowName</code>, <code>WorkflowArn</code>, <code>CreatedAt</code>, <code>UpdatedAt</code>.</p>
 */
export interface MatchingWorkflowSummary {
  /**
   * <p>The name of the workflow.</p>
   */
  workflowName: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the <code>MatchingWorkflow</code>.</p>
   */
  workflowArn: string | undefined;

  /**
   * <p>The timestamp of when the workflow was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the workflow was last updated.</p>
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListMatchingWorkflowsOutput {
  /**
   * <p>A list of <code>MatchingWorkflowSummary</code> objects, each of which contain the fields
   *          <code>WorkflowName</code>, <code>WorkflowArn</code>, <code>CreatedAt</code>, and <code>UpdatedAt</code>.</p>
   */
  workflowSummaries?: MatchingWorkflowSummary[];

  /**
   * <p>The pagination token from the previous <code>ListSchemaMappings</code> API call.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSchemaMappingsInput {
  /**
   * <p>The pagination token from the previous <code>ListSchemaMappings</code> API call.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of objects returned per page.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>An object containing <code>SchemaName</code>, <code>SchemaArn</code>,
 *       <code>CreatedAt</code>, and<code>UpdatedAt</code>.</p>
 */
export interface SchemaMappingSummary {
  /**
   * <p>The name of the schema.</p>
   */
  schemaName: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the
   *             <code>SchemaMapping</code>.</p>
   */
  schemaArn: string | undefined;

  /**
   * <p>The timestamp of when the <code>SchemaMapping</code> was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the <code>SchemaMapping</code> was last updated.</p>
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListSchemaMappingsOutput {
  /**
   * <p>A list of <code>SchemaMappingSummary</code> objects, each of which contain the fields
   *          <code>SchemaName</code>, <code>SchemaArn</code>, <code>CreatedAt</code>, <code>UpdatedAt</code>.</p>
   */
  schemaList?: SchemaMappingSummary[];

  /**
   * <p>The pagination token from the previous <code>ListDomains</code> API call.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The ARN of the resource for which you want to view tags.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartMatchingJobInput {
  /**
   * <p>The name of the matching job to be retrieved.</p>
   */
  workflowName: string | undefined;
}

/**
 * @public
 */
export interface StartMatchingJobOutput {
  /**
   * <p>The ID of the job.</p>
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The ARN of the resource for which you want to view tags.</p>
   */
  resourceArn: string | undefined;

  /**
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
   * <p>The ARN of the resource for which you want to untag.</p>
   */
  resourceArn: string | undefined;

  /**
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
export interface UpdateMatchingWorkflowInput {
  /**
   * <p>The name of the workflow to be retrieved.</p>
   */
  workflowName: string | undefined;

  /**
   * <p>A description of the workflow.</p>
   */
  description?: string;

  /**
   * <p>A list of <code>InputSource</code> objects, which have the fields <code>InputSourceARN</code> and
   *          <code>SchemaName</code>.</p>
   */
  inputSourceConfig: InputSource[] | undefined;

  /**
   * <p>A list of <code>OutputSource</code> objects, each of which contains fields <code>OutputS3Path</code>,
   *          <code>ApplyNormalization</code>, and <code>Output</code>.</p>
   */
  outputSourceConfig: OutputSource[] | undefined;

  /**
   * <p>An object which defines the <code>resolutionType</code> and the <code>ruleBasedProperties</code>
   *          </p>
   */
  resolutionTechniques: ResolutionTechniques | undefined;

  /**
   * <p>An object which defines an incremental run type and has only <code>incrementalRunType</code> as a field.</p>
   */
  incrementalRunConfig?: IncrementalRunConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. AWS Entity Resolution assumes this role
   *          to create resources on your behalf as part of workflow execution.</p>
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateMatchingWorkflowOutput {
  /**
   * <p>The name of the workflow.</p>
   */
  workflowName: string | undefined;

  /**
   * <p>A description of the workflow.</p>
   */
  description?: string;

  /**
   * <p>A list of <code>InputSource</code> objects, which have the fields <code>InputSourceARN</code> and
   *          <code>SchemaName</code>.</p>
   */
  inputSourceConfig: InputSource[] | undefined;

  /**
   * <p>A list of <code>OutputSource</code> objects, each of which contains fields <code>OutputS3Path</code>,
   *          <code>ApplyNormalization</code>, and <code>Output</code>.</p>
   */
  outputSourceConfig: OutputSource[] | undefined;

  /**
   * <p>An object which defines the <code>resolutionType</code> and the <code>ruleBasedProperties</code>
   *          </p>
   */
  resolutionTechniques: ResolutionTechniques | undefined;

  /**
   * <p>An object which defines an incremental run type and has only <code>incrementalRunType</code> as a field.</p>
   */
  incrementalRunConfig?: IncrementalRunConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. AWS Entity Resolution assumes this role
   *          to create resources on your behalf as part of workflow execution.</p>
   */
  roleArn: string | undefined;
}

/**
 * @internal
 */
export const GetMatchIdInputFilterSensitiveLog = (obj: GetMatchIdInput): any => ({
  ...obj,
  ...(obj.record && { record: SENSITIVE_STRING }),
});
