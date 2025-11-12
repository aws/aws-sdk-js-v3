// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CustomerProfilesServiceException as __BaseException } from "./CustomerProfilesServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 * @enum
 */
export const ActionType = {
  ADDED_PROFILE_KEY: "ADDED_PROFILE_KEY",
  CREATED: "CREATED",
  DELETED_BY_CUSTOMER: "DELETED_BY_CUSTOMER",
  DELETED_BY_MERGE: "DELETED_BY_MERGE",
  DELETED_PROFILE_KEY: "DELETED_PROFILE_KEY",
  EXPIRED: "EXPIRED",
  INGESTED: "INGESTED",
  MERGED: "MERGED",
  UPDATED: "UPDATED",
} as const;

/**
 * @public
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

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
  KeyName?: string | undefined;

  /**
   * <p>A list of key values.</p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * <p>The input you provided is invalid.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
  Message?: string | undefined;
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
  Message?: string | undefined;
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
  Message?: string | undefined;
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
  Address1?: string | undefined;

  /**
   * <p>The second line of a customer address.</p>
   * @public
   */
  Address2?: string | undefined;

  /**
   * <p>The third line of a customer address.</p>
   * @public
   */
  Address3?: string | undefined;

  /**
   * <p>The fourth line of a customer address.</p>
   * @public
   */
  Address4?: string | undefined;

  /**
   * <p>The city in which a customer lives.</p>
   * @public
   */
  City?: string | undefined;

  /**
   * <p>The county in which a customer lives.</p>
   * @public
   */
  County?: string | undefined;

  /**
   * <p>The state in which a customer lives.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The province in which a customer lives.</p>
   * @public
   */
  Province?: string | undefined;

  /**
   * <p>The country in which a customer lives.</p>
   * @public
   */
  Country?: string | undefined;

  /**
   * <p>The postal code of a customer address.</p>
   * @public
   */
  PostalCode?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StringDimensionType = {
  BEGINS_WITH: "BEGINS_WITH",
  CONTAINS: "CONTAINS",
  ENDS_WITH: "ENDS_WITH",
  EXCLUSIVE: "EXCLUSIVE",
  INCLUSIVE: "INCLUSIVE",
} as const;

/**
 * @public
 */
export type StringDimensionType = (typeof StringDimensionType)[keyof typeof StringDimensionType];

/**
 * <p>Object to hold the dimensions of a profile's fields to segment on.</p>
 * @public
 */
export interface ProfileDimension {
  /**
   * <p>The action to segment on.</p>
   * @public
   */
  DimensionType: StringDimensionType | undefined;

  /**
   * <p>The values to apply the DimensionType on.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * <p>Object that segments on Customer Profile's address object.</p>
 * @public
 */
export interface AddressDimension {
  /**
   * <p>The city belonging to the address.</p>
   * @public
   */
  City?: ProfileDimension | undefined;

  /**
   * <p>The country belonging to the address.</p>
   * @public
   */
  Country?: ProfileDimension | undefined;

  /**
   * <p>The county belonging to the address.</p>
   * @public
   */
  County?: ProfileDimension | undefined;

  /**
   * <p>The postal code belonging to the address.</p>
   * @public
   */
  PostalCode?: ProfileDimension | undefined;

  /**
   * <p>The province belonging to the address.</p>
   * @public
   */
  Province?: ProfileDimension | undefined;

  /**
   * <p>The state belonging to the address.</p>
   * @public
   */
  State?: ProfileDimension | undefined;
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
  DatetimeTypeFieldName?: string | undefined;
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
  BucketPrefix?: string | undefined;
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
  EnableDynamicFieldUpdate?: boolean | undefined;

  /**
   * <p>Indicates whether Amazon AppFlow includes deleted files in the flow run.</p>
   * @public
   */
  IncludeDeletedRecords?: boolean | undefined;
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
  Marketo?: MarketoSourceProperties | undefined;

  /**
   * <p>The properties that are applied when Amazon S3 is being used as the flow source.</p>
   * @public
   */
  S3?: S3SourceProperties | undefined;

  /**
   * <p>The properties that are applied when Salesforce is being used as a source.</p>
   * @public
   */
  Salesforce?: SalesforceSourceProperties | undefined;

  /**
   * <p>The properties that are applied when ServiceNow is being used as a source.</p>
   * @public
   */
  ServiceNow?: ServiceNowSourceProperties | undefined;

  /**
   * <p>The properties that are applied when using Zendesk as a flow source.</p>
   * @public
   */
  Zendesk?: ZendeskSourceProperties | undefined;
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
  ConnectorProfileName?: string | undefined;

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
  IncrementalPullConfig?: IncrementalPullConfig | undefined;

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
  Marketo?: MarketoConnectorOperator | undefined;

  /**
   * <p>The operation to be performed on the provided Amazon S3 source fields.</p>
   * @public
   */
  S3?: S3ConnectorOperator | undefined;

  /**
   * <p>The operation to be performed on the provided Salesforce source fields.</p>
   * @public
   */
  Salesforce?: SalesforceConnectorOperator | undefined;

  /**
   * <p>The operation to be performed on the provided ServiceNow source fields.</p>
   * @public
   */
  ServiceNow?: ServiceNowConnectorOperator | undefined;

  /**
   * <p>The operation to be performed on the provided Zendesk source fields.</p>
   * @public
   */
  Zendesk?: ZendeskConnectorOperator | undefined;
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
  ConnectorOperator?: ConnectorOperator | undefined;

  /**
   * <p>A field in a destination connector, or a field value against which Amazon AppFlow validates a
   *          source field.</p>
   * @public
   */
  DestinationField?: string | undefined;

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
  TaskProperties?: Partial<Record<OperatorPropertiesKeys, string>> | undefined;

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
  DataPullMode?: DataPullMode | undefined;

  /**
   * <p>Specifies the scheduled start time for a scheduled-trigger flow.</p>
   * @public
   */
  ScheduleStartTime?: Date | undefined;

  /**
   * <p>Specifies the scheduled end time for a scheduled-trigger flow.</p>
   * @public
   */
  ScheduleEndTime?: Date | undefined;

  /**
   * <p>Specifies the time zone used when referring to the date and time of a
   *          scheduled-triggered flow, such as America/New_York.</p>
   * @public
   */
  Timezone?: string | undefined;

  /**
   * <p>Specifies the optional offset that is added to the time interval for a
   *          schedule-triggered flow.</p>
   * @public
   */
  ScheduleOffset?: number | undefined;

  /**
   * <p>Specifies the date range for the records to import from the connector in the first flow
   *          run.</p>
   * @public
   */
  FirstExecutionFrom?: Date | undefined;
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
  Scheduled?: ScheduledTriggerProperties | undefined;
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
  TriggerProperties?: TriggerProperties | undefined;
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
  Description?: string | undefined;

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
  Batches?: Batch[] | undefined;
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
  RoleArn?: string | undefined;
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
export const AttributeDimensionType = {
  AFTER: "AFTER",
  BEFORE: "BEFORE",
  BEGINS_WITH: "BEGINS_WITH",
  BETWEEN: "BETWEEN",
  CONTAINS: "CONTAINS",
  ENDS_WITH: "ENDS_WITH",
  EQUAL: "EQUAL",
  EXCLUSIVE: "EXCLUSIVE",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL: "GREATER_THAN_OR_EQUAL",
  INCLUSIVE: "INCLUSIVE",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL: "LESS_THAN_OR_EQUAL",
  NOT_BETWEEN: "NOT_BETWEEN",
  ON: "ON",
} as const;

/**
 * @public
 */
export type AttributeDimensionType = (typeof AttributeDimensionType)[keyof typeof AttributeDimensionType];

/**
 * <p>Object that segments on various Customer Profile's fields.</p>
 * @public
 */
export interface AttributeDimension {
  /**
   * <p>The action to segment with.</p>
   * @public
   */
  DimensionType: AttributeDimensionType | undefined;

  /**
   * <p>The values to apply the DimensionType on.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const FilterDimensionType = {
  AFTER: "AFTER",
  BEFORE: "BEFORE",
  BEGINS_WITH: "BEGINS_WITH",
  BETWEEN: "BETWEEN",
  CONTAINS: "CONTAINS",
  ENDS_WITH: "ENDS_WITH",
  EQUAL: "EQUAL",
  EXCLUSIVE: "EXCLUSIVE",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL: "GREATER_THAN_OR_EQUAL",
  INCLUSIVE: "INCLUSIVE",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL: "LESS_THAN_OR_EQUAL",
  NOT_BETWEEN: "NOT_BETWEEN",
  ON: "ON",
} as const;

/**
 * @public
 */
export type FilterDimensionType = (typeof FilterDimensionType)[keyof typeof FilterDimensionType];

/**
 * <p>Object that defines how to filter the incoming objects for the calculated
 *          attribute.</p>
 * @public
 */
export interface FilterAttributeDimension {
  /**
   * <p>The action to filter with.</p>
   * @public
   */
  DimensionType: FilterDimensionType | undefined;

  /**
   * <p>The values to apply the DimensionType on.</p>
   * @public
   */
  Values: string[] | undefined;
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
  Address?: string[] | undefined;

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
  PhoneNumber?: string[] | undefined;

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
  EmailAddress?: string[] | undefined;
}

/**
 * <p>List containing the values for the given attribute.</p>
 * @public
 */
export interface AttributeValueItem {
  /**
   * <p>An individual value belonging to the given attribute.</p>
   * @public
   */
  Value?: string | undefined;
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
  SourceName?: string | undefined;
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
  Consolidation?: Consolidation | undefined;

  /**
   * <p>How the auto-merging process should resolve conflicts between different profiles. For
   *          example, if Profile A and Profile B have the same <code>FirstName</code> and
   *             <code>LastName</code> (and that is the matching criteria), which
   *             <code>EmailAddress</code> should be used? </p>
   * @public
   */
  ConflictResolution?: ConflictResolution | undefined;

  /**
   * <p>A number between 0 and 1 that represents the minimum confidence score required for
   *          profiles within a matching group to be merged during the auto-merge process. A higher score
   *          means higher similarity required to merge profiles. </p>
   * @public
   */
  MinAllowedConfidenceScoreForMerging?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const RangeUnit = {
  DAYS: "DAYS",
} as const;

/**
 * @public
 */
export type RangeUnit = (typeof RangeUnit)[keyof typeof RangeUnit];

/**
 * <p>Overrides the original range on a calculated attribute definition.</p>
 * @public
 */
export interface RangeOverride {
  /**
   * <p>The start time of when to include objects.</p>
   * @public
   */
  Start: number | undefined;

  /**
   * <p>The end time of when to include objects.</p>
   * @public
   */
  End?: number | undefined;

  /**
   * <p>The unit for start and end.</p>
   * @public
   */
  Unit: RangeUnit | undefined;
}

/**
 * <p>An object to override the original condition block of a calculated attribute.</p>
 * @public
 */
export interface ConditionOverrides {
  /**
   * <p>The relative time period over which data is included in the aggregation for this
   *          override.</p>
   * @public
   */
  Range?: RangeOverride | undefined;
}

/**
 * @public
 */
export interface BatchGetCalculatedAttributeForProfileRequest {
  /**
   * <p>The unique name of the calculated attribute.</p>
   * @public
   */
  CalculatedAttributeName: string | undefined;

  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>List of unique identifiers for customer profiles to retrieve.</p>
   * @public
   */
  ProfileIds: string[] | undefined;

  /**
   * <p>Overrides the condition block within the original calculated attribute
   *          definition.</p>
   * @public
   */
  ConditionOverrides?: ConditionOverrides | undefined;
}

/**
 * <p>The object containing the values of a single calculated attribute value.</p>
 * @public
 */
export interface CalculatedAttributeValue {
  /**
   * <p>The unique name of the calculated attribute.</p>
   * @public
   */
  CalculatedAttributeName?: string | undefined;

  /**
   * <p>The display name of the calculated attribute.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>Indicates whether the calculated attribute's value is based on partial data. If the data
   *          is partial, it is set to true.</p>
   * @public
   */
  IsDataPartial?: string | undefined;

  /**
   * <p>The profile id belonging to this calculated attribute value.</p>
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * <p>The value of the calculated attribute.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The timestamp of the newest object included in the calculated attribute
   *          calculation.</p>
   * @public
   */
  LastObjectTimestamp?: Date | undefined;
}

/**
 * <p>Error object describing why a specific profile and calculated attribute failed.</p>
 * @public
 */
export interface BatchGetCalculatedAttributeForProfileError {
  /**
   * <p>Status code for why a specific profile and calculated attribute failed.</p>
   * @public
   */
  Code: string | undefined;

  /**
   * <p>Message describing why a specific profile and calculated attribute failed.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>The profile id that failed.</p>
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @public
 */
export interface BatchGetCalculatedAttributeForProfileResponse {
  /**
   * <p>List of errors for calculated attribute values that could not be retrieved.</p>
   * @public
   */
  Errors?: BatchGetCalculatedAttributeForProfileError[] | undefined;

  /**
   * <p>List of calculated attribute values retrieved.</p>
   * @public
   */
  CalculatedAttributeValues?: CalculatedAttributeValue[] | undefined;

  /**
   * <p>Overrides the condition block within the original calculated attribute
   *          definition.</p>
   * @public
   */
  ConditionOverrides?: ConditionOverrides | undefined;
}

/**
 * @public
 */
export interface BatchGetProfileRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>List of unique identifiers for customer profiles to retrieve.</p>
   * @public
   */
  ProfileIds: string[] | undefined;
}

/**
 * <p>Error object describing why a specific profile failed.</p>
 * @public
 */
export interface BatchGetProfileError {
  /**
   * <p>Status code for why a specific profile failed.</p>
   * @public
   */
  Code: string | undefined;

  /**
   * <p>Message describing why a specific profile failed.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>The profile id that failed.</p>
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ContactType = {
  BUSINESS_EMAIL_ADDRESS: "BusinessEmailAddress",
  BUSINESS_PHONE_NUMBER: "BusinessPhoneNumber",
  EMAIL_ADDRESS: "EmailAddress",
  HOME_PHONE_NUMBER: "HomePhoneNumber",
  MOBILE_PHONE_NUMBER: "MobilePhoneNumber",
  PERSONAL_EMAIL_ADDRESS: "PersonalEmailAddress",
  PHONE_NUMBER: "PhoneNumber",
} as const;

/**
 * @public
 */
export type ContactType = (typeof ContactType)[keyof typeof ContactType];

/**
 * <p>Object that defines users contact preference.</p>
 * @public
 */
export interface ContactPreference {
  /**
   * <p>A searchable, unique identifier of a customer profile.</p>
   * @public
   */
  KeyName?: string | undefined;

  /**
   * <p>The key value used to look up profile based off the keyName.</p>
   * @public
   */
  KeyValue?: string | undefined;

  /**
   * <p>The unique identifier of a customer profile.</p>
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * <p>The contact type used for engagement. For example: HomePhoneNumber,
   *          PersonalEmailAddress.</p>
   * @public
   */
  ContactType?: ContactType | undefined;
}

/**
 * <p>Object that defines users preferred methods of engagement.</p>
 * @public
 */
export interface EngagementPreferences {
  /**
   * <p>A list of phone-related contact preferences</p>
   * @public
   */
  Phone?: ContactPreference[] | undefined;

  /**
   * <p>A list of email-related contact preferences</p>
   * @public
   */
  Email?: ContactPreference[] | undefined;
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
  KeyName?: string | undefined;

  /**
   * <p>A list of key values.</p>
   * @public
   */
  Values?: string[] | undefined;
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
 * @enum
 */
export const ProfileType = {
  ACCOUNT_PROFILE: "ACCOUNT_PROFILE",
  PROFILE: "PROFILE",
} as const;

/**
 * @public
 */
export type ProfileType = (typeof ProfileType)[keyof typeof ProfileType];

/**
 * <p>The standard profile of a customer.</p>
 * @public
 */
export interface Profile {
  /**
   * <p>The unique identifier of a customer profile.</p>
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * <p>An account number that you have assigned to the customer.</p>
   * @public
   */
  AccountNumber?: string | undefined;

  /**
   * <p>Any additional information relevant to the customer’s profile.</p>
   * @public
   */
  AdditionalInformation?: string | undefined;

  /**
   * <p>The type of profile used to describe the customer.</p>
   *
   * @deprecated deprecated
   * @public
   */
  PartyType?: PartyType | undefined;

  /**
   * <p>The name of the customer’s business.</p>
   * @public
   */
  BusinessName?: string | undefined;

  /**
   * <p>The customer’s first name.</p>
   * @public
   */
  FirstName?: string | undefined;

  /**
   * <p>The customer’s middle name.</p>
   * @public
   */
  MiddleName?: string | undefined;

  /**
   * <p>The customer’s last name.</p>
   * @public
   */
  LastName?: string | undefined;

  /**
   * <p>The customer’s birth date. </p>
   * @public
   */
  BirthDate?: string | undefined;

  /**
   * <p>The gender with which the customer identifies. </p>
   *
   * @deprecated deprecated
   * @public
   */
  Gender?: Gender | undefined;

  /**
   * <p>The customer's phone number, which has not been specified as a mobile, home, or business
   *          number.</p>
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * <p>The customer’s mobile phone number.</p>
   * @public
   */
  MobilePhoneNumber?: string | undefined;

  /**
   * <p>The customer’s home phone number.</p>
   * @public
   */
  HomePhoneNumber?: string | undefined;

  /**
   * <p>The customer’s home phone number.</p>
   * @public
   */
  BusinessPhoneNumber?: string | undefined;

  /**
   * <p>The customer’s email address, which has not been specified as a personal or business
   *          address. </p>
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * <p>The customer’s personal email address.</p>
   * @public
   */
  PersonalEmailAddress?: string | undefined;

  /**
   * <p>The customer’s business email address.</p>
   * @public
   */
  BusinessEmailAddress?: string | undefined;

  /**
   * <p>A generic address associated with the customer that is not mailing, shipping, or
   *          billing.</p>
   * @public
   */
  Address?: Address | undefined;

  /**
   * <p>The customer’s shipping address.</p>
   * @public
   */
  ShippingAddress?: Address | undefined;

  /**
   * <p>The customer’s mailing address.</p>
   * @public
   */
  MailingAddress?: Address | undefined;

  /**
   * <p>The customer’s billing address.</p>
   * @public
   */
  BillingAddress?: Address | undefined;

  /**
   * <p>A key value pair of attributes of a customer profile.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;

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
  FoundByItems?: FoundByKeyValue[] | undefined;

  /**
   * <p>An alternative to PartyType which accepts any string as input.</p>
   * @public
   */
  PartyTypeString?: string | undefined;

  /**
   * <p>An alternative to Gender which accepts any string as input.</p>
   * @public
   */
  GenderString?: string | undefined;

  /**
   * <p>The type of the profile.</p>
   * @public
   */
  ProfileType?: ProfileType | undefined;

  /**
   * <p>The customer or account’s engagement preferences.</p>
   * @public
   */
  EngagementPreferences?: EngagementPreferences | undefined;
}

/**
 * @public
 */
export interface BatchGetProfileResponse {
  /**
   * <p>For information about the errors that are common to all actions, see <a href="https://docs.aws.amazon.com/connect/latest/APIReference/CommonErrors.html">Common
   *             Errors</a>.</p>
   * @public
   */
  Errors?: BatchGetProfileError[] | undefined;

  /**
   * <p>Array of Profile Objects.</p>
   * @public
   */
  Profiles?: Profile[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ReadinessStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PREPARING: "PREPARING",
} as const;

/**
 * @public
 */
export type ReadinessStatus = (typeof ReadinessStatus)[keyof typeof ReadinessStatus];

/**
 * <p>The details of a single calculated attribute definition.</p>
 * @public
 */
export interface ListCalculatedAttributeDefinitionItem {
  /**
   * <p>The unique name of the calculated attribute.</p>
   * @public
   */
  CalculatedAttributeName?: string | undefined;

  /**
   * <p>The display name of the calculated attribute.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The threshold for the calculated attribute.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The threshold for the calculated attribute.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp of when the calculated attribute definition was most recently
   *          edited.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>Whether historical data ingested before the Calculated Attribute was created should be
   *          included in calculations.</p>
   * @public
   */
  UseHistoricalData?: boolean | undefined;

  /**
   * <p>Status of the Calculated Attribute creation (whether all historical data has been
   *          indexed.)</p>
   * @public
   */
  Status?: ReadinessStatus | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Object that segments on Customer Profile's Calculated Attributes.</p>
 * @public
 */
export interface CalculatedAttributeDimension {
  /**
   * <p>The action to segment with.</p>
   * @public
   */
  DimensionType: AttributeDimensionType | undefined;

  /**
   * <p>The values to apply the DimensionType with.</p>
   * @public
   */
  Values: string[] | undefined;

  /**
   * <p>Applies the given condition over the initial Calculated Attribute's definition.</p>
   * @public
   */
  ConditionOverrides?: ConditionOverrides | undefined;
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
  CalculatedAttributeName?: string | undefined;

  /**
   * <p>The display name of the calculated attribute.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>Indicates whether the calculated attribute’s value is based on partial data. If data is
   *          partial, it is set to true.</p>
   * @public
   */
  IsDataPartial?: string | undefined;

  /**
   * <p>The value of the calculated attribute.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The timestamp of the newest object included in the calculated attribute
   *          calculation.</p>
   * @public
   */
  LastObjectTimestamp?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  AFTER: "AFTER",
  BEFORE: "BEFORE",
  BEGINS_WITH: "BEGINS_WITH",
  BETWEEN: "BETWEEN",
  CONTAINS: "CONTAINS",
  ENDS_WITH: "ENDS_WITH",
  EQUAL: "EQUAL",
  EXCLUSIVE: "EXCLUSIVE",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL: "GREATER_THAN_OR_EQUAL",
  INCLUSIVE: "INCLUSIVE",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL: "LESS_THAN_OR_EQUAL",
  NOT_BETWEEN: "NOT_BETWEEN",
  ON: "ON",
} as const;

/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

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
 * <p>A structure letting customers specify a relative time window over which over which data
 *          is included in the Calculated Attribute. Use positive numbers to indicate that the endpoint
 *          is in the past, and negative numbers to indicate it is in the future. ValueRange overrides
 *          Value.</p>
 * @public
 */
export interface ValueRange {
  /**
   * <p>The start time of when to include objects. Use positive numbers to indicate that the
   *          starting point is in the past, and negative numbers to indicate it is in the future.</p>
   * @public
   */
  Start: number | undefined;

  /**
   * <p>The end time of when to include objects. Use positive numbers to indicate that the
   *          starting point is in the past, and negative numbers to indicate it is in the future.</p>
   * @public
   */
  End: number | undefined;
}

/**
 * <p>The relative time period over which data is included in the aggregation.</p>
 * @public
 */
export interface Range {
  /**
   * <p>The amount of time of the specified unit.</p>
   * @public
   */
  Value?: number | undefined;

  /**
   * <p>The unit of time.</p>
   * @public
   */
  Unit?: Unit | undefined;

  /**
   * <p>A structure letting customers specify a relative time window over which over which data
   *          is included in the Calculated Attribute. Use positive numbers to indicate that the endpoint
   *          is in the past, and negative numbers to indicate it is in the future. ValueRange overrides
   *          Value.</p>
   * @public
   */
  ValueRange?: ValueRange | undefined;

  /**
   * <p>An expression specifying the field in your JSON object from which the date should be
   *          parsed. The expression should follow the structure of \"\{ObjectTypeName.<Location of
   *          timestamp field in JSON pointer format>\}\". E.g. if your object type is MyType and source
   *          JSON is \{"generatedAt": \{"timestamp": "1737587945945"\}\}, then TimestampSource should be
   *          "\{MyType.generatedAt.timestamp\}".</p>
   * @public
   */
  TimestampSource?: string | undefined;

  /**
   * <p>The format the timestamp field in your JSON object is specified. This value should be
   *          one of EPOCHMILLI (for Unix epoch timestamps with second/millisecond level precision) or
   *          ISO_8601 (following ISO_8601 format with second/millisecond level precision, with an
   *          optional offset of Z or in the format HH:MM or HHMM.). E.g. if your object type is MyType
   *          and source JSON is \{"generatedAt": \{"timestamp": "2001-07-04T12:08:56.235-0700"\}\}, then
   *          TimestampFormat should be "ISO_8601".</p>
   * @public
   */
  TimestampFormat?: string | undefined;
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
  Range?: Range | undefined;

  /**
   * <p>The number of profile objects used for the calculated attribute.</p>
   * @public
   */
  ObjectCount?: number | undefined;

  /**
   * <p>The threshold for the calculated attribute.</p>
   * @public
   */
  Threshold?: Threshold | undefined;
}

/**
 * <p>Contains the map of attribute names to attribute dimensions.</p>
 * @public
 */
export interface FilterDimension {
  /**
   * <p>Is the attribute within the FilterDimension map</p>
   * @public
   */
  Attributes: Record<string, FilterAttributeDimension> | undefined;
}

/**
 * @public
 * @enum
 */
export const Type = {
  ALL: "ALL",
  ANY: "ANY",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * <p>Object that holds the dimensions to filter on.</p>
 * @public
 */
export interface FilterGroup {
  /**
   * <p>The type of logical relationship between the dimensions of the Filter group.</p>
   * @public
   */
  Type: Type | undefined;

  /**
   * <p>Object that holds the attributes to filter on.</p>
   * @public
   */
  Dimensions: FilterDimension[] | undefined;
}

/**
 * @public
 * @enum
 */
export const Include = {
  ALL: "ALL",
  ANY: "ANY",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type Include = (typeof Include)[keyof typeof Include];

/**
 * <p>Defines how to filter the objects coming in for calculated attributes.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>Define whether to include or exclude objects for Calculated Attributed calculation that
   *          fit the filter groups criteria.</p>
   * @public
   */
  Include: Include | undefined;

  /**
   * <p>Holds the list of Filter groups within the Filter definition.</p>
   * @public
   */
  Groups: FilterGroup[] | undefined;
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
  DisplayName?: string | undefined;

  /**
   * <p>The description of the calculated attribute.</p>
   * @public
   */
  Description?: string | undefined;

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
  Conditions?: Conditions | undefined;

  /**
   * <p>Defines how to filter incoming objects to include part of the Calculated
   *          Attribute.</p>
   * @public
   */
  Filter?: Filter | undefined;

  /**
   * <p>The aggregation operation to perform for the calculated attribute.</p>
   * @public
   */
  Statistic: Statistic | undefined;

  /**
   * <p>Whether historical data ingested before the Calculated Attribute was created should be
   *          included in calculations.</p>
   * @public
   */
  UseHistoricalData?: boolean | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Information indicating if the Calculated Attribute is ready for use by confirming all
 *          historical data has been processed and reflected.</p>
 * @public
 */
export interface Readiness {
  /**
   * <p>Approximately how far the Calculated Attribute creation is from completion.</p>
   * @public
   */
  ProgressPercentage?: number | undefined;

  /**
   * <p>Any customer messaging.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface CreateCalculatedAttributeDefinitionResponse {
  /**
   * <p>The unique name of the calculated attribute.</p>
   * @public
   */
  CalculatedAttributeName?: string | undefined;

  /**
   * <p>The display name of the calculated attribute.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The description of the calculated attribute.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Mathematical expression and a list of attribute items specified in that
   *          expression.</p>
   * @public
   */
  AttributeDetails?: AttributeDetails | undefined;

  /**
   * <p>The conditions including range, object count, and threshold for the calculated
   *          attribute.</p>
   * @public
   */
  Conditions?: Conditions | undefined;

  /**
   * <p>The filter that was used as part of the request.</p>
   * @public
   */
  Filter?: Filter | undefined;

  /**
   * <p>The aggregation operation to perform for the calculated attribute.</p>
   * @public
   */
  Statistic?: Statistic | undefined;

  /**
   * <p>The timestamp of when the calculated attribute definition was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp of when the calculated attribute definition was most recently
   *          edited.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>Whether historical data ingested before the Calculated Attribute was created should be
   *          included in calculations.</p>
   * @public
   */
  UseHistoricalData?: boolean | undefined;

  /**
   * <p>Status of the Calculated Attribute creation (whether all historical data has been
   *          indexed.)</p>
   * @public
   */
  Status?: ReadinessStatus | undefined;

  /**
   * <p>Information indicating if the Calculated Attribute is ready for use by confirming all
   *          historical data has been processed and reflected.</p>
   * @public
   */
  Readiness?: Readiness | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  S3KeyName?: string | undefined;
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
  S3Exporting?: S3ExportingConfig | undefined;
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
  JobSchedule?: JobSchedule | undefined;

  /**
   * <p>Configuration information about the auto-merging process.</p>
   * @public
   */
  AutoMerging?: AutoMerging | undefined;

  /**
   * <p>Configuration information for exporting Identity Resolution results, for example, to an S3
   *          bucket.</p>
   * @public
   */
  ExportingConfig?: ExportingConfig | undefined;
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
  MatchingRules?: MatchingRule[] | undefined;

  /**
   * <p>
   *             <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_MatchingRule.html">MatchingRule</a>
   *          </p>
   * @public
   */
  MaxAllowedRuleLevelForMerging?: number | undefined;

  /**
   * <p>Indicates the maximum allowed rule level.</p>
   * @public
   */
  MaxAllowedRuleLevelForMatching?: number | undefined;

  /**
   * <p>Configures information about the <code>AttributeTypesSelector</code> where the
   *          rule-based identity resolution uses to match profiles.</p>
   * @public
   */
  AttributeTypesSelector?: AttributeTypesSelector | undefined;

  /**
   * <p>How the auto-merging process should resolve conflicts between different profiles.</p>
   * @public
   */
  ConflictResolution?: ConflictResolution | undefined;

  /**
   * <p>Configuration information about the S3 bucket where Identity Resolution Jobs writes result files. </p>
   *          <note>
   *             <p>You need to give Customer Profiles service principal write permission to your S3 bucket.
   *             Otherwise, you'll get an exception in the API response. For an example policy, see
   *                <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html#customer-profiles-cross-service">Amazon Connect Customer Profiles cross-service confused deputy prevention</a>. </p>
   *          </note>
   * @public
   */
  ExportingConfig?: ExportingConfig | undefined;
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
  DefaultEncryptionKey?: string | undefined;

  /**
   * <p>The URL of the SQS dead letter queue, which is used for reporting errors associated with
   *          ingesting data from third party applications. You must set up a policy on the
   *          DeadLetterQueue for the SendMessage operation to enable Amazon Connect Customer Profiles to send
   *          messages to the DeadLetterQueue.</p>
   * @public
   */
  DeadLetterQueueUrl?: string | undefined;

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
  Matching?: MatchingRequest | undefined;

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
  RuleBasedMatching?: RuleBasedMatchingRequest | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  Enabled?: boolean | undefined;

  /**
   * <p>The day and time when do you want to start the Identity Resolution Job every week.</p>
   * @public
   */
  JobSchedule?: JobSchedule | undefined;

  /**
   * <p>Configuration information about the auto-merging process.</p>
   * @public
   */
  AutoMerging?: AutoMerging | undefined;

  /**
   * <p>Configuration information for exporting Identity Resolution results, for example, to an S3
   *          bucket.</p>
   * @public
   */
  ExportingConfig?: ExportingConfig | undefined;
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
  Enabled?: boolean | undefined;

  /**
   * <p>Configures how the rule-based matching process should match profiles. You can have up to
   *          15 <code>MatchingRule</code> in the <code>MatchingRules</code>.</p>
   * @public
   */
  MatchingRules?: MatchingRule[] | undefined;

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
  Status?: RuleBasedMatchingStatus | undefined;

  /**
   * <p>
   *             <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_MatchingRule.html">MatchingRule</a>
   *          </p>
   * @public
   */
  MaxAllowedRuleLevelForMerging?: number | undefined;

  /**
   * <p>Indicates the maximum allowed rule level.</p>
   * @public
   */
  MaxAllowedRuleLevelForMatching?: number | undefined;

  /**
   * <p>Configures information about the <code>AttributeTypesSelector</code> where the
   *          rule-based identity resolution uses to match profiles.</p>
   * @public
   */
  AttributeTypesSelector?: AttributeTypesSelector | undefined;

  /**
   * <p>How the auto-merging process should resolve conflicts between different profiles.</p>
   * @public
   */
  ConflictResolution?: ConflictResolution | undefined;

  /**
   * <p>Configuration information about the S3 bucket where Identity Resolution Jobs writes result files. </p>
   *          <note>
   *             <p>You need to give Customer Profiles service principal write permission to your S3 bucket.
   *             Otherwise, you'll get an exception in the API response. For an example policy, see
   *                <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html#customer-profiles-cross-service">Amazon Connect Customer Profiles cross-service confused deputy prevention</a>. </p>
   *          </note>
   * @public
   */
  ExportingConfig?: ExportingConfig | undefined;
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
  DefaultEncryptionKey?: string | undefined;

  /**
   * <p>The URL of the SQS dead letter queue, which is used for reporting errors associated with
   *          ingesting data from third party applications.</p>
   * @public
   */
  DeadLetterQueueUrl?: string | undefined;

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
  Matching?: MatchingResponse | undefined;

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
  RuleBasedMatching?: RuleBasedMatchingResponse | undefined;

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
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const LayoutType = {
  PROFILE_EXPLORER: "PROFILE_EXPLORER",
} as const;

/**
 * @public
 */
export type LayoutType = (typeof LayoutType)[keyof typeof LayoutType];

/**
 * @public
 */
export interface CreateDomainLayoutRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique name of the layout.</p>
   * @public
   */
  LayoutDefinitionName: string | undefined;

  /**
   * <p>The description of the layout</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The display name of the layout</p>
   * @public
   */
  DisplayName: string | undefined;

  /**
   * <p>If set to true for a layout, this layout will be used by default to view data. If set to
   *          false, then the layout will not be used by default, but it can be used to view data by
   *          explicitly selecting it in the console.</p>
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * <p>The type of layout that can be used to view data under a Customer Profiles domain.</p>
   * @public
   */
  LayoutType: LayoutType | undefined;

  /**
   * <p>A customizable layout that can be used to view data under a Customer Profiles domain.</p>
   * @public
   */
  Layout: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDomainLayoutResponse {
  /**
   * <p>The unique name of the layout.</p>
   * @public
   */
  LayoutDefinitionName: string | undefined;

  /**
   * <p>The description of the layout</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The display name of the layout</p>
   * @public
   */
  DisplayName: string | undefined;

  /**
   * <p>If set to true for a layout, this layout will be used by default to view data. If set to
   *          false, then the layout will not be used by default, but it can be used to view data by
   *          explicitly selecting it in the console.</p>
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * <p>The type of layout that can be used to view data under customer profiles domain.</p>
   * @public
   */
  LayoutType: LayoutType | undefined;

  /**
   * <p>A customizable layout that can be used to view data under Customer Profiles
   *          domain.</p>
   * @public
   */
  Layout: string | undefined;

  /**
   * <p>The version used to create layout.</p>
   * @public
   */
  Version: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The timestamp of when the layout was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the layout was most recently updated.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;
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
  Tags?: Record<string, string> | undefined;
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
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>The criteria that a specific object attribute must meet to trigger the
 *          destination.</p>
 * @public
 */
export interface ObjectAttribute {
  /**
   * <p>An attribute contained within a source object.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>A field defined within an object type.</p>
   * @public
   */
  FieldName?: string | undefined;

  /**
   * <p>The operator used to compare an attribute against a list of values.</p>
   * @public
   */
  ComparisonOperator: ComparisonOperator | undefined;

  /**
   * <p>A list of attribute values used for comparison.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * <p>A specific event dimension to be assessed.</p>
 * @public
 */
export interface EventTriggerDimension {
  /**
   * <p>A list of object attributes to be evaluated.</p>
   * @public
   */
  ObjectAttributes: ObjectAttribute[] | undefined;
}

/**
 * @public
 * @enum
 */
export const EventTriggerLogicalOperator = {
  ALL: "ALL",
  ANY: "ANY",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type EventTriggerLogicalOperator =
  (typeof EventTriggerLogicalOperator)[keyof typeof EventTriggerLogicalOperator];

/**
 * <p>Specifies the circumstances under which the event should trigger the destination.</p>
 * @public
 */
export interface EventTriggerCondition {
  /**
   * <p>A list of dimensions to be evaluated for the event.</p>
   * @public
   */
  EventTriggerDimensions: EventTriggerDimension[] | undefined;

  /**
   * <p>The operator used to combine multiple dimensions.</p>
   * @public
   */
  LogicalOperator: EventTriggerLogicalOperator | undefined;
}

/**
 * @public
 * @enum
 */
export const PeriodUnit = {
  DAYS: "DAYS",
  HOURS: "HOURS",
  MONTHS: "MONTHS",
  WEEKS: "WEEKS",
} as const;

/**
 * @public
 */
export type PeriodUnit = (typeof PeriodUnit)[keyof typeof PeriodUnit];

/**
 * <p>Defines a limit and the time period during which it is enforced.</p>
 * @public
 */
export interface Period {
  /**
   * <p>The unit of time.</p>
   * @public
   */
  Unit: PeriodUnit | undefined;

  /**
   * <p>The amount of time of the specified unit.</p>
   * @public
   */
  Value: number | undefined;

  /**
   * <p>The maximum allowed number of destination invocations per profile.</p>
   * @public
   */
  MaxInvocationsPerProfile?: number | undefined;

  /**
   * <p>If set to true, there is no limit on the number of destination invocations per profile.
   *          The default is false.</p>
   * @public
   */
  Unlimited?: boolean | undefined;
}

/**
 * <p>Defines limits controlling whether an event triggers the destination, based on ingestion
 *          latency and the number of invocations per profile over specific time periods.</p>
 * @public
 */
export interface EventTriggerLimits {
  /**
   * <p>In milliseconds. Specifies that an event will only trigger the destination if it is
   *          processed within a certain latency period.</p>
   * @public
   */
  EventExpiration?: number | undefined;

  /**
   * <p>A list of time periods during which the limits apply.</p>
   * @public
   */
  Periods?: Period[] | undefined;
}

/**
 * @public
 */
export interface CreateEventTriggerRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique name of the event trigger.</p>
   * @public
   */
  EventTriggerName: string | undefined;

  /**
   * <p>The unique name of the object type.</p>
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * <p>The description of the event trigger.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of conditions that determine when an event should trigger the destination.</p>
   * @public
   */
  EventTriggerConditions: EventTriggerCondition[] | undefined;

  /**
   * <p>The destination is triggered only for profiles that meet the criteria of a segment
   *          definition.</p>
   * @public
   */
  SegmentFilter?: string | undefined;

  /**
   * <p>Defines limits controlling whether an event triggers the destination, based on ingestion
   *          latency and the number of invocations per profile over specific time periods.</p>
   * @public
   */
  EventTriggerLimits?: EventTriggerLimits | undefined;

  /**
   * <p>An array of key-value pairs to apply to this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateEventTriggerResponse {
  /**
   * <p>The unique name of the event trigger.</p>
   * @public
   */
  EventTriggerName?: string | undefined;

  /**
   * <p>The unique name of the object type.</p>
   * @public
   */
  ObjectTypeName?: string | undefined;

  /**
   * <p>The description of the event trigger.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of conditions that determine when an event should trigger the destination.</p>
   * @public
   */
  EventTriggerConditions?: EventTriggerCondition[] | undefined;

  /**
   * <p>The destination is triggered only for profiles that meet the criteria of a segment
   *          definition.</p>
   * @public
   */
  SegmentFilter?: string | undefined;

  /**
   * <p>Defines limits controlling whether an event triggers the destination, based on ingestion
   *          latency and the number of invocations per profile over specific time periods.</p>
   * @public
   */
  EventTriggerLimits?: EventTriggerLimits | undefined;

  /**
   * <p>The timestamp of when the event trigger was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp of when the event trigger was most recently updated.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>An array of key-value pairs to apply to this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  AppflowIntegration?: AppflowIntegration | undefined;
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
  Tags?: Record<string, string> | undefined;
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
 */
export interface CreateProfileRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>An account number that you have assigned to the customer.</p>
   * @public
   */
  AccountNumber?: string | undefined;

  /**
   * <p>Any additional information relevant to the customer’s profile.</p>
   * @public
   */
  AdditionalInformation?: string | undefined;

  /**
   * <p>The type of profile used to describe the customer.</p>
   *
   * @deprecated deprecated
   * @public
   */
  PartyType?: PartyType | undefined;

  /**
   * <p>The name of the customer’s business.</p>
   * @public
   */
  BusinessName?: string | undefined;

  /**
   * <p>The customer’s first name.</p>
   * @public
   */
  FirstName?: string | undefined;

  /**
   * <p>The customer’s middle name.</p>
   * @public
   */
  MiddleName?: string | undefined;

  /**
   * <p>The customer’s last name.</p>
   * @public
   */
  LastName?: string | undefined;

  /**
   * <p>The customer’s birth date. </p>
   * @public
   */
  BirthDate?: string | undefined;

  /**
   * <p>The gender with which the customer identifies. </p>
   *
   * @deprecated deprecated
   * @public
   */
  Gender?: Gender | undefined;

  /**
   * <p>The customer’s phone number, which has not been specified as a mobile, home, or business
   *          number. </p>
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * <p>The customer’s mobile phone number.</p>
   * @public
   */
  MobilePhoneNumber?: string | undefined;

  /**
   * <p>The customer’s home phone number.</p>
   * @public
   */
  HomePhoneNumber?: string | undefined;

  /**
   * <p>The customer’s business phone number.</p>
   * @public
   */
  BusinessPhoneNumber?: string | undefined;

  /**
   * <p>The customer’s email address, which has not been specified as a personal or business
   *          address. </p>
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * <p>The customer’s personal email address.</p>
   * @public
   */
  PersonalEmailAddress?: string | undefined;

  /**
   * <p>The customer’s business email address.</p>
   * @public
   */
  BusinessEmailAddress?: string | undefined;

  /**
   * <p>A generic address associated with the customer that is not mailing, shipping, or
   *          billing.</p>
   * @public
   */
  Address?: Address | undefined;

  /**
   * <p>The customer’s shipping address.</p>
   * @public
   */
  ShippingAddress?: Address | undefined;

  /**
   * <p>The customer’s mailing address.</p>
   * @public
   */
  MailingAddress?: Address | undefined;

  /**
   * <p>The customer’s billing address.</p>
   * @public
   */
  BillingAddress?: Address | undefined;

  /**
   * <p>A key value pair of attributes of a customer profile.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * <p>An alternative to <code>PartyType</code> which accepts any string as input.</p>
   * @public
   */
  PartyTypeString?: string | undefined;

  /**
   * <p>An alternative to <code>Gender</code> which accepts any string as input.</p>
   * @public
   */
  GenderString?: string | undefined;

  /**
   * <p>The type of the profile.</p>
   * @public
   */
  ProfileType?: ProfileType | undefined;

  /**
   * <p>Object that defines the preferred methods of engagement, per channel.</p>
   * @public
   */
  EngagementPreferences?: EngagementPreferences | undefined;
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
 * <p>Object that segments on various Customer profile's fields that are larger than
 *          normal.</p>
 * @public
 */
export interface ExtraLengthValueProfileDimension {
  /**
   * <p>The action to segment with.</p>
   * @public
   */
  DimensionType: StringDimensionType | undefined;

  /**
   * <p>The values to apply the DimensionType on.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DateDimensionType = {
  AFTER: "AFTER",
  BEFORE: "BEFORE",
  BETWEEN: "BETWEEN",
  NOT_BETWEEN: "NOT_BETWEEN",
  ON: "ON",
} as const;

/**
 * @public
 */
export type DateDimensionType = (typeof DateDimensionType)[keyof typeof DateDimensionType];

/**
 * <p>Object that segments on various Customer Profile's date fields.</p>
 * @public
 */
export interface DateDimension {
  /**
   * <p>The action to segment with.</p>
   * @public
   */
  DimensionType: DateDimensionType | undefined;

  /**
   * <p>The values to apply the DimensionType on.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ProfileTypeDimensionType = {
  EXCLUSIVE: "EXCLUSIVE",
  INCLUSIVE: "INCLUSIVE",
} as const;

/**
 * @public
 */
export type ProfileTypeDimensionType = (typeof ProfileTypeDimensionType)[keyof typeof ProfileTypeDimensionType];

/**
 * <p>Object to hold the dimension of a profile type field to segment on.</p>
 * @public
 */
export interface ProfileTypeDimension {
  /**
   * <p>The action to segment on.</p>
   * @public
   */
  DimensionType: ProfileTypeDimensionType | undefined;

  /**
   * <p>The values to apply the DimensionType on.</p>
   * @public
   */
  Values: ProfileType[] | undefined;
}

/**
 * <p>The object used to segment on attributes within the customer profile.</p>
 * @public
 */
export interface ProfileAttributes {
  /**
   * <p>A field to describe values to segment on within account number.</p>
   * @public
   */
  AccountNumber?: ProfileDimension | undefined;

  /**
   * <p>A field to describe values to segment on within additional information.</p>
   * @public
   */
  AdditionalInformation?: ExtraLengthValueProfileDimension | undefined;

  /**
   * <p>A field to describe values to segment on within first name.</p>
   * @public
   */
  FirstName?: ProfileDimension | undefined;

  /**
   * <p>A field to describe values to segment on within last name.</p>
   * @public
   */
  LastName?: ProfileDimension | undefined;

  /**
   * <p>A field to describe values to segment on within middle name.</p>
   * @public
   */
  MiddleName?: ProfileDimension | undefined;

  /**
   * <p>A field to describe values to segment on within genderString.</p>
   * @public
   */
  GenderString?: ProfileDimension | undefined;

  /**
   * <p>A field to describe values to segment on within partyTypeString.</p>
   * @public
   */
  PartyTypeString?: ProfileDimension | undefined;

  /**
   * <p>A field to describe values to segment on within birthDate.</p>
   * @public
   */
  BirthDate?: DateDimension | undefined;

  /**
   * <p>A field to describe values to segment on within phone number.</p>
   * @public
   */
  PhoneNumber?: ProfileDimension | undefined;

  /**
   * <p>A field to describe values to segment on within business name.</p>
   * @public
   */
  BusinessName?: ProfileDimension | undefined;

  /**
   * <p>A field to describe values to segment on within business phone number.</p>
   * @public
   */
  BusinessPhoneNumber?: ProfileDimension | undefined;

  /**
   * <p>A field to describe values to segment on within home phone number.</p>
   * @public
   */
  HomePhoneNumber?: ProfileDimension | undefined;

  /**
   * <p>A field to describe values to segment on within mobile phone number.</p>
   * @public
   */
  MobilePhoneNumber?: ProfileDimension | undefined;

  /**
   * <p>A field to describe values to segment on within email address.</p>
   * @public
   */
  EmailAddress?: ProfileDimension | undefined;

  /**
   * <p>A field to describe values to segment on within personal email address.</p>
   * @public
   */
  PersonalEmailAddress?: ProfileDimension | undefined;

  /**
   * <p>A field to describe values to segment on within business email address.</p>
   * @public
   */
  BusinessEmailAddress?: ProfileDimension | undefined;

  /**
   * <p>A field to describe values to segment on within address.</p>
   * @public
   */
  Address?: AddressDimension | undefined;

  /**
   * <p>A field to describe values to segment on within shipping address.</p>
   * @public
   */
  ShippingAddress?: AddressDimension | undefined;

  /**
   * <p>A field to describe values to segment on within mailing address.</p>
   * @public
   */
  MailingAddress?: AddressDimension | undefined;

  /**
   * <p>A field to describe values to segment on within billing address.</p>
   * @public
   */
  BillingAddress?: AddressDimension | undefined;

  /**
   * <p>A field to describe values to segment on within attributes.</p>
   * @public
   */
  Attributes?: Record<string, AttributeDimension> | undefined;

  /**
   * <p>A field to describe values to segment on within profile type.</p>
   * @public
   */
  ProfileType?: ProfileTypeDimension | undefined;
}

/**
 * <p>Object that holds what profile and calculated attributes to segment on.</p>
 * @public
 */
export type Dimension =
  | Dimension.CalculatedAttributesMember
  | Dimension.ProfileAttributesMember
  | Dimension.$UnknownMember;

/**
 * @public
 */
export namespace Dimension {
  /**
   * <p>Object that holds the profile attributes to segment on.</p>
   * @public
   */
  export interface ProfileAttributesMember {
    ProfileAttributes: ProfileAttributes;
    CalculatedAttributes?: never;
    $unknown?: never;
  }

  /**
   * <p>Object that holds the calculated attributes to segment on.</p>
   * @public
   */
  export interface CalculatedAttributesMember {
    ProfileAttributes?: never;
    CalculatedAttributes: Record<string, CalculatedAttributeDimension>;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ProfileAttributes?: never;
    CalculatedAttributes?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ProfileAttributes: (value: ProfileAttributes) => T;
    CalculatedAttributes: (value: Record<string, CalculatedAttributeDimension>) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The source segments to build off of.</p>
 * @public
 */
export interface SourceSegment {
  /**
   * <p>The unique name of the segment definition.</p>
   * @public
   */
  SegmentDefinitionName?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IncludeOptions = {
  ALL: "ALL",
  ANY: "ANY",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type IncludeOptions = (typeof IncludeOptions)[keyof typeof IncludeOptions];

/**
 * <p>Contains dimensions that determine what to segment on.</p>
 * @public
 */
export interface Group {
  /**
   * <p>Defines the attributes to segment on.</p>
   * @public
   */
  Dimensions?: Dimension[] | undefined;

  /**
   * <p>Defines the starting source of data.</p>
   * @public
   */
  SourceSegments?: SourceSegment[] | undefined;

  /**
   * <p>Defines how to interact with the source data.</p>
   * @public
   */
  SourceType?: IncludeOptions | undefined;

  /**
   * <p>Defines how to interact with the profiles found in the current filtering.</p>
   * @public
   */
  Type?: IncludeOptions | undefined;
}

/**
 * <p>Contains all groups of the segment definition.</p>
 * @public
 */
export interface SegmentGroup {
  /**
   * <p>Holds the list of groups within the segment definition.</p>
   * @public
   */
  Groups?: Group[] | undefined;

  /**
   * <p>Defines whether to include or exclude the profiles that fit the segment criteria.</p>
   * @public
   */
  Include?: IncludeOptions | undefined;
}

/**
 * @public
 */
export interface CreateSegmentDefinitionRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique name of the segment definition.</p>
   * @public
   */
  SegmentDefinitionName: string | undefined;

  /**
   * <p>The display name of the segment definition.</p>
   * @public
   */
  DisplayName: string | undefined;

  /**
   * <p>The description of the segment definition.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Specifies the base segments and dimensions for a segment definition along with their
   *          respective relationship.</p>
   * @public
   */
  SegmentGroups: SegmentGroup | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSegmentDefinitionResponse {
  /**
   * <p>The name of the segment definition.</p>
   * @public
   */
  SegmentDefinitionName: string | undefined;

  /**
   * <p>The display name of the segment definition.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The description of the segment definition.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The timestamp of when the segment definition was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The arn of the segment definition.</p>
   * @public
   */
  SegmentDefinitionArn?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Contains all groups of the segment definition.</p>
 * @public
 */
export interface SegmentGroupStructure {
  /**
   * <p>Holds the list of groups within the segment definition.</p>
   * @public
   */
  Groups?: Group[] | undefined;

  /**
   * <p>Define whether to include or exclude the profiles that fit the segment criteria.</p>
   * @public
   */
  Include?: IncludeOptions | undefined;
}

/**
 * @public
 */
export interface CreateSegmentEstimateRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The segment query for calculating a segment estimate.</p>
   * @public
   */
  SegmentQuery: SegmentGroupStructure | undefined;
}

/**
 * @public
 */
export interface CreateSegmentEstimateResponse {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>A unique identifier for the resource. The value can be passed to
   *             <code>GetSegmentEstimate</code> to retrieve the result of segment estimate
   *          status.</p>
   * @public
   */
  EstimateId?: string | undefined;

  /**
   * <p>The status code for the response.</p>
   * @public
   */
  StatusCode?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const DataFormat = {
  CSV: "CSV",
  JSONL: "JSONL",
  ORC: "ORC",
} as const;

/**
 * @public
 */
export type DataFormat = (typeof DataFormat)[keyof typeof DataFormat];

/**
 * @public
 */
export interface CreateSegmentSnapshotRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the segment definition used in this snapshot request.</p>
   * @public
   */
  SegmentDefinitionName: string | undefined;

  /**
   * <p>The format in which the segment will be exported.</p>
   * @public
   */
  DataFormat: DataFormat | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the exported
   *          segment.</p>
   * @public
   */
  EncryptionKey?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that allows Customer Profiles service
   *          principal to assume the role for conducting KMS and S3 operations.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The destination to which the segment will be exported. This field must be provided if
   *          the request is not submitted from the Amazon Connect Admin Website.</p>
   * @public
   */
  DestinationUri?: string | undefined;
}

/**
 * @public
 */
export interface CreateSegmentSnapshotResponse {
  /**
   * <p>The unique identifier of the segment snapshot.</p>
   * @public
   */
  SnapshotId: string | undefined;
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
  Source?: string | undefined;

  /**
   * <p>The location of the data in the standard ProfileObject model. For example:
   *          _profile.Address.PostalCode.</p>
   * @public
   */
  Target?: string | undefined;

  /**
   * <p>The content type of the field. Used for determining equality when searching.</p>
   * @public
   */
  ContentType?: FieldContentType | undefined;
}

/**
 * @public
 */
export interface CreateUploadJobRequest {
  /**
   * <p>The unique name of the domain. Domain should be exists for the upload job to be created.
   *       </p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique name of the upload job. Could be a file name to identify the upload
   *          job.</p>
   * @public
   */
  DisplayName: string | undefined;

  /**
   * <p>The mapping between CSV Columns and Profile Object attributes. A map of the name and
   *          ObjectType field.</p>
   * @public
   */
  Fields: Record<string, ObjectTypeField> | undefined;

  /**
   * <p>The unique key columns for de-duping the profiles used to map data to the profile.
   *       </p>
   * @public
   */
  UniqueKey: string | undefined;

  /**
   * <p>The expiry duration for the profiles ingested with the job. If not provided, the system
   *          default of 2 weeks is used. </p>
   * @public
   */
  DataExpiry?: number | undefined;
}

/**
 * @public
 */
export interface CreateUploadJobResponse {
  /**
   * <p>The unique identifier for the created upload job. </p>
   * @public
   */
  JobId: string | undefined;
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
export interface DeleteDomainLayoutRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique name of the layout.</p>
   * @public
   */
  LayoutDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainLayoutResponse {
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
export interface DeleteEventTriggerRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique name of the event trigger.</p>
   * @public
   */
  EventTriggerName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventTriggerResponse {
  /**
   * <p>A message that indicates the delete request is done.</p>
   * @public
   */
  Message: string | undefined;
}

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
  Message?: string | undefined;
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
  Message?: string | undefined;
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
  Message?: string | undefined;
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
export interface DeleteSegmentDefinitionRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique name of the segment definition.</p>
   * @public
   */
  SegmentDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSegmentDefinitionResponse {
  /**
   * <p>A message that indicates the delete request is done.</p>
   * @public
   */
  Message?: string | undefined;
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
export const StandardIdentifier = {
  AIR_BOOKING: "AIR_BOOKING",
  AIR_PREFERENCE: "AIR_PREFERENCE",
  AIR_SEGMENT: "AIR_SEGMENT",
  ASSET: "ASSET",
  CASE: "CASE",
  COMMUNICATION_RECORD: "COMMUNICATION_RECORD",
  HOTEL_PREFERENCE: "HOTEL_PREFERENCE",
  HOTEL_RESERVATION: "HOTEL_RESERVATION",
  HOTEL_STAY_REVENUE: "HOTEL_STAY_REVENUE",
  LOOKUP_ONLY: "LOOKUP_ONLY",
  LOYALTY: "LOYALTY",
  LOYALTY_PROMOTION: "LOYALTY_PROMOTION",
  LOYALTY_TRANSACTION: "LOYALTY_TRANSACTION",
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
  StandardIdentifiers?: StandardIdentifier[] | undefined;

  /**
   * <p>The reference for the key name of the fields map.</p>
   * @public
   */
  FieldNames?: string[] | undefined;
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
  SourceLastUpdatedTimestampFormat?: string | undefined;

  /**
   * <p>A map of the name and the <code>ObjectType</code> field.</p>
   * @public
   */
  Fields?: Record<string, ObjectTypeField> | undefined;

  /**
   * <p>A list of unique keys that can be used to map data to a profile.</p>
   * @public
   */
  Keys?: Record<string, ObjectTypeKey[]> | undefined;
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
  DetectedProfileObjectTypes?: DetectedProfileObjectType[] | undefined;
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
  MinAllowedConfidenceScoreForMerging?: number | undefined;
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
  NumberOfMatchesInSample?: number | undefined;

  /**
   * <p>The number of profiles found in this preview dry run.</p>
   * @public
   */
  NumberOfProfilesInSample?: number | undefined;

  /**
   * <p>The number of profiles that would be merged if this wasn't a preview dry run.</p>
   * @public
   */
  NumberOfProfilesWillBeMerged?: number | undefined;
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
  CalculatedAttributeName?: string | undefined;

  /**
   * <p>The display name of the calculated attribute.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The description of the calculated attribute.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The timestamp of when the calculated attribute definition was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp of when the calculated attribute definition was most recently
   *          edited.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>The aggregation operation to perform for the calculated attribute.</p>
   * @public
   */
  Statistic?: Statistic | undefined;

  /**
   * <p>The filter assigned to this calculated attribute definition.</p>
   * @public
   */
  Filter?: Filter | undefined;

  /**
   * <p>The conditions including range, object count, and threshold for the calculated
   *          attribute.</p>
   * @public
   */
  Conditions?: Conditions | undefined;

  /**
   * <p>Mathematical expression and a list of attribute items specified in that
   *          expression.</p>
   * @public
   */
  AttributeDetails?: AttributeDetails | undefined;

  /**
   * <p>Whether historical data ingested before the Calculated Attribute was created should be
   *          included in calculations.</p>
   * @public
   */
  UseHistoricalData?: boolean | undefined;

  /**
   * <p>Status of the Calculated Attribute creation (whether all historical data has been
   *          indexed).</p>
   * @public
   */
  Status?: ReadinessStatus | undefined;

  /**
   * <p>Information indicating if the Calculated Attribute is ready for use by confirming all
   *          historical data has been processed and reflected.</p>
   * @public
   */
  Readiness?: Readiness | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  CalculatedAttributeName?: string | undefined;

  /**
   * <p>The display name of the calculated attribute.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>Indicates whether the calculated attribute’s value is based on partial data. If data is
   *          partial, it is set to true.</p>
   * @public
   */
  IsDataPartial?: string | undefined;

  /**
   * <p>The value of the calculated attribute.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The timestamp of the newest object included in the calculated attribute
   *          calculation.</p>
   * @public
   */
  LastObjectTimestamp?: Date | undefined;
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
  ProfileCount?: number | undefined;

  /**
   * <p>The number of profiles that you are currently paying for in the domain. If you have more
   *          than 100 objects associated with a single profile, that profile counts as two profiles. If
   *          you have more than 200 objects, that profile counts as three, and so on.</p>
   * @public
   */
  MeteringProfileCount?: number | undefined;

  /**
   * <p>The total number of objects in domain.</p>
   * @public
   */
  ObjectCount?: number | undefined;

  /**
   * <p>The total size, in bytes, of all objects in the domain.</p>
   * @public
   */
  TotalSize?: number | undefined;
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
  DefaultExpirationDays?: number | undefined;

  /**
   * <p>The default encryption key, which is an AWS managed key, is used when no specific type
   *          of encryption key is specified. It is used to encrypt all data before it is placed in
   *          permanent or semi-permanent storage.</p>
   * @public
   */
  DefaultEncryptionKey?: string | undefined;

  /**
   * <p>The URL of the SQS dead letter queue, which is used for reporting errors associated with
   *          ingesting data from third party applications.</p>
   * @public
   */
  DeadLetterQueueUrl?: string | undefined;

  /**
   * <p>Usage-specific statistics about the domain.</p>
   * @public
   */
  Stats?: DomainStats | undefined;

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
  Matching?: MatchingResponse | undefined;

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
  RuleBasedMatching?: RuleBasedMatchingResponse | undefined;

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
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetDomainLayoutRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique name of the layout.</p>
   * @public
   */
  LayoutDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface GetDomainLayoutResponse {
  /**
   * <p>The unique name of the layout.</p>
   * @public
   */
  LayoutDefinitionName: string | undefined;

  /**
   * <p>The description of the layout</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The display name of the layout</p>
   * @public
   */
  DisplayName: string | undefined;

  /**
   * <p>If set to true for a layout, this layout will be used by default to view data. If set to
   *          false, then the layout will not be used by default, but it can be used to view data by
   *          explicitly selecting it in the console.</p>
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * <p>The type of layout that can be used to view data under a Customer Profiles domain.</p>
   * @public
   */
  LayoutType: LayoutType | undefined;

  /**
   * <p>A customizable layout that can be used to view data under a Customer Profiles domain.</p>
   * @public
   */
  Layout: string | undefined;

  /**
   * <p>The version used to create layout.</p>
   * @public
   */
  Version: string | undefined;

  /**
   * <p>The timestamp of when the layout was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the layout was most recently updated.</p>
   * @public
   */
  LastUpdatedAt: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  UnhealthySince?: Date | undefined;

  /**
   * <p>The human-readable string that corresponds to the error or success while enabling the
   *          streaming destination.</p>
   * @public
   */
  Message?: string | undefined;
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
  StoppedSince?: Date | undefined;

  /**
   * <p>Details regarding the Kinesis stream.</p>
   * @public
   */
  DestinationDetails: EventStreamDestinationDetails | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetEventTriggerRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique name of the event trigger.</p>
   * @public
   */
  EventTriggerName: string | undefined;
}

/**
 * @public
 */
export interface GetEventTriggerResponse {
  /**
   * <p>The unique name of the event trigger.</p>
   * @public
   */
  EventTriggerName?: string | undefined;

  /**
   * <p>The unique name of the object type.</p>
   * @public
   */
  ObjectTypeName?: string | undefined;

  /**
   * <p>The description of the event trigger.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of conditions that determine when an event should trigger the destination.</p>
   * @public
   */
  EventTriggerConditions?: EventTriggerCondition[] | undefined;

  /**
   * <p>The destination is triggered only for profiles that meet the criteria of a segment
   *          definition.</p>
   * @public
   */
  SegmentFilter?: string | undefined;

  /**
   * <p>Defines limits controlling whether an event triggers the destination, based on ingestion
   *          latency and the number of invocations per profile over specific time periods.</p>
   * @public
   */
  EventTriggerLimits?: EventTriggerLimits | undefined;

  /**
   * <p>The timestamp of when the event trigger was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp of when the event trigger was most recently updated.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>An array of key-value pairs to apply to this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  S3BucketName?: string | undefined;

  /**
   * <p>The S3 key name of the location where Identity Resolution Jobs write result files.</p>
   * @public
   */
  S3KeyName?: string | undefined;
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
  S3Exporting?: S3ExportingLocation | undefined;
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
  NumberOfProfilesReviewed?: number | undefined;

  /**
   * <p>The number of matches found.</p>
   * @public
   */
  NumberOfMatchesFound?: number | undefined;

  /**
   * <p>The number of merges completed.</p>
   * @public
   */
  NumberOfMergesDone?: number | undefined;
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
  DomainName?: string | undefined;

  /**
   * <p>The unique identifier of the Identity Resolution Job.</p>
   * @public
   */
  JobId?: string | undefined;

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
  Status?: IdentityResolutionJobStatus | undefined;

  /**
   * <p>The error messages that are generated when the Identity Resolution Job runs.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The timestamp of when the Identity Resolution Job was started or will be started.</p>
   * @public
   */
  JobStartTime?: Date | undefined;

  /**
   * <p>The timestamp of when the Identity Resolution Job was completed.</p>
   * @public
   */
  JobEndTime?: Date | undefined;

  /**
   * <p>The timestamp of when the Identity Resolution Job was most recently edited.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>The timestamp of when the Identity Resolution Job will expire.</p>
   * @public
   */
  JobExpirationTime?: Date | undefined;

  /**
   * <p>Configuration settings for how to perform the auto-merging of profiles.</p>
   * @public
   */
  AutoMerging?: AutoMerging | undefined;

  /**
   * <p>The S3 location where the Identity Resolution Job writes result files.</p>
   * @public
   */
  ExportingLocation?: ExportingLocation | undefined;

  /**
   * <p>Statistics about the Identity Resolution Job.</p>
   * @public
   */
  JobStats?: JobStats | undefined;
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
  ObjectTypeName?: string | undefined;

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
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A map in which each key is an event type from an external application such as Segment or Shopify, and each value is an <code>ObjectTypeName</code> (template) used to ingest the event.
   * It supports the following event types: <code>SegmentIdentify</code>, <code>ShopifyCreateCustomers</code>, <code>ShopifyUpdateCustomers</code>, <code>ShopifyCreateDraftOrders</code>,
   * <code>ShopifyUpdateDraftOrders</code>, <code>ShopifyCreateOrders</code>, and <code>ShopifyUpdatedOrders</code>.</p>
   * @public
   */
  ObjectTypeNames?: Record<string, string> | undefined;

  /**
   * <p>Unique identifier for the workflow.</p>
   * @public
   */
  WorkflowId?: string | undefined;

  /**
   * <p>Boolean that shows if the Flow that's associated with the Integration is created in
   *          Amazon Appflow, or with ObjectTypeName equals _unstructured via API/CLI in
   *          flowDefinition.</p>
   * @public
   */
  IsUnstructured?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. The Integration uses this role to make
   *          Customer Profiles requests on your behalf.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>A list of unique names for active event triggers associated with the integration. This
   *          list would be empty if no Event Trigger is associated with the integration.</p>
   * @public
   */
  EventTriggerNames?: string[] | undefined;
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
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

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
  MatchId?: string | undefined;

  /**
   * <p>A list of identifiers for profiles that match.</p>
   * @public
   */
  ProfileIds?: string[] | undefined;

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
  ConfidenceScore?: number | undefined;
}

/**
 * @public
 */
export interface GetMatchesResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The timestamp this version of Match Result generated.</p>
   * @public
   */
  MatchGenerationDate?: Date | undefined;

  /**
   * <p>The number of potential matches found.</p>
   * @public
   */
  PotentialMatches?: number | undefined;

  /**
   * <p>The list of matched profiles for this instance.</p>
   * @public
   */
  Matches?: MatchItem[] | undefined;
}

/**
 * @public
 */
export interface GetProfileHistoryRecordRequest {
  /**
   * <p>The unique name of the domain for which to return a profile history record.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique identifier of the profile for which to return a history record.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>The unique identifier of the profile history record to return.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetProfileHistoryRecordResponse {
  /**
   * <p>The unique identifier of the profile history record.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The name of the profile object type.</p>
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * <p>The timestamp of when the profile history record was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the profile history record was last updated.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>The action type of the profile history record.</p>
   * @public
   */
  ActionType: ActionType | undefined;

  /**
   * <p>The unique identifier of the profile object generated by the service.</p>
   * @public
   */
  ProfileObjectUniqueKey?: string | undefined;

  /**
   * <p>A string containing the customer profile, profile object, or profile key content.</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the person or service principal who performed the action.</p>
   * @public
   */
  PerformedBy?: string | undefined;
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
  TemplateId?: string | undefined;

  /**
   * <p>The number of days until the data in the object expires.</p>
   * @public
   */
  ExpirationDays?: number | undefined;

  /**
   * <p>The customer-provided key to encrypt the profile object that will be created in this
   *          profile object type.</p>
   * @public
   */
  EncryptionKey?: string | undefined;

  /**
   * <p>Indicates whether a profile should be created when data is received if one doesn’t exist
   *          for an object of this type. The default is <code>FALSE</code>. If the AllowProfileCreation
   *          flag is set to <code>FALSE</code>, then the service tries to fetch a standard profile and
   *          associate this object with the profile. If it is set to <code>TRUE</code>, and if no match
   *          is found, then the service creates a new standard profile.</p>
   * @public
   */
  AllowProfileCreation?: boolean | undefined;

  /**
   * <p>The format of your <code>sourceLastUpdatedTimestamp</code> that was previously set
   *          up.</p>
   * @public
   */
  SourceLastUpdatedTimestampFormat?: string | undefined;

  /**
   * <p>The amount of provisioned profile object max count available.</p>
   * @public
   */
  MaxAvailableProfileObjectCount?: number | undefined;

  /**
   * <p>The amount of profile object max count assigned to the object type.</p>
   * @public
   */
  MaxProfileObjectCount?: number | undefined;

  /**
   * <p>A map of the name and ObjectType field.</p>
   * @public
   */
  Fields?: Record<string, ObjectTypeField> | undefined;

  /**
   * <p>A list of unique keys that can be used to map data to the profile.</p>
   * @public
   */
  Keys?: Record<string, ObjectTypeKey[]> | undefined;

  /**
   * <p>The timestamp of when the domain was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp of when the domain was most recently edited.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  TemplateId?: string | undefined;

  /**
   * <p>The name of the source of the object template.</p>
   * @public
   */
  SourceName?: string | undefined;

  /**
   * <p>The source of the object template.</p>
   * @public
   */
  SourceObject?: string | undefined;

  /**
   * <p>Indicates whether a profile should be created when data is received if one doesn’t exist
   *          for an object of this type. The default is <code>FALSE</code>. If the AllowProfileCreation
   *          flag is set to <code>FALSE</code>, then the service tries to fetch a standard profile and
   *          associate this object with the profile. If it is set to <code>TRUE</code>, and if no match
   *          is found, then the service creates a new standard profile.</p>
   * @public
   */
  AllowProfileCreation?: boolean | undefined;

  /**
   * <p>The format of your <code>sourceLastUpdatedTimestamp</code> that was previously set
   *          up.</p>
   * @public
   */
  SourceLastUpdatedTimestampFormat?: string | undefined;

  /**
   * <p>A map of the name and ObjectType field.</p>
   * @public
   */
  Fields?: Record<string, ObjectTypeField> | undefined;

  /**
   * <p>A list of unique keys that can be used to map data to the profile.</p>
   * @public
   */
  Keys?: Record<string, ObjectTypeKey[]> | undefined;
}

/**
 * @public
 */
export interface GetSegmentDefinitionRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique name of the segment definition.</p>
   * @public
   */
  SegmentDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface GetSegmentDefinitionResponse {
  /**
   * <p>The name of the segment definition.</p>
   * @public
   */
  SegmentDefinitionName?: string | undefined;

  /**
   * <p>The display name of the segment definition.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The description of the segment definition.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The segment criteria associated with this definition.</p>
   * @public
   */
  SegmentGroups?: SegmentGroup | undefined;

  /**
   * <p>The arn of the segment definition.</p>
   * @public
   */
  SegmentDefinitionArn: string | undefined;

  /**
   * <p>The timestamp of when the segment definition was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetSegmentEstimateRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The query Id passed by a previous <code>CreateSegmentEstimate</code> operation.</p>
   * @public
   */
  EstimateId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EstimateStatus = {
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type EstimateStatus = (typeof EstimateStatus)[keyof typeof EstimateStatus];

/**
 * @public
 */
export interface GetSegmentEstimateResponse {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>The <code>QueryId</code> which is the same as the value passed in
   *          <code>QueryId</code>.</p>
   * @public
   */
  EstimateId?: string | undefined;

  /**
   * <p>The current status of the query.</p>
   * @public
   */
  Status?: EstimateStatus | undefined;

  /**
   * <p>The estimated number of profiles contained in the segment.</p>
   * @public
   */
  Estimate?: string | undefined;

  /**
   * <p>The error message if there is any error.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The status code of the segment estimate.</p>
   * @public
   */
  StatusCode?: number | undefined;
}

/**
 * @public
 */
export interface GetSegmentMembershipRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The Id of the wanted segment. Needs to be a valid, and existing segment Id.</p>
   * @public
   */
  SegmentDefinitionName: string | undefined;

  /**
   * <p>The list of profile IDs to query for.</p>
   * @public
   */
  ProfileIds: string[] | undefined;
}

/**
 * <p>Object that holds failures for membership.</p>
 * @public
 */
export interface ProfileQueryFailures {
  /**
   * <p>The profile id the failure belongs to.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>A message describing the failure.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>The status describing the failure.</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const QueryResult = {
  ABSENT: "ABSENT",
  PRESENT: "PRESENT",
} as const;

/**
 * @public
 */
export type QueryResult = (typeof QueryResult)[keyof typeof QueryResult];

/**
 * <p>Object that holds the results for membership.</p>
 * @public
 */
export interface ProfileQueryResult {
  /**
   * <p>The profile id the result belongs to.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>Describes whether the profile was absent or present in the segment.</p>
   * @public
   */
  QueryResult: QueryResult | undefined;

  /**
   * <p>The standard profile of a customer.</p>
   * @public
   */
  Profile?: Profile | undefined;
}

/**
 * @public
 */
export interface GetSegmentMembershipResponse {
  /**
   * <p>The unique name of the segment definition.</p>
   * @public
   */
  SegmentDefinitionName?: string | undefined;

  /**
   * <p>An array of maps where each contains a response per profile requested.</p>
   * @public
   */
  Profiles?: ProfileQueryResult[] | undefined;

  /**
   * <p>An array of maps where each contains a response per profile failed for the
   *          request.</p>
   * @public
   */
  Failures?: ProfileQueryFailures[] | undefined;
}

/**
 * @public
 */
export interface GetSegmentSnapshotRequest {
  /**
   * <p>The unique identifier of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique name of the segment definition.</p>
   * @public
   */
  SegmentDefinitionName: string | undefined;

  /**
   * <p>The unique identifier of the segment snapshot.</p>
   * @public
   */
  SnapshotId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SegmentSnapshotStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type SegmentSnapshotStatus = (typeof SegmentSnapshotStatus)[keyof typeof SegmentSnapshotStatus];

/**
 * @public
 */
export interface GetSegmentSnapshotResponse {
  /**
   * <p>The unique identifier of the segment snapshot.</p>
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * <p>The status of the asynchronous job for exporting the segment snapshot.</p>
   * @public
   */
  Status: SegmentSnapshotStatus | undefined;

  /**
   * <p>The status message of the asynchronous job for exporting the segment snapshot.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The format in which the segment will be exported.</p>
   * @public
   */
  DataFormat: DataFormat | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the exported
   *          segment.</p>
   * @public
   */
  EncryptionKey?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that allows Customer Profiles service
   *          principal to assume the role for conducting KMS and S3 operations.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The destination to which the segment will be exported. This field must be provided if
   *          the request is not submitted from the Amazon Connect Admin Website.</p>
   * @public
   */
  DestinationUri?: string | undefined;
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
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects returned per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

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
  ProfileIds?: string[] | undefined;

  /**
   * <p>The string <code>matchId</code> that the similar profiles belong to.</p>
   * @public
   */
  MatchId?: string | undefined;

  /**
   * <p>Specify the type of matching to get similar profiles for.</p>
   * @public
   */
  MatchType?: MatchType | undefined;

  /**
   * <p>The integer rule level that the profiles matched on.</p>
   * @public
   */
  RuleLevel?: number | undefined;

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
  ConfidenceScore?: number | undefined;

  /**
   * <p>The pagination token from the previous <code>GetSimilarProfiles</code> API call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetUploadJobRequest {
  /**
   * <p>The unique name of the domain containing the upload job. </p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique identifier of the upload job to retrieve. </p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * <p>The summary of results for an upload job, including the number of updated, created, and
 *          failed records. </p>
 * @public
 */
export interface ResultsSummary {
  /**
   * <p>The number of records that were updated during the upload job. </p>
   * @public
   */
  UpdatedRecords?: number | undefined;

  /**
   * <p>The number of records that were newly created during the upload job. </p>
   * @public
   */
  CreatedRecords?: number | undefined;

  /**
   * <p>The number of records that failed to be processed during the upload job. </p>
   * @public
   */
  FailedRecords?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const UploadJobStatus = {
  CREATED: "CREATED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PARTIALLY_SUCCEEDED: "PARTIALLY_SUCCEEDED",
  STOPPED: "STOPPED",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type UploadJobStatus = (typeof UploadJobStatus)[keyof typeof UploadJobStatus];

/**
 * @public
 * @enum
 */
export const StatusReason = {
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  VALIDATION_FAILURE: "VALIDATION_FAILURE",
} as const;

/**
 * @public
 */
export type StatusReason = (typeof StatusReason)[keyof typeof StatusReason];

/**
 * @public
 */
export interface GetUploadJobResponse {
  /**
   * <p>The unique identifier of the upload job. </p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The unique name of the upload job. Could be a file name to identify the upload job.
   *       </p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The status describing the status for the upload job. The following are Valid Values: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>CREATED</b>: The upload job has been created, but has
   *                not started processing yet. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>IN_PROGRESS</b>: The upload job is currently in
   *                progress, ingesting and processing the profile data. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PARTIALLY_SUCCEEDED</b>: The upload job has
   *                successfully completed the ingestion and processing of all profile data. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>SUCCEEDED</b>: The upload job has successfully
   *                completed the ingestion and processing of all profile data. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FAILED</b>: The upload job has failed to complete.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>STOPPED</b>: The upload job has been manually stopped
   *                or terminated before completion. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: UploadJobStatus | undefined;

  /**
   * <p>The reason for the current status of the upload job. Possible reasons: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>VALIDATION_FAILURE</b>: The upload job has
   *                encountered an error or issue and was unable to complete the profile data ingestion.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>INTERNAL_FAILURE</b>: Failure caused from service
   *                side </p>
   *             </li>
   *          </ul>
   * @public
   */
  StatusReason?: StatusReason | undefined;

  /**
   * <p>The timestamp when the upload job was created. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp when the upload job was completed. </p>
   * @public
   */
  CompletedAt?: Date | undefined;

  /**
   * <p>The mapping between CSV Columns and Profile Object attributes for the upload job.
   *       </p>
   * @public
   */
  Fields?: Record<string, ObjectTypeField> | undefined;

  /**
   * <p>The unique key columns used for de-duping the keys in the upload job. </p>
   * @public
   */
  UniqueKey?: string | undefined;

  /**
   * <p>The summary of results for the upload job, including the number of updated, created, and
   *          failed records. </p>
   * @public
   */
  ResultsSummary?: ResultsSummary | undefined;

  /**
   * <p>The expiry duration for the profiles ingested with the upload job. </p>
   * @public
   */
  DataExpiry?: number | undefined;
}

/**
 * @public
 */
export interface GetUploadJobPathRequest {
  /**
   * <p>The unique name of the domain containing the upload job. </p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique identifier of the upload job to retrieve the upload path for. This is
   *          generated from the CreateUploadJob API. </p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface GetUploadJobPathResponse {
  /**
   * <p>The pre-signed S3 URL for uploading the CSV file associated with the upload job. </p>
   * @public
   */
  Url: string | undefined;

  /**
   * <p>The plaintext data key used to encrypt the upload file. </p>
   *          <p>To persist to the pre-signed url, use the client token and MD5 client token as header.
   *          The required headers are as follows: </p>
   *          <ul>
   *             <li>
   *                <p>x-amz-server-side-encryption-customer-key: Client Token </p>
   *             </li>
   *             <li>
   *                <p>x-amz-server-side-encryption-customer-key-MD5: MD5 Client Token </p>
   *             </li>
   *             <li>
   *                <p>x-amz-server-side-encryption-customer-algorithm: AES256 </p>
   *             </li>
   *          </ul>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The expiry timestamp for the pre-signed URL, after which the URL will no longer be
   *          valid. </p>
   * @public
   */
  ValidUntil?: Date | undefined;
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
  AppflowIntegration?: AppflowIntegrationWorkflowAttributes | undefined;
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
  AppflowIntegration?: AppflowIntegrationWorkflowMetrics | undefined;
}

/**
 * @public
 */
export interface GetWorkflowResponse {
  /**
   * <p>Unique identifier for the workflow.</p>
   * @public
   */
  WorkflowId?: string | undefined;

  /**
   * <p>The type of workflow. The only supported value is APPFLOW_INTEGRATION.</p>
   * @public
   */
  WorkflowType?: WorkflowType | undefined;

  /**
   * <p>Status of workflow execution.</p>
   * @public
   */
  Status?: Status | undefined;

  /**
   * <p>Workflow error messages during execution (if any).</p>
   * @public
   */
  ErrorDescription?: string | undefined;

  /**
   * <p>The timestamp that represents when workflow execution started.</p>
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * <p>The timestamp that represents when workflow execution last updated.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>Attributes provided for workflow execution.</p>
   * @public
   */
  Attributes?: WorkflowAttributes | undefined;

  /**
   * <p>Workflow specific execution metrics.</p>
   * @public
   */
  Metrics?: WorkflowMetrics | undefined;
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
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
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
  AppflowIntegration?: AppflowIntegrationWorkflowStep | undefined;
}

/**
 * @public
 */
export interface GetWorkflowStepsResponse {
  /**
   * <p>Unique identifier for the workflow.</p>
   * @public
   */
  WorkflowId?: string | undefined;

  /**
   * <p>The type of workflow. The only supported value is APPFLOW_INTEGRATION.</p>
   * @public
   */
  WorkflowType?: WorkflowType | undefined;

  /**
   * <p>List containing workflow step details.</p>
   * @public
   */
  Items?: WorkflowStepItem[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects returned per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Boolean to indicate if hidden integration should be returned. Defaults to <code>False</code>.</p>
   * @public
   */
  IncludeHidden?: boolean | undefined;
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
  ObjectTypeName?: string | undefined;

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
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A map in which each key is an event type from an external application such as Segment or Shopify, and each value is an <code>ObjectTypeName</code> (template) used to ingest the event.
   * It supports the following event types: <code>SegmentIdentify</code>, <code>ShopifyCreateCustomers</code>, <code>ShopifyUpdateCustomers</code>, <code>ShopifyCreateDraftOrders</code>,
   * <code>ShopifyUpdateDraftOrders</code>, <code>ShopifyCreateOrders</code>, and <code>ShopifyUpdatedOrders</code>.</p>
   * @public
   */
  ObjectTypeNames?: Record<string, string> | undefined;

  /**
   * <p>Unique identifier for the workflow.</p>
   * @public
   */
  WorkflowId?: string | undefined;

  /**
   * <p>Boolean that shows if the Flow that's associated with the Integration is created in
   *          Amazon Appflow, or with ObjectTypeName equals _unstructured via API/CLI in
   *          flowDefinition.</p>
   * @public
   */
  IsUnstructured?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. The Integration uses this role to make
   *          Customer Profiles requests on your behalf.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>A list of unique names for active event triggers associated with the integration.</p>
   * @public
   */
  EventTriggerNames?: string[] | undefined;
}

/**
 * @public
 */
export interface ListAccountIntegrationsResponse {
  /**
   * <p>The list of ListAccountIntegration instances.</p>
   * @public
   */
  Items?: ListIntegrationItem[] | undefined;

  /**
   * <p>The pagination token from the previous ListAccountIntegrations API call.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of calculated attribute definitions returned per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCalculatedAttributeDefinitionsResponse {
  /**
   * <p>The list of calculated attribute definitions.</p>
   * @public
   */
  Items?: ListCalculatedAttributeDefinitionItem[] | undefined;

  /**
   * <p>The pagination token from the previous call to
   *          ListCalculatedAttributeDefinitions.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of calculated attributes returned per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

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
  Items?: ListCalculatedAttributeForProfileItem[] | undefined;

  /**
   * <p>The pagination token from the previous call to
   *          ListCalculatedAttributesForProfile.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDomainLayoutsRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects returned per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The layout object that contains LayoutDefinitionName, Description, DisplayName,
 *          IsDefault, LayoutType, Tags, CreatedAt, LastUpdatedAt </p>
 * @public
 */
export interface LayoutItem {
  /**
   * <p>The unique name of the layout.</p>
   * @public
   */
  LayoutDefinitionName: string | undefined;

  /**
   * <p>The description of the layout</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The display name of the layout</p>
   * @public
   */
  DisplayName: string | undefined;

  /**
   * <p>If set to true for a layout, this layout will be used by default to view data. If set to
   *          false, then layout will not be used by default but it can be used to view data by explicit
   *          selection on UI.</p>
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * <p>The type of layout that can be used to view data under customer profiles domain.</p>
   * @public
   */
  LayoutType: LayoutType | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The timestamp of when the layout was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the layout was most recently updated.</p>
   * @public
   */
  LastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListDomainLayoutsResponse {
  /**
   * <p>Contains summary information about an EventStream.</p>
   * @public
   */
  Items?: LayoutItem[] | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDomainsRequest {
  /**
   * <p>The pagination token from the previous ListDomain API call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects returned per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
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
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListDomainsResponse {
  /**
   * <p>The list of ListDomains instances.</p>
   * @public
   */
  Items?: ListDomainItem[] | undefined;

  /**
   * <p>The pagination token from the previous ListDomains API call.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects returned per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
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
  UnhealthySince?: Date | undefined;
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
  StoppedSince?: Date | undefined;

  /**
   * <p>Summary information about the Kinesis data stream.</p>
   * @public
   */
  DestinationSummary?: DestinationSummary | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListEventStreamsResponse {
  /**
   * <p>Contains summary information about an EventStream.</p>
   * @public
   */
  Items?: EventStreamSummary[] | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEventTriggersRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The pagination token to use with ListEventTriggers.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The summary of the event trigger.</p>
 * @public
 */
export interface EventTriggerSummaryItem {
  /**
   * <p>The unique name of the object type.</p>
   * @public
   */
  ObjectTypeName?: string | undefined;

  /**
   * <p>The unique name of the event trigger.</p>
   * @public
   */
  EventTriggerName?: string | undefined;

  /**
   * <p>The description of the event trigger.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The timestamp of when the event trigger was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp of when the event trigger was most recently updated.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>An array of key-value pairs to apply to this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListEventTriggersResponse {
  /**
   * <p>The list of Event Triggers.</p>
   * @public
   */
  Items?: EventTriggerSummaryItem[] | undefined;

  /**
   * <p>The pagination token from the previous call to ListEventTriggers.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
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
  DomainName?: string | undefined;

  /**
   * <p>The unique identifier of the Identity Resolution Job.</p>
   * @public
   */
  JobId?: string | undefined;

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
  Status?: IdentityResolutionJobStatus | undefined;

  /**
   * <p>The timestamp of when the job was started or will be started.</p>
   * @public
   */
  JobStartTime?: Date | undefined;

  /**
   * <p>The timestamp of when the job was completed.</p>
   * @public
   */
  JobEndTime?: Date | undefined;

  /**
   * <p>Statistics about an Identity Resolution Job.</p>
   * @public
   */
  JobStats?: JobStats | undefined;

  /**
   * <p>The S3 location where the Identity Resolution Job writes result files.</p>
   * @public
   */
  ExportingLocation?: ExportingLocation | undefined;

  /**
   * <p>The error messages that are generated when the Identity Resolution Job runs.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface ListIdentityResolutionJobsResponse {
  /**
   * <p>A list of Identity Resolution Jobs.</p>
   * @public
   */
  IdentityResolutionJobsList?: IdentityResolutionJob[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects returned per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Boolean to indicate if hidden integration should be returned. Defaults to <code>False</code>.</p>
   * @public
   */
  IncludeHidden?: boolean | undefined;
}

/**
 * @public
 */
export interface ListIntegrationsResponse {
  /**
   * <p>The list of ListIntegrations instances.</p>
   * @public
   */
  Items?: ListIntegrationItem[] | undefined;

  /**
   * <p>The pagination token from the previous ListIntegrations API call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListObjectTypeAttributesRequest {
  /**
   * <p>The pagination token from the previous call. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects returned per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The unique identifier of the domain.</p>
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
 * <p>Item that contains the attribute and when it was last updated.</p>
 * @public
 */
export interface ListObjectTypeAttributeItem {
  /**
   * <p>Name of the attribute.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>When the attribute was last updated.</p>
   * @public
   */
  LastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListObjectTypeAttributesResponse {
  /**
   * <p>The items returned as part of the response.</p>
   * @public
   */
  Items?: ListObjectTypeAttributeItem[] | undefined;

  /**
   * <p>The pagination token from the previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ProfileAttributeValuesRequest {
  /**
   * <p>The unique identifier of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The attribute name.</p>
   * @public
   */
  AttributeName: string | undefined;
}

/**
 * @public
 */
export interface ProfileAttributeValuesResponse {
  /**
   * <p>The name of the domain.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>The attribute name.</p>
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * <p>The items returned as part of the response.</p>
   * @public
   */
  Items?: AttributeValueItem[] | undefined;

  /**
   * <p>The status code for the response.</p>
   * @public
   */
  StatusCode?: number | undefined;
}

/**
 * @public
 */
export interface ListProfileHistoryRecordsRequest {
  /**
   * <p>The unique name of the domain for which to return profile history records.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The identifier of the profile to be taken.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>Applies a filter to include profile history records only with the specified <code>ObjectTypeName</code> value in the response.</p>
   * @public
   */
  ObjectTypeName?: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Applies a filter to include profile history records only with the specified <code>ActionType</code> value in the response.</p>
   * @public
   */
  ActionType?: ActionType | undefined;

  /**
   * <p>Applies a filter to include profile history records only with the specified <code>PerformedBy</code> value in the response. The <code>PerformedBy</code> value can be the Amazon Resource Name (ARN) of the person or service principal who performed the action.</p>
   * @public
   */
  PerformedBy?: string | undefined;
}

/**
 * <p>Contains profile history record metadata.</p>
 * @public
 */
export interface ProfileHistoryRecord {
  /**
   * <p>The unique identifier of the profile history record.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The name of the profile object type.</p>
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * <p>The timestamp of when the profile history record was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the profile history record was last updated.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>The action type of the profile history record.</p>
   * @public
   */
  ActionType: ActionType | undefined;

  /**
   * <p>The unique identifier of the profile object generated by the service.</p>
   * @public
   */
  ProfileObjectUniqueKey?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the person or service principal who performed the action.</p>
   * @public
   */
  PerformedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListProfileHistoryRecordsResponse {
  /**
   * <p>The list of profile history records.</p>
   * @public
   */
  ProfileHistoryRecords?: ProfileHistoryRecord[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects returned per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

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
  ObjectFilter?: ObjectFilter | undefined;
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
  ObjectTypeName?: string | undefined;

  /**
   * <p>The unique identifier of the ProfileObject generated by the service.</p>
   * @public
   */
  ProfileObjectUniqueKey?: string | undefined;

  /**
   * <p>A JSON representation of a ProfileObject that belongs to a profile.</p>
   * @public
   */
  Object?: string | undefined;
}

/**
 * @public
 */
export interface ListProfileObjectsResponse {
  /**
   * <p>The list of ListProfileObject instances.</p>
   * @public
   */
  Items?: ListProfileObjectsItem[] | undefined;

  /**
   * <p>The pagination token from the previous call to ListProfileObjects.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects returned per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
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
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp of when the domain was most recently edited.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>The amount of profile object max count assigned to the object type.</p>
   * @public
   */
  MaxProfileObjectCount?: number | undefined;

  /**
   * <p>The amount of provisioned profile object max count available.</p>
   * @public
   */
  MaxAvailableProfileObjectCount?: number | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListProfileObjectTypesResponse {
  /**
   * <p>The list of ListProfileObjectTypes instances.</p>
   * @public
   */
  Items?: ListProfileObjectTypeItem[] | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProfileObjectTypeTemplatesRequest {
  /**
   * <p>The pagination token from the previous ListObjectTypeTemplates API call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects returned per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
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
  TemplateId?: string | undefined;

  /**
   * <p>The name of the source of the object template.</p>
   * @public
   */
  SourceName?: string | undefined;

  /**
   * <p>The source of the object template.</p>
   * @public
   */
  SourceObject?: string | undefined;
}

/**
 * @public
 */
export interface ListProfileObjectTypeTemplatesResponse {
  /**
   * <p>The list of ListProfileObjectType template instances.</p>
   * @public
   */
  Items?: ListProfileObjectTypeTemplateItem[] | undefined;

  /**
   * <p>The pagination token from the previous ListObjectTypeTemplates API call. </p>
   * @public
   */
  NextToken?: string | undefined;
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
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of <code>MatchIds</code> returned per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

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
  MatchIds?: string[] | undefined;

  /**
   * <p>The pagination token from the previous <code>ListRuleBasedMatches</code> API
   *          call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSegmentDefinitionsRequest {
  /**
   * <p>The unique identifier of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The maximum number of objects returned per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token from the previous call. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Object holding the segment definition fields.</p>
 * @public
 */
export interface SegmentDefinitionItem {
  /**
   * <p>Name of the segment definition.</p>
   * @public
   */
  SegmentDefinitionName?: string | undefined;

  /**
   * <p>Display name of the segment definition.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The description of the segment definition.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The arn of the segment definition.</p>
   * @public
   */
  SegmentDefinitionArn?: string | undefined;

  /**
   * <p>When the segment definition was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The tags belonging to the segment definition.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListSegmentDefinitionsResponse {
  /**
   * <p>The pagination token from the previous call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>List of segment definitions.</p>
   * @public
   */
  Items?: SegmentDefinitionItem[] | undefined;
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
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListUploadJobsRequest {
  /**
   * <p>The unique name of the domain to list upload jobs for. </p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The maximum number of upload jobs to return per page. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token from the previous call to retrieve the next page of results.
   *       </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The summary information for an individual upload job. </p>
 * @public
 */
export interface UploadJobItem {
  /**
   * <p>The unique identifier of the upload job. </p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The name of the upload job. </p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The current status of the upload job. </p>
   * @public
   */
  Status?: UploadJobStatus | undefined;

  /**
   * <p>The reason for the current status of the upload job. </p>
   * @public
   */
  StatusReason?: StatusReason | undefined;

  /**
   * <p>The timestamp when the upload job was created. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp when the upload job was completed. </p>
   * @public
   */
  CompletedAt?: Date | undefined;

  /**
   * <p>The expiry duration for the profiles ingested with the upload job. </p>
   * @public
   */
  DataExpiry?: number | undefined;
}

/**
 * @public
 */
export interface ListUploadJobsResponse {
  /**
   * <p>The pagination token to use to retrieve the next page of results. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The list of upload jobs for the specified domain. </p>
   * @public
   */
  Items?: UploadJobItem[] | undefined;
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
  WorkflowType?: WorkflowType | undefined;

  /**
   * <p>Status of workflow execution.</p>
   * @public
   */
  Status?: Status | undefined;

  /**
   * <p>Retrieve workflows started after timestamp.</p>
   * @public
   */
  QueryStartDate?: Date | undefined;

  /**
   * <p>Retrieve workflows ended after timestamp.</p>
   * @public
   */
  QueryEndDate?: Date | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
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
  Items?: ListWorkflowsItem[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  AccountNumber?: string | undefined;

  /**
   * <p>A unique identifier for the additional information field to be merged.</p>
   * @public
   */
  AdditionalInformation?: string | undefined;

  /**
   * <p>A unique identifier for the party type field to be merged.</p>
   * @public
   */
  PartyType?: string | undefined;

  /**
   * <p>A unique identifier for the business name field to be merged.</p>
   * @public
   */
  BusinessName?: string | undefined;

  /**
   * <p>A unique identifier for the first name field to be merged.</p>
   * @public
   */
  FirstName?: string | undefined;

  /**
   * <p>A unique identifier for the middle name field to be merged.</p>
   * @public
   */
  MiddleName?: string | undefined;

  /**
   * <p>A unique identifier for the last name field to be merged.</p>
   * @public
   */
  LastName?: string | undefined;

  /**
   * <p>A unique identifier for the birthdate field to be merged.</p>
   * @public
   */
  BirthDate?: string | undefined;

  /**
   * <p>A unique identifier for the gender field to be merged.</p>
   * @public
   */
  Gender?: string | undefined;

  /**
   * <p>A unique identifier for the phone number field to be merged.</p>
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * <p>A unique identifier for the mobile phone number field to be merged.</p>
   * @public
   */
  MobilePhoneNumber?: string | undefined;

  /**
   * <p>A unique identifier for the home phone number field to be merged.</p>
   * @public
   */
  HomePhoneNumber?: string | undefined;

  /**
   * <p>A unique identifier for the business phone number field to be merged.</p>
   * @public
   */
  BusinessPhoneNumber?: string | undefined;

  /**
   * <p>A unique identifier for the email address field to be merged.</p>
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * <p>A unique identifier for the personal email address field to be merged.</p>
   * @public
   */
  PersonalEmailAddress?: string | undefined;

  /**
   * <p>A unique identifier for the party type field to be merged.</p>
   * @public
   */
  BusinessEmailAddress?: string | undefined;

  /**
   * <p>A unique identifier for the party type field to be merged.</p>
   * @public
   */
  Address?: string | undefined;

  /**
   * <p>A unique identifier for the shipping address field to be merged.</p>
   * @public
   */
  ShippingAddress?: string | undefined;

  /**
   * <p>A unique identifier for the mailing address field to be merged.</p>
   * @public
   */
  MailingAddress?: string | undefined;

  /**
   * <p>A unique identifier for the billing type field to be merged.</p>
   * @public
   */
  BillingAddress?: string | undefined;

  /**
   * <p>A unique identifier for the attributes field to be merged.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * <p>A unique identifier for the profile type field to be merged.</p>
   * @public
   */
  ProfileType?: string | undefined;

  /**
   * <p>A unique identifier for the engagement preferences field to be merged.</p>
   * @public
   */
  EngagementPreferences?: string | undefined;
}
