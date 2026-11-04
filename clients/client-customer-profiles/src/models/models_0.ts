// smithy-typescript generated code
import type {
  ActionType,
  AttributeDimensionType,
  AttributeMatchingModel,
  ComparisonOperator,
  ConflictResolvingModel,
  ContactType,
  ContentType,
  DataFormat,
  DataPullMode,
  DateDimensionType,
  DiversityCapType,
  EstimateStatus,
  EventStreamDestinationStatus,
  EventStreamState,
  EventSubscriptionSegmentStatus,
  EventSubscriptionState,
  EventTriggerLogicalOperator,
  FeatureType,
  FieldContentType,
  FilterDimensionType,
  Gender,
  IdentityResolutionJobStatus,
  Include,
  IncludeOptions,
  JobScheduleDayOfTheWeek,
  LayoutType,
  MarketoConnectorOperator,
  MatchType,
  Operator,
  OperatorPropertiesKeys,
  PartyType,
  PeriodUnit,
  ProfileType,
  ProfileTypeDimensionType,
  QueryResult,
  RangeUnit,
  ReadinessStatus,
  RecommenderFilterStatus,
  RecommenderRecipeName,
  RecommenderSchemaStatus,
  RecommenderStatus,
  RuleBasedMatchingStatus,
  S3ConnectorOperator,
  SalesforceConnectorOperator,
  ScheduleConfigurationUnit,
  Scope,
  SegmentSnapshotStatus,
  SegmentSortDataType,
  SegmentSortOrder,
  SegmentSubscriptionStatus,
  SegmentType,
  ServiceNowConnectorOperator,
  SortAttributeType,
  SourceConnectorType,
  StandardIdentifier,
  Statistic,
  Status,
  StatusReason,
  StringDimensionType,
  TaskType,
  TrainingMetricName,
  TriggerType,
  Type,
  Unit,
  UploadJobStatus,
  WorkflowType,
  ZendeskConnectorOperator,
} from "./enums";

/**
 * A data type pair that consists of a `KeyName` and `Values` list that is used in conjunction with the [KeyName](https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html#customerprofiles-SearchProfiles-request-KeyName) and [Values](https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html#customerprofiles-SearchProfiles-request-Values) parameters to search for profiles using the [SearchProfiles](https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html) API.
 *
 * @public
 */
export interface AdditionalSearchKey {
  /**
   * A searchable identifier of a customer profile.
   *
   * @public
   */
  KeyName: string | undefined;

  /**
   * A list of key values.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface AddProfileKeyRequest {
  /**
   * The unique identifier of a customer profile.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * A searchable identifier of a customer profile. The predefined keys you can use include: _account, _profileId, _assetId, _caseId, _orderId, _fullName, _phone, _email, _ctrContactId, _marketoLeadId, _salesforceAccountId, _salesforceContactId, _salesforceAssetId, _zendeskUserId, _zendeskExternalId, _zendeskTicketId, _serviceNowSystemId, _serviceNowIncidentId, _segmentUserId, _shopifyCustomerId, _shopifyOrderId.
   *
   * @public
   */
  KeyName: string | undefined;

  /**
   * A list of key values.
   *
   * @public
   */
  Values: string[] | undefined;

  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface AddProfileKeyResponse {
  /**
   * A searchable identifier of a customer profile.
   *
   * @public
   */
  KeyName?: string | undefined;

  /**
   * A list of key values.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * A generic address associated with the customer that is not mailing, shipping, or billing.
 *
 * @public
 */
export interface Address {
  /**
   * The first line of a customer address.
   *
   * @public
   */
  Address1?: string | undefined;

  /**
   * The second line of a customer address.
   *
   * @public
   */
  Address2?: string | undefined;

  /**
   * The third line of a customer address.
   *
   * @public
   */
  Address3?: string | undefined;

  /**
   * The fourth line of a customer address.
   *
   * @public
   */
  Address4?: string | undefined;

  /**
   * The city in which a customer lives.
   *
   * @public
   */
  City?: string | undefined;

  /**
   * The county in which a customer lives.
   *
   * @public
   */
  County?: string | undefined;

  /**
   * The state in which a customer lives.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The province in which a customer lives.
   *
   * @public
   */
  Province?: string | undefined;

  /**
   * The country in which a customer lives.
   *
   * @public
   */
  Country?: string | undefined;

  /**
   * The postal code of a customer address.
   *
   * @public
   */
  PostalCode?: string | undefined;
}

/**
 * Object to hold the dimensions of a profile's fields to segment on.
 *
 * @public
 */
export interface ProfileDimension {
  /**
   * The action to segment on.
   *
   * @public
   */
  DimensionType: StringDimensionType | undefined;

  /**
   * The values to apply the DimensionType on. To reference a calculated attribute or profile attribute as a dynamic value, use handlebar notation: `\{\{_profile.ProfileAttributeName\}\}` or `\{\{_calculated_attribute.CalculatedAttributeName\}\}`.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * Object that segments on Customer Profile's address object.
 *
 * @public
 */
export interface AddressDimension {
  /**
   * The city belonging to the address.
   *
   * @public
   */
  City?: ProfileDimension | undefined;

  /**
   * The country belonging to the address.
   *
   * @public
   */
  Country?: ProfileDimension | undefined;

  /**
   * The county belonging to the address.
   *
   * @public
   */
  County?: ProfileDimension | undefined;

  /**
   * The postal code belonging to the address.
   *
   * @public
   */
  PostalCode?: ProfileDimension | undefined;

  /**
   * The province belonging to the address.
   *
   * @public
   */
  Province?: ProfileDimension | undefined;

  /**
   * The state belonging to the address.
   *
   * @public
   */
  State?: ProfileDimension | undefined;
}

/**
 * Batch defines the boundaries for ingestion for each step in `APPFLOW_INTEGRATION` workflow. `APPFLOW_INTEGRATION` workflow splits ingestion based on these boundaries.
 *
 * @public
 */
export interface Batch {
  /**
   * Start time of batch to split ingestion.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * End time of batch to split ingestion.
   *
   * @public
   */
  EndTime: Date | undefined;
}

/**
 * Specifies the configuration used when importing incremental records from the source.
 *
 * @public
 */
export interface IncrementalPullConfig {
  /**
   * A field that specifies the date time or timestamp field as the criteria to use when importing incremental records from the source.
   *
   * @public
   */
  DatetimeTypeFieldName?: string | undefined;
}

/**
 * The properties that are applied when Marketo is being used as a source.
 *
 * @public
 */
export interface MarketoSourceProperties {
  /**
   * The object specified in the Marketo flow source.
   *
   * @public
   */
  Object: string | undefined;
}

/**
 * The properties that are applied when Amazon S3 is being used as the flow source.
 *
 * @public
 */
export interface S3SourceProperties {
  /**
   * The Amazon S3 bucket name where the source files are stored.
   *
   * @public
   */
  BucketName: string | undefined;

  /**
   * The object key for the Amazon S3 bucket in which the source files are stored.
   *
   * @public
   */
  BucketPrefix?: string | undefined;
}

/**
 * The properties that are applied when Salesforce is being used as a source.
 *
 * @public
 */
export interface SalesforceSourceProperties {
  /**
   * The object specified in the Salesforce flow source.
   *
   * @public
   */
  Object: string | undefined;

  /**
   * The flag that enables dynamic fetching of new (recently added) fields in the Salesforce objects while running a flow.
   *
   * @public
   */
  EnableDynamicFieldUpdate?: boolean | undefined;

  /**
   * Indicates whether Amazon AppFlow includes deleted files in the flow run.
   *
   * @public
   */
  IncludeDeletedRecords?: boolean | undefined;
}

/**
 * The properties that are applied when ServiceNow is being used as a source.
 *
 * @public
 */
export interface ServiceNowSourceProperties {
  /**
   * The object specified in the ServiceNow flow source.
   *
   * @public
   */
  Object: string | undefined;
}

/**
 * The properties that are applied when using Zendesk as a flow source.
 *
 * @public
 */
export interface ZendeskSourceProperties {
  /**
   * The object specified in the Zendesk flow source.
   *
   * @public
   */
  Object: string | undefined;
}

/**
 * Specifies the information that is required to query a particular Amazon AppFlow connector. Customer Profiles supports Salesforce, Zendesk, Marketo, ServiceNow and Amazon S3.
 *
 * @public
 */
export interface SourceConnectorProperties {
  /**
   * The properties that are applied when Marketo is being used as a source.
   *
   * @public
   */
  Marketo?: MarketoSourceProperties | undefined;

  /**
   * The properties that are applied when Amazon S3 is being used as the flow source.
   *
   * @public
   */
  S3?: S3SourceProperties | undefined;

  /**
   * The properties that are applied when Salesforce is being used as a source.
   *
   * @public
   */
  Salesforce?: SalesforceSourceProperties | undefined;

  /**
   * The properties that are applied when ServiceNow is being used as a source.
   *
   * @public
   */
  ServiceNow?: ServiceNowSourceProperties | undefined;

  /**
   * The properties that are applied when using Zendesk as a flow source.
   *
   * @public
   */
  Zendesk?: ZendeskSourceProperties | undefined;
}

/**
 * Contains information about the configuration of the source connector used in the flow.
 *
 * @public
 */
export interface SourceFlowConfig {
  /**
   * The name of the AppFlow connector profile. This name must be unique for each connector profile in the AWS account.
   *
   * @public
   */
  ConnectorProfileName?: string | undefined;

  /**
   * The type of connector, such as Salesforce, Marketo, and so on.
   *
   * @public
   */
  ConnectorType: SourceConnectorType | undefined;

  /**
   * Defines the configuration for a scheduled incremental data pull. If a valid configuration is provided, the fields specified in the configuration are used when querying for the incremental data pull.
   *
   * @public
   */
  IncrementalPullConfig?: IncrementalPullConfig | undefined;

  /**
   * Specifies the information that is required to query a particular source connector.
   *
   * @public
   */
  SourceConnectorProperties: SourceConnectorProperties | undefined;
}

/**
 * The operation to be performed on the provided source fields.
 *
 * @public
 */
export interface ConnectorOperator {
  /**
   * The operation to be performed on the provided Marketo source fields.
   *
   * @public
   */
  Marketo?: MarketoConnectorOperator | undefined;

  /**
   * The operation to be performed on the provided Amazon S3 source fields.
   *
   * @public
   */
  S3?: S3ConnectorOperator | undefined;

  /**
   * The operation to be performed on the provided Salesforce source fields.
   *
   * @public
   */
  Salesforce?: SalesforceConnectorOperator | undefined;

  /**
   * The operation to be performed on the provided ServiceNow source fields.
   *
   * @public
   */
  ServiceNow?: ServiceNowConnectorOperator | undefined;

  /**
   * The operation to be performed on the provided Zendesk source fields.
   *
   * @public
   */
  Zendesk?: ZendeskConnectorOperator | undefined;
}

/**
 * A class for modeling different type of tasks. Task implementation varies based on the TaskType.
 *
 * @public
 */
export interface Task {
  /**
   * The operation to be performed on the provided source fields.
   *
   * @public
   */
  ConnectorOperator?: ConnectorOperator | undefined;

  /**
   * A field in a destination connector, or a field value against which Amazon AppFlow validates a source field.
   *
   * @public
   */
  DestinationField?: string | undefined;

  /**
   * The source fields to which a particular task is applied.
   *
   * @public
   */
  SourceFields: string[] | undefined;

  /**
   * A map used to store task-related information. The service looks for particular information based on the TaskType.
   *
   * @public
   */
  TaskProperties?: Partial<Record<OperatorPropertiesKeys, string>> | undefined;

  /**
   * Specifies the particular task implementation that Amazon AppFlow performs.
   *
   * @public
   */
  TaskType: TaskType | undefined;
}

/**
 * Specifies the configuration details of a scheduled-trigger flow that you define. Currently, these settings only apply to the scheduled-trigger type.
 *
 * @public
 */
export interface ScheduledTriggerProperties {
  /**
   * The scheduling expression that determines the rate at which the schedule will run, for example rate (5 minutes).
   *
   * @public
   */
  ScheduleExpression: string | undefined;

  /**
   * Specifies whether a scheduled flow has an incremental data transfer or a complete data transfer for each flow run.
   *
   * @public
   */
  DataPullMode?: DataPullMode | undefined;

  /**
   * Specifies the scheduled start time for a scheduled-trigger flow.
   *
   * @public
   */
  ScheduleStartTime?: Date | undefined;

  /**
   * Specifies the scheduled end time for a scheduled-trigger flow.
   *
   * @public
   */
  ScheduleEndTime?: Date | undefined;

  /**
   * Specifies the time zone used when referring to the date and time of a scheduled-triggered flow, such as America/New_York.
   *
   * @public
   */
  Timezone?: string | undefined;

  /**
   * Specifies the optional offset that is added to the time interval for a schedule-triggered flow.
   *
   * @public
   */
  ScheduleOffset?: number | undefined;

  /**
   * Specifies the date range for the records to import from the connector in the first flow run.
   *
   * @public
   */
  FirstExecutionFrom?: Date | undefined;
}

/**
 * Specifies the configuration details that control the trigger for a flow. Currently, these settings only apply to the Scheduled trigger type.
 *
 * @public
 */
export interface TriggerProperties {
  /**
   * Specifies the configuration details of a schedule-triggered flow that you define.
   *
   * @public
   */
  Scheduled?: ScheduledTriggerProperties | undefined;
}

/**
 * The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
 *
 * @public
 */
export interface TriggerConfig {
  /**
   * Specifies the type of flow trigger. It can be OnDemand, Scheduled, or Event.
   *
   * @public
   */
  TriggerType: TriggerType | undefined;

  /**
   * Specifies the configuration details of a schedule-triggered flow that you define. Currently, these settings only apply to the Scheduled trigger type.
   *
   * @public
   */
  TriggerProperties?: TriggerProperties | undefined;
}

/**
 * The configurations that control how Customer Profiles retrieves data from the source, Amazon AppFlow. Customer Profiles uses this information to create an AppFlow flow on behalf of customers.
 *
 * @public
 */
export interface FlowDefinition {
  /**
   * A description of the flow you want to create.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The specified name of the flow. Use underscores (_) or hyphens (-) only. Spaces are not allowed.
   *
   * @public
   */
  FlowName: string | undefined;

  /**
   * The Amazon Resource Name of the AWS Key Management Service (KMS) key you provide for encryption.
   *
   * @public
   */
  KmsArn: string | undefined;

  /**
   * The configuration that controls how Customer Profiles retrieves data from the source.
   *
   * @public
   */
  SourceFlowConfig: SourceFlowConfig | undefined;

  /**
   * A list of tasks that Customer Profiles performs while transferring the data in the flow run.
   *
   * @public
   */
  Tasks: Task[] | undefined;

  /**
   * The trigger settings that determine how and when the flow runs.
   *
   * @public
   */
  TriggerConfig: TriggerConfig | undefined;
}

/**
 * Details for workflow of type `APPFLOW_INTEGRATION`.
 *
 * @public
 */
export interface AppflowIntegration {
  /**
   * The configurations that control how Customer Profiles retrieves data from the source, Amazon AppFlow. Customer Profiles uses this information to create an AppFlow flow on behalf of customers.
   *
   * @public
   */
  FlowDefinition: FlowDefinition | undefined;

  /**
   * Batches in workflow of type `APPFLOW_INTEGRATION`.
   *
   * @public
   */
  Batches?: Batch[] | undefined;
}

/**
 * Structure holding all `APPFLOW_INTEGRATION` specific workflow attributes.
 *
 * @public
 */
export interface AppflowIntegrationWorkflowAttributes {
  /**
   * Specifies the source connector type, such as Salesforce, ServiceNow, and Marketo. Indicates source of ingestion.
   *
   * @public
   */
  SourceConnectorType: SourceConnectorType | undefined;

  /**
   * The name of the AppFlow connector profile used for ingestion.
   *
   * @public
   */
  ConnectorProfileName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role. Customer Profiles assumes this role to create resources on your behalf as part of workflow execution.
   *
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * Workflow specific execution metrics for `APPFLOW_INTEGRATION` workflow.
 *
 * @public
 */
export interface AppflowIntegrationWorkflowMetrics {
  /**
   * Number of records processed in `APPFLOW_INTEGRATION` workflow.
   *
   * @public
   */
  RecordsProcessed: number | undefined;

  /**
   * Total steps completed in `APPFLOW_INTEGRATION` workflow.
   *
   * @public
   */
  StepsCompleted: number | undefined;

  /**
   * Total steps in `APPFLOW_INTEGRATION` workflow.
   *
   * @public
   */
  TotalSteps: number | undefined;
}

/**
 * Workflow step details for `APPFLOW_INTEGRATION` workflow.
 *
 * @public
 */
export interface AppflowIntegrationWorkflowStep {
  /**
   * Name of the flow created during execution of workflow step. `APPFLOW_INTEGRATION` workflow type creates an appflow flow during workflow step execution on the customers behalf.
   *
   * @public
   */
  FlowName: string | undefined;

  /**
   * Workflow step status for `APPFLOW_INTEGRATION` workflow.
   *
   * @public
   */
  Status: Status | undefined;

  /**
   * Message indicating execution of workflow step for `APPFLOW_INTEGRATION` workflow.
   *
   * @public
   */
  ExecutionMessage: string | undefined;

  /**
   * Total number of records processed during execution of workflow step for `APPFLOW_INTEGRATION` workflow.
   *
   * @public
   */
  RecordsProcessed: number | undefined;

  /**
   * Start datetime of records pulled in batch during execution of workflow step for `APPFLOW_INTEGRATION` workflow.
   *
   * @public
   */
  BatchRecordsStartTime: string | undefined;

  /**
   * End datetime of records pulled in batch during execution of workflow step for `APPFLOW_INTEGRATION` workflow.
   *
   * @public
   */
  BatchRecordsEndTime: string | undefined;

  /**
   * Creation timestamp of workflow step for `APPFLOW_INTEGRATION` workflow.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * Last updated timestamp for workflow step for `APPFLOW_INTEGRATION` workflow.
   *
   * @public
   */
  LastUpdatedAt: Date | undefined;
}

/**
 * Represents a segment associated with a membership event stream.
 *
 * @public
 */
export interface AssociatedSegment {
  /**
   * The unique name of the segment definition.
   *
   * @public
   */
  SegmentName?: string | undefined;

  /**
   * The subscription status of the segment. The following are valid values:
   *
   * - **STARTING**: The segment is being prepared to publish membership events.
   * - **RUNNING**: The segment is actively publishing membership events to the stream.
   * - **STOPPED**: The segment has stopped publishing membership events.
   * - **FAILED**: The segment failed to publish membership events.
   *
   * @public
   */
  Status?: EventSubscriptionSegmentStatus | undefined;

  /**
   * An optional message providing context, such as a failure reason.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface AssociateStreamForSegmentsRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Kinesis data stream to deliver segment membership events to. For example, `arn:aws:kinesis:region:account-id:stream/stream-name`.
   *
   * @public
   */
  DestinationArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that allows Customer Profiles service principal to assume the role for conducting AWS Key Management Service (KMS) and Amazon Kinesis operations. The role must grant the following Amazon Kinesis permissions to deliver segment membership events to the stream:
   *
   * - `kinesis:PutRecord`
   * - `kinesis:PutRecords`
   * - `kinesis:DescribeStream`
   *
   * @public
   */
  DestinationRoleArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateStreamForSegmentsResponse {}

/**
 * The details of a single attribute item specified in the mathematical expression.
 *
 * @public
 */
export interface AttributeItem {
  /**
   * The name of an attribute defined in a profile object type.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * Mathematical expression and a list of attribute items specified in that expression.
 *
 * @public
 */
export interface AttributeDetails {
  /**
   * A list of attribute items specified in the mathematical expression.
   *
   * @public
   */
  Attributes: AttributeItem[] | undefined;

  /**
   * Mathematical expression that is performed on attribute items provided in the attribute list. Each element in the expression should follow the structure of \"\{ObjectTypeName.AttributeName\}\".
   *
   * @public
   */
  Expression: string | undefined;
}

/**
 * Object that segments on various Customer Profile's fields.
 *
 * @public
 */
export interface AttributeDimension {
  /**
   * The action to segment with.
   *
   * @public
   */
  DimensionType: AttributeDimensionType | undefined;

  /**
   * The values to apply the DimensionType on. To reference a calculated attribute or profile attribute as a dynamic value, use handlebar notation: `\{\{_profile.ProfileAttributeName\}\}` or `\{\{_calculated_attribute.CalculatedAttributeName\}\}`.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * Object that defines how to filter the incoming objects for the calculated attribute.
 *
 * @public
 */
export interface FilterAttributeDimension {
  /**
   * The action to filter with.
   *
   * @public
   */
  DimensionType: FilterDimensionType | undefined;

  /**
   * The values to apply the DimensionType on.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * Configuration information about the `AttributeTypesSelector`where the rule-based identity resolution uses to match profiles. You can choose how profiles are compared across attribute types and which attribute to use for matching from each type. There are three attribute types you can configure:
 *
 * - Email type
 *
 *   - You can choose from `Email`, `BusinessEmail`, and `PersonalEmail`
 * - Phone number type
 *
 *   - You can choose from `Phone`, `HomePhone`, and `MobilePhone`
 * - Address type
 *
 *   - You can choose from `Address`, `BusinessAddress`, `MaillingAddress`, and `ShippingAddress`
 *
 * You can either choose `ONE_TO_ONE` or `MANY_TO_MANY` as the `AttributeMatchingModel`. When choosing `MANY_TO_MANY`, the system can match attribute across the sub-types of an attribute type. For example, if the value of the `Email` field of Profile A and the value of `BusinessEmail` field of Profile B matches, the two profiles are matched on the Email type. When choosing `ONE_TO_ONE` the system can only match if the sub-types are exact matches. For example, only when the value of the `Email` field of Profile A and the value of the `Email` field of Profile B matches, the two profiles are matched on the Email type.
 *
 * @public
 */
export interface AttributeTypesSelector {
  /**
   * Configures the `AttributeMatchingModel`, you can either choose `ONE_TO_ONE` or `MANY_TO_MANY`.
   *
   * @public
   */
  AttributeMatchingModel: AttributeMatchingModel | undefined;

  /**
   * The `Address` type. You can choose from `Address`, `BusinessAddress`, `MaillingAddress`, and `ShippingAddress`.
   *
   * You only can use the Address type in the `MatchingRule`. For example, if you want to match profile based on `BusinessAddress.City` or `MaillingAddress.City`, you need to choose the `BusinessAddress` and the `MaillingAddress` to represent the Address type and specify the `Address.City` on the matching rule.
   *
   * @public
   */
  Address?: string[] | undefined;

  /**
   * The `PhoneNumber` type. You can choose from `PhoneNumber`, `HomePhoneNumber`, and `MobilePhoneNumber`.
   *
   * You only can use the `PhoneNumber` type in the `MatchingRule`. For example, if you want to match a profile based on `Phone` or `HomePhone`, you need to choose the `Phone` and the `HomePhone` to represent the `PhoneNumber` type and only specify the `PhoneNumber` on the matching rule.
   *
   * @public
   */
  PhoneNumber?: string[] | undefined;

  /**
   * The `Email` type. You can choose from `EmailAddress`, `BusinessEmailAddress` and `PersonalEmailAddress`.
   *
   * You only can use the `EmailAddress` type in the `MatchingRule`. For example, if you want to match profile based on `PersonalEmailAddress` or `BusinessEmailAddress`, you need to choose the `PersonalEmailAddress` and the `BusinessEmailAddress` to represent the `EmailAddress` type and only specify the `EmailAddress` on the matching rule.
   *
   * @public
   */
  EmailAddress?: string[] | undefined;
}

/**
 * List containing the values for the given attribute.
 *
 * @public
 */
export interface AttributeValueItem {
  /**
   * An individual value belonging to the given attribute.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * How the auto-merging process should resolve conflicts between different profiles.
 *
 * @public
 */
export interface ConflictResolution {
  /**
   * How the auto-merging process should resolve conflicts between different profiles.
   *
   * - `RECENCY`: Uses the data that was most recently updated.
   * - `SOURCE`: Uses the data from a specific source. For example, if a company has been aquired or two departments have merged, data from the specified source is used. If two duplicate profiles are from the same source, then `RECENCY` is used again.
   *
   * @public
   */
  ConflictResolvingModel: ConflictResolvingModel | undefined;

  /**
   * The `ObjectType` name that is used to resolve profile merging conflicts when choosing `SOURCE` as the `ConflictResolvingModel`.
   *
   * @public
   */
  SourceName?: string | undefined;
}

/**
 * The matching criteria to be used during the auto-merging process.
 *
 * @public
 */
export interface Consolidation {
  /**
   * A list of matching criteria.
   *
   * @public
   */
  MatchingAttributesList: string[][] | undefined;
}

/**
 * Configuration settings for how to perform the auto-merging of profiles.
 *
 * @public
 */
export interface AutoMerging {
  /**
   * The flag that enables the auto-merging of duplicate profiles.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * A list of matching attributes that represent matching criteria. If two profiles meet at least one of the requirements in the matching attributes list, they will be merged.
   *
   * @public
   */
  Consolidation?: Consolidation | undefined;

  /**
   * How the auto-merging process should resolve conflicts between different profiles. For example, if Profile A and Profile B have the same `FirstName` and `LastName` (and that is the matching criteria), which `EmailAddress` should be used?
   *
   * @public
   */
  ConflictResolution?: ConflictResolution | undefined;

  /**
   * A number between 0 and 1 that represents the minimum confidence score required for profiles within a matching group to be merged during the auto-merge process. A higher score means higher similarity required to merge profiles.
   *
   * @public
   */
  MinAllowedConfidenceScoreForMerging?: number | undefined;
}

/**
 * Overrides the original range on a calculated attribute definition.
 *
 * @public
 */
export interface RangeOverride {
  /**
   * The start time of when to include objects.
   *
   * @public
   */
  Start: number | undefined;

  /**
   * The end time of when to include objects.
   *
   * @public
   */
  End?: number | undefined;

  /**
   * The unit for start and end.
   *
   * @public
   */
  Unit: RangeUnit | undefined;
}

/**
 * An object to override the original condition block of a calculated attribute.
 *
 * @public
 */
export interface ConditionOverrides {
  /**
   * The relative time period over which data is included in the aggregation for this override.
   *
   * @public
   */
  Range?: RangeOverride | undefined;
}

/**
 * @public
 */
export interface BatchGetCalculatedAttributeForProfileRequest {
  /**
   * The unique name of the calculated attribute.
   *
   * @public
   */
  CalculatedAttributeName: string | undefined;

  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * List of unique identifiers for customer profiles to retrieve.
   *
   * @public
   */
  ProfileIds: string[] | undefined;

  /**
   * Overrides the condition block within the original calculated attribute definition.
   *
   * @public
   */
  ConditionOverrides?: ConditionOverrides | undefined;
}

/**
 * The object containing the values of a single calculated attribute value.
 *
 * @public
 */
export interface CalculatedAttributeValue {
  /**
   * The unique name of the calculated attribute.
   *
   * @public
   */
  CalculatedAttributeName?: string | undefined;

  /**
   * The display name of the calculated attribute.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * Indicates whether the calculated attribute's value is based on partial data. If the data is partial, it is set to true.
   *
   * @public
   */
  IsDataPartial?: string | undefined;

  /**
   * The profile id belonging to this calculated attribute value.
   *
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * The value of the calculated attribute.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The timestamp of the newest object included in the calculated attribute calculation.
   *
   * @public
   */
  LastObjectTimestamp?: Date | undefined;
}

/**
 * Error object describing why a specific profile and calculated attribute failed.
 *
 * @public
 */
export interface BatchGetCalculatedAttributeForProfileError {
  /**
   * Status code for why a specific profile and calculated attribute failed.
   *
   * @public
   */
  Code: string | undefined;

  /**
   * Message describing why a specific profile and calculated attribute failed.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * The profile id that failed.
   *
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @public
 */
export interface BatchGetCalculatedAttributeForProfileResponse {
  /**
   * List of errors for calculated attribute values that could not be retrieved.
   *
   * @public
   */
  Errors?: BatchGetCalculatedAttributeForProfileError[] | undefined;

  /**
   * List of calculated attribute values retrieved.
   *
   * @public
   */
  CalculatedAttributeValues?: CalculatedAttributeValue[] | undefined;

  /**
   * Overrides the condition block within the original calculated attribute definition.
   *
   * @public
   */
  ConditionOverrides?: ConditionOverrides | undefined;
}

/**
 * @public
 */
export interface BatchGetProfileRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * List of unique identifiers for customer profiles to retrieve.
   *
   * @public
   */
  ProfileIds: string[] | undefined;
}

/**
 * Error object describing why a specific profile failed.
 *
 * @public
 */
export interface BatchGetProfileError {
  /**
   * Status code for why a specific profile failed.
   *
   * @public
   */
  Code: string | undefined;

  /**
   * Message describing why a specific profile failed.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * The profile id that failed.
   *
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * Object that defines users contact preference.
 *
 * @public
 */
export interface ContactPreference {
  /**
   * A searchable, unique identifier of a customer profile.
   *
   * @public
   */
  KeyName?: string | undefined;

  /**
   * The key value used to look up profile based off the keyName.
   *
   * @public
   */
  KeyValue?: string | undefined;

  /**
   * The unique identifier of a customer profile.
   *
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * The contact type used for engagement. For example: HomePhoneNumber, PersonalEmailAddress.
   *
   * @public
   */
  ContactType?: ContactType | undefined;
}

/**
 * Object that defines users preferred methods of engagement.
 *
 * @public
 */
export interface EngagementPreferences {
  /**
   * A list of phone-related contact preferences
   *
   * @public
   */
  Phone?: ContactPreference[] | undefined;

  /**
   * A list of email-related contact preferences
   *
   * @public
   */
  Email?: ContactPreference[] | undefined;
}

/**
 * A data type pair that consists of a `KeyName` and `Values` list that were used to find a profile returned in response to a [SearchProfiles](https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html) request.
 *
 * @public
 */
export interface FoundByKeyValue {
  /**
   * A searchable identifier of a customer profile.
   *
   * @public
   */
  KeyName?: string | undefined;

  /**
   * A list of key values.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * The standard profile of a customer.
 *
 * @public
 */
export interface Profile {
  /**
   * The unique identifier of a customer profile.
   *
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * An account number that you have assigned to the customer.
   *
   * @public
   */
  AccountNumber?: string | undefined;

  /**
   * Any additional information relevant to the customer’s profile.
   *
   * @public
   */
  AdditionalInformation?: string | undefined;

  /**
   * The type of profile used to describe the customer.
   *
   * @deprecated deprecated.
   * @public
   */
  PartyType?: PartyType | undefined;

  /**
   * The name of the customer’s business.
   *
   * @public
   */
  BusinessName?: string | undefined;

  /**
   * The customer’s first name.
   *
   * @public
   */
  FirstName?: string | undefined;

  /**
   * The customer’s middle name.
   *
   * @public
   */
  MiddleName?: string | undefined;

  /**
   * The customer’s last name.
   *
   * @public
   */
  LastName?: string | undefined;

  /**
   * The customer’s birth date.
   *
   * @public
   */
  BirthDate?: string | undefined;

  /**
   * The gender with which the customer identifies.
   *
   * @deprecated deprecated.
   * @public
   */
  Gender?: Gender | undefined;

  /**
   * The customer's phone number, which has not been specified as a mobile, home, or business number.
   *
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * The customer’s mobile phone number.
   *
   * @public
   */
  MobilePhoneNumber?: string | undefined;

  /**
   * The customer’s home phone number.
   *
   * @public
   */
  HomePhoneNumber?: string | undefined;

  /**
   * The customer’s home phone number.
   *
   * @public
   */
  BusinessPhoneNumber?: string | undefined;

  /**
   * The customer’s email address, which has not been specified as a personal or business address.
   *
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * The customer’s personal email address.
   *
   * @public
   */
  PersonalEmailAddress?: string | undefined;

  /**
   * The customer’s business email address.
   *
   * @public
   */
  BusinessEmailAddress?: string | undefined;

  /**
   * A generic address associated with the customer that is not mailing, shipping, or billing.
   *
   * @public
   */
  Address?: Address | undefined;

  /**
   * The customer’s shipping address.
   *
   * @public
   */
  ShippingAddress?: Address | undefined;

  /**
   * The customer’s mailing address.
   *
   * @public
   */
  MailingAddress?: Address | undefined;

  /**
   * The customer’s billing address.
   *
   * @public
   */
  BillingAddress?: Address | undefined;

  /**
   * A key value pair of attributes of a customer profile.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * A list of items used to find a profile returned in a [SearchProfiles](https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html) response. An item is a key-value(s) pair that matches an attribute in the profile.
   *
   * If the optional `AdditionalSearchKeys` parameter was included in the [SearchProfiles](https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html) request, the `FoundByItems` list should be interpreted based on the `LogicalOperator` used in the request:
   *
   * - `AND` - The profile included in the response matched all of the search keys specified in the request. The `FoundByItems` will include all of the key-value(s) pairs that were specified in the request (as this is a requirement of `AND` search logic).
   * - `OR` - The profile included in the response matched at least one of the search keys specified in the request. The `FoundByItems` will include each of the key-value(s) pairs that the profile was found by.
   *
   * The `OR` relationship is the default behavior if the `LogicalOperator` parameter is not included in the [SearchProfiles](https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html) request.
   *
   * @public
   */
  FoundByItems?: FoundByKeyValue[] | undefined;

  /**
   * An alternative to PartyType which accepts any string as input.
   *
   * @public
   */
  PartyTypeString?: string | undefined;

  /**
   * An alternative to Gender which accepts any string as input.
   *
   * @public
   */
  GenderString?: string | undefined;

  /**
   * The type of the profile.
   *
   * @public
   */
  ProfileType?: ProfileType | undefined;

  /**
   * The customer or account’s engagement preferences.
   *
   * @public
   */
  EngagementPreferences?: EngagementPreferences | undefined;
}

/**
 * @public
 */
export interface BatchGetProfileResponse {
  /**
   * For information about the errors that are common to all actions, see [Common Errors](https://docs.aws.amazon.com/connect/latest/APIReference/CommonErrors.html).
   *
   * @public
   */
  Errors?: BatchGetProfileError[] | undefined;

  /**
   * Array of Profile Objects.
   *
   * @public
   */
  Profiles?: Profile[] | undefined;
}

/**
 * An item to add to the domain as part of a batch request.
 *
 * @public
 */
export interface BatchPutProfileObjectRequestItem {
  /**
   * A unique identifier for this item in the batch request. Used to correlate items in the response.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * A string that is serialized from a JSON object.
   *
   * @public
   */
  Object: string | undefined;
}

/**
 * @public
 */
export interface BatchPutProfileObjectRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the profile object type.
   *
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * A list of items to add to the domain.
   *
   * @public
   */
  Items: BatchPutProfileObjectRequestItem[] | undefined;
}

/**
 * An item that failed to be added to the domain.
 *
 * @public
 */
export interface BatchPutProfileObjectErrorItem {
  /**
   * The unique identifier of the item in the batch request that failed.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The HTTP status code for the error.
   *
   * @public
   */
  Code: number | undefined;

  /**
   * A message describing the error.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * An item that was successfully added to the domain.
 *
 * @public
 */
export interface BatchPutProfileObjectResponseItem {
  /**
   * The unique identifier of the item in the batch request.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The unique identifier of the profile object generated by the service.
   *
   * @public
   */
  ProfileObjectUniqueKey: string | undefined;
}

/**
 * @public
 */
export interface BatchPutProfileObjectResponse {
  /**
   * A list of items that were successfully added to the domain.
   *
   * @public
   */
  Successful?: BatchPutProfileObjectResponseItem[] | undefined;

  /**
   * A list of items that failed to be added to the domain.
   *
   * @public
   */
  Failed?: BatchPutProfileObjectErrorItem[] | undefined;
}

/**
 * The details of a single calculated attribute definition.
 *
 * @public
 */
export interface ListCalculatedAttributeDefinitionItem {
  /**
   * The unique name of the calculated attribute.
   *
   * @public
   */
  CalculatedAttributeName?: string | undefined;

  /**
   * The display name of the calculated attribute.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The threshold for the calculated attribute.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The threshold for the calculated attribute.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp of when the calculated attribute definition was most recently edited.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * Whether historical data ingested before the Calculated Attribute was created should be included in calculations.
   *
   * @public
   */
  UseHistoricalData?: boolean | undefined;

  /**
   * Status of the Calculated Attribute creation (whether all historical data has been indexed.)
   *
   * @public
   */
  Status?: ReadinessStatus | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Object that segments on Customer Profile's Calculated Attributes.
 *
 * @public
 */
export interface CalculatedAttributeDimension {
  /**
   * The action to segment with.
   *
   * @public
   */
  DimensionType: AttributeDimensionType | undefined;

  /**
   * The values to apply the DimensionType with. To reference a calculated attribute or profile attribute as a dynamic value, use handlebar notation: `\{\{_profile.ProfileAttributeName\}\}` or `\{\{_calculated_attribute.CalculatedAttributeName\}\}`.
   *
   * @public
   */
  Values: string[] | undefined;

  /**
   * Applies the given condition over the initial Calculated Attribute's definition.
   *
   * @public
   */
  ConditionOverrides?: ConditionOverrides | undefined;
}

/**
 * The details of a single calculated attribute for a profile.
 *
 * @public
 */
export interface ListCalculatedAttributeForProfileItem {
  /**
   * The unique name of the calculated attribute.
   *
   * @public
   */
  CalculatedAttributeName?: string | undefined;

  /**
   * The display name of the calculated attribute.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * Indicates whether the calculated attribute’s value is based on partial data. If data is partial, it is set to true.
   *
   * @public
   */
  IsDataPartial?: string | undefined;

  /**
   * The value of the calculated attribute.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The timestamp of the newest object included in the calculated attribute calculation.
   *
   * @public
   */
  LastObjectTimestamp?: Date | undefined;
}

/**
 * Represents an item in the catalog with its complete set of attributes and metadata.
 *
 * @public
 */
export interface CatalogItem {
  /**
   * The unique identifier for the catalog item.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The display name of the catalog item.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The product code or SKU of the catalog item.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * The type classification of the catalog item.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The category to which the catalog item belongs.
   *
   * @public
   */
  Category?: string | undefined;

  /**
   * A detailed description of the catalog item.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Supplementary information about the catalog item beyond the basic description.
   *
   * @public
   */
  AdditionalInformation?: string | undefined;

  /**
   * The URL link to the item's image.
   *
   * @public
   */
  ImageLink?: string | undefined;

  /**
   * The URL link to the item's detailed page or external resource.
   *
   * @public
   */
  Link?: string | undefined;

  /**
   * The timestamp when the catalog item was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp when the catalog item was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The price of the catalog item.
   *
   * @public
   */
  Price?: string | undefined;

  /**
   * Additional attributes or properties associated with the catalog item stored as key-value pairs.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;
}

/**
 * A structure letting customers specify a relative time window over which over which data is included in the Calculated Attribute. Use positive numbers to indicate that the endpoint is in the past, and negative numbers to indicate it is in the future. ValueRange overrides Value.
 *
 * @public
 */
export interface ValueRange {
  /**
   * The start time of when to include objects. Use positive numbers to indicate that the starting point is in the past, and negative numbers to indicate it is in the future.
   *
   * @public
   */
  Start: number | undefined;

  /**
   * The end time of when to include objects. Use positive numbers to indicate that the starting point is in the past, and negative numbers to indicate it is in the future.
   *
   * @public
   */
  End: number | undefined;
}

/**
 * The relative time period over which data is included in the aggregation.
 *
 * @public
 */
export interface Range {
  /**
   * The amount of time of the specified unit.
   *
   * @public
   */
  Value?: number | undefined;

  /**
   * The unit of time.
   *
   * @public
   */
  Unit?: Unit | undefined;

  /**
   * A structure letting customers specify a relative time window over which over which data is included in the Calculated Attribute. Use positive numbers to indicate that the endpoint is in the past, and negative numbers to indicate it is in the future. ValueRange overrides Value.
   *
   * @public
   */
  ValueRange?: ValueRange | undefined;

  /**
   * An expression specifying the field in your JSON object from which the date should be parsed. The expression should follow the structure of \"\{ObjectTypeName.<Location of
   *          timestamp field in JSON pointer format>\}\". E.g. if your object type is MyType and source JSON is \{"generatedAt": \{"timestamp": "1737587945945"\}\}, then TimestampSource should be "\{MyType.generatedAt.timestamp\}".
   *
   * @public
   */
  TimestampSource?: string | undefined;

  /**
   * The format the timestamp field in your JSON object is specified. This value should be one of EPOCHMILLI (for Unix epoch timestamps with second/millisecond level precision) or ISO_8601 (following ISO_8601 format with second/millisecond level precision, with an optional offset of Z or in the format HH:MM or HHMM.). E.g. if your object type is MyType and source JSON is \{"generatedAt": \{"timestamp": "2001-07-04T12:08:56.235-0700"\}\}, then TimestampFormat should be "ISO_8601".
   *
   * @public
   */
  TimestampFormat?: string | undefined;
}

/**
 * The threshold for the calculated attribute.
 *
 * @public
 */
export interface Threshold {
  /**
   * The value of the threshold.
   *
   * @public
   */
  Value: string | undefined;

  /**
   * The operator of the threshold.
   *
   * @public
   */
  Operator: Operator | undefined;
}

/**
 * The conditions including range, object count, and threshold for the calculated attribute.
 *
 * @public
 */
export interface Conditions {
  /**
   * The relative time period over which data is included in the aggregation.
   *
   * @public
   */
  Range?: Range | undefined;

  /**
   * The number of profile objects used for the calculated attribute.
   *
   * @public
   */
  ObjectCount?: number | undefined;

  /**
   * The threshold for the calculated attribute.
   *
   * @public
   */
  Threshold?: Threshold | undefined;
}

/**
 * Contains the map of attribute names to attribute dimensions.
 *
 * @public
 */
export interface FilterDimension {
  /**
   * Is the attribute within the FilterDimension map
   *
   * @public
   */
  Attributes: Record<string, FilterAttributeDimension> | undefined;
}

/**
 * Object that holds the dimensions to filter on.
 *
 * @public
 */
export interface FilterGroup {
  /**
   * The type of logical relationship between the dimensions of the Filter group.
   *
   * @public
   */
  Type: Type | undefined;

  /**
   * Object that holds the attributes to filter on.
   *
   * @public
   */
  Dimensions: FilterDimension[] | undefined;
}

/**
 * Defines how to filter the objects coming in for calculated attributes.
 *
 * @public
 */
export interface Filter {
  /**
   * Define whether to include or exclude objects for Calculated Attributed calculation that fit the filter groups criteria.
   *
   * @public
   */
  Include: Include | undefined;

  /**
   * Holds the list of Filter groups within the Filter definition.
   *
   * @public
   */
  Groups: FilterGroup[] | undefined;
}

/**
 * @public
 */
export interface CreateCalculatedAttributeDefinitionRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique name of the calculated attribute.
   *
   * @public
   */
  CalculatedAttributeName: string | undefined;

  /**
   * The display name of the calculated attribute.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The description of the calculated attribute.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Mathematical expression and a list of attribute items specified in that expression.
   *
   * @public
   */
  AttributeDetails: AttributeDetails | undefined;

  /**
   * The conditions including range, object count, and threshold for the calculated attribute.
   *
   * @public
   */
  Conditions?: Conditions | undefined;

  /**
   * Defines how to filter incoming objects to include part of the Calculated Attribute.
   *
   * @public
   */
  Filter?: Filter | undefined;

  /**
   * The aggregation operation to perform for the calculated attribute.
   *
   * @public
   */
  Statistic: Statistic | undefined;

  /**
   * Whether historical data ingested before the Calculated Attribute was created should be included in calculations.
   *
   * @public
   */
  UseHistoricalData?: boolean | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Information indicating if the Calculated Attribute is ready for use by confirming all historical data has been processed and reflected.
 *
 * @public
 */
export interface Readiness {
  /**
   * Approximately how far the Calculated Attribute creation is from completion.
   *
   * @public
   */
  ProgressPercentage?: number | undefined;

  /**
   * Any customer messaging.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface CreateCalculatedAttributeDefinitionResponse {
  /**
   * The unique name of the calculated attribute.
   *
   * @public
   */
  CalculatedAttributeName?: string | undefined;

  /**
   * The display name of the calculated attribute.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The description of the calculated attribute.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Mathematical expression and a list of attribute items specified in that expression.
   *
   * @public
   */
  AttributeDetails?: AttributeDetails | undefined;

  /**
   * The conditions including range, object count, and threshold for the calculated attribute.
   *
   * @public
   */
  Conditions?: Conditions | undefined;

  /**
   * The filter that was used as part of the request.
   *
   * @public
   */
  Filter?: Filter | undefined;

  /**
   * The aggregation operation to perform for the calculated attribute.
   *
   * @public
   */
  Statistic?: Statistic | undefined;

  /**
   * The timestamp of when the calculated attribute definition was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp of when the calculated attribute definition was most recently edited.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * Whether historical data ingested before the Calculated Attribute was created should be included in calculations.
   *
   * @public
   */
  UseHistoricalData?: boolean | undefined;

  /**
   * Status of the Calculated Attribute creation (whether all historical data has been indexed.)
   *
   * @public
   */
  Status?: ReadinessStatus | undefined;

  /**
   * Information indicating if the Calculated Attribute is ready for use by confirming all historical data has been processed and reflected.
   *
   * @public
   */
  Readiness?: Readiness | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * The data store request.
 *
 * @public
 */
export interface DataStoreRequest {
  /**
   * Enabled: Set to true to enabled data store for this domain.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Configuration information about the S3 bucket where Identity Resolution Jobs write result files.
 *
 * @public
 */
export interface S3ExportingConfig {
  /**
   * The name of the S3 bucket where Identity Resolution Jobs write result files.
   *
   * @public
   */
  S3BucketName: string | undefined;

  /**
   * The S3 key name of the location where Identity Resolution Jobs write result files.
   *
   * @public
   */
  S3KeyName?: string | undefined;
}

/**
 * Configuration information about the S3 bucket where Identity Resolution Jobs writes result files.
 *
 * > **Note:** You need to give Customer Profiles service principal write permission to your S3 bucket. Otherwise, you'll get an exception in the API response. For an example policy, see [Amazon Connect Customer Profiles cross-service confused deputy prevention](https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html#customer-profiles-cross-service).
 *
 * @public
 */
export interface ExportingConfig {
  /**
   * The S3 location where Identity Resolution Jobs write result files.
   *
   * @public
   */
  S3Exporting?: S3ExportingConfig | undefined;
}

/**
 * The day and time when do you want to start the Identity Resolution Job every week.
 *
 * @public
 */
export interface JobSchedule {
  /**
   * The day when the Identity Resolution Job should run every week.
   *
   * @public
   */
  DayOfTheWeek: JobScheduleDayOfTheWeek | undefined;

  /**
   * The time when the Identity Resolution Job should run every week.
   *
   * @public
   */
  Time: string | undefined;
}

/**
 * The flag that enables the matching process of duplicate profiles.
 *
 * @public
 */
export interface MatchingRequest {
  /**
   * The flag that enables the matching process of duplicate profiles.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The day and time when do you want to start the Identity Resolution Job every week.
   *
   * @public
   */
  JobSchedule?: JobSchedule | undefined;

  /**
   * Configuration information about the auto-merging process.
   *
   * @public
   */
  AutoMerging?: AutoMerging | undefined;

  /**
   * Configuration information for exporting Identity Resolution results, for example, to an S3 bucket.
   *
   * @public
   */
  ExportingConfig?: ExportingConfig | undefined;
}

/**
 * Specifies how does the rule-based matching process should match profiles. You can choose from the following attributes to build the matching Rule:
 *
 * - AccountNumber
 * - Address.Address
 * - Address.City
 * - Address.Country
 * - Address.County
 * - Address.PostalCode
 * - Address.State
 * - Address.Province
 * - BirthDate
 * - BusinessName
 * - EmailAddress
 * - FirstName
 * - Gender
 * - LastName
 * - MiddleName
 * - PhoneNumber
 * - Any customized profile attributes that start with the `Attributes`
 *
 * @public
 */
export interface MatchingRule {
  /**
   * A single rule level of the `MatchRules`. Configures how the rule-based matching process should match profiles.
   *
   * @public
   */
  Rule: string[] | undefined;
}

/**
 * The request to enable the rule-based matching.
 *
 * @public
 */
export interface RuleBasedMatchingRequest {
  /**
   * The flag that enables the rule-based matching process of duplicate profiles.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * Configures how the rule-based matching process should match profiles. You can have up to 15 `MatchingRule` in the `MatchingRules`.
   *
   * @public
   */
  MatchingRules?: MatchingRule[] | undefined;

  /**
   * [MatchingRule](https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_MatchingRule.html)
   *
   * @public
   */
  MaxAllowedRuleLevelForMerging?: number | undefined;

  /**
   * Indicates the maximum allowed rule level.
   *
   * @public
   */
  MaxAllowedRuleLevelForMatching?: number | undefined;

  /**
   * Configures information about the `AttributeTypesSelector` where the rule-based identity resolution uses to match profiles.
   *
   * @public
   */
  AttributeTypesSelector?: AttributeTypesSelector | undefined;

  /**
   * How the auto-merging process should resolve conflicts between different profiles.
   *
   * @public
   */
  ConflictResolution?: ConflictResolution | undefined;

  /**
   * Configuration information about the S3 bucket where Identity Resolution Jobs writes result files.
   *
   * > **Note:** You need to give Customer Profiles service principal write permission to your S3 bucket. Otherwise, you'll get an exception in the API response. For an example policy, see [Amazon Connect Customer Profiles cross-service confused deputy prevention](https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html#customer-profiles-cross-service).
   *
   * @public
   */
  ExportingConfig?: ExportingConfig | undefined;
}

/**
 * @public
 */
export interface CreateDomainRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The default number of days until the data within the domain expires.
   *
   * @public
   */
  DefaultExpirationDays: number | undefined;

  /**
   * The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage.
   *
   * @public
   */
  DefaultEncryptionKey?: string | undefined;

  /**
   * The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications. You must set up a policy on the DeadLetterQueue for the SendMessage operation to enable Amazon Connect Customer Profiles to send messages to the DeadLetterQueue.
   *
   * @public
   */
  DeadLetterQueueUrl?: string | undefined;

  /**
   * The process of matching duplicate profiles. If `Matching` = `true`, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains.
   *
   * After the Identity Resolution Job completes, use the [GetMatches](https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html) API to return and review the results. Or, if you have configured `ExportingConfig` in the `MatchingRequest`, you can download the results from S3.
   *
   * @public
   */
  Matching?: MatchingRequest | undefined;

  /**
   * The process of matching duplicate profiles using the Rule-Based matching. If `RuleBasedMatching` = true, Connect Customer Customer Profiles will start to match and merge your profiles according to your configuration in the `RuleBasedMatchingRequest`. You can use the `ListRuleBasedMatches` and `GetSimilarProfiles` API to return and review the results. Also, if you have configured `ExportingConfig` in the `RuleBasedMatchingRequest`, you can download the results from S3.
   *
   * @public
   */
  RuleBasedMatching?: RuleBasedMatchingRequest | undefined;

  /**
   * Set to true to enabled data store for this domain.
   *
   * @public
   */
  DataStore?: DataStoreRequest | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * The data store response.
 *
 * @public
 */
export interface DataStoreResponse {
  /**
   * True if data store is enabled for this domain
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * Information indicating if the Calculated Attribute is ready for use by confirming all historical data has been processed and reflected.
   *
   * @public
   */
  Readiness?: Readiness | undefined;
}

/**
 * The flag that enables the matching process of duplicate profiles.
 *
 * @public
 */
export interface MatchingResponse {
  /**
   * The flag that enables the matching process of duplicate profiles.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The day and time when do you want to start the Identity Resolution Job every week.
   *
   * @public
   */
  JobSchedule?: JobSchedule | undefined;

  /**
   * Configuration information about the auto-merging process.
   *
   * @public
   */
  AutoMerging?: AutoMerging | undefined;

  /**
   * Configuration information for exporting Identity Resolution results, for example, to an S3 bucket.
   *
   * @public
   */
  ExportingConfig?: ExportingConfig | undefined;
}

/**
 * The response of the Rule-based matching request.
 *
 * @public
 */
export interface RuleBasedMatchingResponse {
  /**
   * The flag that enables the rule-based matching process of duplicate profiles.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * Configures how the rule-based matching process should match profiles. You can have up to 15 `MatchingRule` in the `MatchingRules`.
   *
   * @public
   */
  MatchingRules?: MatchingRule[] | undefined;

  /**
   * PENDING
   *
   * - The first status after configuration a rule-based matching rule. If it is an existing domain, the rule-based Identity Resolution waits one hour before creating the matching rule. If it is a new domain, the system will skip the `PENDING` stage.
   *
   * IN_PROGRESS
   *
   * - The system is creating the rule-based matching rule. Under this status, the system is evaluating the existing data and you can no longer change the Rule-based matching configuration.
   *
   * ACTIVE
   *
   * - The rule is ready to use. You can change the rule a day after the status is in `ACTIVE`.
   *
   * @public
   */
  Status?: RuleBasedMatchingStatus | undefined;

  /**
   * [MatchingRule](https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_MatchingRule.html)
   *
   * @public
   */
  MaxAllowedRuleLevelForMerging?: number | undefined;

  /**
   * Indicates the maximum allowed rule level.
   *
   * @public
   */
  MaxAllowedRuleLevelForMatching?: number | undefined;

  /**
   * Configures information about the `AttributeTypesSelector` where the rule-based identity resolution uses to match profiles.
   *
   * @public
   */
  AttributeTypesSelector?: AttributeTypesSelector | undefined;

  /**
   * How the auto-merging process should resolve conflicts between different profiles.
   *
   * @public
   */
  ConflictResolution?: ConflictResolution | undefined;

  /**
   * Configuration information about the S3 bucket where Identity Resolution Jobs writes result files.
   *
   * > **Note:** You need to give Customer Profiles service principal write permission to your S3 bucket. Otherwise, you'll get an exception in the API response. For an example policy, see [Amazon Connect Customer Profiles cross-service confused deputy prevention](https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html#customer-profiles-cross-service).
   *
   * @public
   */
  ExportingConfig?: ExportingConfig | undefined;
}

/**
 * @public
 */
export interface CreateDomainResponse {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The default number of days until the data within the domain expires.
   *
   * @public
   */
  DefaultExpirationDays: number | undefined;

  /**
   * The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage.
   *
   * @public
   */
  DefaultEncryptionKey?: string | undefined;

  /**
   * The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications.
   *
   * @public
   */
  DeadLetterQueueUrl?: string | undefined;

  /**
   * The process of matching duplicate profiles. If `Matching` = `true`, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains.
   *
   * After the Identity Resolution Job completes, use the [GetMatches](https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html) API to return and review the results. Or, if you have configured `ExportingConfig` in the `MatchingRequest`, you can download the results from S3.
   *
   * @public
   */
  Matching?: MatchingResponse | undefined;

  /**
   * The process of matching duplicate profiles using the Rule-Based matching. If `RuleBasedMatching` = true, Connect Customer Customer Profiles will start to match and merge your profiles according to your configuration in the `RuleBasedMatchingRequest`. You can use the `ListRuleBasedMatches` and `GetSimilarProfiles` API to return and review the results. Also, if you have configured `ExportingConfig` in the `RuleBasedMatchingRequest`, you can download the results from S3.
   *
   * @public
   */
  RuleBasedMatching?: RuleBasedMatchingResponse | undefined;

  /**
   * The data store.
   *
   * @public
   */
  DataStore?: DataStoreResponse | undefined;

  /**
   * The timestamp of when the domain was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp of when the domain was most recently edited.
   *
   * @public
   */
  LastUpdatedAt: Date | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDomainLayoutRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique name of the layout.
   *
   * @public
   */
  LayoutDefinitionName: string | undefined;

  /**
   * The description of the layout
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The display name of the layout
   *
   * @public
   */
  DisplayName: string | undefined;

  /**
   * If set to true for a layout, this layout will be used by default to view data. If set to false, then the layout will not be used by default, but it can be used to view data by explicitly selecting it in the console.
   *
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * The type of layout that can be used to view data under a Customer Profiles domain.
   *
   * @public
   */
  LayoutType: LayoutType | undefined;

  /**
   * A customizable layout that can be used to view data under a Customer Profiles domain.
   *
   * @public
   */
  Layout: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDomainLayoutResponse {
  /**
   * The unique name of the layout.
   *
   * @public
   */
  LayoutDefinitionName: string | undefined;

  /**
   * The description of the layout
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The display name of the layout
   *
   * @public
   */
  DisplayName: string | undefined;

  /**
   * If set to true for a layout, this layout will be used by default to view data. If set to false, then the layout will not be used by default, but it can be used to view data by explicitly selecting it in the console.
   *
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * The type of layout that can be used to view data under customer profiles domain.
   *
   * @public
   */
  LayoutType: LayoutType | undefined;

  /**
   * A customizable layout that can be used to view data under Customer Profiles domain.
   *
   * @public
   */
  Layout: string | undefined;

  /**
   * The version used to create layout.
   *
   * @public
   */
  Version: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The timestamp of when the layout was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp of when the layout was most recently updated.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateEventStreamRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The StreamARN of the destination to deliver profile events to. For example, arn:aws:kinesis:region:account-id:stream/stream-name
   *
   * @public
   */
  Uri: string | undefined;

  /**
   * The name of the event stream.
   *
   * @public
   */
  EventStreamName: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateEventStreamResponse {
  /**
   * A unique identifier for the event stream.
   *
   * @public
   */
  EventStreamArn: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * The criteria that a specific object attribute must meet to trigger the destination.
 *
 * @public
 */
export interface ObjectAttribute {
  /**
   * An attribute contained within a source object.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * A field defined within an object type.
   *
   * @public
   */
  FieldName?: string | undefined;

  /**
   * The operator used to compare an attribute against a list of values.
   *
   * @public
   */
  ComparisonOperator: ComparisonOperator | undefined;

  /**
   * A list of attribute values used for comparison.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * A specific event dimension to be assessed.
 *
 * @public
 */
export interface EventTriggerDimension {
  /**
   * A list of object attributes to be evaluated.
   *
   * @public
   */
  ObjectAttributes: ObjectAttribute[] | undefined;
}

/**
 * Specifies the circumstances under which the event should trigger the destination.
 *
 * @public
 */
export interface EventTriggerCondition {
  /**
   * A list of dimensions to be evaluated for the event.
   *
   * @public
   */
  EventTriggerDimensions: EventTriggerDimension[] | undefined;

  /**
   * The operator used to combine multiple dimensions.
   *
   * @public
   */
  LogicalOperator: EventTriggerLogicalOperator | undefined;
}

/**
 * Defines a limit and the time period during which it is enforced.
 *
 * @public
 */
export interface Period {
  /**
   * The unit of time.
   *
   * @public
   */
  Unit: PeriodUnit | undefined;

  /**
   * The amount of time of the specified unit.
   *
   * @public
   */
  Value: number | undefined;

  /**
   * The maximum allowed number of destination invocations per profile.
   *
   * @public
   */
  MaxInvocationsPerProfile?: number | undefined;

  /**
   * If set to true, there is no limit on the number of destination invocations per profile. The default is false.
   *
   * @public
   */
  Unlimited?: boolean | undefined;
}

/**
 * Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods.
 *
 * @public
 */
export interface EventTriggerLimits {
  /**
   * In milliseconds. Specifies that an event will only trigger the destination if it is processed within a certain latency period.
   *
   * @public
   */
  EventExpiration?: number | undefined;

  /**
   * A list of time periods during which the limits apply.
   *
   * @public
   */
  Periods?: Period[] | undefined;
}

/**
 * @public
 */
export interface CreateEventTriggerRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique name of the event trigger.
   *
   * @public
   */
  EventTriggerName: string | undefined;

  /**
   * The unique name of the object type.
   *
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * The description of the event trigger.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of conditions that determine when an event should trigger the destination.
   *
   * @public
   */
  EventTriggerConditions: EventTriggerCondition[] | undefined;

  /**
   * The destination is triggered only for profiles that meet the criteria of a segment definition.
   *
   * @public
   */
  SegmentFilter?: string | undefined;

  /**
   * Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods.
   *
   * @public
   */
  EventTriggerLimits?: EventTriggerLimits | undefined;

  /**
   * An array of key-value pairs to apply to this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateEventTriggerResponse {
  /**
   * The unique name of the event trigger.
   *
   * @public
   */
  EventTriggerName?: string | undefined;

  /**
   * The unique name of the object type.
   *
   * @public
   */
  ObjectTypeName?: string | undefined;

  /**
   * The description of the event trigger.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of conditions that determine when an event should trigger the destination.
   *
   * @public
   */
  EventTriggerConditions?: EventTriggerCondition[] | undefined;

  /**
   * The destination is triggered only for profiles that meet the criteria of a segment definition.
   *
   * @public
   */
  SegmentFilter?: string | undefined;

  /**
   * Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods.
   *
   * @public
   */
  EventTriggerLimits?: EventTriggerLimits | undefined;

  /**
   * The timestamp of when the event trigger was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp of when the event trigger was most recently updated.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * An array of key-value pairs to apply to this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Configuration data for integration workflow.
 *
 * @public
 */
export interface IntegrationConfig {
  /**
   * Configuration data for `APPFLOW_INTEGRATION` workflow type.
   *
   * @public
   */
  AppflowIntegration?: AppflowIntegration | undefined;
}

/**
 * @public
 */
export interface CreateIntegrationWorkflowRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The type of workflow. The only supported value is APPFLOW_INTEGRATION.
   *
   * @public
   */
  WorkflowType: WorkflowType | undefined;

  /**
   * Configuration data for integration workflow.
   *
   * @public
   */
  IntegrationConfig: IntegrationConfig | undefined;

  /**
   * The name of the profile object type.
   *
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role. Customer Profiles assumes this role to create resources on your behalf as part of workflow execution.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateIntegrationWorkflowResponse {
  /**
   * Unique identifier for the workflow.
   *
   * @public
   */
  WorkflowId: string | undefined;

  /**
   * A message indicating create request was received.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface CreateProfileRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * An account number that you have assigned to the customer.
   *
   * @public
   */
  AccountNumber?: string | undefined;

  /**
   * Any additional information relevant to the customer’s profile.
   *
   * @public
   */
  AdditionalInformation?: string | undefined;

  /**
   * The type of profile used to describe the customer.
   *
   * @deprecated deprecated.
   * @public
   */
  PartyType?: PartyType | undefined;

  /**
   * The name of the customer’s business.
   *
   * @public
   */
  BusinessName?: string | undefined;

  /**
   * The customer’s first name.
   *
   * @public
   */
  FirstName?: string | undefined;

  /**
   * The customer’s middle name.
   *
   * @public
   */
  MiddleName?: string | undefined;

  /**
   * The customer’s last name.
   *
   * @public
   */
  LastName?: string | undefined;

  /**
   * The customer’s birth date.
   *
   * @public
   */
  BirthDate?: string | undefined;

  /**
   * The gender with which the customer identifies.
   *
   * @deprecated deprecated.
   * @public
   */
  Gender?: Gender | undefined;

  /**
   * The customer’s phone number, which has not been specified as a mobile, home, or business number.
   *
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * The customer’s mobile phone number.
   *
   * @public
   */
  MobilePhoneNumber?: string | undefined;

  /**
   * The customer’s home phone number.
   *
   * @public
   */
  HomePhoneNumber?: string | undefined;

  /**
   * The customer’s business phone number.
   *
   * @public
   */
  BusinessPhoneNumber?: string | undefined;

  /**
   * The customer’s email address, which has not been specified as a personal or business address.
   *
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * The customer’s personal email address.
   *
   * @public
   */
  PersonalEmailAddress?: string | undefined;

  /**
   * The customer’s business email address.
   *
   * @public
   */
  BusinessEmailAddress?: string | undefined;

  /**
   * A generic address associated with the customer that is not mailing, shipping, or billing.
   *
   * @public
   */
  Address?: Address | undefined;

  /**
   * The customer’s shipping address.
   *
   * @public
   */
  ShippingAddress?: Address | undefined;

  /**
   * The customer’s mailing address.
   *
   * @public
   */
  MailingAddress?: Address | undefined;

  /**
   * The customer’s billing address.
   *
   * @public
   */
  BillingAddress?: Address | undefined;

  /**
   * A key value pair of attributes of a customer profile.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * An alternative to `PartyType` which accepts any string as input.
   *
   * @public
   */
  PartyTypeString?: string | undefined;

  /**
   * An alternative to `Gender` which accepts any string as input.
   *
   * @public
   */
  GenderString?: string | undefined;

  /**
   * The type of the profile.
   *
   * @public
   */
  ProfileType?: ProfileType | undefined;

  /**
   * Object that defines the preferred methods of engagement, per channel.
   *
   * @public
   */
  EngagementPreferences?: EngagementPreferences | undefined;
}

/**
 * @public
 */
export interface CreateProfileResponse {
  /**
   * The unique identifier of a customer profile.
   *
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * Defines a diversity constraint for a single item column, specifying a cap type and a target value or placeholder that controls how many recommended items may share the same column value.
 *
 * @public
 */
export interface DiversityColumn {
  /**
   * The name of the item catalog column on which to apply the diversity cap. The column must be defined in the recommender schema.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of diversity cap to apply. Valid values are `PERCENTAGE` (interpret `Target` as a percentage of returned items) and `VALUE` (interpret `Target` as an absolute count).
   *
   * @public
   */
  CapType: DiversityCapType | undefined;

  /**
   * The diversity cap target. Either an integer literal (for example, `"25"`) or a placeholder expression of the form `$name` whose value is supplied at inference time through `GetProfileRecommendations`.
   *
   * @public
   */
  Target: string | undefined;
}

/**
 * Configuration that controls diversity of recommendation results by capping the representation of specified item columns.
 *
 * @public
 */
export interface DiversityConfig {
  /**
   * A list of up to two diversity columns. Each column defines a cap on the number or percentage of recommended items that share the same value for that column.
   *
   * @public
   */
  DiversityColumns?: DiversityColumn[] | undefined;
}

/**
 * Configuration parameters for events in the personalization system.
 *
 * @public
 */
export interface EventParameters {
  /**
   * The type of event being tracked (e.g., 'click', 'purchase', 'view').
   *
   * @public
   */
  EventType: string | undefined;

  /**
   * The minimum value threshold that an event must meet to be considered valid.
   *
   * @public
   */
  EventValueThreshold?: number | undefined;

  /**
   * The weight of the event type. A higher weight means higher importance of the event type for the created solution.
   *
   * @public
   */
  EventWeight?: number | undefined;
}

/**
 * Configuration settings that define how events are processed and tracked.
 *
 * @public
 */
export interface EventsConfig {
  /**
   * A list of event parameters configurations that specify how different event types should be handled.
   *
   * @public
   */
  EventParametersList: EventParameters[] | undefined;
}

/**
 * Configuration settings for inference behavior of the recommender.
 *
 * @public
 */
export interface InferenceConfig {
  /**
   * The minimum provisioned transactions per second (TPS) that the recommender supports. The default value is 1. A high MinProvisionedTPS will increase your cost.
   *
   * @public
   */
  MinProvisionedTPS?: number | undefined;
}

/**
 * Configuration settings that define the behavior and parameters of a recommender.
 *
 * @public
 */
export interface RecommenderConfig {
  /**
   * Configuration settings for how the recommender processes and uses events.
   *
   * @public
   */
  EventsConfig?: EventsConfig | undefined;

  /**
   * How often the recommender should retrain its model with new data. If set to 0, automatic retraining will not be enabled.
   *
   * @public
   */
  TrainingFrequency?: number | undefined;

  /**
   * Configuration settings for how the recommender handles inference requests.
   *
   * @public
   */
  InferenceConfig?: InferenceConfig | undefined;

  /**
   * A map of dataset type to a list of column names to train on. The `_webAnalytics` and `_catalogItem` keys are supported. The column names must be a subset of the columns defined in the recommender schema. If not specified, all columns in the schema are used for training. The following columns are always included in training and do not need to be specified: `Item.Id`, `EventTimestamp`, and `EventType` for `_webAnalytics`; `Id` for `_catalogItem`. Mutually exclusive with ExcludedColumns — both cannot be specified in the same request.
   *
   * @public
   */
  IncludedColumns?: Record<string, string[]> | undefined;

  /**
   * A map of dataset type to a list of column names to exclude from training. The `_webAnalytics` and `_catalogItem` keys are supported. The column names must be valid columns defined in the recommender schema. All columns in the schema except the listed columns will be used for training. The following columns are mandatory and cannot be excluded: `Item.Id`, `EventTimestamp`, and `EventType` for `_webAnalytics`; `Id` for `_catalogItem`. Mutually exclusive with IncludedColumns — both cannot be specified in the same request.
   *
   * @public
   */
  ExcludedColumns?: Record<string, string[]> | undefined;

  /**
   * Configuration for diversity-aware recommendations. When set, the recommender applies diversity constraints defined per item column to reduce over-concentration of similar items in the results.
   *
   * @public
   */
  DiversityConfig?: DiversityConfig | undefined;
}

/**
 * @public
 */
export interface CreateRecommenderRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the recommender.
   *
   * @public
   */
  RecommenderName: string | undefined;

  /**
   * The name of the recommeder recipe.
   *
   * @public
   */
  RecommenderRecipeName: RecommenderRecipeName | undefined;

  /**
   * The recommender configuration.
   *
   * @public
   */
  RecommenderConfig?: RecommenderConfig | undefined;

  /**
   * The description of the domain object type.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the recommender schema to use for this recommender. If not specified, the default schema is used.
   *
   * @public
   */
  RecommenderSchemaName?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRecommenderResponse {
  /**
   * The ARN of the recommender
   *
   * @public
   */
  RecommenderArn: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRecommenderFilterRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the recommender filter. The name must be unique within the domain.
   *
   * @public
   */
  RecommenderFilterName: string | undefined;

  /**
   * The filter expression that defines which items to include or exclude from recommendations.
   *
   * @public
   */
  RecommenderFilterExpression: string | undefined;

  /**
   * The name of the recommender schema to use for this recommender filter. If not specified, the default schema is used.
   *
   * @public
   */
  RecommenderSchemaName?: string | undefined;

  /**
   * A description of the recommender filter.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRecommenderFilterResponse {
  /**
   * The Amazon Resource Name (ARN) of the recommender filter.
   *
   * @public
   */
  RecommenderFilterArn: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Defines a column in a recommender schema, including the target field name and optional feature and content type settings for training.
 *
 * @public
 */
export interface RecommenderSchemaField {
  /**
   * The name of the target field in the dataset, such as `Location.City` or `Attributes.MealTime`.
   *
   * @public
   */
  TargetFieldName: string | undefined;

  /**
   * The data type of the column value. Valid values are `String` and `Number`. The default value is `String`.
   *
   * @public
   */
  ContentType?: ContentType | undefined;

  /**
   * How the column is treated for model training. Valid values are `CATEGORICAL` and `TEXTUAL`.
   *
   * @public
   */
  FeatureType?: FeatureType | undefined;
}

/**
 * @public
 */
export interface CreateRecommenderSchemaRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the recommender schema. The name must be unique within the domain.
   *
   * @public
   */
  RecommenderSchemaName: string | undefined;

  /**
   * A map of dataset type to column definitions that specifies which data columns to include in the schema. The `_webAnalytics` and `_catalogItem` keys are supported.
   *
   * @public
   */
  Fields: Record<string, RecommenderSchemaField[]> | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRecommenderSchemaResponse {
  /**
   * The Amazon Resource Name (ARN) of the recommender schema.
   *
   * @public
   */
  RecommenderSchemaArn: string | undefined;

  /**
   * The name of the recommender schema.
   *
   * @public
   */
  RecommenderSchemaName: string | undefined;

  /**
   * A map of dataset type to column definitions included in the schema.
   *
   * @public
   */
  Fields: Record<string, RecommenderSchemaField[]> | undefined;

  /**
   * The timestamp of when the recommender schema was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The status of the recommender schema.
   *
   * @public
   */
  Status: RecommenderSchemaStatus | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Object that segments on various Customer profile's fields that are larger than normal.
 *
 * @public
 */
export interface ExtraLengthValueProfileDimension {
  /**
   * The action to segment with.
   *
   * @public
   */
  DimensionType: StringDimensionType | undefined;

  /**
   * The values to apply the DimensionType on. To reference a calculated attribute or profile attribute as a dynamic value, use handlebar notation: `\{\{_profile.ProfileAttributeName\}\}` or `\{\{_calculated_attribute.CalculatedAttributeName\}\}`.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * Object that segments on various Customer Profile's date fields.
 *
 * @public
 */
export interface DateDimension {
  /**
   * The action to segment with.
   *
   * @public
   */
  DimensionType: DateDimensionType | undefined;

  /**
   * The values to apply the DimensionType on. To reference a calculated attribute or profile attribute as a dynamic value, use handlebar notation: `\{\{_profile.ProfileAttributeName\}\}` or `\{\{_calculated_attribute.CalculatedAttributeName\}\}`.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * Object to hold the dimension of a profile type field to segment on.
 *
 * @public
 */
export interface ProfileTypeDimension {
  /**
   * The action to segment on.
   *
   * @public
   */
  DimensionType: ProfileTypeDimensionType | undefined;

  /**
   * The values to apply the DimensionType on.
   *
   * @public
   */
  Values: ProfileType[] | undefined;
}

/**
 * The object used to segment on attributes within the customer profile.
 *
 * @public
 */
export interface ProfileAttributes {
  /**
   * A field to describe values to segment on within account number.
   *
   * @public
   */
  AccountNumber?: ProfileDimension | undefined;

  /**
   * A field to describe values to segment on within additional information.
   *
   * @public
   */
  AdditionalInformation?: ExtraLengthValueProfileDimension | undefined;

  /**
   * A field to describe values to segment on within first name.
   *
   * @public
   */
  FirstName?: ProfileDimension | undefined;

  /**
   * A field to describe values to segment on within last name.
   *
   * @public
   */
  LastName?: ProfileDimension | undefined;

  /**
   * A field to describe values to segment on within middle name.
   *
   * @public
   */
  MiddleName?: ProfileDimension | undefined;

  /**
   * A field to describe values to segment on within genderString.
   *
   * @public
   */
  GenderString?: ProfileDimension | undefined;

  /**
   * A field to describe values to segment on within partyTypeString.
   *
   * @public
   */
  PartyTypeString?: ProfileDimension | undefined;

  /**
   * A field to describe values to segment on within birthDate.
   *
   * @public
   */
  BirthDate?: DateDimension | undefined;

  /**
   * A field to describe values to segment on within phone number.
   *
   * @public
   */
  PhoneNumber?: ProfileDimension | undefined;

  /**
   * A field to describe values to segment on within business name.
   *
   * @public
   */
  BusinessName?: ProfileDimension | undefined;

  /**
   * A field to describe values to segment on within business phone number.
   *
   * @public
   */
  BusinessPhoneNumber?: ProfileDimension | undefined;

  /**
   * A field to describe values to segment on within home phone number.
   *
   * @public
   */
  HomePhoneNumber?: ProfileDimension | undefined;

  /**
   * A field to describe values to segment on within mobile phone number.
   *
   * @public
   */
  MobilePhoneNumber?: ProfileDimension | undefined;

  /**
   * A field to describe values to segment on within email address.
   *
   * @public
   */
  EmailAddress?: ProfileDimension | undefined;

  /**
   * A field to describe values to segment on within personal email address.
   *
   * @public
   */
  PersonalEmailAddress?: ProfileDimension | undefined;

  /**
   * A field to describe values to segment on within business email address.
   *
   * @public
   */
  BusinessEmailAddress?: ProfileDimension | undefined;

  /**
   * A field to describe values to segment on within address.
   *
   * @public
   */
  Address?: AddressDimension | undefined;

  /**
   * A field to describe values to segment on within shipping address.
   *
   * @public
   */
  ShippingAddress?: AddressDimension | undefined;

  /**
   * A field to describe values to segment on within mailing address.
   *
   * @public
   */
  MailingAddress?: AddressDimension | undefined;

  /**
   * A field to describe values to segment on within billing address.
   *
   * @public
   */
  BillingAddress?: AddressDimension | undefined;

  /**
   * A field to describe values to segment on within attributes.
   *
   * @public
   */
  Attributes?: Record<string, AttributeDimension> | undefined;

  /**
   * A field to describe values to segment on within profile type.
   *
   * @public
   */
  ProfileType?: ProfileTypeDimension | undefined;
}

/**
 * Object that holds what profile and calculated attributes to segment on.
 *
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
   * Object that holds the profile attributes to segment on.
   *
   * @public
   */
  export interface ProfileAttributesMember {
    ProfileAttributes: ProfileAttributes;
    CalculatedAttributes?: never;
    $unknown?: never;
  }

  /**
   * Object that holds the calculated attributes to segment on.
   *
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
 * The source segments to build off of.
 *
 * @public
 */
export interface SourceSegment {
  /**
   * The unique name of the segment definition.
   *
   * @public
   */
  SegmentDefinitionName?: string | undefined;
}

/**
 * Contains dimensions that determine what to segment on.
 *
 * @public
 */
export interface Group {
  /**
   * Defines the attributes to segment on.
   *
   * @public
   */
  Dimensions?: Dimension[] | undefined;

  /**
   * Defines the starting source of data.
   *
   * @public
   */
  SourceSegments?: SourceSegment[] | undefined;

  /**
   * Defines how to interact with the source data.
   *
   * @public
   */
  SourceType?: IncludeOptions | undefined;

  /**
   * Defines how to interact with the profiles found in the current filtering.
   *
   * @public
   */
  Type?: IncludeOptions | undefined;
}

/**
 * Contains all groups of the segment definition.
 *
 * @public
 */
export interface SegmentGroup {
  /**
   * Holds the list of groups within the segment definition.
   *
   * @public
   */
  Groups?: Group[] | undefined;

  /**
   * Defines whether to include or exclude the profiles that fit the segment criteria.
   *
   * @public
   */
  Include?: IncludeOptions | undefined;
}

/**
 * Defines the characteristics and rules for sorting by a specific attribute.
 *
 * @public
 */
export interface SortAttribute {
  /**
   * The name of the attribute to sort by.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The data type of the sort attribute (e.g., string, number, date).
   *
   * @public
   */
  DataType?: SegmentSortDataType | undefined;

  /**
   * The sort order for the attribute (ascending or descending).
   *
   * @public
   */
  Order: SegmentSortOrder | undefined;

  /**
   * The type of attribute (e.g., profile, calculated).
   *
   * @public
   */
  Type?: SortAttributeType | undefined;
}

/**
 * Defines how segments should be sorted and ordered in the results.
 *
 * @public
 */
export interface SegmentSort {
  /**
   * A list of attributes used to sort the segments and their ordering preferences.
   *
   * @public
   */
  Attributes: SortAttribute[] | undefined;
}

/**
 * @public
 */
export interface CreateSegmentDefinitionRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique name of the segment definition.
   *
   * @public
   */
  SegmentDefinitionName: string | undefined;

  /**
   * The display name of the segment definition.
   *
   * @public
   */
  DisplayName: string | undefined;

  /**
   * The description of the segment definition.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies the base segments and dimensions for a segment definition along with their respective relationship.
   *
   * @public
   */
  SegmentGroups?: SegmentGroup | undefined;

  /**
   * The segment SQL query.
   *
   * @public
   */
  SegmentSqlQuery?: string | undefined;

  /**
   * The segment sort.
   *
   * @public
   */
  SegmentSort?: SegmentSort | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSegmentDefinitionResponse {
  /**
   * The name of the segment definition.
   *
   * @public
   */
  SegmentDefinitionName: string | undefined;

  /**
   * The display name of the segment definition.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The description of the segment definition.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The timestamp of when the segment definition was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The arn of the segment definition.
   *
   * @public
   */
  SegmentDefinitionArn?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Contains all groups of the segment definition.
 *
 * @public
 */
export interface SegmentGroupStructure {
  /**
   * Holds the list of groups within the segment definition.
   *
   * @public
   */
  Groups?: Group[] | undefined;

  /**
   * Define whether to include or exclude the profiles that fit the segment criteria.
   *
   * @public
   */
  Include?: IncludeOptions | undefined;
}

/**
 * @public
 */
export interface CreateSegmentEstimateRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The segment query for calculating a segment estimate.
   *
   * @public
   */
  SegmentQuery?: SegmentGroupStructure | undefined;

  /**
   * The segment SQL query.
   *
   * @public
   */
  SegmentSqlQuery?: string | undefined;
}

/**
 * @public
 */
export interface CreateSegmentEstimateResponse {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * A unique identifier for the resource. The value can be passed to `GetSegmentEstimate` to retrieve the result of segment estimate status.
   *
   * @public
   */
  EstimateId?: string | undefined;

  /**
   * The status code for the response.
   *
   * @public
   */
  StatusCode?: number | undefined;
}

/**
 * @public
 */
export interface CreateSegmentSnapshotRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the segment definition used in this snapshot request.
   *
   * @public
   */
  SegmentDefinitionName: string | undefined;

  /**
   * The format in which the segment will be exported.
   *
   * @public
   */
  DataFormat: DataFormat | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the exported segment.
   *
   * @public
   */
  EncryptionKey?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that allows Customer Profiles service principal to assume the role for conducting KMS and S3 operations.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The destination to which the segment will be exported. This field must be provided if the request is not submitted from the Connect Customer Admin Website.
   *
   * @public
   */
  DestinationUri?: string | undefined;
}

/**
 * @public
 */
export interface CreateSegmentSnapshotResponse {
  /**
   * The unique identifier of the segment snapshot.
   *
   * @public
   */
  SnapshotId: string | undefined;
}

/**
 * Represents a field in a ProfileObjectType.
 *
 * @public
 */
export interface ObjectTypeField {
  /**
   * A field of a ProfileObject. For example: _source.FirstName, where “_source” is a ProfileObjectType of a Zendesk user and “FirstName” is a field in that ObjectType.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * The location of the data in the standard ProfileObject model. For example: _profile.Address.PostalCode. Do not include sensitive or personally identifiable information (PII) in the target field name.
   *
   * @public
   */
  Target?: string | undefined;

  /**
   * The content type of the field. Used for determining equality when searching.
   *
   * @public
   */
  ContentType?: FieldContentType | undefined;
}

/**
 * @public
 */
export interface CreateUploadJobRequest {
  /**
   * The unique name of the domain. Domain should be exists for the upload job to be created.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique name of the upload job. Could be a file name to identify the upload job.
   *
   * @public
   */
  DisplayName: string | undefined;

  /**
   * The mapping between CSV Columns and Profile Object attributes. A map of the name and ObjectType field.
   *
   * @public
   */
  Fields: Record<string, ObjectTypeField> | undefined;

  /**
   * The unique key columns for de-duping the profiles used to map data to the profile.
   *
   * @public
   */
  UniqueKey: string | undefined;

  /**
   * The expiry duration for the profiles ingested with the job. If not provided, the system default of 2 weeks is used.
   *
   * @public
   */
  DataExpiry?: number | undefined;
}

/**
 * @public
 */
export interface CreateUploadJobResponse {
  /**
   * The unique identifier for the created upload job.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCalculatedAttributeDefinitionRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique name of the calculated attribute.
   *
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
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainResponse {
  /**
   * A message that indicates the delete request is done.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainLayoutRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique name of the layout.
   *
   * @public
   */
  LayoutDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainLayoutResponse {
  /**
   * A message that indicates the delete request is done.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainObjectTypeRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique name of the domain object type.
   *
   * @public
   */
  ObjectTypeName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainObjectTypeResponse {}

/**
 * @public
 */
export interface DeleteEventStreamRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the event stream
   *
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
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique name of the event trigger.
   *
   * @public
   */
  EventTriggerName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventTriggerResponse {
  /**
   * A message that indicates the delete request is done.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface DeleteIntegrationRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The URI of the S3 bucket or any other type of data source.
   *
   * @public
   */
  Uri: string | undefined;
}

/**
 * @public
 */
export interface DeleteIntegrationResponse {
  /**
   * A message that indicates the delete request is done.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface DeleteProfileRequest {
  /**
   * The unique identifier of a customer profile.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DeleteProfileResponse {
  /**
   * A message that indicates the delete request is done.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProfileKeyRequest {
  /**
   * The unique identifier of a customer profile.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * A searchable identifier of a customer profile.
   *
   * @public
   */
  KeyName: string | undefined;

  /**
   * A list of key values.
   *
   * @public
   */
  Values: string[] | undefined;

  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DeleteProfileKeyResponse {
  /**
   * A message that indicates the delete request is done.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProfileObjectRequest {
  /**
   * The unique identifier of a customer profile.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * The unique identifier of the profile object generated by the service.
   *
   * @public
   */
  ProfileObjectUniqueKey: string | undefined;

  /**
   * The name of the profile object type.
   *
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DeleteProfileObjectResponse {
  /**
   * A message that indicates the delete request is done.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProfileObjectTypeRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the profile object type.
   *
   * @public
   */
  ObjectTypeName: string | undefined;
}

/**
 * @public
 */
export interface DeleteProfileObjectTypeResponse {
  /**
   * A message that indicates the delete request is done.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecommenderRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The recommender name.
   *
   * @public
   */
  RecommenderName: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecommenderResponse {}

/**
 * @public
 */
export interface DeleteRecommenderFilterRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the recommender filter to delete.
   *
   * @public
   */
  RecommenderFilterName: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecommenderFilterResponse {
  /**
   * A message that indicates the delete request is done.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecommenderSchemaRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the recommender schema to delete.
   *
   * @public
   */
  RecommenderSchemaName: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecommenderSchemaResponse {}

/**
 * @public
 */
export interface DeleteSegmentDefinitionRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique name of the segment definition.
   *
   * @public
   */
  SegmentDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSegmentDefinitionResponse {
  /**
   * A message that indicates the delete request is done.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSegmentSubscriptionRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique name of the segment definition.
   *
   * @public
   */
  SegmentDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSegmentSubscriptionResponse {
  /**
   * A confirmation message indicating the subscription was deleted successfully.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Unique identifier for the workflow.
   *
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
   * A string that is serialized from a JSON object.
   *
   * @public
   */
  Objects: string[] | undefined;

  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * An object that defines the Key element of a ProfileObject. A Key is a special element that can be used to search for a customer profile.
 *
 * @public
 */
export interface ObjectTypeKey {
  /**
   * The types of keys that a ProfileObject can have. Each ProfileObject can have only 1 UNIQUE key but multiple PROFILE keys. PROFILE, ASSET, CASE, or ORDER means that this key can be used to tie an object to a PROFILE, ASSET, CASE, or ORDER respectively. UNIQUE means that it can be used to uniquely identify an object. If a key a is marked as SECONDARY, it will be used to search for profiles after all other PROFILE keys have been searched. A LOOKUP_ONLY key is only used to match a profile but is not persisted to be used for searching of the profile. A NEW_ONLY key is only used if the profile does not already exist before the object is ingested, otherwise it is only used for matching objects to profiles.
   *
   * @public
   */
  StandardIdentifiers?: StandardIdentifier[] | undefined;

  /**
   * The reference for the key name of the fields map.
   *
   * @public
   */
  FieldNames?: string[] | undefined;
}

/**
 * Contains `ProfileObjectType` mapping information from the model.
 *
 * @public
 */
export interface DetectedProfileObjectType {
  /**
   * The format of `sourceLastUpdatedTimestamp` that was detected in fields.
   *
   * @public
   */
  SourceLastUpdatedTimestampFormat?: string | undefined;

  /**
   * A map of the name and the `ObjectType` field.
   *
   * @public
   */
  Fields?: Record<string, ObjectTypeField> | undefined;

  /**
   * A list of unique keys that can be used to map data to a profile.
   *
   * @public
   */
  Keys?: Record<string, ObjectTypeKey[]> | undefined;
}

/**
 * @public
 */
export interface DetectProfileObjectTypeResponse {
  /**
   * Detected `ProfileObjectType` mappings from given objects. A maximum of one mapping is supported.
   *
   * @public
   */
  DetectedProfileObjectTypes?: DetectedProfileObjectType[] | undefined;
}

/**
 * @public
 */
export interface DisassociateStreamForSegmentsRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DisassociateStreamForSegmentsResponse {
  /**
   * A confirmation message indicating the stream was disassociated successfully.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface GetAutoMergingPreviewRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * A list of matching attributes that represent matching criteria.
   *
   * @public
   */
  Consolidation: Consolidation | undefined;

  /**
   * How the auto-merging process should resolve conflicts between different profiles.
   *
   * @public
   */
  ConflictResolution: ConflictResolution | undefined;

  /**
   * Minimum confidence score required for profiles within a matching group to be merged during the auto-merge process.
   *
   * @public
   */
  MinAllowedConfidenceScoreForMerging?: number | undefined;
}

/**
 * @public
 */
export interface GetAutoMergingPreviewResponse {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The number of match groups in the domain that have been reviewed in this preview dry run.
   *
   * @public
   */
  NumberOfMatchesInSample?: number | undefined;

  /**
   * The number of profiles found in this preview dry run.
   *
   * @public
   */
  NumberOfProfilesInSample?: number | undefined;

  /**
   * The number of profiles that would be merged if this wasn't a preview dry run.
   *
   * @public
   */
  NumberOfProfilesWillBeMerged?: number | undefined;
}

/**
 * @public
 */
export interface GetCalculatedAttributeDefinitionRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique name of the calculated attribute.
   *
   * @public
   */
  CalculatedAttributeName: string | undefined;
}

/**
 * @public
 */
export interface GetCalculatedAttributeDefinitionResponse {
  /**
   * The unique name of the calculated attribute.
   *
   * @public
   */
  CalculatedAttributeName?: string | undefined;

  /**
   * The display name of the calculated attribute.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The description of the calculated attribute.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The timestamp of when the calculated attribute definition was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp of when the calculated attribute definition was most recently edited.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The aggregation operation to perform for the calculated attribute.
   *
   * @public
   */
  Statistic?: Statistic | undefined;

  /**
   * The filter assigned to this calculated attribute definition.
   *
   * @public
   */
  Filter?: Filter | undefined;

  /**
   * The conditions including range, object count, and threshold for the calculated attribute.
   *
   * @public
   */
  Conditions?: Conditions | undefined;

  /**
   * Mathematical expression and a list of attribute items specified in that expression.
   *
   * @public
   */
  AttributeDetails?: AttributeDetails | undefined;

  /**
   * Whether historical data ingested before the Calculated Attribute was created should be included in calculations.
   *
   * @public
   */
  UseHistoricalData?: boolean | undefined;

  /**
   * Status of the Calculated Attribute creation (whether all historical data has been indexed).
   *
   * @public
   */
  Status?: ReadinessStatus | undefined;

  /**
   * Information indicating if the Calculated Attribute is ready for use by confirming all historical data has been processed and reflected.
   *
   * @public
   */
  Readiness?: Readiness | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetCalculatedAttributeForProfileRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique identifier of a customer profile.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * The unique name of the calculated attribute.
   *
   * @public
   */
  CalculatedAttributeName: string | undefined;
}

/**
 * @public
 */
export interface GetCalculatedAttributeForProfileResponse {
  /**
   * The unique name of the calculated attribute.
   *
   * @public
   */
  CalculatedAttributeName?: string | undefined;

  /**
   * The display name of the calculated attribute.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * Indicates whether the calculated attribute’s value is based on partial data. If data is partial, it is set to true.
   *
   * @public
   */
  IsDataPartial?: string | undefined;

  /**
   * The value of the calculated attribute.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The timestamp of the newest object included in the calculated attribute calculation.
   *
   * @public
   */
  LastObjectTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetDomainRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * Usage-specific statistics about the domain.
 *
 * @public
 */
export interface DomainStats {
  /**
   * The total number of profiles currently in the domain.
   *
   * @public
   */
  ProfileCount?: number | undefined;

  /**
   * The number of profiles that you are currently paying for in the domain. If you have more than 100 objects associated with a single profile, that profile counts as two profiles. If you have more than 200 objects, that profile counts as three, and so on.
   *
   * @public
   */
  MeteringProfileCount?: number | undefined;

  /**
   * The total number of objects in domain.
   *
   * @public
   */
  ObjectCount?: number | undefined;

  /**
   * The total size, in bytes, of all objects in the domain.
   *
   * @public
   */
  TotalSize?: number | undefined;
}

/**
 * @public
 */
export interface GetDomainResponse {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The default number of days until the data within the domain expires.
   *
   * @public
   */
  DefaultExpirationDays?: number | undefined;

  /**
   * The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage.
   *
   * @public
   */
  DefaultEncryptionKey?: string | undefined;

  /**
   * The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications.
   *
   * @public
   */
  DeadLetterQueueUrl?: string | undefined;

  /**
   * Usage-specific statistics about the domain.
   *
   * @public
   */
  Stats?: DomainStats | undefined;

  /**
   * The process of matching duplicate profiles. If `Matching` = `true`, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains.
   *
   * After the Identity Resolution Job completes, use the [GetMatches](https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html) API to return and review the results. Or, if you have configured `ExportingConfig` in the `MatchingRequest`, you can download the results from S3.
   *
   * @public
   */
  Matching?: MatchingResponse | undefined;

  /**
   * The process of matching duplicate profiles using the Rule-Based matching. If `RuleBasedMatching` = true, Connect Customer Customer Profiles will start to match and merge your profiles according to your configuration in the `RuleBasedMatchingRequest`. You can use the `ListRuleBasedMatches` and `GetSimilarProfiles` API to return and review the results. Also, if you have configured `ExportingConfig` in the `RuleBasedMatchingRequest`, you can download the results from S3.
   *
   * @public
   */
  RuleBasedMatching?: RuleBasedMatchingResponse | undefined;

  /**
   * True if data store is enabled for this domain.
   *
   * @public
   */
  DataStore?: DataStoreResponse | undefined;

  /**
   * The timestamp of when the domain was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp of when the domain was most recently edited.
   *
   * @public
   */
  LastUpdatedAt: Date | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetDomainLayoutRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique name of the layout.
   *
   * @public
   */
  LayoutDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface GetDomainLayoutResponse {
  /**
   * The unique name of the layout.
   *
   * @public
   */
  LayoutDefinitionName: string | undefined;

  /**
   * The description of the layout
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The display name of the layout
   *
   * @public
   */
  DisplayName: string | undefined;

  /**
   * If set to true for a layout, this layout will be used by default to view data. If set to false, then the layout will not be used by default, but it can be used to view data by explicitly selecting it in the console.
   *
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * The type of layout that can be used to view data under a Customer Profiles domain.
   *
   * @public
   */
  LayoutType: LayoutType | undefined;

  /**
   * A customizable layout that can be used to view data under a Customer Profiles domain.
   *
   * @public
   */
  Layout: string | undefined;

  /**
   * The version used to create layout.
   *
   * @public
   */
  Version: string | undefined;

  /**
   * The timestamp of when the layout was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp of when the layout was most recently updated.
   *
   * @public
   */
  LastUpdatedAt: Date | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetDomainObjectTypeRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique name of the domain object type.
   *
   * @public
   */
  ObjectTypeName: string | undefined;
}

/**
 * The standard domain object type.
 *
 * @public
 */
export interface DomainObjectTypeField {
  /**
   * The expression that defines how to extract the field value from the source object.>
   *
   * @public
   */
  Source: string | undefined;

  /**
   * The expression that defines where the field value should be placed in the standard domain object.
   *
   * @public
   */
  Target: string | undefined;

  /**
   * The content type of the field.
   *
   * @public
   */
  ContentType?: ContentType | undefined;

  /**
   * The semantic meaning of the field.
   *
   * @public
   */
  FeatureType?: FeatureType | undefined;
}

/**
 * @public
 */
export interface GetDomainObjectTypeResponse {
  /**
   * The unique name of the domain object type.
   *
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * The description of the domain object type.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The customer provided KMS key used to encrypt this type of domain object.
   *
   * @public
   */
  EncryptionKey?: string | undefined;

  /**
   * A map of field names to their corresponding domain object type field definitions.
   *
   * @public
   */
  Fields?: Record<string, DomainObjectTypeField> | undefined;

  /**
   * The timestamp of when the domain object type was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp of when the domain object type was most recently edited.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetEventStreamRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the event stream provided during create operations.
   *
   * @public
   */
  EventStreamName: string | undefined;
}

/**
 * Details of the destination being used for the EventStream.
 *
 * @public
 */
export interface EventStreamDestinationDetails {
  /**
   * The StreamARN of the destination to deliver profile events to. For example, arn:aws:kinesis:region:account-id:stream/stream-name.
   *
   * @public
   */
  Uri: string | undefined;

  /**
   * The status of enabling the Kinesis stream as a destination for export.
   *
   * @public
   */
  Status: EventStreamDestinationStatus | undefined;

  /**
   * The timestamp when the status last changed to `UNHEALHY`.
   *
   * @public
   */
  UnhealthySince?: Date | undefined;

  /**
   * The human-readable string that corresponds to the error or success while enabling the streaming destination.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface GetEventStreamResponse {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * A unique identifier for the event stream.
   *
   * @public
   */
  EventStreamArn: string | undefined;

  /**
   * The timestamp of when the export was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The operational state of destination stream for export.
   *
   * @public
   */
  State: EventStreamState | undefined;

  /**
   * The timestamp when the `State` changed to `STOPPED`.
   *
   * @public
   */
  StoppedSince?: Date | undefined;

  /**
   * Details regarding the Kinesis stream.
   *
   * @public
   */
  DestinationDetails: EventStreamDestinationDetails | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetEventTriggerRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique name of the event trigger.
   *
   * @public
   */
  EventTriggerName: string | undefined;
}

/**
 * @public
 */
export interface GetEventTriggerResponse {
  /**
   * The unique name of the event trigger.
   *
   * @public
   */
  EventTriggerName?: string | undefined;

  /**
   * The unique name of the object type.
   *
   * @public
   */
  ObjectTypeName?: string | undefined;

  /**
   * The description of the event trigger.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of conditions that determine when an event should trigger the destination.
   *
   * @public
   */
  EventTriggerConditions?: EventTriggerCondition[] | undefined;

  /**
   * The destination is triggered only for profiles that meet the criteria of a segment definition.
   *
   * @public
   */
  SegmentFilter?: string | undefined;

  /**
   * Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods.
   *
   * @public
   */
  EventTriggerLimits?: EventTriggerLimits | undefined;

  /**
   * The timestamp of when the event trigger was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp of when the event trigger was most recently updated.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * An array of key-value pairs to apply to this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetIdentityResolutionJobRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique identifier of the Identity Resolution Job.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * The S3 location where Identity Resolution Jobs write result files.
 *
 * @public
 */
export interface S3ExportingLocation {
  /**
   * The name of the S3 bucket name where Identity Resolution Jobs write result files.
   *
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * The S3 key name of the location where Identity Resolution Jobs write result files.
   *
   * @public
   */
  S3KeyName?: string | undefined;
}

/**
 * The S3 location where Identity Resolution Jobs write result files.
 *
 * @public
 */
export interface ExportingLocation {
  /**
   * Information about the S3 location where Identity Resolution Jobs write result files.
   *
   * @public
   */
  S3Exporting?: S3ExportingLocation | undefined;
}

/**
 * Statistics about the Identity Resolution Job.
 *
 * @public
 */
export interface JobStats {
  /**
   * The number of profiles reviewed.
   *
   * @public
   */
  NumberOfProfilesReviewed?: number | undefined;

  /**
   * The number of matches found.
   *
   * @public
   */
  NumberOfMatchesFound?: number | undefined;

  /**
   * The number of merges completed.
   *
   * @public
   */
  NumberOfMergesDone?: number | undefined;
}

/**
 * @public
 */
export interface GetIdentityResolutionJobResponse {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * The unique identifier of the Identity Resolution Job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The status of the Identity Resolution Job.
   *
   * - `PENDING`: The Identity Resolution Job is scheduled but has not started yet. If you turn off the Identity Resolution feature in your domain, jobs in the `PENDING` state are deleted.
   * - `PREPROCESSING`: The Identity Resolution Job is loading your data.
   * - `FIND_MATCHING`: The Identity Resolution Job is using the machine learning model to identify profiles that belong to the same matching group.
   * - `MERGING`: The Identity Resolution Job is merging duplicate profiles.
   * - `COMPLETED`: The Identity Resolution Job completed successfully.
   * - `PARTIAL_SUCCESS`: There's a system error and not all of the data is merged. The Identity Resolution Job writes a message indicating the source of the problem.
   * - `FAILED`: The Identity Resolution Job did not merge any data. It writes a message indicating the source of the problem.
   *
   * @public
   */
  Status?: IdentityResolutionJobStatus | undefined;

  /**
   * The error messages that are generated when the Identity Resolution Job runs.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The timestamp of when the Identity Resolution Job was started or will be started.
   *
   * @public
   */
  JobStartTime?: Date | undefined;

  /**
   * The timestamp of when the Identity Resolution Job was completed.
   *
   * @public
   */
  JobEndTime?: Date | undefined;

  /**
   * The timestamp of when the Identity Resolution Job was most recently edited.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The timestamp of when the Identity Resolution Job will expire.
   *
   * @public
   */
  JobExpirationTime?: Date | undefined;

  /**
   * Configuration settings for how to perform the auto-merging of profiles.
   *
   * @public
   */
  AutoMerging?: AutoMerging | undefined;

  /**
   * The S3 location where the Identity Resolution Job writes result files.
   *
   * @public
   */
  ExportingLocation?: ExportingLocation | undefined;

  /**
   * Statistics about the Identity Resolution Job.
   *
   * @public
   */
  JobStats?: JobStats | undefined;
}

/**
 * @public
 */
export interface GetIntegrationRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The URI of the S3 bucket or any other type of data source.
   *
   * @public
   */
  Uri: string | undefined;
}

/**
 * @public
 */
export interface GetIntegrationResponse {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The URI of the S3 bucket or any other type of data source.
   *
   * @public
   */
  Uri: string | undefined;

  /**
   * The name of the profile object type.
   *
   * @public
   */
  ObjectTypeName?: string | undefined;

  /**
   * The timestamp of when the domain was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp of when the domain was most recently edited.
   *
   * @public
   */
  LastUpdatedAt: Date | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A map in which each key is an event type from an external application such as Segment or Shopify, and each value is an `ObjectTypeName` (template) used to ingest the event. It supports the following event types: `SegmentIdentify`, `ShopifyCreateCustomers`, `ShopifyUpdateCustomers`, `ShopifyCreateDraftOrders`, `ShopifyUpdateDraftOrders`, `ShopifyCreateOrders`, and `ShopifyUpdatedOrders`.
   *
   * @public
   */
  ObjectTypeNames?: Record<string, string> | undefined;

  /**
   * Unique identifier for the workflow.
   *
   * @public
   */
  WorkflowId?: string | undefined;

  /**
   * Boolean that shows if the Flow that's associated with the Integration is created in Amazon Appflow, or with ObjectTypeName equals _unstructured via API/CLI in flowDefinition.
   *
   * @public
   */
  IsUnstructured?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role. The Integration uses this role to make Customer Profiles requests on your behalf.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * A list of unique names for active event triggers associated with the integration. This list would be empty if no Event Trigger is associated with the integration.
   *
   * @public
   */
  EventTriggerNames?: string[] | undefined;

  /**
   * Specifies whether the integration applies to profile level data (associated with profiles) or domain level data (not associated with any specific profile). The default value is PROFILE.
   *
   * @public
   */
  Scope?: Scope | undefined;
}

/**
 * @public
 */
export interface GetMatchesRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * The Match group object.
 *
 * @public
 */
export interface MatchItem {
  /**
   * The unique identifiers for this group of profiles that match.
   *
   * @public
   */
  MatchId?: string | undefined;

  /**
   * A list of identifiers for profiles that match.
   *
   * @public
   */
  ProfileIds?: string[] | undefined;

  /**
   * A number between 0 and 1, where a higher score means higher similarity. Examining match confidence scores lets you distinguish between groups of similar records in which the system is highly confident (which you may decide to merge), groups of similar records about which the system is uncertain (which you may decide to have reviewed by a human), and groups of similar records that the system deems to be unlikely (which you may decide to reject). Given confidence scores vary as per the data input, it should not be used an absolute measure of matching quality.
   *
   * @public
   */
  ConfidenceScore?: number | undefined;
}

/**
 * @public
 */
export interface GetMatchesResponse {
  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The timestamp this version of Match Result generated.
   *
   * @public
   */
  MatchGenerationDate?: Date | undefined;

  /**
   * The number of potential matches found.
   *
   * @public
   */
  PotentialMatches?: number | undefined;

  /**
   * The list of matched profiles for this instance.
   *
   * @public
   */
  Matches?: MatchItem[] | undefined;
}

/**
 * @public
 */
export interface GetObjectTypeAttributeStatisticsRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique name of the domain object type.
   *
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * The attribute name.
   *
   * @public
   */
  AttributeName: string | undefined;
}

/**
 * Contains percentile statistics for object type attributes.
 *
 * @public
 */
export interface GetObjectTypeAttributeStatisticsPercentiles {
  /**
   * The 5th percentile value of the attribute.
   *
   * @public
   */
  P5: number | undefined;

  /**
   * The 25th percentile value of the attribute.
   *
   * @public
   */
  P25: number | undefined;

  /**
   * The 50th percentile (median) value of the attribute.
   *
   * @public
   */
  P50: number | undefined;

  /**
   * The 75th percentile value of the attribute.
   *
   * @public
   */
  P75: number | undefined;

  /**
   * The 95th percentile value of the attribute.
   *
   * @public
   */
  P95: number | undefined;
}

/**
 * Statistical measurements for object type attributes including basic statistics and percentiles.
 *
 * @public
 */
export interface GetObjectTypeAttributeStatisticsStats {
  /**
   * The maximum value found in the attribute dataset.
   *
   * @public
   */
  Maximum: number | undefined;

  /**
   * The minimum value found in the attribute dataset.
   *
   * @public
   */
  Minimum: number | undefined;

  /**
   * The arithmetic mean of the attribute values.
   *
   * @public
   */
  Average: number | undefined;

  /**
   * The standard deviation of the attribute values, measuring their spread around the mean.
   *
   * @public
   */
  StandardDeviation: number | undefined;

  /**
   * Percentile distribution statistics for the attribute values.
   *
   * @public
   */
  Percentiles: GetObjectTypeAttributeStatisticsPercentiles | undefined;
}

/**
 * @public
 */
export interface GetObjectTypeAttributeStatisticsResponse {
  /**
   * The statistics.
   *
   * @public
   */
  Statistics: GetObjectTypeAttributeStatisticsStats | undefined;

  /**
   * Time when this statistics was calculated.
   *
   * @public
   */
  CalculatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetProfileHistoryRecordRequest {
  /**
   * The unique name of the domain for which to return a profile history record.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique identifier of the profile for which to return a history record.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * The unique identifier of the profile history record to return.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetProfileHistoryRecordResponse {
  /**
   * The unique identifier of the profile history record.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The name of the profile object type.
   *
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * The timestamp of when the profile history record was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp of when the profile history record was last updated.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The action type of the profile history record.
   *
   * @public
   */
  ActionType: ActionType | undefined;

  /**
   * The unique identifier of the profile object generated by the service.
   *
   * @public
   */
  ProfileObjectUniqueKey?: string | undefined;

  /**
   * A string containing the customer profile, profile object, or profile key content.
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the person or service principal who performed the action.
   *
   * @public
   */
  PerformedBy?: string | undefined;
}

/**
 * @public
 */
export interface GetProfileObjectTypeRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the profile object type.
   *
   * @public
   */
  ObjectTypeName: string | undefined;
}

/**
 * @public
 */
export interface GetProfileObjectTypeResponse {
  /**
   * The name of the profile object type.
   *
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * The description of the profile object type.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * A unique identifier for the object template.
   *
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * The number of days until the data in the object expires.
   *
   * @public
   */
  ExpirationDays?: number | undefined;

  /**
   * The customer-provided key to encrypt the profile object that will be created in this profile object type.
   *
   * @public
   */
  EncryptionKey?: string | undefined;

  /**
   * Indicates whether a profile should be created when data is received if one doesn’t exist for an object of this type. The default is `FALSE`. If the AllowProfileCreation flag is set to `FALSE`, then the service tries to fetch a standard profile and associate this object with the profile. If it is set to `TRUE`, and if no match is found, then the service creates a new standard profile.
   *
   * @public
   */
  AllowProfileCreation?: boolean | undefined;

  /**
   * The format of your `sourceLastUpdatedTimestamp` that was previously set up.
   *
   * @public
   */
  SourceLastUpdatedTimestampFormat?: string | undefined;

  /**
   * The amount of provisioned profile object max count available.
   *
   * @public
   */
  MaxAvailableProfileObjectCount?: number | undefined;

  /**
   * The amount of profile object max count assigned to the object type.
   *
   * @public
   */
  MaxProfileObjectCount?: number | undefined;

  /**
   * An integer that determines the priority of this object type when data from multiple sources is ingested. Lower values take priority. Object types without a specified source priority default to the lowest priority.
   *
   * @public
   */
  SourcePriority?: number | undefined;

  /**
   * A map of the name and ObjectType field.
   *
   * @public
   */
  Fields?: Record<string, ObjectTypeField> | undefined;

  /**
   * A list of unique keys that can be used to map data to the profile.
   *
   * @public
   */
  Keys?: Record<string, ObjectTypeKey[]> | undefined;

  /**
   * The timestamp of when the domain was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp of when the domain was most recently edited.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetProfileObjectTypeTemplateRequest {
  /**
   * A unique identifier for the object template.
   *
   * @public
   */
  TemplateId: string | undefined;
}

/**
 * @public
 */
export interface GetProfileObjectTypeTemplateResponse {
  /**
   * A unique identifier for the object template.
   *
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * The name of the source of the object template.
   *
   * @public
   */
  SourceName?: string | undefined;

  /**
   * The source of the object template.
   *
   * @public
   */
  SourceObject?: string | undefined;

  /**
   * The default maximum number of objects of this object type that can be stored per profile. This default applies when you don't set `MaxProfileObjectCount` on an object type created from this template. If this value isn't present, no default limit applies.
   *
   * @public
   */
  DefaultMaxProfileObjectCount?: number | undefined;

  /**
   * The timestamp after which `DefaultMaxProfileObjectCount` takes effect. The default limit applies only to domains created after this time.
   *
   * @public
   */
  DefaultMaxProfileObjectCountEffectiveAfter?: Date | undefined;

  /**
   * Indicates whether the template is store-only. Objects of an object type created from a store-only template are ingested and stored, but the object type can't be used by calculated attributes or event triggers.
   *
   * @public
   */
  StoreOnly?: boolean | undefined;

  /**
   * Indicates whether a profile should be created when data is received if one doesn’t exist for an object of this type. The default is `FALSE`. If the AllowProfileCreation flag is set to `FALSE`, then the service tries to fetch a standard profile and associate this object with the profile. If it is set to `TRUE`, and if no match is found, then the service creates a new standard profile.
   *
   * @public
   */
  AllowProfileCreation?: boolean | undefined;

  /**
   * The format of your `sourceLastUpdatedTimestamp` that was previously set up.
   *
   * @public
   */
  SourceLastUpdatedTimestampFormat?: string | undefined;

  /**
   * A map of the name and ObjectType field.
   *
   * @public
   */
  Fields?: Record<string, ObjectTypeField> | undefined;

  /**
   * A list of unique keys that can be used to map data to the profile.
   *
   * @public
   */
  Keys?: Record<string, ObjectTypeKey[]> | undefined;
}

/**
 * Runtime diversity configuration for a `GetProfileRecommendations` request.
 *
 * @public
 */
export interface RecommendationDiversityConfig {
  /**
   * Whether diversity-aware recommendations are enabled for this request.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * An optional map of placeholder name to integer cap value used to resolve `$name` placeholders defined in the recommender's `DiversityConfig` at inference time. Up to 2 entries are supported.
   *
   * @public
   */
  Values?: Record<string, number> | undefined;
}

/**
 * Configuration for metadata to include in recommendation responses.
 *
 * @public
 */
export interface MetadataConfig {
  /**
   * A list of metadata column names from your Items dataset to include in the recommendation response.
   *
   * @public
   */
  MetadataColumns?: string[] | undefined;
}

/**
 * A filter that specifies criteria for including or excluding items from recommendations.
 *
 * @public
 */
export interface RecommenderFilter {
  /**
   * The name of the recommender filter to apply.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The values to use when filtering recommendations. For each placeholder parameter in your filter expression, provide the parameter name (in matching case) as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma.
   *
   * @public
   */
  Values?: Record<string, string> | undefined;
}

/**
 * Contains information on a promotion. A promotion defines additional business rules that apply to a configurable subset of recommended items.
 *
 * @public
 */
export interface RecommenderPromotionalFilter {
  /**
   * The name of the recommender filter to use for the promotion.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The values to use when promoting items. For each placeholder parameter in your promotion's filter expression, provide the parameter name (in matching case) as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma.
   *
   * @public
   */
  Values?: Record<string, string> | undefined;

  /**
   * The name of the promotion.
   *
   * @public
   */
  PromotionName?: string | undefined;

  /**
   * The percentage of recommended items to apply the promotion to.
   *
   * @public
   */
  PercentPromotedItems?: number | undefined;
}

/**
 * @public
 */
export interface GetProfileRecommendationsRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique identifier of the profile for which to retrieve recommendations.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * The unique name of the recommender.
   *
   * @public
   */
  RecommenderName: string | undefined;

  /**
   * The contextual metadata used to provide dynamic runtime information to tailor recommendations.
   *
   * @public
   */
  Context?: Record<string, string> | undefined;

  /**
   * A list of filters to apply to the returned recommendations. Filters define criteria for including or excluding items from the recommendation results.
   *
   * @public
   */
  RecommenderFilters?: RecommenderFilter[] | undefined;

  /**
   * A list of promotional filters to apply to the recommendations. Promotional filters allow you to promote specific items within a configurable subset of recommendation results.
   *
   * @public
   */
  RecommenderPromotionalFilters?: RecommenderPromotionalFilter[] | undefined;

  /**
   * A list of item IDs to rank for the user. Use this when you want to re-rank a specific set of items rather than getting recommendations from the full item catalog. Required for personalized-ranking use cases.
   *
   * @public
   */
  CandidateIds?: string[] | undefined;

  /**
   * The maximum number of recommendations to return. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Configuration for including item metadata in the recommendation response. Use this to specify which metadata columns to return alongside recommended items.
   *
   * @public
   */
  MetadataConfig?: MetadataConfig | undefined;

  /**
   * Runtime diversity configuration for this request. Enables diversity-aware recommendations and optionally supplies values for placeholder-based diversity caps configured on the recommender.
   *
   * @public
   */
  DiversityConfig?: RecommendationDiversityConfig | undefined;
}

/**
 * Represents a single recommendation generated by the recommender system.
 *
 * @public
 */
export interface Recommendation {
  /**
   * The catalog item being recommended, including its complete details and attributes.
   *
   * @public
   */
  CatalogItem?: CatalogItem | undefined;

  /**
   * Recommendation Score between 0 and 1.
   *
   * @public
   */
  Score?: number | undefined;
}

/**
 * @public
 */
export interface GetProfileRecommendationsResponse {
  /**
   * List of recommendations generated by the recommender.
   *
   * @public
   */
  Recommendations?: Recommendation[] | undefined;
}

/**
 * @public
 */
export interface GetRecommenderRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the recommender.
   *
   * @public
   */
  RecommenderName: string | undefined;

  /**
   * The number of training metrics to retrieve for the recommender.
   *
   * @public
   */
  TrainingMetricsCount?: number | undefined;
}

/**
 * Contains information about an update operation performed on a recommender.
 *
 * @public
 */
export interface RecommenderUpdate {
  /**
   * The updated configuration settings applied to the recommender during this update.
   *
   * @public
   */
  RecommenderConfig?: RecommenderConfig | undefined;

  /**
   * The current status of the recommender update operation.
   *
   * @public
   */
  Status?: RecommenderStatus | undefined;

  /**
   * The timestamp when this recommender update was initiated.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp of when the recommender was edited.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * If the update operation failed, provides the reason for the failure.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The name of the recommender version associated with this update operation.
   *
   * @public
   */
  RecommenderVersionName?: string | undefined;
}

/**
 * Contains metrics and performance indicators from the training of a recommender model.
 *
 * @public
 */
export interface TrainingMetrics {
  /**
   * The timestamp when these training metrics were recorded.
   *
   * @public
   */
  Time?: Date | undefined;

  /**
   * A collection of performance metrics and statistics from the training process.
   *
   * @public
   */
  Metrics?: Partial<Record<TrainingMetricName, number>> | undefined;

  /**
   * The name of the recommender version that produced these training metrics.
   *
   * @public
   */
  RecommenderVersionName?: string | undefined;
}

/**
 * @public
 */
export interface GetRecommenderResponse {
  /**
   * The name of the recommender.
   *
   * @public
   */
  RecommenderName: string | undefined;

  /**
   * The name of the recipe used by the recommender to generate recommendations.
   *
   * @public
   */
  RecommenderRecipeName: RecommenderRecipeName | undefined;

  /**
   * The name of the recommender schema associated with this recommender.
   *
   * @public
   */
  RecommenderSchemaName?: string | undefined;

  /**
   * The configuration settings for the recommender, including parameters and settings that define its behavior.
   *
   * @public
   */
  RecommenderConfig?: RecommenderConfig | undefined;

  /**
   * A detailed description of the recommender providing information about its purpose and functionality.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The current status of the recommender, indicating whether it is active, creating, updating, or in another state.
   *
   * @public
   */
  Status?: RecommenderStatus | undefined;

  /**
   * The timestamp of when the recommender was edited.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The timestamp of when the recommender was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * If the recommender fails, provides the reason for the failure.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * Information about the most recent update performed on the recommender, including status and timestamp.
   *
   * @public
   */
  LatestRecommenderUpdate?: RecommenderUpdate | undefined;

  /**
   * The name of the recommender version currently serving recommendations. Omitted when no active recommender version is set.
   *
   * @public
   */
  ActiveRecommenderVersionName?: string | undefined;

  /**
   * A set of metrics that provide information about the recommender's training performance and accuracy.
   *
   * @public
   */
  TrainingMetrics?: TrainingMetrics[] | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetRecommenderFilterRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the recommender filter to retrieve.
   *
   * @public
   */
  RecommenderFilterName: string | undefined;
}

/**
 * @public
 */
export interface GetRecommenderFilterResponse {
  /**
   * The name of the recommender filter.
   *
   * @public
   */
  RecommenderFilterName: string | undefined;

  /**
   * The filter expression that defines which items to include or exclude from recommendations.
   *
   * @public
   */
  RecommenderFilterExpression: string | undefined;

  /**
   * The name of the recommender schema associated with this recommender filter.
   *
   * @public
   */
  RecommenderSchemaName?: string | undefined;

  /**
   * The timestamp of when the recommender filter was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The status of the recommender filter.
   *
   * @public
   */
  Status: RecommenderFilterStatus | undefined;

  /**
   * The description of the recommender filter.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * If the recommender filter failed, provides the reason for the failure.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetRecommenderSchemaRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the recommender schema to retrieve.
   *
   * @public
   */
  RecommenderSchemaName: string | undefined;
}

/**
 * @public
 */
export interface GetRecommenderSchemaResponse {
  /**
   * The name of the recommender schema.
   *
   * @public
   */
  RecommenderSchemaName: string | undefined;

  /**
   * A map of dataset type to column definitions included in the schema.
   *
   * @public
   */
  Fields: Record<string, RecommenderSchemaField[]> | undefined;

  /**
   * The timestamp of when the recommender schema was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The status of the recommender schema.
   *
   * @public
   */
  Status: RecommenderSchemaStatus | undefined;
}

/**
 * @public
 */
export interface GetSegmentDefinitionRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique name of the segment definition.
   *
   * @public
   */
  SegmentDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface GetSegmentDefinitionResponse {
  /**
   * The name of the segment definition.
   *
   * @public
   */
  SegmentDefinitionName?: string | undefined;

  /**
   * The display name of the segment definition.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The description of the segment definition.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The segment criteria associated with this definition.
   *
   * @public
   */
  SegmentGroups?: SegmentGroup | undefined;

  /**
   * The segment sort.
   *
   * @public
   */
  SegmentSort?: SegmentSort | undefined;

  /**
   * The arn of the segment definition.
   *
   * @public
   */
  SegmentDefinitionArn: string | undefined;

  /**
   * The timestamp of when the segment definition was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The segment SQL query.
   *
   * @public
   */
  SegmentSqlQuery?: string | undefined;

  /**
   * The segment type.
   *
   * Classic : Segments created using traditional SegmentGroup structure
   *
   * Enhanced : Segments created using SQL queries
   *
   * @public
   */
  SegmentType?: SegmentType | undefined;
}

/**
 * @public
 */
export interface GetSegmentEstimateRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The query Id passed by a previous `CreateSegmentEstimate` operation.
   *
   * @public
   */
  EstimateId: string | undefined;
}

/**
 * @public
 */
export interface GetSegmentEstimateResponse {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * The `QueryId` which is the same as the value passed in `QueryId`.
   *
   * @public
   */
  EstimateId?: string | undefined;

  /**
   * The current status of the query.
   *
   * @public
   */
  Status?: EstimateStatus | undefined;

  /**
   * The estimated number of profiles contained in the segment.
   *
   * @public
   */
  Estimate?: string | undefined;

  /**
   * The error message if there is any error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The status code of the segment estimate.
   *
   * @public
   */
  StatusCode?: number | undefined;
}

/**
 * @public
 */
export interface GetSegmentMembershipRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The Id of the wanted segment. Needs to be a valid, and existing segment Id.
   *
   * @public
   */
  SegmentDefinitionName: string | undefined;

  /**
   * The list of profile IDs to query for.
   *
   * @public
   */
  ProfileIds: string[] | undefined;
}

/**
 * Object that holds failures for membership.
 *
 * @public
 */
export interface ProfileQueryFailures {
  /**
   * The profile id the failure belongs to.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * A message describing the failure.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * The status describing the failure.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * Object that holds the results for membership.
 *
 * @public
 */
export interface ProfileQueryResult {
  /**
   * The profile id the result belongs to.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * Describes whether the profile was absent or present in the segment.
   *
   * @public
   */
  QueryResult: QueryResult | undefined;

  /**
   * The standard profile of a customer.
   *
   * @public
   */
  Profile?: Profile | undefined;
}

/**
 * @public
 */
export interface GetSegmentMembershipResponse {
  /**
   * The unique name of the segment definition.
   *
   * @public
   */
  SegmentDefinitionName?: string | undefined;

  /**
   * An array of maps where each contains a response per profile requested.
   *
   * @public
   */
  Profiles?: ProfileQueryResult[] | undefined;

  /**
   * An array of maps where each contains a response per profile failed for the request.
   *
   * @public
   */
  Failures?: ProfileQueryFailures[] | undefined;

  /**
   * The timestamp indicating when the segment membership was last computed or updated.
   *
   * @public
   */
  LastComputedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetSegmentSnapshotRequest {
  /**
   * The unique identifier of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique name of the segment definition.
   *
   * @public
   */
  SegmentDefinitionName: string | undefined;

  /**
   * The unique identifier of the segment snapshot.
   *
   * @public
   */
  SnapshotId: string | undefined;
}

/**
 * @public
 */
export interface GetSegmentSnapshotResponse {
  /**
   * The unique identifier of the segment snapshot.
   *
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * The status of the asynchronous job for exporting the segment snapshot.
   *
   * @public
   */
  Status: SegmentSnapshotStatus | undefined;

  /**
   * The status message of the asynchronous job for exporting the segment snapshot.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The format in which the segment will be exported.
   *
   * @public
   */
  DataFormat: DataFormat | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the exported segment.
   *
   * @public
   */
  EncryptionKey?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that allows Customer Profiles service principal to assume the role for conducting KMS and S3 operations.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The destination to which the segment will be exported. This field must be provided if the request is not submitted from the Connect Customer Admin Website.
   *
   * @public
   */
  DestinationUri?: string | undefined;
}

/**
 * @public
 */
export interface GetSegmentSubscriptionRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique name of the segment definition.
   *
   * @public
   */
  SegmentDefinitionName: string | undefined;
}

/**
 * Configuration for scheduled segment membership event notifications.
 *
 * @public
 */
export interface ScheduleConfiguration {
  /**
   * The interval between scheduled executions.
   *
   * @public
   */
  Interval: number | undefined;

  /**
   * The unit for the interval. The following are valid values:
   *
   * - **HOURLY**: The interval is measured in hours.
   *
   * @public
   */
  Unit?: ScheduleConfigurationUnit | undefined;
}

/**
 * Information about scheduled execution timestamps.
 *
 * @public
 */
export interface ScheduledExecutions {
  /**
   * The timestamp of the next scheduled execution.
   *
   * @public
   */
  NextExecutedAt?: Date | undefined;

  /**
   * The timestamp of the last successful scheduled execution.
   *
   * @public
   */
  LastExecutedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetSegmentSubscriptionResponse {
  /**
   * The current lifecycle status of the subscription. The following are valid values:
   *
   * - **STARTING**: Initial snapshot is in progress.
   * - **RUNNING**: Notifications are active and running.
   * - **STOPPED**: Notifications have been stopped.
   * - **FAILED**: Notifications failed (for example, the Amazon Kinesis data stream became inaccessible).
   *
   * @public
   */
  Status?: SegmentSubscriptionStatus | undefined;

  /**
   * A status message providing additional context, such as a failure reason.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The schedule configuration for periodic membership event notifications.
   *
   * @public
   */
  ScheduleConfiguration?: ScheduleConfiguration | undefined;

  /**
   * Information about scheduled execution timestamps.
   *
   * @public
   */
  ScheduledExecutions?: ScheduledExecutions | undefined;

  /**
   * The timestamp of when the subscription was first started.
   *
   * @public
   */
  StartedAt?: Date | undefined;

  /**
   * The timestamp of the most recent configuration change.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetSimilarProfilesRequest {
  /**
   * The pagination token from the previous `GetSimilarProfiles` API call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects returned per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Specify the type of matching to get similar profiles for.
   *
   * @public
   */
  MatchType: MatchType | undefined;

  /**
   * The string indicating the search key to be used.
   *
   * @public
   */
  SearchKey: string | undefined;

  /**
   * The string based on `SearchKey` to be searched for similar profiles.
   *
   * @public
   */
  SearchValue: string | undefined;
}

/**
 * @public
 */
export interface GetSimilarProfilesResponse {
  /**
   * Set of `profileId`s that belong to the same matching group.
   *
   * @public
   */
  ProfileIds?: string[] | undefined;

  /**
   * The string `matchId` that the similar profiles belong to.
   *
   * @public
   */
  MatchId?: string | undefined;

  /**
   * Specify the type of matching to get similar profiles for.
   *
   * @public
   */
  MatchType?: MatchType | undefined;

  /**
   * The integer rule level that the profiles matched on.
   *
   * @public
   */
  RuleLevel?: number | undefined;

  /**
   * It only has value when the `MatchType` is `ML_BASED_MATCHING`.A number between 0 and 1, where a higher score means higher similarity. Examining match confidence scores lets you distinguish between groups of similar records in which the system is highly confident (which you may decide to merge), groups of similar records about which the system is uncertain (which you may decide to have reviewed by a human), and groups of similar records that the system deems to be unlikely (which you may decide to reject). Given confidence scores vary as per the data input, it should not be used as an absolute measure of matching quality.
   *
   * @public
   */
  ConfidenceScore?: number | undefined;

  /**
   * The pagination token from the previous `GetSimilarProfiles` API call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetStreamForSegmentsRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface GetStreamForSegmentsResponse {
  /**
   * The timestamp of when the stream was associated.
   *
   * @public
   */
  AssociatedAt?: Date | undefined;

  /**
   * A list of segments currently associated with the stream and their subscription status.
   *
   * @public
   */
  AssociatedSegments?: AssociatedSegment[] | undefined;

  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Kinesis data stream receiving segment membership events.
   *
   * @public
   */
  DestinationArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role used for Amazon Kinesis and AWS Key Management Service (KMS) operations.
   *
   * @public
   */
  DestinationRoleArn?: string | undefined;

  /**
   * The operational state of the destination stream. The following are valid values:
   *
   * - **RUNNING**: The stream is associated and healthy. Segment membership events are being published.
   * - **UNHEALTHY**: The stream is associated but events cannot currently be published. See `FailureReason` for details.
   * - **STOPPED**: The stream is no longer publishing segment membership events.
   *
   * @public
   */
  State?: EventSubscriptionState | undefined;

  /**
   * The timestamp of when the stream was disassociated.
   *
   * @public
   */
  DisassociatedAt?: Date | undefined;

  /**
   * The reason why the stream is in an unhealthy state, if applicable.
   *
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface GetUploadJobRequest {
  /**
   * The unique name of the domain containing the upload job.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique identifier of the upload job to retrieve.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * The summary of results for an upload job, including the number of updated, created, and failed records.
 *
 * @public
 */
export interface ResultsSummary {
  /**
   * The number of records that were updated during the upload job.
   *
   * @public
   */
  UpdatedRecords?: number | undefined;

  /**
   * The number of records that were newly created during the upload job.
   *
   * @public
   */
  CreatedRecords?: number | undefined;

  /**
   * The number of records that failed to be processed during the upload job.
   *
   * @public
   */
  FailedRecords?: number | undefined;
}

/**
 * @public
 */
export interface GetUploadJobResponse {
  /**
   * The unique identifier of the upload job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The unique name of the upload job. Could be a file name to identify the upload job.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The status describing the status for the upload job. The following are Valid Values:
   *
   * - **CREATED**: The upload job has been created, but has not started processing yet.
   * - **IN_PROGRESS**: The upload job is currently in progress, ingesting and processing the profile data.
   * - **PARTIALLY_SUCCEEDED**: The upload job has successfully completed the ingestion and processing of all profile data.
   * - **SUCCEEDED**: The upload job has successfully completed the ingestion and processing of all profile data.
   * - **FAILED**: The upload job has failed to complete.
   * - **STOPPED**: The upload job has been manually stopped or terminated before completion.
   *
   * @public
   */
  Status?: UploadJobStatus | undefined;

  /**
   * The reason for the current status of the upload job. Possible reasons:
   *
   * - **VALIDATION_FAILURE**: The upload job has encountered an error or issue and was unable to complete the profile data ingestion.
   * - **INTERNAL_FAILURE**: Failure caused from service side
   *
   * @public
   */
  StatusReason?: StatusReason | undefined;

  /**
   * The timestamp when the upload job was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp when the upload job was completed.
   *
   * @public
   */
  CompletedAt?: Date | undefined;

  /**
   * The mapping between CSV Columns and Profile Object attributes for the upload job.
   *
   * @public
   */
  Fields?: Record<string, ObjectTypeField> | undefined;

  /**
   * The unique key columns used for de-duping the keys in the upload job.
   *
   * @public
   */
  UniqueKey?: string | undefined;

  /**
   * The summary of results for the upload job, including the number of updated, created, and failed records.
   *
   * @public
   */
  ResultsSummary?: ResultsSummary | undefined;

  /**
   * The expiry duration for the profiles ingested with the upload job.
   *
   * @public
   */
  DataExpiry?: number | undefined;
}

/**
 * @public
 */
export interface GetUploadJobPathRequest {
  /**
   * The unique name of the domain containing the upload job.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique identifier of the upload job to retrieve the upload path for. This is generated from the CreateUploadJob API.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface GetUploadJobPathResponse {
  /**
   * The pre-signed S3 URL for uploading the CSV file associated with the upload job.
   *
   * @public
   */
  Url: string | undefined;

  /**
   * The plaintext data key used to encrypt the upload file.
   *
   * To persist to the pre-signed url, use the client token and MD5 client token as header. The required headers are as follows:
   *
   * - x-amz-server-side-encryption-customer-key: Client Token
   * - x-amz-server-side-encryption-customer-key-MD5: MD5 Client Token
   * - x-amz-server-side-encryption-customer-algorithm: AES256
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The expiry timestamp for the pre-signed URL, after which the URL will no longer be valid.
   *
   * @public
   */
  ValidUntil?: Date | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Unique identifier for the workflow.
   *
   * @public
   */
  WorkflowId: string | undefined;
}

/**
 * Structure to hold workflow attributes.
 *
 * @public
 */
export interface WorkflowAttributes {
  /**
   * Workflow attributes specific to `APPFLOW_INTEGRATION` workflow.
   *
   * @public
   */
  AppflowIntegration?: AppflowIntegrationWorkflowAttributes | undefined;
}

/**
 * Generic object containing workflow execution metrics.
 *
 * @public
 */
export interface WorkflowMetrics {
  /**
   * Workflow execution metrics for `APPFLOW_INTEGRATION` workflow.
   *
   * @public
   */
  AppflowIntegration?: AppflowIntegrationWorkflowMetrics | undefined;
}

/**
 * @public
 */
export interface GetWorkflowResponse {
  /**
   * Unique identifier for the workflow.
   *
   * @public
   */
  WorkflowId?: string | undefined;

  /**
   * The type of workflow. The only supported value is APPFLOW_INTEGRATION.
   *
   * @public
   */
  WorkflowType?: WorkflowType | undefined;

  /**
   * Status of workflow execution.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * Workflow error messages during execution (if any).
   *
   * @public
   */
  ErrorDescription?: string | undefined;

  /**
   * The timestamp that represents when workflow execution started.
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * The timestamp that represents when workflow execution last updated.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * Attributes provided for workflow execution.
   *
   * @public
   */
  Attributes?: WorkflowAttributes | undefined;

  /**
   * Workflow specific execution metrics.
   *
   * @public
   */
  Metrics?: WorkflowMetrics | undefined;
}

/**
 * @public
 */
export interface GetWorkflowStepsRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Unique identifier for the workflow.
   *
   * @public
   */
  WorkflowId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * List containing steps in workflow.
 *
 * @public
 */
export interface WorkflowStepItem {
  /**
   * Workflow step information specific to `APPFLOW_INTEGRATION` workflow.
   *
   * @public
   */
  AppflowIntegration?: AppflowIntegrationWorkflowStep | undefined;
}

/**
 * @public
 */
export interface GetWorkflowStepsResponse {
  /**
   * Unique identifier for the workflow.
   *
   * @public
   */
  WorkflowId?: string | undefined;

  /**
   * The type of workflow. The only supported value is APPFLOW_INTEGRATION.
   *
   * @public
   */
  WorkflowType?: WorkflowType | undefined;

  /**
   * List containing workflow step details.
   *
   * @public
   */
  Items?: WorkflowStepItem[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccountIntegrationsRequest {
  /**
   * The URI of the S3 bucket or any other type of data source.
   *
   * @public
   */
  Uri: string | undefined;

  /**
   * The pagination token from the previous ListAccountIntegrations API call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects returned per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Boolean to indicate if hidden integration should be returned. Defaults to `False`.
   *
   * @public
   */
  IncludeHidden?: boolean | undefined;
}

/**
 * An integration in list of integrations.
 *
 * @public
 */
export interface ListIntegrationItem {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The URI of the S3 bucket or any other type of data source.
   *
   * @public
   */
  Uri: string | undefined;

  /**
   * The name of the profile object type.
   *
   * @public
   */
  ObjectTypeName?: string | undefined;

  /**
   * The timestamp of when the domain was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp of when the integration was most recently edited.
   *
   * @public
   */
  LastUpdatedAt: Date | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A map in which each key is an event type from an external application such as Segment or Shopify, and each value is an `ObjectTypeName` (template) used to ingest the event. It supports the following event types: `SegmentIdentify`, `ShopifyCreateCustomers`, `ShopifyUpdateCustomers`, `ShopifyCreateDraftOrders`, `ShopifyUpdateDraftOrders`, `ShopifyCreateOrders`, and `ShopifyUpdatedOrders`.
   *
   * @public
   */
  ObjectTypeNames?: Record<string, string> | undefined;

  /**
   * Unique identifier for the workflow.
   *
   * @public
   */
  WorkflowId?: string | undefined;

  /**
   * Boolean that shows if the Flow that's associated with the Integration is created in Amazon Appflow, or with ObjectTypeName equals _unstructured via API/CLI in flowDefinition.
   *
   * @public
   */
  IsUnstructured?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role. The Integration uses this role to make Customer Profiles requests on your behalf.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * A list of unique names for active event triggers associated with the integration.
   *
   * @public
   */
  EventTriggerNames?: string[] | undefined;

  /**
   * The scope or boundary of the integration item's applicability.
   *
   * @public
   */
  Scope?: Scope | undefined;
}

/**
 * @public
 */
export interface ListAccountIntegrationsResponse {
  /**
   * The list of ListAccountIntegration instances.
   *
   * @public
   */
  Items?: ListIntegrationItem[] | undefined;

  /**
   * The pagination token from the previous ListAccountIntegrations API call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCalculatedAttributeDefinitionsRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The pagination token from the previous call to ListCalculatedAttributeDefinitions.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of calculated attribute definitions returned per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCalculatedAttributeDefinitionsResponse {
  /**
   * The list of calculated attribute definitions.
   *
   * @public
   */
  Items?: ListCalculatedAttributeDefinitionItem[] | undefined;

  /**
   * The pagination token from the previous call to ListCalculatedAttributeDefinitions.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCalculatedAttributesForProfileRequest {
  /**
   * The pagination token from the previous call to ListCalculatedAttributesForProfile.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of calculated attributes returned per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique identifier of a customer profile.
   *
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @public
 */
export interface ListCalculatedAttributesForProfileResponse {
  /**
   * The list of calculated attributes.
   *
   * @public
   */
  Items?: ListCalculatedAttributeForProfileItem[] | undefined;

  /**
   * The pagination token from the previous call to ListCalculatedAttributesForProfile.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDomainLayoutsRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects returned per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The layout object that contains LayoutDefinitionName, Description, DisplayName, IsDefault, LayoutType, Tags, CreatedAt, LastUpdatedAt
 *
 * @public
 */
export interface LayoutItem {
  /**
   * The unique name of the layout.
   *
   * @public
   */
  LayoutDefinitionName: string | undefined;

  /**
   * The description of the layout
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The display name of the layout
   *
   * @public
   */
  DisplayName: string | undefined;

  /**
   * If set to true for a layout, this layout will be used by default to view data. If set to false, then layout will not be used by default but it can be used to view data by explicit selection on UI.
   *
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * The type of layout that can be used to view data under customer profiles domain.
   *
   * @public
   */
  LayoutType: LayoutType | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The timestamp of when the layout was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp of when the layout was most recently updated.
   *
   * @public
   */
  LastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListDomainLayoutsResponse {
  /**
   * Contains summary information about an EventStream.
   *
   * @public
   */
  Items?: LayoutItem[] | undefined;

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
export interface ListDomainObjectTypesRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The maximum number of domain object types returned per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token from the previous call to ListDomainObjectTypes.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents an item in the list of domain object types, containing basic information about a specific object type within a domain.
 *
 * @public
 */
export interface DomainObjectTypesListItem {
  /**
   * The name that identifies the object type within the domain.
   *
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * A description explaining the purpose and characteristics of this object type.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The timestamp of when the domain object type was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp of when the domain object type was most recently edited.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListDomainObjectTypesResponse {
  /**
   * The list of domain object types.
   *
   * @public
   */
  Items?: DomainObjectTypesListItem[] | undefined;

  /**
   * The pagination token from the previous call to ListDomainObjectTypes.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDomainsRequest {
  /**
   * The pagination token from the previous ListDomain API call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects returned per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * An object in a list that represents a domain.
 *
 * @public
 */
export interface ListDomainItem {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The timestamp of when the domain was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp of when the domain was most recently edited.
   *
   * @public
   */
  LastUpdatedAt: Date | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListDomainsResponse {
  /**
   * The list of ListDomains instances.
   *
   * @public
   */
  Items?: ListDomainItem[] | undefined;

  /**
   * The pagination token from the previous ListDomains API call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEventStreamsRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects returned per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Summary information about the Kinesis data stream
 *
 * @public
 */
export interface DestinationSummary {
  /**
   * The StreamARN of the destination to deliver profile events to. For example, arn:aws:kinesis:region:account-id:stream/stream-name.
   *
   * @public
   */
  Uri: string | undefined;

  /**
   * The status of enabling the Kinesis stream as a destination for export.
   *
   * @public
   */
  Status: EventStreamDestinationStatus | undefined;

  /**
   * The timestamp when the status last changed to `UNHEALHY`.
   *
   * @public
   */
  UnhealthySince?: Date | undefined;
}

/**
 * An instance of EventStream in a list of EventStreams.
 *
 * @public
 */
export interface EventStreamSummary {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the event stream.
   *
   * @public
   */
  EventStreamName: string | undefined;

  /**
   * A unique identifier for the event stream.
   *
   * @public
   */
  EventStreamArn: string | undefined;

  /**
   * The operational state of destination stream for export.
   *
   * @public
   */
  State: EventStreamState | undefined;

  /**
   * The timestamp when the `State` changed to `STOPPED`.
   *
   * @public
   */
  StoppedSince?: Date | undefined;

  /**
   * Summary information about the Kinesis data stream.
   *
   * @public
   */
  DestinationSummary?: DestinationSummary | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListEventStreamsResponse {
  /**
   * Contains summary information about an EventStream.
   *
   * @public
   */
  Items?: EventStreamSummary[] | undefined;

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
export interface ListEventTriggersRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The pagination token to use with ListEventTriggers.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The summary of the event trigger.
 *
 * @public
 */
export interface EventTriggerSummaryItem {
  /**
   * The unique name of the object type.
   *
   * @public
   */
  ObjectTypeName?: string | undefined;

  /**
   * The unique name of the event trigger.
   *
   * @public
   */
  EventTriggerName?: string | undefined;

  /**
   * The description of the event trigger.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The timestamp of when the event trigger was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp of when the event trigger was most recently updated.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * An array of key-value pairs to apply to this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListEventTriggersResponse {
  /**
   * The list of Event Triggers.
   *
   * @public
   */
  Items?: EventTriggerSummaryItem[] | undefined;

  /**
   * The pagination token from the previous call to ListEventTriggers.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIdentityResolutionJobsRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Information about the Identity Resolution Job.
 *
 * @public
 */
export interface IdentityResolutionJob {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * The unique identifier of the Identity Resolution Job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The status of the Identity Resolution Job.
   *
   * - `PENDING`: The Identity Resolution Job is scheduled but has not started yet. If you turn off the Identity Resolution feature in your domain, jobs in the `PENDING` state are deleted.
   * - `PREPROCESSING`: The Identity Resolution Job is loading your data.
   * - `FIND_MATCHING`: The Identity Resolution Job is using the machine learning model to identify profiles that belong to the same matching group.
   * - `MERGING`: The Identity Resolution Job is merging duplicate profiles.
   * - `COMPLETED`: The Identity Resolution Job completed successfully.
   * - `PARTIAL_SUCCESS`: There's a system error and not all of the data is merged. The Identity Resolution Job writes a message indicating the source of the problem.
   * - `FAILED`: The Identity Resolution Job did not merge any data. It writes a message indicating the source of the problem.
   *
   * @public
   */
  Status?: IdentityResolutionJobStatus | undefined;

  /**
   * The timestamp of when the job was started or will be started.
   *
   * @public
   */
  JobStartTime?: Date | undefined;

  /**
   * The timestamp of when the job was completed.
   *
   * @public
   */
  JobEndTime?: Date | undefined;

  /**
   * Statistics about an Identity Resolution Job.
   *
   * @public
   */
  JobStats?: JobStats | undefined;

  /**
   * The S3 location where the Identity Resolution Job writes result files.
   *
   * @public
   */
  ExportingLocation?: ExportingLocation | undefined;

  /**
   * The error messages that are generated when the Identity Resolution Job runs.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface ListIdentityResolutionJobsResponse {
  /**
   * A list of Identity Resolution Jobs.
   *
   * @public
   */
  IdentityResolutionJobsList?: IdentityResolutionJob[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIntegrationsRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The pagination token from the previous ListIntegrations API call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects returned per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Boolean to indicate if hidden integration should be returned. Defaults to `False`.
   *
   * @public
   */
  IncludeHidden?: boolean | undefined;
}

/**
 * @public
 */
export interface ListIntegrationsResponse {
  /**
   * The list of ListIntegrations instances.
   *
   * @public
   */
  Items?: ListIntegrationItem[] | undefined;

  /**
   * The pagination token from the previous ListIntegrations API call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListObjectTypeAttributesRequest {
  /**
   * The pagination token from the previous call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects returned per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The unique identifier of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the profile object type.
   *
   * @public
   */
  ObjectTypeName: string | undefined;
}

/**
 * Item that contains the attribute and when it was last updated.
 *
 * @public
 */
export interface ListObjectTypeAttributeItem {
  /**
   * Name of the attribute.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * When the attribute was last updated.
   *
   * @public
   */
  LastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListObjectTypeAttributesResponse {
  /**
   * The items returned as part of the response.
   *
   * @public
   */
  Items?: ListObjectTypeAttributeItem[] | undefined;

  /**
   * The pagination token from the previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListObjectTypeAttributeValuesRequest {
  /**
   * The pagination token from the previous call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects returned per page. Valid Range: Minimum value of 1. Maximum value of 100. If not provided default as 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique name of the domain object type.
   *
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * The attribute name.
   *
   * @public
   */
  AttributeName: string | undefined;
}

/**
 * Represents an item in the list of object type attribute values with its associated metadata.
 *
 * @public
 */
export interface ListObjectTypeAttributeValuesItem {
  /**
   * The actual value of the object type attribute.
   *
   * @public
   */
  Value: string | undefined;

  /**
   * The timestamp of when the object type attribute value was most recently updated.
   *
   * @public
   */
  LastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListObjectTypeAttributeValuesResponse {
  /**
   * A list of unique attribute values sorted on the basis of LastUpdatedAt.
   *
   * @public
   */
  Items?: ListObjectTypeAttributeValuesItem[] | undefined;

  /**
   * The pagination token from the previous call to call ListObjectTypeAttributeValues.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ProfileAttributeValuesRequest {
  /**
   * The unique identifier of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The attribute name.
   *
   * @public
   */
  AttributeName: string | undefined;
}

/**
 * @public
 */
export interface ProfileAttributeValuesResponse {
  /**
   * The name of the domain.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * The attribute name.
   *
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * The items returned as part of the response.
   *
   * @public
   */
  Items?: AttributeValueItem[] | undefined;

  /**
   * The status code for the response.
   *
   * @public
   */
  StatusCode?: number | undefined;
}

/**
 * @public
 */
export interface ListProfileHistoryRecordsRequest {
  /**
   * The unique name of the domain for which to return profile history records.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The identifier of the profile to be taken.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * Applies a filter to include profile history records only with the specified `ObjectTypeName` value in the response.
   *
   * @public
   */
  ObjectTypeName?: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Applies a filter to include profile history records only with the specified `ActionType` value in the response.
   *
   * @public
   */
  ActionType?: ActionType | undefined;

  /**
   * Applies a filter to include profile history records only with the specified `PerformedBy` value in the response. The `PerformedBy` value can be the Amazon Resource Name (ARN) of the person or service principal who performed the action.
   *
   * @public
   */
  PerformedBy?: string | undefined;
}

/**
 * Contains profile history record metadata.
 *
 * @public
 */
export interface ProfileHistoryRecord {
  /**
   * The unique identifier of the profile history record.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The name of the profile object type.
   *
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * The timestamp of when the profile history record was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp of when the profile history record was last updated.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The action type of the profile history record.
   *
   * @public
   */
  ActionType: ActionType | undefined;

  /**
   * The unique identifier of the profile object generated by the service.
   *
   * @public
   */
  ProfileObjectUniqueKey?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the person or service principal who performed the action.
   *
   * @public
   */
  PerformedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListProfileHistoryRecordsResponse {
  /**
   * The list of profile history records.
   *
   * @public
   */
  ProfileHistoryRecords?: ProfileHistoryRecord[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The filter applied to `ListProfileObjects` response to include profile objects with the specified index values.
 *
 * @public
 */
export interface ObjectFilter {
  /**
   * A searchable identifier of a profile object. The predefined keys you can use to search for `_asset` include: `_assetId`, `_assetName`, and `_serialNumber`. The predefined keys you can use to search for `_case` include: `_caseId`. The predefined keys you can use to search for `_order` include: `_orderId`.
   *
   * @public
   */
  KeyName: string | undefined;

  /**
   * A list of key values.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface ListProfileObjectsRequest {
  /**
   * The pagination token from the previous call to ListProfileObjects.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects returned per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the profile object type.
   *
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * The unique identifier of a customer profile.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * Applies a filter to the response to include profile objects with the specified index values.
   *
   * @public
   */
  ObjectFilter?: ObjectFilter | undefined;
}

/**
 * A ProfileObject in a list of ProfileObjects.
 *
 * @public
 */
export interface ListProfileObjectsItem {
  /**
   * Specifies the kind of object being added to a profile, such as "Salesforce-Account."
   *
   * @public
   */
  ObjectTypeName?: string | undefined;

  /**
   * The unique identifier of the ProfileObject generated by the service.
   *
   * @public
   */
  ProfileObjectUniqueKey?: string | undefined;

  /**
   * A JSON representation of a ProfileObject that belongs to a profile.
   *
   * @public
   */
  Object?: string | undefined;
}

/**
 * @public
 */
export interface ListProfileObjectsResponse {
  /**
   * The list of ListProfileObject instances.
   *
   * @public
   */
  Items?: ListProfileObjectsItem[] | undefined;

  /**
   * The pagination token from the previous call to ListProfileObjects.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProfileObjectTypesRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects returned per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A ProfileObjectType instance.
 *
 * @public
 */
export interface ListProfileObjectTypeItem {
  /**
   * The name of the profile object type.
   *
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * Description of the profile object type.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The timestamp of when the domain was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp of when the profile object type was most recently edited.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The amount of profile object max count assigned to the object type.
   *
   * @public
   */
  MaxProfileObjectCount?: number | undefined;

  /**
   * The amount of provisioned profile object max count available.
   *
   * @public
   */
  MaxAvailableProfileObjectCount?: number | undefined;

  /**
   * An integer that determines the priority of this object type when data from multiple sources is ingested. Lower values take priority. Object types without a specified source priority default to the lowest priority.
   *
   * @public
   */
  SourcePriority?: number | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListProfileObjectTypesResponse {
  /**
   * The list of ListProfileObjectTypes instances.
   *
   * @public
   */
  Items?: ListProfileObjectTypeItem[] | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}
