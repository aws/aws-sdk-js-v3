// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { ConnectServiceException as __BaseException } from "./ConnectServiceException";

import {
  ActionSummary,
  AgentHierarchyGroups,
  AgentStatus,
  AgentStatusState,
  AllowedCapabilities,
  Application,
  Channel,
  ContactInitiationMethod,
  ControlPlaneAttributeFilter,
  CreatedByInfo,
  EventSourceName,
  FileStatusType,
  FileUseCaseType,
  HoursOfOperationConfig,
  HoursOfOperationOverrideConfig,
  InstanceStorageConfig,
  InstanceStorageResourceType,
  LexBot,
  MonitorCapability,
  ParticipantRole,
  QuickConnectType,
  Reference,
  RehydrationType,
  RulePublishStatus,
  StringComparisonType,
  StringCondition,
  TagCondition,
  TaskTemplateStatus,
  UseCaseType,
  UserPhoneConfig,
  UserProficiency,
  ViewStatus,
  ViewType,
  VocabularyLanguageCode,
  VocabularyState,
} from "./models_0";

import {
  ContactFlow,
  ContactFlowModule,
  ContactFlowModuleState,
  ContactFlowState,
  EvaluationAnswerData,
  EvaluationNote,
  HierarchyGroup,
  HierarchyGroupSummary,
  HoursOfOperation,
  HoursOfOperationOverride,
  InstanceAttributeType,
  IntegrationAssociationSummary,
  PhoneNumberCountryCode,
  PhoneNumberType,
  PredefinedAttribute,
  Prompt,
  Queue,
  QuickConnect,
  RoutingProfile,
  SortOrder,
  TrafficDistributionGroupStatus,
} from "./models_1";

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
   * <p>The maximum number of results to return per page. If no value is specified, the default is 10.
   *    </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListLexBotsResponse {
  /**
   * <p>The names and Amazon Web Services Regions of the Amazon Lex bots associated with the
   *    specified instance.</p>
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
   *             <p>We recommend using <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPhoneNumbersV2.html">ListPhoneNumbersV2</a> to
   *     return phone number types. While ListPhoneNumbers returns number types <code>UIFN</code>,
   *      <code>SHARED</code>, <code>THIRD_PARTY_TF</code>, and <code>THIRD_PARTY_DID</code>, it
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
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone number inbound traffic is routed through. If both <code>TargetArn</code> and <code>InstanceId</code> input are not
   *    provided, this API lists numbers claimed to all the Amazon Connect instances belonging to
   *    your account in the same Amazon Web Services Region as the request.</p>
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance that phone numbers are claimed to. You
   *    can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the
   *     instance ID</a> in the Amazon Resource Name (ARN) of the instance. If both <code>TargetArn</code> and <code>InstanceId</code> are not
   *    provided, this API lists numbers claimed to all the Amazon Connect instances belonging to your account in
   *    the same AWS Region as the request.</p>
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
 * <p>Information about phone numbers that have been claimed to your Amazon Connect instance
 *    or traffic distribution group.</p>
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
   * <p>The claimed phone number ARN that was previously imported from the external service, such as
   *     Amazon Web Services End User Messaging. If it is from Amazon Web Services End User Messaging, it
   *    looks like the ARN of the phone number that was imported from Amazon Web Services End User
   *    Messaging.</p>
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
   * <p>Information about phone numbers that have been claimed to your Amazon Connect instances
   *    or traffic distribution groups.</p>
   * @public
   */
  ListPhoneNumbersSummaryList?: ListPhoneNumbersSummary[] | undefined;
}

/**
 * @public
 */
export interface ListPredefinedAttributesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource
   *    Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
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
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
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
 * @enum
 */
export const QueueType = {
  AGENT: "AGENT",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type QueueType = (typeof QueueType)[keyof typeof QueueType];

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
 * @enum
 */
export const RealTimeContactAnalysisOutputType = {
  Raw: "Raw",
  Redacted: "Redacted",
} as const;

/**
 * @public
 */
export type RealTimeContactAnalysisOutputType =
  (typeof RealTimeContactAnalysisOutputType)[keyof typeof RealTimeContactAnalysisOutputType];

/**
 * @public
 * @enum
 */
export const RealTimeContactAnalysisSegmentType = {
  Attachments: "Attachments",
  Categories: "Categories",
  Event: "Event",
  Issues: "Issues",
  PostContactSummary: "PostContactSummary",
  Transcript: "Transcript",
} as const;

/**
 * @public
 */
export type RealTimeContactAnalysisSegmentType =
  (typeof RealTimeContactAnalysisSegmentType)[keyof typeof RealTimeContactAnalysisSegmentType];

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
   * <p>Enum with segment types . Each value corresponds to a segment type returned in the segments
   *    list of the API. Each segment type has its own structure. Different channels may have different
   *    sets of supported segment types.</p>
   * @public
   */
  SegmentTypes: RealTimeContactAnalysisSegmentType[] | undefined;
}

/**
 * @public
 * @enum
 */
export const RealTimeContactAnalysisSupportedChannel = {
  CHAT: "CHAT",
  VOICE: "VOICE",
} as const;

/**
 * @public
 */
export type RealTimeContactAnalysisSupportedChannel =
  (typeof RealTimeContactAnalysisSupportedChannel)[keyof typeof RealTimeContactAnalysisSupportedChannel];

/**
 * @public
 * @enum
 */
export const ArtifactStatus = {
  APPROVED: "APPROVED",
  IN_PROGRESS: "IN_PROGRESS",
  REJECTED: "REJECTED",
} as const;

/**
 * @public
 */
export type ArtifactStatus = (typeof ArtifactStatus)[keyof typeof ArtifactStatus];

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
   * <p>Describes the MIME file type of the attachment. For a list of supported file types, see
   *     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/feature-limits.html">Feature
   *     specifications</a> in the <i>Amazon Connect Administrator
   *    Guide</i>.</p>
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
 * <p>Object describing time with which the segment is associated. It can have different
 *    representations of time. Currently supported: absoluteTime</p>
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
   * <p>Time represented in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *    2019-11-08T02:41:28.172Z.</p>
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

  export interface Visitor<T> {
    AbsoluteTime: (value: Date) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RealTimeContactAnalysisTimeData, visitor: Visitor<T>): T => {
    if (value.AbsoluteTime !== undefined) return visitor.AbsoluteTime(value.AbsoluteTime);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
 * <p>Transcript representation containing Id and list of character intervals that are associated
 *    with analysis data. For example, this object within a
 *     <code>RealTimeContactAnalysisPointOfInterest</code> in <code>Category.MatchedDetails</code>
 *    would have character interval describing part of the text that matched category.</p>
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
   * <p>List of the transcript items (segments) that are associated with a given point of interest.
   *   </p>
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
   * <p>Type of the event. For example,
   *     <code>application/vnd.amazonaws.connect.event.participant.left</code>.</p>
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
 * <p>Transcript representation containing Id, Content and list of character intervals that are
 *    associated with analysis data. For example, this object within an issue detected would describe
 *    both content that contains identified issue and intervals where that content is taken
 *    from.</p>
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
 * <p>Potential issues that are detected based on an artificial intelligence analysis of each turn
 *    in the conversation.</p>
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
 * @public
 * @enum
 */
export const RealTimeContactAnalysisPostContactSummaryFailureCode = {
  FAILED_SAFETY_GUIDELINES: "FAILED_SAFETY_GUIDELINES",
  INSUFFICIENT_CONVERSATION_CONTENT: "INSUFFICIENT_CONVERSATION_CONTENT",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_ANALYSIS_CONFIGURATION: "INVALID_ANALYSIS_CONFIGURATION",
  QUOTA_EXCEEDED: "QUOTA_EXCEEDED",
} as const;

/**
 * @public
 */
export type RealTimeContactAnalysisPostContactSummaryFailureCode =
  (typeof RealTimeContactAnalysisPostContactSummaryFailureCode)[keyof typeof RealTimeContactAnalysisPostContactSummaryFailureCode];

/**
 * @public
 * @enum
 */
export const RealTimeContactAnalysisPostContactSummaryStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type RealTimeContactAnalysisPostContactSummaryStatus =
  (typeof RealTimeContactAnalysisPostContactSummaryStatus)[keyof typeof RealTimeContactAnalysisPostContactSummaryStatus];

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
   *                   <code>QUOTA_EXCEEDED</code>: The number of concurrent analytics jobs reached your service
   *      quota.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSUFFICIENT_CONVERSATION_CONTENT</code>: The conversation needs to have at least
   *      one turn from both the participants in order to generate the summary.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED_SAFETY_GUIDELINES</code>: The generated summary cannot be provided because it
   *      failed to meet system safety guidelines.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID_ANALYSIS_CONFIGURATION</code>: This code occurs when, for example, you're
   *      using a <a href="https://docs.aws.amazon.com/connect/latest/adminguide/supported-languages.html#supported-languages-contact-lens">language</a> that isn't supported by generative AI-powered post-contact summaries.
   *     </p>
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
   *     <code>OutputType.Raw</code>, part of the original text that contains data that can be redacted.
   *    For <code> OutputType.Redacted</code>, part of the string with redaction tag.</p>
   * @public
   */
  CharacterOffsets?: RealTimeContactAnalysisCharacterInterval[] | undefined;
}

/**
 * @public
 * @enum
 */
export const RealTimeContactAnalysisSentimentLabel = {
  NEGATIVE: "NEGATIVE",
  NEUTRAL: "NEUTRAL",
  POSITIVE: "POSITIVE",
} as const;

/**
 * @public
 */
export type RealTimeContactAnalysisSentimentLabel =
  (typeof RealTimeContactAnalysisSentimentLabel)[keyof typeof RealTimeContactAnalysisSentimentLabel];

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
   * <p>Object describing redaction that was applied to the transcript. If transcript has the field
   *    it means part of the transcript was redacted.</p>
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

  export interface Visitor<T> {
    Transcript: (value: RealTimeContactAnalysisSegmentTranscript) => T;
    Categories: (value: RealTimeContactAnalysisSegmentCategories) => T;
    Issues: (value: RealTimeContactAnalysisSegmentIssues) => T;
    Event: (value: RealTimeContactAnalysisSegmentEvent) => T;
    Attachments: (value: RealTimeContactAnalysisSegmentAttachments) => T;
    PostContactSummary: (value: RealTimeContactAnalysisSegmentPostContactSummary) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RealtimeContactAnalysisSegment, visitor: Visitor<T>): T => {
    if (value.Transcript !== undefined) return visitor.Transcript(value.Transcript);
    if (value.Categories !== undefined) return visitor.Categories(value.Categories);
    if (value.Issues !== undefined) return visitor.Issues(value.Issues);
    if (value.Event !== undefined) return visitor.Event(value.Event);
    if (value.Attachments !== undefined) return visitor.Attachments(value.Attachments);
    if (value.PostContactSummary !== undefined) return visitor.PostContactSummary(value.PostContactSummary);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const RealTimeContactAnalysisStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type RealTimeContactAnalysisStatus =
  (typeof RealTimeContactAnalysisStatus)[keyof typeof RealTimeContactAnalysisStatus];

/**
 * @public
 */
export interface ListRealtimeContactAnalysisSegmentsV2Response {
  /**
   * <p>The channel of the contact. </p>
   *          <important>
   *             <p>Only <code>CHAT</code> is supported. This API does not support <code>VOICE</code>. If you
   *     attempt to use it for the VOICE channel, an <code>InvalidRequestException</code> error
   *     occurs.</p>
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
 * <p>Thrown for analyzed content when requested OutputType was not enabled for a given contact.
 *    For example, if an OutputType.Raw was requested for a contact that had `RedactedOnly` Redaction
 *    policy set in the flow.</p>
 * @public
 */
export class OutputTypeNotFoundException extends __BaseException {
  readonly name: "OutputTypeNotFoundException" = "OutputTypeNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OutputTypeNotFoundException, __BaseException>) {
    super({
      name: "OutputTypeNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OutputTypeNotFoundException.prototype);
    this.Message = opts.Message;
  }
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
   * <p>The order in which contacts are to be handled for the queue. For more information, see
   *     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and
   *     delay</a>.</p>
   * @public
   */
  Priority: number | undefined;

  /**
   * <p>The delay, in seconds, that a contact should be in the queue before they are routed to an
   *    available agent. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and
   *     delay</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
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
   * <p>The permissions granted to the security profile. For a complete list of valid permissions,
   *    see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html">List
   *     of security profile permissions</a>.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource. All Amazon Connect resources (instances, queues, flows, routing
   *    profiles, etc) have an ARN. To locate the ARN for an instance, for example, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">Find your Amazon Connect instance ID/ARN</a>. </p>
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
   *             <p>It is not expected that you set this because the value returned in the previous response is
   *     always null.</p>
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
 * <p>Provides summary information about the use cases for the specified integration
 *    association.</p>
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
   * <p>The type of use case to associate to the integration association. Each integration
   *    association can have only one of each use case type.</p>
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
   * <p>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource
   *    Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the user account.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
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
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of
   *    the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of the view.</p>
   * @public
   */
  Type?: ViewType | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
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
   * <p>Indicates the view status as either <code>SAVED</code> or <code>PUBLISHED</code>. The
   *     <code>PUBLISHED</code> status will initiate validation on the content.</p>
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
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListViewVersionsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of
   *    the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the view. Both <code>ViewArn</code> and <code>ViewId</code> can be
   *    used.</p>
   * @public
   */
  ViewId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
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
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface MonitorContactRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of
   *    the instance.</p>
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
   * <p>Specify which monitoring actions the user is allowed to take. For example, whether the user
   *    is allowed to escalate from silent monitoring to barge. AllowedMonitorCapabilities is required if
   *    barge is enabled.</p>
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
   * <p>The identifier of the Amazon Connect instance. You can find the <code>instanceId</code> in the ARN of
   *    the instance.</p>
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
   * <p>The identifier of the replicated instance. You can find the <code>instanceId</code> in the
   *    ARN of the instance. The replicated instance has the same identifier as the instance it was
   *    replicated from.</p>
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
   * <p>The identifier of the Amazon Connect instance. You can find the <code>instanceId</code> in the ARN of
   *    the instance.</p>
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
 * @enum
 */
export const ContactRecordingType = {
  AGENT: "AGENT",
  IVR: "IVR",
  SCREEN: "SCREEN",
} as const;

/**
 * @public
 */
export type ContactRecordingType = (typeof ContactRecordingType)[keyof typeof ContactRecordingType];

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
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
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
 * @public
 */
export interface ControlPlaneTagFilter {
  /**
   * <p>A list of conditions which would be applied together with an <code>OR</code> condition.
   *   </p>
   * @public
   */
  OrConditions?: TagCondition[][] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code>
   *    condition.</p>
   * @public
   */
  AndConditions?: TagCondition[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a tag condition. </p>
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
 * <p>Filters to be applied to search results.</p>
 * @public
 */
export interface ContactFlowSearchFilter {
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
   * @public
   */
  TagFilter?: ControlPlaneTagFilter | undefined;
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
 * @public
 * @enum
 */
export const SearchContactsMatchType = {
  MATCH_ALL: "MATCH_ALL",
  MATCH_ANY: "MATCH_ANY",
} as const;

/**
 * @public
 */
export type SearchContactsMatchType = (typeof SearchContactsMatchType)[keyof typeof SearchContactsMatchType];

/**
 * <p>A structure that defines search criteria base on words or phrases, participants in the
 *    Contact Lens conversational analytics transcript.</p>
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
   * <p>The match type combining search criteria using multiple search texts in a transcript
   *    criteria.</p>
   * @public
   */
  MatchType: SearchContactsMatchType | undefined;
}

/**
 * <p>A structure that defines search criteria and matching logic to search for contacts by
 *    matching text with transcripts analyzed by Amazon Connect Contact Lens.</p>
 * @public
 */
export interface Transcript {
  /**
   * <p>The list of search criteria based on Contact Lens conversational analytics
   *    transcript.</p>
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
 * <p>A structure that defines search criteria for contacts using analysis outputs from Amazon Connect Contact Lens.</p>
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
 * <p>The search criteria based on user-defined contact attribute key and values to search
 *    on.</p>
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
 * <p>A structure that defines search criteria based on user-defined contact attributes that are
 *    configured for contact search.</p>
 * @public
 */
export interface SearchableContactAttributes {
  /**
   * <p>The list of criteria based on user-defined contact attributes that are configured for
   *    contact search.</p>
   * @public
   */
  Criteria: SearchableContactAttributesCriteria[] | undefined;

  /**
   * <p>The match type combining search criteria using multiple searchable contact
   *    attributes.</p>
   * @public
   */
  MatchType?: SearchContactsMatchType | undefined;
}

/**
 * <p>The search criteria based on searchable segment attribute key and values to search
 *    on.</p>
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
   * <p>The match type combining search criteria using multiple searchable segment
   *    attributes.</p>
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
   * <p>The search criteria based on user-defined contact attributes that have been configured for
   *    contact search. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/search-custom-attributes.html">Search by custom contact
   *     attributes</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   *          <important>
   *             <p>To use <code>SearchableContactAttributes</code> in a search request, the
   *      <code>GetContactAttributes</code> action is required to perform an API request. For more
   *     information, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnect.html#amazonconnect-actions-as-permissions">https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnect.html#amazonconnect-actions-as-permissions</a>Actions defined by Amazon Connect.</p>
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
 * @public
 * @enum
 */
export const SortableFieldName = {
  CHANNEL: "CHANNEL",
  CONNECTED_TO_AGENT_TIMESTAMP: "CONNECTED_TO_AGENT_TIMESTAMP",
  DISCONNECT_TIMESTAMP: "DISCONNECT_TIMESTAMP",
  INITIATION_METHOD: "INITIATION_METHOD",
  INITIATION_TIMESTAMP: "INITIATION_TIMESTAMP",
  SCHEDULED_TIMESTAMP: "SCHEDULED_TIMESTAMP",
} as const;

/**
 * @public
 */
export type SortableFieldName = (typeof SortableFieldName)[keyof typeof SortableFieldName];

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
 * @enum
 */
export const SearchContactsTimeRangeType = {
  CONNECTED_TO_AGENT_TIMESTAMP: "CONNECTED_TO_AGENT_TIMESTAMP",
  DISCONNECT_TIMESTAMP: "DISCONNECT_TIMESTAMP",
  INITIATION_TIMESTAMP: "INITIATION_TIMESTAMP",
  SCHEDULED_TIMESTAMP: "SCHEDULED_TIMESTAMP",
} as const;

/**
 * @public
 */
export type SearchContactsTimeRangeType =
  (typeof SearchContactsTimeRangeType)[keyof typeof SearchContactsTimeRangeType];

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
 * @public
 */
export interface SearchContactsRequest {
  /**
   * <p>The identifier of Amazon Connect instance. You can find the instance ID in the Amazon
   *    Resource Name (ARN) of the instance.</p>
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
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
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
 * <p>The value of a segment attribute. This is structured as a map with a single key-value pair.
 *    The key 'valueString' indicates that the attribute type is a string, and its corresponding value
 *    is the actual string value of the segment attribute.</p>
 * @public
 */
export interface ContactSearchSummarySegmentAttributeValue {
  /**
   * <p>The value of a segment attribute represented as a string.</p>
   * @public
   */
  ValueString?: string | undefined;
}

/**
 * <p>Information of returned contact.</p>
 * @public
 */
export interface ContactSearchSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The identifier of the contact summary.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>If this contact is related to other contacts, this is the ID of the initial contact.</p>
   * @public
   */
  InitialContactId?: string | undefined;

  /**
   * <p>If this contact is not the first contact, this is the ID of the previous contact.</p>
   * @public
   */
  PreviousContactId?: string | undefined;

  /**
   * <p>Indicates how the contact was initiated.</p>
   * @public
   */
  InitiationMethod?: ContactInitiationMethod | undefined;

  /**
   * <p>How the contact reached your contact center.</p>
   * @public
   */
  Channel?: Channel | undefined;

  /**
   * <p>If this contact was queued, this contains information about the queue.</p>
   * @public
   */
  QueueInfo?: ContactSearchSummaryQueueInfo | undefined;

  /**
   * <p>Information about the agent who accepted the contact.</p>
   * @public
   */
  AgentInfo?: ContactSearchSummaryAgentInfo | undefined;

  /**
   * <p>The date and time this contact was initiated, in UTC time. For <code>INBOUND</code>, this is
   *    when the contact arrived. For <code>OUTBOUND</code>, this is when the agent began dialing. For
   *     <code>CALLBACK</code>, this is when the callback contact was created. For <code>TRANSFER</code>
   *    and <code>QUEUE_TRANSFER</code>, this is when the transfer was initiated. For API, this is when
   *    the request arrived. For <code>EXTERNAL_OUTBOUND</code>, this is when the agent started dialing
   *    the external participant. For <code>MONITOR</code>, this is when the supervisor started listening
   *    to a contact.</p>
   * @public
   */
  InitiationTimestamp?: Date | undefined;

  /**
   * <p>The timestamp when the customer endpoint disconnected from Amazon Connect.</p>
   * @public
   */
  DisconnectTimestamp?: Date | undefined;

  /**
   * <p>The timestamp, in Unix epoch time format, at which to start running the inbound flow.</p>
   * @public
   */
  ScheduledTimestamp?: Date | undefined;

  /**
   * <p>Set of segment attributes for a contact.</p>
   * @public
   */
  SegmentAttributes?: Record<string, ContactSearchSummarySegmentAttributeValue> | undefined;
}

/**
 * @public
 */
export interface SearchContactsResponse {
  /**
   * <p>Information about the contacts.</p>
   * @public
   */
  Contacts: ContactSearchSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of contacts which matched your search query.</p>
   * @public
   */
  TotalCount?: number | undefined;
}

/**
 * <p>Filters to be applied to search results.</p>
 * @public
 */
export interface EmailAddressSearchFilter {
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
 * @public
 * @enum
 */
export const DateComparisonType = {
  EQUAL_TO: "EQUAL_TO",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO: "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO: "LESS_THAN_OR_EQUAL_TO",
} as const;

/**
 * @public
 */
export type DateComparisonType = (typeof DateComparisonType)[keyof typeof DateComparisonType];

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
   * <p>An object to specify the hours of operation override date condition
   *     <code>comparisonType</code>.</p>
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
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results. </p>
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
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
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
 * @public
 * @enum
 */
export const SearchableQueueType = {
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type SearchableQueueType = (typeof SearchableQueueType)[keyof typeof SearchableQueueType];

/**
 * <p>Filters to be applied to search results.</p>
 * @public
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
 * <p>Maximum number (1000) of tags have been returned with current request. Consider changing
 *    request parameters to get more tags.</p>
 * @public
 */
export class MaximumResultReturnedException extends __BaseException {
  readonly name: "MaximumResultReturnedException" = "MaximumResultReturnedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaximumResultReturnedException, __BaseException>) {
    super({
      name: "MaximumResultReturnedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaximumResultReturnedException.prototype);
    this.Message = opts.Message;
  }
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
   * <p>The type of comparison to be made when evaluating the tag key in tag search
   *    condition.</p>
   * @public
   */
  tagKeyComparisonType?: StringComparisonType | undefined;

  /**
   * <p>The type of comparison to be made when evaluating the tag value in tag search
   *    condition.</p>
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
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the Amazon
   *    Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The list of resource types to be used to search tags from. If not provided or if any empty
   *    list is provided, this API will search from all supported resource types. Note that lowercase and
   *    - are required.</p>
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
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
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
   * <p>An object that can be used to specify Tag conditions inside the SearchFilter. This accepts
   *    an OR or AND (List of List) input where:</p>
   *          <ul>
   *             <li>
   *                <p>The top level list specifies conditions that need to be applied with <code>OR</code>
   *      operator.</p>
   *             </li>
   *             <li>
   *                <p>The inner list specifies conditions that need to be applied with <code>AND</code>
   *      operator.</p>
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
 * @public
 * @enum
 */
export const HierarchyGroupMatchType = {
  EXACT: "EXACT",
  WITH_CHILD_GROUPS: "WITH_CHILD_GROUPS",
} as const;

/**
 * @public
 */
export type HierarchyGroupMatchType = (typeof HierarchyGroupMatchType)[keyof typeof HierarchyGroupMatchType];

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
 * @public
 * @enum
 */
export const NumberComparisonType = {
  EQUAL: "EQUAL",
  GREATER: "GREATER",
  GREATER_OR_EQUAL: "GREATER_OR_EQUAL",
  LESSER: "LESSER",
  LESSER_OR_EQUAL: "LESSER_OR_EQUAL",
  NOT_EQUAL: "NOT_EQUAL",
  RANGE: "RANGE",
} as const;

/**
 * @public
 */
export type NumberComparisonType = (typeof NumberComparisonType)[keyof typeof NumberComparisonType];

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
 * <p>A leaf node condition which can be used to specify a ProficiencyName, ProficiencyValue and
 *    ProficiencyLimit.</p>
 * @public
 */
export interface Condition {
  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code> and
   *      <code>value</code>.</p>
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
 * @public
 * @enum
 */
export const TargetListType = {
  PROFICIENCIES: "PROFICIENCIES",
} as const;

/**
 * @public
 */
export type TargetListType = (typeof TargetListType)[keyof typeof TargetListType];

/**
 * <p>A leaf node condition which can be used to specify a List condition to search users with
 *    attributes included in Lists like Proficiencies.</p>
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
 * <p>A list of conditions which would be applied together with an <code>AND</code>
 *    condition.</p>
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
 * <p>An object that can be used to specify Tag conditions or Hierarchy Group conditions inside
 *    the <code>SearchFilter</code>.</p>
 *          <p>This accepts an <code>OR</code> of <code>AND</code> (List of List) input where:</p>
 *          <ul>
 *             <li>
 *                <p>The top level list specifies conditions that need to be applied with <code>OR</code>
 *      operator</p>
 *             </li>
 *             <li>
 *                <p>The inner list specifies conditions that need to be applied with <code>AND</code>
 *      operator.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>Only one field can be populated. Maximum number of allowed Tag conditions is 25. Maximum
 *     number of allowed Hierarchy Group conditions is 20. </p>
 *          </note>
 * @public
 */
export interface ControlPlaneUserAttributeFilter {
  /**
   * <p>A list of conditions which would be applied together with an <code>OR</code>
   *    condition.</p>
   * @public
   */
  OrConditions?: AttributeAndCondition[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code>
   *    condition.</p>
   * @public
   */
  AndCondition?: AttributeAndCondition | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a tag condition, for example, <code>HAVE
   *     BPO = 123</code>. </p>
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
   * @public
   */
  TagFilter?: ControlPlaneTagFilter | undefined;

  /**
   * <p>An object that can be used to specify Tag conditions or Hierarchy Group conditions inside
   *    the SearchFilter.</p>
   *          <p>This accepts an <code>OR</code> of <code>AND</code> (List of List) input where:</p>
   *          <ul>
   *             <li>
   *                <p>The top level list specifies conditions that need to be applied with <code>OR</code>
   *      operator.</p>
   *             </li>
   *             <li>
   *                <p>The inner list specifies conditions that need to be applied with <code>AND</code>
   *      operator.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Only one field can be populated. This object can’t be used along with TagFilter. Request
   *     can either contain TagFilter or UserAttributeFilter if SearchFilter is specified, combination of
   *     both is not supported and such request will throw AccessDeniedException.</p>
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
 * @public
 * @enum
 */
export const ChatEventType = {
  DISCONNECT: "DISCONNECT",
  EVENT: "EVENT",
  MESSAGE: "MESSAGE",
} as const;

/**
 * @public
 */
export type ChatEventType = (typeof ChatEventType)[keyof typeof ChatEventType];

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
   * <p>Type of content. This is required when <code>Type</code> is <code>MESSAGE</code> or
   *     <code>EVENT</code>. </p>
   *          <ul>
   *             <li>
   *                <p>For allowed message content types, see the <code>ContentType</code> parameter in the
   *       <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_SendMessage.html">SendMessage</a> topic in the <i>Amazon Connect Participant Service API
   *       Reference</i>.</p>
   *             </li>
   *             <li>
   *                <p>For allowed event content types, see the <code>ContentType</code> parameter in the <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_SendEvent.html">SendEvent</a> topic in the <i>Amazon Connect Participant Service API
   *       Reference</i>. </p>
   *             </li>
   *          </ul>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>Content of the message or event. This is required when <code>Type</code> is
   *     <code>MESSAGE</code> and for certain <code>ContentTypes</code> when <code>Type</code> is
   *     <code>EVENT</code>.</p>
   *          <ul>
   *             <li>
   *                <p>For allowed message content, see the <code>Content</code> parameter in the <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_SendMessage.html">SendMessage</a> topic in the <i>Amazon Connect Participant Service API
   *       Reference</i>.</p>
   *             </li>
   *             <li>
   *                <p>For allowed event content, see the <code>Content</code> parameter in the <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_SendEvent.html">SendEvent</a> topic in the <i>Amazon Connect Participant Service API
   *       Reference</i>. </p>
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
   * <p>The Amazon Resource Name (ARN) of the standard Amazon SNS topic. The Amazon Resource Name (ARN) of the streaming endpoint that is used
   *    to publish real-time message streaming for chat conversations.</p>
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
   *          <p>Content types must always contain <code> text/plain</code>. You can then put any other
   *    supported type in the list. For example, all the following lists are valid because they contain
   *     <code>text/plain</code>: <code>[text/plain, text/markdown, application/json]</code>, <code>
   *     [text/markdown, text/plain]</code>, <code>[text/plain, application/json,
   *     application/vnd.amazonaws.connect.message.interactive.response]</code>. </p>
   * @public
   */
  SupportedMessagingContentTypes?: string[] | undefined;

  /**
   * <p>The customer's details.</p>
   * @public
   */
  ParticipantDetails?: ParticipantDetails | undefined;

  /**
   * <p> A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes. They can be accessed in flows just like any other contact attributes. </p>
   *          <p> There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute
   *    keys can include only alphanumeric, dash, and underscore characters. </p>
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
   * <p>External identifier of chat customer participant, used in part to uniquely identify a chat.
   *    For SMS, this is the E164 phone number of the chat customer participant.</p>
   * @public
   */
  SourceId: string | undefined;

  /**
   * <p>Chat system identifier, used in part to uniquely identify chat. This is associated with the
   *     Amazon Connect instance and flow to be used to start chats. For Server Migration Service, this is
   *    the phone number destination of inbound Server Migration Service messages represented by an Amazon Web Services End User Messaging phone number ARN.</p>
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
   * <p>Contact properties to apply when starting a new chat. If the integration event is handled
   *    with an existing chat, this is ignored.</p>
   * @public
   */
  NewSessionDetails?: NewSessionDetails | undefined;
}

/**
 * @public
 */
export interface SendChatIntegrationEventResponse {
  /**
   * <p>Identifier of chat contact used to handle integration event. This may be null if the
   *    integration event is not valid without an already existing chat contact.</p>
   * @public
   */
  InitialContactId?: string | undefined;

  /**
   * <p>Whether handling the integration event resulted in creating a new chat or acting on existing
   *    chat.</p>
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
   * <p>Information about the <b>additional</b> CC email address
   *    recipients. Email recipients are limited to 50 total addresses: 1 required recipient in the
   *     <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_SendOutboundEmail.html#API_SendOutboundEmail_RequestBody">DestinationEmailAddress</a> field and up to 49 recipients in the 'CcEmailAddresses'
   *    field.</p>
   * @public
   */
  CcEmailAddresses?: EmailAddressInfo[] | undefined;
}

/**
 * @public
 * @enum
 */
export const OutboundMessageSourceType = {
  RAW: "RAW",
  TEMPLATE: "TEMPLATE",
} as const;

/**
 * @public
 */
export type OutboundMessageSourceType = (typeof OutboundMessageSourceType)[keyof typeof OutboundMessageSourceType];

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
   * <p>An object that specifies the custom attributes values to use for variables in the message
   *    template. This object contains different categories of key-value pairs. Each key defines a
   *    variable or placeholder in the message template. </p>
   * @public
   */
  CustomAttributes?: Record<string, string> | undefined;

  /**
   * <p>An object that specifies the customer profile attributes values to use for variables in the
   *    message template. This object contains different categories of key-value pairs. Each key defines
   *    a variable or placeholder in the message template. </p>
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
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain
   *    the ARN.</p>
   * @public
   */
  KnowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the message template Id.</p>
   * @public
   */
  MessageTemplateId: string | undefined;

  /**
   * <p>Information about template attributes, that is, CustomAttributes or
   *    CustomerProfileAttributes.</p>
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
 * @enum
 */
export const TrafficType = {
  CAMPAIGN: "CAMPAIGN",
  GENERAL: "GENERAL",
} as const;

/**
 * @public
 */
export type TrafficType = (typeof TrafficType)[keyof typeof TrafficType];

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
   * <p>Optional override for the expiry of the pre-signed S3 URL in seconds. The default value is
   *    300.</p>
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
   * <p>The resource to which the attached file is (being) uploaded to. The supported resources are
   *     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cases.html">Cases</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-email-channel.html">Email</a>.</p>
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
   * <p>The tags used to organize, track, or control access for this resource. For example, <code>\{
   *     "Tags": \{"key1":"value1", "key2":"value2"\} \}</code>.</p>
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
   *     <code>yyyy-MM-ddThh:mm:ss.SSSZ</code>. For example,
   *    <code>2019-11-08T02:41:28.172Z</code>.</p>
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
   * <p>The time of Creation of the file resource as an ISO timestamp. It's specified in ISO 8601
   *    format: <code>yyyy-MM-ddThh:mm:ss.SSSZ</code>. For example,
   *    <code>2024-05-03T02:41:28.172Z</code>.</p>
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
   * <p>The type of the content. Supported types are <code>text/plain</code>,
   *     <code>text/markdown</code>, <code>application/json</code>, and
   *     <code>application/vnd.amazonaws.connect.message.interactive.response</code>.</p>
   * @public
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
   *             <li>
   *                <p>For <code>application/vnd.amazonaws.connect.message.interactive.response</code>, the
   *      Length Constraints are Minimum of 1, Maximum of 12288.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Content: string | undefined;
}

/**
 * <p>Enable persistent chats. For more information about enabling persistent chat, and for
 *    example use cases and how to configure for them, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent chat</a>.</p>
 * @public
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
   * <p>The identifier for a chat participant. The participantId for a chat participant is the same
   *    throughout the chat lifecycle.</p>
   * @public
   */
  ParticipantId?: string | undefined;

  /**
   * <p>The token used by the chat participant to call <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a>. The participant token is valid for the lifetime of a chat
   *    participant.</p>
   * @public
   */
  ParticipantToken?: string | undefined;

  /**
   * <p>The contactId from which a persistent chat session is started. This field is populated only
   *    for persistent chats.</p>
   * @public
   */
  ContinuedFromContactId?: string | undefined;
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
 * @enum
 */
export const IvrRecordingTrack = {
  ALL: "ALL",
} as const;

/**
 * @public
 */
export type IvrRecordingTrack = (typeof IvrRecordingTrack)[keyof typeof IvrRecordingTrack];

/**
 * @public
 * @enum
 */
export const VoiceRecordingTrack = {
  ALL: "ALL",
  FROM_AGENT: "FROM_AGENT",
  TO_AGENT: "TO_AGENT",
} as const;

/**
 * @public
 */
export type VoiceRecordingTrack = (typeof VoiceRecordingTrack)[keyof typeof VoiceRecordingTrack];

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
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
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
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
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
 *             <p>You can include up to 50 email addresses in total, distributed across <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartEmailContact.html#API_StartEmailContact_RequestBody">DestinationEmailAddress</a>, <code>ToAddresses</code>, and <code>CcAddresses</code>. This
 *     total must include one required <code>DestinationEmailAddress</code>. You can then specify up to
 *     49 addresses allocated across <code>ToAddresses</code> and <code>CcAddresses</code> as
 *     needed.</p>
 *          </note>
 * @public
 */
export interface InboundAdditionalRecipients {
  /**
   * <p>The <b>additional</b> recipients information present in to list.
   *    You must have 1 required recipient (<code>DestinationEmailAddress</code>). You can then specify
   *    up to 49 additional recipients (across <code>ToAddresses</code> and <code>CcAddresses</code>),
   *    for a total of 50 recipients.</p>
   * @public
   */
  ToAddresses?: EmailAddressInfo[] | undefined;

  /**
   * <p>The <b>additional</b> recipients information present in cc list.
   *    You must have 1 required recipient (<code>DestinationEmailAddress</code>). You can then specify
   *    up to 49 additional recipients (across <code>ToAddresses</code> and <code>CcAddresses</code>),
   *    for a total of 50 recipients.</p>
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
 * @public
 * @enum
 */
export const InboundMessageSourceType = {
  RAW: "RAW",
} as const;

/**
 * @public
 */
export type InboundMessageSourceType = (typeof InboundMessageSourceType)[keyof typeof InboundMessageSourceType];

/**
 * @public
 * @enum
 */
export const EmailHeaderType = {
  IN_REPLY_TO: "IN_REPLY_TO",
  MESSAGE_ID: "MESSAGE_ID",
  REFERENCES: "REFERENCES",
  X_SES_SPAM_VERDICT: "X_SES_SPAM_VERDICT",
  X_SES_VIRUS_VERDICT: "X_SES_VIRUS_VERDICT",
} as const;

/**
 * @public
 */
export type EmailHeaderType = (typeof EmailHeaderType)[keyof typeof EmailHeaderType];

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

/**
 * @public
 */
export interface StartOutboundEmailContactRequest {
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
   * <p>The email address associated with the Amazon Connect instance.</p>
   * @public
   */
  FromEmailAddress?: EmailAddressInfo | undefined;

  /**
   * <p>The email address of the customer.</p>
   * @public
   */
  DestinationEmailAddress: EmailAddressInfo | undefined;

  /**
   * <p>The additional recipients address of email in CC.</p>
   * @public
   */
  AdditionalRecipients?: OutboundAdditionalRecipients | undefined;

  /**
   * <p>The email message body to be sent to the newly created email.</p>
   * @public
   */
  EmailMessage: OutboundEmailContent | undefined;

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
export interface StartOutboundEmailContactResponse {
  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   * @public
   */
  ContactId?: string | undefined;
}

/**
 * <p>Outbound calls to the destination number are not allowed.</p>
 * @public
 */
export class DestinationNotAllowedException extends __BaseException {
  readonly name: "DestinationNotAllowedException" = "DestinationNotAllowedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message about the outbound calls.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>The contact is not permitted.</p>
 * @public
 */
export class OutboundContactNotPermittedException extends __BaseException {
  readonly name: "OutboundContactNotPermittedException" = "OutboundContactNotPermittedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message about the contact.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>Configuration of the answering machine detection.</p>
 * @public
 */
export interface AnswerMachineDetectionConfig {
  /**
   * <p>The flag to indicate if answer machine detection analysis needs to be performed for a voice
   *    call. If set to <code>true</code>, <code>TrafficType</code> must be set as <code>CAMPAIGN</code>.
   *   </p>
   * @public
   */
  EnableAnswerMachineDetection?: boolean | undefined;

  /**
   * <p>Wait for the answering machine prompt.</p>
   * @public
   */
  AwaitAnswerMachinePrompt?: boolean | undefined;
}

/**
 * @public
 */
export interface StartOutboundVoiceContactRequest {
  /**
   * <p>The name of a voice contact that is shown to an agent in the Contact Control Panel
   *    (CCP).</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the voice contact that appears in the agent's snapshot in the CCP logs. For
   *    more information about CCP logs, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/download-ccp-logs.html">Download and review CCP logs</a> in
   *    the <i>Amazon Connect Administrator Guide</i>.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A formatted URL that is shown to an agent in the Contact Control Panel (CCP). Contacts can
   *    have the following reference types at the time of creation: <code>URL</code> |
   *     <code>NUMBER</code> | <code>STRING</code> | <code>DATE</code> | <code>EMAIL</code>.
   *     <code>ATTACHMENT</code> is not a supported reference type during voice contact creation.</p>
   * @public
   */
  References?: Record<string, Reference> | undefined;

  /**
   * <p>The <code>contactId</code> that is related to this contact. Linking voice, task, or chat by
   *    using <code>RelatedContactID</code> copies over contact attributes from the related contact to
   *    the new contact. All updates to user-defined attributes in the new contact are limited to the
   *    individual contact ID. There are no limits to the number of contacts that can be linked by using
   *     <code>RelatedContactId</code>. </p>
   * @public
   */
  RelatedContactId?: string | undefined;

  /**
   * <p>The phone number of the customer, in E.164 format.</p>
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * <p>The
   *    identifier of the flow for the outbound call. To see the ContactFlowId in the Amazon Connect admin website, on the
   *    navigation menu go to <b>Routing</b>, <b>Contact
   *     Flows</b>. Choose the flow. On the flow page, under the name of the flow, choose
   *     <b>Show additional flow information</b>. The ContactFlowId is the last
   *    part of the ARN, shown here in bold: </p>
   *          <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b>
   *          </p>
   * @public
   */
  ContactFlowId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>. The token is valid for 7 days after creation. If a contact is already started,
   *    the contact ID is returned.
   *    </p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The phone number associated with the Amazon Connect instance, in E.164 format. If you do
   *    not specify a source phone number, you must specify a queue.</p>
   * @public
   */
  SourcePhoneNumber?: string | undefined;

  /**
   * <p>The queue for the call. If you specify a queue, the phone displayed for caller ID is the
   *    phone number specified in the queue. If you do not specify a queue, the queue defined in the flow
   *    is used. If you do not specify a queue, you must specify a source phone number.</p>
   * @public
   */
  QueueId?: string | undefined;

  /**
   * <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes.</p>
   *          <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys
   *    can include only alphanumeric, dash, and underscore characters.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * <p>Configuration of the answering machine detection for this outbound call. </p>
   * @public
   */
  AnswerMachineDetectionConfig?: AnswerMachineDetectionConfig | undefined;

  /**
   * <p>The campaign identifier of the outbound communication.</p>
   * @public
   */
  CampaignId?: string | undefined;

  /**
   * <p>Denotes the class of traffic. Calls with different traffic types are handled differently by
   *     Amazon Connect. The default value is <code>GENERAL</code>. Use <code>CAMPAIGN</code> if
   *     <code>EnableAnswerMachineDetection</code> is set to <code>true</code>. For all other cases, use
   *     <code>GENERAL</code>. </p>
   * @public
   */
  TrafficType?: TrafficType | undefined;
}

/**
 * @public
 */
export interface StartOutboundVoiceContactResponse {
  /**
   * <p>The identifier of this contact within the Amazon Connect instance.</p>
   * @public
   */
  ContactId?: string | undefined;
}

/**
 * @public
 */
export interface StartScreenSharingRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

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
}

/**
 * @public
 */
export interface StartScreenSharingResponse {}

/**
 * @public
 */
export interface StartTaskContactResponse {
  /**
   * <p>The identifier of this contact within the Amazon Connect instance.</p>
   * @public
   */
  ContactId?: string | undefined;
}

/**
 * @public
 */
export interface StartWebRTCContactRequest {
  /**
   * <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes.</p>
   *          <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys
   *    can include only alphanumeric, -, and _ characters.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   *          <p>The token is valid for 7 days after creation. If a contact is already started, the contact
   *    ID is returned.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The identifier of the flow for the call. To see the ContactFlowId in the Amazon Connect admin website, on the
   *    navigation menu go to <b>Routing</b>, <b>Flows</b>. Choose the flow. On the flow page, under the name of the flow, choose
   *     <b>Show additional flow information</b>. The ContactFlowId is the last
   *    part of the ARN, shown here in bold: </p>
   *          <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b>
   *          </p>
   * @public
   */
  ContactFlowId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Information about the video sharing capabilities of the participants (customer,
   *    agent).</p>
   * @public
   */
  AllowedCapabilities?: AllowedCapabilities | undefined;

  /**
   * <p>The customer's details.</p>
   * @public
   */
  ParticipantDetails: ParticipantDetails | undefined;

  /**
   * <p>The unique identifier for an Amazon Connect contact. This identifier is related to the
   *    contact starting.</p>
   * @public
   */
  RelatedContactId?: string | undefined;

  /**
   * <p>A formatted URL that is shown to an agent in the Contact Control Panel (CCP). Tasks can have
   *    the following reference types at the time of creation: <code>URL</code> | <code>NUMBER</code> |
   *     <code>STRING</code> | <code>DATE</code> | <code>EMAIL</code>. <code>ATTACHMENT</code> is not a
   *    supported reference type during task creation.</p>
   * @public
   */
  References?: Record<string, Reference> | undefined;

  /**
   * <p>A description of the task that is shown to an agent in the Contact Control Panel
   *    (CCP).</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>The attendee information, including attendee ID and join token.</p>
 * @public
 */
export interface Attendee {
  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   * @public
   */
  AttendeeId?: string | undefined;

  /**
   * <p>The join token used by the Amazon Chime SDK attendee.</p>
   * @public
   */
  JoinToken?: string | undefined;
}

/**
 * <p>A set of endpoints used by clients to connect to the media service group for an Amazon Chime SDK meeting.</p>
 * @public
 */
export interface MediaPlacement {
  /**
   * <p>The audio host URL.</p>
   * @public
   */
  AudioHostUrl?: string | undefined;

  /**
   * <p>The audio fallback URL.</p>
   * @public
   */
  AudioFallbackUrl?: string | undefined;

  /**
   * <p>The signaling URL.</p>
   * @public
   */
  SignalingUrl?: string | undefined;

  /**
   * <p>The turn control URL.</p>
   * @public
   */
  TurnControlUrl?: string | undefined;

  /**
   * <p>The event ingestion URL to which you send client meeting events.</p>
   * @public
   */
  EventIngestionUrl?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MeetingFeatureStatus = {
  AVAILABLE: "AVAILABLE",
  UNAVAILABLE: "UNAVAILABLE",
} as const;

/**
 * @public
 */
export type MeetingFeatureStatus = (typeof MeetingFeatureStatus)[keyof typeof MeetingFeatureStatus];

/**
 * <p>Has audio-specific configurations as the operating parameter for Echo Reduction.</p>
 * @public
 */
export interface AudioFeatures {
  /**
   * <p>Makes echo reduction available to clients who connect to the meeting.</p>
   * @public
   */
  EchoReduction?: MeetingFeatureStatus | undefined;
}

/**
 * <p>The configuration settings of the features available to a meeting.</p>
 * @public
 */
export interface MeetingFeaturesConfiguration {
  /**
   * <p>The configuration settings for the audio features available to a meeting.</p>
   * @public
   */
  Audio?: AudioFeatures | undefined;
}

/**
 * <p>A meeting created using the Amazon Chime SDK.</p>
 * @public
 */
export interface Meeting {
  /**
   * <p>The Amazon Web Services Region in which you create the meeting.</p>
   * @public
   */
  MediaRegion?: string | undefined;

  /**
   * <p>The media placement for the meeting.</p>
   * @public
   */
  MediaPlacement?: MediaPlacement | undefined;

  /**
   * <p>The configuration settings of the features available to a meeting.</p>
   * @public
   */
  MeetingFeatures?: MeetingFeaturesConfiguration | undefined;

  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   * @public
   */
  MeetingId?: string | undefined;
}

/**
 * <p>Information required to join the call.</p>
 * @public
 */
export interface ConnectionData {
  /**
   * <p>The attendee information, including attendee ID and join token.</p>
   * @public
   */
  Attendee?: Attendee | undefined;

  /**
   * <p>A meeting created using the Amazon Chime SDK.</p>
   * @public
   */
  Meeting?: Meeting | undefined;
}

/**
 * @public
 */
export interface StartWebRTCContactResponse {
  /**
   * <p>Information required for the client application (mobile application or website) to connect
   *    to the call.</p>
   * @public
   */
  ConnectionData?: ConnectionData | undefined;

  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   * @public
   */
  ContactId?: string | undefined;

  /**
   * <p>The identifier for a contact participant. The <code>ParticipantId</code> for a contact
   *    participant is the same throughout the contact lifecycle.</p>
   * @public
   */
  ParticipantId?: string | undefined;

  /**
   * <p>The token used by the contact participant to call the <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a> API. The participant token is valid for the lifetime of a
   *    contact participant.</p>
   * @public
   */
  ParticipantToken?: string | undefined;
}

/**
 * <p>The contact with the specified ID is not active or does not exist. Applies to Voice calls
 *    only, not to Chat or Task contacts.</p>
 * @public
 */
export class ContactNotFoundException extends __BaseException {
  readonly name: "ContactNotFoundException" = "ContactNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>Contains details about why a contact was disconnected. Only Amazon Connect outbound
 *    campaigns can provide this field.</p>
 * @public
 */
export interface DisconnectReason {
  /**
   * <p>A code that indicates how the contact was terminated.</p>
   * @public
   */
  Code?: string | undefined;
}

/**
 * @public
 */
export interface StopContactRequest {
  /**
   * <p>The ID of the contact.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The reason a contact can be disconnected. Only Amazon Connect outbound campaigns can
   *    provide this field.</p>
   * @public
   */
  DisconnectReason?: DisconnectReason | undefined;
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
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
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
export interface StopContactRecordingResponse {}

/**
 * @public
 */
export interface StopContactStreamingRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact. This is the identifier of the contact that is associated with
   *    the first interaction with the contact center.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the streaming configuration enabled. </p>
   * @public
   */
  StreamingId: string | undefined;
}

/**
 * @public
 */
export interface StopContactStreamingResponse {}

/**
 * <p>Information about input answers for a contact evaluation.</p>
 * @public
 */
export interface EvaluationAnswerInput {
  /**
   * <p>The value for an answer in a contact evaluation.</p>
   * @public
   */
  Value?: EvaluationAnswerData | undefined;
}

/**
 * @public
 */
export interface SubmitContactEvaluationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique identifier for the contact evaluation.</p>
   * @public
   */
  EvaluationId: string | undefined;

  /**
   * <p>A map of question identifiers to answer value.</p>
   * @public
   */
  Answers?: Record<string, EvaluationAnswerInput> | undefined;

  /**
   * <p>A map of question identifiers to note value.</p>
   * @public
   */
  Notes?: Record<string, EvaluationNote> | undefined;
}

/**
 * @public
 */
export interface SubmitContactEvaluationResponse {
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
export interface SuspendContactRecordingRequest {
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
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
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
export interface SuspendContactRecordingResponse {}

/**
 * @public
 */
export interface TagContactRequest {
  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The tags to be assigned to the contact resource. For example, \{ "Tags": \{"key1":"value1",
   *    "key2":"value2"\} \}.</p>
   *          <note>
   *             <p>Authorization is not supported by this tag.</p>
   *          </note>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagContactResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TransferContactRequest {
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
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId?: string | undefined;

  /**
   * <p>The identifier for the user. This can be the ID or the ARN of the user.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  ContactFlowId: string | undefined;

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
export interface TransferContactResponse {
  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   * @public
   */
  ContactId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the contact.</p>
   * @public
   */
  ContactArn?: string | undefined;
}

/**
 * @public
 */
export interface UntagContactRequest {
  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A list of tag keys. Existing tags on the contact whose keys are members of this list will be
   *    removed.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagContactResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAgentStatusRequest {
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

  /**
   * <p>The name of the agent status.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the agent status.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The state of the agent status.</p>
   * @public
   */
  State?: AgentStatusState | undefined;

  /**
   * <p>The display order of the agent status.</p>
   * @public
   */
  DisplayOrder?: number | undefined;

  /**
   * <p>A number indicating the reset order of the agent status.</p>
   * @public
   */
  ResetOrderNumber?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateAuthenticationProfileRequest {
  /**
   * <p>A unique identifier for the authentication profile. </p>
   * @public
   */
  AuthenticationProfileId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name for the authentication profile.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description for the authentication profile.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of IP address range strings that are allowed to access the instance. For more
   *    information on how to configure IP addresses, see<a href="https://docs.aws.amazon.com/connect/latest/adminguide/authentication-profiles.html#configure-session-timeouts">Configure session timeouts</a> in the <i>Amazon Connect Administrator
   *     Guide</i>.</p>
   * @public
   */
  AllowedIps?: string[] | undefined;

  /**
   * <p>A list of IP address range strings that are blocked from accessing the instance. For more
   *    information on how to configure IP addresses, For more information on how to configure IP
   *    addresses, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/authentication-profiles.html#configure-ip-based-ac">Configure
   *     IP-based access control</a> in the <i>Amazon Connect Administrator
   *     Guide</i>. </p>
   * @public
   */
  BlockedIps?: string[] | undefined;

  /**
   * <p>The short lived session duration configuration for users logged in to Amazon Connect, in
   *    minutes. This value determines the maximum possible time before an agent is authenticated. For
   *    more information, For more information on how to configure IP addresses, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/authentication-profiles.html#configure-session-timeouts">Configure session timeouts</a> in the <i>Amazon Connect Administrator
   *     Guide</i>. </p>
   * @public
   */
  PeriodicSessionDuration?: number | undefined;
}

/**
 * <p>Information about a queue.</p>
 * @public
 */
export interface QueueInfoInput {
  /**
   * <p>The identifier of the queue.</p>
   * @public
   */
  Id?: string | undefined;
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
   * @public
   */
  InitialContactId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The Amazon Connect attributes. These attributes can be accessed in flows just like any
   *    other contact attributes.</p>
   *          <p>You can have up to 32,768 UTF-8 bytes across all attributes for a contact. Attribute keys
   *    can include only alphanumeric, dash, and underscore characters.</p>
   *          <p>In the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/set-contact-attributes.html">Set contact attributes</a>
   *    block, when the attributes for a contact exceed 32 KB, the contact is routed down the Error
   *    branch of the flow. As a mitigation, consider the following options:</p>
   *          <ul>
   *             <li>
   *                <p>Remove unnecessary attributes by setting their values to empty.</p>
   *             </li>
   *             <li>
   *                <p>If the attributes are only used in one flow and don't need to be referred to outside of
   *      that flow (for example, by a Lambda or another flow), then use flow attributes. This way you
   *      aren't needlessly persisting the 32 KB of information from one flow to another. For more
   *      information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/set-contact-attributes.html">Flow block: Set contact
   *       attributes</a> in the <i>Amazon Connect Administrator Guide</i>. </p>
   *             </li>
   *          </ul>
   * @public
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
export interface UpdateContactEvaluationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique identifier for the contact evaluation.</p>
   * @public
   */
  EvaluationId: string | undefined;

  /**
   * <p>A map of question identifiers to answer value.</p>
   * @public
   */
  Answers?: Record<string, EvaluationAnswerInput> | undefined;

  /**
   * <p>A map of question identifiers to note value.</p>
   * @public
   */
  Notes?: Record<string, EvaluationNote> | undefined;
}

/**
 * @public
 */
export interface UpdateContactEvaluationResponse {
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
export interface UpdateContactFlowContentRequest {
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
   * <p>The JSON string that represents the content of the flow. For an example, see <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language-example.html">Example
   *     flow in Amazon Connect Flow language</a>. </p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 256000.</p>
   * @public
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
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  ContactFlowId: string | undefined;

  /**
   * <p>The name of the flow.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the flow.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The state of flow.</p>
   * @public
   */
  ContactFlowState?: ContactFlowState | undefined;
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
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow module.</p>
   * @public
   */
  ContactFlowModuleId: string | undefined;

  /**
   * <p>The JSON string that represents the content of the flow. For an example, see <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language-example.html">Example
   *     flow in Amazon Connect Flow language</a>. </p>
   * @public
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
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow module.</p>
   * @public
   */
  ContactFlowModuleId: string | undefined;

  /**
   * <p>The name of the flow module.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the flow module.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The state of flow module.</p>
   * @public
   */
  State?: ContactFlowModuleState | undefined;
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
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  ContactFlowId: string | undefined;

  /**
   * <p>The name of the flow.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the flow.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateContactFlowNameResponse {}

/**
 * <p>Specify whether this routing criteria step should apply for only a limited amount of time,
 *    or if it should never expire.</p>
 * @public
 */
export interface RoutingCriteriaInputStepExpiry {
  /**
   * <p>The number of seconds that the contact will be routed only to agents matching this routing
   *    step, if expiry was configured for this routing step.</p>
   * @public
   */
  DurationInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface UpdateContactRoutingDataResponse {}

/**
 * @public
 */
export interface UpdateContactScheduleRequest {
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
   * <p>The timestamp, in Unix Epoch seconds format, at which to start running the inbound flow. The scheduled time cannot be in the past. It must be within up to 6 days in future. </p>
   * @public
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
export interface UpdateEmailAddressMetadataRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the email address.</p>
   * @public
   */
  EmailAddressId: string | undefined;

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
export interface UpdateEmailAddressMetadataResponse {
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
}

/**
 * @public
 */
export interface UpdateEvaluationFormResponse {
  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the contact evaluation resource.</p>
   * @public
   */
  EvaluationFormArn: string | undefined;

  /**
   * <p>The version of the updated evaluation form resource.</p>
   * @public
   */
  EvaluationFormVersion: number | undefined;
}

/**
 * @public
 */
export interface UpdateHoursOfOperationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the hours of operation.</p>
   * @public
   */
  HoursOfOperationId: string | undefined;

  /**
   * <p>The name of the hours of operation.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the hours of operation.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The time zone of the hours of operation.</p>
   * @public
   */
  TimeZone?: string | undefined;

  /**
   * <p>Configuration information of the hours of operation.</p>
   * @public
   */
  Config?: HoursOfOperationConfig[] | undefined;
}

/**
 * <p>Request processing failed because dependent condition failed.</p>
 * @public
 */
export class ConditionalOperationFailedException extends __BaseException {
  readonly name: "ConditionalOperationFailedException" = "ConditionalOperationFailedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConditionalOperationFailedException, __BaseException>) {
    super({
      name: "ConditionalOperationFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConditionalOperationFailedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface UpdateHoursOfOperationOverrideRequest {
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
   * <p>The identifier for the hours of operation override.</p>
   * @public
   */
  HoursOfOperationOverrideId: string | undefined;

  /**
   * <p>The name of the hours of operation override.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the hours of operation override.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Configuration information for the hours of operation override: day, start time, and end
   *    time.</p>
   * @public
   */
  Config?: HoursOfOperationOverrideConfig[] | undefined;

  /**
   * <p>The date from when the hours of operation override would be effective.</p>
   * @public
   */
  EffectiveFrom?: string | undefined;

  /**
   * <p>The date till when the hours of operation override would be effective.</p>
   * @public
   */
  EffectiveTill?: string | undefined;
}

/**
 * @public
 */
export interface UpdateInstanceAttributeRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of attribute.</p>
   *          <note>
   *             <p>Only allowlisted customers can consume USE_CUSTOM_TTS_VOICES. To access this feature,
   *     contact Amazon Web ServicesSupport for allowlisting.</p>
   *          </note>
   * @public
   */
  AttributeType: InstanceAttributeType | undefined;

  /**
   * <p>The value for the attribute. Maximum character limit is 100. </p>
   * @public
   */
  Value: string | undefined;

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
export interface UpdateInstanceStorageConfigRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   * @public
   */
  AssociationId: string | undefined;

  /**
   * <p>A valid resource type.</p>
   * @public
   */
  ResourceType: InstanceStorageResourceType | undefined;

  /**
   * <p>The storage configuration for the instance.</p>
   * @public
   */
  StorageConfig: InstanceStorageConfig | undefined;

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
export interface UpdateParticipantAuthenticationRequest {
  /**
   * <p>The <code>state</code> query parameter that was provided by Cognito in the
   *     <code>redirectUri</code>. This will also match the <code>state</code> parameter provided in the
   *     <code>AuthenticationUrl</code> from the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_GetAuthenticationUrl.html">GetAuthenticationUrl</a>
   *    response.</p>
   * @public
   */
  State: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The <code>code</code> query parameter provided by Cognito in the
   *    <code>redirectUri</code>.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>The <code>error</code> query parameter provided by Cognito in the
   *    <code>redirectUri</code>.</p>
   * @public
   */
  Error?: string | undefined;

  /**
   * <p>The <code>error_description</code> parameter provided by Cognito in the
   *     <code>redirectUri</code>.</p>
   * @public
   */
  ErrorDescription?: string | undefined;
}

/**
 * @public
 */
export interface UpdateParticipantAuthenticationResponse {}

/**
 * @public
 * @enum
 */
export const TimerEligibleParticipantRoles = {
  AGENT: "AGENT",
  CUSTOMER: "CUSTOMER",
} as const;

/**
 * @public
 */
export type TimerEligibleParticipantRoles =
  (typeof TimerEligibleParticipantRoles)[keyof typeof TimerEligibleParticipantRoles];

/**
 * @internal
 */
export const ViewSummaryFilterSensitiveLog = (obj: ViewSummary): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListViewsResponseFilterSensitiveLog = (obj: ListViewsResponse): any => ({
  ...obj,
  ...(obj.ViewsSummaryList && {
    ViewsSummaryList: obj.ViewsSummaryList.map((item) => ViewSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ViewVersionSummaryFilterSensitiveLog = (obj: ViewVersionSummary): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListViewVersionsResponseFilterSensitiveLog = (obj: ListViewVersionsResponse): any => ({
  ...obj,
  ...(obj.ViewVersionSummaryList && {
    ViewVersionSummaryList: obj.ViewVersionSummaryList.map((item) => ViewVersionSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ReplicateInstanceRequestFilterSensitiveLog = (obj: ReplicateInstanceRequest): any => ({
  ...obj,
  ...(obj.ReplicaAlias && { ReplicaAlias: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TranscriptCriteriaFilterSensitiveLog = (obj: TranscriptCriteria): any => ({
  ...obj,
  ...(obj.SearchText && { SearchText: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TranscriptFilterSensitiveLog = (obj: Transcript): any => ({
  ...obj,
  ...(obj.Criteria && { Criteria: obj.Criteria.map((item) => TranscriptCriteriaFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ContactAnalysisFilterSensitiveLog = (obj: ContactAnalysis): any => ({
  ...obj,
  ...(obj.Transcript && { Transcript: TranscriptFilterSensitiveLog(obj.Transcript) }),
});

/**
 * @internal
 */
export const SearchableContactAttributesCriteriaFilterSensitiveLog = (
  obj: SearchableContactAttributesCriteria
): any => ({
  ...obj,
  ...(obj.Key && { Key: SENSITIVE_STRING }),
  ...(obj.Values && { Values: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SearchableContactAttributesFilterSensitiveLog = (obj: SearchableContactAttributes): any => ({
  ...obj,
  ...(obj.Criteria && {
    Criteria: obj.Criteria.map((item) => SearchableContactAttributesCriteriaFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const SearchableSegmentAttributesCriteriaFilterSensitiveLog = (
  obj: SearchableSegmentAttributesCriteria
): any => ({
  ...obj,
  ...(obj.Key && { Key: SENSITIVE_STRING }),
  ...(obj.Values && { Values: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SearchableSegmentAttributesFilterSensitiveLog = (obj: SearchableSegmentAttributes): any => ({
  ...obj,
  ...(obj.Criteria && {
    Criteria: obj.Criteria.map((item) => SearchableSegmentAttributesCriteriaFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const SearchCriteriaFilterSensitiveLog = (obj: SearchCriteria): any => ({
  ...obj,
  ...(obj.ContactAnalysis && { ContactAnalysis: ContactAnalysisFilterSensitiveLog(obj.ContactAnalysis) }),
  ...(obj.SearchableContactAttributes && {
    SearchableContactAttributes: SearchableContactAttributesFilterSensitiveLog(obj.SearchableContactAttributes),
  }),
  ...(obj.SearchableSegmentAttributes && {
    SearchableSegmentAttributes: SearchableSegmentAttributesFilterSensitiveLog(obj.SearchableSegmentAttributes),
  }),
});

/**
 * @internal
 */
export const SearchContactsRequestFilterSensitiveLog = (obj: SearchContactsRequest): any => ({
  ...obj,
  ...(obj.SearchCriteria && { SearchCriteria: SearchCriteriaFilterSensitiveLog(obj.SearchCriteria) }),
});

/**
 * @internal
 */
export const EmailAddressMetadataFilterSensitiveLog = (obj: EmailAddressMetadata): any => ({
  ...obj,
  ...(obj.EmailAddress && { EmailAddress: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.DisplayName && { DisplayName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SearchEmailAddressesResponseFilterSensitiveLog = (obj: SearchEmailAddressesResponse): any => ({
  ...obj,
  ...(obj.EmailAddresses && {
    EmailAddresses: obj.EmailAddresses.map((item) => EmailAddressMetadataFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UserIdentityInfoLiteFilterSensitiveLog = (obj: UserIdentityInfoLite): any => ({
  ...obj,
  ...(obj.FirstName && { FirstName: SENSITIVE_STRING }),
  ...(obj.LastName && { LastName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UserSearchSummaryFilterSensitiveLog = (obj: UserSearchSummary): any => ({
  ...obj,
  ...(obj.IdentityInfo && { IdentityInfo: UserIdentityInfoLiteFilterSensitiveLog(obj.IdentityInfo) }),
});

/**
 * @internal
 */
export const SearchUsersResponseFilterSensitiveLog = (obj: SearchUsersResponse): any => ({
  ...obj,
  ...(obj.Users && { Users: obj.Users.map((item) => UserSearchSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const EmailAddressInfoFilterSensitiveLog = (obj: EmailAddressInfo): any => ({
  ...obj,
  ...(obj.EmailAddress && { EmailAddress: SENSITIVE_STRING }),
  ...(obj.DisplayName && { DisplayName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OutboundAdditionalRecipientsFilterSensitiveLog = (obj: OutboundAdditionalRecipients): any => ({
  ...obj,
  ...(obj.CcEmailAddresses && {
    CcEmailAddresses: obj.CcEmailAddresses.map((item) => EmailAddressInfoFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const OutboundRawMessageFilterSensitiveLog = (obj: OutboundRawMessage): any => ({
  ...obj,
  ...(obj.Subject && { Subject: SENSITIVE_STRING }),
  ...(obj.Body && { Body: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OutboundEmailContentFilterSensitiveLog = (obj: OutboundEmailContent): any => ({
  ...obj,
  ...(obj.RawMessage && { RawMessage: OutboundRawMessageFilterSensitiveLog(obj.RawMessage) }),
});

/**
 * @internal
 */
export const SendOutboundEmailRequestFilterSensitiveLog = (obj: SendOutboundEmailRequest): any => ({
  ...obj,
  ...(obj.FromEmailAddress && { FromEmailAddress: EmailAddressInfoFilterSensitiveLog(obj.FromEmailAddress) }),
  ...(obj.DestinationEmailAddress && {
    DestinationEmailAddress: EmailAddressInfoFilterSensitiveLog(obj.DestinationEmailAddress),
  }),
  ...(obj.AdditionalRecipients && {
    AdditionalRecipients: OutboundAdditionalRecipientsFilterSensitiveLog(obj.AdditionalRecipients),
  }),
  ...(obj.EmailMessage && { EmailMessage: OutboundEmailContentFilterSensitiveLog(obj.EmailMessage) }),
});

/**
 * @internal
 */
export const InboundAdditionalRecipientsFilterSensitiveLog = (obj: InboundAdditionalRecipients): any => ({
  ...obj,
  ...(obj.ToAddresses && { ToAddresses: obj.ToAddresses.map((item) => EmailAddressInfoFilterSensitiveLog(item)) }),
  ...(obj.CcAddresses && { CcAddresses: obj.CcAddresses.map((item) => EmailAddressInfoFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const InboundRawMessageFilterSensitiveLog = (obj: InboundRawMessage): any => ({
  ...obj,
  ...(obj.Subject && { Subject: SENSITIVE_STRING }),
  ...(obj.Body && { Body: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InboundEmailContentFilterSensitiveLog = (obj: InboundEmailContent): any => ({
  ...obj,
  ...(obj.RawMessage && { RawMessage: InboundRawMessageFilterSensitiveLog(obj.RawMessage) }),
});

/**
 * @internal
 */
export const StartOutboundEmailContactRequestFilterSensitiveLog = (obj: StartOutboundEmailContactRequest): any => ({
  ...obj,
  ...(obj.FromEmailAddress && { FromEmailAddress: EmailAddressInfoFilterSensitiveLog(obj.FromEmailAddress) }),
  ...(obj.DestinationEmailAddress && {
    DestinationEmailAddress: EmailAddressInfoFilterSensitiveLog(obj.DestinationEmailAddress),
  }),
  ...(obj.AdditionalRecipients && {
    AdditionalRecipients: OutboundAdditionalRecipientsFilterSensitiveLog(obj.AdditionalRecipients),
  }),
  ...(obj.EmailMessage && { EmailMessage: OutboundEmailContentFilterSensitiveLog(obj.EmailMessage) }),
});

/**
 * @internal
 */
export const StartOutboundVoiceContactRequestFilterSensitiveLog = (obj: StartOutboundVoiceContactRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartWebRTCContactRequestFilterSensitiveLog = (obj: StartWebRTCContactRequest): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AttendeeFilterSensitiveLog = (obj: Attendee): any => ({
  ...obj,
  ...(obj.JoinToken && { JoinToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConnectionDataFilterSensitiveLog = (obj: ConnectionData): any => ({
  ...obj,
  ...(obj.Attendee && { Attendee: AttendeeFilterSensitiveLog(obj.Attendee) }),
});

/**
 * @internal
 */
export const StartWebRTCContactResponseFilterSensitiveLog = (obj: StartWebRTCContactResponse): any => ({
  ...obj,
  ...(obj.ConnectionData && { ConnectionData: ConnectionDataFilterSensitiveLog(obj.ConnectionData) }),
});

/**
 * @internal
 */
export const UpdateEmailAddressMetadataRequestFilterSensitiveLog = (obj: UpdateEmailAddressMetadataRequest): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.DisplayName && { DisplayName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateParticipantAuthenticationRequestFilterSensitiveLog = (
  obj: UpdateParticipantAuthenticationRequest
): any => ({
  ...obj,
  ...(obj.Code && { Code: SENSITIVE_STRING }),
  ...(obj.Error && { Error: SENSITIVE_STRING }),
  ...(obj.ErrorDescription && { ErrorDescription: SENSITIVE_STRING }),
});
