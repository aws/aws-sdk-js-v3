// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { CustomerProfilesServiceException as __BaseException } from "./CustomerProfilesServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>A data type pair that consists of a <code>KeyName</code> and <code>Values</code> list
 *          that is used in conjunction with the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html#customerprofiles-SearchProfiles-request-KeyName">KeyName</a> and <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html#customerprofiles-SearchProfiles-request-Values">Values</a> parameters to search for profiles using the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html">SearchProfiles</a>
 *          API.</p>
 * @public
 */
export interface AdditionalSearchKey {
  /**
   * <p>A searchable identifier of a customer profile.</p>
   * @public
   */
  KeyName: string | undefined;

  /**
   * <p>A list of key values.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface AddProfileKeyRequest {
  /**
   * <p>The unique identifier of a customer profile.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>A searchable identifier of a customer profile. The predefined keys you can use include: _account, _profileId, _assetId,
   *          _caseId, _orderId, _fullName, _phone, _email, _ctrContactId, _marketoLeadId,
   *          _salesforceAccountId, _salesforceContactId, _salesforceAssetId, _zendeskUserId,
   *          _zendeskExternalId, _zendeskTicketId, _serviceNowSystemId, _serviceNowIncidentId,
   *          _segmentUserId, _shopifyCustomerId, _shopifyOrderId.</p>
   * @public
   */
  KeyName: string | undefined;

  /**
   * <p>A list of key values.</p>
   * @public
   */
  Values: string[] | undefined;

  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface AddProfileKeyResponse {
  /**
   * <p>A searchable identifier of a customer profile.</p>
   * @public
   */
  KeyName?: string;

  /**
   * <p>A list of key values.</p>
   * @public
   */
  Values?: string[];
}

/**
 * <p>The input you provided is invalid.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An internal service error occurred.</p>
 * @public
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
 * <p>The requested resource does not exist, or access was denied.</p>
 * @public
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
 * <p>You exceeded the maximum number of requests.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>A generic address associated with the customer that is not mailing, shipping, or
 *          billing.</p>
 * @public
 */
export interface Address {
  /**
   * <p>The first line of a customer address.</p>
   * @public
   */
  Address1?: string;

  /**
   * <p>The second line of a customer address.</p>
   * @public
   */
  Address2?: string;

  /**
   * <p>The third line of a customer address.</p>
   * @public
   */
  Address3?: string;

  /**
   * <p>The fourth line of a customer address.</p>
   * @public
   */
  Address4?: string;

  /**
   * <p>The city in which a customer lives.</p>
   * @public
   */
  City?: string;

  /**
   * <p>The county in which a customer lives.</p>
   * @public
   */
  County?: string;

  /**
   * <p>The state in which a customer lives.</p>
   * @public
   */
  State?: string;

  /**
   * <p>The province in which a customer lives.</p>
   * @public
   */
  Province?: string;

  /**
   * <p>The country in which a customer lives.</p>
   * @public
   */
  Country?: string;

  /**
   * <p>The postal code of a customer address.</p>
   * @public
   */
  PostalCode?: string;
}

/**
 * <p>Batch defines the boundaries for ingestion for each step in
 *             <code>APPFLOW_INTEGRATION</code> workflow. <code>APPFLOW_INTEGRATION</code> workflow
 *          splits ingestion based on these boundaries.</p>
 * @public
 */
export interface Batch {
  /**
   * <p>Start time of batch to split ingestion.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>End time of batch to split ingestion.</p>
   * @public
   */
  EndTime: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const SourceConnectorType = {
  MARKETO: "Marketo",
  S3: "S3",
  SALESFORCE: "Salesforce",
  SERVICENOW: "Servicenow",
  ZENDESK: "Zendesk",
} as const;

/**
 * @public
 */
export type SourceConnectorType = (typeof SourceConnectorType)[keyof typeof SourceConnectorType];

/**
 * <p>Specifies the configuration used when importing incremental records from the
 *          source.</p>
 * @public
 */
export interface IncrementalPullConfig {
  /**
   * <p>A field that specifies the date time or timestamp field as the criteria to use when
   *          importing incremental records from the source.</p>
   * @public
   */
  DatetimeTypeFieldName?: string;
}

/**
 * <p>The properties that are applied when Marketo is being used as a source.</p>
 * @public
 */
export interface MarketoSourceProperties {
  /**
   * <p>The object specified in the Marketo flow source.</p>
   * @public
   */
  Object: string | undefined;
}

/**
 * <p>The properties that are applied when Amazon S3 is being used as the flow source.</p>
 * @public
 */
export interface S3SourceProperties {
  /**
   * <p>The Amazon S3 bucket name where the source files are stored.</p>
   * @public
   */
  BucketName: string | undefined;

  /**
   * <p>The object key for the Amazon S3 bucket in which the source files are stored.</p>
   * @public
   */
  BucketPrefix?: string;
}

/**
 * <p>The properties that are applied when Salesforce is being used as a source.</p>
 * @public
 */
export interface SalesforceSourceProperties {
  /**
   * <p>The object specified in the Salesforce flow source.</p>
   * @public
   */
  Object: string | undefined;

  /**
   * <p>The flag that enables dynamic fetching of new (recently added) fields in the Salesforce
   *          objects while running a flow.</p>
   * @public
   */
  EnableDynamicFieldUpdate?: boolean;

  /**
   * <p>Indicates whether Amazon AppFlow includes deleted files in the flow run.</p>
   * @public
   */
  IncludeDeletedRecords?: boolean;
}

/**
 * <p>The properties that are applied when ServiceNow is being used as a source.</p>
 * @public
 */
export interface ServiceNowSourceProperties {
  /**
   * <p>The object specified in the ServiceNow flow source.</p>
   * @public
   */
  Object: string | undefined;
}

/**
 * <p>The properties that are applied when using Zendesk as a flow source.</p>
 * @public
 */
export interface ZendeskSourceProperties {
  /**
   * <p>The object specified in the Zendesk flow source.</p>
   * @public
   */
  Object: string | undefined;
}

/**
 * <p>Specifies the information that is required to query a particular Amazon AppFlow connector.
 *          Customer Profiles supports Salesforce, Zendesk, Marketo, ServiceNow and Amazon S3.</p>
 * @public
 */
export interface SourceConnectorProperties {
  /**
   * <p>The properties that are applied when Marketo is being used as a source.</p>
   * @public
   */
  Marketo?: MarketoSourceProperties;

  /**
   * <p>The properties that are applied when Amazon S3 is being used as the flow source.</p>
   * @public
   */
  S3?: S3SourceProperties;

  /**
   * <p>The properties that are applied when Salesforce is being used as a source.</p>
   * @public
   */
  Salesforce?: SalesforceSourceProperties;

  /**
   * <p>The properties that are applied when ServiceNow is being used as a source.</p>
   * @public
   */
  ServiceNow?: ServiceNowSourceProperties;

  /**
   * <p>The properties that are applied when using Zendesk as a flow source.</p>
   * @public
   */
  Zendesk?: ZendeskSourceProperties;
}

/**
 * <p>Contains information about the configuration of the source connector used in the
 *          flow.</p>
 * @public
 */
export interface SourceFlowConfig {
  /**
   * <p>The name of the AppFlow connector profile. This name must be unique for each connector
   *          profile in the AWS account.</p>
   * @public
   */
  ConnectorProfileName?: string;

  /**
   * <p>The type of connector, such as Salesforce, Marketo, and so on.</p>
   * @public
   */
  ConnectorType: SourceConnectorType | undefined;

  /**
   * <p>Defines the configuration for a scheduled incremental data pull. If a valid
   *          configuration is provided, the fields specified in the configuration are used when querying
   *          for the incremental data pull.</p>
   * @public
   */
  IncrementalPullConfig?: IncrementalPullConfig;

  /**
   * <p>Specifies the information that is required to query a particular source
   *          connector.</p>
   * @public
   */
  SourceConnectorProperties: SourceConnectorProperties | undefined;
}

/**
 * @public
 * @enum
 */
export const MarketoConnectorOperator = {
  ADDITION: "ADDITION",
  BETWEEN: "BETWEEN",
  DIVISION: "DIVISION",
  GREATER_THAN: "GREATER_THAN",
  LESS_THAN: "LESS_THAN",
  MASK_ALL: "MASK_ALL",
  MASK_FIRST_N: "MASK_FIRST_N",
  MASK_LAST_N: "MASK_LAST_N",
  MULTIPLICATION: "MULTIPLICATION",
  NO_OP: "NO_OP",
  PROJECTION: "PROJECTION",
  SUBTRACTION: "SUBTRACTION",
  VALIDATE_NON_NEGATIVE: "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL: "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO: "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC: "VALIDATE_NUMERIC",
} as const;

/**
 * @public
 */
export type MarketoConnectorOperator = (typeof MarketoConnectorOperator)[keyof typeof MarketoConnectorOperator];

/**
 * @public
 * @enum
 */
export const S3ConnectorOperator = {
  ADDITION: "ADDITION",
  BETWEEN: "BETWEEN",
  DIVISION: "DIVISION",
  EQUAL_TO: "EQUAL_TO",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO: "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO: "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL: "MASK_ALL",
  MASK_FIRST_N: "MASK_FIRST_N",
  MASK_LAST_N: "MASK_LAST_N",
  MULTIPLICATION: "MULTIPLICATION",
  NOT_EQUAL_TO: "NOT_EQUAL_TO",
  NO_OP: "NO_OP",
  PROJECTION: "PROJECTION",
  SUBTRACTION: "SUBTRACTION",
  VALIDATE_NON_NEGATIVE: "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL: "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO: "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC: "VALIDATE_NUMERIC",
} as const;

/**
 * @public
 */
export type S3ConnectorOperator = (typeof S3ConnectorOperator)[keyof typeof S3ConnectorOperator];

/**
 * @public
 * @enum
 */
export const SalesforceConnectorOperator = {
  ADDITION: "ADDITION",
  BETWEEN: "BETWEEN",
  CONTAINS: "CONTAINS",
  DIVISION: "DIVISION",
  EQUAL_TO: "EQUAL_TO",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO: "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO: "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL: "MASK_ALL",
  MASK_FIRST_N: "MASK_FIRST_N",
  MASK_LAST_N: "MASK_LAST_N",
  MULTIPLICATION: "MULTIPLICATION",
  NOT_EQUAL_TO: "NOT_EQUAL_TO",
  NO_OP: "NO_OP",
  PROJECTION: "PROJECTION",
  SUBTRACTION: "SUBTRACTION",
  VALIDATE_NON_NEGATIVE: "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL: "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO: "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC: "VALIDATE_NUMERIC",
} as const;

/**
 * @public
 */
export type SalesforceConnectorOperator =
  (typeof SalesforceConnectorOperator)[keyof typeof SalesforceConnectorOperator];

/**
 * @public
 * @enum
 */
export const ServiceNowConnectorOperator = {
  ADDITION: "ADDITION",
  BETWEEN: "BETWEEN",
  CONTAINS: "CONTAINS",
  DIVISION: "DIVISION",
  EQUAL_TO: "EQUAL_TO",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO: "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO: "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL: "MASK_ALL",
  MASK_FIRST_N: "MASK_FIRST_N",
  MASK_LAST_N: "MASK_LAST_N",
  MULTIPLICATION: "MULTIPLICATION",
  NOT_EQUAL_TO: "NOT_EQUAL_TO",
  NO_OP: "NO_OP",
  PROJECTION: "PROJECTION",
  SUBTRACTION: "SUBTRACTION",
  VALIDATE_NON_NEGATIVE: "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL: "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO: "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC: "VALIDATE_NUMERIC",
} as const;

/**
 * @public
 */
export type ServiceNowConnectorOperator =
  (typeof ServiceNowConnectorOperator)[keyof typeof ServiceNowConnectorOperator];

/**
 * @public
 * @enum
 */
export const ZendeskConnectorOperator = {
  ADDITION: "ADDITION",
  DIVISION: "DIVISION",
  GREATER_THAN: "GREATER_THAN",
  MASK_ALL: "MASK_ALL",
  MASK_FIRST_N: "MASK_FIRST_N",
  MASK_LAST_N: "MASK_LAST_N",
  MULTIPLICATION: "MULTIPLICATION",
  NO_OP: "NO_OP",
  PROJECTION: "PROJECTION",
  SUBTRACTION: "SUBTRACTION",
  VALIDATE_NON_NEGATIVE: "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL: "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO: "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC: "VALIDATE_NUMERIC",
} as const;

/**
 * @public
 */
export type ZendeskConnectorOperator = (typeof ZendeskConnectorOperator)[keyof typeof ZendeskConnectorOperator];

/**
 * <p>The operation to be performed on the provided source fields.</p>
 * @public
 */
export interface ConnectorOperator {
  /**
   * <p>The operation to be performed on the provided Marketo source fields.</p>
   * @public
   */
  Marketo?: MarketoConnectorOperator;

  /**
   * <p>The operation to be performed on the provided Amazon S3 source fields.</p>
   * @public
   */
  S3?: S3ConnectorOperator;

  /**
   * <p>The operation to be performed on the provided Salesforce source fields.</p>
   * @public
   */
  Salesforce?: SalesforceConnectorOperator;

  /**
   * <p>The operation to be performed on the provided ServiceNow source fields.</p>
   * @public
   */
  ServiceNow?: ServiceNowConnectorOperator;

  /**
   * <p>The operation to be performed on the provided Zendesk source fields.</p>
   * @public
   */
  Zendesk?: ZendeskConnectorOperator;
}

/**
 * @public
 * @enum
 */
export const OperatorPropertiesKeys = {
  CONCAT_FORMAT: "CONCAT_FORMAT",
  DATA_TYPE: "DATA_TYPE",
  DESTINATION_DATA_TYPE: "DESTINATION_DATA_TYPE",
  LOWER_BOUND: "LOWER_BOUND",
  MASK_LENGTH: "MASK_LENGTH",
  MASK_VALUE: "MASK_VALUE",
  MATH_OPERATION_FIELDS_ORDER: "MATH_OPERATION_FIELDS_ORDER",
  SOURCE_DATA_TYPE: "SOURCE_DATA_TYPE",
  SUBFIELD_CATEGORY_MAP: "SUBFIELD_CATEGORY_MAP",
  TRUNCATE_LENGTH: "TRUNCATE_LENGTH",
  UPPER_BOUND: "UPPER_BOUND",
  VALIDATION_ACTION: "VALIDATION_ACTION",
  VALUE: "VALUE",
  VALUES: "VALUES",
} as const;

/**
 * @public
 */
export type OperatorPropertiesKeys = (typeof OperatorPropertiesKeys)[keyof typeof OperatorPropertiesKeys];

/**
 * @public
 * @enum
 */
export const TaskType = {
  ARITHMETIC: "Arithmetic",
  FILTER: "Filter",
  MAP: "Map",
  MASK: "Mask",
  MERGE: "Merge",
  TRUNCATE: "Truncate",
  VALIDATE: "Validate",
} as const;

/**
 * @public
 */
export type TaskType = (typeof TaskType)[keyof typeof TaskType];

/**
 * <p>A class for modeling different type of tasks. Task implementation varies based on the
 *          TaskType.</p>
 * @public
 */
export interface Task {
  /**
   * <p>The operation to be performed on the provided source fields.</p>
   * @public
   */
  ConnectorOperator?: ConnectorOperator;

  /**
   * <p>A field in a destination connector, or a field value against which Amazon AppFlow validates a
   *          source field.</p>
   * @public
   */
  DestinationField?: string;

  /**
   * <p>The source fields to which a particular task is applied.</p>
   * @public
   */
  SourceFields: string[] | undefined;

  /**
   * <p>A map used to store task-related information. The service looks for particular
   *          information based on the TaskType.</p>
   * @public
   */
  TaskProperties?: Partial<Record<OperatorPropertiesKeys, string>>;

  /**
   * <p>Specifies the particular task implementation that Amazon AppFlow performs.</p>
   * @public
   */
  TaskType: TaskType | undefined;
}

/**
 * @public
 * @enum
 */
export const DataPullMode = {
  COMPLETE: "Complete",
  INCREMENTAL: "Incremental",
} as const;

/**
 * @public
 */
export type DataPullMode = (typeof DataPullMode)[keyof typeof DataPullMode];

/**
 * <p>Specifies the configuration details of a scheduled-trigger flow that you define.
 *          Currently, these settings only apply to the scheduled-trigger type.</p>
 * @public
 */
export interface ScheduledTriggerProperties {
  /**
   * <p>The scheduling expression that determines the rate at which the schedule will run, for
   *          example rate (5 minutes).</p>
   * @public
   */
  ScheduleExpression: string | undefined;

  /**
   * <p>Specifies whether a scheduled flow has an incremental data transfer or a complete data
   *          transfer for each flow run.</p>
   * @public
   */
  DataPullMode?: DataPullMode;

  /**
   * <p>Specifies the scheduled start time for a scheduled-trigger flow.</p>
   * @public
   */
  ScheduleStartTime?: Date;

  /**
   * <p>Specifies the scheduled end time for a scheduled-trigger flow.</p>
   * @public
   */
  ScheduleEndTime?: Date;

  /**
   * <p>Specifies the time zone used when referring to the date and time of a
   *          scheduled-triggered flow, such as America/New_York.</p>
   * @public
   */
  Timezone?: string;

  /**
   * <p>Specifies the optional offset that is added to the time interval for a
   *          schedule-triggered flow.</p>
   * @public
   */
  ScheduleOffset?: number;

  /**
   * <p>Specifies the date range for the records to import from the connector in the first flow
   *          run.</p>
   * @public
   */
  FirstExecutionFrom?: Date;
}

/**
 * <p>Specifies the configuration details that control the trigger for a flow. Currently,
 *          these settings only apply to the Scheduled trigger type.</p>
 * @public
 */
export interface TriggerProperties {
  /**
   * <p>Specifies the configuration details of a schedule-triggered flow that you define.</p>
   * @public
   */
  Scheduled?: ScheduledTriggerProperties;
}

/**
 * @public
 * @enum
 */
export const TriggerType = {
  EVENT: "Event",
  ONDEMAND: "OnDemand",
  SCHEDULED: "Scheduled",
} as const;

/**
 * @public
 */
export type TriggerType = (typeof TriggerType)[keyof typeof TriggerType];

/**
 * <p>The trigger settings that determine how and when Amazon AppFlow runs the specified
 *          flow.</p>
 * @public
 */
export interface TriggerConfig {
  /**
   * <p>Specifies the type of flow trigger. It can be OnDemand, Scheduled, or Event.</p>
   * @public
   */
  TriggerType: TriggerType | undefined;

  /**
   * <p>Specifies the configuration details of a schedule-triggered flow that you define.
   *          Currently, these settings only apply to the Scheduled trigger type.</p>
   * @public
   */
  TriggerProperties?: TriggerProperties;
}

/**
 * <p>The configurations that control how Customer Profiles retrieves data from the source,
 *          Amazon AppFlow. Customer Profiles uses this information to create an AppFlow flow on behalf of
 *          customers.</p>
 * @public
 */
export interface FlowDefinition {
  /**
   * <p>A description of the flow you want to create.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The specified name of the flow. Use underscores (_) or hyphens (-) only. Spaces are not
   *          allowed.</p>
   * @public
   */
  FlowName: string | undefined;

  /**
   * <p>The Amazon Resource Name of the AWS Key Management Service (KMS) key you provide for encryption.</p>
   * @public
   */
  KmsArn: string | undefined;

  /**
   * <p>The configuration that controls how Customer Profiles retrieves data from the
   *          source.</p>
   * @public
   */
  SourceFlowConfig: SourceFlowConfig | undefined;

  /**
   * <p>A list of tasks that Customer Profiles performs while transferring the data in the flow
   *          run.</p>
   * @public
   */
  Tasks: Task[] | undefined;

  /**
   * <p>The trigger settings that determine how and when the flow runs.</p>
   * @public
   */
  TriggerConfig: TriggerConfig | undefined;
}

/**
 * <p>Details for workflow of type <code>APPFLOW_INTEGRATION</code>.</p>
 * @public
 */
export interface AppflowIntegration {
  /**
   * <p>The configurations that control how Customer Profiles retrieves data from the source,
   *          Amazon AppFlow. Customer Profiles uses this information to create an AppFlow flow on behalf of
   *          customers.</p>
   * @public
   */
  FlowDefinition: FlowDefinition | undefined;

  /**
   * <p>Batches in workflow of type <code>APPFLOW_INTEGRATION</code>.</p>
   * @public
   */
  Batches?: Batch[];
}

/**
 * <p>Structure holding all <code>APPFLOW_INTEGRATION</code> specific workflow
 *          attributes.</p>
 * @public
 */
export interface AppflowIntegrationWorkflowAttributes {
  /**
   * <p>Specifies the source connector type, such as Salesforce, ServiceNow, and Marketo.
   *          Indicates source of ingestion.</p>
   * @public
   */
  SourceConnectorType: SourceConnectorType | undefined;

  /**
   * <p>The name of the AppFlow connector profile used for ingestion.</p>
   * @public
   */
  ConnectorProfileName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. Customer Profiles assumes this role to create resources on your behalf as part of workflow execution.</p>
   * @public
   */
  RoleArn?: string;
}

/**
 * <p>Workflow specific execution metrics for <code>APPFLOW_INTEGRATION</code>
 *          workflow.</p>
 * @public
 */
export interface AppflowIntegrationWorkflowMetrics {
  /**
   * <p>Number of records processed in <code>APPFLOW_INTEGRATION</code> workflow.</p>
   * @public
   */
  RecordsProcessed: number | undefined;

  /**
   * <p>Total steps completed in <code>APPFLOW_INTEGRATION</code> workflow.</p>
   * @public
   */
  StepsCompleted: number | undefined;

  /**
   * <p>Total steps in <code>APPFLOW_INTEGRATION</code> workflow.</p>
   * @public
   */
  TotalSteps: number | undefined;
}

/**
 * @public
 * @enum
 */
export const Status = {
  CANCELLED: "CANCELLED",
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
  RETRY: "RETRY",
  SPLIT: "SPLIT",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * <p>Workflow step details for <code>APPFLOW_INTEGRATION</code> workflow.</p>
 * @public
 */
export interface AppflowIntegrationWorkflowStep {
  /**
   * <p>Name of the flow created during execution of workflow step.
   *             <code>APPFLOW_INTEGRATION</code> workflow type creates an appflow flow during workflow
   *          step execution on the customers behalf.</p>
   * @public
   */
  FlowName: string | undefined;

  /**
   * <p>Workflow step status for <code>APPFLOW_INTEGRATION</code> workflow.</p>
   * @public
   */
  Status: Status | undefined;

  /**
   * <p>Message indicating execution of workflow step for <code>APPFLOW_INTEGRATION</code>
   *          workflow.</p>
   * @public
   */
  ExecutionMessage: string | undefined;

  /**
   * <p>Total number of records processed during execution of workflow step for
   *             <code>APPFLOW_INTEGRATION</code> workflow.</p>
   * @public
   */
  RecordsProcessed: number | undefined;

  /**
   * <p>Start datetime of records pulled in batch during execution of workflow step for
   *             <code>APPFLOW_INTEGRATION</code> workflow.</p>
   * @public
   */
  BatchRecordsStartTime: string | undefined;

  /**
   * <p>End datetime of records pulled in batch during execution of workflow step for
   *             <code>APPFLOW_INTEGRATION</code> workflow.</p>
   * @public
   */
  BatchRecordsEndTime: string | undefined;

  /**
   * <p>Creation timestamp of workflow step for <code>APPFLOW_INTEGRATION</code>
   *          workflow.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>Last updated timestamp for workflow step for <code>APPFLOW_INTEGRATION</code>
   *          workflow.</p>
   * @public
   */
  LastUpdatedAt: Date | undefined;
}

/**
 * <p>The details of a single attribute item specified in the mathematical expression.</p>
 * @public
 */
export interface AttributeItem {
  /**
   * <p>The name of an attribute defined in a profile object type.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>Mathematical expression and a list of attribute items specified in that
 *          expression.</p>
 * @public
 */
export interface AttributeDetails {
  /**
   * <p>A list of attribute items specified in the mathematical expression.</p>
   * @public
   */
  Attributes: AttributeItem[] | undefined;

  /**
   * <p>Mathematical expression that is performed on attribute items provided in the attribute
   *          list. Each element in the expression should follow the structure of
   *          \"\{ObjectTypeName.AttributeName\}\".</p>
   * @public
   */
  Expression: string | undefined;
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
 * <p>Configuration information about the <code>AttributeTypesSelector </code>where the
 *          rule-based identity resolution uses to match profiles. You can choose how profiles are
 *          compared across attribute types and which attribute to use for matching from each type.
 *          There are three attribute types you can configure:</p>
 *          <ul>
 *             <li>
 *                <p>Email type</p>
 *                <ul>
 *                   <li>
 *                      <p>You can choose from <code>Email</code>, <code>BusinessEmail</code>, and
 *                         <code>PersonalEmail</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Phone number type</p>
 *                <ul>
 *                   <li>
 *                      <p>You can choose from <code>Phone</code>, <code>HomePhone</code>, and
 *                         <code>MobilePhone</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Address type</p>
 *                <ul>
 *                   <li>
 *                      <p>You can choose from <code>Address</code>, <code>BusinessAddress</code>,
 *                         <code>MaillingAddress</code>, and <code>ShippingAddress</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>You can either choose <code>ONE_TO_ONE</code> or <code>MANY_TO_MANY</code> as the
 *             <code>AttributeMatchingModel</code>. When choosing <code>MANY_TO_MANY</code>, the system
 *          can match attribute across the sub-types of an attribute type. For example, if the value of
 *          the <code>Email</code> field of Profile A and the value of <code>BusinessEmail</code> field
 *          of Profile B matches, the two profiles are matched on the Email type. When choosing
 *             <code>ONE_TO_ONE</code> the system can only match if the sub-types are exact matches.
 *          For example, only when the value of the <code>Email</code> field of Profile A and the value
 *          of the <code>Email</code> field of Profile B matches, the two profiles are matched on the
 *          Email type.</p>
 * @public
 */
export interface AttributeTypesSelector {
  /**
   * <p>Configures the <code>AttributeMatchingModel</code>, you can either choose
   *             <code>ONE_TO_ONE</code> or <code>MANY_TO_MANY</code>.</p>
   * @public
   */
  AttributeMatchingModel: AttributeMatchingModel | undefined;

  /**
   * <p>The <code>Address</code> type. You can choose from <code>Address</code>,
   *             <code>BusinessAddress</code>, <code>MaillingAddress</code>, and
   *             <code>ShippingAddress</code>.</p>
   *          <p>You only can use the Address type in the <code>MatchingRule</code>. For example, if you
   *          want to match profile based on <code>BusinessAddress.City</code> or
   *             <code>MaillingAddress.City</code>, you need to choose the <code>BusinessAddress</code>
   *          and the <code>MaillingAddress</code> to represent the Address type and specify the
   *             <code>Address.City</code> on the matching rule.</p>
   * @public
   */
  Address?: string[];

  /**
   * <p>The <code>PhoneNumber</code> type. You can choose from <code>PhoneNumber</code>,
   *             <code>HomePhoneNumber</code>, and <code>MobilePhoneNumber</code>.</p>
   *          <p>You only can use the <code>PhoneNumber</code> type in the <code>MatchingRule</code>. For
   *          example, if you want to match a profile based on <code>Phone</code> or
   *             <code>HomePhone</code>, you need to choose the <code>Phone</code> and the
   *             <code>HomePhone</code> to represent the <code>PhoneNumber</code> type and only specify
   *          the <code>PhoneNumber</code> on the matching rule.</p>
   * @public
   */
  PhoneNumber?: string[];

  /**
   * <p>The <code>Email</code> type. You can choose from <code>EmailAddress</code>,
   *             <code>BusinessEmailAddress</code> and <code>PersonalEmailAddress</code>.</p>
   *          <p>You only can use the <code>EmailAddress</code> type in the <code>MatchingRule</code>.
   *          For example, if you want to match profile based on <code>PersonalEmailAddress</code> or
   *             <code>BusinessEmailAddress</code>, you need to choose the
   *             <code>PersonalEmailAddress</code> and the <code>BusinessEmailAddress</code> to represent
   *          the <code>EmailAddress</code> type and only specify the <code>EmailAddress</code> on the
   *          matching rule.</p>
   * @public
   */
  EmailAddress?: string[];
}

/**
 * @public
 * @enum
 */
export const ConflictResolvingModel = {
  RECENCY: "RECENCY",
  SOURCE: "SOURCE",
} as const;

/**
 * @public
 */
export type ConflictResolvingModel = (typeof ConflictResolvingModel)[keyof typeof ConflictResolvingModel];

/**
 * <p>How the auto-merging process should resolve conflicts between different profiles.</p>
 * @public
 */
export interface ConflictResolution {
  /**
   * <p>How the auto-merging process should resolve conflicts between different profiles.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RECENCY</code>: Uses the data that was most recently updated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SOURCE</code>: Uses the data from a specific source. For example, if a
   *                company has been aquired or two departments have merged, data from the specified
   *                source is used. If two duplicate profiles are from the same source, then
   *                   <code>RECENCY</code> is used again.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ConflictResolvingModel: ConflictResolvingModel | undefined;

  /**
   * <p>The <code>ObjectType</code> name that is used to resolve profile merging conflicts when
   *          choosing <code>SOURCE</code> as the <code>ConflictResolvingModel</code>.</p>
   * @public
   */
  SourceName?: string;
}

/**
 * <p>The matching criteria to be used during the auto-merging process. </p>
 * @public
 */
export interface Consolidation {
  /**
   * <p>A list of matching criteria.</p>
   * @public
   */
  MatchingAttributesList: string[][] | undefined;
}

/**
 * <p>Configuration settings for how to perform the auto-merging of profiles.</p>
 * @public
 */
export interface AutoMerging {
  /**
   * <p>The flag that enables the auto-merging of duplicate profiles.</p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>A list of matching attributes that represent matching criteria. If two profiles meet at
   *          least one of the requirements in the matching attributes list, they will be merged.</p>
   * @public
   */
  Consolidation?: Consolidation;

  /**
   * <p>How the auto-merging process should resolve conflicts between different profiles. For
   *          example, if Profile A and Profile B have the same <code>FirstName</code> and
   *             <code>LastName</code> (and that is the matching criteria), which
   *             <code>EmailAddress</code> should be used? </p>
   * @public
   */
  ConflictResolution?: ConflictResolution;

  /**
   * <p>A number between 0 and 1 that represents the minimum confidence score required for
   *          profiles within a matching group to be merged during the auto-merge process. A higher score
   *          means higher similarity required to merge profiles. </p>
   * @public
   */
  MinAllowedConfidenceScoreForMerging?: number;
}

/**
 * <p>The details of a single calculated attribute definition.</p>
 * @public
 */
export interface ListCalculatedAttributeDefinitionItem {
  /**
   * <p>The unique name of the calculated attribute.</p>
   * @public
   */
  CalculatedAttributeName?: string;

  /**
   * <p>The display name of the calculated attribute.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>The threshold for the calculated attribute.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The threshold for the calculated attribute.</p>
   * @public
   */
  CreatedAt?: Date;

  /**
   * <p>The timestamp of when the calculated attribute definition was most recently
   *          edited.</p>
   * @public
   */
  LastUpdatedAt?: Date;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * <p>The details of a single calculated attribute for a profile.</p>
 * @public
 */
export interface ListCalculatedAttributeForProfileItem {
  /**
   * <p>The unique name of the calculated attribute.</p>
   * @public
   */
  CalculatedAttributeName?: string;

  /**
   * <p>The display name of the calculated attribute.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>Indicates whether the calculated attribute’s value is based on partial data. If data is
   *          partial, it is set to true.</p>
   * @public
   */
  IsDataPartial?: string;

  /**
   * <p>The value of the calculated attribute.</p>
   * @public
   */
  Value?: string;
}

/**
 * @public
 * @enum
 */
export const Unit = {
  DAYS: "DAYS",
} as const;

/**
 * @public
 */
export type Unit = (typeof Unit)[keyof typeof Unit];

/**
 * <p>The relative time period over which data is included in the aggregation.</p>
 * @public
 */
export interface Range {
  /**
   * <p>The amount of time of the specified unit.</p>
   * @public
   */
  Value: number | undefined;

  /**
   * <p>The unit of time.</p>
   * @public
   */
  Unit: Unit | undefined;
}

/**
 * @public
 * @enum
 */
export const Operator = {
  EQUAL_TO: "EQUAL_TO",
  GREATER_THAN: "GREATER_THAN",
  LESS_THAN: "LESS_THAN",
  NOT_EQUAL_TO: "NOT_EQUAL_TO",
} as const;

/**
 * @public
 */
export type Operator = (typeof Operator)[keyof typeof Operator];

/**
 * <p>The threshold for the calculated attribute.</p>
 * @public
 */
export interface Threshold {
  /**
   * <p>The value of the threshold.</p>
   * @public
   */
  Value: string | undefined;

  /**
   * <p>The operator of the threshold.</p>
   * @public
   */
  Operator: Operator | undefined;
}

/**
 * <p>The conditions including range, object count, and threshold for the calculated
 *          attribute.</p>
 * @public
 */
export interface Conditions {
  /**
   * <p>The relative time period over which data is included in the aggregation.</p>
   * @public
   */
  Range?: Range;

  /**
   * <p>The number of profile objects used for the calculated attribute.</p>
   * @public
   */
  ObjectCount?: number;

  /**
   * <p>The threshold for the calculated attribute.</p>
   * @public
   */
  Threshold?: Threshold;
}

/**
 * @public
 * @enum
 */
export const Statistic = {
  AVERAGE: "AVERAGE",
  COUNT: "COUNT",
  FIRST_OCCURRENCE: "FIRST_OCCURRENCE",
  LAST_OCCURRENCE: "LAST_OCCURRENCE",
  MAXIMUM: "MAXIMUM",
  MAX_OCCURRENCE: "MAX_OCCURRENCE",
  MINIMUM: "MINIMUM",
  SUM: "SUM",
} as const;

/**
 * @public
 */
export type Statistic = (typeof Statistic)[keyof typeof Statistic];

/**
 * @public
 */
export interface CreateCalculatedAttributeDefinitionRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique name of the calculated attribute.</p>
   * @public
   */
  CalculatedAttributeName: string | undefined;

  /**
   * <p>The display name of the calculated attribute.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>The description of the calculated attribute.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>Mathematical expression and a list of attribute items specified in that
   *          expression.</p>
   * @public
   */
  AttributeDetails: AttributeDetails | undefined;

  /**
   * <p>The conditions including range, object count, and threshold for the calculated
   *          attribute.</p>
   * @public
   */
  Conditions?: Conditions;

  /**
   * <p>The aggregation operation to perform for the calculated attribute.</p>
   * @public
   */
  Statistic: Statistic | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateCalculatedAttributeDefinitionResponse {
  /**
   * <p>The unique name of the calculated attribute.</p>
   * @public
   */
  CalculatedAttributeName?: string;

  /**
   * <p>The display name of the calculated attribute.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>The description of the calculated attribute.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>Mathematical expression and a list of attribute items specified in that
   *          expression.</p>
   * @public
   */
  AttributeDetails?: AttributeDetails;

  /**
   * <p>The conditions including range, object count, and threshold for the calculated
   *          attribute.</p>
   * @public
   */
  Conditions?: Conditions;

  /**
   * <p>The aggregation operation to perform for the calculated attribute.</p>
   * @public
   */
  Statistic?: Statistic;

  /**
   * <p>The timestamp of when the calculated attribute definition was created.</p>
   * @public
   */
  CreatedAt?: Date;

  /**
   * <p>The timestamp of when the calculated attribute definition was most recently
   *          edited.</p>
   * @public
   */
  LastUpdatedAt?: Date;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * <p>Configuration information about the S3 bucket where Identity Resolution Jobs write result files.</p>
 * @public
 */
export interface S3ExportingConfig {
  /**
   * <p>The name of the S3 bucket where Identity Resolution Jobs write result files.</p>
   * @public
   */
  S3BucketName: string | undefined;

  /**
   * <p>The S3 key name of the location where Identity Resolution Jobs write result files.</p>
   * @public
   */
  S3KeyName?: string;
}

/**
 * <p>Configuration information about the S3 bucket where Identity Resolution Jobs writes result files. </p>
 *          <note>
 *             <p>You need to give Customer Profiles service principal write permission to your S3 bucket.
 *             Otherwise, you'll get an exception in the API response. For an example policy, see
 *                <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html#customer-profiles-cross-service">Amazon Connect Customer Profiles cross-service confused deputy prevention</a>. </p>
 *          </note>
 * @public
 */
export interface ExportingConfig {
  /**
   * <p>The S3 location where Identity Resolution Jobs write result files.</p>
   * @public
   */
  S3Exporting?: S3ExportingConfig;
}

/**
 * @public
 * @enum
 */
export const JobScheduleDayOfTheWeek = {
  FRIDAY: "FRIDAY",
  MONDAY: "MONDAY",
  SATURDAY: "SATURDAY",
  SUNDAY: "SUNDAY",
  THURSDAY: "THURSDAY",
  TUESDAY: "TUESDAY",
  WEDNESDAY: "WEDNESDAY",
} as const;

/**
 * @public
 */
export type JobScheduleDayOfTheWeek = (typeof JobScheduleDayOfTheWeek)[keyof typeof JobScheduleDayOfTheWeek];

/**
 * <p>The day and time when do you want to start the Identity Resolution Job every week.</p>
 * @public
 */
export interface JobSchedule {
  /**
   * <p>The day when the Identity Resolution Job should run every week.</p>
   * @public
   */
  DayOfTheWeek: JobScheduleDayOfTheWeek | undefined;

  /**
   * <p>The time when the Identity Resolution Job should run every week.</p>
   * @public
   */
  Time: string | undefined;
}

/**
 * <p>The flag that enables the matching process of duplicate profiles.</p>
 * @public
 */
export interface MatchingRequest {
  /**
   * <p>The flag that enables the matching process of duplicate profiles.</p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>The day and time when do you want to start the Identity Resolution Job every week.</p>
   * @public
   */
  JobSchedule?: JobSchedule;

  /**
   * <p>Configuration information about the auto-merging process.</p>
   * @public
   */
  AutoMerging?: AutoMerging;

  /**
   * <p>Configuration information for exporting Identity Resolution results, for example, to an S3
   *          bucket.</p>
   * @public
   */
  ExportingConfig?: ExportingConfig;
}

/**
 * <p>Specifies how does the rule-based matching process should match profiles. You can choose
 *          from the following attributes to build the matching Rule:</p>
 *          <ul>
 *             <li>
 *                <p>AccountNumber</p>
 *             </li>
 *             <li>
 *                <p>Address.Address</p>
 *             </li>
 *             <li>
 *                <p>Address.City</p>
 *             </li>
 *             <li>
 *                <p>Address.Country</p>
 *             </li>
 *             <li>
 *                <p>Address.County</p>
 *             </li>
 *             <li>
 *                <p>Address.PostalCode</p>
 *             </li>
 *             <li>
 *                <p>Address.State</p>
 *             </li>
 *             <li>
 *                <p>Address.Province</p>
 *             </li>
 *             <li>
 *                <p>BirthDate</p>
 *             </li>
 *             <li>
 *                <p>BusinessName</p>
 *             </li>
 *             <li>
 *                <p>EmailAddress</p>
 *             </li>
 *             <li>
 *                <p>FirstName</p>
 *             </li>
 *             <li>
 *                <p>Gender</p>
 *             </li>
 *             <li>
 *                <p>LastName</p>
 *             </li>
 *             <li>
 *                <p>MiddleName</p>
 *             </li>
 *             <li>
 *                <p>PhoneNumber</p>
 *             </li>
 *             <li>
 *                <p>Any customized profile attributes that start with the
 *                <code>Attributes</code>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface MatchingRule {
  /**
   * <p>A single rule level of the <code>MatchRules</code>. Configures how the rule-based
   *          matching process should match profiles.</p>
   * @public
   */
  Rule: string[] | undefined;
}

/**
 * <p>The request to enable the rule-based matching.</p>
 * @public
 */
export interface RuleBasedMatchingRequest {
  /**
   * <p>The flag that enables the rule-based matching process of duplicate profiles.</p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>Configures how the rule-based matching process should match profiles. You can have up to
   *          15 <code>MatchingRule</code> in the <code>MatchingRules</code>.</p>
   * @public
   */
  MatchingRules?: MatchingRule[];

  /**
   * <p>
   *             <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_MatchingRule.html">MatchingRule</a>
   *          </p>
   * @public
   */
  MaxAllowedRuleLevelForMerging?: number;

  /**
   * <p>Indicates the maximum allowed rule level.</p>
   * @public
   */
  MaxAllowedRuleLevelForMatching?: number;

  /**
   * <p>Configures information about the <code>AttributeTypesSelector</code> where the
   *          rule-based identity resolution uses to match profiles.</p>
   * @public
   */
  AttributeTypesSelector?: AttributeTypesSelector;

  /**
   * <p>How the auto-merging process should resolve conflicts between different profiles.</p>
   * @public
   */
  ConflictResolution?: ConflictResolution;

  /**
   * <p>Configuration information about the S3 bucket where Identity Resolution Jobs writes result files. </p>
   *          <note>
   *             <p>You need to give Customer Profiles service principal write permission to your S3 bucket.
   *             Otherwise, you'll get an exception in the API response. For an example policy, see
   *                <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html#customer-profiles-cross-service">Amazon Connect Customer Profiles cross-service confused deputy prevention</a>. </p>
   *          </note>
   * @public
   */
  ExportingConfig?: ExportingConfig;
}

/**
 * @public
 */
export interface CreateDomainRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The default number of days until the data within the domain expires.</p>
   * @public
   */
  DefaultExpirationDays: number | undefined;

  /**
   * <p>The default encryption key, which is an AWS managed key, is used when no specific type
   *          of encryption key is specified. It is used to encrypt all data before it is placed in
   *          permanent or semi-permanent storage.</p>
   * @public
   */
  DefaultEncryptionKey?: string;

  /**
   * <p>The URL of the SQS dead letter queue, which is used for reporting errors associated with
   *          ingesting data from third party applications. You must set up a policy on the
   *          DeadLetterQueue for the SendMessage operation to enable Amazon Connect Customer Profiles to send
   *          messages to the DeadLetterQueue.</p>
   * @public
   */
  DeadLetterQueueUrl?: string;

  /**
   * <p>The process of matching duplicate profiles. If <code>Matching</code> = <code>true</code>, Amazon Connect Customer Profiles starts a weekly
   * batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every
   * Saturday at 12AM UTC to detect duplicate profiles in your domains. </p>
   *          <p>After the Identity Resolution Job completes, use the
   * <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>
   * API to return and review the results. Or, if you have configured <code>ExportingConfig</code> in the <code>MatchingRequest</code>, you can download the results from
   * S3.</p>
   * @public
   */
  Matching?: MatchingRequest;

  /**
   * <p>The process of matching duplicate profiles using the Rule-Based matching. If
   *             <code>RuleBasedMatching</code> = true, Amazon Connect Customer Profiles will start
   *          to match and merge your profiles according to your configuration in the
   *             <code>RuleBasedMatchingRequest</code>. You can use the <code>ListRuleBasedMatches</code>
   *          and <code>GetSimilarProfiles</code> API to return and review the results. Also, if you have
   *          configured <code>ExportingConfig</code> in the <code>RuleBasedMatchingRequest</code>, you
   *          can download the results from S3.</p>
   * @public
   */
  RuleBasedMatching?: RuleBasedMatchingRequest;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * <p>The flag that enables the matching process of duplicate profiles.</p>
 * @public
 */
export interface MatchingResponse {
  /**
   * <p>The flag that enables the matching process of duplicate profiles.</p>
   * @public
   */
  Enabled?: boolean;

  /**
   * <p>The day and time when do you want to start the Identity Resolution Job every week.</p>
   * @public
   */
  JobSchedule?: JobSchedule;

  /**
   * <p>Configuration information about the auto-merging process.</p>
   * @public
   */
  AutoMerging?: AutoMerging;

  /**
   * <p>Configuration information for exporting Identity Resolution results, for example, to an S3
   *          bucket.</p>
   * @public
   */
  ExportingConfig?: ExportingConfig;
}

/**
 * @public
 * @enum
 */
export const RuleBasedMatchingStatus = {
  ACTIVE: "ACTIVE",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type RuleBasedMatchingStatus = (typeof RuleBasedMatchingStatus)[keyof typeof RuleBasedMatchingStatus];

/**
 * <p>The response of the Rule-based matching request.</p>
 * @public
 */
export interface RuleBasedMatchingResponse {
  /**
   * <p>The flag that enables the rule-based matching process of duplicate profiles.</p>
   * @public
   */
  Enabled?: boolean;

  /**
   * <p>Configures how the rule-based matching process should match profiles. You can have up to
   *          15 <code>MatchingRule</code> in the <code>MatchingRules</code>.</p>
   * @public
   */
  MatchingRules?: MatchingRule[];

  /**
   * <p>PENDING</p>
   *          <ul>
   *             <li>
   *                <p>The first status after configuration a rule-based matching rule. If it is an
   *                existing domain, the rule-based Identity Resolution waits one hour before creating the matching
   *                rule. If it is a new domain, the system will skip the <code>PENDING</code>
   *                stage.</p>
   *             </li>
   *          </ul>
   *          <p>IN_PROGRESS</p>
   *          <ul>
   *             <li>
   *                <p>The system is creating the rule-based matching rule. Under this status, the system
   *                is evaluating the existing data and you can no longer change the Rule-based matching
   *                configuration.</p>
   *             </li>
   *          </ul>
   *          <p>ACTIVE</p>
   *          <ul>
   *             <li>
   *                <p>The rule is ready to use. You can change the rule a day after the status is in
   *                   <code>ACTIVE</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: RuleBasedMatchingStatus;

  /**
   * <p>
   *             <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_MatchingRule.html">MatchingRule</a>
   *          </p>
   * @public
   */
  MaxAllowedRuleLevelForMerging?: number;

  /**
   * <p>Indicates the maximum allowed rule level.</p>
   * @public
   */
  MaxAllowedRuleLevelForMatching?: number;

  /**
   * <p>Configures information about the <code>AttributeTypesSelector</code> where the
   *          rule-based identity resolution uses to match profiles.</p>
   * @public
   */
  AttributeTypesSelector?: AttributeTypesSelector;

  /**
   * <p>How the auto-merging process should resolve conflicts between different profiles.</p>
   * @public
   */
  ConflictResolution?: ConflictResolution;

  /**
   * <p>Configuration information about the S3 bucket where Identity Resolution Jobs writes result files. </p>
   *          <note>
   *             <p>You need to give Customer Profiles service principal write permission to your S3 bucket.
   *             Otherwise, you'll get an exception in the API response. For an example policy, see
   *                <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html#customer-profiles-cross-service">Amazon Connect Customer Profiles cross-service confused deputy prevention</a>. </p>
   *          </note>
   * @public
   */
  ExportingConfig?: ExportingConfig;
}

/**
 * @public
 */
export interface CreateDomainResponse {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The default number of days until the data within the domain expires.</p>
   * @public
   */
  DefaultExpirationDays: number | undefined;

  /**
   * <p>The default encryption key, which is an AWS managed key, is used when no specific type
   *          of encryption key is specified. It is used to encrypt all data before it is placed in
   *          permanent or semi-permanent storage.</p>
   * @public
   */
  DefaultEncryptionKey?: string;

  /**
   * <p>The URL of the SQS dead letter queue, which is used for reporting errors associated with
   *          ingesting data from third party applications.</p>
   * @public
   */
  DeadLetterQueueUrl?: string;

  /**
   * <p>The process of matching duplicate profiles. If <code>Matching</code> = <code>true</code>, Amazon Connect Customer Profiles starts a weekly
   * batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every
   * Saturday at 12AM UTC to detect duplicate profiles in your domains. </p>
   *          <p>After the Identity Resolution Job completes, use the
   * <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>
   * API to return and review the results. Or, if you have configured <code>ExportingConfig</code> in the <code>MatchingRequest</code>, you can download the results from
   * S3.</p>
   * @public
   */
  Matching?: MatchingResponse;

  /**
   * <p>The process of matching duplicate profiles using the Rule-Based matching. If
   *             <code>RuleBasedMatching</code> = true, Amazon Connect Customer Profiles will start
   *          to match and merge your profiles according to your configuration in the
   *             <code>RuleBasedMatchingRequest</code>. You can use the <code>ListRuleBasedMatches</code>
   *          and <code>GetSimilarProfiles</code> API to return and review the results. Also, if you have
   *          configured <code>ExportingConfig</code> in the <code>RuleBasedMatchingRequest</code>, you
   *          can download the results from S3.</p>
   * @public
   */
  RuleBasedMatching?: RuleBasedMatchingResponse;

  /**
   * <p>The timestamp of when the domain was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the domain was most recently edited.</p>
   * @public
   */
  LastUpdatedAt: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateEventStreamRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The StreamARN of the destination to deliver profile events to. For example,
   *          arn:aws:kinesis:region:account-id:stream/stream-name</p>
   * @public
   */
  Uri: string | undefined;

  /**
   * <p>The name of the event stream.</p>
   * @public
   */
  EventStreamName: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateEventStreamResponse {
  /**
   * <p>A unique identifier for the event stream.</p>
   * @public
   */
  EventStreamArn: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * <p>Configuration data for integration workflow.</p>
 * @public
 */
export interface IntegrationConfig {
  /**
   * <p>Configuration data for <code>APPFLOW_INTEGRATION</code> workflow type.</p>
   * @public
   */
  AppflowIntegration?: AppflowIntegration;
}

/**
 * @public
 * @enum
 */
export const WorkflowType = {
  APPFLOW_INTEGRATION: "APPFLOW_INTEGRATION",
} as const;

/**
 * @public
 */
export type WorkflowType = (typeof WorkflowType)[keyof typeof WorkflowType];

/**
 * @public
 */
export interface CreateIntegrationWorkflowRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The type of workflow. The only supported value is APPFLOW_INTEGRATION.</p>
   * @public
   */
  WorkflowType: WorkflowType | undefined;

  /**
   * <p>Configuration data for integration workflow.</p>
   * @public
   */
  IntegrationConfig: IntegrationConfig | undefined;

  /**
   * <p>The name of the profile object type.</p>
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. Customer Profiles assumes this role to create resources on your behalf as part of workflow execution.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateIntegrationWorkflowResponse {
  /**
   * <p>Unique identifier for the workflow.</p>
   * @public
   */
  WorkflowId: string | undefined;

  /**
   * <p>A message indicating create request was received.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Gender = {
  FEMALE: "FEMALE",
  MALE: "MALE",
  UNSPECIFIED: "UNSPECIFIED",
} as const;

/**
 * @public
 */
export type Gender = (typeof Gender)[keyof typeof Gender];

/**
 * @public
 * @enum
 */
export const PartyType = {
  BUSINESS: "BUSINESS",
  INDIVIDUAL: "INDIVIDUAL",
  OTHER: "OTHER",
} as const;

/**
 * @public
 */
export type PartyType = (typeof PartyType)[keyof typeof PartyType];

/**
 * @public
 */
export interface CreateProfileRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>An account number that you have given to the customer.</p>
   * @public
   */
  AccountNumber?: string;

  /**
   * <p>Any additional information relevant to the customer’s profile.</p>
   * @public
   */
  AdditionalInformation?: string;

  /**
   * @deprecated
   *
   * <p>The type of profile used to describe the customer.</p>
   * @public
   */
  PartyType?: PartyType;

  /**
   * <p>The name of the customer’s business.</p>
   * @public
   */
  BusinessName?: string;

  /**
   * <p>The customer’s first name.</p>
   * @public
   */
  FirstName?: string;

  /**
   * <p>The customer’s middle name.</p>
   * @public
   */
  MiddleName?: string;

  /**
   * <p>The customer’s last name.</p>
   * @public
   */
  LastName?: string;

  /**
   * <p>The customer’s birth date. </p>
   * @public
   */
  BirthDate?: string;

  /**
   * @deprecated
   *
   * <p>The gender with which the customer identifies. </p>
   * @public
   */
  Gender?: Gender;

  /**
   * <p>The customer’s phone number, which has not been specified as a mobile, home, or business
   *          number. </p>
   * @public
   */
  PhoneNumber?: string;

  /**
   * <p>The customer’s mobile phone number.</p>
   * @public
   */
  MobilePhoneNumber?: string;

  /**
   * <p>The customer’s home phone number.</p>
   * @public
   */
  HomePhoneNumber?: string;

  /**
   * <p>The customer’s business phone number.</p>
   * @public
   */
  BusinessPhoneNumber?: string;

  /**
   * <p>The customer’s email address, which has not been specified as a personal or business
   *          address. </p>
   * @public
   */
  EmailAddress?: string;

  /**
   * <p>The customer’s personal email address.</p>
   * @public
   */
  PersonalEmailAddress?: string;

  /**
   * <p>The customer’s business email address.</p>
   * @public
   */
  BusinessEmailAddress?: string;

  /**
   * <p>A generic address associated with the customer that is not mailing, shipping, or
   *          billing.</p>
   * @public
   */
  Address?: Address;

  /**
   * <p>The customer’s shipping address.</p>
   * @public
   */
  ShippingAddress?: Address;

  /**
   * <p>The customer’s mailing address.</p>
   * @public
   */
  MailingAddress?: Address;

  /**
   * <p>The customer’s billing address.</p>
   * @public
   */
  BillingAddress?: Address;

  /**
   * <p>A key value pair of attributes of a customer profile.</p>
   * @public
   */
  Attributes?: Record<string, string>;

  /**
   * <p>An alternative to <code>PartyType</code> which accepts any string as input.</p>
   * @public
   */
  PartyTypeString?: string;

  /**
   * <p>An alternative to <code>Gender</code> which accepts any string as input.</p>
   * @public
   */
  GenderString?: string;
}

/**
 * @public
 */
export interface CreateProfileResponse {
  /**
   * <p>The unique identifier of a customer profile.</p>
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCalculatedAttributeDefinitionRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique name of the calculated attribute.</p>
   * @public
   */
  CalculatedAttributeName: string | undefined;
}

/**
 * @public
 */
export interface DeleteCalculatedAttributeDefinitionResponse {}

/**
 * @public
 */
export interface DeleteDomainRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainResponse {
  /**
   * <p>A message that indicates the delete request is done.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventStreamRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the event stream</p>
   * @public
   */
  EventStreamName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventStreamResponse {}

/**
 * @public
 */
export interface DeleteIntegrationRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The URI of the S3 bucket or any other type of data source.</p>
   * @public
   */
  Uri: string | undefined;
}

/**
 * @public
 */
export interface DeleteIntegrationResponse {
  /**
   * <p>A message that indicates the delete request is done.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface DeleteProfileRequest {
  /**
   * <p>The unique identifier of a customer profile.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DeleteProfileResponse {
  /**
   * <p>A message that indicates the delete request is done.</p>
   * @public
   */
  Message?: string;
}

/**
 * @public
 */
export interface DeleteProfileKeyRequest {
  /**
   * <p>The unique identifier of a customer profile.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>A searchable identifier of a customer profile.</p>
   * @public
   */
  KeyName: string | undefined;

  /**
   * <p>A list of key values.</p>
   * @public
   */
  Values: string[] | undefined;

  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DeleteProfileKeyResponse {
  /**
   * <p>A message that indicates the delete request is done.</p>
   * @public
   */
  Message?: string;
}

/**
 * @public
 */
export interface DeleteProfileObjectRequest {
  /**
   * <p>The unique identifier of a customer profile.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>The unique identifier of the profile object generated by the service.</p>
   * @public
   */
  ProfileObjectUniqueKey: string | undefined;

  /**
   * <p>The name of the profile object type.</p>
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DeleteProfileObjectResponse {
  /**
   * <p>A message that indicates the delete request is done.</p>
   * @public
   */
  Message?: string;
}

/**
 * @public
 */
export interface DeleteProfileObjectTypeRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the profile object type.</p>
   * @public
   */
  ObjectTypeName: string | undefined;
}

/**
 * @public
 */
export interface DeleteProfileObjectTypeResponse {
  /**
   * <p>A message that indicates the delete request is done.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>Unique identifier for the workflow.</p>
   * @public
   */
  WorkflowId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowResponse {}

/**
 * @public
 */
export interface DetectProfileObjectTypeRequest {
  /**
   * <p>A string that is serialized from a JSON object.</p>
   * @public
   */
  Objects: string[] | undefined;

  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FieldContentType = {
  EMAIL_ADDRESS: "EMAIL_ADDRESS",
  NAME: "NAME",
  NUMBER: "NUMBER",
  PHONE_NUMBER: "PHONE_NUMBER",
  STRING: "STRING",
} as const;

/**
 * @public
 */
export type FieldContentType = (typeof FieldContentType)[keyof typeof FieldContentType];

/**
 * <p>Represents a field in a ProfileObjectType.</p>
 * @public
 */
export interface ObjectTypeField {
  /**
   * <p>A field of a ProfileObject. For example: _source.FirstName, where “_source” is a
   *          ProfileObjectType of a Zendesk user and “FirstName” is a field in that ObjectType.</p>
   * @public
   */
  Source?: string;

  /**
   * <p>The location of the data in the standard ProfileObject model. For example:
   *          _profile.Address.PostalCode.</p>
   * @public
   */
  Target?: string;

  /**
   * <p>The content type of the field. Used for determining equality when searching.</p>
   * @public
   */
  ContentType?: FieldContentType;
}

/**
 * @public
 * @enum
 */
export const StandardIdentifier = {
  ASSET: "ASSET",
  CASE: "CASE",
  LOOKUP_ONLY: "LOOKUP_ONLY",
  NEW_ONLY: "NEW_ONLY",
  ORDER: "ORDER",
  PROFILE: "PROFILE",
  SECONDARY: "SECONDARY",
  UNIQUE: "UNIQUE",
} as const;

/**
 * @public
 */
export type StandardIdentifier = (typeof StandardIdentifier)[keyof typeof StandardIdentifier];

/**
 * <p>An object that defines the Key element of a ProfileObject. A Key is a special element
 *          that can be used to search for a customer profile.</p>
 * @public
 */
export interface ObjectTypeKey {
  /**
   * <p>The types of keys that a ProfileObject can have. Each ProfileObject can have only 1
   *          UNIQUE key but multiple PROFILE keys. PROFILE, ASSET, CASE, or ORDER means that this key
   *          can be used to tie an object to a PROFILE, ASSET, CASE, or ORDER respectively. UNIQUE means
   *          that it can be used to uniquely identify an object. If a key a is marked as SECONDARY, it
   *          will be used to search for profiles after all other PROFILE keys have been searched. A
   *          LOOKUP_ONLY key is only used to match a profile but is not persisted to be used for
   *          searching of the profile. A NEW_ONLY key is only used if the profile does not already exist
   *          before the object is ingested, otherwise it is only used for matching objects to
   *          profiles.</p>
   * @public
   */
  StandardIdentifiers?: StandardIdentifier[];

  /**
   * <p>The reference for the key name of the fields map.</p>
   * @public
   */
  FieldNames?: string[];
}

/**
 * <p>Contains <code>ProfileObjectType</code> mapping information from the model.</p>
 * @public
 */
export interface DetectedProfileObjectType {
  /**
   * <p>The format of <code>sourceLastUpdatedTimestamp</code> that was detected in
   *          fields.</p>
   * @public
   */
  SourceLastUpdatedTimestampFormat?: string;

  /**
   * <p>A map of the name and the <code>ObjectType</code> field.</p>
   * @public
   */
  Fields?: Record<string, ObjectTypeField>;

  /**
   * <p>A list of unique keys that can be used to map data to a profile.</p>
   * @public
   */
  Keys?: Record<string, ObjectTypeKey[]>;
}

/**
 * @public
 */
export interface DetectProfileObjectTypeResponse {
  /**
   * <p>Detected <code>ProfileObjectType</code> mappings from given objects. A maximum of one
   *          mapping is supported.</p>
   * @public
   */
  DetectedProfileObjectTypes?: DetectedProfileObjectType[];
}

/**
 * @public
 */
export interface GetAutoMergingPreviewRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>A list of matching attributes that represent matching criteria.</p>
   * @public
   */
  Consolidation: Consolidation | undefined;

  /**
   * <p>How the auto-merging process should resolve conflicts between different profiles.</p>
   * @public
   */
  ConflictResolution: ConflictResolution | undefined;

  /**
   * <p>Minimum confidence score required for profiles within a matching group to be merged
   *          during the auto-merge process.</p>
   * @public
   */
  MinAllowedConfidenceScoreForMerging?: number;
}

/**
 * @public
 */
export interface GetAutoMergingPreviewResponse {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The number of match groups in the domain that have been reviewed in this preview dry
   *          run.</p>
   * @public
   */
  NumberOfMatchesInSample?: number;

  /**
   * <p>The number of profiles found in this preview dry run.</p>
   * @public
   */
  NumberOfProfilesInSample?: number;

  /**
   * <p>The number of profiles that would be merged if this wasn't a preview dry run.</p>
   * @public
   */
  NumberOfProfilesWillBeMerged?: number;
}

/**
 * @public
 */
export interface GetCalculatedAttributeDefinitionRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique name of the calculated attribute.</p>
   * @public
   */
  CalculatedAttributeName: string | undefined;
}

/**
 * @public
 */
export interface GetCalculatedAttributeDefinitionResponse {
  /**
   * <p>The unique name of the calculated attribute.</p>
   * @public
   */
  CalculatedAttributeName?: string;

  /**
   * <p>The display name of the calculated attribute.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>The description of the calculated attribute.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The timestamp of when the calculated attribute definition was created.</p>
   * @public
   */
  CreatedAt?: Date;

  /**
   * <p>The timestamp of when the calculated attribute definition was most recently
   *          edited.</p>
   * @public
   */
  LastUpdatedAt?: Date;

  /**
   * <p>The aggregation operation to perform for the calculated attribute.</p>
   * @public
   */
  Statistic?: Statistic;

  /**
   * <p>The conditions including range, object count, and threshold for the calculated
   *          attribute.</p>
   * @public
   */
  Conditions?: Conditions;

  /**
   * <p>Mathematical expression and a list of attribute items specified in that
   *          expression.</p>
   * @public
   */
  AttributeDetails?: AttributeDetails;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetCalculatedAttributeForProfileRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique identifier of a customer profile.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>The unique name of the calculated attribute.</p>
   * @public
   */
  CalculatedAttributeName: string | undefined;
}

/**
 * @public
 */
export interface GetCalculatedAttributeForProfileResponse {
  /**
   * <p>The unique name of the calculated attribute.</p>
   * @public
   */
  CalculatedAttributeName?: string;

  /**
   * <p>The display name of the calculated attribute.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>Indicates whether the calculated attribute’s value is based on partial data. If data is
   *          partial, it is set to true.</p>
   * @public
   */
  IsDataPartial?: string;

  /**
   * <p>The value of the calculated attribute.</p>
   * @public
   */
  Value?: string;
}

/**
 * @public
 */
export interface GetDomainRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * <p>Usage-specific statistics about the domain.</p>
 * @public
 */
export interface DomainStats {
  /**
   * <p>The total number of profiles currently in the domain.</p>
   * @public
   */
  ProfileCount?: number;

  /**
   * <p>The number of profiles that you are currently paying for in the domain. If you have more
   *          than 100 objects associated with a single profile, that profile counts as two profiles. If
   *          you have more than 200 objects, that profile counts as three, and so on.</p>
   * @public
   */
  MeteringProfileCount?: number;

  /**
   * <p>The total number of objects in domain.</p>
   * @public
   */
  ObjectCount?: number;

  /**
   * <p>The total size, in bytes, of all objects in the domain.</p>
   * @public
   */
  TotalSize?: number;
}

/**
 * @public
 */
export interface GetDomainResponse {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The default number of days until the data within the domain expires.</p>
   * @public
   */
  DefaultExpirationDays?: number;

  /**
   * <p>The default encryption key, which is an AWS managed key, is used when no specific type
   *          of encryption key is specified. It is used to encrypt all data before it is placed in
   *          permanent or semi-permanent storage.</p>
   * @public
   */
  DefaultEncryptionKey?: string;

  /**
   * <p>The URL of the SQS dead letter queue, which is used for reporting errors associated with
   *          ingesting data from third party applications.</p>
   * @public
   */
  DeadLetterQueueUrl?: string;

  /**
   * <p>Usage-specific statistics about the domain.</p>
   * @public
   */
  Stats?: DomainStats;

  /**
   * <p>The process of matching duplicate profiles. If <code>Matching</code> = <code>true</code>, Amazon Connect Customer Profiles starts a weekly
   * batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every
   * Saturday at 12AM UTC to detect duplicate profiles in your domains. </p>
   *          <p>After the Identity Resolution Job completes, use the
   * <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>
   * API to return and review the results. Or, if you have configured <code>ExportingConfig</code> in the <code>MatchingRequest</code>, you can download the results from
   * S3.</p>
   * @public
   */
  Matching?: MatchingResponse;

  /**
   * <p>The process of matching duplicate profiles using the Rule-Based matching. If
   *             <code>RuleBasedMatching</code> = true, Amazon Connect Customer Profiles will start
   *          to match and merge your profiles according to your configuration in the
   *             <code>RuleBasedMatchingRequest</code>. You can use the <code>ListRuleBasedMatches</code>
   *          and <code>GetSimilarProfiles</code> API to return and review the results. Also, if you have
   *          configured <code>ExportingConfig</code> in the <code>RuleBasedMatchingRequest</code>, you
   *          can download the results from S3.</p>
   * @public
   */
  RuleBasedMatching?: RuleBasedMatchingResponse;

  /**
   * <p>The timestamp of when the domain was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the domain was most recently edited.</p>
   * @public
   */
  LastUpdatedAt: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetEventStreamRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the event stream provided during create operations.</p>
   * @public
   */
  EventStreamName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EventStreamDestinationStatus = {
  HEALTHY: "HEALTHY",
  UNHEALTHY: "UNHEALTHY",
} as const;

/**
 * @public
 */
export type EventStreamDestinationStatus =
  (typeof EventStreamDestinationStatus)[keyof typeof EventStreamDestinationStatus];

/**
 * <p>Details of the destination being used for the EventStream.</p>
 * @public
 */
export interface EventStreamDestinationDetails {
  /**
   * <p>The StreamARN of the destination to deliver profile events to. For example,
   *          arn:aws:kinesis:region:account-id:stream/stream-name.</p>
   * @public
   */
  Uri: string | undefined;

  /**
   * <p>The status of enabling the Kinesis stream as a destination for export.</p>
   * @public
   */
  Status: EventStreamDestinationStatus | undefined;

  /**
   * <p>The timestamp when the status last changed to <code>UNHEALHY</code>.</p>
   * @public
   */
  UnhealthySince?: Date;

  /**
   * <p>The human-readable string that corresponds to the error or success while enabling the
   *          streaming destination.</p>
   * @public
   */
  Message?: string;
}

/**
 * @public
 * @enum
 */
export const EventStreamState = {
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
} as const;

/**
 * @public
 */
export type EventStreamState = (typeof EventStreamState)[keyof typeof EventStreamState];

/**
 * @public
 */
export interface GetEventStreamResponse {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>A unique identifier for the event stream.</p>
   * @public
   */
  EventStreamArn: string | undefined;

  /**
   * <p>The timestamp of when the export was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The operational state of destination stream for export.</p>
   * @public
   */
  State: EventStreamState | undefined;

  /**
   * <p>The timestamp when the <code>State</code> changed to <code>STOPPED</code>.</p>
   * @public
   */
  StoppedSince?: Date;

  /**
   * <p>Details regarding the Kinesis stream.</p>
   * @public
   */
  DestinationDetails: EventStreamDestinationDetails | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetIdentityResolutionJobRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique identifier of the Identity Resolution Job.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * <p>The S3 location where Identity Resolution Jobs write result files.</p>
 * @public
 */
export interface S3ExportingLocation {
  /**
   * <p>The name of the S3 bucket name where Identity Resolution Jobs write result files.</p>
   * @public
   */
  S3BucketName?: string;

  /**
   * <p>The S3 key name of the location where Identity Resolution Jobs write result files.</p>
   * @public
   */
  S3KeyName?: string;
}

/**
 * <p>The S3 location where Identity Resolution Jobs write result files.</p>
 * @public
 */
export interface ExportingLocation {
  /**
   * <p>Information about the S3 location where Identity Resolution Jobs write result files.</p>
   * @public
   */
  S3Exporting?: S3ExportingLocation;
}

/**
 * <p>Statistics about the Identity Resolution Job.</p>
 * @public
 */
export interface JobStats {
  /**
   * <p>The number of profiles reviewed.</p>
   * @public
   */
  NumberOfProfilesReviewed?: number;

  /**
   * <p>The number of matches found.</p>
   * @public
   */
  NumberOfMatchesFound?: number;

  /**
   * <p>The number of merges completed.</p>
   * @public
   */
  NumberOfMergesDone?: number;
}

/**
 * @public
 * @enum
 */
export const IdentityResolutionJobStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  FIND_MATCHING: "FIND_MATCHING",
  MERGING: "MERGING",
  PARTIAL_SUCCESS: "PARTIAL_SUCCESS",
  PENDING: "PENDING",
  PREPROCESSING: "PREPROCESSING",
} as const;

/**
 * @public
 */
export type IdentityResolutionJobStatus =
  (typeof IdentityResolutionJobStatus)[keyof typeof IdentityResolutionJobStatus];

/**
 * @public
 */
export interface GetIdentityResolutionJobResponse {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName?: string;

  /**
   * <p>The unique identifier of the Identity Resolution Job.</p>
   * @public
   */
  JobId?: string;

  /**
   * <p>The status of the Identity Resolution Job.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>: The Identity Resolution Job is scheduled but has not started yet. If you turn
   *                off the Identity Resolution feature in your domain, jobs in the <code>PENDING</code> state are
   *                deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PREPROCESSING</code>: The Identity Resolution Job is loading your data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FIND_MATCHING</code>: The Identity Resolution Job is using the machine learning model to
   *                identify profiles that belong to the same matching group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MERGING</code>: The Identity Resolution Job is merging duplicate profiles.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code>: The Identity Resolution Job completed successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PARTIAL_SUCCESS</code>: There's a system error and not all of the data is
   *                merged. The Identity Resolution Job writes a message indicating the source of the problem.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The Identity Resolution Job did not merge any data. It writes a message
   *                indicating the source of the problem.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: IdentityResolutionJobStatus;

  /**
   * <p>The error messages that are generated when the Identity Resolution Job runs.</p>
   * @public
   */
  Message?: string;

  /**
   * <p>The timestamp of when the Identity Resolution Job was started or will be started.</p>
   * @public
   */
  JobStartTime?: Date;

  /**
   * <p>The timestamp of when the Identity Resolution Job was completed.</p>
   * @public
   */
  JobEndTime?: Date;

  /**
   * <p>The timestamp of when the Identity Resolution Job was most recently edited.</p>
   * @public
   */
  LastUpdatedAt?: Date;

  /**
   * <p>The timestamp of when the Identity Resolution Job will expire.</p>
   * @public
   */
  JobExpirationTime?: Date;

  /**
   * <p>Configuration settings for how to perform the auto-merging of profiles.</p>
   * @public
   */
  AutoMerging?: AutoMerging;

  /**
   * <p>The S3 location where the Identity Resolution Job writes result files.</p>
   * @public
   */
  ExportingLocation?: ExportingLocation;

  /**
   * <p>Statistics about the Identity Resolution Job.</p>
   * @public
   */
  JobStats?: JobStats;
}

/**
 * @public
 */
export interface GetIntegrationRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The URI of the S3 bucket or any other type of data source.</p>
   * @public
   */
  Uri: string | undefined;
}

/**
 * @public
 */
export interface GetIntegrationResponse {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The URI of the S3 bucket or any other type of data source.</p>
   * @public
   */
  Uri: string | undefined;

  /**
   * <p>The name of the profile object type.</p>
   * @public
   */
  ObjectTypeName?: string;

  /**
   * <p>The timestamp of when the domain was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the domain was most recently edited.</p>
   * @public
   */
  LastUpdatedAt: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>A map in which each key is an event type from an external application such as Segment or Shopify, and each value is an <code>ObjectTypeName</code> (template) used to ingest the event.
   * It supports the following event types: <code>SegmentIdentify</code>, <code>ShopifyCreateCustomers</code>, <code>ShopifyUpdateCustomers</code>, <code>ShopifyCreateDraftOrders</code>,
   * <code>ShopifyUpdateDraftOrders</code>, <code>ShopifyCreateOrders</code>, and <code>ShopifyUpdatedOrders</code>.</p>
   * @public
   */
  ObjectTypeNames?: Record<string, string>;

  /**
   * <p>Unique identifier for the workflow.</p>
   * @public
   */
  WorkflowId?: string;

  /**
   * <p>Boolean that shows if the Flow that's associated with the Integration is created in
   *          Amazon Appflow, or with ObjectTypeName equals _unstructured via API/CLI in
   *          flowDefinition.</p>
   * @public
   */
  IsUnstructured?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. The Integration uses this role to make
   *          Customer Profiles requests on your behalf.</p>
   * @public
   */
  RoleArn?: string;
}

/**
 * @public
 */
export interface GetMatchesRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * <p>The Match group object.</p>
 * @public
 */
export interface MatchItem {
  /**
   * <p>The unique identifiers for this group of profiles that match.</p>
   * @public
   */
  MatchId?: string;

  /**
   * <p>A list of identifiers for profiles that match.</p>
   * @public
   */
  ProfileIds?: string[];

  /**
   * <p>A number between 0 and 1, where a higher score means higher similarity. Examining match
   *          confidence scores lets you distinguish between groups of similar records in which the
   *          system is highly confident (which you may decide to merge), groups of similar records about
   *          which the system is uncertain (which you may decide to have reviewed by a human), and
   *          groups of similar records that the system deems to be unlikely (which you may decide to
   *          reject). Given confidence scores vary as per the data input, it should not be used an
   *          absolute measure of matching quality.</p>
   * @public
   */
  ConfidenceScore?: number;
}

/**
 * @public
 */
export interface GetMatchesResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The timestamp this version of Match Result generated.</p>
   * @public
   */
  MatchGenerationDate?: Date;

  /**
   * <p>The number of potential matches found.</p>
   * @public
   */
  PotentialMatches?: number;

  /**
   * <p>The list of matched profiles for this instance.</p>
   * @public
   */
  Matches?: MatchItem[];
}

/**
 * @public
 */
export interface GetProfileObjectTypeRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the profile object type.</p>
   * @public
   */
  ObjectTypeName: string | undefined;
}

/**
 * @public
 */
export interface GetProfileObjectTypeResponse {
  /**
   * <p>The name of the profile object type.</p>
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * <p>The description of the profile object type.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>A unique identifier for the object template.</p>
   * @public
   */
  TemplateId?: string;

  /**
   * <p>The number of days until the data in the object expires.</p>
   * @public
   */
  ExpirationDays?: number;

  /**
   * <p>The customer-provided key to encrypt the profile object that will be created in this
   *          profile object type.</p>
   * @public
   */
  EncryptionKey?: string;

  /**
   * <p>Indicates whether a profile should be created when data is received if one doesn’t exist
   *          for an object of this type. The default is <code>FALSE</code>. If the AllowProfileCreation
   *          flag is set to <code>FALSE</code>, then the service tries to fetch a standard profile and
   *          associate this object with the profile. If it is set to <code>TRUE</code>, and if no match
   *          is found, then the service creates a new standard profile.</p>
   * @public
   */
  AllowProfileCreation?: boolean;

  /**
   * <p>The format of your <code>sourceLastUpdatedTimestamp</code> that was previously set
   *          up.</p>
   * @public
   */
  SourceLastUpdatedTimestampFormat?: string;

  /**
   * <p>The amount of provisioned profile object max count available.</p>
   * @public
   */
  MaxAvailableProfileObjectCount?: number;

  /**
   * <p>The amount of profile object max count assigned to the object type.</p>
   * @public
   */
  MaxProfileObjectCount?: number;

  /**
   * <p>A map of the name and ObjectType field.</p>
   * @public
   */
  Fields?: Record<string, ObjectTypeField>;

  /**
   * <p>A list of unique keys that can be used to map data to the profile.</p>
   * @public
   */
  Keys?: Record<string, ObjectTypeKey[]>;

  /**
   * <p>The timestamp of when the domain was created.</p>
   * @public
   */
  CreatedAt?: Date;

  /**
   * <p>The timestamp of when the domain was most recently edited.</p>
   * @public
   */
  LastUpdatedAt?: Date;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetProfileObjectTypeTemplateRequest {
  /**
   * <p>A unique identifier for the object template.</p>
   * @public
   */
  TemplateId: string | undefined;
}

/**
 * @public
 */
export interface GetProfileObjectTypeTemplateResponse {
  /**
   * <p>A unique identifier for the object template.</p>
   * @public
   */
  TemplateId?: string;

  /**
   * <p>The name of the source of the object template.</p>
   * @public
   */
  SourceName?: string;

  /**
   * <p>The source of the object template.</p>
   * @public
   */
  SourceObject?: string;

  /**
   * <p>Indicates whether a profile should be created when data is received if one doesn’t exist
   *          for an object of this type. The default is <code>FALSE</code>. If the AllowProfileCreation
   *          flag is set to <code>FALSE</code>, then the service tries to fetch a standard profile and
   *          associate this object with the profile. If it is set to <code>TRUE</code>, and if no match
   *          is found, then the service creates a new standard profile.</p>
   * @public
   */
  AllowProfileCreation?: boolean;

  /**
   * <p>The format of your <code>sourceLastUpdatedTimestamp</code> that was previously set
   *          up.</p>
   * @public
   */
  SourceLastUpdatedTimestampFormat?: string;

  /**
   * <p>A map of the name and ObjectType field.</p>
   * @public
   */
  Fields?: Record<string, ObjectTypeField>;

  /**
   * <p>A list of unique keys that can be used to map data to the profile.</p>
   * @public
   */
  Keys?: Record<string, ObjectTypeKey[]>;
}

/**
 * @public
 * @enum
 */
export const MatchType = {
  ML_BASED_MATCHING: "ML_BASED_MATCHING",
  RULE_BASED_MATCHING: "RULE_BASED_MATCHING",
} as const;

/**
 * @public
 */
export type MatchType = (typeof MatchType)[keyof typeof MatchType];

/**
 * @public
 */
export interface GetSimilarProfilesRequest {
  /**
   * <p>The pagination token from the previous <code>GetSimilarProfiles</code> API call.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of objects returned per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>Specify the type of matching to get similar profiles for.</p>
   * @public
   */
  MatchType: MatchType | undefined;

  /**
   * <p>The string indicating the search key to be used.</p>
   * @public
   */
  SearchKey: string | undefined;

  /**
   * <p>The string based on <code>SearchKey</code> to be searched for similar profiles.</p>
   * @public
   */
  SearchValue: string | undefined;
}

/**
 * @public
 */
export interface GetSimilarProfilesResponse {
  /**
   * <p>Set of <code>profileId</code>s that belong to the same matching group.</p>
   * @public
   */
  ProfileIds?: string[];

  /**
   * <p>The string <code>matchId</code> that the similar profiles belong to.</p>
   * @public
   */
  MatchId?: string;

  /**
   * <p>Specify the type of matching to get similar profiles for.</p>
   * @public
   */
  MatchType?: MatchType;

  /**
   * <p>The integer rule level that the profiles matched on.</p>
   * @public
   */
  RuleLevel?: number;

  /**
   * <p>It only has value when the <code>MatchType</code> is <code>ML_BASED_MATCHING</code>.A
   *          number between 0 and 1, where a higher score means higher similarity. Examining match
   *          confidence scores lets you distinguish between groups of similar records in which the
   *          system is highly confident (which you may decide to merge), groups of similar records about
   *          which the system is uncertain (which you may decide to have reviewed by a human), and
   *          groups of similar records that the system deems to be unlikely (which you may decide to
   *          reject). Given confidence scores vary as per the data input, it should not be used as an
   *          absolute measure of matching quality.</p>
   * @public
   */
  ConfidenceScore?: number;

  /**
   * <p>The pagination token from the previous <code>GetSimilarProfiles</code> API call.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetWorkflowRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>Unique identifier for the workflow.</p>
   * @public
   */
  WorkflowId: string | undefined;
}

/**
 * <p>Structure to hold workflow attributes.</p>
 * @public
 */
export interface WorkflowAttributes {
  /**
   * <p>Workflow attributes specific to <code>APPFLOW_INTEGRATION</code> workflow.</p>
   * @public
   */
  AppflowIntegration?: AppflowIntegrationWorkflowAttributes;
}

/**
 * <p>Generic object containing workflow execution metrics.</p>
 * @public
 */
export interface WorkflowMetrics {
  /**
   * <p>Workflow execution metrics for <code>APPFLOW_INTEGRATION</code> workflow.</p>
   * @public
   */
  AppflowIntegration?: AppflowIntegrationWorkflowMetrics;
}

/**
 * @public
 */
export interface GetWorkflowResponse {
  /**
   * <p>Unique identifier for the workflow.</p>
   * @public
   */
  WorkflowId?: string;

  /**
   * <p>The type of workflow. The only supported value is APPFLOW_INTEGRATION.</p>
   * @public
   */
  WorkflowType?: WorkflowType;

  /**
   * <p>Status of workflow execution.</p>
   * @public
   */
  Status?: Status;

  /**
   * <p>Workflow error messages during execution (if any).</p>
   * @public
   */
  ErrorDescription?: string;

  /**
   * <p>The timestamp that represents when workflow execution started.</p>
   * @public
   */
  StartDate?: Date;

  /**
   * <p>The timestamp that represents when workflow execution last updated.</p>
   * @public
   */
  LastUpdatedAt?: Date;

  /**
   * <p>Attributes provided for workflow execution.</p>
   * @public
   */
  Attributes?: WorkflowAttributes;

  /**
   * <p>Workflow specific execution metrics.</p>
   * @public
   */
  Metrics?: WorkflowMetrics;
}

/**
 * @public
 */
export interface GetWorkflowStepsRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>Unique identifier for the workflow.</p>
   * @public
   */
  WorkflowId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>List containing steps in workflow.</p>
 * @public
 */
export interface WorkflowStepItem {
  /**
   * <p>Workflow step information specific to <code>APPFLOW_INTEGRATION</code> workflow.</p>
   * @public
   */
  AppflowIntegration?: AppflowIntegrationWorkflowStep;
}

/**
 * @public
 */
export interface GetWorkflowStepsResponse {
  /**
   * <p>Unique identifier for the workflow.</p>
   * @public
   */
  WorkflowId?: string;

  /**
   * <p>The type of workflow. The only supported value is APPFLOW_INTEGRATION.</p>
   * @public
   */
  WorkflowType?: WorkflowType;

  /**
   * <p>List containing workflow step details.</p>
   * @public
   */
  Items?: WorkflowStepItem[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAccountIntegrationsRequest {
  /**
   * <p>The URI of the S3 bucket or any other type of data source.</p>
   * @public
   */
  Uri: string | undefined;

  /**
   * <p>The pagination token from the previous ListAccountIntegrations API call.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of objects returned per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Boolean to indicate if hidden integration should be returned. Defaults to <code>False</code>.</p>
   * @public
   */
  IncludeHidden?: boolean;
}

/**
 * <p>An integration in list of integrations.</p>
 * @public
 */
export interface ListIntegrationItem {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The URI of the S3 bucket or any other type of data source.</p>
   * @public
   */
  Uri: string | undefined;

  /**
   * <p>The name of the profile object type.</p>
   * @public
   */
  ObjectTypeName?: string;

  /**
   * <p>The timestamp of when the domain was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the domain was most recently edited.</p>
   * @public
   */
  LastUpdatedAt: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>A map in which each key is an event type from an external application such as Segment or Shopify, and each value is an <code>ObjectTypeName</code> (template) used to ingest the event.
   * It supports the following event types: <code>SegmentIdentify</code>, <code>ShopifyCreateCustomers</code>, <code>ShopifyUpdateCustomers</code>, <code>ShopifyCreateDraftOrders</code>,
   * <code>ShopifyUpdateDraftOrders</code>, <code>ShopifyCreateOrders</code>, and <code>ShopifyUpdatedOrders</code>.</p>
   * @public
   */
  ObjectTypeNames?: Record<string, string>;

  /**
   * <p>Unique identifier for the workflow.</p>
   * @public
   */
  WorkflowId?: string;

  /**
   * <p>Boolean that shows if the Flow that's associated with the Integration is created in
   *          Amazon Appflow, or with ObjectTypeName equals _unstructured via API/CLI in
   *          flowDefinition.</p>
   * @public
   */
  IsUnstructured?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. The Integration uses this role to make
   *          Customer Profiles requests on your behalf.</p>
   * @public
   */
  RoleArn?: string;
}

/**
 * @public
 */
export interface ListAccountIntegrationsResponse {
  /**
   * <p>The list of ListAccountIntegration instances.</p>
   * @public
   */
  Items?: ListIntegrationItem[];

  /**
   * <p>The pagination token from the previous ListAccountIntegrations API call.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCalculatedAttributeDefinitionsRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The pagination token from the previous call to
   *          ListCalculatedAttributeDefinitions.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of calculated attribute definitions returned per page.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListCalculatedAttributeDefinitionsResponse {
  /**
   * <p>The list of calculated attribute definitions.</p>
   * @public
   */
  Items?: ListCalculatedAttributeDefinitionItem[];

  /**
   * <p>The pagination token from the previous call to
   *          ListCalculatedAttributeDefinitions.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCalculatedAttributesForProfileRequest {
  /**
   * <p>The pagination token from the previous call to
   *          ListCalculatedAttributesForProfile.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of calculated attributes returned per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique identifier of a customer profile.</p>
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @public
 */
export interface ListCalculatedAttributesForProfileResponse {
  /**
   * <p>The list of calculated attributes.</p>
   * @public
   */
  Items?: ListCalculatedAttributeForProfileItem[];

  /**
   * <p>The pagination token from the previous call to
   *          ListCalculatedAttributesForProfile.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDomainsRequest {
  /**
   * <p>The pagination token from the previous ListDomain API call.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of objects returned per page.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>An object in a list that represents a domain.</p>
 * @public
 */
export interface ListDomainItem {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The timestamp of when the domain was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the domain was most recently edited.</p>
   * @public
   */
  LastUpdatedAt: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListDomainsResponse {
  /**
   * <p>The list of ListDomains instances.</p>
   * @public
   */
  Items?: ListDomainItem[];

  /**
   * <p>The pagination token from the previous ListDomains API call.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListEventStreamsRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of objects returned per page.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Summary information about the Kinesis data stream</p>
 * @public
 */
export interface DestinationSummary {
  /**
   * <p>The StreamARN of the destination to deliver profile events to. For example,
   *          arn:aws:kinesis:region:account-id:stream/stream-name.</p>
   * @public
   */
  Uri: string | undefined;

  /**
   * <p>The status of enabling the Kinesis stream as a destination for export.</p>
   * @public
   */
  Status: EventStreamDestinationStatus | undefined;

  /**
   * <p>The timestamp when the status last changed to <code>UNHEALHY</code>.</p>
   * @public
   */
  UnhealthySince?: Date;
}

/**
 * <p>An instance of EventStream in a list of EventStreams.</p>
 * @public
 */
export interface EventStreamSummary {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the event stream.</p>
   * @public
   */
  EventStreamName: string | undefined;

  /**
   * <p>A unique identifier for the event stream.</p>
   * @public
   */
  EventStreamArn: string | undefined;

  /**
   * <p>The operational state of destination stream for export.</p>
   * @public
   */
  State: EventStreamState | undefined;

  /**
   * <p>The timestamp when the <code>State</code> changed to <code>STOPPED</code>.</p>
   * @public
   */
  StoppedSince?: Date;

  /**
   * <p>Summary information about the Kinesis data stream.</p>
   * @public
   */
  DestinationSummary?: DestinationSummary;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListEventStreamsResponse {
  /**
   * <p>Contains summary information about an EventStream.</p>
   * @public
   */
  Items?: EventStreamSummary[];

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListIdentityResolutionJobsRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Information about the Identity Resolution Job.</p>
 * @public
 */
export interface IdentityResolutionJob {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName?: string;

  /**
   * <p>The unique identifier of the Identity Resolution Job.</p>
   * @public
   */
  JobId?: string;

  /**
   * <p>The status of the Identity Resolution Job.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>: The Identity Resolution Job is scheduled but has not started yet. If you turn
   *                off the Identity Resolution feature in your domain, jobs in the <code>PENDING</code> state are
   *                deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PREPROCESSING</code>: The Identity Resolution Job is loading your data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FIND_MATCHING</code>: The Identity Resolution Job is using the machine learning model to
   *                identify profiles that belong to the same matching group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MERGING</code>: The Identity Resolution Job is merging duplicate profiles.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code>: The Identity Resolution Job completed successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PARTIAL_SUCCESS</code>: There's a system error and not all of the data is
   *                merged. The Identity Resolution Job writes a message indicating the source of the problem.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The Identity Resolution Job did not merge any data. It writes a message
   *                indicating the source of the problem.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: IdentityResolutionJobStatus;

  /**
   * <p>The timestamp of when the job was started or will be started.</p>
   * @public
   */
  JobStartTime?: Date;

  /**
   * <p>The timestamp of when the job was completed.</p>
   * @public
   */
  JobEndTime?: Date;

  /**
   * <p>Statistics about an Identity Resolution Job.</p>
   * @public
   */
  JobStats?: JobStats;

  /**
   * <p>The S3 location where the Identity Resolution Job writes result files.</p>
   * @public
   */
  ExportingLocation?: ExportingLocation;

  /**
   * <p>The error messages that are generated when the Identity Resolution Job runs.</p>
   * @public
   */
  Message?: string;
}

/**
 * @public
 */
export interface ListIdentityResolutionJobsResponse {
  /**
   * <p>A list of Identity Resolution Jobs.</p>
   * @public
   */
  IdentityResolutionJobsList?: IdentityResolutionJob[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListIntegrationsRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The pagination token from the previous ListIntegrations API call.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of objects returned per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Boolean to indicate if hidden integration should be returned. Defaults to <code>False</code>.</p>
   * @public
   */
  IncludeHidden?: boolean;
}

/**
 * @public
 */
export interface ListIntegrationsResponse {
  /**
   * <p>The list of ListIntegrations instances.</p>
   * @public
   */
  Items?: ListIntegrationItem[];

  /**
   * <p>The pagination token from the previous ListIntegrations API call.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>The filter applied to <code>ListProfileObjects</code> response to include profile
 *          objects with the specified index values.</p>
 * @public
 */
export interface ObjectFilter {
  /**
   * <p>A searchable identifier of a profile object. The predefined keys you can use to search
   *          for <code>_asset</code> include: <code>_assetId</code>, <code>_assetName</code>, and
   *             <code>_serialNumber</code>. The predefined keys you can use to search for
   *             <code>_case</code> include: <code>_caseId</code>. The predefined keys you can use to
   *          search for <code>_order</code> include: <code>_orderId</code>.</p>
   * @public
   */
  KeyName: string | undefined;

  /**
   * <p>A list of key values.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface ListProfileObjectsRequest {
  /**
   * <p>The pagination token from the previous call to ListProfileObjects.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of objects returned per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the profile object type.</p>
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * <p>The unique identifier of a customer profile.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>Applies a filter to the response to include profile objects with the specified index
   *          values.</p>
   * @public
   */
  ObjectFilter?: ObjectFilter;
}

/**
 * <p>A ProfileObject in a list of ProfileObjects.</p>
 * @public
 */
export interface ListProfileObjectsItem {
  /**
   * <p>Specifies the kind of object being added to a profile, such as
   *          "Salesforce-Account."</p>
   * @public
   */
  ObjectTypeName?: string;

  /**
   * <p>The unique identifier of the ProfileObject generated by the service.</p>
   * @public
   */
  ProfileObjectUniqueKey?: string;

  /**
   * <p>A JSON representation of a ProfileObject that belongs to a profile.</p>
   * @public
   */
  Object?: string;
}

/**
 * @public
 */
export interface ListProfileObjectsResponse {
  /**
   * <p>The list of ListProfileObject instances.</p>
   * @public
   */
  Items?: ListProfileObjectsItem[];

  /**
   * <p>The pagination token from the previous call to ListProfileObjects.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListProfileObjectTypesRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of objects returned per page.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>A ProfileObjectType instance.</p>
 * @public
 */
export interface ListProfileObjectTypeItem {
  /**
   * <p>The name of the profile object type.</p>
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * <p>Description of the profile object type.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The timestamp of when the domain was created.</p>
   * @public
   */
  CreatedAt?: Date;

  /**
   * <p>The timestamp of when the domain was most recently edited.</p>
   * @public
   */
  LastUpdatedAt?: Date;

  /**
   * <p>The amount of profile object max count assigned to the object type.</p>
   * @public
   */
  MaxProfileObjectCount?: number;

  /**
   * <p>The amount of provisioned profile object max count available.</p>
   * @public
   */
  MaxAvailableProfileObjectCount?: number;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListProfileObjectTypesResponse {
  /**
   * <p>The list of ListProfileObjectTypes instances.</p>
   * @public
   */
  Items?: ListProfileObjectTypeItem[];

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListProfileObjectTypeTemplatesRequest {
  /**
   * <p>The pagination token from the previous ListObjectTypeTemplates API call.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of objects returned per page.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>A ProfileObjectTypeTemplate in a list of ProfileObjectTypeTemplates.</p>
 * @public
 */
export interface ListProfileObjectTypeTemplateItem {
  /**
   * <p>A unique identifier for the object template.</p>
   * @public
   */
  TemplateId?: string;

  /**
   * <p>The name of the source of the object template.</p>
   * @public
   */
  SourceName?: string;

  /**
   * <p>The source of the object template.</p>
   * @public
   */
  SourceObject?: string;
}

/**
 * @public
 */
export interface ListProfileObjectTypeTemplatesResponse {
  /**
   * <p>The list of ListProfileObjectType template instances.</p>
   * @public
   */
  Items?: ListProfileObjectTypeTemplateItem[];

  /**
   * <p>The pagination token from the previous ListObjectTypeTemplates API call. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRuleBasedMatchesRequest {
  /**
   * <p>The pagination token from the previous <code>ListRuleBasedMatches</code> API
   *          call.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of <code>MatchIds</code> returned per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface ListRuleBasedMatchesResponse {
  /**
   * <p>The list of <code>MatchIds</code> for the given domain.</p>
   * @public
   */
  MatchIds?: string[];

  /**
   * <p>The pagination token from the previous <code>ListRuleBasedMatches</code> API
   *          call.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource for which you want to view tags.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListWorkflowsRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The type of workflow. The only supported value is APPFLOW_INTEGRATION.</p>
   * @public
   */
  WorkflowType?: WorkflowType;

  /**
   * <p>Status of workflow execution.</p>
   * @public
   */
  Status?: Status;

  /**
   * <p>Retrieve workflows started after timestamp.</p>
   * @public
   */
  QueryStartDate?: Date;

  /**
   * <p>Retrieve workflows ended after timestamp.</p>
   * @public
   */
  QueryEndDate?: Date;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>A workflow in list of workflows.</p>
 * @public
 */
export interface ListWorkflowsItem {
  /**
   * <p>The type of workflow. The only supported value is APPFLOW_INTEGRATION.</p>
   * @public
   */
  WorkflowType: WorkflowType | undefined;

  /**
   * <p>Unique identifier for the workflow.</p>
   * @public
   */
  WorkflowId: string | undefined;

  /**
   * <p>Status of workflow execution.</p>
   * @public
   */
  Status: Status | undefined;

  /**
   * <p>Description for workflow execution status.</p>
   * @public
   */
  StatusDescription: string | undefined;

  /**
   * <p>Creation timestamp for workflow.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>Last updated timestamp for workflow.</p>
   * @public
   */
  LastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListWorkflowsResponse {
  /**
   * <p>List containing workflow details.</p>
   * @public
   */
  Items?: ListWorkflowsItem[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>A duplicate customer profile that is to be merged into a main profile. </p>
 * @public
 */
export interface FieldSourceProfileIds {
  /**
   * <p>A unique identifier for the account number field to be merged. </p>
   * @public
   */
  AccountNumber?: string;

  /**
   * <p>A unique identifier for the additional information field to be merged.</p>
   * @public
   */
  AdditionalInformation?: string;

  /**
   * <p>A unique identifier for the party type field to be merged.</p>
   * @public
   */
  PartyType?: string;

  /**
   * <p>A unique identifier for the business name field to be merged.</p>
   * @public
   */
  BusinessName?: string;

  /**
   * <p>A unique identifier for the first name field to be merged.</p>
   * @public
   */
  FirstName?: string;

  /**
   * <p>A unique identifier for the middle name field to be merged.</p>
   * @public
   */
  MiddleName?: string;

  /**
   * <p>A unique identifier for the last name field to be merged.</p>
   * @public
   */
  LastName?: string;

  /**
   * <p>A unique identifier for the birthdate field to be merged.</p>
   * @public
   */
  BirthDate?: string;

  /**
   * <p>A unique identifier for the gender field to be merged.</p>
   * @public
   */
  Gender?: string;

  /**
   * <p>A unique identifier for the phone number field to be merged.</p>
   * @public
   */
  PhoneNumber?: string;

  /**
   * <p>A unique identifier for the mobile phone number field to be merged.</p>
   * @public
   */
  MobilePhoneNumber?: string;

  /**
   * <p>A unique identifier for the home phone number field to be merged.</p>
   * @public
   */
  HomePhoneNumber?: string;

  /**
   * <p>A unique identifier for the business phone number field to be merged.</p>
   * @public
   */
  BusinessPhoneNumber?: string;

  /**
   * <p>A unique identifier for the email address field to be merged.</p>
   * @public
   */
  EmailAddress?: string;

  /**
   * <p>A unique identifier for the personal email address field to be merged.</p>
   * @public
   */
  PersonalEmailAddress?: string;

  /**
   * <p>A unique identifier for the party type field to be merged.</p>
   * @public
   */
  BusinessEmailAddress?: string;

  /**
   * <p>A unique identifier for the party type field to be merged.</p>
   * @public
   */
  Address?: string;

  /**
   * <p>A unique identifier for the shipping address field to be merged.</p>
   * @public
   */
  ShippingAddress?: string;

  /**
   * <p>A unique identifier for the mailing address field to be merged.</p>
   * @public
   */
  MailingAddress?: string;

  /**
   * <p>A unique identifier for the billing type field to be merged.</p>
   * @public
   */
  BillingAddress?: string;

  /**
   * <p>A unique identifier for the attributes field to be merged.</p>
   * @public
   */
  Attributes?: Record<string, string>;
}

/**
 * @public
 */
export interface MergeProfilesRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The identifier of the profile to be taken.</p>
   * @public
   */
  MainProfileId: string | undefined;

  /**
   * <p>The identifier of the profile to be merged into MainProfileId.</p>
   * @public
   */
  ProfileIdsToBeMerged: string[] | undefined;

  /**
   * <p>The identifiers of the fields in the profile that has the information you want to apply
   *          to the merge. For example, say you want to merge EmailAddress from Profile1 into
   *          MainProfile. This would be the identifier of the EmailAddress field in Profile1. </p>
   * @public
   */
  FieldSourceProfileIds?: FieldSourceProfileIds;
}

/**
 * @public
 */
export interface MergeProfilesResponse {
  /**
   * <p>A message that indicates the merge request is complete.</p>
   * @public
   */
  Message?: string;
}

/**
 * @public
 */
export interface PutIntegrationRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The URI of the S3 bucket or any other type of data source.</p>
   * @public
   */
  Uri?: string;

  /**
   * <p>The name of the profile object type.</p>
   * @public
   */
  ObjectTypeName?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>The configuration that controls how Customer Profiles retrieves data from the
   *          source.</p>
   * @public
   */
  FlowDefinition?: FlowDefinition;

  /**
   * <p>A map in which each key is an event type from an external application such as Segment or Shopify, and each value is an <code>ObjectTypeName</code> (template) used to ingest the event.
   * It supports the following event types: <code>SegmentIdentify</code>, <code>ShopifyCreateCustomers</code>, <code>ShopifyUpdateCustomers</code>, <code>ShopifyCreateDraftOrders</code>,
   * <code>ShopifyUpdateDraftOrders</code>, <code>ShopifyCreateOrders</code>, and <code>ShopifyUpdatedOrders</code>.</p>
   * @public
   */
  ObjectTypeNames?: Record<string, string>;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. The Integration uses this role to make
   *          Customer Profiles requests on your behalf.</p>
   * @public
   */
  RoleArn?: string;
}

/**
 * @public
 */
export interface PutIntegrationResponse {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The URI of the S3 bucket or any other type of data source.</p>
   * @public
   */
  Uri: string | undefined;

  /**
   * <p>The name of the profile object type.</p>
   * @public
   */
  ObjectTypeName?: string;

  /**
   * <p>The timestamp of when the domain was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the domain was most recently edited.</p>
   * @public
   */
  LastUpdatedAt: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>A map in which each key is an event type from an external application such as Segment or Shopify, and each value is an <code>ObjectTypeName</code> (template) used to ingest the event.
   * It supports the following event types: <code>SegmentIdentify</code>, <code>ShopifyCreateCustomers</code>, <code>ShopifyUpdateCustomers</code>, <code>ShopifyCreateDraftOrders</code>,
   * <code>ShopifyUpdateDraftOrders</code>, <code>ShopifyCreateOrders</code>, and <code>ShopifyUpdatedOrders</code>.</p>
   * @public
   */
  ObjectTypeNames?: Record<string, string>;

  /**
   * <p>Unique identifier for the workflow.</p>
   * @public
   */
  WorkflowId?: string;

  /**
   * <p>Boolean that shows if the Flow that's associated with the Integration is created in
   *          Amazon Appflow, or with ObjectTypeName equals _unstructured via API/CLI in
   *          flowDefinition.</p>
   * @public
   */
  IsUnstructured?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. The Integration uses this role to make
   *          Customer Profiles requests on your behalf.</p>
   * @public
   */
  RoleArn?: string;
}

/**
 * @public
 */
export interface PutProfileObjectRequest {
  /**
   * <p>The name of the profile object type.</p>
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * <p>A string that is serialized from a JSON object.</p>
   * @public
   */
  Object: string | undefined;

  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface PutProfileObjectResponse {
  /**
   * <p>The unique identifier of the profile object generated by the service.</p>
   * @public
   */
  ProfileObjectUniqueKey?: string;
}

/**
 * @public
 */
export interface PutProfileObjectTypeRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the profile object type.</p>
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * <p>Description of the profile object type.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>A unique identifier for the object template. For some attributes in the request, the
   *          service will use the default value from the object template when TemplateId is present. If
   *          these attributes are present in the request, the service may return a
   *             <code>BadRequestException</code>. These attributes include: AllowProfileCreation,
   *          SourceLastUpdatedTimestampFormat, Fields, and Keys. For example, if AllowProfileCreation is
   *          set to true when TemplateId is set, the service may return a
   *             <code>BadRequestException</code>.</p>
   * @public
   */
  TemplateId?: string;

  /**
   * <p>The number of days until the data in the object expires.</p>
   * @public
   */
  ExpirationDays?: number;

  /**
   * <p>The customer-provided key to encrypt the profile object that will be created in this
   *          profile object type.</p>
   * @public
   */
  EncryptionKey?: string;

  /**
   * <p>Indicates whether a profile should be created when data is received if one doesn’t exist
   *          for an object of this type. The default is <code>FALSE</code>. If the AllowProfileCreation
   *          flag is set to <code>FALSE</code>, then the service tries to fetch a standard profile and
   *          associate this object with the profile. If it is set to <code>TRUE</code>, and if no match
   *          is found, then the service creates a new standard profile.</p>
   * @public
   */
  AllowProfileCreation?: boolean;

  /**
   * <p>The format of your <code>sourceLastUpdatedTimestamp</code> that was previously set up.
   *       </p>
   * @public
   */
  SourceLastUpdatedTimestampFormat?: string;

  /**
   * <p>The amount of profile object max count assigned to the object type</p>
   * @public
   */
  MaxProfileObjectCount?: number;

  /**
   * <p>A map of the name and ObjectType field.</p>
   * @public
   */
  Fields?: Record<string, ObjectTypeField>;

  /**
   * <p>A list of unique keys that can be used to map data to the profile.</p>
   * @public
   */
  Keys?: Record<string, ObjectTypeKey[]>;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface PutProfileObjectTypeResponse {
  /**
   * <p>The name of the profile object type.</p>
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * <p>Description of the profile object type.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>A unique identifier for the object template.</p>
   * @public
   */
  TemplateId?: string;

  /**
   * <p>The number of days until the data in the object expires.</p>
   * @public
   */
  ExpirationDays?: number;

  /**
   * <p>The customer-provided key to encrypt the profile object that will be created in this
   *          profile object type.</p>
   * @public
   */
  EncryptionKey?: string;

  /**
   * <p>Indicates whether a profile should be created when data is received if one doesn’t exist
   *          for an object of this type. The default is <code>FALSE</code>. If the AllowProfileCreation
   *          flag is set to <code>FALSE</code>, then the service tries to fetch a standard profile and
   *          associate this object with the profile. If it is set to <code>TRUE</code>, and if no match
   *          is found, then the service creates a new standard profile.</p>
   * @public
   */
  AllowProfileCreation?: boolean;

  /**
   * <p>The format of your <code>sourceLastUpdatedTimestamp</code> that was previously set up in
   *          fields that were parsed using <a href="https://docs.oracle.com/javase/10/docs/api/java/text/SimpleDateFormat.html">SimpleDateFormat</a>. If you have <code>sourceLastUpdatedTimestamp</code> in your
   *          field, you must set up <code>sourceLastUpdatedTimestampFormat</code>.</p>
   * @public
   */
  SourceLastUpdatedTimestampFormat?: string;

  /**
   * <p>The amount of profile object max count assigned to the object type.</p>
   * @public
   */
  MaxProfileObjectCount?: number;

  /**
   * <p>The amount of provisioned profile object max count available.</p>
   * @public
   */
  MaxAvailableProfileObjectCount?: number;

  /**
   * <p>A map of the name and ObjectType field.</p>
   * @public
   */
  Fields?: Record<string, ObjectTypeField>;

  /**
   * <p>A list of unique keys that can be used to map data to the profile.</p>
   * @public
   */
  Keys?: Record<string, ObjectTypeKey[]>;

  /**
   * <p>The timestamp of when the domain was created.</p>
   * @public
   */
  CreatedAt?: Date;

  /**
   * <p>The timestamp of when the domain was most recently edited.</p>
   * @public
   */
  LastUpdatedAt?: Date;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const LogicalOperator = {
  AND: "AND",
  OR: "OR",
} as const;

/**
 * @public
 */
export type LogicalOperator = (typeof LogicalOperator)[keyof typeof LogicalOperator];

/**
 * @public
 */
export interface SearchProfilesRequest {
  /**
   * <p>The pagination token from the previous SearchProfiles API call.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of objects returned per page.</p>
   *          <p>The default is 20 if this parameter is not included in the request.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>A searchable identifier of a customer profile. The predefined keys you can use to search include: _account, _profileId,
   *          _assetId, _caseId, _orderId, _fullName, _phone, _email, _ctrContactId, _marketoLeadId,
   *          _salesforceAccountId, _salesforceContactId, _salesforceAssetId, _zendeskUserId,
   *          _zendeskExternalId, _zendeskTicketId, _serviceNowSystemId, _serviceNowIncidentId,
   *          _segmentUserId, _shopifyCustomerId, _shopifyOrderId.</p>
   * @public
   */
  KeyName: string | undefined;

  /**
   * <p>A list of key values.</p>
   * @public
   */
  Values: string[] | undefined;

  /**
   * <p>A list of <code>AdditionalSearchKey</code> objects that are each searchable identifiers
   *          of a profile. Each <code>AdditionalSearchKey</code> object contains a <code>KeyName</code>
   *          and a list of <code>Values</code> associated with that specific key (i.e., a key-value(s)
   *          pair). These additional search keys will be used in conjunction with the
   *             <code>LogicalOperator</code> and the required <code>KeyName</code> and
   *             <code>Values</code> parameters to search for profiles that satisfy the search criteria.
   *       </p>
   * @public
   */
  AdditionalSearchKeys?: AdditionalSearchKey[];

  /**
   * <p>Relationship between all specified search keys that will be used to search for profiles.
   *          This includes the required <code>KeyName</code> and <code>Values</code> parameters as well
   *          as any key-value(s) pairs specified in the <code>AdditionalSearchKeys</code> list.</p>
   *          <p>This parameter influences which profiles will be returned in the response in the
   *          following manner:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AND</code> - The response only includes profiles that match all of the
   *                search keys.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OR</code> - The response includes profiles that match at least one of the
   *                search keys.</p>
   *             </li>
   *          </ul>
   *          <p>The <code>OR</code> relationship is the default behavior if this parameter is not
   *          included in the request.</p>
   * @public
   */
  LogicalOperator?: LogicalOperator;
}

/**
 * <p>A data type pair that consists of a <code>KeyName</code> and <code>Values</code> list
 *          that were used to find a profile returned in response to a <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html">SearchProfiles</a> request.
 *       </p>
 * @public
 */
export interface FoundByKeyValue {
  /**
   * <p>A searchable identifier of a customer profile.</p>
   * @public
   */
  KeyName?: string;

  /**
   * <p>A list of key values.</p>
   * @public
   */
  Values?: string[];
}

/**
 * <p>The standard profile of a customer.</p>
 * @public
 */
export interface Profile {
  /**
   * <p>The unique identifier of a customer profile.</p>
   * @public
   */
  ProfileId?: string;

  /**
   * <p>An account number that you have given to the customer.</p>
   * @public
   */
  AccountNumber?: string;

  /**
   * <p>Any additional information relevant to the customer’s profile.</p>
   * @public
   */
  AdditionalInformation?: string;

  /**
   * @deprecated
   *
   * <p>The type of profile used to describe the customer.</p>
   * @public
   */
  PartyType?: PartyType;

  /**
   * <p>The name of the customer’s business.</p>
   * @public
   */
  BusinessName?: string;

  /**
   * <p>The customer’s first name.</p>
   * @public
   */
  FirstName?: string;

  /**
   * <p>The customer’s middle name.</p>
   * @public
   */
  MiddleName?: string;

  /**
   * <p>The customer’s last name.</p>
   * @public
   */
  LastName?: string;

  /**
   * <p>The customer’s birth date. </p>
   * @public
   */
  BirthDate?: string;

  /**
   * @deprecated
   *
   * <p>The gender with which the customer identifies. </p>
   * @public
   */
  Gender?: Gender;

  /**
   * <p>The customer's phone number, which has not been specified as a mobile, home, or business
   *          number.</p>
   * @public
   */
  PhoneNumber?: string;

  /**
   * <p>The customer’s mobile phone number.</p>
   * @public
   */
  MobilePhoneNumber?: string;

  /**
   * <p>The customer’s home phone number.</p>
   * @public
   */
  HomePhoneNumber?: string;

  /**
   * <p>The customer’s home phone number.</p>
   * @public
   */
  BusinessPhoneNumber?: string;

  /**
   * <p>The customer’s email address, which has not been specified as a personal or business
   *          address. </p>
   * @public
   */
  EmailAddress?: string;

  /**
   * <p>The customer’s personal email address.</p>
   * @public
   */
  PersonalEmailAddress?: string;

  /**
   * <p>The customer’s business email address.</p>
   * @public
   */
  BusinessEmailAddress?: string;

  /**
   * <p>A generic address associated with the customer that is not mailing, shipping, or
   *          billing.</p>
   * @public
   */
  Address?: Address;

  /**
   * <p>The customer’s shipping address.</p>
   * @public
   */
  ShippingAddress?: Address;

  /**
   * <p>The customer’s mailing address.</p>
   * @public
   */
  MailingAddress?: Address;

  /**
   * <p>The customer’s billing address.</p>
   * @public
   */
  BillingAddress?: Address;

  /**
   * <p>A key value pair of attributes of a customer profile.</p>
   * @public
   */
  Attributes?: Record<string, string>;

  /**
   * <p>A list of items used to find a profile returned in a <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html">SearchProfiles</a> response.
   *          An item is a key-value(s) pair that matches an attribute in the profile.</p>
   *          <p>If the optional <code>AdditionalSearchKeys</code> parameter was included in the
   *          <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html">SearchProfiles</a> request, the <code>FoundByItems</code> list should be interpreted
   *          based on the <code>LogicalOperator</code> used in the request:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AND</code> - The profile included in the response matched all of the search
   *                keys specified in the request. The <code>FoundByItems</code> will include all of the
   *                key-value(s) pairs that were specified in the request (as this is a requirement of
   *                   <code>AND</code> search logic).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OR</code> - The profile included in the response matched at least one of the
   *                search keys specified in the request. The <code>FoundByItems</code> will include each
   *                of the key-value(s) pairs that the profile was found by.</p>
   *             </li>
   *          </ul>
   *          <p>The <code>OR</code> relationship is the default behavior if the
   *             <code>LogicalOperator</code> parameter is not included in the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html">SearchProfiles</a>
   *          request.</p>
   * @public
   */
  FoundByItems?: FoundByKeyValue[];

  /**
   * <p>An alternative to PartyType which accepts any string as input.</p>
   * @public
   */
  PartyTypeString?: string;

  /**
   * <p>An alternative to Gender which accepts any string as input.</p>
   * @public
   */
  GenderString?: string;
}

/**
 * @public
 */
export interface SearchProfilesResponse {
  /**
   * <p>The list of Profiles matching the search criteria.</p>
   * @public
   */
  Items?: Profile[];

  /**
   * <p>The pagination token from the previous SearchProfiles API call.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource that you're adding tags to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
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
   * <p>The ARN of the resource from which you are removing tags.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateCalculatedAttributeDefinitionRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique name of the calculated attribute.</p>
   * @public
   */
  CalculatedAttributeName: string | undefined;

  /**
   * <p>The display name of the calculated attribute.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>The description of the calculated attribute.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The conditions including range, object count, and threshold for the calculated
   *          attribute.</p>
   * @public
   */
  Conditions?: Conditions;
}

/**
 * @public
 */
export interface UpdateCalculatedAttributeDefinitionResponse {
  /**
   * <p>The unique name of the calculated attribute.</p>
   * @public
   */
  CalculatedAttributeName?: string;

  /**
   * <p>The display name of the calculated attribute.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>The description of the calculated attribute.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The timestamp of when the calculated attribute definition was created.</p>
   * @public
   */
  CreatedAt?: Date;

  /**
   * <p>The timestamp of when the calculated attribute definition was most recently
   *          edited.</p>
   * @public
   */
  LastUpdatedAt?: Date;

  /**
   * <p>The aggregation operation to perform for the calculated attribute.</p>
   * @public
   */
  Statistic?: Statistic;

  /**
   * <p>The conditions including range, object count, and threshold for the calculated
   *          attribute.</p>
   * @public
   */
  Conditions?: Conditions;

  /**
   * <p>The mathematical expression and a list of attribute items specified in that
   *          expression.</p>
   * @public
   */
  AttributeDetails?: AttributeDetails;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface UpdateDomainRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The default number of days until the data within the domain expires.</p>
   * @public
   */
  DefaultExpirationDays?: number;

  /**
   * <p>The default encryption key, which is an AWS managed key, is used when no specific type
   *          of encryption key is specified. It is used to encrypt all data before it is placed in
   *          permanent or semi-permanent storage. If specified as an empty string, it will clear any
   *          existing value.</p>
   * @public
   */
  DefaultEncryptionKey?: string;

  /**
   * <p>The URL of the SQS dead letter queue, which is used for reporting errors associated with
   *          ingesting data from third party applications. If specified as an empty string, it will
   *          clear any existing value. You must set up a policy on the DeadLetterQueue for the
   *          SendMessage operation to enable Amazon Connect Customer Profiles to send messages to the
   *          DeadLetterQueue.</p>
   * @public
   */
  DeadLetterQueueUrl?: string;

  /**
   * <p>The process of matching duplicate profiles. If <code>Matching</code> = <code>true</code>, Amazon Connect Customer Profiles starts a weekly
   * batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every
   * Saturday at 12AM UTC to detect duplicate profiles in your domains. </p>
   *          <p>After the Identity Resolution Job completes, use the
   * <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>
   * API to return and review the results. Or, if you have configured <code>ExportingConfig</code> in the <code>MatchingRequest</code>, you can download the results from
   * S3.</p>
   * @public
   */
  Matching?: MatchingRequest;

  /**
   * <p>The process of matching duplicate profiles using the rule-Based matching. If
   *             <code>RuleBasedMatching</code> = true, Amazon Connect Customer Profiles will start
   *          to match and merge your profiles according to your configuration in the
   *             <code>RuleBasedMatchingRequest</code>. You can use the <code>ListRuleBasedMatches</code>
   *          and <code>GetSimilarProfiles</code> API to return and review the results. Also, if you have
   *          configured <code>ExportingConfig</code> in the <code>RuleBasedMatchingRequest</code>, you
   *          can download the results from S3.</p>
   * @public
   */
  RuleBasedMatching?: RuleBasedMatchingRequest;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface UpdateDomainResponse {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The default number of days until the data within the domain expires.</p>
   * @public
   */
  DefaultExpirationDays?: number;

  /**
   * <p>The default encryption key, which is an AWS managed key, is used when no specific type
   *          of encryption key is specified. It is used to encrypt all data before it is placed in
   *          permanent or semi-permanent storage.</p>
   * @public
   */
  DefaultEncryptionKey?: string;

  /**
   * <p>The URL of the SQS dead letter queue, which is used for reporting errors associated with
   *          ingesting data from third party applications.</p>
   * @public
   */
  DeadLetterQueueUrl?: string;

  /**
   * <p>The process of matching duplicate profiles. If <code>Matching</code> = <code>true</code>, Amazon Connect Customer Profiles starts a weekly
   * batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every
   * Saturday at 12AM UTC to detect duplicate profiles in your domains. </p>
   *          <p>After the Identity Resolution Job completes, use the
   * <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>
   * API to return and review the results. Or, if you have configured <code>ExportingConfig</code> in the <code>MatchingRequest</code>, you can download the results from
   * S3.</p>
   * @public
   */
  Matching?: MatchingResponse;

  /**
   * <p>The process of matching duplicate profiles using the rule-Based matching. If
   *             <code>RuleBasedMatching</code> = true, Amazon Connect Customer Profiles will start
   *          to match and merge your profiles according to your configuration in the
   *             <code>RuleBasedMatchingRequest</code>. You can use the <code>ListRuleBasedMatches</code>
   *          and <code>GetSimilarProfiles</code> API to return and review the results. Also, if you have
   *          configured <code>ExportingConfig</code> in the <code>RuleBasedMatchingRequest</code>, you
   *          can download the results from S3.</p>
   * @public
   */
  RuleBasedMatching?: RuleBasedMatchingResponse;

  /**
   * <p>The timestamp of when the domain was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the domain was most recently edited.</p>
   * @public
   */
  LastUpdatedAt: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * <p>Updates associated with the address properties of a customer profile.</p>
 * @public
 */
export interface UpdateAddress {
  /**
   * <p>The first line of a customer address.</p>
   * @public
   */
  Address1?: string;

  /**
   * <p>The second line of a customer address.</p>
   * @public
   */
  Address2?: string;

  /**
   * <p>The third line of a customer address.</p>
   * @public
   */
  Address3?: string;

  /**
   * <p>The fourth line of a customer address.</p>
   * @public
   */
  Address4?: string;

  /**
   * <p>The city in which a customer lives.</p>
   * @public
   */
  City?: string;

  /**
   * <p>The county in which a customer lives.</p>
   * @public
   */
  County?: string;

  /**
   * <p>The state in which a customer lives.</p>
   * @public
   */
  State?: string;

  /**
   * <p>The province in which a customer lives.</p>
   * @public
   */
  Province?: string;

  /**
   * <p>The country in which a customer lives.</p>
   * @public
   */
  Country?: string;

  /**
   * <p>The postal code of a customer address.</p>
   * @public
   */
  PostalCode?: string;
}

/**
 * @public
 */
export interface UpdateProfileRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique identifier of a customer profile.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>Any additional information relevant to the customer’s profile.</p>
   * @public
   */
  AdditionalInformation?: string;

  /**
   * <p>An account number that you have given to the customer.</p>
   * @public
   */
  AccountNumber?: string;

  /**
   * @deprecated
   *
   * <p>The type of profile used to describe the customer.</p>
   * @public
   */
  PartyType?: PartyType;

  /**
   * <p>The name of the customer’s business.</p>
   * @public
   */
  BusinessName?: string;

  /**
   * <p>The customer’s first name.</p>
   * @public
   */
  FirstName?: string;

  /**
   * <p>The customer’s middle name.</p>
   * @public
   */
  MiddleName?: string;

  /**
   * <p>The customer’s last name.</p>
   * @public
   */
  LastName?: string;

  /**
   * <p>The customer’s birth date. </p>
   * @public
   */
  BirthDate?: string;

  /**
   * @deprecated
   *
   * <p>The gender with which the customer identifies. </p>
   * @public
   */
  Gender?: Gender;

  /**
   * <p>The customer’s phone number, which has not been specified as a mobile, home, or business
   *          number. </p>
   * @public
   */
  PhoneNumber?: string;

  /**
   * <p>The customer’s mobile phone number.</p>
   * @public
   */
  MobilePhoneNumber?: string;

  /**
   * <p>The customer’s home phone number.</p>
   * @public
   */
  HomePhoneNumber?: string;

  /**
   * <p>The customer’s business phone number.</p>
   * @public
   */
  BusinessPhoneNumber?: string;

  /**
   * <p>The customer’s email address, which has not been specified as a personal or business
   *          address. </p>
   * @public
   */
  EmailAddress?: string;

  /**
   * <p>The customer’s personal email address.</p>
   * @public
   */
  PersonalEmailAddress?: string;

  /**
   * <p>The customer’s business email address.</p>
   * @public
   */
  BusinessEmailAddress?: string;

  /**
   * <p>A generic address associated with the customer that is not mailing, shipping, or
   *          billing.</p>
   * @public
   */
  Address?: UpdateAddress;

  /**
   * <p>The customer’s shipping address.</p>
   * @public
   */
  ShippingAddress?: UpdateAddress;

  /**
   * <p>The customer’s mailing address.</p>
   * @public
   */
  MailingAddress?: UpdateAddress;

  /**
   * <p>The customer’s billing address.</p>
   * @public
   */
  BillingAddress?: UpdateAddress;

  /**
   * <p>A key value pair of attributes of a customer profile.</p>
   * @public
   */
  Attributes?: Record<string, string>;

  /**
   * <p>An alternative to <code>PartyType</code> which accepts any string as input.</p>
   * @public
   */
  PartyTypeString?: string;

  /**
   * <p>An alternative to <code>Gender</code> which accepts any string as input.</p>
   * @public
   */
  GenderString?: string;
}

/**
 * @public
 */
export interface UpdateProfileResponse {
  /**
   * <p>The unique identifier of a customer profile.</p>
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @internal
 */
export const AddressFilterSensitiveLog = (obj: Address): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FlowDefinitionFilterSensitiveLog = (obj: FlowDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppflowIntegrationFilterSensitiveLog = (obj: AppflowIntegration): any => ({
  ...obj,
  ...(obj.FlowDefinition && { FlowDefinition: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AttributeDetailsFilterSensitiveLog = (obj: AttributeDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCalculatedAttributeDefinitionItemFilterSensitiveLog = (
  obj: ListCalculatedAttributeDefinitionItem
): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConditionsFilterSensitiveLog = (obj: Conditions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCalculatedAttributeDefinitionRequestFilterSensitiveLog = (
  obj: CreateCalculatedAttributeDefinitionRequest
): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.AttributeDetails && { AttributeDetails: SENSITIVE_STRING }),
  ...(obj.Conditions && { Conditions: SENSITIVE_STRING }),
  ...(obj.Statistic && { Statistic: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateCalculatedAttributeDefinitionResponseFilterSensitiveLog = (
  obj: CreateCalculatedAttributeDefinitionResponse
): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.AttributeDetails && { AttributeDetails: SENSITIVE_STRING }),
  ...(obj.Conditions && { Conditions: SENSITIVE_STRING }),
  ...(obj.Statistic && { Statistic: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IntegrationConfigFilterSensitiveLog = (obj: IntegrationConfig): any => ({
  ...obj,
  ...(obj.AppflowIntegration && { AppflowIntegration: AppflowIntegrationFilterSensitiveLog(obj.AppflowIntegration) }),
});

/**
 * @internal
 */
export const CreateIntegrationWorkflowRequestFilterSensitiveLog = (obj: CreateIntegrationWorkflowRequest): any => ({
  ...obj,
  ...(obj.IntegrationConfig && { IntegrationConfig: IntegrationConfigFilterSensitiveLog(obj.IntegrationConfig) }),
});

/**
 * @internal
 */
export const CreateProfileRequestFilterSensitiveLog = (obj: CreateProfileRequest): any => ({
  ...obj,
  ...(obj.AccountNumber && { AccountNumber: SENSITIVE_STRING }),
  ...(obj.AdditionalInformation && { AdditionalInformation: SENSITIVE_STRING }),
  ...(obj.PartyType && { PartyType: SENSITIVE_STRING }),
  ...(obj.BusinessName && { BusinessName: SENSITIVE_STRING }),
  ...(obj.FirstName && { FirstName: SENSITIVE_STRING }),
  ...(obj.MiddleName && { MiddleName: SENSITIVE_STRING }),
  ...(obj.LastName && { LastName: SENSITIVE_STRING }),
  ...(obj.BirthDate && { BirthDate: SENSITIVE_STRING }),
  ...(obj.Gender && { Gender: SENSITIVE_STRING }),
  ...(obj.PhoneNumber && { PhoneNumber: SENSITIVE_STRING }),
  ...(obj.MobilePhoneNumber && { MobilePhoneNumber: SENSITIVE_STRING }),
  ...(obj.HomePhoneNumber && { HomePhoneNumber: SENSITIVE_STRING }),
  ...(obj.BusinessPhoneNumber && { BusinessPhoneNumber: SENSITIVE_STRING }),
  ...(obj.EmailAddress && { EmailAddress: SENSITIVE_STRING }),
  ...(obj.PersonalEmailAddress && { PersonalEmailAddress: SENSITIVE_STRING }),
  ...(obj.BusinessEmailAddress && { BusinessEmailAddress: SENSITIVE_STRING }),
  ...(obj.Address && { Address: SENSITIVE_STRING }),
  ...(obj.ShippingAddress && { ShippingAddress: SENSITIVE_STRING }),
  ...(obj.MailingAddress && { MailingAddress: SENSITIVE_STRING }),
  ...(obj.BillingAddress && { BillingAddress: SENSITIVE_STRING }),
  ...(obj.Attributes && { Attributes: SENSITIVE_STRING }),
  ...(obj.PartyTypeString && { PartyTypeString: SENSITIVE_STRING }),
  ...(obj.GenderString && { GenderString: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DetectProfileObjectTypeRequestFilterSensitiveLog = (obj: DetectProfileObjectTypeRequest): any => ({
  ...obj,
  ...(obj.Objects && { Objects: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DetectedProfileObjectTypeFilterSensitiveLog = (obj: DetectedProfileObjectType): any => ({
  ...obj,
  ...(obj.Fields && { Fields: SENSITIVE_STRING }),
  ...(obj.Keys && { Keys: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DetectProfileObjectTypeResponseFilterSensitiveLog = (obj: DetectProfileObjectTypeResponse): any => ({
  ...obj,
  ...(obj.DetectedProfileObjectTypes && {
    DetectedProfileObjectTypes: obj.DetectedProfileObjectTypes.map((item) =>
      DetectedProfileObjectTypeFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const GetCalculatedAttributeDefinitionResponseFilterSensitiveLog = (
  obj: GetCalculatedAttributeDefinitionResponse
): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.Statistic && { Statistic: SENSITIVE_STRING }),
  ...(obj.Conditions && { Conditions: SENSITIVE_STRING }),
  ...(obj.AttributeDetails && { AttributeDetails: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetProfileObjectTypeResponseFilterSensitiveLog = (obj: GetProfileObjectTypeResponse): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.Fields && { Fields: SENSITIVE_STRING }),
  ...(obj.Keys && { Keys: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetProfileObjectTypeTemplateResponseFilterSensitiveLog = (
  obj: GetProfileObjectTypeTemplateResponse
): any => ({
  ...obj,
  ...(obj.Fields && { Fields: SENSITIVE_STRING }),
  ...(obj.Keys && { Keys: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListCalculatedAttributeDefinitionsResponseFilterSensitiveLog = (
  obj: ListCalculatedAttributeDefinitionsResponse
): any => ({
  ...obj,
  ...(obj.Items && { Items: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListProfileObjectsItemFilterSensitiveLog = (obj: ListProfileObjectsItem): any => ({
  ...obj,
  ...(obj.Object && { Object: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListProfileObjectsResponseFilterSensitiveLog = (obj: ListProfileObjectsResponse): any => ({
  ...obj,
  ...(obj.Items && { Items: obj.Items.map((item) => ListProfileObjectsItemFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListProfileObjectTypesResponseFilterSensitiveLog = (obj: ListProfileObjectTypesResponse): any => ({
  ...obj,
  ...(obj.Items && { Items: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutIntegrationRequestFilterSensitiveLog = (obj: PutIntegrationRequest): any => ({
  ...obj,
  ...(obj.FlowDefinition && { FlowDefinition: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutProfileObjectRequestFilterSensitiveLog = (obj: PutProfileObjectRequest): any => ({
  ...obj,
  ...(obj.Object && { Object: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutProfileObjectTypeRequestFilterSensitiveLog = (obj: PutProfileObjectTypeRequest): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.Fields && { Fields: SENSITIVE_STRING }),
  ...(obj.Keys && { Keys: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutProfileObjectTypeResponseFilterSensitiveLog = (obj: PutProfileObjectTypeResponse): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.Fields && { Fields: SENSITIVE_STRING }),
  ...(obj.Keys && { Keys: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ProfileFilterSensitiveLog = (obj: Profile): any => ({
  ...obj,
  ...(obj.AccountNumber && { AccountNumber: SENSITIVE_STRING }),
  ...(obj.AdditionalInformation && { AdditionalInformation: SENSITIVE_STRING }),
  ...(obj.PartyType && { PartyType: SENSITIVE_STRING }),
  ...(obj.BusinessName && { BusinessName: SENSITIVE_STRING }),
  ...(obj.FirstName && { FirstName: SENSITIVE_STRING }),
  ...(obj.MiddleName && { MiddleName: SENSITIVE_STRING }),
  ...(obj.LastName && { LastName: SENSITIVE_STRING }),
  ...(obj.BirthDate && { BirthDate: SENSITIVE_STRING }),
  ...(obj.Gender && { Gender: SENSITIVE_STRING }),
  ...(obj.PhoneNumber && { PhoneNumber: SENSITIVE_STRING }),
  ...(obj.MobilePhoneNumber && { MobilePhoneNumber: SENSITIVE_STRING }),
  ...(obj.HomePhoneNumber && { HomePhoneNumber: SENSITIVE_STRING }),
  ...(obj.BusinessPhoneNumber && { BusinessPhoneNumber: SENSITIVE_STRING }),
  ...(obj.EmailAddress && { EmailAddress: SENSITIVE_STRING }),
  ...(obj.PersonalEmailAddress && { PersonalEmailAddress: SENSITIVE_STRING }),
  ...(obj.BusinessEmailAddress && { BusinessEmailAddress: SENSITIVE_STRING }),
  ...(obj.Address && { Address: SENSITIVE_STRING }),
  ...(obj.ShippingAddress && { ShippingAddress: SENSITIVE_STRING }),
  ...(obj.MailingAddress && { MailingAddress: SENSITIVE_STRING }),
  ...(obj.BillingAddress && { BillingAddress: SENSITIVE_STRING }),
  ...(obj.Attributes && { Attributes: SENSITIVE_STRING }),
  ...(obj.PartyTypeString && { PartyTypeString: SENSITIVE_STRING }),
  ...(obj.GenderString && { GenderString: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SearchProfilesResponseFilterSensitiveLog = (obj: SearchProfilesResponse): any => ({
  ...obj,
  ...(obj.Items && { Items: obj.Items.map((item) => ProfileFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateCalculatedAttributeDefinitionRequestFilterSensitiveLog = (
  obj: UpdateCalculatedAttributeDefinitionRequest
): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.Conditions && { Conditions: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateCalculatedAttributeDefinitionResponseFilterSensitiveLog = (
  obj: UpdateCalculatedAttributeDefinitionResponse
): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.Statistic && { Statistic: SENSITIVE_STRING }),
  ...(obj.Conditions && { Conditions: SENSITIVE_STRING }),
  ...(obj.AttributeDetails && { AttributeDetails: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAddressFilterSensitiveLog = (obj: UpdateAddress): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateProfileRequestFilterSensitiveLog = (obj: UpdateProfileRequest): any => ({
  ...obj,
  ...(obj.AdditionalInformation && { AdditionalInformation: SENSITIVE_STRING }),
  ...(obj.AccountNumber && { AccountNumber: SENSITIVE_STRING }),
  ...(obj.PartyType && { PartyType: SENSITIVE_STRING }),
  ...(obj.BusinessName && { BusinessName: SENSITIVE_STRING }),
  ...(obj.FirstName && { FirstName: SENSITIVE_STRING }),
  ...(obj.MiddleName && { MiddleName: SENSITIVE_STRING }),
  ...(obj.LastName && { LastName: SENSITIVE_STRING }),
  ...(obj.BirthDate && { BirthDate: SENSITIVE_STRING }),
  ...(obj.Gender && { Gender: SENSITIVE_STRING }),
  ...(obj.PhoneNumber && { PhoneNumber: SENSITIVE_STRING }),
  ...(obj.MobilePhoneNumber && { MobilePhoneNumber: SENSITIVE_STRING }),
  ...(obj.HomePhoneNumber && { HomePhoneNumber: SENSITIVE_STRING }),
  ...(obj.BusinessPhoneNumber && { BusinessPhoneNumber: SENSITIVE_STRING }),
  ...(obj.EmailAddress && { EmailAddress: SENSITIVE_STRING }),
  ...(obj.PersonalEmailAddress && { PersonalEmailAddress: SENSITIVE_STRING }),
  ...(obj.BusinessEmailAddress && { BusinessEmailAddress: SENSITIVE_STRING }),
  ...(obj.Address && { Address: SENSITIVE_STRING }),
  ...(obj.ShippingAddress && { ShippingAddress: SENSITIVE_STRING }),
  ...(obj.MailingAddress && { MailingAddress: SENSITIVE_STRING }),
  ...(obj.BillingAddress && { BillingAddress: SENSITIVE_STRING }),
  ...(obj.Attributes && { Attributes: SENSITIVE_STRING }),
  ...(obj.PartyTypeString && { PartyTypeString: SENSITIVE_STRING }),
  ...(obj.GenderString && { GenderString: SENSITIVE_STRING }),
});
