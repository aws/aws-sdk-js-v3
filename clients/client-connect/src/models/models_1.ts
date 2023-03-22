// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { ConnectServiceException as __BaseException } from "./ConnectServiceException";
import {
  ActionSummary,
  AgentStatusState,
  Attribute,
  Channel,
  ContactFlowModuleState,
  ContactFlowState,
  ContactFlowType,
  DirectoryType,
  EventSourceName,
  HierarchyGroupSummary,
  HoursOfOperationConfig,
  InstanceAttributeType,
  InstanceStatus,
  InstanceStorageConfig,
  InstanceStorageResourceType,
  IntegrationType,
  LexBot,
  MediaConcurrency,
  MonitorCapability,
  OutboundCallerConfig,
  PhoneNumberCountryCode,
  PhoneNumberType,
  Queue,
  QueueStatus,
  QuickConnectConfig,
  QuickConnectType,
  Reference,
  ReferenceType,
  RoutingProfile,
  RoutingProfileQueueConfig,
  RuleAction,
  RulePublishStatus,
  SourceType,
  TaskTemplateConstraints,
  TaskTemplateDefaults,
  TaskTemplateField,
  TaskTemplateStatus,
  TelephonyConfig,
  TrafficDistributionGroupStatus,
  UseCaseType,
  UserIdentityInfo,
  UserPhoneConfig,
  VocabularyLanguageCode,
  VocabularyState,
} from "./models_0";

/**
 * @public
 */
export interface ListContactFlowModulesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The state of the flow module.</p>
   */
  ContactFlowModuleState?: ContactFlowModuleState | string;
}

/**
 * @public
 * <p>Contains summary information about a flow.</p>
 */
export interface ContactFlowModuleSummary {
  /**
   * <p>The identifier of the flow module.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow module.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the flow module.</p>
   */
  Name?: string;

  /**
   * <p>The type of flow module.</p>
   */
  State?: ContactFlowModuleState | string;
}

/**
 * @public
 */
export interface ListContactFlowModulesResponse {
  /**
   * <p>Information about the flow module.</p>
   */
  ContactFlowModulesSummaryList?: ContactFlowModuleSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListContactFlowsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of flow.</p>
   */
  ContactFlowTypes?: (ContactFlowType | string)[];

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains summary information about a flow.</p>
 *          <p>You can also create and update flows using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html">Amazon Connect
 *    Flow language</a>.</p>
 */
export interface ContactFlowSummary {
  /**
   * <p>The identifier of the flow.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the flow.</p>
   */
  Name?: string;

  /**
   * <p>The type of flow.</p>
   */
  ContactFlowType?: ContactFlowType | string;

  /**
   * <p>The type of flow.</p>
   */
  ContactFlowState?: ContactFlowState | string;
}

/**
 * @public
 */
export interface ListContactFlowsResponse {
  /**
   * <p>Information about the flows.</p>
   */
  ContactFlowSummaryList?: ContactFlowSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListContactReferencesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the initial contact.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The type of reference.</p>
   */
  ReferenceTypes: (ReferenceType | string)[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   *          <important>
   *             <p>This is not expected to be set, because the value returned in the previous response is
   *     always null.</p>
   *          </important>
   */
  NextToken?: string;
}

/**
 * @public
 */
export enum ReferenceStatus {
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}

/**
 * @public
 * <p>Information about a reference when the <code>referenceType</code> is
 *    <code>ATTACHMENT</code>. Otherwise, null.</p>
 */
export interface AttachmentReference {
  /**
   * <p>Identifier of the attachment reference.</p>
   */
  Name?: string;

  /**
   * <p>The location path of the attachment reference.</p>
   */
  Value?: string;

  /**
   * <p>Status of the attachment reference type.</p>
   */
  Status?: ReferenceStatus | string;
}

/**
 * @public
 * <p>Information about a reference when the <code>referenceType</code> is <code>DATE</code>.
 *    Otherwise, null.</p>
 */
export interface DateReference {
  /**
   * <p>Identifier of the date reference.</p>
   */
  Name?: string;

  /**
   * <p>A valid date.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Information about a reference when the <code>referenceType</code> is <code>EMAIL</code>.
 *    Otherwise, null.</p>
 */
export interface EmailReference {
  /**
   * <p>Identifier of the email reference.</p>
   */
  Name?: string;

  /**
   * <p>A valid email address.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Information about a reference when the <code>referenceType</code> is <code>NUMBER</code>.
 *    Otherwise, null.</p>
 */
export interface NumberReference {
  /**
   * <p>Identifier of the number reference.</p>
   */
  Name?: string;

  /**
   * <p>A valid number.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Information about a reference when the <code>referenceType</code> is <code>STRING</code>.
 *    Otherwise, null.</p>
 */
export interface StringReference {
  /**
   * <p>Identifier of the string reference.</p>
   */
  Name?: string;

  /**
   * <p>A valid string.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>The URL reference.</p>
 */
export interface UrlReference {
  /**
   * <p>Identifier of the URL reference.</p>
   */
  Name?: string;

  /**
   * <p>A valid URL.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Contains summary information about a reference. <code>ReferenceSummary</code> contains only
 *    one non null field between the URL and attachment based on the reference type.</p>
 */
export type ReferenceSummary =
  | ReferenceSummary.AttachmentMember
  | ReferenceSummary.DateMember
  | ReferenceSummary.EmailMember
  | ReferenceSummary.NumberMember
  | ReferenceSummary.StringMember
  | ReferenceSummary.UrlMember
  | ReferenceSummary.$UnknownMember;

/**
 * @public
 */
export namespace ReferenceSummary {
  /**
   * <p>Information about the reference when the <code>referenceType</code> is <code>URL</code>.
   *    Otherwise, null.</p>
   */
  export interface UrlMember {
    Url: UrlReference;
    Attachment?: never;
    String?: never;
    Number?: never;
    Date?: never;
    Email?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about the reference when the <code>referenceType</code> is
   *     <code>ATTACHMENT</code>. Otherwise, null.</p>
   */
  export interface AttachmentMember {
    Url?: never;
    Attachment: AttachmentReference;
    String?: never;
    Number?: never;
    Date?: never;
    Email?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about a reference when the <code>referenceType</code> is <code>STRING</code>.
   *    Otherwise, null.</p>
   */
  export interface StringMember {
    Url?: never;
    Attachment?: never;
    String: StringReference;
    Number?: never;
    Date?: never;
    Email?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about a reference when the <code>referenceType</code> is <code>NUMBER</code>.
   *    Otherwise, null.</p>
   */
  export interface NumberMember {
    Url?: never;
    Attachment?: never;
    String?: never;
    Number: NumberReference;
    Date?: never;
    Email?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about a reference when the <code>referenceType</code> is <code>DATE</code>.
   *    Otherwise, null.</p>
   */
  export interface DateMember {
    Url?: never;
    Attachment?: never;
    String?: never;
    Number?: never;
    Date: DateReference;
    Email?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about a reference when the <code>referenceType</code> is <code>EMAIL</code>.
   *    Otherwise, null.</p>
   */
  export interface EmailMember {
    Url?: never;
    Attachment?: never;
    String?: never;
    Number?: never;
    Date?: never;
    Email: EmailReference;
    $unknown?: never;
  }

  export interface $UnknownMember {
    Url?: never;
    Attachment?: never;
    String?: never;
    Number?: never;
    Date?: never;
    Email?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Url: (value: UrlReference) => T;
    Attachment: (value: AttachmentReference) => T;
    String: (value: StringReference) => T;
    Number: (value: NumberReference) => T;
    Date: (value: DateReference) => T;
    Email: (value: EmailReference) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ReferenceSummary, visitor: Visitor<T>): T => {
    if (value.Url !== undefined) return visitor.Url(value.Url);
    if (value.Attachment !== undefined) return visitor.Attachment(value.Attachment);
    if (value.String !== undefined) return visitor.String(value.String);
    if (value.Number !== undefined) return visitor.Number(value.Number);
    if (value.Date !== undefined) return visitor.Date(value.Date);
    if (value.Email !== undefined) return visitor.Email(value.Email);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface ListContactReferencesResponse {
  /**
   * <p>Information about the flows.</p>
   */
  ReferenceSummaryList?: ReferenceSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <important>
   *             <p>This is always returned as null in the response.</p>
   *          </important>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDefaultVocabulariesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   */
  LanguageCode?: VocabularyLanguageCode | string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains information about a default vocabulary.</p>
 */
export interface DefaultVocabulary {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   */
  LanguageCode: VocabularyLanguageCode | string | undefined;

  /**
   * <p>The identifier of the custom vocabulary.</p>
   */
  VocabularyId: string | undefined;

  /**
   * <p>A unique name of the custom vocabulary.</p>
   */
  VocabularyName: string | undefined;
}

/**
 * @public
 */
export interface ListDefaultVocabulariesResponse {
  /**
   * <p>A list of default vocabularies.</p>
   */
  DefaultVocabularyList: DefaultVocabulary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHoursOfOperationsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains summary information about hours of operation for a contact center.</p>
 */
export interface HoursOfOperationSummary {
  /**
   * <p>The identifier of the hours of operation.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the hours of operation.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the hours of operation.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface ListHoursOfOperationsResponse {
  /**
   * <p>Information about the hours of operation.</p>
   */
  HoursOfOperationSummaryList?: HoursOfOperationSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInstanceAttributesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListInstanceAttributesResponse {
  /**
   * <p>The attribute types.</p>
   */
  Attributes?: Attribute[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInstancesRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Information about the instance.</p>
 */
export interface InstanceSummary {
  /**
   * <p>The identifier of the instance.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the instance.</p>
   */
  Arn?: string;

  /**
   * <p>The identity management type of the instance.</p>
   */
  IdentityManagementType?: DirectoryType | string;

  /**
   * <p>The alias of the instance.</p>
   */
  InstanceAlias?: string;

  /**
   * <p>When the instance was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The service role of the instance.</p>
   */
  ServiceRole?: string;

  /**
   * <p>The state of the instance.</p>
   */
  InstanceStatus?: InstanceStatus | string;

  /**
   * <p>Whether inbound calls are enabled.</p>
   */
  InboundCallsEnabled?: boolean;

  /**
   * <p>Whether outbound calls are enabled.</p>
   */
  OutboundCallsEnabled?: boolean;
}

/**
 * @public
 */
export interface ListInstancesResponse {
  /**
   * <p>Information about the instances.</p>
   */
  InstanceSummaryList?: InstanceSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInstanceStorageConfigsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>A valid resource type.</p>
   */
  ResourceType: InstanceStorageResourceType | string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListInstanceStorageConfigsResponse {
  /**
   * <p>A valid storage type.</p>
   */
  StorageConfigs?: InstanceStorageConfig[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListIntegrationAssociationsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The integration type.</p>
   */
  IntegrationType?: IntegrationType | string;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains summary information about the associated AppIntegrations.</p>
 */
export interface IntegrationAssociationSummary {
  /**
   * <p>The identifier for the AppIntegration association.</p>
   */
  IntegrationAssociationId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the AppIntegration association.</p>
   */
  IntegrationAssociationArn?: string;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The integration type.</p>
   */
  IntegrationType?: IntegrationType | string;

  /**
   * <p>The Amazon Resource Name (ARN) for the AppIntegration.</p>
   */
  IntegrationArn?: string;

  /**
   * <p>The URL for the external application.</p>
   */
  SourceApplicationUrl?: string;

  /**
   * <p>The user-provided, friendly name for the external application.</p>
   */
  SourceApplicationName?: string;

  /**
   * <p>The name of the source.</p>
   */
  SourceType?: SourceType | string;
}

/**
 * @public
 */
export interface ListIntegrationAssociationsResponse {
  /**
   * <p>The associations.</p>
   */
  IntegrationAssociationSummaryList?: IntegrationAssociationSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLambdaFunctionsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListLambdaFunctionsResponse {
  /**
   * <p>The Lambdafunction ARNs associated with the specified instance.</p>
   */
  LambdaFunctions?: string[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLexBotsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. If no value is specified, the default is 10.
   *    </p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListLexBotsResponse {
  /**
   * <p>The names and Amazon Web Services Regions of the Amazon Lex bots associated with the
   *    specified instance.</p>
   */
  LexBots?: LexBot[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPhoneNumbersRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of phone number.</p>
   */
  PhoneNumberTypes?: (PhoneNumberType | string)[];

  /**
   * <p>The ISO country code.</p>
   */
  PhoneNumberCountryCodes?: (PhoneNumberCountryCode | string)[];

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains summary information about a phone number for a contact center.</p>
 */
export interface PhoneNumberSummary {
  /**
   * <p>The identifier of the phone number.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   */
  Arn?: string;

  /**
   * <p>The phone number.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>The type of phone number.</p>
   */
  PhoneNumberType?: PhoneNumberType | string;

  /**
   * <p>The ISO country code.</p>
   */
  PhoneNumberCountryCode?: PhoneNumberCountryCode | string;
}

/**
 * @public
 */
export interface ListPhoneNumbersResponse {
  /**
   * <p>Information about the phone numbers.</p>
   */
  PhoneNumberSummaryList?: PhoneNumberSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPhoneNumbersV2Request {
  /**
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to. If <code>TargetArn</code> input is not provided, this API lists numbers claimed
   *    to all the Amazon Connect instances belonging to your account in the same Amazon Web Services Region as the request.</p>
   */
  TargetArn?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ISO country code.</p>
   */
  PhoneNumberCountryCodes?: (PhoneNumberCountryCode | string)[];

  /**
   * <p>The type of phone number.</p>
   */
  PhoneNumberTypes?: (PhoneNumberType | string)[];

  /**
   * <p>The prefix of the phone number. If provided, it must contain <code>+</code> as part of the country code.</p>
   */
  PhoneNumberPrefix?: string;
}

/**
 * @public
 * <p>Information about phone numbers that have been claimed to your Amazon Connect instance
 *    or traffic distribution group.</p>
 */
export interface ListPhoneNumbersSummary {
  /**
   * <p>A unique identifier for the phone number.</p>
   */
  PhoneNumberId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   */
  PhoneNumberArn?: string;

  /**
   * <p>The phone number. Phone numbers are formatted <code>[+] [country code] [subscriber number including area code]</code>.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>The ISO country code.</p>
   */
  PhoneNumberCountryCode?: PhoneNumberCountryCode | string;

  /**
   * <p>The type of phone number.</p>
   */
  PhoneNumberType?: PhoneNumberType | string;

  /**
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to.</p>
   */
  TargetArn?: string;
}

/**
 * @public
 */
export interface ListPhoneNumbersV2Response {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about phone numbers that have been claimed to your Amazon Connect instances
   *    or traffic distribution groups.</p>
   */
  ListPhoneNumbersSummaryList?: ListPhoneNumbersSummary[];
}

/**
 * @public
 */
export interface ListPromptsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains information about the prompt.</p>
 */
export interface PromptSummary {
  /**
   * <p>The identifier of the prompt.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the prompt.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the prompt.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface ListPromptsResponse {
  /**
   * <p>Information about the prompts.</p>
   */
  PromptSummaryList?: PromptSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListQueueQuickConnectsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains summary information about a quick connect.</p>
 */
export interface QuickConnectSummary {
  /**
   * <p>The identifier for the quick connect.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the quick connect.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the quick connect.</p>
   */
  Name?: string;

  /**
   * <p>The type of quick connect. In the Amazon Connect console, when you create a quick connect, you are
   *    prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).</p>
   */
  QuickConnectType?: QuickConnectType | string;
}

/**
 * @public
 */
export interface ListQueueQuickConnectsResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the quick connects.</p>
   */
  QuickConnectSummaryList?: QuickConnectSummary[];
}

/**
 * @public
 */
export enum QueueType {
  AGENT = "AGENT",
  STANDARD = "STANDARD",
}

/**
 * @public
 */
export interface ListQueuesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of queue.</p>
   */
  QueueTypes?: (QueueType | string)[];

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains summary information about a queue.</p>
 */
export interface QueueSummary {
  /**
   * <p>The identifier of the queue.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the queue.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the queue.</p>
   */
  Name?: string;

  /**
   * <p>The type of queue.</p>
   */
  QueueType?: QueueType | string;
}

/**
 * @public
 */
export interface ListQueuesResponse {
  /**
   * <p>Information about the queues.</p>
   */
  QueueSummaryList?: QueueSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListQuickConnectsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>The type of quick connect. In the Amazon Connect console, when you create a quick connect, you are
   *    prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).</p>
   */
  QuickConnectTypes?: (QuickConnectType | string)[];
}

/**
 * @public
 */
export interface ListQuickConnectsResponse {
  /**
   * <p>Information about the quick connects.</p>
   */
  QuickConnectSummaryList?: QuickConnectSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRoutingProfileQueuesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains summary information about a routing profile queue.</p>
 */
export interface RoutingProfileQueueConfigSummary {
  /**
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the queue.</p>
   */
  QueueArn: string | undefined;

  /**
   * <p>The name of the queue.</p>
   */
  QueueName: string | undefined;

  /**
   * <p>The order in which contacts are to be handled for the queue. For more information, see
   *     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and
   *     delay</a>.</p>
   */
  Priority: number | undefined;

  /**
   * <p>The delay, in seconds, that a contact should be in the queue before they are routed to an
   *    available agent. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and
   *     delay</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   */
  Delay: number | undefined;

  /**
   * <p>The channels this queue supports.</p>
   */
  Channel: Channel | string | undefined;
}

/**
 * @public
 */
export interface ListRoutingProfileQueuesResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the routing profiles.</p>
   */
  RoutingProfileQueueConfigSummaryList?: RoutingProfileQueueConfigSummary[];
}

/**
 * @public
 */
export interface ListRoutingProfilesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains summary information about a routing profile.</p>
 */
export interface RoutingProfileSummary {
  /**
   * <p>The identifier of the routing profile.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the routing profile.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the routing profile.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface ListRoutingProfilesResponse {
  /**
   * <p>Information about the routing profiles.</p>
   */
  RoutingProfileSummaryList?: RoutingProfileSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRulesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The publish status of the rule.</p>
   */
  PublishStatus?: RulePublishStatus | string;

  /**
   * <p>The name of the event source.</p>
   */
  EventSourceName?: EventSourceName | string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A list of <code>ActionTypes</code> associated with a rule. </p>
 */
export interface RuleSummary {
  /**
   * <p>The name of the rule.</p>
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for the rule.</p>
   */
  RuleId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  RuleArn: string | undefined;

  /**
   * <p>The name of the event source.</p>
   */
  EventSourceName: EventSourceName | string | undefined;

  /**
   * <p>The publish status of the rule.</p>
   */
  PublishStatus: RulePublishStatus | string | undefined;

  /**
   * <p>A list of ActionTypes associated with a rule. </p>
   */
  ActionSummaries: ActionSummary[] | undefined;

  /**
   * <p>The timestamp for when the rule was created. </p>
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The timestamp for when the rule was last updated.</p>
   */
  LastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListRulesResponse {
  /**
   * <p>Summary information about a rule.</p>
   */
  RuleSummaryList: RuleSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSecurityKeysRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Configuration information of the security key.</p>
 */
export interface SecurityKey {
  /**
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   */
  AssociationId?: string;

  /**
   * <p>The key of the security key.</p>
   */
  Key?: string;

  /**
   * <p>When the security key was created.</p>
   */
  CreationTime?: Date;
}

/**
 * @public
 */
export interface ListSecurityKeysResponse {
  /**
   * <p>The security keys.</p>
   */
  SecurityKeys?: SecurityKey[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSecurityProfilePermissionsRequest {
  /**
   * <p>The identifier for the security profle.</p>
   */
  SecurityProfileId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListSecurityProfilePermissionsResponse {
  /**
   * <p>The permissions granted to the security profile. For a complete list of valid permissions,
   *    see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html">List
   *     of security profile permissions</a>.</p>
   */
  Permissions?: string[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSecurityProfilesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains information about a security profile.</p>
 */
export interface SecurityProfileSummary {
  /**
   * <p>The identifier of the security profile.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the security profile.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the security profile.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface ListSecurityProfilesResponse {
  /**
   * <p>Information about the security profiles.</p>
   */
  SecurityProfileSummaryList?: SecurityProfileSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. All Amazon Connect resources (instances, queues, flows, routing
   *    profiles, etc) have an ARN. To locate the ARN for an instance, for example, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">Find your Amazon Connect instance ID/ARN</a>. </p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Information about the tags.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListTaskTemplatesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   *          <important>
   *             <p>It is not expected that you set this because the value returned in the previous response is
   *     always null.</p>
   *          </important>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   *          <important>
   *             <p>It is not expected that you set this.</p>
   *          </important>
   */
  MaxResults?: number;

  /**
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.</p>
   */
  Status?: TaskTemplateStatus | string;

  /**
   * <p>The name of the task template.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>Contains summary information about the task template.</p>
 */
export interface TaskTemplateMetadata {
  /**
   * <p>A unique identifier for the task template.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the task template.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the task template.</p>
   */
  Name?: string;

  /**
   * <p>The description of the task template.</p>
   */
  Description?: string;

  /**
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.</p>
   */
  Status?: TaskTemplateStatus | string;

  /**
   * <p>The timestamp when the task template was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The timestamp when the task template was created.</p>
   */
  CreatedTime?: Date;
}

/**
 * @public
 */
export interface ListTaskTemplatesResponse {
  /**
   * <p>Provides details about a list of task templates belonging to an instance.</p>
   */
  TaskTemplates?: TaskTemplateMetadata[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <important>
   *             <p>This is always returned as a null in the response.</p>
   *          </important>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTrafficDistributionGroupsRequest {
  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId?: string;
}

/**
 * @public
 * <p>Information about traffic distribution groups.</p>
 */
export interface TrafficDistributionGroupSummary {
  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the traffic distribution group.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the traffic distribution group.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the traffic distribution group.</p>
   */
  InstanceArn?: string;

  /**
   * <p>The status of the traffic distribution group. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATION_IN_PROGRESS</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateTrafficDistributionGroup.html">CreateTrafficDistributionGroup</a> operation is still in progress and has not yet
   *      completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateTrafficDistributionGroup.html">CreateTrafficDistributionGroup</a> operation has succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATION_FAILED</code> indicates that the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateTrafficDistributionGroup.html">CreateTrafficDistributionGroup</a> operation has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_DELETION</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteTrafficDistributionGroup.html">DeleteTrafficDistributionGroup</a> operation is still in progress and has not yet
   *      completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETION_FAILED</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteTrafficDistributionGroup.html">DeleteTrafficDistributionGroup</a> operation has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateTrafficDistributionGroup.html">UpdateTrafficDistributionGroup</a> operation is still in progress and has not yet
   *      completed.</p>
   *             </li>
   *          </ul>
   */
  Status?: TrafficDistributionGroupStatus | string;
}

/**
 * @public
 */
export interface ListTrafficDistributionGroupsResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of traffic distribution groups.</p>
   */
  TrafficDistributionGroupSummaryList?: TrafficDistributionGroupSummary[];
}

/**
 * @public
 * <p>Provides summary information about the use cases for the specified integration
 *    association.</p>
 */
export interface ListUseCasesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the integration association.</p>
   */
  IntegrationAssociationId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains the
 *    use
 *    case.</p>
 */
export interface UseCase {
  /**
   * <p>The identifier for the use case.</p>
   */
  UseCaseId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the use case.</p>
   */
  UseCaseArn?: string;

  /**
   * <p>The type of use case to associate to the integration association. Each integration
   *    association can have only one of each use case type.</p>
   */
  UseCaseType?: UseCaseType | string;
}

/**
 * @public
 */
export interface ListUseCasesResponse {
  /**
   * <p>The use cases.</p>
   */
  UseCaseSummaryList?: UseCase[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListUserHierarchyGroupsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListUserHierarchyGroupsResponse {
  /**
   * <p>Information about the hierarchy groups.</p>
   */
  UserHierarchyGroupSummaryList?: HierarchyGroupSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains summary information about a user.</p>
 */
export interface UserSummary {
  /**
   * <p>The identifier of the user account.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user account.</p>
   */
  Arn?: string;

  /**
   * <p>The Amazon Connect user name of the user account.</p>
   */
  Username?: string;
}

/**
 * @public
 */
export interface ListUsersResponse {
  /**
   * <p>Information about the users.</p>
   */
  UserSummaryList?: UserSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface MonitorContactRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the
   *    instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;

  /**
   * <p>Specify which monitoring actions the user is allowed to take. For example, whether the user
   *    is allowed to escalate from silent monitoring to barge.</p>
   */
  AllowedMonitorCapabilities?: (MonitorCapability | string)[];

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface MonitorContactResponse {
  /**
   * <p>The identifier of the contact.</p>
   */
  ContactId?: string;

  /**
   * <p>The ARN of the contact.</p>
   */
  ContactArn?: string;
}

/**
 * @public
 */
export interface PutUserStatusRequest {
  /**
   * <p>The identifier of the user.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the agent status.</p>
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
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface ReplicateInstanceRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance. You can provide the <code>InstanceId</code>, or the entire ARN.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The Amazon Web Services Region where to replicate the Amazon Connect instance.</p>
   */
  ReplicaRegion: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The alias for the replicated instance. The <code>ReplicaAlias</code> must be unique.</p>
   */
  ReplicaAlias: string | undefined;
}

/**
 * @public
 */
export interface ReplicateInstanceResponse {
  /**
   * <p>The identifier of the replicated instance. You can find the <code>instanceId</code> in the
   *    ARN of the instance. The replicated instance has the same identifier as the instance it was
   *    replicated from.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the replicated instance.</p>
   */
  Arn?: string;
}

/**
 * @public
 */
export interface ResumeContactRecordingRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
   */
  InitialContactId: string | undefined;
}

/**
 * @public
 */
export interface ResumeContactRecordingResponse {}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to.</p>
   */
  TargetArn: string | undefined;

  /**
   * <p>The ISO country code.</p>
   */
  PhoneNumberCountryCode: PhoneNumberCountryCode | string | undefined;

  /**
   * <p>The type of phone number.</p>
   */
  PhoneNumberType: PhoneNumberType | string | undefined;

  /**
   * <p>The prefix of the phone number. If provided, it must contain <code>+</code> as part of the country code.</p>
   */
  PhoneNumberPrefix?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Information about available phone numbers.</p>
 */
export interface AvailableNumberSummary {
  /**
   * <p>The phone number. Phone numbers are formatted <code>[+] [country code] [subscriber number including area code]</code>.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>The ISO country code.</p>
   */
  PhoneNumberCountryCode?: PhoneNumberCountryCode | string;

  /**
   * <p>The type of phone number.</p>
   */
  PhoneNumberType?: PhoneNumberType | string;
}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of available phone numbers that you can claim to your Amazon Connect instance or traffic distribution group.</p>
   */
  AvailableNumbersList?: AvailableNumberSummary[];
}

/**
 * @public
 */
export enum SearchableQueueType {
  STANDARD = "STANDARD",
}

/**
 * @public
 */
export enum StringComparisonType {
  CONTAINS = "CONTAINS",
  EXACT = "EXACT",
  STARTS_WITH = "STARTS_WITH",
}

/**
 * @public
 * <p>A leaf node condition which can be used to specify a string condition. </p>
 *          <note>
 *             <p>The currently supported value for <code>FieldName</code>: <code>name</code>
 *             </p>
 *          </note>
 */
export interface StringCondition {
  /**
   * <p>The name of the field in the string condition.</p>
   */
  FieldName?: string;

  /**
   * <p>The value of the string.</p>
   */
  Value?: string;

  /**
   * <p>The type of comparison to be made when evaluating the string condition.</p>
   */
  ComparisonType?: StringComparisonType | string;
}

/**
 * @public
 * <p>A leaf node condition which can be used to specify a tag condition, for example, <code>HAVE
 *     BPO = 123</code>. </p>
 */
export interface TagCondition {
  /**
   * <p>The tag key in the tag condition.</p>
   */
  TagKey?: string;

  /**
   * <p>The tag value in the tag condition.</p>
   */
  TagValue?: string;
}

/**
 * @public
 * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>.
 *    This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p>
 *          <ul>
 *             <li>
 *                <p>Top level list specifies conditions that need to be applied with <code>OR</code>
 *      operator</p>
 *             </li>
 *             <li>
 *                <p>Inner list specifies conditions that need to be applied with <code>AND</code>
 *      operator.</p>
 *             </li>
 *          </ul>
 */
export interface ControlPlaneTagFilter {
  /**
   * <p>A list of conditions which would be applied together with an <code>OR</code> condition.
   *   </p>
   */
  OrConditions?: TagCondition[][];

  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code>
   *    condition.</p>
   */
  AndConditions?: TagCondition[];

  /**
   * <p>A leaf node condition which can be used to specify a tag condition. </p>
   */
  TagCondition?: TagCondition;
}

/**
 * @public
 * <p>Filters to be applied to search results.</p>
 */
export interface QueueSearchFilter {
  /**
   * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>.
   *    This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p>
   *          <ul>
   *             <li>
   *                <p>Top level list specifies conditions that need to be applied with <code>OR</code>
   *      operator</p>
   *             </li>
   *             <li>
   *                <p>Inner list specifies conditions that need to be applied with <code>AND</code>
   *      operator.</p>
   *             </li>
   *          </ul>
   */
  TagFilter?: ControlPlaneTagFilter;
}

/**
 * @public
 */
export interface SearchQueuesResponse {
  /**
   * <p>Information about the queues.</p>
   */
  Queues?: Queue[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of queues which matched your search query.</p>
   */
  ApproximateTotalCount?: number;
}

/**
 * @public
 * <p>Filters to be applied to search results.</p>
 */
export interface RoutingProfileSearchFilter {
  /**
   * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>.
   *    This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p>
   *          <ul>
   *             <li>
   *                <p>Top level list specifies conditions that need to be applied with <code>OR</code>
   *      operator</p>
   *             </li>
   *             <li>
   *                <p>Inner list specifies conditions that need to be applied with <code>AND</code>
   *      operator.</p>
   *             </li>
   *          </ul>
   */
  TagFilter?: ControlPlaneTagFilter;
}

/**
 * @public
 */
export interface SearchRoutingProfilesResponse {
  /**
   * <p>Information about the routing profiles.</p>
   */
  RoutingProfiles?: RoutingProfile[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of routing profiles which matched your search query.</p>
   */
  ApproximateTotalCount?: number;
}

/**
 * @public
 * <p>Filters to be applied to search results.</p>
 */
export interface SecurityProfilesSearchFilter {
  /**
   * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>.
   *    This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p>
   *          <ul>
   *             <li>
   *                <p>Top level list specifies conditions that need to be applied with <code>OR</code>
   *      operator</p>
   *             </li>
   *             <li>
   *                <p>Inner list specifies conditions that need to be applied with <code>AND</code>
   *      operator.</p>
   *             </li>
   *          </ul>
   */
  TagFilter?: ControlPlaneTagFilter;
}

/**
 * @public
 * <p>Information about the returned security profiles.</p>
 */
export interface SecurityProfileSearchSummary {
  /**
   * <p>The identifier of the security profile.</p>
   */
  Id?: string;

  /**
   * <p>The organization resource identifier.</p>
   */
  OrganizationResourceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the security profile.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the security profile.</p>
   */
  SecurityProfileName?: string;

  /**
   * <p>The description of the security profile.</p>
   */
  Description?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface SearchSecurityProfilesResponse {
  /**
   * <p>Information about the security profiles.</p>
   */
  SecurityProfiles?: SecurityProfileSearchSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of security profiles which matched your search query.</p>
   */
  ApproximateTotalCount?: number;
}

/**
 * @public
 */
export enum HierarchyGroupMatchType {
  EXACT = "EXACT",
  WITH_CHILD_GROUPS = "WITH_CHILD_GROUPS",
}

/**
 * @public
 * <p>A leaf node condition which can be used to specify a hierarchy group condition.</p>
 */
export interface HierarchyGroupCondition {
  /**
   * <p>The value in the hierarchy group condition.</p>
   */
  Value?: string;

  /**
   * <p>The type of hierarchy group match.</p>
   */
  HierarchyGroupMatchType?: HierarchyGroupMatchType | string;
}

/**
 * @public
 * <p>Filters to be applied to search results.</p>
 */
export interface UserSearchFilter {
  /**
   * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>.
   *    This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p>
   *          <ul>
   *             <li>
   *                <p>Top level list specifies conditions that need to be applied with <code>OR</code>
   *      operator</p>
   *             </li>
   *             <li>
   *                <p>Inner list specifies conditions that need to be applied with <code>AND</code>
   *      operator.</p>
   *             </li>
   *          </ul>
   */
  TagFilter?: ControlPlaneTagFilter;
}

/**
 * @public
 * <p>The user's first name and last name.</p>
 */
export interface UserIdentityInfoLite {
  /**
   * <p>The user's first name.</p>
   */
  FirstName?: string;

  /**
   * <p>The user's last name.</p>
   */
  LastName?: string;
}

/**
 * @public
 * <p>Information about the returned users.</p>
 */
export interface UserSearchSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the user.</p>
   */
  Arn?: string;

  /**
   * <p>The directory identifier of the user.</p>
   */
  DirectoryUserId?: string;

  /**
   * <p>The identifier of the user's hierarchy group.</p>
   */
  HierarchyGroupId?: string;

  /**
   * <p>The identifier of the user's summary.</p>
   */
  Id?: string;

  /**
   * <p>The user's first name and last name.</p>
   */
  IdentityInfo?: UserIdentityInfoLite;

  /**
   * <p>Contains information about the phone configuration settings for a user.</p>
   */
  PhoneConfig?: UserPhoneConfig;

  /**
   * <p>The identifier of the user's routing profile.</p>
   */
  RoutingProfileId?: string;

  /**
   * <p>The identifiers of the user's security profiles.</p>
   */
  SecurityProfileIds?: string[];

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The name of the user.</p>
   */
  Username?: string;
}

/**
 * @public
 */
export interface SearchUsersResponse {
  /**
   * <p>Information about the users.</p>
   */
  Users?: UserSearchSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of users who matched your search query.</p>
   */
  ApproximateTotalCount?: number;
}

/**
 * @public
 */
export interface SearchVocabulariesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The current state of the custom vocabulary.</p>
   */
  State?: VocabularyState | string;

  /**
   * <p>The starting pattern of the name of the vocabulary.</p>
   */
  NameStartsWith?: string;

  /**
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   */
  LanguageCode?: VocabularyLanguageCode | string;
}

/**
 * @public
 * <p>Contains summary information about the custom vocabulary.</p>
 */
export interface VocabularySummary {
  /**
   * <p>A unique name of the custom vocabulary.</p>
   */
  Name: string | undefined;

  /**
   * <p>The identifier of the custom vocabulary.</p>
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the custom vocabulary.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   */
  LanguageCode: VocabularyLanguageCode | string | undefined;

  /**
   * <p>The current state of the custom vocabulary.</p>
   */
  State: VocabularyState | string | undefined;

  /**
   * <p>The timestamp when the custom vocabulary was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The reason why the custom vocabulary was not created.</p>
   */
  FailureReason?: string;
}

/**
 * @public
 */
export interface SearchVocabulariesResponse {
  /**
   * <p>The list of the available custom vocabularies.</p>
   */
  VocabularySummaryList?: VocabularySummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A chat message.</p>
 */
export interface ChatMessage {
  /**
   * <p>The type of the content. Supported types are <code>text/plain</code>,
   *     <code>text/markdown</code>, and <code>application/json</code>.</p>
   */
  ContentType: string | undefined;

  /**
   * <p>The content of the chat message. </p>
   *          <ul>
   *             <li>
   *                <p>For <code>text/plain</code> and <code>text/markdown</code>, the Length Constraints are
   *      Minimum of 1, Maximum of 1024. </p>
   *             </li>
   *             <li>
   *                <p>For <code>application/json</code>, the Length Constraints are Minimum of 1, Maximum of
   *      12000. </p>
   *             </li>
   *          </ul>
   */
  Content: string | undefined;
}

/**
 * @public
 * <p>The customer's details.</p>
 */
export interface ParticipantDetails {
  /**
   * <p>Display name of the participant.</p>
   */
  DisplayName: string | undefined;
}

/**
 * @public
 */
export enum RehydrationType {
  ENTIRE_PAST_SESSION = "ENTIRE_PAST_SESSION",
  FROM_SEGMENT = "FROM_SEGMENT",
}

/**
 * @public
 * <p>Enable persistent chats. For more information about enabling persistent chat, and for
 *    example use cases and how to configure for them, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent chat</a>.</p>
 */
export interface PersistentChat {
  /**
   * <p>The contactId that is used for rehydration depends on the rehydration type. RehydrationType
   *    is required for persistent chat. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENTIRE_PAST_SESSION</code>: Rehydrates a chat from the most recently terminated past
   *      chat contact of the specified past ended chat session. To use this type, provide the
   *       <code>initialContactId</code> of the past ended chat session in the
   *       <code>sourceContactId</code> field. In this type, Amazon Connect determines the most
   *      recent chat contact on the specified chat session that has ended, and uses it to start a
   *      persistent chat. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FROM_SEGMENT</code>: Rehydrates a chat from the past chat contact that is specified
   *      in the <code>sourceContactId</code> field. </p>
   *             </li>
   *          </ul>
   *          <p>The actual contactId used for rehydration is provided in the response of this API. </p>
   */
  RehydrationType?: RehydrationType | string;

  /**
   * <p>The contactId from which a persistent chat session must be started.</p>
   */
  SourceContactId?: string;
}

/**
 * @public
 */
export interface StartChatContactRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow for initiating the chat.
   *    To
   *    see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go
   *    to <b>Routing</b>, <b>Contact Flows</b>.
   *    Choose the flow. On the flow page, under the name of the flow, choose <b>Show
   *     additional flow information</b>. The ContactFlowId is the last part of the ARN, shown
   *    here in bold: </p>
   *          <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b>
   *          </p>
   */
  ContactFlowId: string | undefined;

  /**
   * <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes. They can be accessed in flows just like any other contact attributes. </p>
   *          <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys
   *    can include only alphanumeric, dash, and underscore characters.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * <p>Information identifying the participant.</p>
   */
  ParticipantDetails: ParticipantDetails | undefined;

  /**
   * <p>The initial message to be sent to the newly created chat.</p>
   */
  InitialMessage?: ChatMessage;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The total duration of the newly started chat session. If not specified, the chat session
   *    duration defaults to 25 hour. The minumum configurable time is 60 minutes. The maximum
   *    configurable time is 10,080 minutes (7 days).</p>
   */
  ChatDurationInMinutes?: number;

  /**
   * <p>The supported chat message content types. Content types must always contain
   *     <code>text/plain</code>. You can then put any other supported type in the list. For example, all
   *    the following lists are valid because they contain <code>text/plain</code>: <code>[text/plain,
   *     text/markdown, application/json]</code>, <code>[text/markdown, text/plain]</code>,
   *     <code>[text/plain, application/json]</code>.</p>
   */
  SupportedMessagingContentTypes?: string[];

  /**
   * <p>Enable persistent chats. For more information about enabling persistent chat, and for
   *    example use cases and how to configure for them, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent chat</a>.</p>
   */
  PersistentChat?: PersistentChat;
}

/**
 * @public
 */
export interface StartChatContactResponse {
  /**
   * <p>The identifier of this contact within the Amazon Connect instance. </p>
   */
  ContactId?: string;

  /**
   * <p>The identifier for a chat participant. The participantId for a chat participant is the same
   *    throughout the chat lifecycle.</p>
   */
  ParticipantId?: string;

  /**
   * <p>The token used by the chat participant to call <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a>. The participant token is valid for the lifetime of a chat
   *    participant.</p>
   */
  ParticipantToken?: string;

  /**
   * <p>The contactId from which a persistent chat session is started. This field is populated only
   *    for persistent chats.</p>
   */
  ContinuedFromContactId?: string;
}

/**
 * @public
 */
export enum VoiceRecordingTrack {
  ALL = "ALL",
  FROM_AGENT = "FROM_AGENT",
  TO_AGENT = "TO_AGENT",
}

/**
 * @public
 * <p>Contains information about the recording configuration settings.</p>
 */
export interface VoiceRecordingConfiguration {
  /**
   * <p>Identifies which track is being recorded.</p>
   */
  VoiceRecordingTrack?: VoiceRecordingTrack | string;
}

/**
 * @public
 */
export interface StartContactRecordingRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
   */
  InitialContactId: string | undefined;

  /**
   * <p>The person being recorded.</p>
   */
  VoiceRecordingConfiguration: VoiceRecordingConfiguration | undefined;
}

/**
 * @public
 */
export interface StartContactRecordingResponse {}

/**
 * @public
 * <p>The streaming configuration, such as the Amazon SNS streaming endpoint.</p>
 */
export interface ChatStreamingConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the standard Amazon SNS topic. The Amazon Resource Name (ARN) of the streaming endpoint that is used
   *    to publish real-time message streaming for chat conversations.</p>
   */
  StreamingEndpointArn: string | undefined;
}

/**
 * @public
 */
export interface StartContactStreamingRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The streaming configuration, such as the Amazon SNS streaming endpoint.</p>
   */
  ChatStreamingConfiguration: ChatStreamingConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface StartContactStreamingResponse {
  /**
   * <p>The identifier of the streaming configuration enabled. </p>
   */
  StreamingId: string | undefined;
}

/**
 * @public
 * <p>Outbound calls to the destination number are not allowed.</p>
 */
export class DestinationNotAllowedException extends __BaseException {
  readonly name: "DestinationNotAllowedException" = "DestinationNotAllowedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message about the outbound calls.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DestinationNotAllowedException, __BaseException>) {
    super({
      name: "DestinationNotAllowedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DestinationNotAllowedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The contact is not permitted.</p>
 */
export class OutboundContactNotPermittedException extends __BaseException {
  readonly name: "OutboundContactNotPermittedException" = "OutboundContactNotPermittedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message about the contact.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OutboundContactNotPermittedException, __BaseException>) {
    super({
      name: "OutboundContactNotPermittedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OutboundContactNotPermittedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Configuration of the answering machine detection.</p>
 */
export interface AnswerMachineDetectionConfig {
  /**
   * <p>The flag to indicate if answer machine detection analysis needs to be performed for a voice
   *    call. If set to <code>true</code>, <code>TrafficType</code> must be set as <code>CAMPAIGN</code>.
   *   </p>
   */
  EnableAnswerMachineDetection?: boolean;

  /**
   * <p>Wait for the answering machine prompt.</p>
   */
  AwaitAnswerMachinePrompt?: boolean;
}

/**
 * @public
 */
export enum TrafficType {
  CAMPAIGN = "CAMPAIGN",
  GENERAL = "GENERAL",
}

/**
 * @public
 */
export interface StartOutboundVoiceContactRequest {
  /**
   * <p>The phone number of the customer, in E.164 format.</p>
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * <p>The
   *    identifier of the flow for the outbound call. To see the ContactFlowId in the Amazon Connect
   *    console user interface, on the navigation menu go to <b>Routing</b>,
   *     <b>Contact Flows</b>. Choose the flow. On the flow page, under the
   *    name of the flow, choose <b>Show additional flow information</b>. The
   *    ContactFlowId is the last part of the ARN, shown here in bold: </p>
   *          <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b>
   *          </p>
   */
  ContactFlowId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>. The token is valid for 7 days after creation. If a contact is already started,
   *    the contact ID is returned.
   *    </p>
   */
  ClientToken?: string;

  /**
   * <p>The phone number associated with the Amazon Connect instance, in E.164 format. If you do
   *    not specify a source phone number, you must specify a queue.</p>
   */
  SourcePhoneNumber?: string;

  /**
   * <p>The queue for the call. If you specify a queue, the phone displayed for caller ID is the
   *    phone number specified in the queue. If you do not specify a queue, the queue defined in the flow
   *    is used. If you do not specify a queue, you must specify a source phone number.</p>
   */
  QueueId?: string;

  /**
   * <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes.</p>
   *          <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys
   *    can include only alphanumeric, dash, and underscore characters.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * <p>Configuration of the answering machine detection for this outbound call. </p>
   */
  AnswerMachineDetectionConfig?: AnswerMachineDetectionConfig;

  /**
   * <p>The campaign identifier of the outbound communication.</p>
   */
  CampaignId?: string;

  /**
   * <p>Denotes the class of traffic. Calls with different traffic types are handled differently by
   *     Amazon Connect. The default value is <code>GENERAL</code>. Use <code>CAMPAIGN</code> if
   *     <code>EnableAnswerMachineDetection</code> is set to <code>true</code>. For all other cases, use
   *     <code>GENERAL</code>. </p>
   */
  TrafficType?: TrafficType | string;
}

/**
 * @public
 */
export interface StartOutboundVoiceContactResponse {
  /**
   * <p>The identifier of this contact within the Amazon Connect instance.</p>
   */
  ContactId?: string;
}

/**
 * @public
 */
export interface StartTaskContactRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the previous chat, voice, or task contact. </p>
   */
  PreviousContactId?: string;

  /**
   * <p>The identifier of the flow for initiating the tasks. To see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go to <b>Routing</b>, <b>Contact Flows</b>. Choose the flow. On the
   *    flow page, under the name of the flow, choose <b>Show additional flow
   *     information</b>. The ContactFlowId is the last part of the ARN, shown here in bold: </p>
   *          <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b>
   *          </p>
   */
  ContactFlowId?: string;

  /**
   * <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes.</p>
   *          <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys
   *    can include only alphanumeric, dash, and underscore characters.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * <p>The name of a task that is shown to an agent in the Contact Control Panel (CCP).</p>
   */
  Name: string | undefined;

  /**
   * <p>A formatted URL that is shown to an agent in the Contact Control Panel (CCP).</p>
   */
  References?: Record<string, Reference>;

  /**
   * <p>A description of the task that is shown to an agent in the Contact Control Panel
   *    (CCP).</p>
   */
  Description?: string;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The timestamp, in Unix Epoch seconds format, at which to start running the inbound flow. The scheduled time cannot be in the past. It must be within up to 6 days in future. </p>
   */
  ScheduledTime?: Date;

  /**
   * <p>A unique identifier for the task template.</p>
   */
  TaskTemplateId?: string;

  /**
   * <p>The identifier for the quick connect.</p>
   */
  QuickConnectId?: string;

  /**
   * <p>The contactId that is <a href="https://docs.aws.amazon.com/connect/latest/adminguide/tasks.html#linked-tasks">related</a> to this
   *    contact.</p>
   */
  RelatedContactId?: string;
}

/**
 * @public
 */
export interface StartTaskContactResponse {
  /**
   * <p>The identifier of this contact within the Amazon Connect instance.</p>
   */
  ContactId?: string;
}

/**
 * @public
 * <p>The contact with the specified ID is not active or does not exist. Applies to Voice calls
 *    only, not to Chat, Task, or Voice Callback.</p>
 */
export class ContactNotFoundException extends __BaseException {
  readonly name: "ContactNotFoundException" = "ContactNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ContactNotFoundException, __BaseException>) {
    super({
      name: "ContactNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ContactNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface StopContactRequest {
  /**
   * <p>The ID of the contact.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface StopContactResponse {}

/**
 * @public
 */
export interface StopContactRecordingRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
   */
  InitialContactId: string | undefined;
}

/**
 * @public
 */
export interface StopContactRecordingResponse {}

/**
 * @public
 */
export interface StopContactStreamingRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact. This is the identifier of the contact that is associated with
   *    the first interaction with the contact center.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the streaming configuration enabled. </p>
   */
  StreamingId: string | undefined;
}

/**
 * @public
 */
export interface StopContactStreamingResponse {}

/**
 * @public
 */
export interface SuspendContactRecordingRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
   */
  InitialContactId: string | undefined;
}

/**
 * @public
 */
export interface SuspendContactRecordingResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TransferContactRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   */
  QueueId?: string;

  /**
   * <p>The identifier for the user.</p>
   */
  UserId?: string;

  /**
   * <p>The identifier of the flow.</p>
   */
  ContactFlowId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface TransferContactResponse {
  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   */
  ContactId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the contact.</p>
   */
  ContactArn?: string;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAgentStatusRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the agent status.</p>
   */
  AgentStatusId: string | undefined;

  /**
   * <p>The name of the agent status.</p>
   */
  Name?: string;

  /**
   * <p>The description of the agent status.</p>
   */
  Description?: string;

  /**
   * <p>The state of the agent status.</p>
   */
  State?: AgentStatusState | string;

  /**
   * <p>The display order of the agent status.</p>
   */
  DisplayOrder?: number;

  /**
   * <p>A number indicating the reset order of the agent status.</p>
   */
  ResetOrderNumber?: boolean;
}

/**
 * @public
 */
export interface UpdateContactRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with your contact center.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The name of the contact.</p>
   */
  Name?: string;

  /**
   * <p>The description of the contact.</p>
   */
  Description?: string;

  /**
   * <p>Well-formed data on contact, shown to agents on Contact Control Panel (CCP).</p>
   */
  References?: Record<string, Reference>;
}

/**
 * @public
 */
export interface UpdateContactResponse {}

/**
 * @public
 */
export interface UpdateContactAttributesRequest {
  /**
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
   */
  InitialContactId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The Amazon Connect attributes. These attributes can be accessed in flows just like any
   *    other contact attributes.</p>
   *          <p>You can have up to 32,768 UTF-8 bytes across all attributes for a contact. Attribute keys
   *    can include only alphanumeric, dash, and underscore characters.</p>
   */
  Attributes: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateContactAttributesResponse {}

/**
 * @public
 */
export interface UpdateContactFlowContentRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   */
  ContactFlowId: string | undefined;

  /**
   * <p>The JSON string that represents flow's content. For an example, see <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language-example.html">Example
   *     contact flow in Amazon Connect Flow language</a>. </p>
   */
  Content: string | undefined;
}

/**
 * @public
 */
export interface UpdateContactFlowContentResponse {}

/**
 * @public
 */
export interface UpdateContactFlowMetadataRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   */
  ContactFlowId: string | undefined;

  /**
   * <p>The name of the flow.</p>
   */
  Name?: string;

  /**
   * <p>The description of the flow.</p>
   */
  Description?: string;

  /**
   * <p>The state of flow.</p>
   */
  ContactFlowState?: ContactFlowState | string;
}

/**
 * @public
 */
export interface UpdateContactFlowMetadataResponse {}

/**
 * @public
 */
export interface UpdateContactFlowModuleContentRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow module.</p>
   */
  ContactFlowModuleId: string | undefined;

  /**
   * <p>The content of the flow module.</p>
   */
  Content: string | undefined;
}

/**
 * @public
 */
export interface UpdateContactFlowModuleContentResponse {}

/**
 * @public
 */
export interface UpdateContactFlowModuleMetadataRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow module.</p>
   */
  ContactFlowModuleId: string | undefined;

  /**
   * <p>The name of the flow module.</p>
   */
  Name?: string;

  /**
   * <p>The description of the flow module.</p>
   */
  Description?: string;

  /**
   * <p>The state of flow module.</p>
   */
  State?: ContactFlowModuleState | string;
}

/**
 * @public
 */
export interface UpdateContactFlowModuleMetadataResponse {}

/**
 * @public
 */
export interface UpdateContactFlowNameRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   */
  ContactFlowId: string | undefined;

  /**
   * <p>The name of the flow.</p>
   */
  Name?: string;

  /**
   * <p>The description of the flow.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateContactFlowNameResponse {}

/**
 * @public
 */
export interface UpdateContactScheduleRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The timestamp, in Unix Epoch seconds format, at which to start running the inbound flow. The scheduled time cannot be in the past. It must be within up to 6 days in future. </p>
   */
  ScheduledTime: Date | undefined;
}

/**
 * @public
 */
export interface UpdateContactScheduleResponse {}

/**
 * @public
 */
export interface UpdateHoursOfOperationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the hours of operation.</p>
   */
  HoursOfOperationId: string | undefined;

  /**
   * <p>The name of the hours of operation.</p>
   */
  Name?: string;

  /**
   * <p>The description of the hours of operation.</p>
   */
  Description?: string;

  /**
   * <p>The time zone of the hours of operation.</p>
   */
  TimeZone?: string;

  /**
   * <p>Configuration information of the hours of operation.</p>
   */
  Config?: HoursOfOperationConfig[];
}

/**
 * @public
 */
export interface UpdateInstanceAttributeRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of attribute.</p>
   *          <note>
   *             <p>Only allowlisted customers can consume USE_CUSTOM_TTS_VOICES. To access this feature,
   *     contact Amazon Web Services Support for allowlisting.</p>
   *          </note>
   */
  AttributeType: InstanceAttributeType | string | undefined;

  /**
   * <p>The value for the attribute. Maximum character limit is 100. </p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface UpdateInstanceStorageConfigRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   */
  AssociationId: string | undefined;

  /**
   * <p>A valid resource type.</p>
   */
  ResourceType: InstanceStorageResourceType | string | undefined;

  /**
   * <p>The storage configuration for the instance.</p>
   */
  StorageConfig: InstanceStorageConfig | undefined;
}

/**
 * @public
 */
export enum TimerEligibleParticipantRoles {
  AGENT = "AGENT",
  CUSTOMER = "CUSTOMER",
}

/**
 * @public
 */
export enum ParticipantTimerType {
  DISCONNECT_NONCUSTOMER = "DISCONNECT_NONCUSTOMER",
  IDLE = "IDLE",
}

/**
 * @public
 */
export enum ParticipantTimerAction {
  Unset = "Unset",
}

/**
 * @public
 * <p>The value of the timer. Either the timer action (<code>Unset</code> to delete the timer), or
 *    the duration of the timer in minutes. Only one value can be set.</p>
 *          <p>For more information about how chat timeouts work, see
 *    <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-chat-timeouts.html">Set up chat timeouts for human participants</a>. </p>
 */
export type ParticipantTimerValue =
  | ParticipantTimerValue.ParticipantTimerActionMember
  | ParticipantTimerValue.ParticipantTimerDurationInMinutesMember
  | ParticipantTimerValue.$UnknownMember;

/**
 * @public
 */
export namespace ParticipantTimerValue {
  /**
   * <p>The timer action. Currently only one value is allowed: <code>Unset</code>. It deletes a
   *    timer.</p>
   */
  export interface ParticipantTimerActionMember {
    ParticipantTimerAction: ParticipantTimerAction | string;
    ParticipantTimerDurationInMinutes?: never;
    $unknown?: never;
  }

  /**
   * <p>The duration of a timer, in minutes. </p>
   */
  export interface ParticipantTimerDurationInMinutesMember {
    ParticipantTimerAction?: never;
    ParticipantTimerDurationInMinutes: number;
    $unknown?: never;
  }

  export interface $UnknownMember {
    ParticipantTimerAction?: never;
    ParticipantTimerDurationInMinutes?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    ParticipantTimerAction: (value: ParticipantTimerAction | string) => T;
    ParticipantTimerDurationInMinutes: (value: number) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ParticipantTimerValue, visitor: Visitor<T>): T => {
    if (value.ParticipantTimerAction !== undefined) return visitor.ParticipantTimerAction(value.ParticipantTimerAction);
    if (value.ParticipantTimerDurationInMinutes !== undefined)
      return visitor.ParticipantTimerDurationInMinutes(value.ParticipantTimerDurationInMinutes);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Configuration information for the timer. After the timer configuration is set, it persists
 *    for the duration of the chat. It persists across new contacts in the chain, for example, transfer
 *    contacts.</p>
 *          <p>For more information about how chat timeouts work, see
 *    <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-chat-timeouts.html">Set up chat timeouts for human participants</a>. </p>
 */
export interface ParticipantTimerConfiguration {
  /**
   * <p>The role of the participant in the chat conversation.</p>
   */
  ParticipantRole: TimerEligibleParticipantRoles | string | undefined;

  /**
   * <p>The type of timer. <code>IDLE</code> indicates the timer applies for considering a human
   *    chat participant as idle. <code>DISCONNECT_NONCUSTOMER</code> indicates the timer applies to
   *    automatically disconnecting a chat participant due to idleness.</p>
   */
  TimerType: ParticipantTimerType | string | undefined;

  /**
   * <p>The value of the timer. Either the timer action (Unset to delete the timer), or the duration
   *    of the timer in minutes. Only one value can be set.</p>
   */
  TimerValue: ParticipantTimerValue | undefined;
}

/**
 * @public
 * <p>Configuration information for the chat participant role.</p>
 */
export interface ChatParticipantRoleConfig {
  /**
   * <p>A list of participant timers. You can specify any unique combination of role and timer type.
   *    Duplicate entries error out the request with a 400.</p>
   */
  ParticipantTimerConfigList: ParticipantTimerConfiguration[] | undefined;
}

/**
 * @public
 * <p>Configuration information for the chat participant role.</p>
 */
export type UpdateParticipantRoleConfigChannelInfo =
  | UpdateParticipantRoleConfigChannelInfo.ChatMember
  | UpdateParticipantRoleConfigChannelInfo.$UnknownMember;

/**
 * @public
 */
export namespace UpdateParticipantRoleConfigChannelInfo {
  /**
   * <p>Configuration information for the chat participant role.</p>
   */
  export interface ChatMember {
    Chat: ChatParticipantRoleConfig;
    $unknown?: never;
  }

  export interface $UnknownMember {
    Chat?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Chat: (value: ChatParticipantRoleConfig) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: UpdateParticipantRoleConfigChannelInfo, visitor: Visitor<T>): T => {
    if (value.Chat !== undefined) return visitor.Chat(value.Chat);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface UpdateParticipantRoleConfigRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   */
  ContactId: string | undefined;

  /**
   * <p>The Amazon Connect channel you want to configure.</p>
   */
  ChannelConfiguration: UpdateParticipantRoleConfigChannelInfo | undefined;
}

/**
 * @public
 */
export interface UpdateParticipantRoleConfigResponse {}

/**
 * @public
 */
export interface UpdatePhoneNumberRequest {
  /**
   * <p>A unique identifier for the phone number.</p>
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to.</p>
   */
  TargetArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface UpdatePhoneNumberResponse {
  /**
   * <p>A unique identifier for the phone number.</p>
   */
  PhoneNumberId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   */
  PhoneNumberArn?: string;
}

/**
 * @public
 */
export interface UpdateQueueHoursOfOperationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * <p>The identifier for the hours of operation.</p>
   */
  HoursOfOperationId: string | undefined;
}

/**
 * @public
 */
export interface UpdateQueueMaxContactsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * <p>The maximum number of contacts that can be in the queue before it is considered full.</p>
   */
  MaxContacts?: number;
}

/**
 * @public
 */
export interface UpdateQueueNameRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * <p>The name of the queue.</p>
   */
  Name?: string;

  /**
   * <p>The description of the queue.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateQueueOutboundCallerConfigRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * <p>The outbound caller ID name, number, and outbound whisper flow.</p>
   */
  OutboundCallerConfig: OutboundCallerConfig | undefined;
}

/**
 * @public
 */
export interface UpdateQueueStatusRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * <p>The status of the queue.</p>
   */
  Status: QueueStatus | string | undefined;
}

/**
 * @public
 */
export interface UpdateQuickConnectConfigRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the quick connect.</p>
   */
  QuickConnectId: string | undefined;

  /**
   * <p>Information about the configuration settings for the quick connect.</p>
   */
  QuickConnectConfig: QuickConnectConfig | undefined;
}

/**
 * @public
 */
export interface UpdateQuickConnectNameRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the quick connect.</p>
   */
  QuickConnectId: string | undefined;

  /**
   * <p>The name of the quick connect.</p>
   */
  Name?: string;

  /**
   * <p>The description of the quick connect.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateRoutingProfileConcurrencyRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The channels that agents can handle in the Contact Control Panel (CCP).</p>
   */
  MediaConcurrencies: MediaConcurrency[] | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingProfileDefaultOutboundQueueRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The identifier for the default outbound queue.</p>
   */
  DefaultOutboundQueueId: string | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingProfileNameRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The name of the routing profile. Must not be more than 127 characters.</p>
   */
  Name?: string;

  /**
   * <p>The description of the routing profile. Must not be more than 250 characters.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateRoutingProfileQueuesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The queues to be updated for this routing profile.
   *    Queues must first be associated to the routing
   *    profile. You can do this using AssociateRoutingProfileQueues.</p>
   */
  QueueConfigs: RoutingProfileQueueConfig[] | undefined;
}

/**
 * @public
 */
export interface UpdateRuleRequest {
  /**
   * <p>A unique identifier for the rule.</p>
   */
  RuleId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the rule. You can change the name only if <code>TriggerEventSource</code> is one
   *    of the following values: <code>OnZendeskTicketCreate</code> |
   *     <code>OnZendeskTicketStatusUpdate</code> | <code>OnSalesforceCaseCreate</code>
   *          </p>
   */
  Name: string | undefined;

  /**
   * <p>The conditions of the rule.</p>
   */
  Function: string | undefined;

  /**
   * <p>A list of actions to be run when the rule is triggered.</p>
   */
  Actions: RuleAction[] | undefined;

  /**
   * <p>The publish status of the rule.</p>
   */
  PublishStatus: RulePublishStatus | string | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityProfileRequest {
  /**
   * <p>The description of the security profile.</p>
   */
  Description?: string;

  /**
   * <p>The permissions granted to a security profile. For a list of valid permissions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html">List of security
   *     profile permissions</a>.</p>
   */
  Permissions?: string[];

  /**
   * <p>The identifier for the security profle.</p>
   */
  SecurityProfileId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The list of tags that a security profile uses to restrict access to resources in Amazon Connect.</p>
   */
  AllowedAccessControlTags?: Record<string, string>;

  /**
   * <p>The list of resources that a security profile applies tag restrictions to in Amazon Connect.</p>
   */
  TagRestrictedResources?: string[];
}

/**
 * @public
 */
export interface UpdateTaskTemplateRequest {
  /**
   * <p>A unique identifier for the task template.</p>
   */
  TaskTemplateId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the task template.</p>
   */
  Name?: string;

  /**
   * <p>The description of the task template.</p>
   */
  Description?: string;

  /**
   * <p>The identifier of the flow that runs by default when a task is created by referencing this template.</p>
   */
  ContactFlowId?: string;

  /**
   * <p>Constraints that are applicable to the fields listed.</p>
   */
  Constraints?: TaskTemplateConstraints;

  /**
   * <p>The default values for fields when a task is created by referencing this template.</p>
   */
  Defaults?: TaskTemplateDefaults;

  /**
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.</p>
   */
  Status?: TaskTemplateStatus | string;

  /**
   * <p>Fields that are part of the template.</p>
   */
  Fields?: TaskTemplateField[];
}

/**
 * @public
 */
export interface UpdateTaskTemplateResponse {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The identifier of the task template resource.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the task template resource.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the task template.</p>
   */
  Name?: string;

  /**
   * <p>The description of the task template.</p>
   */
  Description?: string;

  /**
   * <p>The identifier of the flow that runs by default when a task is created by referencing this template.</p>
   */
  ContactFlowId?: string;

  /**
   * <p>Constraints that are applicable to the fields listed.</p>
   */
  Constraints?: TaskTemplateConstraints;

  /**
   * <p>The default values for fields when a task is created by referencing this template.</p>
   */
  Defaults?: TaskTemplateDefaults;

  /**
   * <p>Fields that are part of the template.</p>
   */
  Fields?: TaskTemplateField[];

  /**
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.</p>
   */
  Status?: TaskTemplateStatus | string;

  /**
   * <p>The timestamp when the task template was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The timestamp when the task template was created.</p>
   */
  CreatedTime?: Date;
}

/**
 * @public
 */
export interface UpdateTrafficDistributionRequest {
  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   */
  Id: string | undefined;

  /**
   * <p>The distribution of traffic between the instance and its replica(s).</p>
   */
  TelephonyConfig?: TelephonyConfig;
}

/**
 * @public
 */
export interface UpdateTrafficDistributionResponse {}

/**
 * @public
 */
export interface UpdateUserHierarchyRequest {
  /**
   * <p>The identifier of the hierarchy group.</p>
   */
  HierarchyGroupId?: string;

  /**
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserHierarchyGroupNameRequest {
  /**
   * <p>The name of the hierarchy group. Must not be more than 100 characters.</p>
   */
  Name: string | undefined;

  /**
   * <p>The identifier of the hierarchy group.</p>
   */
  HierarchyGroupId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 * <p>Contains information about the hierarchy level to update.</p>
 */
export interface HierarchyLevelUpdate {
  /**
   * <p>The name of the user hierarchy level. Must not be more than 50 characters.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>Contains information about the level hierarchy to update.</p>
 */
export interface HierarchyStructureUpdate {
  /**
   * <p>The
   *    update
   *    for level one.</p>
   */
  LevelOne?: HierarchyLevelUpdate;

  /**
   * <p>The update for level two.</p>
   */
  LevelTwo?: HierarchyLevelUpdate;

  /**
   * <p>The update for level three.</p>
   */
  LevelThree?: HierarchyLevelUpdate;

  /**
   * <p>The update for level four.</p>
   */
  LevelFour?: HierarchyLevelUpdate;

  /**
   * <p>The update for level five.</p>
   */
  LevelFive?: HierarchyLevelUpdate;
}

/**
 * @public
 */
export interface UpdateUserHierarchyStructureRequest {
  /**
   * <p>The hierarchy levels to update.</p>
   */
  HierarchyStructure: HierarchyStructureUpdate | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserIdentityInfoRequest {
  /**
   * <p>The identity information for the user.</p>
   */
  IdentityInfo: UserIdentityInfo | undefined;

  /**
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserPhoneConfigRequest {
  /**
   * <p>Information about phone configuration settings for the user.</p>
   */
  PhoneConfig: UserPhoneConfig | undefined;

  /**
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserRoutingProfileRequest {
  /**
   * <p>The identifier of the routing profile for the user.</p>
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserSecurityProfilesRequest {
  /**
   * <p>The identifiers of the security profiles for the user.</p>
   */
  SecurityProfileIds: string[] | undefined;

  /**
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 * <p>The search criteria to be used to return queues.</p>
 *          <note>
 *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
 *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
 *     outside of this range will throw invalid results. </p>
 *          </note>
 */
export interface QueueSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   */
  OrConditions?: QueueSearchCriteria[];

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   */
  AndConditions?: QueueSearchCriteria[];

  /**
   * <p>A leaf node condition which can be used to specify a string condition. </p>
   *          <note>
   *             <p>The currently supported value for <code>FieldName</code>: <code>name</code>
   *             </p>
   *          </note>
   */
  StringCondition?: StringCondition;

  /**
   * <p>The type of queue.</p>
   */
  QueueTypeCondition?: SearchableQueueType | string;
}

/**
 * @public
 * <p>The search criteria to be used to return routing profiles.</p>
 *          <note>
 *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
 *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
 *     outside of this range will throw invalid results. </p>
 *          </note>
 */
export interface RoutingProfileSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   */
  OrConditions?: RoutingProfileSearchCriteria[];

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   */
  AndConditions?: RoutingProfileSearchCriteria[];

  /**
   * <p>A leaf node condition which can be used to specify a string condition. </p>
   *          <note>
   *             <p>The currently supported value for <code>FieldName</code>: <code>name</code>
   *             </p>
   *          </note>
   */
  StringCondition?: StringCondition;
}

/**
 * @public
 * <p>The search criteria to be used to return security profiles.</p>
 *          <note>
 *             <p>The <code>name</code> field support "contains" queries with a minimum of 2 characters and
 *     maximum of 25 characters. Any queries with character lengths outside of this range will throw
 *     invalid results.</p>
 *          </note>
 */
export interface SecurityProfileSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   */
  OrConditions?: SecurityProfileSearchCriteria[];

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   */
  AndConditions?: SecurityProfileSearchCriteria[];

  /**
   * <p>A leaf node condition which can be used to specify a string condition. </p>
   *          <note>
   *             <p>The currently supported value for <code>FieldName</code>: <code>name</code>
   *             </p>
   *          </note>
   */
  StringCondition?: StringCondition;
}

/**
 * @public
 * <p>The search criteria to be used to return users.</p>
 *          <note>
 *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
 *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
 *     outside of this range will throw invalid results.  </p>
 *          </note>
 */
export interface UserSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an <code>OR</code>
   *    condition.</p>
   */
  OrConditions?: UserSearchCriteria[];

  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code> condition.
   *   </p>
   */
  AndConditions?: UserSearchCriteria[];

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   */
  StringCondition?: StringCondition;

  /**
   * <p>A leaf node condition which can be used to specify a hierarchy group condition.</p>
   */
  HierarchyGroupCondition?: HierarchyGroupCondition;
}

/**
 * @public
 */
export interface SearchQueuesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filters to be applied to search results.</p>
   */
  SearchFilter?: QueueSearchFilter;

  /**
   * <p>The search criteria to be used to return queues.</p>
   *          <note>
   *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
   *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
   *     outside of this range will throw invalid results. </p>
   *          </note>
   */
  SearchCriteria?: QueueSearchCriteria;
}

/**
 * @public
 */
export interface SearchRoutingProfilesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filters to be applied to search results.</p>
   */
  SearchFilter?: RoutingProfileSearchFilter;

  /**
   * <p>The search criteria to be used to return routing profiles.</p>
   *          <note>
   *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
   *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
   *     outside of this range will throw invalid results. </p>
   *          </note>
   */
  SearchCriteria?: RoutingProfileSearchCriteria;
}

/**
 * @public
 */
export interface SearchSecurityProfilesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The search criteria to be used to return security profiles. </p>
   *          <note>
   *             <p>The <code>name</code> field support "contains" queries with a minimum of 2 characters and
   *     maximum of 25 characters. Any queries with character lengths outside of this range will throw
   *     invalid results.</p>
   *          </note>
   *          <note>
   *             <p>The currently supported value for <code>FieldName</code>: <code>name</code>
   *             </p>
   *          </note>
   */
  SearchCriteria?: SecurityProfileSearchCriteria;

  /**
   * <p>Filters to be applied to search results.</p>
   */
  SearchFilter?: SecurityProfilesSearchFilter;
}

/**
 * @public
 */
export interface SearchUsersRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filters to be applied to search results.</p>
   */
  SearchFilter?: UserSearchFilter;

  /**
   * <p>The search criteria to be used to return users.</p>
   *          <note>
   *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
   *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
   *     outside of this range will throw invalid results.  </p>
   *          </note>
   */
  SearchCriteria?: UserSearchCriteria;
}

/**
 * @internal
 */
export const InstanceSummaryFilterSensitiveLog = (obj: InstanceSummary): any => ({
  ...obj,
  ...(obj.InstanceAlias && { InstanceAlias: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListInstancesResponseFilterSensitiveLog = (obj: ListInstancesResponse): any => ({
  ...obj,
  ...(obj.InstanceSummaryList && {
    InstanceSummaryList: obj.InstanceSummaryList.map((item) => InstanceSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ReplicateInstanceRequestFilterSensitiveLog = (obj: ReplicateInstanceRequest): any => ({
  ...obj,
  ...(obj.ReplicaAlias && { ReplicaAlias: SENSITIVE_STRING }),
});
