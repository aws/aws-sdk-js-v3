// smithy-typescript generated code
import type {
  AnsweringMachineDetectionStatus,
  Channel,
  ContactInitiationMethod,
  EvaluationFormValidationStatus,
  EvaluationFormVersionStatus,
} from "./enums";
import type {
  AdditionalEmailRecipients,
  AgentInfo,
  Campaign,
  EvaluationFormAutoEvaluationConfiguration,
  EvaluationFormLanguageConfiguration,
  EvaluationFormScoringStrategy,
  EvaluationFormTargetConfiguration,
  EvaluationReviewConfiguration,
  OutboundStrategy,
} from "./models_0";
import type {
  ChatMetrics,
  ContactDetails,
  ContactEvaluation,
  Customer,
  CustomerVoiceActivity,
  DisconnectDetails,
  EndpointInfo,
  Evaluation,
  GlobalResiliencyMetadata,
  NextContactEntry,
  QualityMetrics,
  QueueInfo,
  RecordingInfo,
  TaskTemplateInfoV2,
  WisdomInfo,
} from "./models_1";
import type {
  ContactSearchSummaryAgentInfo,
  ContactSearchSummaryAiAgentInfo,
  ContactSearchSummaryQueueInfo,
} from "./models_2";
import type {
  ContactSearchSummarySegmentAttributeValue,
  EvaluationFormItem,
  RoutingCriteria,
  RoutingCriteriaInput,
  SegmentAttributeValue,
} from "./models_3";

/**
 * <p>Information about the evaluation form.</p>
 * @public
 */
export interface EvaluationForm {
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
   * <p>The description of the evaluation form.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The status of the evaluation form.</p>
   * @public
   */
  Status: EvaluationFormVersionStatus | undefined;

  /**
   * <p>Items that are part of the evaluation form.  The total number of sections and questions must not exceed 100 each.  Questions must be contained in a section.</p>
   * @public
   */
  Items: EvaluationFormItem[] | undefined;

  /**
   * <p>A scoring strategy of the evaluation form.</p>
   * @public
   */
  ScoringStrategy?: EvaluationFormScoringStrategy | undefined;

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
   * <p>The automatic evaluation configuration of an evaluation form.</p>
   * @public
   */
  AutoEvaluationConfiguration?: EvaluationFormAutoEvaluationConfiguration | undefined;

  /**
   * <p>Configuration for evaluation review settings of this evaluation form.</p>
   * @public
   */
  ReviewConfiguration?: EvaluationReviewConfiguration | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Configuration that specifies the target for this evaluation form.</p>
   * @public
   */
  TargetConfiguration?: EvaluationFormTargetConfiguration | undefined;

  /**
   * <p>Configuration for language settings of this evaluation form.</p>
   * @public
   */
  LanguageConfiguration?: EvaluationFormLanguageConfiguration | undefined;

  /**
   * <p>The status of the most recent validation run for this evaluation form. Valid values:
   *    <code>IN_PROGRESS</code>, <code>COMPLETED</code>, <code>FAILED</code>.</p>
   * @public
   */
  LatestValidationStatus?: EvaluationFormValidationStatus | undefined;

  /**
   * <p>The timestamp when the most recent validation was started for this evaluation form.</p>
   * @public
   */
  LastValidationTime?: Date | undefined;
}

/**
 * <p>Information about an evaluation form used in a contact evaluation.</p>
 * @public
 */
export interface EvaluationFormContent {
  /**
   * <p>A version of the evaluation form.</p>
   * @public
   */
  EvaluationFormVersion: number | undefined;

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
   * <p>The description of the evaluation form.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Items that are part of the evaluation form.  The total number of sections and questions must not exceed 100 each.  Questions must be contained in a section.</p>
   * @public
   */
  Items: EvaluationFormItem[] | undefined;

  /**
   * <p>A scoring strategy of the evaluation form.</p>
   * @public
   */
  ScoringStrategy?: EvaluationFormScoringStrategy | undefined;

  /**
   * <p>The configuration of the automated evaluation.</p>
   * @public
   */
  AutoEvaluationConfiguration?: EvaluationFormAutoEvaluationConfiguration | undefined;

  /**
   * <p>Configuration that specifies the target for this evaluation form content.</p>
   * @public
   */
  TargetConfiguration?: EvaluationFormTargetConfiguration | undefined;

  /**
   * <p>Configuration for language settings of this evaluation form content.</p>
   * @public
   */
  LanguageConfiguration?: EvaluationFormLanguageConfiguration | undefined;

  /**
   * <p>Configuration for evaluation review settings of this evaluation form content.</p>
   * @public
   */
  ReviewConfiguration?: EvaluationReviewConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateContactRoutingDataRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact in this instance of Connect Customer. </p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The number of seconds to add or subtract from the contact's routing age. Contacts are routed to agents on a
   *    first-come, first-serve basis. This means that changing their amount of time in queue compared to others also changes
   *    their position in queue.</p>
   * @public
   */
  QueueTimeAdjustmentSeconds?: number | undefined;

  /**
   * <p>Priority of the contact in the queue. The default priority for new contacts is 5. You can raise the priority of
   *    a contact compared to other contacts in the queue by assigning them a higher priority, such as 1 or 2.</p>
   * @public
   */
  QueuePriority?: number | undefined;

  /**
   * <p>Updates the routing criteria on the contact. These properties can be used to change how a contact is routed
   *    within the queue.</p>
   * @public
   */
  RoutingCriteria?: RoutingCriteriaInput | undefined;
}

/**
 * @public
 */
export interface UpdateEvaluationFormRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>A version of the evaluation form to update.</p>
   * @public
   */
  EvaluationFormVersion: number | undefined;

  /**
   * <p>A flag indicating whether the operation must create a new version.</p>
   * @public
   */
  CreateNewVersion?: boolean | undefined;

  /**
   * <p>A title of the evaluation form.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The description of the evaluation form.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Items that are part of the evaluation form.  The total number of sections and questions must not exceed 100 each.  Questions must be contained in a section.</p>
   * @public
   */
  Items: EvaluationFormItem[] | undefined;

  /**
   * <p>A scoring strategy of the evaluation form.</p>
   * @public
   */
  ScoringStrategy?: EvaluationFormScoringStrategy | undefined;

  /**
   * <p>Whether automated evaluations are enabled.</p>
   * @public
   */
  AutoEvaluationConfiguration?: EvaluationFormAutoEvaluationConfiguration | undefined;

  /**
   * <p>Configuration for evaluation review settings of the evaluation form.</p>
   * @public
   */
  ReviewConfiguration?: EvaluationReviewConfiguration | undefined;

  /**
   * <p>A boolean flag indicating whether to update evaluation form to draft state.</p>
   * @public
   */
  AsDraft?: boolean | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Configuration that specifies the target for the evaluation form.</p>
   * @public
   */
  TargetConfiguration?: EvaluationFormTargetConfiguration | undefined;

  /**
   * <p>Configuration for language settings of the evaluation form.</p>
   * @public
   */
  LanguageConfiguration?: EvaluationFormLanguageConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeContactEvaluationResponse {
  /**
   * <p>Information about the evaluation form completed for a specific contact.</p>
   * @public
   */
  Evaluation: Evaluation | undefined;

  /**
   * <p>Information about the evaluation form.</p>
   * @public
   */
  EvaluationForm: EvaluationFormContent | undefined;
}

/**
 * @public
 */
export interface DescribeEvaluationFormResponse {
  /**
   * <p>Information about the evaluation form.</p>
   * @public
   */
  EvaluationForm: EvaluationForm | undefined;
}

/**
 * <p>Contains information about a contact.</p>
 * @public
 */
export interface Contact {
  /**
   * <p>The Amazon Resource Name (ARN) for the contact.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The identifier for the contact.</p>
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
   * <p>This is the root contactId which is used as a unique identifier for all subsequent contacts in a contact
   *    tree.</p>
   * @public
   */
  ContactAssociationId?: string | undefined;

  /**
   * <p>Indicates how the contact was initiated.</p>
   * @public
   */
  InitiationMethod?: ContactInitiationMethod | undefined;

  /**
   * <p>The name of the contact.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the contact.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>How the contact reached your contact center.</p>
   * @public
   */
  Channel?: Channel | undefined;

  /**
   * <p>If this contact was queued, this contains information about the queue. </p>
   * @public
   */
  QueueInfo?: QueueInfo | undefined;

  /**
   * <p>Information about the agent who accepted the contact.</p>
   * @public
   */
  AgentInfo?: AgentInfo | undefined;

  /**
   * <p>The date and time this contact was initiated, in UTC time. For <code>INBOUND</code>, this is when the contact
   *    arrived. For <code>OUTBOUND</code>, this is when the agent began dialing. For <code>CALLBACK</code>, this is when the
   *    callback contact was created. For <code>TRANSFER</code> and <code>QUEUE_TRANSFER</code>, this is when the transfer
   *    was initiated. For <code>API</code>, this is when the request arrived. For <code>EXTERNAL_OUTBOUND</code>, this is
   *    when the agent started dialing the external participant. For <code>MONITOR</code>, this is when the supervisor
   *    started listening to a contact.</p>
   * @public
   */
  InitiationTimestamp?: Date | undefined;

  /**
   * <p>The date and time that the customer endpoint disconnected from the current contact, in UTC time. In transfer
   *    scenarios, the DisconnectTimestamp of the previous contact indicates the date and time when that contact
   *    ended.</p>
   * @public
   */
  DisconnectTimestamp?: Date | undefined;

  /**
   * <p>The timestamp when contact was last updated.</p>
   * @public
   */
  LastUpdateTimestamp?: Date | undefined;

  /**
   * <p>The timestamp when the contact was last paused.</p>
   * @public
   */
  LastPausedTimestamp?: Date | undefined;

  /**
   * <p>The timestamp when the contact was last resumed.</p>
   * @public
   */
  LastResumedTimestamp?: Date | undefined;

  /**
   * <p>The timestamp when ringing started for a campaign call.</p>
   * @public
   */
  RingStartTimestamp?: Date | undefined;

  /**
   * <p>Total pause count for a contact.</p>
   * @public
   */
  TotalPauseCount?: number | undefined;

  /**
   * <p>Total pause duration for a contact in seconds.</p>
   * @public
   */
  TotalPauseDurationInSeconds?: number | undefined;

  /**
   * <p>The timestamp, in Unix epoch time format, at which to start running the inbound flow. </p>
   * @public
   */
  ScheduledTimestamp?: Date | undefined;

  /**
   * <p>The contactId that is <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html#relatedcontactid">related</a> to this contact.</p>
   * @public
   */
  RelatedContactId?: string | undefined;

  /**
   * <p>Information about Connect Customer Wisdom.</p>
   * @public
   */
  WisdomInfo?: WisdomInfo | undefined;

  /**
   * <p>The customer's identification number. For example, the <code>CustomerId</code> may be a customer number from
   *    your CRM. You can create a Lambda function to pull the unique customer ID of the caller from your CRM system. If you
   *    enable Connect Customer Voice ID capability, this attribute is populated with the <code>CustomerSpeakerId</code> of
   *    the caller.</p>
   * @public
   */
  CustomerId?: string | undefined;

  /**
   * <p>The customer or external third party participant endpoint.</p>
   * @public
   */
  CustomerEndpoint?: EndpointInfo | undefined;

  /**
   * <p>The system endpoint. For <code>INBOUND</code>, this is the phone number or email address that the customer
   *    dialed. For <code>OUTBOUND</code> and <code>EXTERNAL_OUTBOUND</code>, this is the outbound caller ID number assigned
   *    to the outbound queue that is used to dial the customer. For callback, this shows up as Softphone for calls handled
   *    by agents with softphone.</p>
   * @public
   */
  SystemEndpoint?: EndpointInfo | undefined;

  /**
   * <p>An integer that represents the queue time adjust to be applied to the contact, in seconds (longer / larger queue
   *    time are routed preferentially). Cannot be specified if the QueuePriority is specified. Must be statically defined
   *    and a valid integer value.</p>
   * @public
   */
  QueueTimeAdjustmentSeconds?: number | undefined;

  /**
   * <p>An integer that represents the queue priority to be applied to the contact (lower priorities are routed
   *    preferentially). Cannot be specified if the QueueTimeAdjustmentSeconds is specified. Must be statically defined, must
   *    be larger than zero, and a valid integer value. Default Value is 5.</p>
   * @public
   */
  QueuePriority?: number | undefined;

  /**
   * <p>Tags associated with the contact. This contains both Amazon Web Services generated and user-defined tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The timestamp when customer endpoint connected to Connect Customer.</p>
   * @public
   */
  ConnectedToSystemTimestamp?: Date | undefined;

  /**
   * <p>Latest routing criteria on the contact.</p>
   * @public
   */
  RoutingCriteria?: RoutingCriteria | undefined;

  /**
   * <p>Information about the Customer on the contact.</p>
   * @public
   */
  Customer?: Customer | undefined;

  /**
   * <p>Information associated with a campaign.</p>
   * @public
   */
  Campaign?: Campaign | undefined;

  /**
   * <p>Indicates how an <a href="https://docs.aws.amazon.com/connect/latest/adminguide/how-to-create-campaigns.html">outbound campaign</a> call is actually disposed if the contact is connected to Connect Customer.</p>
   * @public
   */
  AnsweringMachineDetectionStatus?: AnsweringMachineDetectionStatus | undefined;

  /**
   * <p>Information about customer’s voice activity.</p>
   * @public
   */
  CustomerVoiceActivity?: CustomerVoiceActivity | undefined;

  /**
   * <p>Information about the quality of the participant's media connection.</p>
   * @public
   */
  QualityMetrics?: QualityMetrics | undefined;

  /**
   * <p>Information about how agent, bot, and customer interact in a chat contact.</p>
   * @public
   */
  ChatMetrics?: ChatMetrics | undefined;

  /**
   * <p>Information about the call disconnect experience.</p>
   * @public
   */
  DisconnectDetails?: DisconnectDetails | undefined;

  /**
   * <p>List of additional email addresses for an email contact.</p>
   * @public
   */
  AdditionalEmailRecipients?: AdditionalEmailRecipients | undefined;

  /**
   * <p>A set of system defined key-value pairs stored on individual contact segments using an attribute map. The
   *    attributes are standard Connect Customer attributes and can be accessed in flows. Attribute keys can include only
   *    alphanumeric, -, and _ characters. This field can be used to show channel subtype. For example,
   *     <code>connect:Guide</code> or <code>connect:SMS</code>.</p>
   * @public
   */
  SegmentAttributes?: Record<string, SegmentAttributeValue> | undefined;

  /**
   * <p>If recording was enabled, this is information about the recordings.</p>
   * @public
   */
  Recordings?: RecordingInfo[] | undefined;

  /**
   * <p>The disconnect reason for the contact. For a list and description of all the possible disconnect reasons by
   *    channel, see DisconnectReason under <a href="https://docs.aws.amazon.com/connect/latest/adminguide/ctr-data-model.html#ctr-ContactTraceRecord">ContactTraceRecord</a> in the
   *      <i>Connect Customer Administrator Guide</i>. </p>
   * @public
   */
  DisconnectReason?: string | undefined;

  /**
   * <p>Information about the contact evaluations where the key is the FormId, which is a unique identifier for the
   *    form.</p>
   * @public
   */
  ContactEvaluations?: Record<string, ContactEvaluation> | undefined;

  /**
   * <p>If this contact was created using a task template, this contains information about the task template.</p>
   * @public
   */
  TaskTemplateInfo?: TaskTemplateInfoV2 | undefined;

  /**
   * <p>A map of string key/value pairs that contain user-defined attributes which are lightly typed within the contact.
   *    This object is used only for task contacts.</p>
   * @public
   */
  ContactDetails?: ContactDetails | undefined;

  /**
   * <p>Information about the outbound strategy.</p>
   * @public
   */
  OutboundStrategy?: OutboundStrategy | undefined;

  /**
   * <p>The attributes of the contact.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * <p> List of next contact entries for the contact. </p>
   * @public
   */
  NextContacts?: NextContactEntry[] | undefined;

  /**
   * <p>Information about the global resiliency configuration for the contact, including traffic distribution details.</p>
   * @public
   */
  GlobalResiliencyMetadata?: GlobalResiliencyMetadata | undefined;
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
   * <p>The date and time this contact was initiated, in UTC time. For <code>INBOUND</code>, this is when the contact
   *    arrived. For <code>OUTBOUND</code>, this is when the agent began dialing. For <code>CALLBACK</code>, this is when the
   *    callback contact was created. For <code>TRANSFER</code> and <code>QUEUE_TRANSFER</code>, this is when the transfer
   *    was initiated. For API, this is when the request arrived. For <code>EXTERNAL_OUTBOUND</code>, this is when the agent
   *    started dialing the external participant. For <code>MONITOR</code>, this is when the supervisor started listening to
   *    a contact.</p>
   * @public
   */
  InitiationTimestamp?: Date | undefined;

  /**
   * <p>The timestamp when the customer endpoint disconnected from Connect Customer.</p>
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

  /**
   * <p>Indicates name of the contact.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Latest routing criteria on the contact.</p>
   * @public
   */
  RoutingCriteria?: RoutingCriteria | undefined;

  /**
   * <p>Tags associated with the contact. This contains both Amazon Web Services generated and user-defined tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Additional routing information for contacts created in ACGR instances.</p>
   * @public
   */
  GlobalResiliencyMetadata?: GlobalResiliencyMetadata | undefined;

  /**
   * <p>Information about the AI agents involved in the contact.</p>
   * @public
   */
  AiAgentInfo?: ContactSearchSummaryAiAgentInfo[] | undefined;
}

/**
 * @public
 */
export interface DescribeContactResponse {
  /**
   * <p>Information about the contact.</p>
   * @public
   */
  Contact?: Contact | undefined;
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
