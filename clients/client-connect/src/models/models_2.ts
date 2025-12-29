// smithy-typescript generated code
import {
  ArtifactStatus,
  AutoEvaluationStatus,
  BooleanComparisonType,
  Channel,
  ChatEventType,
  ContactFlowState,
  ContactFlowStatus,
  ContactFlowType,
  ContactInitiationMethod,
  ContactInteractionType,
  ContactMediaProcessingFailureMode,
  ContactParticipantRole,
  ContactRecordingType,
  DataTableAttributeValueType,
  DateComparisonType,
  DateTimeComparisonType,
  DecimalComparisonType,
  DirectoryType,
  EmailHeaderType,
  EntityType,
  EvaluationFormLanguageCode,
  EvaluationFormVersionStatus,
  EvaluationStatus,
  EvaluationType,
  EventSourceName,
  FileStatusType,
  FileUseCaseType,
  HierarchyGroupMatchType,
  InboundMessageSourceType,
  InstanceStatus,
  InstanceStorageResourceType,
  IntegrationType,
  IvrRecordingTrack,
  ListFlowAssociationResourceType,
  MediaType,
  MonitorCapability,
  NumberComparisonType,
  OutboundMessageSourceType,
  ParticipantRole,
  PhoneNumberCountryCode,
  PhoneNumberType,
  QueueType,
  QuickConnectType,
  RealTimeContactAnalysisOutputType,
  RealTimeContactAnalysisPostContactSummaryFailureCode,
  RealTimeContactAnalysisPostContactSummaryStatus,
  RealTimeContactAnalysisSegmentType,
  RealTimeContactAnalysisSentimentLabel,
  RealTimeContactAnalysisStatus,
  RealTimeContactAnalysisSupportedChannel,
  ReferenceStatus,
  ReferenceType,
  RehydrationType,
  ResponseMode,
  RulePublishStatus,
  SearchContactsMatchType,
  SearchContactsTimeRangeConditionType,
  SearchContactsTimeRangeType,
  SortableFieldName,
  SortOrder,
  SourceType,
  StringComparisonType,
  TargetListType,
  TaskTemplateStatus,
  TrafficDistributionGroupStatus,
  TrafficType,
  UseCaseType,
  ViewStatus,
  ViewType,
  Visibility,
  VocabularyLanguageCode,
  VocabularyState,
  VoiceRecordingTrack,
} from "./enums";
import {
  type AgentHierarchyGroups,
  type ControlPlaneAttributeFilter,
  type CreatedByInfo,
  type DataTableLockVersion,
  type StringCondition,
  type UserPhoneConfig,
  ActionSummary,
  AgentStatus,
  AliasConfiguration,
  Application,
  FlowAssociationSummary,
  FlowModule,
  InstanceStorageConfig,
  LexBot,
  PrimaryValueResponse,
  SecurityProfileItem,
  TagCondition,
  UserProficiency,
  View,
} from "./models_0";
import {
  Attribute,
  ContactFlow,
  ContactFlowModule,
  DataTable,
  DataTableAttribute,
  HierarchyGroup,
  HierarchyGroupSummary,
  HoursOfOperation,
  HoursOfOperationOverride,
  PredefinedAttribute,
  Prompt,
  Queue,
  QuickConnect,
  RoutingProfile,
} from "./models_1";

/**
 * @public
 */
export interface ListContactFlowsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of flow.</p>
   * @public
   */
  ContactFlowTypes?: ContactFlowType[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains summary information about a flow.</p>
 *          <p>You can also create and update flows using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html">Amazon Connect
 *    Flow language</a>.</p>
 * @public
 */
export interface ContactFlowSummary {
  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the flow.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of flow.</p>
   * @public
   */
  ContactFlowType?: ContactFlowType | undefined;

  /**
   * <p>The type of flow.</p>
   * @public
   */
  ContactFlowState?: ContactFlowState | undefined;

  /**
   * <p>The status of the flow.</p>
   * @public
   */
  ContactFlowStatus?: ContactFlowStatus | undefined;
}

/**
 * @public
 */
export interface ListContactFlowsResponse {
  /**
   * <p>Information about the flows.</p>
   * @public
   */
  ContactFlowSummaryList?: ContactFlowSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContactFlowVersionsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  ContactFlowId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A summary of a flow version's metadata.</p>
 * @public
 */
export interface ContactFlowVersionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the view version.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The description of the flow version.</p>
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * <p>The identifier of the flow version.</p>
   * @public
   */
  Version?: number | undefined;
}

/**
 * @public
 */
export interface ListContactFlowVersionsResponse {
  /**
   * <p>A list of flow version summaries.</p>
   * @public
   */
  ContactFlowVersionSummaryList?: ContactFlowVersionSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContactReferencesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the initial contact.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The type of reference.</p>
   * @public
   */
  ReferenceTypes: ReferenceType[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   *          <important>
   *             <p>This is not expected to be set, because the value returned in the previous response is always null.</p>
   *          </important>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information about a reference when the <code>referenceType</code> is <code>ATTACHMENT</code>. Otherwise,
 *    null.</p>
 * @public
 */
export interface AttachmentReference {
  /**
   * <p>Identifier of the attachment reference.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The location path of the attachment reference.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>Status of the attachment reference type.</p>
   * @public
   */
  Status?: ReferenceStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the attachment reference.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Information about a reference when the <code>referenceType</code> is <code>DATE</code>. Otherwise, null.</p>
 * @public
 */
export interface DateReference {
  /**
   * <p>Identifier of the date reference.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A valid date.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Information about a reference when the <code>referenceType</code> is <code>EMAIL</code>. Otherwise, null.</p>
 * @public
 */
export interface EmailReference {
  /**
   * <p>Identifier of the email reference.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A valid email address.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Information about the reference when the referenceType is <code>EMAIL_MESSAGE</code>. Otherwise, null.</p>
 * @public
 */
export interface EmailMessageReference {
  /**
   * <p>The name of the email message reference</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the email message reference</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Information about a reference when the <code>referenceType</code> is <code>NUMBER</code>. Otherwise,
 *    null.</p>
 * @public
 */
export interface NumberReference {
  /**
   * <p>Identifier of the number reference.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A valid number.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Information about a reference when the <code>referenceType</code> is <code>STRING</code>. Otherwise,
 *    null.</p>
 * @public
 */
export interface StringReference {
  /**
   * <p>Identifier of the string reference.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A valid string.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>The URL reference.</p>
 * @public
 */
export interface UrlReference {
  /**
   * <p>Identifier of the URL reference.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A valid URL.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Contains summary information about a reference. <code>ReferenceSummary</code> contains only one non null field
 *    between the URL and attachment based on the reference type.</p>
 * @public
 */
export type ReferenceSummary =
  | ReferenceSummary.AttachmentMember
  | ReferenceSummary.DateMember
  | ReferenceSummary.EmailMember
  | ReferenceSummary.EmailMessageMember
  | ReferenceSummary.EmailMessagePlainTextMember
  | ReferenceSummary.NumberMember
  | ReferenceSummary.StringMember
  | ReferenceSummary.UrlMember
  | ReferenceSummary.$UnknownMember;

/**
 * @public
 */
export namespace ReferenceSummary {
  /**
   * <p>Information about the reference when the <code>referenceType</code> is <code>URL</code>. Otherwise, null.</p>
   * @public
   */
  export interface UrlMember {
    Url: UrlReference;
    Attachment?: never;
    EmailMessage?: never;
    EmailMessagePlainText?: never;
    String?: never;
    Number?: never;
    Date?: never;
    Email?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about the reference when the <code>referenceType</code> is <code>ATTACHMENT</code>. Otherwise,
   *    null.</p>
   * @public
   */
  export interface AttachmentMember {
    Url?: never;
    Attachment: AttachmentReference;
    EmailMessage?: never;
    EmailMessagePlainText?: never;
    String?: never;
    Number?: never;
    Date?: never;
    Email?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about the reference when the referenceType is <code>EMAIL_MESSAGE</code>. Otherwise, null.</p>
   * @public
   */
  export interface EmailMessageMember {
    Url?: never;
    Attachment?: never;
    EmailMessage: EmailMessageReference;
    EmailMessagePlainText?: never;
    String?: never;
    Number?: never;
    Date?: never;
    Email?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about the reference when the referenceType is <code>EMAIL_MESSAGE</code>. Otherwise, null.</p>
   * @public
   */
  export interface EmailMessagePlainTextMember {
    Url?: never;
    Attachment?: never;
    EmailMessage?: never;
    EmailMessagePlainText: EmailMessageReference;
    String?: never;
    Number?: never;
    Date?: never;
    Email?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about a reference when the <code>referenceType</code> is <code>STRING</code>. Otherwise,
   *    null.</p>
   * @public
   */
  export interface StringMember {
    Url?: never;
    Attachment?: never;
    EmailMessage?: never;
    EmailMessagePlainText?: never;
    String: StringReference;
    Number?: never;
    Date?: never;
    Email?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about a reference when the <code>referenceType</code> is <code>NUMBER</code>. Otherwise,
   *    null.</p>
   * @public
   */
  export interface NumberMember {
    Url?: never;
    Attachment?: never;
    EmailMessage?: never;
    EmailMessagePlainText?: never;
    String?: never;
    Number: NumberReference;
    Date?: never;
    Email?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about a reference when the <code>referenceType</code> is <code>DATE</code>. Otherwise, null.</p>
   * @public
   */
  export interface DateMember {
    Url?: never;
    Attachment?: never;
    EmailMessage?: never;
    EmailMessagePlainText?: never;
    String?: never;
    Number?: never;
    Date: DateReference;
    Email?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about a reference when the <code>referenceType</code> is <code>EMAIL</code>. Otherwise, null.</p>
   * @public
   */
  export interface EmailMember {
    Url?: never;
    Attachment?: never;
    EmailMessage?: never;
    EmailMessagePlainText?: never;
    String?: never;
    Number?: never;
    Date?: never;
    Email: EmailReference;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Url?: never;
    Attachment?: never;
    EmailMessage?: never;
    EmailMessagePlainText?: never;
    String?: never;
    Number?: never;
    Date?: never;
    Email?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Url: (value: UrlReference) => T;
    Attachment: (value: AttachmentReference) => T;
    EmailMessage: (value: EmailMessageReference) => T;
    EmailMessagePlainText: (value: EmailMessageReference) => T;
    String: (value: StringReference) => T;
    Number: (value: NumberReference) => T;
    Date: (value: DateReference) => T;
    Email: (value: EmailReference) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListContactReferencesResponse {
  /**
   * <p>Information about the flows.</p>
   * @public
   */
  ReferenceSummaryList?: ReferenceSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <important>
   *             <p>This is always returned as null in the response.</p>
   *          </important>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataTableAttributesRequest {
  /**
   * <p>The unique identifier for the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The unique identifier for the data table whose attributes should be listed.</p>
   * @public
   */
  DataTableId: string | undefined;

  /**
   * <p>Optional list of specific attribute IDs to retrieve. Used for CloudFormation to effectively describe attributes
   *    by ID. If NextToken is provided, this parameter is ignored.</p>
   * @public
   */
  AttributeIds?: string[] | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of data table attributes to return in one page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDataTableAttributesResponse {
  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of data table attributes with their complete configuration and metadata.</p>
   * @public
   */
  Attributes: DataTableAttribute[] | undefined;
}

/**
 * <p>A primary attribute value filter.</p>
 * @public
 */
export interface PrimaryAttributeValueFilter {
  /**
   * <p>The filter's attribute name.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The filter's values.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface ListDataTablePrimaryValuesRequest {
  /**
   * <p>The unique identifier for the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The unique identifier for the data table whose primary values should be listed.</p>
   * @public
   */
  DataTableId: string | undefined;

  /**
   * <p>Optional list of specific record IDs to retrieve. Used for CloudFormation to effectively describe records by ID.
   *    If NextToken is provided, this parameter is ignored.</p>
   * @public
   */
  RecordIds?: string[] | undefined;

  /**
   * <p>Optional filter to retrieve primary values matching specific criteria.</p>
   * @public
   */
  PrimaryAttributeValues?: PrimaryAttributeValueFilter[] | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of data table primary values to return in one page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A record primary value.</p>
 * @public
 */
export interface RecordPrimaryValue {
  /**
   * <p>The value's record ID.</p>
   * @public
   */
  RecordId?: string | undefined;

  /**
   * <p>The value's primary values.</p>
   * @public
   */
  PrimaryValues?: PrimaryValueResponse[] | undefined;

  /**
   * <p>The value's last modified time.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The value's last modified region.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListDataTablePrimaryValuesResponse {
  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of primary value combinations with their record IDs and modification metadata.</p>
   * @public
   */
  PrimaryValuesList: RecordPrimaryValue[] | undefined;
}

/**
 * @public
 */
export interface ListDataTablesRequest {
  /**
   * <p>The unique identifier for the Amazon Connect instance whose data tables should be listed.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of data tables to return in one page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A data table summary.</p>
 * @public
 */
export interface DataTableSummary {
  /**
   * <p>The summary's name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The summary's ID.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The summary's ARN.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The summary's last modified time.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The summary's last modified region.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListDataTablesResponse {
  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of data table summaries containing basic information about each table including ID, ARN, name, and
   *    modification details.</p>
   * @public
   */
  DataTableSummaryList: DataTableSummary[] | undefined;
}

/**
 * @public
 */
export interface ListDataTableValuesRequest {
  /**
   * <p>The unique identifier for the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The unique identifier for the data table whose values should be listed.</p>
   * @public
   */
  DataTableId: string | undefined;

  /**
   * <p>Optional list of specific record IDs to retrieve values for.</p>
   * @public
   */
  RecordIds?: string[] | undefined;

  /**
   * <p>Optional filter to retrieve values for records matching specific primary attribute criteria.</p>
   * @public
   */
  PrimaryAttributeValues?: PrimaryAttributeValueFilter[] | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of data table values to return in one page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A data table value summary.</p>
 * @public
 */
export interface DataTableValueSummary {
  /**
   * <p>The summary's record ID.</p>
   * @public
   */
  RecordId?: string | undefined;

  /**
   * <p>The summary's attribute ID.</p>
   * @public
   */
  AttributeId?: string | undefined;

  /**
   * <p>The summary's primary values.</p>
   * @public
   */
  PrimaryValues: PrimaryValueResponse[] | undefined;

  /**
   * <p>The summary's attribute name.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The summary's value type.</p>
   * @public
   */
  ValueType: DataTableAttributeValueType | undefined;

  /**
   * <p>The summary's value.</p>
   * @public
   */
  Value: string | undefined;

  /**
   * <p>The summary's lock version.</p>
   * @public
   */
  LockVersion?: DataTableLockVersion | undefined;

  /**
   * <p>The summary's last modified time.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The summary's last modified region.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListDataTableValuesResponse {
  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of data table values with their associated metadata, lock versions, and modification details.</p>
   * @public
   */
  Values: DataTableValueSummary[] | undefined;
}

/**
 * @public
 */
export interface ListDefaultVocabulariesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   * @public
   */
  LanguageCode?: VocabularyLanguageCode | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains information about a default vocabulary.</p>
 * @public
 */
export interface DefaultVocabulary {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   * @public
   */
  LanguageCode: VocabularyLanguageCode | undefined;

  /**
   * <p>The identifier of the custom vocabulary.</p>
   * @public
   */
  VocabularyId: string | undefined;

  /**
   * <p>A unique name of the custom vocabulary.</p>
   * @public
   */
  VocabularyName: string | undefined;
}

/**
 * @public
 */
export interface ListDefaultVocabulariesResponse {
  /**
   * <p>A list of default vocabularies.</p>
   * @public
   */
  DefaultVocabularyList: DefaultVocabulary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEntitySecurityProfilesRequest {
  /**
   * <p> The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN)
   *    of the instance. </p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p> Only supported type is AI_AGENT. </p>
   * @public
   */
  EntityType: EntityType | undefined;

  /**
   * <p> ARN of a Q in Connect AI Agent. </p>
   * @public
   */
  EntityArn: string | undefined;

  /**
   * <p> The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The maximum number of results to return per page. The default MaxResult size is 100. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEntitySecurityProfilesResponse {
  /**
   * <p> List of Security Profile Object. </p>
   * @public
   */
  SecurityProfiles?: SecurityProfileItem[] | undefined;

  /**
   * <p> The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEvaluationFormsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Summary information about an evaluation form.</p>
 * @public
 */
export interface EvaluationFormSummary {
  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the evaluation form resource.</p>
   * @public
   */
  EvaluationFormArn: string | undefined;

  /**
   * <p>A title of the evaluation form.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The timestamp for when the evaluation form was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who created the evaluation form.</p>
   * @public
   */
  CreatedBy: string | undefined;

  /**
   * <p>The timestamp for when the evaluation form was last updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the evaluation form.</p>
   * @public
   */
  LastModifiedBy: string | undefined;

  /**
   * <p>The timestamp for when the evaluation form was last activated.</p>
   * @public
   */
  LastActivatedTime?: Date | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the user who last activated the evaluation form.</p>
   * @public
   */
  LastActivatedBy?: string | undefined;

  /**
   * <p>The version number of the latest evaluation form version.</p>
   * @public
   */
  LatestVersion: number | undefined;

  /**
   * <p>The version of the active evaluation form version.</p>
   * @public
   */
  ActiveVersion?: number | undefined;
}

/**
 * @public
 */
export interface ListEvaluationFormsResponse {
  /**
   * <p>Provides details about a list of evaluation forms belonging to an instance.</p>
   * @public
   */
  EvaluationFormSummaryList: EvaluationFormSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEvaluationFormVersionsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Summary information about an evaluation form.</p>
 * @public
 */
export interface EvaluationFormVersionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) for the evaluation form resource.</p>
   * @public
   */
  EvaluationFormArn: string | undefined;

  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>A version of the evaluation form.</p>
   * @public
   */
  EvaluationFormVersion: number | undefined;

  /**
   * <p>The flag indicating whether the evaluation form is locked for changes.</p>
   * @public
   */
  Locked: boolean | undefined;

  /**
   * <p>The status of the evaluation form.</p>
   * @public
   */
  Status: EvaluationFormVersionStatus | undefined;

  /**
   * <p>The timestamp for when the evaluation form was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who created the evaluation form.</p>
   * @public
   */
  CreatedBy: string | undefined;

  /**
   * <p>The timestamp for when the evaluation form was last updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the evaluation form.</p>
   * @public
   */
  LastModifiedBy: string | undefined;
}

/**
 * @public
 */
export interface ListEvaluationFormVersionsResponse {
  /**
   * <p>Provides details about a list of evaluation forms belonging to an instance.</p>
   * @public
   */
  EvaluationFormVersionSummaryList: EvaluationFormVersionSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFlowAssociationsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A valid resource type.</p>
   * @public
   */
  ResourceType?: ListFlowAssociationResourceType | undefined;

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
 * @public
 */
export interface ListFlowAssociationsResponse {
  /**
   * <p>Summary of flow associations.</p>
   * @public
   */
  FlowAssociationSummaryList?: FlowAssociationSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHoursOfOperationOverridesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the hours of operation.</p>
   * @public
   */
  HoursOfOperationId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results.</p>
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
 * @public
 */
export interface ListHoursOfOperationOverridesResponse {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the hours of operation override.</p>
   * @public
   */
  HoursOfOperationOverrideList?: HoursOfOperationOverride[] | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListHoursOfOperationsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains summary information about hours of operation for a contact center.</p>
 * @public
 */
export interface HoursOfOperationSummary {
  /**
   * <p>The identifier of the hours of operation.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the hours of operation.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the hours of operation.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListHoursOfOperationsResponse {
  /**
   * <p>Information about the hours of operation.</p>
   * @public
   */
  HoursOfOperationSummaryList?: HoursOfOperationSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInstanceAttributesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

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
 * @public
 */
export interface ListInstanceAttributesResponse {
  /**
   * <p>The attribute types.</p>
   * @public
   */
  Attributes?: Attribute[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInstancesRequest {
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
 * <p>Information about the instance.</p>
 * @public
 */
export interface InstanceSummary {
  /**
   * <p>The identifier of the instance.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The identity management type of the instance.</p>
   * @public
   */
  IdentityManagementType?: DirectoryType | undefined;

  /**
   * <p>The alias of the instance.</p>
   * @public
   */
  InstanceAlias?: string | undefined;

  /**
   * <p>When the instance was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The service role of the instance.</p>
   * @public
   */
  ServiceRole?: string | undefined;

  /**
   * <p>The state of the instance.</p>
   * @public
   */
  InstanceStatus?: InstanceStatus | undefined;

  /**
   * <p>Whether inbound calls are enabled.</p>
   * @public
   */
  InboundCallsEnabled?: boolean | undefined;

  /**
   * <p>Whether outbound calls are enabled.</p>
   * @public
   */
  OutboundCallsEnabled?: boolean | undefined;

  /**
   * <p>This URL allows contact center users to access the Amazon Connect admin website.</p>
   * @public
   */
  InstanceAccessUrl?: string | undefined;
}

/**
 * @public
 */
export interface ListInstancesResponse {
  /**
   * <p>Information about the instances.</p>
   * @public
   */
  InstanceSummaryList?: InstanceSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInstanceStorageConfigsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A valid resource type.</p>
   * @public
   */
  ResourceType: InstanceStorageResourceType | undefined;

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
 * @public
 */
export interface ListInstanceStorageConfigsResponse {
  /**
   * <p>A valid storage type.</p>
   * @public
   */
  StorageConfigs?: InstanceStorageConfig[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIntegrationAssociationsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The integration type.</p>
   * @public
   */
  IntegrationType?: IntegrationType | undefined;

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
   * <p>The Amazon Resource Name (ARN) of the integration.</p>
   * @public
   */
  IntegrationArn?: string | undefined;
}

/**
 * <p>Contains summary information about the associated AppIntegrations.</p>
 * @public
 */
export interface IntegrationAssociationSummary {
  /**
   * <p>The identifier for the AppIntegration association.</p>
   * @public
   */
  IntegrationAssociationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the AppIntegration association.</p>
   * @public
   */
  IntegrationAssociationArn?: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The integration type.</p>
   * @public
   */
  IntegrationType?: IntegrationType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the AppIntegration.</p>
   * @public
   */
  IntegrationArn?: string | undefined;

  /**
   * <p>The URL for the external application.</p>
   * @public
   */
  SourceApplicationUrl?: string | undefined;

  /**
   * <p>The user-provided, friendly name for the external application.</p>
   * @public
   */
  SourceApplicationName?: string | undefined;

  /**
   * <p>The name of the source.</p>
   * @public
   */
  SourceType?: SourceType | undefined;
}

/**
 * @public
 */
export interface ListIntegrationAssociationsResponse {
  /**
   * <p>The associations.</p>
   * @public
   */
  IntegrationAssociationSummaryList?: IntegrationAssociationSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLambdaFunctionsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

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
 * @public
 */
export interface ListLambdaFunctionsResponse {
  /**
   * <p>The Lambdafunction ARNs associated with the specified instance.</p>
   * @public
   */
  LambdaFunctions?: string[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLexBotsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. If no value is specified, the default is 10. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListLexBotsResponse {
  /**
   * <p>The names and Amazon Web Services Regions of the Amazon Lex bots associated with the specified
   *    instance.</p>
   * @public
   */
  LexBots?: LexBot[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPhoneNumbersRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of phone number.</p>
   *          <note>
   *             <p>We recommend using <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPhoneNumbersV2.html">ListPhoneNumbersV2</a> to return phone number types. While ListPhoneNumbers returns number types
   *      <code>UIFN</code>, <code>SHARED</code>, <code>THIRD_PARTY_TF</code>, and <code>THIRD_PARTY_DID</code>, it
   *     incorrectly lists them as <code>TOLL_FREE</code> or <code>DID</code>. </p>
   *          </note>
   * @public
   */
  PhoneNumberTypes?: PhoneNumberType[] | undefined;

  /**
   * <p>The ISO country code.</p>
   * @public
   */
  PhoneNumberCountryCodes?: PhoneNumberCountryCode[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains summary information about a phone number for a contact center.</p>
 * @public
 */
export interface PhoneNumberSummary {
  /**
   * <p>The identifier of the phone number.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The phone number.</p>
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * <p>The type of phone number.</p>
   * @public
   */
  PhoneNumberType?: PhoneNumberType | undefined;

  /**
   * <p>The ISO country code.</p>
   * @public
   */
  PhoneNumberCountryCode?: PhoneNumberCountryCode | undefined;
}

/**
 * @public
 */
export interface ListPhoneNumbersResponse {
  /**
   * <p>Information about the phone numbers.</p>
   * @public
   */
  PhoneNumberSummaryList?: PhoneNumberSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPhoneNumbersV2Request {
  /**
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone number inbound traffic is routed through. If both <code>TargetArn</code> and <code>InstanceId</code> input are not provided, this API lists
   *    numbers claimed to all the Amazon Connect instances belonging to your account in the same Amazon Web Services Region as the request.</p>
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance that phone numbers are claimed to. You
   *    can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the
   *     instance ID</a> in the Amazon Resource Name (ARN) of the instance. If both <code>TargetArn</code> and <code>InstanceId</code> are not provided, this API lists
   *    numbers claimed to all the Amazon Connect instances belonging to your account in the same Amazon Web Services Region as the request.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ISO country code.</p>
   * @public
   */
  PhoneNumberCountryCodes?: PhoneNumberCountryCode[] | undefined;

  /**
   * <p>The type of phone number.</p>
   * @public
   */
  PhoneNumberTypes?: PhoneNumberType[] | undefined;

  /**
   * <p>The prefix of the phone number. If provided, it must contain <code>+</code> as part of the country code.</p>
   * @public
   */
  PhoneNumberPrefix?: string | undefined;
}

/**
 * <p>Information about phone numbers that have been claimed to your Amazon Connect instance or traffic distribution group.</p>
 * @public
 */
export interface ListPhoneNumbersSummary {
  /**
   * <p>A unique identifier for the phone number.</p>
   * @public
   */
  PhoneNumberId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   * @public
   */
  PhoneNumberArn?: string | undefined;

  /**
   * <p>The phone number. Phone numbers are formatted <code>[+] [country code] [subscriber number including area code]</code>.</p>
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * <p>The ISO country code.</p>
   * @public
   */
  PhoneNumberCountryCode?: PhoneNumberCountryCode | undefined;

  /**
   * <p>The type of phone number.</p>
   * @public
   */
  PhoneNumberType?: PhoneNumberType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone number inbound traffic is routed through.</p>
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance that phone numbers are claimed to. You
   *    can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the
   *     instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The description of the phone number.</p>
   * @public
   */
  PhoneNumberDescription?: string | undefined;

  /**
   * <p>The claimed phone number ARN that was previously imported from the external service, such as Amazon Web Services
   *    End User Messaging. If it is from Amazon Web Services End User Messaging, it looks like the ARN of the phone number
   *    that was imported from Amazon Web Services End User Messaging.</p>
   * @public
   */
  SourcePhoneNumberArn?: string | undefined;
}

/**
 * @public
 */
export interface ListPhoneNumbersV2Response {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about phone numbers that have been claimed to your Amazon Connect instances or traffic distribution groups.</p>
   * @public
   */
  ListPhoneNumbersSummaryList?: ListPhoneNumbersSummary[] | undefined;
}

/**
 * @public
 */
export interface ListPredefinedAttributesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the
   *    instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results.</p>
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
 * <p>Summary of a predefined attribute.</p>
 * @public
 */
export interface PredefinedAttributeSummary {
  /**
   * <p>The name of the predefined attribute.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Last modified time.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Last modified region.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListPredefinedAttributesResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Summary of the predefined attributes.</p>
   * @public
   */
  PredefinedAttributeSummaryList?: PredefinedAttributeSummary[] | undefined;
}

/**
 * @public
 */
export interface ListPromptsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains information about the prompt.</p>
 * @public
 */
export interface PromptSummary {
  /**
   * <p>The identifier of the prompt.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the prompt.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the prompt.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListPromptsResponse {
  /**
   * <p>Information about the prompts.</p>
   * @public
   */
  PromptSummaryList?: PromptSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListQueueQuickConnectsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains summary information about a quick connect.</p>
 * @public
 */
export interface QuickConnectSummary {
  /**
   * <p>The identifier for the quick connect.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the quick connect.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the quick connect.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of quick connect. In the Amazon Connect admin website, when you create a quick connect, you are
   *    prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).</p>
   * @public
   */
  QuickConnectType?: QuickConnectType | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListQueueQuickConnectsResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the quick connects.</p>
   * @public
   */
  QuickConnectSummaryList?: QuickConnectSummary[] | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListQueuesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of queue.</p>
   * @public
   */
  QueueTypes?: QueueType[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains summary information about a queue.</p>
 * @public
 */
export interface QueueSummary {
  /**
   * <p>The identifier of the queue.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the queue.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the queue.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of queue.</p>
   * @public
   */
  QueueType?: QueueType | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListQueuesResponse {
  /**
   * <p>Information about the queues.</p>
   * @public
   */
  QueueSummaryList?: QueueSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListQuickConnectsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance. Both Instance ID and Instance ARN are supported input formats. </p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The type of quick connect. In the Amazon Connect admin website, when you create a quick connect, you are
   *    prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).</p>
   * @public
   */
  QuickConnectTypes?: QuickConnectType[] | undefined;
}

/**
 * @public
 */
export interface ListQuickConnectsResponse {
  /**
   * <p>Information about the quick connects.</p>
   * @public
   */
  QuickConnectSummaryList?: QuickConnectSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRealtimeContactAnalysisSegmentsV2Request {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Contact Lens output type to be returned.</p>
   * @public
   */
  OutputType: RealTimeContactAnalysisOutputType | undefined;

  /**
   * <p>Enum with segment types . Each value corresponds to a segment type returned in the segments list of the API.
   *    Each segment type has its own structure. Different channels may have different sets of supported segment
   *    types.</p>
   * @public
   */
  SegmentTypes: RealTimeContactAnalysisSegmentType[] | undefined;
}

/**
 * <p>Object that describes attached file. </p>
 * @public
 */
export interface RealTimeContactAnalysisAttachment {
  /**
   * <p>A case-sensitive name of the attachment being uploaded. Can be redacted.</p>
   * @public
   */
  AttachmentName: string | undefined;

  /**
   * <p>Describes the MIME file type of the attachment. For a list of supported file types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/feature-limits.html">Feature specifications</a> in the
   *      <i>Amazon Connect Administrator Guide</i>.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>A unique identifier for the attachment.</p>
   * @public
   */
  AttachmentId: string | undefined;

  /**
   * <p>Status of the attachment.</p>
   * @public
   */
  Status?: ArtifactStatus | undefined;
}

/**
 * <p>Object describing time with which the segment is associated. It can have different representations of time.
 *    Currently supported: absoluteTime</p>
 * @public
 */
export type RealTimeContactAnalysisTimeData =
  | RealTimeContactAnalysisTimeData.AbsoluteTimeMember
  | RealTimeContactAnalysisTimeData.$UnknownMember;

/**
 * @public
 */
export namespace RealTimeContactAnalysisTimeData {
  /**
   * <p>Time represented in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.</p>
   * @public
   */
  export interface AbsoluteTimeMember {
    AbsoluteTime: Date;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AbsoluteTime?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    AbsoluteTime: (value: Date) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Segment containing list of attachments.</p>
 * @public
 */
export interface RealTimeContactAnalysisSegmentAttachments {
  /**
   * <p>The identifier of the segment.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The identifier of the participant.</p>
   * @public
   */
  ParticipantId: string | undefined;

  /**
   * <p>The role of the participant. For example, is it a customer, agent, or system.</p>
   * @public
   */
  ParticipantRole: ParticipantRole | undefined;

  /**
   * <p>The display name of the participant. Can be redacted. </p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>List of objects describing an individual attachment.</p>
   * @public
   */
  Attachments: RealTimeContactAnalysisAttachment[] | undefined;

  /**
   * <p>Field describing the time of the event. It can have different representations of time.</p>
   * @public
   */
  Time: RealTimeContactAnalysisTimeData | undefined;
}

/**
 * <p>Begin and end offsets for a part of text.</p>
 * @public
 */
export interface RealTimeContactAnalysisCharacterInterval {
  /**
   * <p>The beginning of the character interval.</p>
   * @public
   */
  BeginOffsetChar: number | undefined;

  /**
   * <p>The end of the character interval.</p>
   * @public
   */
  EndOffsetChar: number | undefined;
}

/**
 * <p>Transcript representation containing Id and list of character intervals that are associated with analysis data.
 *    For example, this object within a <code>RealTimeContactAnalysisPointOfInterest</code> in
 *     <code>Category.MatchedDetails</code> would have character interval describing part of the text that matched
 *    category.</p>
 * @public
 */
export interface RealTimeContactAnalysisTranscriptItemWithCharacterOffsets {
  /**
   * <p>Transcript identifier. Matches the identifier from one of the TranscriptSegments.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>List of character intervals within transcript content/text.</p>
   * @public
   */
  CharacterOffsets?: RealTimeContactAnalysisCharacterInterval | undefined;
}

/**
 * <p>The section of the contact transcript segment that category rule was detected.</p>
 * @public
 */
export interface RealTimeContactAnalysisPointOfInterest {
  /**
   * <p>List of the transcript items (segments) that are associated with a given point of interest. </p>
   * @public
   */
  TranscriptItems?: RealTimeContactAnalysisTranscriptItemWithCharacterOffsets[] | undefined;
}

/**
 * <p>Provides information about the category rule that was matched.</p>
 * @public
 */
export interface RealTimeContactAnalysisCategoryDetails {
  /**
   * <p>List of PointOfInterest - objects describing a single match of a rule.</p>
   * @public
   */
  PointsOfInterest: RealTimeContactAnalysisPointOfInterest[] | undefined;
}

/**
 * <p>The matched category rules.</p>
 * @public
 */
export interface RealTimeContactAnalysisSegmentCategories {
  /**
   * <p>Map between the name of the matched rule and RealTimeContactAnalysisCategoryDetails.</p>
   * @public
   */
  MatchedDetails: Record<string, RealTimeContactAnalysisCategoryDetails> | undefined;
}

/**
 * <p>Segment type describing a contact event.</p>
 * @public
 */
export interface RealTimeContactAnalysisSegmentEvent {
  /**
   * <p>The identifier of the contact event.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The identifier of the participant.</p>
   * @public
   */
  ParticipantId?: string | undefined;

  /**
   * <p>The role of the participant. For example, is it a customer, agent, or system.</p>
   * @public
   */
  ParticipantRole?: ParticipantRole | undefined;

  /**
   * <p>The display name of the participant. Can be redacted.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>Type of the event. For example, <code>application/vnd.amazonaws.connect.event.participant.left</code>.</p>
   * @public
   */
  EventType: string | undefined;

  /**
   * <p>Field describing the time of the event. It can have different representations of time.</p>
   * @public
   */
  Time: RealTimeContactAnalysisTimeData | undefined;
}

/**
 * <p>Transcript representation containing Id, Content and list of character intervals that are associated with
 *    analysis data. For example, this object within an issue detected would describe both content that contains identified
 *    issue and intervals where that content is taken from.</p>
 * @public
 */
export interface RealTimeContactAnalysisTranscriptItemWithContent {
  /**
   * <p>Part of the transcript content that contains identified issue. Can be redacted</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>Transcript identifier. Matches the identifier from one of the TranscriptSegments.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>Begin and end offsets for a part of text.</p>
   * @public
   */
  CharacterOffsets?: RealTimeContactAnalysisCharacterInterval | undefined;
}

/**
 * <p>Potential issues that are detected based on an artificial intelligence analysis of each turn in the
 *    conversation.</p>
 * @public
 */
export interface RealTimeContactAnalysisIssueDetected {
  /**
   * <p>List of the transcript items (segments) that are associated with a given issue.</p>
   * @public
   */
  TranscriptItems: RealTimeContactAnalysisTranscriptItemWithContent[] | undefined;
}

/**
 * <p>Segment type containing a list of detected issues.</p>
 * @public
 */
export interface RealTimeContactAnalysisSegmentIssues {
  /**
   * <p>List of the issues detected.</p>
   * @public
   */
  IssuesDetected: RealTimeContactAnalysisIssueDetected[] | undefined;
}

/**
 * <p>Information about the post-contact summary for a real-time contact segment.</p>
 * @public
 */
export interface RealTimeContactAnalysisSegmentPostContactSummary {
  /**
   * <p>The content of the summary.</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>Whether the summary was successfully COMPLETED or FAILED to be generated.</p>
   * @public
   */
  Status: RealTimeContactAnalysisPostContactSummaryStatus | undefined;

  /**
   * <p>If the summary failed to be generated, one of the following failure codes occurs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>QUOTA_EXCEEDED</code>: The number of concurrent analytics jobs reached your service quota.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSUFFICIENT_CONVERSATION_CONTENT</code>: The conversation needs to have at least one turn from both the
   *      participants in order to generate the summary.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED_SAFETY_GUIDELINES</code>: The generated summary cannot be provided because it failed to meet
   *      system safety guidelines.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID_ANALYSIS_CONFIGURATION</code>: This code occurs when, for example, you're using a <a href="https://docs.aws.amazon.com/connect/latest/adminguide/supported-languages.html#supported-languages-contact-lens">language</a> that isn't supported by generative AI-powered post-contact summaries. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INTERNAL_ERROR</code>: Internal system error.</p>
   *             </li>
   *          </ul>
   * @public
   */
  FailureCode?: RealTimeContactAnalysisPostContactSummaryFailureCode | undefined;
}

/**
 * <p>Object describing redaction applied to the segment.</p>
 * @public
 */
export interface RealTimeContactAnalysisTranscriptItemRedaction {
  /**
   * <p>List of character intervals each describing a part of the text that was redacted. For
   *     <code>OutputType.Raw</code>, part of the original text that contains data that can be redacted. For <code>
   *     OutputType.Redacted</code>, part of the string with redaction tag.</p>
   * @public
   */
  CharacterOffsets?: RealTimeContactAnalysisCharacterInterval[] | undefined;
}

/**
 * <p>The analyzed transcript segment.</p>
 * @public
 */
export interface RealTimeContactAnalysisSegmentTranscript {
  /**
   * <p>The identifier of the transcript.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The identifier of the participant.</p>
   * @public
   */
  ParticipantId: string | undefined;

  /**
   * <p>The role of the participant. For example, is it a customer, agent, or system.</p>
   * @public
   */
  ParticipantRole: ParticipantRole | undefined;

  /**
   * <p>The display name of the participant.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The content of the transcript. Can be redacted.</p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>The type of content of the item. For example, <code>text/plain</code>.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>Field describing the time of the event. It can have different representations of time.</p>
   * @public
   */
  Time: RealTimeContactAnalysisTimeData | undefined;

  /**
   * <p>Object describing redaction that was applied to the transcript. If transcript has the field it means part of the
   *    transcript was redacted.</p>
   * @public
   */
  Redaction?: RealTimeContactAnalysisTranscriptItemRedaction | undefined;

  /**
   * <p>The sentiment detected for this piece of transcript.</p>
   * @public
   */
  Sentiment?: RealTimeContactAnalysisSentimentLabel | undefined;
}

/**
 * <p>An analyzed segment for a real-time analysis session.</p>
 * @public
 */
export type RealtimeContactAnalysisSegment =
  | RealtimeContactAnalysisSegment.AttachmentsMember
  | RealtimeContactAnalysisSegment.CategoriesMember
  | RealtimeContactAnalysisSegment.EventMember
  | RealtimeContactAnalysisSegment.IssuesMember
  | RealtimeContactAnalysisSegment.PostContactSummaryMember
  | RealtimeContactAnalysisSegment.TranscriptMember
  | RealtimeContactAnalysisSegment.$UnknownMember;

/**
 * @public
 */
export namespace RealtimeContactAnalysisSegment {
  /**
   * <p>The analyzed transcript segment.</p>
   * @public
   */
  export interface TranscriptMember {
    Transcript: RealTimeContactAnalysisSegmentTranscript;
    Categories?: never;
    Issues?: never;
    Event?: never;
    Attachments?: never;
    PostContactSummary?: never;
    $unknown?: never;
  }

  /**
   * <p>The matched category rules.</p>
   * @public
   */
  export interface CategoriesMember {
    Transcript?: never;
    Categories: RealTimeContactAnalysisSegmentCategories;
    Issues?: never;
    Event?: never;
    Attachments?: never;
    PostContactSummary?: never;
    $unknown?: never;
  }

  /**
   * <p>Segment type containing a list of detected issues.</p>
   * @public
   */
  export interface IssuesMember {
    Transcript?: never;
    Categories?: never;
    Issues: RealTimeContactAnalysisSegmentIssues;
    Event?: never;
    Attachments?: never;
    PostContactSummary?: never;
    $unknown?: never;
  }

  /**
   * <p>Segment type describing a contact event.</p>
   * @public
   */
  export interface EventMember {
    Transcript?: never;
    Categories?: never;
    Issues?: never;
    Event: RealTimeContactAnalysisSegmentEvent;
    Attachments?: never;
    PostContactSummary?: never;
    $unknown?: never;
  }

  /**
   * <p>The analyzed attachments.</p>
   * @public
   */
  export interface AttachmentsMember {
    Transcript?: never;
    Categories?: never;
    Issues?: never;
    Event?: never;
    Attachments: RealTimeContactAnalysisSegmentAttachments;
    PostContactSummary?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about the post-contact summary.</p>
   * @public
   */
  export interface PostContactSummaryMember {
    Transcript?: never;
    Categories?: never;
    Issues?: never;
    Event?: never;
    Attachments?: never;
    PostContactSummary: RealTimeContactAnalysisSegmentPostContactSummary;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Transcript?: never;
    Categories?: never;
    Issues?: never;
    Event?: never;
    Attachments?: never;
    PostContactSummary?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Transcript: (value: RealTimeContactAnalysisSegmentTranscript) => T;
    Categories: (value: RealTimeContactAnalysisSegmentCategories) => T;
    Issues: (value: RealTimeContactAnalysisSegmentIssues) => T;
    Event: (value: RealTimeContactAnalysisSegmentEvent) => T;
    Attachments: (value: RealTimeContactAnalysisSegmentAttachments) => T;
    PostContactSummary: (value: RealTimeContactAnalysisSegmentPostContactSummary) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListRealtimeContactAnalysisSegmentsV2Response {
  /**
   * <p>The channel of the contact. </p>
   *          <important>
   *             <p>Only <code>CHAT</code> is supported. This API does not support <code>VOICE</code>. If you attempt to use it for
   *     the VOICE channel, an <code>InvalidRequestException</code> error occurs.</p>
   *          </important>
   * @public
   */
  Channel: RealTimeContactAnalysisSupportedChannel | undefined;

  /**
   * <p>Status of real-time contact analysis.</p>
   * @public
   */
  Status: RealTimeContactAnalysisStatus | undefined;

  /**
   * <p>An analyzed transcript or category.</p>
   * @public
   */
  Segments: RealtimeContactAnalysisSegment[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoutingProfileManualAssignmentQueuesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   * @public
   */
  RoutingProfileId: string | undefined;

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
 * <p>Contains summary information about a routing profile manual assignment queue.</p>
 * @public
 */
export interface RoutingProfileManualAssignmentQueueConfigSummary {
  /**
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the queue.</p>
   * @public
   */
  QueueArn: string | undefined;

  /**
   * <p>The name of the queue.</p>
   * @public
   */
  QueueName: string | undefined;

  /**
   * <p>The channels this queue supports. Valid Values: CHAT | TASK | EMAIL </p>
   *          <important>
   *             <p>VOICE is not supported. The information shown below is incorrect. We're working to correct it. </p>
   *          </important>
   * @public
   */
  Channel: Channel | undefined;
}

/**
 * @public
 */
export interface ListRoutingProfileManualAssignmentQueuesResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the manual assignment queues associated with the routing profile.</p>
   * @public
   */
  RoutingProfileManualAssignmentQueueConfigSummaryList?: RoutingProfileManualAssignmentQueueConfigSummary[] | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListRoutingProfileQueuesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   * @public
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains summary information about a routing profile queue.</p>
 * @public
 */
export interface RoutingProfileQueueConfigSummary {
  /**
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the queue.</p>
   * @public
   */
  QueueArn: string | undefined;

  /**
   * <p>The name of the queue.</p>
   * @public
   */
  QueueName: string | undefined;

  /**
   * <p>The order in which contacts are to be handled for the queue. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and
   *     delay</a>.</p>
   * @public
   */
  Priority: number | undefined;

  /**
   * <p>The delay, in seconds, that a contact should be in the queue before they are routed to an available agent. For
   *    more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and delay</a> in the
   *      <i>Amazon Connect Administrator Guide</i>.</p>
   * @public
   */
  Delay: number | undefined;

  /**
   * <p>The channels this queue supports.</p>
   * @public
   */
  Channel: Channel | undefined;
}

/**
 * @public
 */
export interface ListRoutingProfileQueuesResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the routing profiles.</p>
   * @public
   */
  RoutingProfileQueueConfigSummaryList?: RoutingProfileQueueConfigSummary[] | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListRoutingProfilesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains summary information about a routing profile.</p>
 * @public
 */
export interface RoutingProfileSummary {
  /**
   * <p>The identifier of the routing profile.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the routing profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the routing profile.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListRoutingProfilesResponse {
  /**
   * <p>Information about the routing profiles.</p>
   * @public
   */
  RoutingProfileSummaryList?: RoutingProfileSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRulesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The publish status of the rule.</p>
   * @public
   */
  PublishStatus?: RulePublishStatus | undefined;

  /**
   * <p>The name of the event source.</p>
   * @public
   */
  EventSourceName?: EventSourceName | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A list of <code>ActionTypes</code> associated with a rule. </p>
 * @public
 */
export interface RuleSummary {
  /**
   * <p>The name of the rule.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for the rule.</p>
   * @public
   */
  RuleId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   * @public
   */
  RuleArn: string | undefined;

  /**
   * <p>The name of the event source.</p>
   * @public
   */
  EventSourceName: EventSourceName | undefined;

  /**
   * <p>The publish status of the rule.</p>
   * @public
   */
  PublishStatus: RulePublishStatus | undefined;

  /**
   * <p>A list of ActionTypes associated with a rule. </p>
   * @public
   */
  ActionSummaries: ActionSummary[] | undefined;

  /**
   * <p>The timestamp for when the rule was created. </p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The timestamp for when the rule was last updated.</p>
   * @public
   */
  LastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListRulesResponse {
  /**
   * <p>Summary information about a rule.</p>
   * @public
   */
  RuleSummaryList: RuleSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityKeysRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

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
 * <p>Configuration information of the security key.</p>
 * @public
 */
export interface SecurityKey {
  /**
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The key of the security key.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>When the security key was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListSecurityKeysResponse {
  /**
   * <p>The security keys.</p>
   * @public
   */
  SecurityKeys?: SecurityKey[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfileApplicationsRequest {
  /**
   * <p>The identifier for the security profle.</p>
   * @public
   */
  SecurityProfileId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

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
 * @public
 */
export interface ListSecurityProfileApplicationsResponse {
  /**
   * <p>A list of the third-party application's metadata.</p>
   * @public
   */
  Applications?: Application[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfileFlowModulesRequest {
  /**
   * <p> The identifier for the security profile. </p>
   * @public
   */
  SecurityProfileId: string | undefined;

  /**
   * <p> The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p> The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The maximum number of results to return per page. The default MaxResult size is 100. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfileFlowModulesResponse {
  /**
   * <p> A list of Flow Modules an AI Agent can invoke as a tool. </p>
   * @public
   */
  AllowedFlowModules?: FlowModule[] | undefined;

  /**
   * <p> The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The time the flow module was last modified. </p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p> The Region that flow module was last modified in. </p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfilePermissionsRequest {
  /**
   * <p>The identifier for the security profle.</p>
   * @public
   */
  SecurityProfileId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

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
 * @public
 */
export interface ListSecurityProfilePermissionsResponse {
  /**
   * <p>The permissions granted to the security profile. For a complete list of valid permissions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html">List of security profile
   *     permissions</a>.</p>
   * @public
   */
  Permissions?: string[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfilesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains information about a security profile.</p>
 * @public
 */
export interface SecurityProfileSummary {
  /**
   * <p>The identifier of the security profile.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the security profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the security profile.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfilesResponse {
  /**
   * <p>Information about the security profiles.</p>
   * @public
   */
  SecurityProfileSummaryList?: SecurityProfileSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. All Amazon Connect resources (instances, queues, flows, routing profiles, etc) have
   *    an ARN. To locate the ARN for an instance, for example, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">Find your Amazon Connect instance ID/ARN</a>. </p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Information about the tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTaskTemplatesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   *          <important>
   *             <p>It is not expected that you set this because the value returned in the previous response is always null.</p>
   *          </important>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   *          <important>
   *             <p>It is not expected that you set this.</p>
   *          </important>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.</p>
   * @public
   */
  Status?: TaskTemplateStatus | undefined;

  /**
   * <p>The name of the task template.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Contains summary information about the task template.</p>
 * @public
 */
export interface TaskTemplateMetadata {
  /**
   * <p>A unique identifier for the task template.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the task template.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the task template.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the task template.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.</p>
   * @public
   */
  Status?: TaskTemplateStatus | undefined;

  /**
   * <p>The timestamp when the task template was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The timestamp when the task template was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListTaskTemplatesResponse {
  /**
   * <p>Provides details about a list of task templates belonging to an instance.</p>
   * @public
   */
  TaskTemplates?: TaskTemplateMetadata[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <important>
   *             <p>This is always returned as a null in the response.</p>
   *          </important>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTrafficDistributionGroupsRequest {
  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;
}

/**
 * <p>Information about traffic distribution groups.</p>
 * @public
 */
export interface TrafficDistributionGroupSummary {
  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the traffic distribution group.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the traffic distribution group.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the traffic distribution group.</p>
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * <p>The status of the traffic distribution group. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATION_IN_PROGRESS</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateTrafficDistributionGroup.html">CreateTrafficDistributionGroup</a>
   *      operation is still in progress and has not yet completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateTrafficDistributionGroup.html">CreateTrafficDistributionGroup</a>
   *      operation has succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATION_FAILED</code> indicates that the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateTrafficDistributionGroup.html">CreateTrafficDistributionGroup</a>
   *      operation has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_DELETION</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteTrafficDistributionGroup.html">DeleteTrafficDistributionGroup</a>
   *      operation is still in progress and has not yet completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETION_FAILED</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteTrafficDistributionGroup.html">DeleteTrafficDistributionGroup</a>
   *      operation has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateTrafficDistributionGroup.html">UpdateTrafficDistributionGroup</a>
   *      operation is still in progress and has not yet completed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: TrafficDistributionGroupStatus | undefined;

  /**
   * <p>Whether this is the default traffic distribution group created during instance
   *    replication. The default traffic distribution group cannot be deleted by the
   *    <code>DeleteTrafficDistributionGroup</code> API. The default traffic distribution group is deleted as
   *    part of the process for deleting a replica.</p>
   * @public
   */
  IsDefault?: boolean | undefined;
}

/**
 * @public
 */
export interface ListTrafficDistributionGroupsResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of traffic distribution groups.</p>
   * @public
   */
  TrafficDistributionGroupSummaryList?: TrafficDistributionGroupSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTrafficDistributionGroupUsersRequest {
  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   * @public
   */
  TrafficDistributionGroupId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Summary information about a traffic distribution group user.</p>
 * @public
 */
export interface TrafficDistributionGroupUserSummary {
  /**
   * <p>The identifier for the user. This can be the ID or the ARN of the user.</p>
   * @public
   */
  UserId?: string | undefined;
}

/**
 * @public
 */
export interface ListTrafficDistributionGroupUsersResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of traffic distribution group users.</p>
   * @public
   */
  TrafficDistributionGroupUserSummaryList?: TrafficDistributionGroupUserSummary[] | undefined;
}

/**
 * <p>Provides summary information about the use cases for the specified integration association.</p>
 * @public
 */
export interface ListUseCasesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the integration association.</p>
   * @public
   */
  IntegrationAssociationId: string | undefined;

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
 * <p>Contains the
 *    use
 *    case.</p>
 * @public
 */
export interface UseCase {
  /**
   * <p>The identifier for the use case.</p>
   * @public
   */
  UseCaseId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the use case.</p>
   * @public
   */
  UseCaseArn?: string | undefined;

  /**
   * <p>The type of use case to associate to the integration association. Each integration association can have only one
   *    of each use case type.</p>
   * @public
   */
  UseCaseType?: UseCaseType | undefined;
}

/**
 * @public
 */
export interface ListUseCasesResponse {
  /**
   * <p>The use cases.</p>
   * @public
   */
  UseCaseSummaryList?: UseCase[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUserHierarchyGroupsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListUserHierarchyGroupsResponse {
  /**
   * <p>Information about the hierarchy groups.</p>
   * @public
   */
  UserHierarchyGroupSummaryList?: HierarchyGroupSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUserProficienciesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the
   *    instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the user account.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results.</p>
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
 * @public
 */
export interface ListUserProficienciesResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the user proficiencies.</p>
   * @public
   */
  UserProficiencyList?: UserProficiency[] | undefined;

  /**
   * <p>The last time that the user's proficiencies are were modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The region in which a user's proficiencies were last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains summary information about a user.</p>
 * @public
 */
export interface UserSummary {
  /**
   * <p>The identifier of the user account.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user account.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Connect user name of the user account.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListUsersResponse {
  /**
   * <p>Information about the users.</p>
   * @public
   */
  UserSummaryList?: UserSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListViewsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the
   *    instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of the view.</p>
   * @public
   */
  Type?: ViewType | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A summary of a view's metadata.</p>
 * @public
 */
export interface ViewSummary {
  /**
   * <p>The identifier of the view.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the view.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the view.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of the view.</p>
   * @public
   */
  Type?: ViewType | undefined;

  /**
   * <p>Indicates the view status as either <code>SAVED</code> or <code>PUBLISHED</code>. The <code>PUBLISHED</code>
   *    status will initiate validation on the content.</p>
   * @public
   */
  Status?: ViewStatus | undefined;

  /**
   * <p>The description of the view.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface ListViewsResponse {
  /**
   * <p>A list of view summaries.</p>
   * @public
   */
  ViewsSummaryList?: ViewSummary[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListViewVersionsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the
   *    instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the view. Both <code>ViewArn</code> and <code>ViewId</code> can be used.</p>
   * @public
   */
  ViewId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A summary of a view version's metadata.</p>
 * @public
 */
export interface ViewVersionSummary {
  /**
   * <p>The identifier of the view version.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the view version.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The description of the view version.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the view version.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of the view version.</p>
   * @public
   */
  Type?: ViewType | undefined;

  /**
   * <p>The sequentially incremented version of the view version.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>The description of the view version.</p>
   * @public
   */
  VersionDescription?: string | undefined;
}

/**
 * @public
 */
export interface ListViewVersionsResponse {
  /**
   * <p>A list of view version summaries.</p>
   * @public
   */
  ViewVersionSummaryList?: ViewVersionSummary[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkspaceMediaRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in
   *    the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the workspace.</p>
   * @public
   */
  WorkspaceId: string | undefined;
}

/**
 * <p>Contains information about a media asset used in a workspace.</p>
 * @public
 */
export interface MediaItem {
  /**
   * <p>The type of media. Valid values are: <code>IMAGE_LOGO_FAVICON</code> and
   *    <code>IMAGE_LOGO_HORIZONTAL</code>.</p>
   * @public
   */
  Type?: MediaType | undefined;

  /**
   * <p>The source URL or data for the media asset.</p>
   * @public
   */
  Source?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkspaceMediaResponse {
  /**
   * <p>A list of media assets for the workspace.</p>
   * @public
   */
  Media?: MediaItem[] | undefined;
}

/**
 * @public
 */
export interface ListWorkspacePagesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in
   *    the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the workspace.</p>
   * @public
   */
  WorkspaceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results.</p>
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
 * <p>Contains information about a page configuration in a workspace, including the view assigned to the page.</p>
 * @public
 */
export interface WorkspacePage {
  /**
   * <p>The Amazon Resource Name (ARN) of the view associated with this page.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The page identifier. System pages include <code>HOME</code> and <code>AGENT_EXPERIENCE</code>.</p>
   * @public
   */
  Page?: string | undefined;

  /**
   * <p>The URL-friendly identifier for the page.</p>
   * @public
   */
  Slug?: string | undefined;

  /**
   * <p>A JSON string containing input parameters passed to the view when the page is rendered.</p>
   * @public
   */
  InputData?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkspacePagesResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of page configurations in the workspace.</p>
   * @public
   */
  WorkspacePageList: WorkspacePage[] | undefined;
}

/**
 * @public
 */
export interface ListWorkspacesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in
   *    the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results.</p>
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
 * <p>Contains summary information about a workspace.</p>
 * @public
 */
export interface WorkspaceSummary {
  /**
   * <p>The unique identifier of the workspace.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workspace.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The timestamp when the workspace was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where the workspace was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkspacesResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A summary list of workspaces.</p>
   * @public
   */
  WorkspaceSummaryList: WorkspaceSummary[] | undefined;
}

/**
 * @public
 */
export interface MonitorContactRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the
   *    instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the user account.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>Specify which monitoring actions the user is allowed to take. For example, whether the user is allowed to
   *    escalate from silent monitoring to barge. AllowedMonitorCapabilities is required if barge is enabled.</p>
   * @public
   */
  AllowedMonitorCapabilities?: MonitorCapability[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface MonitorContactResponse {
  /**
   * <p>The identifier of the contact.</p>
   * @public
   */
  ContactId?: string | undefined;

  /**
   * <p>The ARN of the contact.</p>
   * @public
   */
  ContactArn?: string | undefined;
}

/**
 * @public
 */
export interface PauseContactRequest {
  /**
   * <p>The identifier of the contact.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the <code>instanceId</code> in the ARN of the
   *    instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  ContactFlowId?: string | undefined;
}

/**
 * @public
 */
export interface PauseContactResponse {}

/**
 * @public
 */
export interface PutUserStatusRequest {
  /**
   * <p>The identifier of the user.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the agent status.</p>
   * @public
   */
  AgentStatusId: string | undefined;
}

/**
 * @public
 */
export interface PutUserStatusResponse {}

/**
 * @public
 */
export interface ReleasePhoneNumberRequest {
  /**
   * <p>A unique identifier for the phone number.</p>
   * @public
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface ReplicateInstanceRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance. You can provide the <code>InstanceId</code>, or the entire ARN.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The Amazon Web Services Region where to replicate the Amazon Connect instance.</p>
   * @public
   */
  ReplicaRegion: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The alias for the replicated instance. The <code>ReplicaAlias</code> must be unique.</p>
   * @public
   */
  ReplicaAlias: string | undefined;
}

/**
 * @public
 */
export interface ReplicateInstanceResponse {
  /**
   * <p>The identifier of the replicated instance. You can find the <code>instanceId</code> in the ARN of the instance.
   *    The replicated instance has the same identifier as the instance it was replicated from.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the replicated instance.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface ResumeContactRequest {
  /**
   * <p>The identifier of the contact.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the <code>instanceId</code> in the ARN of the
   *    instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  ContactFlowId?: string | undefined;
}

/**
 * @public
 */
export interface ResumeContactResponse {}

/**
 * @public
 */
export interface ResumeContactRecordingRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the contact. This is the identifier of the contact associated with the first interaction with
   *    the contact center.</p>
   * @public
   */
  InitialContactId: string | undefined;

  /**
   * <p>The type of recording being operated on.</p>
   * @public
   */
  ContactRecordingType?: ContactRecordingType | undefined;
}

/**
 * @public
 */
export interface ResumeContactRecordingResponse {}

/**
 * @public
 */
export interface SearchAgentStatusesResponse {
  /**
   * <p>The search criteria to be used to return agent statuses.</p>
   * @public
   */
  AgentStatuses?: AgentStatus[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of agent statuses which matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone number inbound traffic is routed through. You must enter <code>InstanceId</code> or <code>TargetArn</code>. </p>
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance that phone numbers are claimed to. You
   *    can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the
   *     instance ID</a> in the Amazon Resource Name (ARN) of the instance. You must enter <code>InstanceId</code> or <code>TargetArn</code>. </p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The ISO country code.</p>
   * @public
   */
  PhoneNumberCountryCode: PhoneNumberCountryCode | undefined;

  /**
   * <p>The type of phone number.</p>
   * @public
   */
  PhoneNumberType: PhoneNumberType | undefined;

  /**
   * <p>The prefix of the phone number. If provided, it must contain <code>+</code> as part of the country code.</p>
   * @public
   */
  PhoneNumberPrefix?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information about available phone numbers.</p>
 * @public
 */
export interface AvailableNumberSummary {
  /**
   * <p>The phone number. Phone numbers are formatted <code>[+] [country code] [subscriber number including area code]</code>.</p>
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * <p>The ISO country code.</p>
   * @public
   */
  PhoneNumberCountryCode?: PhoneNumberCountryCode | undefined;

  /**
   * <p>The type of phone number.</p>
   * @public
   */
  PhoneNumberType?: PhoneNumberType | undefined;
}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of available phone numbers that you can claim to your Amazon Connect instance or traffic distribution group.</p>
   * @public
   */
  AvailableNumbersList?: AvailableNumberSummary[] | undefined;
}

/**
 * <p>A boolean search condition for Search APIs.</p>
 * @public
 */
export interface BooleanCondition {
  /**
   * <p>A name of the property to be searched.</p>
   * @public
   */
  FieldName?: string | undefined;

  /**
   * <p>Boolean property comparison type.</p>
   * @public
   */
  ComparisonType?: BooleanComparisonType | undefined;
}

/**
 * <p>A datetime search condition for Search APIs.</p>
 * @public
 */
export interface DateTimeCondition {
  /**
   * <p>A name of the datetime property to be searched</p>
   * @public
   */
  FieldName?: string | undefined;

  /**
   * <p>A minimum value of the property.</p>
   * @public
   */
  MinValue?: string | undefined;

  /**
   * <p>A maximum value of the property.</p>
   * @public
   */
  MaxValue?: string | undefined;

  /**
   * <p>Datetime property comparison type.</p>
   * @public
   */
  ComparisonType?: DateTimeComparisonType | undefined;
}

/**
 * <p>A decimal search condition for Search APIs.</p>
 * @public
 */
export interface DecimalCondition {
  /**
   * <p>A name of the decimal property to be searched.</p>
   * @public
   */
  FieldName?: string | undefined;

  /**
   * <p>A minimum value of the decimal property.</p>
   * @public
   */
  MinValue?: number | undefined;

  /**
   * <p>A maximum value of the decimal property.</p>
   * @public
   */
  MaxValue?: number | undefined;

  /**
   * <p>The type of comparison to be made when evaluating the decimal condition.</p>
   * @public
   */
  ComparisonType?: DecimalComparisonType | undefined;
}

/**
 * <p>A leaf node condition which can be used to specify a numeric condition.</p>
 *          <note>
 *             <p>The currently supported value for <code>FieldName</code> is <code>limit</code>.</p>
 *          </note>
 * @public
 */
export interface NumberCondition {
  /**
   * <p>The name of the field in the number condition.</p>
   * @public
   */
  FieldName?: string | undefined;

  /**
   * <p>The minValue to be used while evaluating the number condition.</p>
   * @public
   */
  MinValue?: number | undefined;

  /**
   * <p>The maxValue to be used while evaluating the number condition.</p>
   * @public
   */
  MaxValue?: number | undefined;

  /**
   * <p>The type of comparison to be made when evaluating the number condition.</p>
   * @public
   */
  ComparisonType?: NumberComparisonType | undefined;
}

/**
 * <p>Filters to be applied to search results.</p>
 * @public
 */
export interface EvaluationSearchFilter {
  /**
   * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an
   *     <code>OR</code> or <code>AND</code> (List of List) input where:</p>
   *          <ul>
   *             <li>
   *                <p>The top level list specifies conditions that need to be applied with <code>OR</code> operator.</p>
   *             </li>
   *             <li>
   *                <p>The inner list specifies conditions that need to be applied with <code>AND</code> operator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AttributeFilter?: ControlPlaneAttributeFilter | undefined;
}

/**
 * <p>Metadata information about an evaluation search.</p>
 * @public
 */
export interface EvaluationSearchMetadata {
  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the person who evaluated the contact.</p>
   * @public
   */
  EvaluatorArn: string | undefined;

  /**
   * <p>The unique ID of the agent who handled the contact.</p>
   * @public
   */
  ContactAgentId?: string | undefined;

  /**
   * <p>The calibration session ID that this evaluation belongs to.</p>
   * @public
   */
  CalibrationSessionId?: string | undefined;

  /**
   * <p>The total evaluation score expressed as a percentage.</p>
   * @public
   */
  ScorePercentage?: number | undefined;

  /**
   * <p>The flag that marks the item as automatic fail. If the item or a child item gets an automatic fail answer, this
   *    flag is true.</p>
   * @public
   */
  ScoreAutomaticFail?: boolean | undefined;

  /**
   * <p>The flag to mark the item as not applicable for scoring.</p>
   * @public
   */
  ScoreNotApplicable?: boolean | undefined;

  /**
   * <p>Whether auto-evaluation is enabled.</p>
   * @public
   */
  AutoEvaluationEnabled?: boolean | undefined;

  /**
   * <p>The status of the contact auto evaluation. </p>
   * @public
   */
  AutoEvaluationStatus?: AutoEvaluationStatus | undefined;

  /**
   * <p>When the evaluation was acknowledged by the agent.</p>
   * @public
   */
  AcknowledgedTime?: Date | undefined;

  /**
   * <p>The agent who acknowledged the evaluation.</p>
   * @public
   */
  AcknowledgedBy?: string | undefined;

  /**
   * <p>The comment from the agent when they acknowledged the evaluation.</p>
   * @public
   */
  AcknowledgerComment?: string | undefined;

  /**
   * <p>Identifier of the sampling job.</p>
   * @public
   */
  SamplingJobId?: string | undefined;

  /**
   * <p>Identifier for the review.</p>
   * @public
   */
  ReviewId?: string | undefined;

  /**
   * <p>Role of a contact participant in the evaluation.</p>
   * @public
   */
  ContactParticipantRole?: ContactParticipantRole | undefined;

  /**
   * <p>Identifier for a contact participant in the evaluation.</p>
   * @public
   */
  ContactParticipantId?: string | undefined;
}

/**
 * <p>Summary of evaluation obtained from the search operation.</p>
 * @public
 */
export interface EvaluationSearchSummary {
  /**
   * <p>A unique identifier for the contact evaluation.</p>
   * @public
   */
  EvaluationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the contact evaluation resource.</p>
   * @public
   */
  EvaluationArn: string | undefined;

  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId?: string | undefined;

  /**
   * <p>A version of the evaluation form.</p>
   * @public
   */
  EvaluationFormVersion: number | undefined;

  /**
   * <p>Title of the evaluation form.</p>
   * @public
   */
  EvaluationFormTitle?: string | undefined;

  /**
   * <p>Summary information about the evaluation search.</p>
   * @public
   */
  Metadata: EvaluationSearchMetadata | undefined;

  /**
   * <p>The status of the evaluation. </p>
   * @public
   */
  Status: EvaluationStatus | undefined;

  /**
   * <p>Type of the evaluation. </p>
   * @public
   */
  EvaluationType?: EvaluationType | undefined;

  /**
   * <p>The date and time when the evaluation was created, in UTC time.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The date and time when the evaluation was modified last time, in UTC time.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SearchContactEvaluationsResponse {
  /**
   * <p>Contains information about contact evaluations.</p>
   * @public
   */
  EvaluationSearchSummaryList?: EvaluationSearchSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of contact evaluations that matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an
 *     <code>OR</code> of <code>AND</code> (List of List) input where:</p>
 *          <ul>
 *             <li>
 *                <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p>
 *             </li>
 *             <li>
 *                <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ControlPlaneTagFilter {
  /**
   * <p>A list of conditions which would be applied together with an <code>OR</code> condition.</p>
   * @public
   */
  OrConditions?: TagCondition[][] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code> condition.</p>
   * @public
   */
  AndConditions?: TagCondition[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a tag condition.</p>
   * @public
   */
  TagCondition?: TagCondition | undefined;
}

/**
 * <p>The search criteria to be used to return flow modules.</p>
 * @public
 */
export interface ContactFlowModuleSearchFilter {
  /**
   * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an
   *     <code>OR</code> of <code>AND</code> (List of List) input where:</p>
   *          <ul>
   *             <li>
   *                <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p>
   *             </li>
   *             <li>
   *                <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TagFilter?: ControlPlaneTagFilter | undefined;
}

/**
 * @public
 */
export interface SearchContactFlowModulesResponse {
  /**
   * <p>The search criteria to be used to return flow modules.</p>
   * @public
   */
  ContactFlowModules?: ContactFlowModule[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of flows which matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * <p> The contact flow type condition.</p>
 * @public
 */
export interface ContactFlowTypeCondition {
  /**
   * <p> Contact flow type of the contact flow type condition.</p>
   * @public
   */
  ContactFlowType?: ContactFlowType | undefined;
}

/**
 * <p> A list of conditions which would be applied together with an AND condition.</p>
 * @public
 */
export interface ContactFlowAttributeAndCondition {
  /**
   * <p> Tag-based conditions for contact flow filtering.</p>
   * @public
   */
  TagConditions?: TagCondition[] | undefined;

  /**
   * <p> Contact flow type condition.</p>
   * @public
   */
  ContactFlowTypeCondition?: ContactFlowTypeCondition | undefined;
}

/**
 * <p> Filter for contact flow attributes with multiple condition types.</p>
 * @public
 */
export interface ContactFlowAttributeFilter {
  /**
   * <p> A list of conditions which would be applied together with an OR condition.</p>
   * @public
   */
  OrConditions?: ContactFlowAttributeAndCondition[] | undefined;

  /**
   * <p> A list of conditions which would be applied together with a AND condition.</p>
   * @public
   */
  AndCondition?: ContactFlowAttributeAndCondition | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a tag condition, for example, <code>HAVE BPO = 123</code>.
   *   </p>
   * @public
   */
  TagCondition?: TagCondition | undefined;

  /**
   * <p> Contact flow type condition within attribute filter.</p>
   * @public
   */
  ContactFlowTypeCondition?: ContactFlowTypeCondition | undefined;
}

/**
 * <p>Filters to be applied to search results.</p>
 * @public
 */
export interface ContactFlowSearchFilter {
  /**
   * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an
   *     <code>OR</code> of <code>AND</code> (List of List) input where:</p>
   *          <ul>
   *             <li>
   *                <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p>
   *             </li>
   *             <li>
   *                <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TagFilter?: ControlPlaneTagFilter | undefined;

  /**
   * <p> Flow attribute filter for contact flow search operations. </p>
   * @public
   */
  FlowAttributeFilter?: ContactFlowAttributeFilter | undefined;
}

/**
 * @public
 */
export interface SearchContactFlowsResponse {
  /**
   * <p>Information about the flows.</p>
   * @public
   */
  ContactFlows?: ContactFlow[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of flows which matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * <p>A structure of time range that you want to search results.</p>
 * @public
 */
export interface SearchContactsTimeRange {
  /**
   * <p>The type of timestamp to search.</p>
   * @public
   */
  Type: SearchContactsTimeRangeType | undefined;

  /**
   * <p>The start time of the time range.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The end time of the time range.</p>
   * @public
   */
  EndTime: Date | undefined;
}

/**
 * <p>The timestamp condition indicating which contact timestamp should be used and how it should be filtered. It is
 *    not an actual timestamp value. </p>
 * @public
 */
export interface SearchContactsTimestampCondition {
  /**
   * <p>Type of the timestamps to use for the filter.</p>
   * @public
   */
  Type: SearchContactsTimeRangeType | undefined;

  /**
   * <p>Condition of the timestamp on the contact.</p>
   * @public
   */
  ConditionType: SearchContactsTimeRangeConditionType | undefined;
}

/**
 * <p>The criteria of the time range to additionally filter on.</p>
 * @public
 */
export interface SearchContactsAdditionalTimeRangeCriteria {
  /**
   * <p>A structure of time range that you want to search results.</p>
   * @public
   */
  TimeRange?: SearchContactsTimeRange | undefined;

  /**
   * <p>List of the timestamp conditions.</p>
   * @public
   */
  TimestampCondition?: SearchContactsTimestampCondition | undefined;
}

/**
 * <p>Time range that you <b>additionally</b> want to filter on.</p>
 *          <note>
 *             <p>This is different from the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchContactsTimeRange.html">SearchContactsTimeRange</a> data
 *     type.</p>
 *          </note>
 * @public
 */
export interface SearchContactsAdditionalTimeRange {
  /**
   * <p>List of criteria of the time range to additionally filter on.</p>
   * @public
   */
  Criteria: SearchContactsAdditionalTimeRangeCriteria[] | undefined;

  /**
   * <p>The match type combining multiple time range filters.</p>
   * @public
   */
  MatchType: SearchContactsMatchType | undefined;
}

/**
 * <p>A structure that defines search criteria base on words or phrases, participants in the Contact Lens
 *    conversational analytics transcript.</p>
 * @public
 */
export interface TranscriptCriteria {
  /**
   * <p>The participant role in a transcript</p>
   * @public
   */
  ParticipantRole: ParticipantRole | undefined;

  /**
   * <p>The words or phrases used to search within a transcript.</p>
   * @public
   */
  SearchText: string[] | undefined;

  /**
   * <p>The match type combining search criteria using multiple search texts in a transcript criteria.</p>
   * @public
   */
  MatchType: SearchContactsMatchType | undefined;
}

/**
 * <p>A structure that defines search criteria and matching logic to search for contacts by matching text with
 *    transcripts analyzed by Amazon Connect Contact Lens.</p>
 * @public
 */
export interface Transcript {
  /**
   * <p>The list of search criteria based on Contact Lens conversational analytics transcript.</p>
   * @public
   */
  Criteria: TranscriptCriteria[] | undefined;

  /**
   * <p>The match type combining search criteria using multiple transcript criteria.</p>
   * @public
   */
  MatchType?: SearchContactsMatchType | undefined;
}

/**
 * <p>A structure that defines search criteria for contacts using analysis outputs from Amazon Connect Contact
 *    Lens.</p>
 * @public
 */
export interface ContactAnalysis {
  /**
   * <p>Search criteria based on transcript analyzed by Amazon Connect Contact Lens.</p>
   * @public
   */
  Transcript?: Transcript | undefined;
}

/**
 * <p>The search criteria based on the contact name</p>
 * @public
 */
export interface NameCriteria {
  /**
   * <p>The words or phrases used to match the contact name.</p>
   * @public
   */
  SearchText: string[] | undefined;

  /**
   * <p>The match type combining name search criteria using multiple search texts in a name criteria.</p>
   * @public
   */
  MatchType: SearchContactsMatchType | undefined;
}

/**
 * <p>The agent criteria to search for preferred agents on the routing criteria.</p>
 * @public
 */
export interface SearchableAgentCriteriaStep {
  /**
   * <p>The identifiers of agents used in preferred agents matching.</p>
   * @public
   */
  AgentIds?: string[] | undefined;

  /**
   * <p>The match type combining multiple agent criteria steps.</p>
   * @public
   */
  MatchType?: SearchContactsMatchType | undefined;
}

/**
 * <p>Routing criteria of the contact to match on.</p>
 * @public
 */
export interface SearchableRoutingCriteriaStep {
  /**
   * <p>Agent matching the routing step of the routing criteria</p>
   * @public
   */
  AgentCriteria?: SearchableAgentCriteriaStep | undefined;
}

/**
 * <p>Routing criteria of the contact to match on.</p>
 * @public
 */
export interface SearchableRoutingCriteria {
  /**
   * <p>The list of Routing criteria steps of the contact routing.</p>
   * @public
   */
  Steps?: SearchableRoutingCriteriaStep[] | undefined;
}

/**
 * <p>The search criteria based on user-defined contact attribute key and values to search on.</p>
 * @public
 */
export interface SearchableContactAttributesCriteria {
  /**
   * <p>The key containing a searchable user-defined contact attribute.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The list of values to search for within a user-defined contact attribute.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * <p>A structure that defines search criteria based on user-defined contact attributes that are configured for
 *    contact search.</p>
 * @public
 */
export interface SearchableContactAttributes {
  /**
   * <p>The list of criteria based on user-defined contact attributes that are configured for contact search.</p>
   * @public
   */
  Criteria: SearchableContactAttributesCriteria[] | undefined;

  /**
   * <p>The match type combining search criteria using multiple searchable contact attributes.</p>
   * @public
   */
  MatchType?: SearchContactsMatchType | undefined;
}

/**
 * <p>The search criteria based on searchable segment attribute key and values to search on.</p>
 * @public
 */
export interface SearchableSegmentAttributesCriteria {
  /**
   * <p>The key containing a searchable segment attribute.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The list of values to search for within a searchable segment attribute.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * <p>The search criteria based on searchable segment attributes of a contact</p>
 * @public
 */
export interface SearchableSegmentAttributes {
  /**
   * <p>The list of criteria based on searchable segment attributes.</p>
   * @public
   */
  Criteria: SearchableSegmentAttributesCriteria[] | undefined;

  /**
   * <p>The match type combining search criteria using multiple searchable segment attributes.</p>
   * @public
   */
  MatchType?: SearchContactsMatchType | undefined;
}

/**
 * <p>A structure of search criteria to be used to return contacts.</p>
 * @public
 */
export interface SearchCriteria {
  /**
   * <p>Name of the contact.</p>
   * @public
   */
  Name?: NameCriteria | undefined;

  /**
   * <p>The identifiers of agents who handled the contacts.</p>
   * @public
   */
  AgentIds?: string[] | undefined;

  /**
   * <p>The agent hierarchy groups of the agent at the time of handling the contact.</p>
   * @public
   */
  AgentHierarchyGroups?: AgentHierarchyGroups | undefined;

  /**
   * <p>The list of channels associated with contacts.</p>
   * @public
   */
  Channels?: Channel[] | undefined;

  /**
   * <p>Search criteria based on analysis outputs from Amazon Connect Contact Lens.</p>
   * @public
   */
  ContactAnalysis?: ContactAnalysis | undefined;

  /**
   * <p>The list of initiation methods associated with contacts.</p>
   * @public
   */
  InitiationMethods?: ContactInitiationMethod[] | undefined;

  /**
   * <p>The list of queue IDs associated with contacts.</p>
   * @public
   */
  QueueIds?: string[] | undefined;

  /**
   * <p>Routing criteria for the contact.</p>
   * @public
   */
  RoutingCriteria?: SearchableRoutingCriteria | undefined;

  /**
   * <p>Additional TimeRange used to filter contacts.</p>
   * @public
   */
  AdditionalTimeRange?: SearchContactsAdditionalTimeRange | undefined;

  /**
   * <p>The search criteria based on user-defined contact attributes that have been configured for contact search. For
   *    more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/search-custom-attributes.html">Search by custom contact attributes</a> in the <i>Amazon Connect Administrator
   *    Guide</i>.</p>
   *          <important>
   *             <p>To use <code>SearchableContactAttributes</code> in a search request, the <code>GetContactAttributes</code>
   *     action is required to perform an API request. For more information, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnect.html#amazonconnect-actions-as-permissions">https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnect.html#amazonconnect-actions-as-permissions</a>Actions
   *     defined by Amazon Connect.</p>
   *          </important>
   * @public
   */
  SearchableContactAttributes?: SearchableContactAttributes | undefined;

  /**
   * <p>The search criteria based on searchable segment attributes of a contact.</p>
   * @public
   */
  SearchableSegmentAttributes?: SearchableSegmentAttributes | undefined;
}

/**
 * <p>A structure that defines the field name to sort by and a sort order.</p>
 * @public
 */
export interface Sort {
  /**
   * <p>The name of the field on which to sort.</p>
   * @public
   */
  FieldName: SortableFieldName | undefined;

  /**
   * <p>An ascending or descending sort.</p>
   * @public
   */
  Order: SortOrder | undefined;
}

/**
 * @public
 */
export interface SearchContactsRequest {
  /**
   * <p>The identifier of Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of
   *    the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Time range that you want to search results.</p>
   * @public
   */
  TimeRange: SearchContactsTimeRange | undefined;

  /**
   * <p>The search criteria to be used to return contacts.</p>
   * @public
   */
  SearchCriteria?: SearchCriteria | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies a field to sort by and a sort order.</p>
   * @public
   */
  Sort?: Sort | undefined;
}

/**
 * <p>Information about the agent who accepted the contact.</p>
 * @public
 */
export interface ContactSearchSummaryAgentInfo {
  /**
   * <p>The identifier of the agent who accepted the contact.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The timestamp when the contact was connected to the agent.</p>
   * @public
   */
  ConnectedToAgentTimestamp?: Date | undefined;
}

/**
 * <p>If this contact was queued, this contains information about the queue.</p>
 * @public
 */
export interface ContactSearchSummaryQueueInfo {
  /**
   * <p>The unique identifier for the queue.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The timestamp when the contact was added to the queue.</p>
   * @public
   */
  EnqueueTimestamp?: Date | undefined;
}

/**
 * <p>A data table search filter.</p>
 * @public
 */
export interface DataTableSearchFilter {
  /**
   * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an
   *     <code>OR</code> or <code>AND</code> (List of List) input where:</p>
   *          <ul>
   *             <li>
   *                <p>The top level list specifies conditions that need to be applied with <code>OR</code> operator.</p>
   *             </li>
   *             <li>
   *                <p>The inner list specifies conditions that need to be applied with <code>AND</code> operator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AttributeFilter?: ControlPlaneAttributeFilter | undefined;
}

/**
 * @public
 */
export interface SearchDataTablesResponse {
  /**
   * <p>An array of data tables matching the search criteria with the same structure as DescribeTable except Version,
   *    VersionDescription, and LockVersion are omitted.</p>
   * @public
   */
  DataTables?: DataTable[] | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The approximate number of data tables that matched the search criteria.</p>
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * <p>Filters to be applied to search results.</p>
 * @public
 */
export interface EmailAddressSearchFilter {
  /**
   * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an
   *     <code>OR</code> of <code>AND</code> (List of List) input where:</p>
   *          <ul>
   *             <li>
   *                <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p>
   *             </li>
   *             <li>
   *                <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TagFilter?: ControlPlaneTagFilter | undefined;
}

/**
 * <p>Contains information about an email address for a contact center.</p>
 * @public
 */
export interface EmailAddressMetadata {
  /**
   * <p>The identifier of the email address.</p>
   * @public
   */
  EmailAddressId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the email address.</p>
   * @public
   */
  EmailAddressArn?: string | undefined;

  /**
   * <p>The email address, including the domain.</p>
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * <p>The description of the email address.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The display name of email address.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>A list of alias configurations for this email address, showing which email addresses forward to this primary
   *    address. Each configuration contains the email address ID of an alias that forwards emails to this address.</p>
   * @public
   */
  AliasConfigurations?: AliasConfiguration[] | undefined;
}

/**
 * @public
 */
export interface SearchEmailAddressesResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>List of email addresses matching SearchFilter and SearchCriteria </p>
   * @public
   */
  EmailAddresses?: EmailAddressMetadata[] | undefined;

  /**
   * <p>The total number of email addresses which matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * <p>Filters to be applied to search results.</p>
 * @public
 */
export interface EvaluationFormSearchFilter {
  /**
   * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an
   *     <code>OR</code> or <code>AND</code> (List of List) input where:</p>
   *          <ul>
   *             <li>
   *                <p>The top level list specifies conditions that need to be applied with <code>OR</code> operator.</p>
   *             </li>
   *             <li>
   *                <p>The inner list specifies conditions that need to be applied with <code>AND</code> operator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AttributeFilter?: ControlPlaneAttributeFilter | undefined;
}

/**
 * <p>Information about the returned evaluation forms.</p>
 * @public
 */
export interface EvaluationFormSearchSummary {
  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the evaluation form resource.</p>
   * @public
   */
  EvaluationFormArn: string | undefined;

  /**
   * <p>The title of the evaluation form.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The status of the evaluation form.</p>
   * @public
   */
  Status: EvaluationFormVersionStatus | undefined;

  /**
   * <p>The description of the evaluation form.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>When the evaluation form was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>Who created the evaluation form.</p>
   * @public
   */
  CreatedBy: string | undefined;

  /**
   * <p>When the evaluation form was last changed.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Who changed the evaluation form.</p>
   * @public
   */
  LastModifiedBy: string | undefined;

  /**
   * <p>When the evaluation format was last activated.</p>
   * @public
   */
  LastActivatedTime?: Date | undefined;

  /**
   * <p>The ID of user who last activated evaluation form.</p>
   * @public
   */
  LastActivatedBy?: string | undefined;

  /**
   * <p>Latest version of the evaluation form.</p>
   * @public
   */
  LatestVersion: number | undefined;

  /**
   * <p>Active version of the evaluation form.</p>
   * @public
   */
  ActiveVersion?: number | undefined;

  /**
   * <p>Whether automated evaluation is enabled.</p>
   * @public
   */
  AutoEvaluationEnabled?: boolean | undefined;

  /**
   * <p>The language of the evaluation form.</p>
   * @public
   */
  EvaluationFormLanguage?: EvaluationFormLanguageCode | undefined;

  /**
   * <p>The contact interaction type for this evaluation form.</p>
   * @public
   */
  ContactInteractionType?: ContactInteractionType | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SearchEvaluationFormsResponse {
  /**
   * <p>Information about the returned evaluation forms.</p>
   * @public
   */
  EvaluationFormSearchSummaryList?: EvaluationFormSearchSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of evaluation forms that matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * <p>An object to specify the hours of operation override date condition.</p>
 * @public
 */
export interface DateCondition {
  /**
   * <p>An object to specify the hours of operation override date field.</p>
   * @public
   */
  FieldName?: string | undefined;

  /**
   * <p>An object to specify the hours of operation override date value.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>An object to specify the hours of operation override date condition <code>comparisonType</code>.</p>
   * @public
   */
  ComparisonType?: DateComparisonType | undefined;
}

/**
 * <p>Filters to be applied to search results.</p>
 * @public
 */
export interface HoursOfOperationSearchFilter {
  /**
   * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an
   *     <code>OR</code> of <code>AND</code> (List of List) input where:</p>
   *          <ul>
   *             <li>
   *                <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p>
   *             </li>
   *             <li>
   *                <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TagFilter?: ControlPlaneTagFilter | undefined;
}

/**
 * @public
 */
export interface SearchHoursOfOperationOverridesResponse {
  /**
   * <p>Information about the hours of operations overrides.</p>
   * @public
   */
  HoursOfOperationOverrides?: HoursOfOperationOverride[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of hours of operations which matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * @public
 */
export interface SearchHoursOfOperationsResponse {
  /**
   * <p>Information about the hours of operations.</p>
   * @public
   */
  HoursOfOperations?: HoursOfOperation[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of hours of operations which matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * @public
 */
export interface SearchPredefinedAttributesResponse {
  /**
   * <p>Predefined attributes matched by the search criteria.</p>
   * @public
   */
  PredefinedAttributes?: PredefinedAttribute[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The approximate number of predefined attributes which matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * <p>Filters to be applied to search results.</p>
 * @public
 */
export interface PromptSearchFilter {
  /**
   * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an
   *     <code>OR</code> of <code>AND</code> (List of List) input where:</p>
   *          <ul>
   *             <li>
   *                <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p>
   *             </li>
   *             <li>
   *                <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TagFilter?: ControlPlaneTagFilter | undefined;
}

/**
 * @public
 */
export interface SearchPromptsResponse {
  /**
   * <p>Information about the prompts.</p>
   * @public
   */
  Prompts?: Prompt[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of quick connects which matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * <p>Filters to be applied to search results.</p>
 * @public
 */
export interface QueueSearchFilter {
  /**
   * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an
   *     <code>OR</code> of <code>AND</code> (List of List) input where:</p>
   *          <ul>
   *             <li>
   *                <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p>
   *             </li>
   *             <li>
   *                <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TagFilter?: ControlPlaneTagFilter | undefined;
}

/**
 * @public
 */
export interface SearchQueuesResponse {
  /**
   * <p>Information about the queues.</p>
   * @public
   */
  Queues?: Queue[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of queues which matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * <p>Filters to be applied to search results.</p>
 * @public
 */
export interface QuickConnectSearchFilter {
  /**
   * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an
   *     <code>OR</code> of <code>AND</code> (List of List) input where:</p>
   *          <ul>
   *             <li>
   *                <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p>
   *             </li>
   *             <li>
   *                <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TagFilter?: ControlPlaneTagFilter | undefined;
}

/**
 * @public
 */
export interface SearchQuickConnectsResponse {
  /**
   * <p>Information about the quick connects.</p>
   * @public
   */
  QuickConnects?: QuickConnect[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of quick connects which matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * <p>The search criteria to be used to return tags.</p>
 * @public
 */
export interface TagSearchCondition {
  /**
   * <p>The tag key used in the tag search condition.</p>
   * @public
   */
  tagKey?: string | undefined;

  /**
   * <p>The tag value used in the tag search condition.</p>
   * @public
   */
  tagValue?: string | undefined;

  /**
   * <p>The type of comparison to be made when evaluating the tag key in tag search condition.</p>
   * @public
   */
  tagKeyComparisonType?: StringComparisonType | undefined;

  /**
   * <p>The type of comparison to be made when evaluating the tag value in tag search condition.</p>
   * @public
   */
  tagValueComparisonType?: StringComparisonType | undefined;
}

/**
 * <p>The search criteria to be used to search tags.</p>
 * @public
 */
export interface ResourceTagsSearchCriteria {
  /**
   * <p>The search criteria to be used to return tags.</p>
   * @public
   */
  TagSearchCondition?: TagSearchCondition | undefined;
}

/**
 * @public
 */
export interface SearchResourceTagsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the Amazon Resource Name (ARN)
   *    of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The list of resource types to be used to search tags from. If not provided or if any empty list is provided,
   *    this API will search from all supported resource types. Note that lowercase and - are required.</p>
   *          <p class="title">
   *             <b>Supported resource types</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>agent</p>
   *             </li>
   *             <li>
   *                <p>agent-state</p>
   *             </li>
   *             <li>
   *                <p>routing-profile</p>
   *             </li>
   *             <li>
   *                <p>standard-queue</p>
   *             </li>
   *             <li>
   *                <p>security-profile</p>
   *             </li>
   *             <li>
   *                <p>operating-hours</p>
   *             </li>
   *             <li>
   *                <p>prompt</p>
   *             </li>
   *             <li>
   *                <p>contact-flow</p>
   *             </li>
   *             <li>
   *                <p>flow- module</p>
   *             </li>
   *             <li>
   *                <p>transfer-destination (also known as quick connect)</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceTypes?: string[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The search criteria to be used to return tags.</p>
   * @public
   */
  SearchCriteria?: ResourceTagsSearchCriteria | undefined;
}

/**
 * <p>A tag set contains tag key and tag value.</p>
 * @public
 */
export interface TagSet {
  /**
   * <p>The tag key in the TagSet.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>The tag value in the tagSet.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface SearchResourceTagsResponse {
  /**
   * <p>A list of tags used in the Amazon Connect instance.</p>
   * @public
   */
  Tags?: TagSet[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Filters to be applied to search results.</p>
 * @public
 */
export interface RoutingProfileSearchFilter {
  /**
   * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an
   *     <code>OR</code> of <code>AND</code> (List of List) input where:</p>
   *          <ul>
   *             <li>
   *                <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p>
   *             </li>
   *             <li>
   *                <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TagFilter?: ControlPlaneTagFilter | undefined;
}

/**
 * @public
 */
export interface SearchRoutingProfilesResponse {
  /**
   * <p>Information about the routing profiles.</p>
   * @public
   */
  RoutingProfiles?: RoutingProfile[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of routing profiles which matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * <p>Filters to be applied to search results.</p>
 * @public
 */
export interface SecurityProfilesSearchFilter {
  /**
   * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an
   *     <code>OR</code> of <code>AND</code> (List of List) input where:</p>
   *          <ul>
   *             <li>
   *                <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p>
   *             </li>
   *             <li>
   *                <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TagFilter?: ControlPlaneTagFilter | undefined;
}

/**
 * <p>Information about the returned security profiles.</p>
 * @public
 */
export interface SecurityProfileSearchSummary {
  /**
   * <p>The identifier of the security profile.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The organization resource identifier.</p>
   * @public
   */
  OrganizationResourceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the security profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the security profile.</p>
   * @public
   */
  SecurityProfileName?: string | undefined;

  /**
   * <p>The description of the security profile.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SearchSecurityProfilesResponse {
  /**
   * <p>Information about the security profiles.</p>
   * @public
   */
  SecurityProfiles?: SecurityProfileSearchSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of security profiles which matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * <p>Filters to be applied to search results.</p>
 * @public
 */
export interface UserHierarchyGroupSearchFilter {
  /**
   * <p>An object that can be used to specify Tag conditions inside the SearchFilter. This accepts an OR or AND (List of
   *    List) input where:</p>
   *          <ul>
   *             <li>
   *                <p>The top level list specifies conditions that need to be applied with <code>OR</code> operator.</p>
   *             </li>
   *             <li>
   *                <p>The inner list specifies conditions that need to be applied with <code>AND</code> operator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AttributeFilter?: ControlPlaneAttributeFilter | undefined;
}

/**
 * @public
 */
export interface SearchUserHierarchyGroupsResponse {
  /**
   * <p>Information about the userHierarchyGroups.</p>
   * @public
   */
  UserHierarchyGroups?: HierarchyGroup[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of userHierarchyGroups which matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * <p>A leaf node condition which can be used to specify a hierarchy group condition.</p>
 * @public
 */
export interface HierarchyGroupCondition {
  /**
   * <p>The value in the hierarchy group condition.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The type of hierarchy group match.</p>
   * @public
   */
  HierarchyGroupMatchType?: HierarchyGroupMatchType | undefined;
}

/**
 * <p>A leaf node condition which can be used to specify a ProficiencyName, ProficiencyValue and
 *    ProficiencyLimit.</p>
 * @public
 */
export interface Condition {
  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code> and <code>value</code>.</p>
   *          </note>
   * @public
   */
  StringCondition?: StringCondition | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a numeric condition.</p>
   * @public
   */
  NumberCondition?: NumberCondition | undefined;
}

/**
 * <p>A leaf node condition which can be used to specify a List condition to search users with attributes included in
 *    Lists like Proficiencies.</p>
 * @public
 */
export interface ListCondition {
  /**
   * <p>The type of target list that will be used to filter the users.</p>
   * @public
   */
  TargetListType?: TargetListType | undefined;

  /**
   * <p>A list of Condition objects which would be applied together with an AND condition.</p>
   * @public
   */
  Conditions?: Condition[] | undefined;
}

/**
 * <p>A list of conditions which would be applied together with an <code>AND</code> condition.</p>
 * @public
 */
export interface AttributeAndCondition {
  /**
   * <p>A leaf node condition which can be used to specify a tag condition.</p>
   * @public
   */
  TagConditions?: TagCondition[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a hierarchy group condition.</p>
   * @public
   */
  HierarchyGroupCondition?: HierarchyGroupCondition | undefined;
}

/**
 * <p>An object that can be used to specify Tag conditions or Hierarchy Group conditions inside the
 *     <code>SearchFilter</code>.</p>
 *          <p>This accepts an <code>OR</code> of <code>AND</code> (List of List) input where:</p>
 *          <ul>
 *             <li>
 *                <p>The top level list specifies conditions that need to be applied with <code>OR</code> operator</p>
 *             </li>
 *             <li>
 *                <p>The inner list specifies conditions that need to be applied with <code>AND</code> operator.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>Only one field can be populated. Maximum number of allowed Tag conditions is 25. Maximum number of allowed
 *     Hierarchy Group conditions is 20.</p>
 *          </note>
 * @public
 */
export interface ControlPlaneUserAttributeFilter {
  /**
   * <p>A list of conditions which would be applied together with an <code>OR</code> condition.</p>
   * @public
   */
  OrConditions?: AttributeAndCondition[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code> condition.</p>
   * @public
   */
  AndCondition?: AttributeAndCondition | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a tag condition, for example, <code>HAVE BPO = 123</code>.
   *   </p>
   * @public
   */
  TagCondition?: TagCondition | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a hierarchy group condition.</p>
   * @public
   */
  HierarchyGroupCondition?: HierarchyGroupCondition | undefined;
}

/**
 * <p>Filters to be applied to search results.</p>
 * @public
 */
export interface UserSearchFilter {
  /**
   * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an
   *     <code>OR</code> of <code>AND</code> (List of List) input where:</p>
   *          <ul>
   *             <li>
   *                <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p>
   *             </li>
   *             <li>
   *                <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TagFilter?: ControlPlaneTagFilter | undefined;

  /**
   * <p>An object that can be used to specify Tag conditions or Hierarchy Group conditions inside the
   *    SearchFilter.</p>
   *          <p>This accepts an <code>OR</code> of <code>AND</code> (List of List) input where:</p>
   *          <ul>
   *             <li>
   *                <p>The top level list specifies conditions that need to be applied with <code>OR</code> operator.</p>
   *             </li>
   *             <li>
   *                <p>The inner list specifies conditions that need to be applied with <code>AND</code> operator.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Only one field can be populated. This object can’t be used along with TagFilter. Request can either contain
   *     TagFilter or UserAttributeFilter if SearchFilter is specified, combination of both is not supported and such request
   *     will throw AccessDeniedException.</p>
   *          </note>
   * @public
   */
  UserAttributeFilter?: ControlPlaneUserAttributeFilter | undefined;
}

/**
 * <p>The user's first name and last name.</p>
 * @public
 */
export interface UserIdentityInfoLite {
  /**
   * <p>The user's first name.</p>
   * @public
   */
  FirstName?: string | undefined;

  /**
   * <p>The user's last name.</p>
   * @public
   */
  LastName?: string | undefined;
}

/**
 * <p>Information about the returned users.</p>
 * @public
 */
export interface UserSearchSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the user.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The directory identifier of the user.</p>
   * @public
   */
  DirectoryUserId?: string | undefined;

  /**
   * <p>The identifier of the user's hierarchy group.</p>
   * @public
   */
  HierarchyGroupId?: string | undefined;

  /**
   * <p>The identifier of the user's summary.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The user's first name and last name.</p>
   * @public
   */
  IdentityInfo?: UserIdentityInfoLite | undefined;

  /**
   * <p>Contains information about the phone configuration settings for a user.</p>
   * @public
   */
  PhoneConfig?: UserPhoneConfig | undefined;

  /**
   * <p>The identifier of the user's routing profile.</p>
   * @public
   */
  RoutingProfileId?: string | undefined;

  /**
   * <p>The identifiers of the user's security profiles.</p>
   * @public
   */
  SecurityProfileIds?: string[] | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The name of the user.</p>
   * @public
   */
  Username?: string | undefined;
}

/**
 * @public
 */
export interface SearchUsersResponse {
  /**
   * <p>Information about the users.</p>
   * @public
   */
  Users?: UserSearchSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of users who matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * <p>Defines filters to apply when searching for views, such as tag-based filters.</p>
 * @public
 */
export interface ViewSearchFilter {
  /**
   * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an
   *     <code>OR</code> or <code>AND</code> (List of List) input where:</p>
   *          <ul>
   *             <li>
   *                <p>The top level list specifies conditions that need to be applied with <code>OR</code> operator.</p>
   *             </li>
   *             <li>
   *                <p>The inner list specifies conditions that need to be applied with <code>AND</code> operator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AttributeFilter?: ControlPlaneAttributeFilter | undefined;
}

/**
 * @public
 */
export interface SearchViewsResponse {
  /**
   * <p>A list of views that match the search criteria.</p>
   * @public
   */
  Views?: View[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The approximate total number of views that match the search criteria.</p>
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * @public
 */
export interface SearchVocabulariesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The current state of the custom vocabulary.</p>
   * @public
   */
  State?: VocabularyState | undefined;

  /**
   * <p>The starting pattern of the name of the vocabulary.</p>
   * @public
   */
  NameStartsWith?: string | undefined;

  /**
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   * @public
   */
  LanguageCode?: VocabularyLanguageCode | undefined;
}

/**
 * <p>Contains summary information about the custom vocabulary.</p>
 * @public
 */
export interface VocabularySummary {
  /**
   * <p>A unique name of the custom vocabulary.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The identifier of the custom vocabulary.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the custom vocabulary.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   * @public
   */
  LanguageCode: VocabularyLanguageCode | undefined;

  /**
   * <p>The current state of the custom vocabulary.</p>
   * @public
   */
  State: VocabularyState | undefined;

  /**
   * <p>The timestamp when the custom vocabulary was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The reason why the custom vocabulary was not created.</p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface SearchVocabulariesResponse {
  /**
   * <p>The list of the available custom vocabularies.</p>
   * @public
   */
  VocabularySummaryList?: VocabularySummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Defines filters to apply when searching for workspace associations, such as tag-based filters.</p>
 * @public
 */
export interface WorkspaceAssociationSearchFilter {
  /**
   * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an
   *     <code>OR</code> or <code>AND</code> (List of List) input where:</p>
   *          <ul>
   *             <li>
   *                <p>The top level list specifies conditions that need to be applied with <code>OR</code> operator.</p>
   *             </li>
   *             <li>
   *                <p>The inner list specifies conditions that need to be applied with <code>AND</code> operator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AttributeFilter?: ControlPlaneAttributeFilter | undefined;
}

/**
 * <p>Contains summary information about a workspace association with a user or routing profile.</p>
 * @public
 */
export interface WorkspaceAssociationSearchSummary {
  /**
   * <p>The identifier of the workspace.</p>
   * @public
   */
  WorkspaceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workspace.</p>
   * @public
   */
  WorkspaceArn?: string | undefined;

  /**
   * <p>The identifier of the associated resource (user or routing profile).</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the associated resource.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The type of resource associated with the workspace. Valid values are: <code>USER</code> and
   *     <code>ROUTING_PROFILE</code>.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The name of the associated resource.</p>
   * @public
   */
  ResourceName?: string | undefined;
}

/**
 * @public
 */
export interface SearchWorkspaceAssociationsResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of workspace associations that match the search criteria.</p>
   * @public
   */
  WorkspaceAssociations?: WorkspaceAssociationSearchSummary[] | undefined;

  /**
   * <p>The approximate total number of workspace associations that match the search criteria.</p>
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * <p>Defines filters to apply when searching for workspaces, such as tag-based filters.</p>
 * @public
 */
export interface WorkspaceSearchFilter {
  /**
   * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an
   *     <code>OR</code> or <code>AND</code> (List of List) input where:</p>
   *          <ul>
   *             <li>
   *                <p>The top level list specifies conditions that need to be applied with <code>OR</code> operator.</p>
   *             </li>
   *             <li>
   *                <p>The inner list specifies conditions that need to be applied with <code>AND</code> operator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AttributeFilter?: ControlPlaneAttributeFilter | undefined;
}

/**
 * <p>Contains summary information about a workspace returned from a search operation.</p>
 * @public
 */
export interface WorkspaceSearchSummary {
  /**
   * <p>The unique identifier of the workspace.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The visibility setting of the workspace.</p>
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * <p>The description of the workspace.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The title displayed for the workspace.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workspace.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The timestamp when the workspace was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The tags associated with the workspace.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SearchWorkspacesResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of workspaces that match the search criteria.</p>
   * @public
   */
  Workspaces?: WorkspaceSearchSummary[] | undefined;

  /**
   * <p>The approximate total number of workspaces that match the search criteria.</p>
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * <p>Chat integration event containing payload to perform different chat actions such as:</p>
 *          <ul>
 *             <li>
 *                <p>Sending a chat message</p>
 *             </li>
 *             <li>
 *                <p>Sending a chat event, such as typing</p>
 *             </li>
 *             <li>
 *                <p>Disconnecting from a chat</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ChatEvent {
  /**
   * <p>Type of chat integration event. </p>
   * @public
   */
  Type: ChatEventType | undefined;

  /**
   * <p>Type of content. This is required when <code>Type</code> is <code>MESSAGE</code> or <code>EVENT</code>. </p>
   *          <ul>
   *             <li>
   *                <p>For allowed message content types, see the <code>ContentType</code> parameter in the <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_SendMessage.html">SendMessage</a> topic
   *      in the <i>Amazon Connect Participant Service API Reference</i>.</p>
   *             </li>
   *             <li>
   *                <p>For allowed event content types, see the <code>ContentType</code> parameter in the <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_SendEvent.html">SendEvent</a> topic in the <i>Amazon Connect Participant Service API Reference</i>. </p>
   *             </li>
   *          </ul>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>Content of the message or event. This is required when <code>Type</code> is <code>MESSAGE</code> and for certain
   *     <code>ContentTypes</code> when <code>Type</code> is <code>EVENT</code>.</p>
   *          <ul>
   *             <li>
   *                <p>For allowed message content, see the <code>Content</code> parameter in the <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_SendMessage.html">SendMessage</a> topic in the
   *        <i>Amazon Connect Participant Service API Reference</i>.</p>
   *             </li>
   *             <li>
   *                <p>For allowed event content, see the <code>Content</code> parameter in the <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_SendEvent.html">SendEvent</a> topic in the <i>Amazon Connect Participant Service API Reference</i>. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Content?: string | undefined;
}

/**
 * <p>The customer's details.</p>
 * @public
 */
export interface ParticipantDetails {
  /**
   * <p>Display name of the participant.</p>
   * @public
   */
  DisplayName: string | undefined;
}

/**
 * <p>The streaming configuration, such as the Amazon SNS streaming endpoint.</p>
 * @public
 */
export interface ChatStreamingConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the standard Amazon SNS topic. The Amazon Resource Name (ARN) of the streaming endpoint that is used to publish
   *    real-time message streaming for chat conversations.</p>
   * @public
   */
  StreamingEndpointArn: string | undefined;
}

/**
 * <p>Payload of chat properties to apply when starting a new contact.</p>
 * @public
 */
export interface NewSessionDetails {
  /**
   * <p> The supported chat message content types. Supported types are <code>text/plain</code>,
   *     <code>text/markdown</code>, <code>application/json</code>,
   *     <code>application/vnd.amazonaws.connect.message.interactive</code>, and
   *     <code>application/vnd.amazonaws.connect.message.interactive.response</code>. </p>
   *          <p>Content types must always contain <code> text/plain</code>. You can then put any other supported type in the
   *    list. For example, all the following lists are valid because they contain <code>text/plain</code>: <code>[text/plain,
   *     text/markdown, application/json]</code>, <code> [text/markdown, text/plain]</code>, <code>[text/plain,
   *     application/json, application/vnd.amazonaws.connect.message.interactive.response]</code>. </p>
   * @public
   */
  SupportedMessagingContentTypes?: string[] | undefined;

  /**
   * <p>The customer's details.</p>
   * @public
   */
  ParticipantDetails?: ParticipantDetails | undefined;

  /**
   * <p> A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes. They
   *    can be accessed in flows just like any other contact attributes. </p>
   *          <p> There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only
   *    alphanumeric, dash, and underscore characters. </p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * <p>The streaming configuration, such as the Amazon SNS streaming endpoint.</p>
   * @public
   */
  StreamingConfiguration?: ChatStreamingConfiguration | undefined;
}

/**
 * @public
 */
export interface SendChatIntegrationEventRequest {
  /**
   * <p>External identifier of chat customer participant, used in part to uniquely identify a chat. For SMS, this is the
   *    E164 phone number of the chat customer participant.</p>
   * @public
   */
  SourceId: string | undefined;

  /**
   * <p>Chat system identifier, used in part to uniquely identify chat. This is associated with the Amazon Connect
   *    instance and flow to be used to start chats. For Server Migration Service, this is the phone number destination of inbound
   *     Server Migration Service messages represented by an Amazon Web Services End User Messaging phone number ARN.</p>
   * @public
   */
  DestinationId: string | undefined;

  /**
   * <p>Classification of a channel. This is used in part to uniquely identify chat. </p>
   *          <p>Valid value: <code>["connect:sms", connect:"WhatsApp"]</code>
   *          </p>
   * @public
   */
  Subtype?: string | undefined;

  /**
   * <p>Chat integration event payload</p>
   * @public
   */
  Event: ChatEvent | undefined;

  /**
   * <p>Contact properties to apply when starting a new chat. If the integration event is handled with an existing chat,
   *    this is ignored.</p>
   * @public
   */
  NewSessionDetails?: NewSessionDetails | undefined;
}

/**
 * @public
 */
export interface SendChatIntegrationEventResponse {
  /**
   * <p>Identifier of chat contact used to handle integration event. This may be null if the integration event is not
   *    valid without an already existing chat contact.</p>
   * @public
   */
  InitialContactId?: string | undefined;

  /**
   * <p>Whether handling the integration event resulted in creating a new chat or acting on existing chat.</p>
   * @public
   */
  NewChatCreated?: boolean | undefined;
}

/**
 * <p>Contains information about a source or destination email address.</p>
 * @public
 */
export interface EmailAddressInfo {
  /**
   * <p>The email address, including the domain.</p>
   * @public
   */
  EmailAddress: string | undefined;

  /**
   * <p>The display name of email address.</p>
   * @public
   */
  DisplayName?: string | undefined;
}

/**
 * <p>Information about the additional recipients of outbound email.</p>
 * @public
 */
export interface OutboundAdditionalRecipients {
  /**
   * <p>Information about the <b>additional</b> CC email address recipients. Email recipients
   *    are limited to 50 total addresses: 1 required recipient in the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_SendOutboundEmail.html#API_SendOutboundEmail_RequestBody">DestinationEmailAddress</a> field and up to 49 recipients in the 'CcEmailAddresses' field.</p>
   * @public
   */
  CcEmailAddresses?: EmailAddressInfo[] | undefined;
}

/**
 * <p>Information about the raw email body content.</p>
 * @public
 */
export interface OutboundRawMessage {
  /**
   * <p>The email subject.</p>
   * @public
   */
  Subject: string | undefined;

  /**
   * <p>The email message body.</p>
   * @public
   */
  Body: string | undefined;

  /**
   * <p>Type of content, that is, <code>text/plain</code> or <code>text/html</code>.</p>
   * @public
   */
  ContentType: string | undefined;
}

/**
 * <p>Information about the template attributes.</p>
 * @public
 */
export interface TemplateAttributes {
  /**
   * <p>An object that specifies the custom attributes values to use for variables in the message template. This object
   *    contains different categories of key-value pairs. Each key defines a variable or placeholder in the message template.
   *   </p>
   * @public
   */
  CustomAttributes?: Record<string, string> | undefined;

  /**
   * <p>An object that specifies the customer profile attributes values to use for variables in the message template.
   *    This object contains different categories of key-value pairs. Each key defines a variable or placeholder in the
   *    message template. </p>
   * @public
   */
  CustomerProfileAttributes?: string | undefined;
}

/**
 * <p>Information about template message configuration.</p>
 * @public
 */
export interface TemplatedMessageConfig {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  KnowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the message template Id.</p>
   * @public
   */
  MessageTemplateId: string | undefined;

  /**
   * <p>Information about template attributes, that is, CustomAttributes or CustomerProfileAttributes.</p>
   * @public
   */
  TemplateAttributes: TemplateAttributes | undefined;
}

/**
 * <p>Information about email body content.</p>
 * @public
 */
export interface OutboundEmailContent {
  /**
   * <p>The message source type, that is, <code>RAW</code> or <code>TEMPLATE</code>.</p>
   * @public
   */
  MessageSourceType: OutboundMessageSourceType | undefined;

  /**
   * <p>Information about template message configuration.</p>
   * @public
   */
  TemplatedMessageConfig?: TemplatedMessageConfig | undefined;

  /**
   * <p>The raw email body content.</p>
   * @public
   */
  RawMessage?: OutboundRawMessage | undefined;
}

/**
 * <p>Information about the campaign.</p>
 * @public
 */
export interface SourceCampaign {
  /**
   * <p>A unique identifier for a campaign.</p>
   * @public
   */
  CampaignId?: string | undefined;

  /**
   * <p>A unique identifier for a each request part of same campaign.</p>
   * @public
   */
  OutboundRequestId?: string | undefined;
}

/**
 * @public
 */
export interface SendOutboundEmailRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The email address to be used for sending email.</p>
   * @public
   */
  FromEmailAddress: EmailAddressInfo | undefined;

  /**
   * <p>The email address to send the email to.</p>
   * @public
   */
  DestinationEmailAddress: EmailAddressInfo | undefined;

  /**
   * <p>The additional recipients address of the email in CC.</p>
   * @public
   */
  AdditionalRecipients?: OutboundAdditionalRecipients | undefined;

  /**
   * <p>The email message body to be sent to the newly created email.</p>
   * @public
   */
  EmailMessage: OutboundEmailContent | undefined;

  /**
   * <p>Denotes the class of traffic.</p>
   *          <note>
   *             <p>Only the CAMPAIGN traffic type is supported.</p>
   *          </note>
   * @public
   */
  TrafficType: TrafficType | undefined;

  /**
   * <p>A Campaign object need for Campaign traffic type.</p>
   * @public
   */
  SourceCampaign?: SourceCampaign | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface SendOutboundEmailResponse {}

/**
 * @public
 */
export interface StartAttachedFileUploadRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The unique identifier of the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A case-sensitive name of the attached file being uploaded.</p>
   * @public
   */
  FileName: string | undefined;

  /**
   * <p>The size of the attached file in bytes.</p>
   * @public
   */
  FileSizeInBytes: number | undefined;

  /**
   * <p>Optional override for the expiry of the pre-signed S3 URL in seconds. The default value is 300.</p>
   * @public
   */
  UrlExpiryInSeconds?: number | undefined;

  /**
   * <p>The use case for the file.</p>
   *          <important>
   *             <p> Only <code>ATTACHMENTS</code> are supported.</p>
   *          </important>
   * @public
   */
  FileUseCaseType: FileUseCaseType | undefined;

  /**
   * <p>The resource to which the attached file is (being) uploaded to. The supported resources are <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cases.html">Cases</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-email-channel.html">Email</a>.</p>
   *          <note>
   *             <p>This value must be a valid ARN.</p>
   *          </note>
   * @public
   */
  AssociatedResourceArn: string | undefined;

  /**
   * <p>Represents the identity that created the file.</p>
   * @public
   */
  CreatedBy?: CreatedByInfo | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, <code>\{ "Tags":
   *     \{"key1":"value1", "key2":"value2"\} \}</code>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Fields required when uploading an attached file. </p>
 * @public
 */
export interface UploadUrlMetadata {
  /**
   * <p>A pre-signed S3 URL that should be used for uploading the attached file. </p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>The expiration time of the URL in ISO timestamp. It's specified in ISO 8601 format:
   *     <code>yyyy-MM-ddThh:mm:ss.SSSZ</code>. For example, <code>2019-11-08T02:41:28.172Z</code>.</p>
   * @public
   */
  UrlExpiry?: string | undefined;

  /**
   * <p>A map of headers that should be provided when uploading the attached file. </p>
   * @public
   */
  HeadersToInclude?: Record<string, string> | undefined;
}

/**
 * Response from StartAttachedFileUpload API.
 * @public
 */
export interface StartAttachedFileUploadResponse {
  /**
   * <p>The unique identifier of the attached file resource (ARN).</p>
   * @public
   */
  FileArn?: string | undefined;

  /**
   * <p>The unique identifier of the attached file resource.</p>
   * @public
   */
  FileId?: string | undefined;

  /**
   * <p>The time of Creation of the file resource as an ISO timestamp. It's specified in ISO 8601 format:
   *     <code>yyyy-MM-ddThh:mm:ss.SSSZ</code>. For example, <code>2024-05-03T02:41:28.172Z</code>.</p>
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * <p>The current status of the attached file.</p>
   * @public
   */
  FileStatus?: FileStatusType | undefined;

  /**
   * <p>Represents the identity that created the file.</p>
   * @public
   */
  CreatedBy?: CreatedByInfo | undefined;

  /**
   * <p>The headers to be provided while uploading the file to the URL.</p>
   * @public
   */
  UploadUrlMetadata?: UploadUrlMetadata | undefined;
}

/**
 * <p>A chat message.</p>
 * @public
 */
export interface ChatMessage {
  /**
   * <p>The type of the content. Supported types are <code>text/plain</code>, <code>text/markdown</code>,
   *     <code>application/json</code>, and
   *    <code>application/vnd.amazonaws.connect.message.interactive.response</code>.</p>
   * @public
   */
  ContentType: string | undefined;

  /**
   * <p>The content of the chat message. </p>
   *          <ul>
   *             <li>
   *                <p>For <code>text/plain</code> and <code>text/markdown</code>, the Length Constraints are Minimum of 1, Maximum
   *      of 1024. </p>
   *             </li>
   *             <li>
   *                <p>For <code>application/json</code>, the Length Constraints are Minimum of 1, Maximum of 12000. </p>
   *             </li>
   *             <li>
   *                <p>For <code>application/vnd.amazonaws.connect.message.interactive.response</code>, the Length Constraints are
   *      Minimum of 1, Maximum of 12288.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Content: string | undefined;
}

/**
 * <p> The configuration of the participant. </p>
 * @public
 */
export interface ParticipantConfiguration {
  /**
   * <p> The mode in which responses should be sent to the participant. </p>
   * @public
   */
  ResponseMode?: ResponseMode | undefined;
}

/**
 * <p>Enable persistent chats. For more information about enabling persistent chat, and for example use cases and how
 *    to configure for them, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable
 *     persistent chat</a>.</p>
 * @public
 */
export interface PersistentChat {
  /**
   * <p>The contactId that is used for rehydration depends on the rehydration type. RehydrationType is required for
   *    persistent chat. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENTIRE_PAST_SESSION</code>: Rehydrates a chat from the most recently terminated past chat contact of the
   *      specified past ended chat session. To use this type, provide the <code>initialContactId</code> of the past ended
   *      chat session in the <code>sourceContactId</code> field. In this type, Amazon Connect determines the most recent
   *      chat contact on the specified chat session that has ended, and uses it to start a persistent chat. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FROM_SEGMENT</code>: Rehydrates a chat from the past chat contact that is specified in the
   *       <code>sourceContactId</code> field. </p>
   *             </li>
   *          </ul>
   *          <p>The actual contactId used for rehydration is provided in the response of this API. </p>
   * @public
   */
  RehydrationType?: RehydrationType | undefined;

  /**
   * <p>The contactId from which a persistent chat session must be started.</p>
   * @public
   */
  SourceContactId?: string | undefined;
}

/**
 * @public
 */
export interface StartChatContactResponse {
  /**
   * <p>The identifier of this contact within the Amazon Connect instance. </p>
   * @public
   */
  ContactId?: string | undefined;

  /**
   * <p>The identifier for a chat participant. The participantId for a chat participant is the same throughout the chat
   *    lifecycle.</p>
   * @public
   */
  ParticipantId?: string | undefined;

  /**
   * <p>The token used by the chat participant to call <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a>. The participant token is valid for the lifetime of a chat participant.</p>
   * @public
   */
  ParticipantToken?: string | undefined;

  /**
   * <p>The contactId from which a persistent chat session is started. This field is populated only for persistent
   *    chats.</p>
   * @public
   */
  ContinuedFromContactId?: string | undefined;
}

/**
 * <p>Configuration information about automated evaluations.</p>
 * @public
 */
export interface AutoEvaluationConfiguration {
  /**
   * <p>Whether automated evaluations are enabled.</p>
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * @public
 */
export interface StartContactEvaluationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>Whether automated evaluations are enabled.</p>
   * @public
   */
  AutoEvaluationConfiguration?: AutoEvaluationConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartContactEvaluationResponse {
  /**
   * <p>A unique identifier for the contact evaluation.</p>
   * @public
   */
  EvaluationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the contact evaluation resource.</p>
   * @public
   */
  EvaluationArn: string | undefined;
}

/**
 * @public
 */
export interface StartContactMediaProcessingRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   * @public
   */
  ContactId?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the Lambda processor. You can find the Amazon Resource Name of the lambda in
   *    the lambda console. </p>
   * @public
   */
  ProcessorArn?: string | undefined;

  /**
   * <p> The desired behavior for failed message processing. </p>
   * @public
   */
  FailureMode?: ContactMediaProcessingFailureMode | undefined;
}

/**
 * @public
 */
export interface StartContactMediaProcessingResponse {}

/**
 * <p>Contains information about the recording configuration settings.</p>
 * @public
 */
export interface VoiceRecordingConfiguration {
  /**
   * <p>Identifies which track is being recorded.</p>
   * @public
   */
  VoiceRecordingTrack?: VoiceRecordingTrack | undefined;

  /**
   * <p>Identifies which IVR track is being recorded.</p>
   *          <p>One and only one of the track configurations should be presented in the request.</p>
   * @public
   */
  IvrRecordingTrack?: IvrRecordingTrack | undefined;
}

/**
 * @public
 */
export interface StartContactRecordingRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the contact. This is the identifier of the contact associated with the first interaction with
   *    the contact center.</p>
   * @public
   */
  InitialContactId: string | undefined;

  /**
   * <p>The person being recorded.</p>
   * @public
   */
  VoiceRecordingConfiguration: VoiceRecordingConfiguration | undefined;
}

/**
 * @public
 */
export interface StartContactRecordingResponse {}

/**
 * @public
 */
export interface StartContactStreamingRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact. This is the identifier of the contact associated with the first interaction with
   *    the contact center.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The streaming configuration, such as the Amazon SNS streaming endpoint.</p>
   * @public
   */
  ChatStreamingConfiguration: ChatStreamingConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartContactStreamingResponse {
  /**
   * <p>The identifier of the streaming configuration enabled. </p>
   * @public
   */
  StreamingId: string | undefined;
}

/**
 * <p>Information about the additional TO and CC recipients of an inbound email contact.</p>
 *          <note>
 *             <p>You can include up to 50 email addresses in total, distributed across <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartEmailContact.html#API_StartEmailContact_RequestBody">DestinationEmailAddress</a>, <code>ToAddresses</code>, and <code>CcAddresses</code>. This total must include
 *     one required <code>DestinationEmailAddress</code>. You can then specify up to 49 addresses allocated across
 *      <code>ToAddresses</code> and <code>CcAddresses</code> as needed.</p>
 *          </note>
 * @public
 */
export interface InboundAdditionalRecipients {
  /**
   * <p>The <b>additional</b> recipients information present in to list. You must have 1
   *    required recipient (<code>DestinationEmailAddress</code>). You can then specify up to 49 additional recipients
   *    (across <code>ToAddresses</code> and <code>CcAddresses</code>), for a total of 50 recipients.</p>
   * @public
   */
  ToAddresses?: EmailAddressInfo[] | undefined;

  /**
   * <p>The <b>additional</b> recipients information present in cc list. You must have 1
   *    required recipient (<code>DestinationEmailAddress</code>). You can then specify up to 49 additional recipients
   *    (across <code>ToAddresses</code> and <code>CcAddresses</code>), for a total of 50 recipients.</p>
   * @public
   */
  CcAddresses?: EmailAddressInfo[] | undefined;
}

/**
 * <p>Information about the email attachment files.</p>
 * @public
 */
export interface EmailAttachment {
  /**
   * <p>A case-sensitive name of the attached file being uploaded.</p>
   * @public
   */
  FileName: string | undefined;

  /**
   * <p>The pre-signed URLs for the S3 bucket where the email attachment is stored.</p>
   * @public
   */
  S3Url: string | undefined;
}

/**
 * <p>Information about the raw email body content.</p>
 * @public
 */
export interface InboundRawMessage {
  /**
   * <p>The email subject.</p>
   * @public
   */
  Subject: string | undefined;

  /**
   * <p>The email message body.</p>
   * @public
   */
  Body: string | undefined;

  /**
   * <p>Type of content, that is, <code>text/plain</code> or <code>text/html</code>.</p>
   * @public
   */
  ContentType: string | undefined;

  /**
   * <p>Headers present in inbound email.</p>
   * @public
   */
  Headers?: Partial<Record<EmailHeaderType, string>> | undefined;
}

/**
 * <p>Information about email body content.</p>
 * @public
 */
export interface InboundEmailContent {
  /**
   * <p>The message source type, that is, <code>RAW</code>.</p>
   * @public
   */
  MessageSourceType: InboundMessageSourceType | undefined;

  /**
   * <p>The raw email body content.</p>
   * @public
   */
  RawMessage?: InboundRawMessage | undefined;
}

/**
 * @public
 */
export interface StartEmailContactResponse {
  /**
   * <p>The identifier of this contact within the Amazon Connect instance.</p>
   * @public
   */
  ContactId?: string | undefined;
}

/**
 * @public
 */
export interface StartOutboundChatContactResponse {
  /**
   * <p>The identifier of this contact within the Amazon Connect instance.</p>
   * @public
   */
  ContactId?: string | undefined;
}
