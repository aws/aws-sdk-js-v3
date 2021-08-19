import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

export enum AggregationType {
  NONE = "None",
  SINGLE_FILE = "SingleFile",
}

/**
 * <p> The aggregation settings that you can use to customize the output format of your flow
 *       data. </p>
 */
export interface AggregationConfig {
  /**
   * <p> Specifies whether Amazon AppFlow aggregates the flow records into a single file, or leave
   *       them unaggregated. </p>
   */
  aggregationType?: AggregationType | string;
}

export namespace AggregationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AggregationConfig): any => ({
    ...obj,
  });
}

export enum AmplitudeConnectorOperator {
  BETWEEN = "BETWEEN",
}

/**
 * <p> The connector-specific credentials required when using Amplitude. </p>
 */
export interface AmplitudeConnectorProfileCredentials {
  /**
   * <p> A unique alphanumeric identifier used to authenticate a user, developer, or calling
   *       program to your API. </p>
   */
  apiKey: string | undefined;

  /**
   * <p> The Secret Access Key portion of the credentials. </p>
   */
  secretKey: string | undefined;
}

export namespace AmplitudeConnectorProfileCredentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AmplitudeConnectorProfileCredentials): any => ({
    ...obj,
    ...(obj.secretKey && { secretKey: SENSITIVE_STRING }),
  });
}

/**
 * <p> The connector-specific profile properties required when using Amplitude. </p>
 */
export interface AmplitudeConnectorProfileProperties {}

export namespace AmplitudeConnectorProfileProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AmplitudeConnectorProfileProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The connector metadata specific to Amplitude. </p>
 */
export interface AmplitudeMetadata {}

export namespace AmplitudeMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AmplitudeMetadata): any => ({
    ...obj,
  });
}

/**
 * <p> The properties that are applied when Amplitude is being used as a source. </p>
 */
export interface AmplitudeSourceProperties {
  /**
   * <p> The object specified in the Amplitude flow source. </p>
   */
  object: string | undefined;
}

export namespace AmplitudeSourceProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AmplitudeSourceProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The basic auth credentials required for basic authentication. </p>
 */
export interface BasicAuthCredentials {
  /**
   * <p> The username to use to connect to a resource. </p>
   */
  username: string | undefined;

  /**
   * <p> The password to use to connect to a resource.</p>
   */
  password: string | undefined;
}

export namespace BasicAuthCredentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BasicAuthCredentials): any => ({
    ...obj,
    ...(obj.password && { password: SENSITIVE_STRING }),
  });
}

/**
 * <p> There was a conflict when processing the request (for example, a flow with the given name
 *       already exists within the account. Check for conflicting resource names and try again. </p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  message?: string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

export enum ConnectionMode {
  PRIVATE = "Private",
  PUBLIC = "Public",
}

/**
 * <p> An error occurred when authenticating with the connector endpoint. </p>
 */
export interface ConnectorAuthenticationException extends __SmithyException, $MetadataBearer {
  name: "ConnectorAuthenticationException";
  $fault: "client";
  message?: string;
}

export namespace ConnectorAuthenticationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectorAuthenticationException): any => ({
    ...obj,
  });
}

/**
 * <p> The connector metadata specific to Amazon Connect Customer Profiles. </p>
 */
export interface CustomerProfilesMetadata {}

export namespace CustomerProfilesMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomerProfilesMetadata): any => ({
    ...obj,
  });
}

/**
 * <p> The connector metadata specific to Datadog. </p>
 */
export interface DatadogMetadata {}

export namespace DatadogMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatadogMetadata): any => ({
    ...obj,
  });
}

/**
 * <p> The connector metadata specific to Dynatrace. </p>
 */
export interface DynatraceMetadata {}

export namespace DynatraceMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DynatraceMetadata): any => ({
    ...obj,
  });
}

/**
 * <p> The connector metadata specific to Amazon EventBridge. </p>
 */
export interface EventBridgeMetadata {}

export namespace EventBridgeMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventBridgeMetadata): any => ({
    ...obj,
  });
}

/**
 * <p> The connector metadata specific to Google Analytics. </p>
 */
export interface GoogleAnalyticsMetadata {
  /**
   * <p> The desired authorization scope for the Google Analytics account. </p>
   */
  oAuthScopes?: string[];
}

export namespace GoogleAnalyticsMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GoogleAnalyticsMetadata): any => ({
    ...obj,
  });
}

/**
 * <p> The connector metadata specific to Amazon Honeycode. </p>
 */
export interface HoneycodeMetadata {
  /**
   * <p> The desired authorization scope for the Amazon Honeycode account. </p>
   */
  oAuthScopes?: string[];
}

export namespace HoneycodeMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HoneycodeMetadata): any => ({
    ...obj,
  });
}

/**
 * <p> The connector metadata specific to Infor Nexus. </p>
 */
export interface InforNexusMetadata {}

export namespace InforNexusMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InforNexusMetadata): any => ({
    ...obj,
  });
}

/**
 * <p> The connector metadata specific to Marketo. </p>
 */
export interface MarketoMetadata {}

export namespace MarketoMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MarketoMetadata): any => ({
    ...obj,
  });
}

/**
 * <p> The connector metadata specific to Amazon Redshift. </p>
 */
export interface RedshiftMetadata {}

export namespace RedshiftMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RedshiftMetadata): any => ({
    ...obj,
  });
}

/**
 * <p> The connector metadata specific to Amazon S3. </p>
 */
export interface S3Metadata {}

export namespace S3Metadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Metadata): any => ({
    ...obj,
  });
}

/**
 * <p> The connector metadata specific to Salesforce. </p>
 */
export interface SalesforceMetadata {
  /**
   * <p> The desired authorization scope for the Salesforce account. </p>
   */
  oAuthScopes?: string[];
}

export namespace SalesforceMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SalesforceMetadata): any => ({
    ...obj,
  });
}

/**
 * <p> The connector metadata specific to SAPOData. </p>
 */
export interface SAPODataMetadata {}

export namespace SAPODataMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SAPODataMetadata): any => ({
    ...obj,
  });
}

/**
 * <p> The connector metadata specific to ServiceNow. </p>
 */
export interface ServiceNowMetadata {}

export namespace ServiceNowMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceNowMetadata): any => ({
    ...obj,
  });
}

/**
 * <p> The connector metadata specific to Singular. </p>
 */
export interface SingularMetadata {}

export namespace SingularMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SingularMetadata): any => ({
    ...obj,
  });
}

/**
 * <p> The connector metadata specific to Slack. </p>
 */
export interface SlackMetadata {
  /**
   * <p> The desired authorization scope for the Slack account. </p>
   */
  oAuthScopes?: string[];
}

export namespace SlackMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SlackMetadata): any => ({
    ...obj,
  });
}

/**
 * <p> The connector metadata specific to Snowflake. </p>
 */
export interface SnowflakeMetadata {
  /**
   * <p> Specifies the supported Amazon Web Services Regions when using Snowflake. </p>
   */
  supportedRegions?: string[];
}

export namespace SnowflakeMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnowflakeMetadata): any => ({
    ...obj,
  });
}

/**
 * <p> The connector metadata specific to Trend Micro. </p>
 */
export interface TrendmicroMetadata {}

export namespace TrendmicroMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrendmicroMetadata): any => ({
    ...obj,
  });
}

/**
 * <p> The connector metadata specific to Upsolver. </p>
 */
export interface UpsolverMetadata {}

export namespace UpsolverMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpsolverMetadata): any => ({
    ...obj,
  });
}

/**
 * <p> The connector metadata specific to Veeva. </p>
 */
export interface VeevaMetadata {}

export namespace VeevaMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VeevaMetadata): any => ({
    ...obj,
  });
}

/**
 * <p> The connector metadata specific to Zendesk. </p>
 */
export interface ZendeskMetadata {
  /**
   * <p> The desired authorization scope for the Zendesk account. </p>
   */
  oAuthScopes?: string[];
}

export namespace ZendeskMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ZendeskMetadata): any => ({
    ...obj,
  });
}

/**
 * <p> A structure to specify connector-specific metadata such as <code>oAuthScopes</code>,
 *         <code>supportedRegions</code>, <code>privateLinkServiceUrl</code>, and so on. </p>
 */
export interface ConnectorMetadata {
  /**
   * <p> The connector metadata specific to Amplitude. </p>
   */
  Amplitude?: AmplitudeMetadata;

  /**
   * <p> The connector metadata specific to Datadog. </p>
   */
  Datadog?: DatadogMetadata;

  /**
   * <p> The connector metadata specific to Dynatrace. </p>
   */
  Dynatrace?: DynatraceMetadata;

  /**
   * <p> The connector metadata specific to Google Analytics. </p>
   */
  GoogleAnalytics?: GoogleAnalyticsMetadata;

  /**
   * <p> The connector metadata specific to Infor Nexus. </p>
   */
  InforNexus?: InforNexusMetadata;

  /**
   * <p> The connector metadata specific to Marketo. </p>
   */
  Marketo?: MarketoMetadata;

  /**
   * <p> The connector metadata specific to Amazon Redshift. </p>
   */
  Redshift?: RedshiftMetadata;

  /**
   * <p> The connector metadata specific to Amazon S3. </p>
   */
  S3?: S3Metadata;

  /**
   * <p> The connector metadata specific to Salesforce. </p>
   */
  Salesforce?: SalesforceMetadata;

  /**
   * <p> The connector metadata specific to ServiceNow. </p>
   */
  ServiceNow?: ServiceNowMetadata;

  /**
   * <p> The connector metadata specific to Singular. </p>
   */
  Singular?: SingularMetadata;

  /**
   * <p> The connector metadata specific to Slack. </p>
   */
  Slack?: SlackMetadata;

  /**
   * <p> The connector metadata specific to Snowflake. </p>
   */
  Snowflake?: SnowflakeMetadata;

  /**
   * <p> The connector metadata specific to Trend Micro. </p>
   */
  Trendmicro?: TrendmicroMetadata;

  /**
   * <p> The connector metadata specific to Veeva. </p>
   */
  Veeva?: VeevaMetadata;

  /**
   * <p> The connector metadata specific to Zendesk. </p>
   */
  Zendesk?: ZendeskMetadata;

  /**
   * <p> The connector metadata specific to Amazon EventBridge. </p>
   */
  EventBridge?: EventBridgeMetadata;

  /**
   * <p> The connector metadata specific to Upsolver. </p>
   */
  Upsolver?: UpsolverMetadata;

  /**
   * <p> The connector metadata specific to Amazon Connect Customer Profiles. </p>
   */
  CustomerProfiles?: CustomerProfilesMetadata;

  /**
   * <p> The connector metadata specific to Amazon Honeycode. </p>
   */
  Honeycode?: HoneycodeMetadata;

  /**
   * <p> The connector metadata specific to SAPOData. </p>
   */
  SAPOData?: SAPODataMetadata;
}

export namespace ConnectorMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectorMetadata): any => ({
    ...obj,
  });
}

export enum ConnectorType {
  AMPLITUDE = "Amplitude",
  CUSTOMERPROFILES = "CustomerProfiles",
  DATADOG = "Datadog",
  DYNATRACE = "Dynatrace",
  EVENTBRIDGE = "EventBridge",
  GOOGLEANALYTICS = "Googleanalytics",
  HONEYCODE = "Honeycode",
  INFORNEXUS = "Infornexus",
  LOOKOUTMETRICS = "LookoutMetrics",
  MARKETO = "Marketo",
  REDSHIFT = "Redshift",
  S3 = "S3",
  SALESFORCE = "Salesforce",
  SAPODATA = "SAPOData",
  SERVICENOW = "Servicenow",
  SINGULAR = "Singular",
  SLACK = "Slack",
  SNOWFLAKE = "Snowflake",
  TRENDMICRO = "Trendmicro",
  UPSOLVER = "Upsolver",
  VEEVA = "Veeva",
  ZENDESK = "Zendesk",
}

export enum ScheduleFrequencyType {
  BYMINUTE = "BYMINUTE",
  DAILY = "DAILY",
  HOURLY = "HOURLY",
  MONTHLY = "MONTHLY",
  ONCE = "ONCE",
  WEEKLY = "WEEKLY",
}

export enum TriggerType {
  EVENT = "Event",
  ONDEMAND = "OnDemand",
  SCHEDULED = "Scheduled",
}

/**
 * <p> The configuration settings related to a given connector. </p>
 */
export interface ConnectorConfiguration {
  /**
   * <p> Specifies whether the connector can be used as a source. </p>
   */
  canUseAsSource?: boolean;

  /**
   * <p> Specifies whether the connector can be used as a destination. </p>
   */
  canUseAsDestination?: boolean;

  /**
   * <p> Lists the connectors that are available for use as destinations. </p>
   */
  supportedDestinationConnectors?: (ConnectorType | string)[];

  /**
   * <p> Specifies the supported flow frequency for that connector. </p>
   */
  supportedSchedulingFrequencies?: (ScheduleFrequencyType | string)[];

  /**
   * <p> Specifies if PrivateLink is enabled for that connector. </p>
   */
  isPrivateLinkEnabled?: boolean;

  /**
   * <p> Specifies if a PrivateLink endpoint URL is required. </p>
   */
  isPrivateLinkEndpointUrlRequired?: boolean;

  /**
   * <p> Specifies the supported trigger types for the flow. </p>
   */
  supportedTriggerTypes?: (TriggerType | string)[];

  /**
   * <p> Specifies connector-specific metadata such as <code>oAuthScopes</code>,
   *         <code>supportedRegions</code>, <code>privateLinkServiceUrl</code>, and so on. </p>
   */
  connectorMetadata?: ConnectorMetadata;
}

export namespace ConnectorConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectorConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p> The high-level entity that can be queried in Amazon AppFlow. For example, a Salesforce
 *       entity might be an <i>Account</i> or <i>Opportunity</i>, whereas a
 *       ServiceNow entity might be an <i>Incident</i>. </p>
 */
export interface ConnectorEntity {
  /**
   * <p> The name of the connector entity. </p>
   */
  name: string | undefined;

  /**
   * <p> The label applied to the connector entity. </p>
   */
  label?: string;

  /**
   * <p> Specifies whether the connector entity is a parent or a category and has more entities
   *       nested underneath it. If another call is made with <code>entitiesPath =
   *         "the_current_entity_name_with_hasNestedEntities_true"</code>, then it returns the nested
   *       entities underneath it. This provides a way to retrieve all supported entities in a recursive
   *       fashion. </p>
   */
  hasNestedEntities?: boolean;
}

export namespace ConnectorEntity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectorEntity): any => ({
    ...obj,
  });
}

export enum WriteOperationType {
  INSERT = "INSERT",
  UPDATE = "UPDATE",
  UPSERT = "UPSERT",
}

/**
 * <p> The properties that can be applied to a field when connector is being used as a
 *       destination. </p>
 */
export interface DestinationFieldProperties {
  /**
   * <p> Specifies if the destination field can be created by the current user. </p>
   */
  isCreatable?: boolean;

  /**
   * <p> Specifies if the destination field can have a null value. </p>
   */
  isNullable?: boolean;

  /**
   * <p> Specifies if the flow run can either insert new rows in the destination field if they do
   *       not already exist, or update them if they do. </p>
   */
  isUpsertable?: boolean;

  /**
   * <p> Specifies whether the field can be updated during an <code>UPDATE</code> or
   *         <code>UPSERT</code> write operation. </p>
   */
  isUpdatable?: boolean;

  /**
   * <p> A list of supported write operations. For each write operation listed, this field can be
   *       used in <code>idFieldNames</code> when that write operation is present as a destination
   *       option. </p>
   */
  supportedWriteOperations?: (WriteOperationType | string)[];
}

export namespace DestinationFieldProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DestinationFieldProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The properties that can be applied to a field when the connector is being used as a
 *       source. </p>
 */
export interface SourceFieldProperties {
  /**
   * <p> Indicates whether the field can be returned in a search result. </p>
   */
  isRetrievable?: boolean;

  /**
   * <p> Indicates if the field can be queried. </p>
   */
  isQueryable?: boolean;
}

export namespace SourceFieldProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceFieldProperties): any => ({
    ...obj,
  });
}

export enum Operator {
  ADDITION = "ADDITION",
  BETWEEN = "BETWEEN",
  CONTAINS = "CONTAINS",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO = "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO = "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NOT_EQUAL_TO = "NOT_EQUAL_TO",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

/**
 * <p> Contains details regarding the supported field type and the operators that can be applied
 *       for filtering. </p>
 */
export interface FieldTypeDetails {
  /**
   * <p> The type of field, such as string, integer, date, and so on. </p>
   */
  fieldType: string | undefined;

  /**
   * <p> The list of operators supported by a field. </p>
   */
  filterOperators: (Operator | string)[] | undefined;

  /**
   * <p> The list of values that a field can contain. For example, a Boolean
   *         <code>fieldType</code> can have two values: "true" and "false". </p>
   */
  supportedValues?: string[];
}

export namespace FieldTypeDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FieldTypeDetails): any => ({
    ...obj,
  });
}

/**
 * <p> Contains details regarding all the supported <code>FieldTypes</code> and their
 *       corresponding <code>filterOperators</code> and <code>supportedValues</code>. </p>
 */
export interface SupportedFieldTypeDetails {
  /**
   * <p> The initial supported version for <code>fieldType</code>. If this is later changed to a
   *       different version, v2 will be introduced. </p>
   */
  v1: FieldTypeDetails | undefined;
}

export namespace SupportedFieldTypeDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SupportedFieldTypeDetails): any => ({
    ...obj,
  });
}

/**
 * <p> Describes the data model of a connector field. For example, for an
 *         <i>account</i> entity, the fields would be <i>account name</i>,
 *         <i>account ID</i>, and so on. </p>
 */
export interface ConnectorEntityField {
  /**
   * <p> The unique identifier of the connector field. </p>
   */
  identifier: string | undefined;

  /**
   * <p> The label applied to a connector entity field. </p>
   */
  label?: string;

  /**
   * <p> Contains details regarding the supported <code>FieldType</code>, including the
   *       corresponding <code>filterOperators</code> and <code>supportedValues</code>. </p>
   */
  supportedFieldTypeDetails?: SupportedFieldTypeDetails;

  /**
   * <p> A description of the connector entity field. </p>
   */
  description?: string;

  /**
   * <p> The properties that can be applied to a field when the connector is being used as a
   *       source. </p>
   */
  sourceProperties?: SourceFieldProperties;

  /**
   * <p> The properties applied to a field when the connector is being used as a destination.
   *     </p>
   */
  destinationProperties?: DestinationFieldProperties;
}

export namespace ConnectorEntityField {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectorEntityField): any => ({
    ...obj,
  });
}

/**
 * <p> Used by select connectors for which the OAuth workflow is supported, such as Salesforce,
 *       Google Analytics, Marketo, Zendesk, and Slack. </p>
 */
export interface ConnectorOAuthRequest {
  /**
   * <p> The code provided by the connector when it has been authenticated via the connected app.
   *     </p>
   */
  authCode?: string;

  /**
   * <p> The URL to which the authentication server redirects the browser after authorization has
   *       been granted. </p>
   */
  redirectUri?: string;
}

export namespace ConnectorOAuthRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectorOAuthRequest): any => ({
    ...obj,
  });
}

export enum DatadogConnectorOperator {
  ADDITION = "ADDITION",
  BETWEEN = "BETWEEN",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum DynatraceConnectorOperator {
  ADDITION = "ADDITION",
  BETWEEN = "BETWEEN",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum GoogleAnalyticsConnectorOperator {
  BETWEEN = "BETWEEN",
  PROJECTION = "PROJECTION",
}

export enum InforNexusConnectorOperator {
  ADDITION = "ADDITION",
  BETWEEN = "BETWEEN",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum MarketoConnectorOperator {
  ADDITION = "ADDITION",
  BETWEEN = "BETWEEN",
  DIVISION = "DIVISION",
  GREATER_THAN = "GREATER_THAN",
  LESS_THAN = "LESS_THAN",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum S3ConnectorOperator {
  ADDITION = "ADDITION",
  BETWEEN = "BETWEEN",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO = "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO = "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NOT_EQUAL_TO = "NOT_EQUAL_TO",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum SalesforceConnectorOperator {
  ADDITION = "ADDITION",
  BETWEEN = "BETWEEN",
  CONTAINS = "CONTAINS",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO = "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO = "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NOT_EQUAL_TO = "NOT_EQUAL_TO",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum SAPODataConnectorOperator {
  ADDITION = "ADDITION",
  BETWEEN = "BETWEEN",
  CONTAINS = "CONTAINS",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO = "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO = "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NOT_EQUAL_TO = "NOT_EQUAL_TO",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum ServiceNowConnectorOperator {
  ADDITION = "ADDITION",
  BETWEEN = "BETWEEN",
  CONTAINS = "CONTAINS",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO = "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO = "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NOT_EQUAL_TO = "NOT_EQUAL_TO",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum SingularConnectorOperator {
  ADDITION = "ADDITION",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum SlackConnectorOperator {
  ADDITION = "ADDITION",
  BETWEEN = "BETWEEN",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO = "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO = "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum TrendmicroConnectorOperator {
  ADDITION = "ADDITION",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum VeevaConnectorOperator {
  ADDITION = "ADDITION",
  BETWEEN = "BETWEEN",
  CONTAINS = "CONTAINS",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO = "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO = "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NOT_EQUAL_TO = "NOT_EQUAL_TO",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum ZendeskConnectorOperator {
  ADDITION = "ADDITION",
  DIVISION = "DIVISION",
  GREATER_THAN = "GREATER_THAN",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

/**
 * <p> The operation to be performed on the provided source fields. </p>
 */
export interface ConnectorOperator {
  /**
   * <p> The operation to be performed on the provided Amplitude source fields. </p>
   */
  Amplitude?: AmplitudeConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided Datadog source fields. </p>
   */
  Datadog?: DatadogConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided Dynatrace source fields. </p>
   */
  Dynatrace?: DynatraceConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided Google Analytics source fields. </p>
   */
  GoogleAnalytics?: GoogleAnalyticsConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided Infor Nexus source fields. </p>
   */
  InforNexus?: InforNexusConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided Marketo source fields. </p>
   */
  Marketo?: MarketoConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided Amazon S3 source fields. </p>
   */
  S3?: S3ConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided Salesforce source fields. </p>
   */
  Salesforce?: SalesforceConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided ServiceNow source fields. </p>
   */
  ServiceNow?: ServiceNowConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided Singular source fields. </p>
   */
  Singular?: SingularConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided Slack source fields. </p>
   */
  Slack?: SlackConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided Trend Micro source fields. </p>
   */
  Trendmicro?: TrendmicroConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided Veeva source fields. </p>
   */
  Veeva?: VeevaConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided Zendesk source fields. </p>
   */
  Zendesk?: ZendeskConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided SAPOData source fields. </p>
   */
  SAPOData?: SAPODataConnectorOperator | string;
}

export namespace ConnectorOperator {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectorOperator): any => ({
    ...obj,
  });
}

/**
 * <p> The connector-specific profile properties required by Datadog. </p>
 */
export interface DatadogConnectorProfileProperties {
  /**
   * <p> The location of the Datadog resource. </p>
   */
  instanceUrl: string | undefined;
}

export namespace DatadogConnectorProfileProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatadogConnectorProfileProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The connector-specific profile properties required by Dynatrace. </p>
 */
export interface DynatraceConnectorProfileProperties {
  /**
   * <p> The location of the Dynatrace resource. </p>
   */
  instanceUrl: string | undefined;
}

export namespace DynatraceConnectorProfileProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DynatraceConnectorProfileProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The connector-specific profile properties required by Google Analytics. </p>
 */
export interface GoogleAnalyticsConnectorProfileProperties {}

export namespace GoogleAnalyticsConnectorProfileProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GoogleAnalyticsConnectorProfileProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The connector-specific properties required when using Amazon Honeycode. </p>
 */
export interface HoneycodeConnectorProfileProperties {}

export namespace HoneycodeConnectorProfileProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HoneycodeConnectorProfileProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The connector-specific profile properties required by Infor Nexus. </p>
 */
export interface InforNexusConnectorProfileProperties {
  /**
   * <p> The location of the Infor Nexus resource. </p>
   */
  instanceUrl: string | undefined;
}

export namespace InforNexusConnectorProfileProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InforNexusConnectorProfileProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The connector-specific profile properties required when using Marketo. </p>
 */
export interface MarketoConnectorProfileProperties {
  /**
   * <p> The location of the Marketo resource. </p>
   */
  instanceUrl: string | undefined;
}

export namespace MarketoConnectorProfileProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MarketoConnectorProfileProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The connector-specific profile properties when using Amazon Redshift. </p>
 */
export interface RedshiftConnectorProfileProperties {
  /**
   * <p> The JDBC URL of the Amazon Redshift cluster. </p>
   */
  databaseUrl: string | undefined;

  /**
   * <p> A name for the associated Amazon S3 bucket. </p>
   */
  bucketName: string | undefined;

  /**
   * <p> The object key for the destination bucket in which Amazon AppFlow places the files.
   *     </p>
   */
  bucketPrefix?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the IAM role. </p>
   */
  roleArn: string | undefined;
}

export namespace RedshiftConnectorProfileProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RedshiftConnectorProfileProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The connector-specific profile properties required when using Salesforce. </p>
 */
export interface SalesforceConnectorProfileProperties {
  /**
   * <p> The location of the Salesforce resource. </p>
   */
  instanceUrl?: string;

  /**
   * <p> Indicates whether the connector profile applies to a sandbox or production environment.
   *     </p>
   */
  isSandboxEnvironment?: boolean;
}

export namespace SalesforceConnectorProfileProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SalesforceConnectorProfileProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The OAuth properties required for OAuth type authentication. </p>
 */
export interface OAuthProperties {
  /**
   * <p> The token url required to fetch access/refresh tokens using authorization code and also to refresh expired
   *       access token using refresh token.</p>
   */
  tokenUrl: string | undefined;

  /**
   * <p> The authorization code url required to redirect to SAP Login Page to fetch authorization code for OAuth type
   *       authentication. </p>
   */
  authCodeUrl: string | undefined;

  /**
   * <p> The OAuth scopes required for OAuth type authentication. </p>
   */
  oAuthScopes: string[] | undefined;
}

export namespace OAuthProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OAuthProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The connector-specific profile properties required when using SAPOData. </p>
 */
export interface SAPODataConnectorProfileProperties {
  /**
   * <p> The location of the SAPOData resource. </p>
   */
  applicationHostUrl: string | undefined;

  /**
   * <p> The application path to catalog service. </p>
   */
  applicationServicePath: string | undefined;

  /**
   * <p> The port number of the SAPOData instance. </p>
   */
  portNumber: number | undefined;

  /**
   * <p> The client number for the client creating the connection. </p>
   */
  clientNumber: string | undefined;

  /**
   * <p> The logon language of SAPOData instance. </p>
   */
  logonLanguage?: string;

  /**
   * <p> The SAPOData Private Link service name to be used for private data transfers. </p>
   */
  privateLinkServiceName?: string;

  /**
   * <p> The SAPOData OAuth properties required for OAuth type authentication. </p>
   */
  oAuthProperties?: OAuthProperties;
}

export namespace SAPODataConnectorProfileProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SAPODataConnectorProfileProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The connector-specific profile properties required when using ServiceNow. </p>
 */
export interface ServiceNowConnectorProfileProperties {
  /**
   * <p> The location of the ServiceNow resource. </p>
   */
  instanceUrl: string | undefined;
}

export namespace ServiceNowConnectorProfileProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceNowConnectorProfileProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The connector-specific profile properties required when using Singular. </p>
 */
export interface SingularConnectorProfileProperties {}

export namespace SingularConnectorProfileProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SingularConnectorProfileProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The connector-specific profile properties required when using Slack. </p>
 */
export interface SlackConnectorProfileProperties {
  /**
   * <p> The location of the Slack resource. </p>
   */
  instanceUrl: string | undefined;
}

export namespace SlackConnectorProfileProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SlackConnectorProfileProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The connector-specific profile properties required when using Snowflake. </p>
 */
export interface SnowflakeConnectorProfileProperties {
  /**
   * <p> The name of the Snowflake warehouse. </p>
   */
  warehouse: string | undefined;

  /**
   * <p> The name of the Amazon S3 stage that was created while setting up an Amazon S3 stage in
   *       the Snowflake account. This is written in the following format: < Database><
   *       Schema><Stage Name>. </p>
   */
  stage: string | undefined;

  /**
   * <p> The name of the Amazon S3 bucket associated with Snowflake. </p>
   */
  bucketName: string | undefined;

  /**
   * <p> The bucket path that refers to the Amazon S3 bucket associated with Snowflake. </p>
   */
  bucketPrefix?: string;

  /**
   * <p> The Snowflake Private Link service name to be used for private data transfers. </p>
   */
  privateLinkServiceName?: string;

  /**
   * <p> The name of the account. </p>
   */
  accountName?: string;

  /**
   * <p> The Amazon Web Services Region of the Snowflake account. </p>
   */
  region?: string;
}

export namespace SnowflakeConnectorProfileProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnowflakeConnectorProfileProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The connector-specific profile properties required when using Trend Micro. </p>
 */
export interface TrendmicroConnectorProfileProperties {}

export namespace TrendmicroConnectorProfileProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrendmicroConnectorProfileProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The connector-specific profile properties required when using Veeva. </p>
 */
export interface VeevaConnectorProfileProperties {
  /**
   * <p> The location of the Veeva resource. </p>
   */
  instanceUrl: string | undefined;
}

export namespace VeevaConnectorProfileProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VeevaConnectorProfileProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The connector-specific profile properties required when using Zendesk. </p>
 */
export interface ZendeskConnectorProfileProperties {
  /**
   * <p> The location of the Zendesk resource. </p>
   */
  instanceUrl: string | undefined;
}

export namespace ZendeskConnectorProfileProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ZendeskConnectorProfileProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The connector-specific profile properties required by each connector. </p>
 */
export interface ConnectorProfileProperties {
  /**
   * <p> The connector-specific properties required by Amplitude. </p>
   */
  Amplitude?: AmplitudeConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by Datadog. </p>
   */
  Datadog?: DatadogConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by Dynatrace. </p>
   */
  Dynatrace?: DynatraceConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required Google Analytics. </p>
   */
  GoogleAnalytics?: GoogleAnalyticsConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by Amazon Honeycode. </p>
   */
  Honeycode?: HoneycodeConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by Infor Nexus. </p>
   */
  InforNexus?: InforNexusConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by Marketo. </p>
   */
  Marketo?: MarketoConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by Amazon Redshift. </p>
   */
  Redshift?: RedshiftConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by Salesforce. </p>
   */
  Salesforce?: SalesforceConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by serviceNow. </p>
   */
  ServiceNow?: ServiceNowConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by Singular. </p>
   */
  Singular?: SingularConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by Slack. </p>
   */
  Slack?: SlackConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by Snowflake. </p>
   */
  Snowflake?: SnowflakeConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by Trend Micro. </p>
   */
  Trendmicro?: TrendmicroConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by Veeva. </p>
   */
  Veeva?: VeevaConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by Zendesk. </p>
   */
  Zendesk?: ZendeskConnectorProfileProperties;

  /**
   * <p> The connector-specific profile properties required when using SAPOData. </p>
   */
  SAPOData?: SAPODataConnectorProfileProperties;
}

export namespace ConnectorProfileProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectorProfileProperties): any => ({
    ...obj,
  });
}

export enum PrivateConnectionProvisioningFailureCause {
  ACCESS_DENIED = "ACCESS_DENIED",
  CONNECTOR_AUTHENTICATION = "CONNECTOR_AUTHENTICATION",
  CONNECTOR_SERVER = "CONNECTOR_SERVER",
  INTERNAL_SERVER = "INTERNAL_SERVER",
  VALIDATION = "VALIDATION",
}

export enum PrivateConnectionProvisioningStatus {
  CREATED = "CREATED",
  FAILED = "FAILED",
  PENDING = "PENDING",
}

/**
 * <p> Specifies the private connection provisioning state. </p>
 */
export interface PrivateConnectionProvisioningState {
  /**
   * <p> Specifies the private connection provisioning status. </p>
   */
  status?: PrivateConnectionProvisioningStatus | string;

  /**
   * <p> Specifies the private connection provisioning failure reason. </p>
   */
  failureMessage?: string;

  /**
   * <p> Specifies the private connection provisioning failure cause. </p>
   */
  failureCause?: PrivateConnectionProvisioningFailureCause | string;
}

export namespace PrivateConnectionProvisioningState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrivateConnectionProvisioningState): any => ({
    ...obj,
  });
}

/**
 * <p> Describes an instance of a connector. This includes the provided name, credentials ARN,
 *       connection-mode, and so on. To keep the API intuitive and extensible, the fields that are
 *       common to all types of connector profiles are explicitly specified at the top level. The rest
 *       of the connector-specific properties are available via the
 *         <code>connectorProfileProperties</code> field. </p>
 */
export interface ConnectorProfile {
  /**
   * <p> The Amazon Resource Name (ARN) of the connector profile. </p>
   */
  connectorProfileArn?: string;

  /**
   * <p> The name of the connector profile. The name is unique for each
   *         <code>ConnectorProfile</code> in the Amazon Web Services account. </p>
   */
  connectorProfileName?: string;

  /**
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   */
  connectorType?: ConnectorType | string;

  /**
   * <p> Indicates the connection mode and if it is public or private. </p>
   */
  connectionMode?: ConnectionMode | string;

  /**
   * <p> The Amazon Resource Name (ARN) of the connector profile credentials. </p>
   */
  credentialsArn?: string;

  /**
   * <p> The connector-specific properties of the profile configuration. </p>
   */
  connectorProfileProperties?: ConnectorProfileProperties;

  /**
   * <p> Specifies when the connector profile was created. </p>
   */
  createdAt?: Date;

  /**
   * <p> Specifies when the connector profile was last updated. </p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p> Specifies the private connection provisioning state. </p>
   */
  privateConnectionProvisioningState?: PrivateConnectionProvisioningState;
}

export namespace ConnectorProfile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectorProfile): any => ({
    ...obj,
  });
}

/**
 * <p> The connector-specific credentials required by Datadog. </p>
 */
export interface DatadogConnectorProfileCredentials {
  /**
   * <p> A unique alphanumeric identifier used to authenticate a user, developer, or calling
   *       program to your API. </p>
   */
  apiKey: string | undefined;

  /**
   * <p> Application keys, in conjunction with your API key, give you full access to Datadog’s
   *       programmatic API. Application keys are associated with the user account that created them. The
   *       application key is used to log all requests made to the API. </p>
   */
  applicationKey: string | undefined;
}

export namespace DatadogConnectorProfileCredentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatadogConnectorProfileCredentials): any => ({
    ...obj,
  });
}

/**
 * <p> The connector-specific profile credentials required by Dynatrace. </p>
 */
export interface DynatraceConnectorProfileCredentials {
  /**
   * <p> The API tokens used by Dynatrace API to authenticate various API calls. </p>
   */
  apiToken: string | undefined;
}

export namespace DynatraceConnectorProfileCredentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DynatraceConnectorProfileCredentials): any => ({
    ...obj,
  });
}

/**
 * <p> The connector-specific profile credentials required by Google Analytics. </p>
 */
export interface GoogleAnalyticsConnectorProfileCredentials {
  /**
   * <p> The identifier for the desired client. </p>
   */
  clientId: string | undefined;

  /**
   * <p> The client secret used by the OAuth client to authenticate to the authorization server.
   *     </p>
   */
  clientSecret: string | undefined;

  /**
   * <p> The credentials used to access protected Google Analytics resources. </p>
   */
  accessToken?: string;

  /**
   * <p> The credentials used to acquire new access tokens. This is required only for OAuth2
   *       access tokens, and is not required for OAuth1 access tokens. </p>
   */
  refreshToken?: string;

  /**
   * <p> The OAuth requirement needed to request security tokens from the connector endpoint.
   *     </p>
   */
  oAuthRequest?: ConnectorOAuthRequest;
}

export namespace GoogleAnalyticsConnectorProfileCredentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GoogleAnalyticsConnectorProfileCredentials): any => ({
    ...obj,
    ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
  });
}

/**
 * <p> The connector-specific credentials required when using Amazon Honeycode. </p>
 */
export interface HoneycodeConnectorProfileCredentials {
  /**
   * <p> The credentials used to access protected Amazon Honeycode resources. </p>
   */
  accessToken?: string;

  /**
   * <p> The credentials used to acquire new access tokens. </p>
   */
  refreshToken?: string;

  /**
   * <p> Used by select connectors for which the OAuth workflow is supported, such as Salesforce,
   *       Google Analytics, Marketo, Zendesk, and Slack. </p>
   */
  oAuthRequest?: ConnectorOAuthRequest;
}

export namespace HoneycodeConnectorProfileCredentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HoneycodeConnectorProfileCredentials): any => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
  });
}

/**
 * <p> The connector-specific profile credentials required by Infor Nexus. </p>
 */
export interface InforNexusConnectorProfileCredentials {
  /**
   * <p> The Access Key portion of the credentials. </p>
   */
  accessKeyId: string | undefined;

  /**
   * <p> The identifier for the user. </p>
   */
  userId: string | undefined;

  /**
   * <p> The secret key used to sign requests. </p>
   */
  secretAccessKey: string | undefined;

  /**
   * <p> The encryption keys used to encrypt data. </p>
   */
  datakey: string | undefined;
}

export namespace InforNexusConnectorProfileCredentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InforNexusConnectorProfileCredentials): any => ({
    ...obj,
    ...(obj.accessKeyId && { accessKeyId: SENSITIVE_STRING }),
  });
}

/**
 * <p> The connector-specific profile credentials required by Marketo. </p>
 */
export interface MarketoConnectorProfileCredentials {
  /**
   * <p> The identifier for the desired client. </p>
   */
  clientId: string | undefined;

  /**
   * <p> The client secret used by the OAuth client to authenticate to the authorization server.
   *     </p>
   */
  clientSecret: string | undefined;

  /**
   * <p> The credentials used to access protected Marketo resources. </p>
   */
  accessToken?: string;

  /**
   * <p> The OAuth requirement needed to request security tokens from the connector endpoint.
   *     </p>
   */
  oAuthRequest?: ConnectorOAuthRequest;
}

export namespace MarketoConnectorProfileCredentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MarketoConnectorProfileCredentials): any => ({
    ...obj,
    ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
  });
}

/**
 * <p> The connector-specific profile credentials required when using Amazon Redshift. </p>
 */
export interface RedshiftConnectorProfileCredentials {
  /**
   * <p> The name of the user. </p>
   */
  username: string | undefined;

  /**
   * <p> The password that corresponds to the user name. </p>
   */
  password: string | undefined;
}

export namespace RedshiftConnectorProfileCredentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RedshiftConnectorProfileCredentials): any => ({
    ...obj,
    ...(obj.password && { password: SENSITIVE_STRING }),
  });
}

/**
 * <p> The connector-specific profile credentials required when using Salesforce. </p>
 */
export interface SalesforceConnectorProfileCredentials {
  /**
   * <p> The credentials used to access protected Salesforce resources. </p>
   */
  accessToken?: string;

  /**
   * <p> The credentials used to acquire new access tokens. </p>
   */
  refreshToken?: string;

  /**
   * <p> The OAuth requirement needed to request security tokens from the connector endpoint.
   *     </p>
   */
  oAuthRequest?: ConnectorOAuthRequest;

  /**
   * <p> The secret manager ARN, which contains the client ID and client secret of the connected
   *       app. </p>
   */
  clientCredentialsArn?: string;
}

export namespace SalesforceConnectorProfileCredentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SalesforceConnectorProfileCredentials): any => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
    ...(obj.clientCredentialsArn && { clientCredentialsArn: SENSITIVE_STRING }),
  });
}

/**
 * <p> The OAuth credentials required for OAuth type authentication. </p>
 */
export interface OAuthCredentials {
  /**
   * <p> The identifier for the desired client. </p>
   */
  clientId: string | undefined;

  /**
   * <p> The client secret used by the OAuth client to authenticate to the authorization server.
   *     </p>
   */
  clientSecret: string | undefined;

  /**
   * <p> The access token used to access protected SAPOData resources. </p>
   */
  accessToken?: string;

  /**
   * <p> The refresh token used to refresh expired access token. </p>
   */
  refreshToken?: string;

  /**
   * <p> The OAuth requirement needed to request security tokens from the connector endpoint.
   *     </p>
   */
  oAuthRequest?: ConnectorOAuthRequest;
}

export namespace OAuthCredentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OAuthCredentials): any => ({
    ...obj,
    ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
  });
}

/**
 * <p> The connector-specific profile credentials required when using SAPOData. </p>
 */
export interface SAPODataConnectorProfileCredentials {
  /**
   * <p> The SAPOData basic authentication credentials. </p>
   */
  basicAuthCredentials?: BasicAuthCredentials;

  /**
   * <p> The SAPOData OAuth type authentication credentials. </p>
   */
  oAuthCredentials?: OAuthCredentials;
}

export namespace SAPODataConnectorProfileCredentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SAPODataConnectorProfileCredentials): any => ({
    ...obj,
    ...(obj.basicAuthCredentials && {
      basicAuthCredentials: BasicAuthCredentials.filterSensitiveLog(obj.basicAuthCredentials),
    }),
    ...(obj.oAuthCredentials && { oAuthCredentials: OAuthCredentials.filterSensitiveLog(obj.oAuthCredentials) }),
  });
}

/**
 * <p> The connector-specific profile credentials required when using ServiceNow. </p>
 */
export interface ServiceNowConnectorProfileCredentials {
  /**
   * <p> The name of the user. </p>
   */
  username: string | undefined;

  /**
   * <p> The password that corresponds to the user name. </p>
   */
  password: string | undefined;
}

export namespace ServiceNowConnectorProfileCredentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceNowConnectorProfileCredentials): any => ({
    ...obj,
    ...(obj.password && { password: SENSITIVE_STRING }),
  });
}

/**
 * <p> The connector-specific profile credentials required when using Singular. </p>
 */
export interface SingularConnectorProfileCredentials {
  /**
   * <p> A unique alphanumeric identifier used to authenticate a user, developer, or calling
   *       program to your API. </p>
   */
  apiKey: string | undefined;
}

export namespace SingularConnectorProfileCredentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SingularConnectorProfileCredentials): any => ({
    ...obj,
  });
}

/**
 * <p> The connector-specific profile credentials required when using Slack. </p>
 */
export interface SlackConnectorProfileCredentials {
  /**
   * <p> The identifier for the client. </p>
   */
  clientId: string | undefined;

  /**
   * <p> The client secret used by the OAuth client to authenticate to the authorization server.
   *     </p>
   */
  clientSecret: string | undefined;

  /**
   * <p> The credentials used to access protected Slack resources. </p>
   */
  accessToken?: string;

  /**
   * <p> The OAuth requirement needed to request security tokens from the connector endpoint.
   *     </p>
   */
  oAuthRequest?: ConnectorOAuthRequest;
}

export namespace SlackConnectorProfileCredentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SlackConnectorProfileCredentials): any => ({
    ...obj,
    ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
  });
}

/**
 * <p> The connector-specific profile credentials required when using Snowflake. </p>
 */
export interface SnowflakeConnectorProfileCredentials {
  /**
   * <p> The name of the user. </p>
   */
  username: string | undefined;

  /**
   * <p> The password that corresponds to the user name. </p>
   */
  password: string | undefined;
}

export namespace SnowflakeConnectorProfileCredentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnowflakeConnectorProfileCredentials): any => ({
    ...obj,
    ...(obj.password && { password: SENSITIVE_STRING }),
  });
}

/**
 * <p> The connector-specific profile credentials required when using Trend Micro. </p>
 */
export interface TrendmicroConnectorProfileCredentials {
  /**
   * <p> The Secret Access Key portion of the credentials. </p>
   */
  apiSecretKey: string | undefined;
}

export namespace TrendmicroConnectorProfileCredentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrendmicroConnectorProfileCredentials): any => ({
    ...obj,
    ...(obj.apiSecretKey && { apiSecretKey: SENSITIVE_STRING }),
  });
}

/**
 * <p> The connector-specific profile credentials required when using Veeva. </p>
 */
export interface VeevaConnectorProfileCredentials {
  /**
   * <p> The name of the user. </p>
   */
  username: string | undefined;

  /**
   * <p> The password that corresponds to the user name. </p>
   */
  password: string | undefined;
}

export namespace VeevaConnectorProfileCredentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VeevaConnectorProfileCredentials): any => ({
    ...obj,
    ...(obj.password && { password: SENSITIVE_STRING }),
  });
}

/**
 * <p> The connector-specific profile credentials required when using Zendesk. </p>
 */
export interface ZendeskConnectorProfileCredentials {
  /**
   * <p> The identifier for the desired client. </p>
   */
  clientId: string | undefined;

  /**
   * <p> The client secret used by the OAuth client to authenticate to the authorization server.
   *     </p>
   */
  clientSecret: string | undefined;

  /**
   * <p> The credentials used to access protected Zendesk resources. </p>
   */
  accessToken?: string;

  /**
   * <p> The OAuth requirement needed to request security tokens from the connector endpoint.
   *     </p>
   */
  oAuthRequest?: ConnectorOAuthRequest;
}

export namespace ZendeskConnectorProfileCredentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ZendeskConnectorProfileCredentials): any => ({
    ...obj,
    ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
  });
}

/**
 * <p> The connector-specific credentials required by a connector. </p>
 */
export interface ConnectorProfileCredentials {
  /**
   * <p> The connector-specific credentials required when using Amplitude. </p>
   */
  Amplitude?: AmplitudeConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Datadog. </p>
   */
  Datadog?: DatadogConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Dynatrace. </p>
   */
  Dynatrace?: DynatraceConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Google Analytics. </p>
   */
  GoogleAnalytics?: GoogleAnalyticsConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Amazon Honeycode. </p>
   */
  Honeycode?: HoneycodeConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Infor Nexus. </p>
   */
  InforNexus?: InforNexusConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Marketo. </p>
   */
  Marketo?: MarketoConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Amazon Redshift. </p>
   */
  Redshift?: RedshiftConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Salesforce. </p>
   */
  Salesforce?: SalesforceConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using ServiceNow. </p>
   */
  ServiceNow?: ServiceNowConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Singular. </p>
   */
  Singular?: SingularConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Slack. </p>
   */
  Slack?: SlackConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Snowflake. </p>
   */
  Snowflake?: SnowflakeConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Trend Micro. </p>
   */
  Trendmicro?: TrendmicroConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Veeva. </p>
   */
  Veeva?: VeevaConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Zendesk. </p>
   */
  Zendesk?: ZendeskConnectorProfileCredentials;

  /**
   * <p> The connector-specific profile credentials required when using SAPOData. </p>
   */
  SAPOData?: SAPODataConnectorProfileCredentials;
}

export namespace ConnectorProfileCredentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectorProfileCredentials): any => ({
    ...obj,
    ...(obj.Amplitude && { Amplitude: AmplitudeConnectorProfileCredentials.filterSensitiveLog(obj.Amplitude) }),
    ...(obj.GoogleAnalytics && {
      GoogleAnalytics: GoogleAnalyticsConnectorProfileCredentials.filterSensitiveLog(obj.GoogleAnalytics),
    }),
    ...(obj.Honeycode && { Honeycode: HoneycodeConnectorProfileCredentials.filterSensitiveLog(obj.Honeycode) }),
    ...(obj.InforNexus && { InforNexus: InforNexusConnectorProfileCredentials.filterSensitiveLog(obj.InforNexus) }),
    ...(obj.Marketo && { Marketo: MarketoConnectorProfileCredentials.filterSensitiveLog(obj.Marketo) }),
    ...(obj.Redshift && { Redshift: RedshiftConnectorProfileCredentials.filterSensitiveLog(obj.Redshift) }),
    ...(obj.Salesforce && { Salesforce: SalesforceConnectorProfileCredentials.filterSensitiveLog(obj.Salesforce) }),
    ...(obj.ServiceNow && { ServiceNow: ServiceNowConnectorProfileCredentials.filterSensitiveLog(obj.ServiceNow) }),
    ...(obj.Slack && { Slack: SlackConnectorProfileCredentials.filterSensitiveLog(obj.Slack) }),
    ...(obj.Snowflake && { Snowflake: SnowflakeConnectorProfileCredentials.filterSensitiveLog(obj.Snowflake) }),
    ...(obj.Trendmicro && { Trendmicro: TrendmicroConnectorProfileCredentials.filterSensitiveLog(obj.Trendmicro) }),
    ...(obj.Veeva && { Veeva: VeevaConnectorProfileCredentials.filterSensitiveLog(obj.Veeva) }),
    ...(obj.Zendesk && { Zendesk: ZendeskConnectorProfileCredentials.filterSensitiveLog(obj.Zendesk) }),
    ...(obj.SAPOData && { SAPOData: SAPODataConnectorProfileCredentials.filterSensitiveLog(obj.SAPOData) }),
  });
}

/**
 * <p> Defines the connector-specific configuration and credentials for the connector profile.
 *     </p>
 */
export interface ConnectorProfileConfig {
  /**
   * <p> The connector-specific properties of the profile configuration. </p>
   */
  connectorProfileProperties: ConnectorProfileProperties | undefined;

  /**
   * <p> The connector-specific credentials required by each connector. </p>
   */
  connectorProfileCredentials: ConnectorProfileCredentials | undefined;
}

export namespace ConnectorProfileConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectorProfileConfig): any => ({
    ...obj,
    ...(obj.connectorProfileCredentials && {
      connectorProfileCredentials: ConnectorProfileCredentials.filterSensitiveLog(obj.connectorProfileCredentials),
    }),
  });
}

/**
 * <p> An error occurred when retrieving data from the connector endpoint. </p>
 */
export interface ConnectorServerException extends __SmithyException, $MetadataBearer {
  name: "ConnectorServerException";
  $fault: "client";
  message?: string;
}

export namespace ConnectorServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectorServerException): any => ({
    ...obj,
  });
}

export interface CreateConnectorProfileRequest {
  /**
   * <p> The name of the connector profile. The name is unique for each
   *         <code>ConnectorProfile</code> in your Amazon Web Services account. </p>
   */
  connectorProfileName: string | undefined;

  /**
   * <p> The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for
   *       encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If
   *       you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key.
   *     </p>
   */
  kmsArn?: string;

  /**
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   */
  connectorType: ConnectorType | string | undefined;

  /**
   * <p> Indicates the connection mode and specifies whether it is public or private. Private
   *       flows use Amazon Web Services PrivateLink to route data over Amazon Web Services infrastructure without exposing it to the
   *       public internet. </p>
   */
  connectionMode: ConnectionMode | string | undefined;

  /**
   * <p> Defines the connector-specific configuration and credentials. </p>
   */
  connectorProfileConfig: ConnectorProfileConfig | undefined;
}

export namespace CreateConnectorProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateConnectorProfileRequest): any => ({
    ...obj,
  });
}

export interface CreateConnectorProfileResponse {
  /**
   * <p> The Amazon Resource Name (ARN) of the connector profile. </p>
   */
  connectorProfileArn?: string;
}

export namespace CreateConnectorProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateConnectorProfileResponse): any => ({
    ...obj,
  });
}

/**
 * <p> An internal service error occurred during the processing of your request. Try again
 *       later. </p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message?: string;
}

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p> The request would cause a service quota (such as the number of flows) to be exceeded.
 *     </p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  message?: string;
}

export namespace ServiceQuotaExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

/**
 * <p> The request has invalid or missing parameters. </p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message?: string;
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

/**
 * <p> The properties that are applied when Amazon Connect Customer Profiles is used as a
 *       destination. </p>
 */
export interface CustomerProfilesDestinationProperties {
  /**
   * <p> The unique name of the Amazon Connect Customer Profiles domain. </p>
   */
  domainName: string | undefined;

  /**
   * <p> The object specified in the Amazon Connect Customer Profiles flow destination. </p>
   */
  objectTypeName?: string;
}

export namespace CustomerProfilesDestinationProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomerProfilesDestinationProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The settings that determine how Amazon AppFlow handles an error when placing data in the
 *       destination. For example, this setting would determine if the flow should fail after one
 *       insertion error, or continue and attempt to insert every record regardless of the initial
 *       failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.
 *     </p>
 */
export interface ErrorHandlingConfig {
  /**
   * <p> Specifies if the flow should fail after the first instance of a failure when attempting
   *       to place data in the destination. </p>
   */
  failOnFirstDestinationError?: boolean;

  /**
   * <p> Specifies the Amazon S3 bucket prefix. </p>
   */
  bucketPrefix?: string;

  /**
   * <p> Specifies the name of the Amazon S3 bucket. </p>
   */
  bucketName?: string;
}

export namespace ErrorHandlingConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ErrorHandlingConfig): any => ({
    ...obj,
  });
}

/**
 * <p> The properties that are applied when Amazon EventBridge is being used as a destination.
 *     </p>
 */
export interface EventBridgeDestinationProperties {
  /**
   * <p> The object specified in the Amazon EventBridge flow destination. </p>
   */
  object: string | undefined;

  /**
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data in the
   *       destination. For example, this setting would determine if the flow should fail after one
   *       insertion error, or continue and attempt to insert every record regardless of the initial
   *       failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.
   *     </p>
   */
  errorHandlingConfig?: ErrorHandlingConfig;
}

export namespace EventBridgeDestinationProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventBridgeDestinationProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The properties that are applied when Amazon Honeycode is used as a destination. </p>
 */
export interface HoneycodeDestinationProperties {
  /**
   * <p> The object specified in the Amazon Honeycode flow destination. </p>
   */
  object: string | undefined;

  /**
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data in the
   *       destination. For example, this setting would determine if the flow should fail after one
   *       insertion error, or continue and attempt to insert every record regardless of the initial
   *       failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.
   *     </p>
   */
  errorHandlingConfig?: ErrorHandlingConfig;
}

export namespace HoneycodeDestinationProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HoneycodeDestinationProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The properties that are applied when Amazon Lookout for Metrics is used as a destination.
 *     </p>
 */
export interface LookoutMetricsDestinationProperties {}

export namespace LookoutMetricsDestinationProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LookoutMetricsDestinationProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The properties that are applied when Amazon Redshift is being used as a destination.
 *     </p>
 */
export interface RedshiftDestinationProperties {
  /**
   * <p> The object specified in the Amazon Redshift flow destination. </p>
   */
  object: string | undefined;

  /**
   * <p> The intermediate bucket that Amazon AppFlow uses when moving data into Amazon Redshift.
   *     </p>
   */
  intermediateBucketName: string | undefined;

  /**
   * <p> The object key for the bucket in which Amazon AppFlow places the destination files.
   *     </p>
   */
  bucketPrefix?: string;

  /**
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data in the
   *       Amazon Redshift destination. For example, this setting would determine if the flow should fail
   *       after one insertion error, or continue and attempt to insert every record regardless of the
   *       initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector
   *       details. </p>
   */
  errorHandlingConfig?: ErrorHandlingConfig;
}

export namespace RedshiftDestinationProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RedshiftDestinationProperties): any => ({
    ...obj,
  });
}

export enum FileType {
  CSV = "CSV",
  JSON = "JSON",
  PARQUET = "PARQUET",
}

export enum PrefixFormat {
  DAY = "DAY",
  HOUR = "HOUR",
  MINUTE = "MINUTE",
  MONTH = "MONTH",
  YEAR = "YEAR",
}

export enum PrefixType {
  FILENAME = "FILENAME",
  PATH = "PATH",
  PATH_AND_FILENAME = "PATH_AND_FILENAME",
}

/**
 * <p> Determines the prefix that Amazon AppFlow applies to the destination folder name. You can
 *       name your destination folders according to the flow frequency and date. </p>
 */
export interface PrefixConfig {
  /**
   * <p> Determines the format of the prefix, and whether it applies to the file name, file path,
   *       or both. </p>
   */
  prefixType?: PrefixType | string;

  /**
   * <p> Determines the level of granularity that's included in the prefix. </p>
   */
  prefixFormat?: PrefixFormat | string;
}

export namespace PrefixConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrefixConfig): any => ({
    ...obj,
  });
}

/**
 * <p> The configuration that determines how Amazon AppFlow should format the flow output data
 *       when Amazon S3 is used as the destination. </p>
 */
export interface S3OutputFormatConfig {
  /**
   * <p> Indicates the file type that Amazon AppFlow places in the Amazon S3 bucket. </p>
   */
  fileType?: FileType | string;

  /**
   * <p> Determines the prefix that Amazon AppFlow applies to the folder name in the Amazon S3
   *       bucket. You can name folders according to the flow frequency and date. </p>
   */
  prefixConfig?: PrefixConfig;

  /**
   * <p> The aggregation settings that you can use to customize the output format of your flow
   *       data. </p>
   */
  aggregationConfig?: AggregationConfig;
}

export namespace S3OutputFormatConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3OutputFormatConfig): any => ({
    ...obj,
  });
}

/**
 * <p> The properties that are applied when Amazon S3 is used as a destination. </p>
 */
export interface S3DestinationProperties {
  /**
   * <p> The Amazon S3 bucket name in which Amazon AppFlow places the transferred data. </p>
   */
  bucketName: string | undefined;

  /**
   * <p> The object key for the destination bucket in which Amazon AppFlow places the files.
   *     </p>
   */
  bucketPrefix?: string;

  /**
   * <p> The configuration that determines how Amazon AppFlow should format the flow output data
   *       when Amazon S3 is used as the destination. </p>
   */
  s3OutputFormatConfig?: S3OutputFormatConfig;
}

export namespace S3DestinationProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3DestinationProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The properties that are applied when Salesforce is being used as a destination. </p>
 */
export interface SalesforceDestinationProperties {
  /**
   * <p> The object specified in the Salesforce flow destination. </p>
   */
  object: string | undefined;

  /**
   * <p> The name of the field that Amazon AppFlow uses as an ID when performing a write operation
   *       such as update or delete. </p>
   */
  idFieldNames?: string[];

  /**
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data in the
   *       Salesforce destination. For example, this setting would determine if the flow should fail
   *       after one insertion error, or continue and attempt to insert every record regardless of the
   *       initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector
   *       details. </p>
   */
  errorHandlingConfig?: ErrorHandlingConfig;

  /**
   * <p> This specifies the type of write operation to be performed in Salesforce. When the value
   *       is <code>UPSERT</code>, then <code>idFieldNames</code> is required. </p>
   */
  writeOperationType?: WriteOperationType | string;
}

export namespace SalesforceDestinationProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SalesforceDestinationProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The properties that are applied when Snowflake is being used as a destination. </p>
 */
export interface SnowflakeDestinationProperties {
  /**
   * <p> The object specified in the Snowflake flow destination. </p>
   */
  object: string | undefined;

  /**
   * <p> The intermediate bucket that Amazon AppFlow uses when moving data into Snowflake. </p>
   */
  intermediateBucketName: string | undefined;

  /**
   * <p> The object key for the destination bucket in which Amazon AppFlow places the files.
   *     </p>
   */
  bucketPrefix?: string;

  /**
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data in the
   *       Snowflake destination. For example, this setting would determine if the flow should fail after
   *       one insertion error, or continue and attempt to insert every record regardless of the initial
   *       failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.
   *     </p>
   */
  errorHandlingConfig?: ErrorHandlingConfig;
}

export namespace SnowflakeDestinationProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnowflakeDestinationProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The configuration that determines how Amazon AppFlow formats the flow output data when
 *       Upsolver is used as the destination. </p>
 */
export interface UpsolverS3OutputFormatConfig {
  /**
   * <p> Indicates the file type that Amazon AppFlow places in the Upsolver Amazon S3 bucket.
   *     </p>
   */
  fileType?: FileType | string;

  /**
   * <p> Determines the prefix that Amazon AppFlow applies to the destination folder name. You can
   *       name your destination folders according to the flow frequency and date. </p>
   */
  prefixConfig: PrefixConfig | undefined;

  /**
   * <p> The aggregation settings that you can use to customize the output format of your flow
   *       data. </p>
   */
  aggregationConfig?: AggregationConfig;
}

export namespace UpsolverS3OutputFormatConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpsolverS3OutputFormatConfig): any => ({
    ...obj,
  });
}

/**
 * <p> The properties that are applied when Upsolver is used as a destination. </p>
 */
export interface UpsolverDestinationProperties {
  /**
   * <p> The Upsolver Amazon S3 bucket name in which Amazon AppFlow places the transferred data.
   *     </p>
   */
  bucketName: string | undefined;

  /**
   * <p> The object key for the destination Upsolver Amazon S3 bucket in which Amazon AppFlow
   *       places the files. </p>
   */
  bucketPrefix?: string;

  /**
   * <p> The configuration that determines how data is formatted when Upsolver is used as the flow
   *       destination. </p>
   */
  s3OutputFormatConfig: UpsolverS3OutputFormatConfig | undefined;
}

export namespace UpsolverDestinationProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpsolverDestinationProperties): any => ({
    ...obj,
  });
}

/**
 * <p>The properties that are applied when Zendesk is used as a destination.</p>
 */
export interface ZendeskDestinationProperties {
  /**
   * <p>The object specified in the Zendesk flow destination.</p>
   */
  object: string | undefined;

  /**
   * <p> A list of field names that can be used as an ID field when performing a write operation.
   *     </p>
   */
  idFieldNames?: string[];

  /**
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data in the
   *       destination. For example, this setting would determine if the flow should fail after one
   *       insertion error, or continue and attempt to insert every record regardless of the initial
   *       failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.
   *     </p>
   */
  errorHandlingConfig?: ErrorHandlingConfig;

  /**
   * <p> The possible write operations in the destination connector. When this value is not
   *       provided, this defaults to the <code>INSERT</code> operation. </p>
   */
  writeOperationType?: WriteOperationType | string;
}

export namespace ZendeskDestinationProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ZendeskDestinationProperties): any => ({
    ...obj,
  });
}

/**
 * <p> This stores the information that is required to query a particular connector. </p>
 */
export interface DestinationConnectorProperties {
  /**
   * <p> The properties required to query Amazon Redshift. </p>
   */
  Redshift?: RedshiftDestinationProperties;

  /**
   * <p> The properties required to query Amazon S3. </p>
   */
  S3?: S3DestinationProperties;

  /**
   * <p> The properties required to query Salesforce. </p>
   */
  Salesforce?: SalesforceDestinationProperties;

  /**
   * <p> The properties required to query Snowflake. </p>
   */
  Snowflake?: SnowflakeDestinationProperties;

  /**
   * <p> The properties required to query Amazon EventBridge. </p>
   */
  EventBridge?: EventBridgeDestinationProperties;

  /**
   * <p> The properties required to query Amazon Lookout for Metrics. </p>
   */
  LookoutMetrics?: LookoutMetricsDestinationProperties;

  /**
   * <p> The properties required to query Upsolver. </p>
   */
  Upsolver?: UpsolverDestinationProperties;

  /**
   * <p> The properties required to query Amazon Honeycode. </p>
   */
  Honeycode?: HoneycodeDestinationProperties;

  /**
   * <p> The properties required to query Amazon Connect Customer Profiles. </p>
   */
  CustomerProfiles?: CustomerProfilesDestinationProperties;

  /**
   * <p>The properties required to query Zendesk.</p>
   */
  Zendesk?: ZendeskDestinationProperties;
}

export namespace DestinationConnectorProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DestinationConnectorProperties): any => ({
    ...obj,
  });
}

/**
 * <p> Contains information about the configuration of destination connectors present in the
 *       flow. </p>
 */
export interface DestinationFlowConfig {
  /**
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   */
  connectorType: ConnectorType | string | undefined;

  /**
   * <p> The name of the connector profile. This name must be unique for each connector profile in
   *       the Amazon Web Services account. </p>
   */
  connectorProfileName?: string;

  /**
   * <p> This stores the information that is required to query a particular connector. </p>
   */
  destinationConnectorProperties: DestinationConnectorProperties | undefined;
}

export namespace DestinationFlowConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DestinationFlowConfig): any => ({
    ...obj,
  });
}

/**
 * <p> Specifies the configuration used when importing incremental records from the source.
 *     </p>
 */
export interface IncrementalPullConfig {
  /**
   * <p> A field that specifies the date time or timestamp field as the criteria to use when
   *       importing incremental records from the source. </p>
   */
  datetimeTypeFieldName?: string;
}

export namespace IncrementalPullConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IncrementalPullConfig): any => ({
    ...obj,
  });
}

/**
 * <p> The properties that are applied when Datadog is being used as a source. </p>
 */
export interface DatadogSourceProperties {
  /**
   * <p> The object specified in the Datadog flow source. </p>
   */
  object: string | undefined;
}

export namespace DatadogSourceProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatadogSourceProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The properties that are applied when Dynatrace is being used as a source. </p>
 */
export interface DynatraceSourceProperties {
  /**
   * <p> The object specified in the Dynatrace flow source. </p>
   */
  object: string | undefined;
}

export namespace DynatraceSourceProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DynatraceSourceProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The properties that are applied when Google Analytics is being used as a source. </p>
 */
export interface GoogleAnalyticsSourceProperties {
  /**
   * <p> The object specified in the Google Analytics flow source. </p>
   */
  object: string | undefined;
}

export namespace GoogleAnalyticsSourceProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GoogleAnalyticsSourceProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The properties that are applied when Infor Nexus is being used as a source. </p>
 */
export interface InforNexusSourceProperties {
  /**
   * <p> The object specified in the Infor Nexus flow source. </p>
   */
  object: string | undefined;
}

export namespace InforNexusSourceProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InforNexusSourceProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The properties that are applied when Marketo is being used as a source. </p>
 */
export interface MarketoSourceProperties {
  /**
   * <p> The object specified in the Marketo flow source. </p>
   */
  object: string | undefined;
}

export namespace MarketoSourceProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MarketoSourceProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The properties that are applied when Amazon S3 is being used as the flow source. </p>
 */
export interface S3SourceProperties {
  /**
   * <p> The Amazon S3 bucket name where the source files are stored. </p>
   */
  bucketName: string | undefined;

  /**
   * <p> The object key for the Amazon S3 bucket in which the source files are stored. </p>
   */
  bucketPrefix?: string;
}

export namespace S3SourceProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3SourceProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The properties that are applied when Salesforce is being used as a source. </p>
 */
export interface SalesforceSourceProperties {
  /**
   * <p> The object specified in the Salesforce flow source. </p>
   */
  object: string | undefined;

  /**
   * <p> The flag that enables dynamic fetching of new (recently added) fields in the Salesforce
   *       objects while running a flow. </p>
   */
  enableDynamicFieldUpdate?: boolean;

  /**
   * <p> Indicates whether Amazon AppFlow includes deleted files in the flow run. </p>
   */
  includeDeletedRecords?: boolean;
}

export namespace SalesforceSourceProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SalesforceSourceProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The properties that are applied when using SAPOData as a flow source. </p>
 */
export interface SAPODataSourceProperties {
  /**
   * <p> The object path specified in the SAPOData flow source. </p>
   */
  objectPath?: string;
}

export namespace SAPODataSourceProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SAPODataSourceProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The properties that are applied when ServiceNow is being used as a source. </p>
 */
export interface ServiceNowSourceProperties {
  /**
   * <p> The object specified in the ServiceNow flow source. </p>
   */
  object: string | undefined;
}

export namespace ServiceNowSourceProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceNowSourceProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The properties that are applied when Singular is being used as a source. </p>
 */
export interface SingularSourceProperties {
  /**
   * <p> The object specified in the Singular flow source. </p>
   */
  object: string | undefined;
}

export namespace SingularSourceProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SingularSourceProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The properties that are applied when Slack is being used as a source. </p>
 */
export interface SlackSourceProperties {
  /**
   * <p> The object specified in the Slack flow source. </p>
   */
  object: string | undefined;
}

export namespace SlackSourceProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SlackSourceProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The properties that are applied when using Trend Micro as a flow source. </p>
 */
export interface TrendmicroSourceProperties {
  /**
   * <p> The object specified in the Trend Micro flow source. </p>
   */
  object: string | undefined;
}

export namespace TrendmicroSourceProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrendmicroSourceProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The properties that are applied when using Veeva as a flow source. </p>
 */
export interface VeevaSourceProperties {
  /**
   * <p> The object specified in the Veeva flow source. </p>
   */
  object: string | undefined;

  /**
   * <p>The document type specified in the Veeva document extract flow.</p>
   */
  documentType?: string;

  /**
   * <p>Boolean value to include source files in Veeva document extract flow.</p>
   */
  includeSourceFiles?: boolean;

  /**
   * <p>Boolean value to include file renditions in Veeva document extract flow.</p>
   */
  includeRenditions?: boolean;

  /**
   * <p>Boolean value to include All Versions of files in Veeva document extract flow.</p>
   */
  includeAllVersions?: boolean;
}

export namespace VeevaSourceProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VeevaSourceProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The properties that are applied when using Zendesk as a flow source. </p>
 */
export interface ZendeskSourceProperties {
  /**
   * <p> The object specified in the Zendesk flow source. </p>
   */
  object: string | undefined;
}

export namespace ZendeskSourceProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ZendeskSourceProperties): any => ({
    ...obj,
  });
}

/**
 * <p> Specifies the information that is required to query a particular connector. </p>
 */
export interface SourceConnectorProperties {
  /**
   * <p> Specifies the information that is required for querying Amplitude. </p>
   */
  Amplitude?: AmplitudeSourceProperties;

  /**
   * <p> Specifies the information that is required for querying Datadog. </p>
   */
  Datadog?: DatadogSourceProperties;

  /**
   * <p> Specifies the information that is required for querying Dynatrace. </p>
   */
  Dynatrace?: DynatraceSourceProperties;

  /**
   * <p> Specifies the information that is required for querying Google Analytics. </p>
   */
  GoogleAnalytics?: GoogleAnalyticsSourceProperties;

  /**
   * <p> Specifies the information that is required for querying Infor Nexus. </p>
   */
  InforNexus?: InforNexusSourceProperties;

  /**
   * <p> Specifies the information that is required for querying Marketo. </p>
   */
  Marketo?: MarketoSourceProperties;

  /**
   * <p> Specifies the information that is required for querying Amazon S3. </p>
   */
  S3?: S3SourceProperties;

  /**
   * <p> Specifies the information that is required for querying Salesforce. </p>
   */
  Salesforce?: SalesforceSourceProperties;

  /**
   * <p> Specifies the information that is required for querying ServiceNow. </p>
   */
  ServiceNow?: ServiceNowSourceProperties;

  /**
   * <p> Specifies the information that is required for querying Singular. </p>
   */
  Singular?: SingularSourceProperties;

  /**
   * <p> Specifies the information that is required for querying Slack. </p>
   */
  Slack?: SlackSourceProperties;

  /**
   * <p> Specifies the information that is required for querying Trend Micro. </p>
   */
  Trendmicro?: TrendmicroSourceProperties;

  /**
   * <p> Specifies the information that is required for querying Veeva. </p>
   */
  Veeva?: VeevaSourceProperties;

  /**
   * <p> Specifies the information that is required for querying Zendesk. </p>
   */
  Zendesk?: ZendeskSourceProperties;

  /**
   * <p> The properties that are applied when using SAPOData as a flow source. </p>
   */
  SAPOData?: SAPODataSourceProperties;
}

export namespace SourceConnectorProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceConnectorProperties): any => ({
    ...obj,
  });
}

/**
 * <p> Contains information about the configuration of the source connector used in the flow.
 *     </p>
 */
export interface SourceFlowConfig {
  /**
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   */
  connectorType: ConnectorType | string | undefined;

  /**
   * <p> The name of the connector profile. This name must be unique for each connector profile in
   *       the Amazon Web Services account. </p>
   */
  connectorProfileName?: string;

  /**
   * <p> Specifies the information that is required to query a particular source connector.
   *     </p>
   */
  sourceConnectorProperties: SourceConnectorProperties | undefined;

  /**
   * <p> Defines the configuration for a scheduled incremental data pull. If a valid configuration
   *       is provided, the fields specified in the configuration are used when querying for the
   *       incremental data pull. </p>
   */
  incrementalPullConfig?: IncrementalPullConfig;
}

export namespace SourceFlowConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceFlowConfig): any => ({
    ...obj,
  });
}

export enum OperatorPropertiesKeys {
  CONCAT_FORMAT = "CONCAT_FORMAT",
  DATA_TYPE = "DATA_TYPE",
  DESTINATION_DATA_TYPE = "DESTINATION_DATA_TYPE",
  EXCLUDE_SOURCE_FIELDS_LIST = "EXCLUDE_SOURCE_FIELDS_LIST",
  LOWER_BOUND = "LOWER_BOUND",
  MASK_LENGTH = "MASK_LENGTH",
  MASK_VALUE = "MASK_VALUE",
  MATH_OPERATION_FIELDS_ORDER = "MATH_OPERATION_FIELDS_ORDER",
  SOURCE_DATA_TYPE = "SOURCE_DATA_TYPE",
  SUBFIELD_CATEGORY_MAP = "SUBFIELD_CATEGORY_MAP",
  TRUNCATE_LENGTH = "TRUNCATE_LENGTH",
  UPPER_BOUND = "UPPER_BOUND",
  VALIDATION_ACTION = "VALIDATION_ACTION",
  VALUE = "VALUE",
  VALUES = "VALUES",
}

export enum TaskType {
  ARITHMETIC = "Arithmetic",
  FILTER = "Filter",
  MAP = "Map",
  MAP_ALL = "Map_all",
  MASK = "Mask",
  MERGE = "Merge",
  TRUNCATE = "Truncate",
  VALIDATE = "Validate",
}

/**
 * <p> A class for modeling different type of tasks. Task implementation varies based on the
 *         <code>TaskType</code>. </p>
 */
export interface Task {
  /**
   * <p> The source fields to which a particular task is applied. </p>
   */
  sourceFields: string[] | undefined;

  /**
   * <p> The operation to be performed on the provided source fields. </p>
   */
  connectorOperator?: ConnectorOperator;

  /**
   * <p> A field in a destination connector, or a field value against which Amazon AppFlow
   *       validates a source field. </p>
   */
  destinationField?: string;

  /**
   * <p> Specifies the particular task implementation that Amazon AppFlow performs. </p>
   */
  taskType: TaskType | string | undefined;

  /**
   * <p> A map used to store task-related information. The execution service looks for particular
   *       information based on the <code>TaskType</code>. </p>
   */
  taskProperties?: { [key: string]: string };
}

export namespace Task {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Task): any => ({
    ...obj,
  });
}

export enum DataPullMode {
  COMPLETE = "Complete",
  INCREMENTAL = "Incremental",
}

/**
 * <p> Specifies the configuration details of a schedule-triggered flow as defined by the user.
 *       Currently, these settings only apply to the <code>Scheduled</code> trigger type. </p>
 */
export interface ScheduledTriggerProperties {
  /**
   * <p> The scheduling expression that determines the rate at which the schedule will run, for
   *       example <code>rate(5minutes)</code>. </p>
   */
  scheduleExpression: string | undefined;

  /**
   * <p> Specifies whether a scheduled flow has an incremental data transfer or a complete data
   *       transfer for each flow run. </p>
   */
  dataPullMode?: DataPullMode | string;

  /**
   * <p> Specifies the scheduled start time for a schedule-triggered flow. </p>
   */
  scheduleStartTime?: Date;

  /**
   * <p> Specifies the scheduled end time for a schedule-triggered flow. </p>
   */
  scheduleEndTime?: Date;

  /**
   * <p> Specifies the time zone used when referring to the date and time of a scheduled-triggered
   *       flow, such as <code>America/New_York</code>. </p>
   */
  timezone?: string;

  /**
   * <p> Specifies the optional offset that is added to the time interval for a schedule-triggered
   *       flow. </p>
   */
  scheduleOffset?: number;

  /**
   * <p> Specifies the date range for the records to import from the connector in the first flow
   *       run. </p>
   */
  firstExecutionFrom?: Date;
}

export namespace ScheduledTriggerProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledTriggerProperties): any => ({
    ...obj,
  });
}

/**
 * <p> Specifies the configuration details that control the trigger for a flow. Currently, these
 *       settings only apply to the <code>Scheduled</code> trigger type. </p>
 */
export interface TriggerProperties {
  /**
   * <p> Specifies the configuration details of a schedule-triggered flow as defined by the user.
   *     </p>
   */
  Scheduled?: ScheduledTriggerProperties;
}

export namespace TriggerProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TriggerProperties): any => ({
    ...obj,
  });
}

/**
 * <p> The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
 *     </p>
 */
export interface TriggerConfig {
  /**
   * <p> Specifies the type of flow trigger. This can be <code>OnDemand</code>,
   *         <code>Scheduled</code>, or <code>Event</code>. </p>
   */
  triggerType: TriggerType | string | undefined;

  /**
   * <p> Specifies the configuration details of a schedule-triggered flow as defined by the user.
   *       Currently, these settings only apply to the <code>Scheduled</code> trigger type. </p>
   */
  triggerProperties?: TriggerProperties;
}

export namespace TriggerConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TriggerConfig): any => ({
    ...obj,
  });
}

export interface CreateFlowRequest {
  /**
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   */
  flowName: string | undefined;

  /**
   * <p> A description of the flow you want to create. </p>
   */
  description?: string;

  /**
   * <p> The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for
   *       encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If
   *       you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key.
   *     </p>
   */
  kmsArn?: string;

  /**
   * <p> The trigger settings that determine how and when the flow runs. </p>
   */
  triggerConfig: TriggerConfig | undefined;

  /**
   * <p> The configuration that controls how Amazon AppFlow retrieves data from the source
   *       connector. </p>
   */
  sourceFlowConfig: SourceFlowConfig | undefined;

  /**
   * <p> The configuration that controls how Amazon AppFlow places data in the destination
   *       connector. </p>
   */
  destinationFlowConfigList: DestinationFlowConfig[] | undefined;

  /**
   * <p> A list of tasks that Amazon AppFlow performs while transferring the data in the flow run.
   *     </p>
   */
  tasks: Task[] | undefined;

  /**
   * <p> The tags used to organize, track, or control access for your flow. </p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateFlowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFlowRequest): any => ({
    ...obj,
  });
}

export enum FlowStatus {
  ACTIVE = "Active",
  DELETED = "Deleted",
  DEPRECATED = "Deprecated",
  DRAFT = "Draft",
  ERRORED = "Errored",
  SUSPENDED = "Suspended",
}

export interface CreateFlowResponse {
  /**
   * <p> The flow's Amazon Resource Name (ARN). </p>
   */
  flowArn?: string;

  /**
   * <p> Indicates the current status of the flow. </p>
   */
  flowStatus?: FlowStatus | string;
}

export namespace CreateFlowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFlowResponse): any => ({
    ...obj,
  });
}

/**
 * <p> The resource specified in the request (such as the source or destination connector
 *       profile) is not found. </p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

export interface DeleteConnectorProfileRequest {
  /**
   * <p> The name of the connector profile. The name is unique for each
   *         <code>ConnectorProfile</code> in your account. </p>
   */
  connectorProfileName: string | undefined;

  /**
   * <p> Indicates whether Amazon AppFlow should delete the profile, even if it is currently in
   *       use in one or more flows. </p>
   */
  forceDelete?: boolean;
}

export namespace DeleteConnectorProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConnectorProfileRequest): any => ({
    ...obj,
  });
}

export interface DeleteConnectorProfileResponse {}

export namespace DeleteConnectorProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConnectorProfileResponse): any => ({
    ...obj,
  });
}

export interface DeleteFlowRequest {
  /**
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   */
  flowName: string | undefined;

  /**
   * <p> Indicates whether Amazon AppFlow should delete the flow, even if it is currently in use.
   *     </p>
   */
  forceDelete?: boolean;
}

export namespace DeleteFlowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFlowRequest): any => ({
    ...obj,
  });
}

export interface DeleteFlowResponse {}

export namespace DeleteFlowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFlowResponse): any => ({
    ...obj,
  });
}

export interface DescribeConnectorEntityRequest {
  /**
   * <p> The entity name for that connector. </p>
   */
  connectorEntityName: string | undefined;

  /**
   * <p> The type of connector application, such as Salesforce, Amplitude, and so on. </p>
   */
  connectorType?: ConnectorType | string;

  /**
   * <p> The name of the connector profile. The name is unique for each
   *         <code>ConnectorProfile</code> in the Amazon Web Services account. </p>
   */
  connectorProfileName?: string;
}

export namespace DescribeConnectorEntityRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConnectorEntityRequest): any => ({
    ...obj,
  });
}

export interface DescribeConnectorEntityResponse {
  /**
   * <p> Describes the fields for that connector entity. For example, for an
   *         <i>account</i> entity, the fields would be <i>account name</i>,
   *         <i>account ID</i>, and so on. </p>
   */
  connectorEntityFields: ConnectorEntityField[] | undefined;
}

export namespace DescribeConnectorEntityResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConnectorEntityResponse): any => ({
    ...obj,
  });
}

export interface DescribeConnectorProfilesRequest {
  /**
   * <p> The name of the connector profile. The name is unique for each
   *         <code>ConnectorProfile</code> in the Amazon Web Services account. </p>
   */
  connectorProfileNames?: string[];

  /**
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   */
  connectorType?: ConnectorType | string;

  /**
   * <p> Specifies the maximum number of items that should be returned in the result set. The
   *       default for <code>maxResults</code> is 20 (for all paginated API operations). </p>
   */
  maxResults?: number;

  /**
   * <p> The pagination token for the next page of data. </p>
   */
  nextToken?: string;
}

export namespace DescribeConnectorProfilesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConnectorProfilesRequest): any => ({
    ...obj,
  });
}

export interface DescribeConnectorProfilesResponse {
  /**
   * <p> Returns information about the connector profiles associated with the flow. </p>
   */
  connectorProfileDetails?: ConnectorProfile[];

  /**
   * <p> The pagination token for the next page of data. If <code>nextToken=null</code>, this
   *       means that all records have been fetched. </p>
   */
  nextToken?: string;
}

export namespace DescribeConnectorProfilesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConnectorProfilesResponse): any => ({
    ...obj,
  });
}

export interface DescribeConnectorsRequest {
  /**
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   */
  connectorTypes?: (ConnectorType | string)[];

  /**
   * <p> The pagination token for the next page of data. </p>
   */
  nextToken?: string;
}

export namespace DescribeConnectorsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConnectorsRequest): any => ({
    ...obj,
  });
}

export interface DescribeConnectorsResponse {
  /**
   * <p> The configuration that is applied to the connectors used in the flow. </p>
   */
  connectorConfigurations?: { [key: string]: ConnectorConfiguration };

  /**
   * <p> The pagination token for the next page of data. </p>
   */
  nextToken?: string;
}

export namespace DescribeConnectorsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConnectorsResponse): any => ({
    ...obj,
  });
}

export interface DescribeFlowRequest {
  /**
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   */
  flowName: string | undefined;
}

export namespace DescribeFlowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFlowRequest): any => ({
    ...obj,
  });
}

export enum ExecutionStatus {
  ERROR = "Error",
  INPROGRESS = "InProgress",
  SUCCESSFUL = "Successful",
}

/**
 * <p> Describes the details of the flow run, including the timestamp, status, and message.
 *     </p>
 */
export interface ExecutionDetails {
  /**
   * <p> Describes the details of the most recent flow run. </p>
   */
  mostRecentExecutionMessage?: string;

  /**
   * <p> Specifies the time of the most recent flow run. </p>
   */
  mostRecentExecutionTime?: Date;

  /**
   * <p> Specifies the status of the most recent flow run. </p>
   */
  mostRecentExecutionStatus?: ExecutionStatus | string;
}

export namespace ExecutionDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExecutionDetails): any => ({
    ...obj,
  });
}

export interface DescribeFlowResponse {
  /**
   * <p> The flow's Amazon Resource Name (ARN). </p>
   */
  flowArn?: string;

  /**
   * <p> A description of the flow. </p>
   */
  description?: string;

  /**
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   */
  flowName?: string;

  /**
   * <p> The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for
   *       encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If
   *       you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key.
   *     </p>
   */
  kmsArn?: string;

  /**
   * <p> Indicates the current status of the flow. </p>
   */
  flowStatus?: FlowStatus | string;

  /**
   * <p> Contains an error message if the flow status is in a suspended or error state. This
   *       applies only to scheduled or event-triggered flows. </p>
   */
  flowStatusMessage?: string;

  /**
   * <p> The configuration that controls how Amazon AppFlow retrieves data from the source
   *       connector. </p>
   */
  sourceFlowConfig?: SourceFlowConfig;

  /**
   * <p> The configuration that controls how Amazon AppFlow transfers data to the destination
   *       connector. </p>
   */
  destinationFlowConfigList?: DestinationFlowConfig[];

  /**
   * <p> Describes the details of the most recent flow run. </p>
   */
  lastRunExecutionDetails?: ExecutionDetails;

  /**
   * <p> The trigger settings that determine how and when the flow runs. </p>
   */
  triggerConfig?: TriggerConfig;

  /**
   * <p> A list of tasks that Amazon AppFlow performs while transferring the data in the flow run.
   *     </p>
   */
  tasks?: Task[];

  /**
   * <p> Specifies when the flow was created. </p>
   */
  createdAt?: Date;

  /**
   * <p> Specifies when the flow was last updated. </p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p> The ARN of the user who created the flow. </p>
   */
  createdBy?: string;

  /**
   * <p> Specifies the user name of the account that performed the most recent update. </p>
   */
  lastUpdatedBy?: string;

  /**
   * <p> The tags used to organize, track, or control access for your flow. </p>
   */
  tags?: { [key: string]: string };
}

export namespace DescribeFlowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFlowResponse): any => ({
    ...obj,
  });
}

export interface DescribeFlowExecutionRecordsRequest {
  /**
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   */
  flowName: string | undefined;

  /**
   * <p> Specifies the maximum number of items that should be returned in the result set. The
   *       default for <code>maxResults</code> is 20 (for all paginated API operations). </p>
   */
  maxResults?: number;

  /**
   * <p> The pagination token for the next page of data. </p>
   */
  nextToken?: string;
}

export namespace DescribeFlowExecutionRecordsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFlowExecutionRecordsRequest): any => ({
    ...obj,
  });
}

/**
 * <p> Provides details in the event of a failed flow, including the failure count and the
 *       related error messages. </p>
 */
export interface ErrorInfo {
  /**
   * <p> Specifies the failure count for the attempted flow. </p>
   */
  putFailuresCount?: number;

  /**
   * <p> Specifies the error message that appears if a flow fails. </p>
   */
  executionMessage?: string;
}

export namespace ErrorInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ErrorInfo): any => ({
    ...obj,
  });
}

/**
 * <p> Specifies the end result of the flow run. </p>
 */
export interface ExecutionResult {
  /**
   * <p> Provides any error message information related to the flow run. </p>
   */
  errorInfo?: ErrorInfo;

  /**
   * <p> The total number of bytes processed by the flow run. </p>
   */
  bytesProcessed?: number;

  /**
   * <p> The total number of bytes written as a result of the flow run. </p>
   */
  bytesWritten?: number;

  /**
   * <p> The number of records processed in the flow run. </p>
   */
  recordsProcessed?: number;
}

export namespace ExecutionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExecutionResult): any => ({
    ...obj,
  });
}

/**
 * <p> Specifies information about the past flow run instances for a given flow. </p>
 */
export interface ExecutionRecord {
  /**
   * <p> Specifies the identifier of the given flow run. </p>
   */
  executionId?: string;

  /**
   * <p> Specifies the flow run status and whether it is in progress, has completed successfully,
   *       or has failed. </p>
   */
  executionStatus?: ExecutionStatus | string;

  /**
   * <p> Describes the result of the given flow run. </p>
   */
  executionResult?: ExecutionResult;

  /**
   * <p> Specifies the start time of the flow run. </p>
   */
  startedAt?: Date;

  /**
   * <p> Specifies the time of the most recent update. </p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p> The timestamp that determines the first new or updated record to be transferred in the
   *       flow run. </p>
   */
  dataPullStartTime?: Date;

  /**
   * <p> The timestamp that indicates the last new or updated record to be transferred in the flow
   *       run. </p>
   */
  dataPullEndTime?: Date;
}

export namespace ExecutionRecord {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExecutionRecord): any => ({
    ...obj,
  });
}

export interface DescribeFlowExecutionRecordsResponse {
  /**
   * <p> Returns a list of all instances when this flow was run. </p>
   */
  flowExecutions?: ExecutionRecord[];

  /**
   * <p> The pagination token for the next page of data. </p>
   */
  nextToken?: string;
}

export namespace DescribeFlowExecutionRecordsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFlowExecutionRecordsResponse): any => ({
    ...obj,
  });
}

/**
 * <p> The properties of the flow, such as its source, destination, trigger type, and so on.
 *     </p>
 */
export interface FlowDefinition {
  /**
   * <p> The flow's Amazon Resource Name (ARN). </p>
   */
  flowArn?: string;

  /**
   * <p> A user-entered description of the flow. </p>
   */
  description?: string;

  /**
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   */
  flowName?: string;

  /**
   * <p> Indicates the current status of the flow. </p>
   */
  flowStatus?: FlowStatus | string;

  /**
   * <p> Specifies the source connector type, such as Salesforce, Amazon S3, Amplitude, and so on.
   *     </p>
   */
  sourceConnectorType?: ConnectorType | string;

  /**
   * <p> Specifies the destination connector type, such as Salesforce, Amazon S3, Amplitude, and
   *       so on. </p>
   */
  destinationConnectorType?: ConnectorType | string;

  /**
   * <p> Specifies the type of flow trigger. This can be <code>OnDemand</code>,
   *         <code>Scheduled</code>, or <code>Event</code>. </p>
   */
  triggerType?: TriggerType | string;

  /**
   * <p> Specifies when the flow was created. </p>
   */
  createdAt?: Date;

  /**
   * <p> Specifies when the flow was last updated. </p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p> The ARN of the user who created the flow. </p>
   */
  createdBy?: string;

  /**
   * <p> Specifies the account user name that most recently updated the flow. </p>
   */
  lastUpdatedBy?: string;

  /**
   * <p> The tags used to organize, track, or control access for your flow. </p>
   */
  tags?: { [key: string]: string };

  /**
   * <p> Describes the details of the most recent flow run. </p>
   */
  lastRunExecutionDetails?: ExecutionDetails;
}

export namespace FlowDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FlowDefinition): any => ({
    ...obj,
  });
}

export interface ListConnectorEntitiesRequest {
  /**
   * <p> The name of the connector profile. The name is unique for each
   *         <code>ConnectorProfile</code> in the Amazon Web Services account, and is used to query the downstream
   *       connector. </p>
   */
  connectorProfileName?: string;

  /**
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   */
  connectorType?: ConnectorType | string;

  /**
   * <p> This optional parameter is specific to connector implementation. Some connectors support
   *       multiple levels or categories of entities. You can find out the list of roots for such
   *       providers by sending a request without the <code>entitiesPath</code> parameter. If the
   *       connector supports entities at different roots, this initial request returns the list of
   *       roots. Otherwise, this request returns all entities supported by the provider. </p>
   */
  entitiesPath?: string;
}

export namespace ListConnectorEntitiesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListConnectorEntitiesRequest): any => ({
    ...obj,
  });
}

export interface ListConnectorEntitiesResponse {
  /**
   * <p> The response of <code>ListConnectorEntities</code> lists entities grouped by category.
   *       This map's key represents the group name, and its value contains the list of entities
   *       belonging to that group. </p>
   */
  connectorEntityMap: { [key: string]: ConnectorEntity[] } | undefined;
}

export namespace ListConnectorEntitiesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListConnectorEntitiesResponse): any => ({
    ...obj,
  });
}

export interface ListFlowsRequest {
  /**
   * <p> Specifies the maximum number of items that should be returned in the result set. </p>
   */
  maxResults?: number;

  /**
   * <p> The pagination token for next page of data. </p>
   */
  nextToken?: string;
}

export namespace ListFlowsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFlowsRequest): any => ({
    ...obj,
  });
}

export interface ListFlowsResponse {
  /**
   * <p> The list of flows associated with your account. </p>
   */
  flows?: FlowDefinition[];

  /**
   * <p> The pagination token for next page of data. </p>
   */
  nextToken?: string;
}

export namespace ListFlowsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFlowsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the specified flow. </p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p> The tags used to organize, track, or control access for your flow. </p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface StartFlowRequest {
  /**
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   */
  flowName: string | undefined;
}

export namespace StartFlowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartFlowRequest): any => ({
    ...obj,
  });
}

export interface StartFlowResponse {
  /**
   * <p> The flow's Amazon Resource Name (ARN). </p>
   */
  flowArn?: string;

  /**
   * <p> Indicates the current status of the flow. </p>
   */
  flowStatus?: FlowStatus | string;

  /**
   * <p> Returns the internal execution ID of an on-demand flow when the flow is started. For
   *       scheduled or event-triggered flows, this value is null. </p>
   */
  executionId?: string;
}

export namespace StartFlowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartFlowResponse): any => ({
    ...obj,
  });
}

export interface StopFlowRequest {
  /**
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   */
  flowName: string | undefined;
}

export namespace StopFlowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopFlowRequest): any => ({
    ...obj,
  });
}

export interface StopFlowResponse {
  /**
   * <p> The flow's Amazon Resource Name (ARN). </p>
   */
  flowArn?: string;

  /**
   * <p> Indicates the current status of the flow. </p>
   */
  flowStatus?: FlowStatus | string;
}

export namespace StopFlowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopFlowResponse): any => ({
    ...obj,
  });
}

/**
 * <p> The requested operation is not supported for the current flow. </p>
 */
export interface UnsupportedOperationException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedOperationException";
  $fault: "client";
  message?: string;
}

export namespace UnsupportedOperationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsupportedOperationException): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the flow that you want to tag. </p>
   */
  resourceArn: string | undefined;

  /**
   * <p> The tags used to organize, track, or control access for your flow. </p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the flow that you want to untag. </p>
   */
  resourceArn: string | undefined;

  /**
   * <p> The tag keys associated with the tag that you want to remove from your flow. </p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateConnectorProfileRequest {
  /**
   * <p> The name of the connector profile and is unique for each <code>ConnectorProfile</code> in
   *       the Amazon Web Services account. </p>
   */
  connectorProfileName: string | undefined;

  /**
   * <p> Indicates the connection mode and if it is public or private. </p>
   */
  connectionMode: ConnectionMode | string | undefined;

  /**
   * <p> Defines the connector-specific profile configuration and credentials. </p>
   */
  connectorProfileConfig: ConnectorProfileConfig | undefined;
}

export namespace UpdateConnectorProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateConnectorProfileRequest): any => ({
    ...obj,
  });
}

export interface UpdateConnectorProfileResponse {
  /**
   * <p> The Amazon Resource Name (ARN) of the connector profile. </p>
   */
  connectorProfileArn?: string;
}

export namespace UpdateConnectorProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateConnectorProfileResponse): any => ({
    ...obj,
  });
}

export interface UpdateFlowRequest {
  /**
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   */
  flowName: string | undefined;

  /**
   * <p> A description of the flow. </p>
   */
  description?: string;

  /**
   * <p> The trigger settings that determine how and when the flow runs. </p>
   */
  triggerConfig: TriggerConfig | undefined;

  /**
   * <p> Contains information about the configuration of the source connector used in the flow.
   *     </p>
   */
  sourceFlowConfig: SourceFlowConfig | undefined;

  /**
   * <p> The configuration that controls how Amazon AppFlow transfers data to the destination
   *       connector. </p>
   */
  destinationFlowConfigList: DestinationFlowConfig[] | undefined;

  /**
   * <p> A list of tasks that Amazon AppFlow performs while transferring the data in the flow run.
   *     </p>
   */
  tasks: Task[] | undefined;
}

export namespace UpdateFlowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFlowRequest): any => ({
    ...obj,
  });
}

export interface UpdateFlowResponse {
  /**
   * <p>Indicates the current status of the flow. </p>
   */
  flowStatus?: FlowStatus | string;
}

export namespace UpdateFlowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFlowResponse): any => ({
    ...obj,
  });
}
