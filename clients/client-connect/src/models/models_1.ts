import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

import {
  AgentStatusState,
  ContactFlowModuleState,
  ContactFlowState,
  HoursOfOperationConfig,
  InstanceAttributeType,
  InstanceStorageConfig,
  InstanceStorageResourceType,
  MediaConcurrency,
  OutboundCallerConfig,
  QueueStatus,
  QuickConnectConfig,
  ReferenceType,
  RoutingProfileQueueConfig,
  UserIdentityInfo,
  UserPhoneConfig,
} from "./models_0";

/**
 * <p>The contact is not permitted.</p>
 */
export interface OutboundContactNotPermittedException extends __SmithyException, $MetadataBearer {
  name: "OutboundContactNotPermittedException";
  $fault: "client";
  /**
   * <p>The message about the contact.</p>
   */
  Message?: string;
}

/**
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

export namespace AnswerMachineDetectionConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnswerMachineDetectionConfig): any => ({
    ...obj,
  });
}

export enum TrafficType {
  CAMPAIGN = "CAMPAIGN",
  GENERAL = "GENERAL",
}

export interface StartOutboundVoiceContactRequest {
  /**
   * <p>The phone number of the customer, in E.164 format.</p>
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * <p>The
   *    identifier of the contact flow for the outbound call. To see the ContactFlowId in the Amazon Connect
   *    console user interface, on the navigation menu go to <b>Routing</b>,
   *     <b>Contact Flows</b>. Choose the contact flow. On the contact flow
   *    page, under the name of the contact flow, choose <b>Show additional flow
   *     information</b>. The ContactFlowId is the last part of the ARN, shown here in bold: </p>
   *          <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b>
   *          </p>
   */
  ContactFlowId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *    request. The token is valid for 7 days after creation. If a contact is already started, the
   *    contact ID is returned.
   *    </p>
   */
  ClientToken?: string;

  /**
   * <p>The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify
   *    a source phone number, you must specify a queue.</p>
   */
  SourcePhoneNumber?: string;

  /**
   * <p>The queue for the call. If you specify a queue, the phone displayed for caller ID is the
   *    phone number specified in the queue. If you do not specify a queue, the queue defined in the
   *    contact flow is used. If you do not specify a queue, you must specify a source phone
   *    number.</p>
   */
  QueueId?: string;

  /**
   * <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect
   *    attributes, and can be accessed in contact flows just like any other contact attributes.</p>
   *          <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys
   *    can include only alphanumeric, dash, and underscore characters.</p>
   */
  Attributes?: { [key: string]: string };

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
   *    Amazon Connect. The default value is <code>GENERAL</code>. Use <code>CAMPAIGN</code> if
   *     <code>EnableAnswerMachineDetection</code> is set to <code>true</code>. For all other cases, use
   *     <code>GENERAL</code>. </p>
   */
  TrafficType?: TrafficType | string;
}

export namespace StartOutboundVoiceContactRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartOutboundVoiceContactRequest): any => ({
    ...obj,
  });
}

export interface StartOutboundVoiceContactResponse {
  /**
   * <p>The identifier of this contact within the Amazon Connect instance.</p>
   */
  ContactId?: string;
}

export namespace StartOutboundVoiceContactResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartOutboundVoiceContactResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A link that an agent selects to complete a given task. You can have up to 4,096 UTF-8 bytes
 *    across all references for a contact.</p>
 */
export interface Reference {
  /**
   * <p>A valid value for the reference. For example, for a URL reference, a formatted URL that is
   *    displayed to an agent in the Contact Control Panel (CCP).</p>
   */
  Value: string | undefined;

  /**
   * <p>The type of the reference. Only <code>URL</code> type can be added or updated on a
   *    contact.</p>
   */
  Type: ReferenceType | string | undefined;
}

export namespace Reference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Reference): any => ({
    ...obj,
  });
}

export interface StartTaskContactRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the previous chat, voice, or task contact. </p>
   */
  PreviousContactId?: string;

  /**
   * <p>The identifier of the contact flow for initiating the tasks. To see the ContactFlowId in the
   *    Amazon Connect console user interface, on the navigation menu go to <b>Routing</b>, <b>Contact Flows</b>. Choose the contact flow. On
   *    the contact flow page, under the name of the contact flow, choose <b>Show
   *     additional flow information</b>. The ContactFlowId is the last part of the ARN, shown
   *    here in bold: </p>
   *          <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b>
   *          </p>
   */
  ContactFlowId: string | undefined;

  /**
   * <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect
   *    attributes, and can be accessed in contact flows just like any other contact attributes.</p>
   *          <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys
   *    can include only alphanumeric, dash, and underscore characters.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>The name of a task that is shown to an agent in the Contact Control Panel (CCP).</p>
   */
  Name: string | undefined;

  /**
   * <p>A formatted URL that is shown to an agent in the Contact Control Panel (CCP).</p>
   */
  References?: { [key: string]: Reference };

  /**
   * <p>A description of the task that is shown to an agent in the Contact Control Panel
   *    (CCP).</p>
   */
  Description?: string;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *    request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The timestamp, in Unix Epoch seconds format, at which to start running the inbound contact flow. The scheduled time cannot be in the past. It must be within up to 6 days in future. </p>
   */
  ScheduledTime?: Date;
}

export namespace StartTaskContactRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartTaskContactRequest): any => ({
    ...obj,
  });
}

export interface StartTaskContactResponse {
  /**
   * <p>The identifier of this contact within the Amazon Connect instance.</p>
   */
  ContactId?: string;
}

export namespace StartTaskContactResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartTaskContactResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The contact with the specified ID is not active or does not exist.</p>
 */
export interface ContactNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ContactNotFoundException";
  $fault: "client";
  /**
   * <p>The message.</p>
   */
  Message?: string;
}

export interface StopContactRequest {
  /**
   * <p>The ID of the contact.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace StopContactRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopContactRequest): any => ({
    ...obj,
  });
}

export interface StopContactResponse {}

export namespace StopContactResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopContactResponse): any => ({
    ...obj,
  });
}

export interface StopContactRecordingRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
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

export namespace StopContactRecordingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopContactRecordingRequest): any => ({
    ...obj,
  });
}

export interface StopContactRecordingResponse {}

export namespace StopContactRecordingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopContactRecordingResponse): any => ({
    ...obj,
  });
}

export interface StopContactStreamingRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
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

export namespace StopContactStreamingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopContactStreamingRequest): any => ({
    ...obj,
  });
}

export interface StopContactStreamingResponse {}

export namespace StopContactStreamingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopContactStreamingResponse): any => ({
    ...obj,
  });
}

export interface SuspendContactRecordingRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
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

export namespace SuspendContactRecordingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SuspendContactRecordingRequest): any => ({
    ...obj,
  });
}

export interface SuspendContactRecordingResponse {}

export namespace SuspendContactRecordingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SuspendContactRecordingResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>One or more tags. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
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

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UpdateAgentStatusRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
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

export namespace UpdateAgentStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAgentStatusRequest): any => ({
    ...obj,
  });
}

export interface UpdateContactRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
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
   * <p>A formatted URL that is shown to an agent in the Contact Control Panel (CCP).</p>
   */
  References?: { [key: string]: Reference };
}

export namespace UpdateContactRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactRequest): any => ({
    ...obj,
  });
}

export interface UpdateContactResponse {}

export namespace UpdateContactResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactResponse): any => ({
    ...obj,
  });
}

export interface UpdateContactAttributesRequest {
  /**
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
   */
  InitialContactId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The Amazon Connect attributes. These attributes can be accessed in contact flows just like any other
   *    contact attributes.</p>
   *          <p>You can have up to 32,768 UTF-8 bytes across all attributes for a contact. Attribute keys
   *    can include only alphanumeric, dash, and underscore characters.</p>
   */
  Attributes: { [key: string]: string } | undefined;
}

export namespace UpdateContactAttributesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactAttributesRequest): any => ({
    ...obj,
  });
}

export interface UpdateContactAttributesResponse {}

export namespace UpdateContactAttributesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactAttributesResponse): any => ({
    ...obj,
  });
}

export interface UpdateContactFlowContentRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact flow.</p>
   */
  ContactFlowId: string | undefined;

  /**
   * <p>The JSON string that represents contact flow’s content. For an example, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language-example.html">Example contact
   *     flow in Amazon Connect Flow language</a> in the <i>Amazon Connect Administrator Guide</i>.
   *   </p>
   */
  Content: string | undefined;
}

export namespace UpdateContactFlowContentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactFlowContentRequest): any => ({
    ...obj,
  });
}

export interface UpdateContactFlowMetadataRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact flow.</p>
   */
  ContactFlowId: string | undefined;

  /**
   * <p>TThe name of the contact flow.</p>
   */
  Name?: string;

  /**
   * <p>The description of the contact flow.</p>
   */
  Description?: string;

  /**
   * <p>The state of contact flow.</p>
   */
  ContactFlowState?: ContactFlowState | string;
}

export namespace UpdateContactFlowMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactFlowMetadataRequest): any => ({
    ...obj,
  });
}

export interface UpdateContactFlowModuleContentRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact flow module.</p>
   */
  ContactFlowModuleId: string | undefined;

  /**
   * <p>The content of the contact flow module.</p>
   */
  Content: string | undefined;
}

export namespace UpdateContactFlowModuleContentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactFlowModuleContentRequest): any => ({
    ...obj,
  });
}

export interface UpdateContactFlowModuleContentResponse {}

export namespace UpdateContactFlowModuleContentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactFlowModuleContentResponse): any => ({
    ...obj,
  });
}

export interface UpdateContactFlowModuleMetadataRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact flow module.</p>
   */
  ContactFlowModuleId: string | undefined;

  /**
   * <p>The name of the contact flow module.</p>
   */
  Name?: string;

  /**
   * <p>The description of the contact flow module.</p>
   */
  Description?: string;

  /**
   * <p>The state of contact flow module.</p>
   */
  State?: ContactFlowModuleState | string;
}

export namespace UpdateContactFlowModuleMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactFlowModuleMetadataRequest): any => ({
    ...obj,
  });
}

export interface UpdateContactFlowModuleMetadataResponse {}

export namespace UpdateContactFlowModuleMetadataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactFlowModuleMetadataResponse): any => ({
    ...obj,
  });
}

export interface UpdateContactFlowNameRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact flow.</p>
   */
  ContactFlowId: string | undefined;

  /**
   * <p>The name of the contact flow.</p>
   */
  Name?: string;

  /**
   * <p>The description of the contact flow.</p>
   */
  Description?: string;
}

export namespace UpdateContactFlowNameRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactFlowNameRequest): any => ({
    ...obj,
  });
}

export interface UpdateContactScheduleRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The timestamp, in Unix Epoch seconds format, at which to start running the inbound contact flow. The scheduled time cannot be in the past. It must be within up to 6 days in future. </p>
   */
  ScheduledTime: Date | undefined;
}

export namespace UpdateContactScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactScheduleRequest): any => ({
    ...obj,
  });
}

export interface UpdateContactScheduleResponse {}

export namespace UpdateContactScheduleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactScheduleResponse): any => ({
    ...obj,
  });
}

export interface UpdateHoursOfOperationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
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

export namespace UpdateHoursOfOperationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateHoursOfOperationRequest): any => ({
    ...obj,
  });
}

export interface UpdateInstanceAttributeRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
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

export namespace UpdateInstanceAttributeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInstanceAttributeRequest): any => ({
    ...obj,
  });
}

export interface UpdateInstanceStorageConfigRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
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

export namespace UpdateInstanceStorageConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInstanceStorageConfigRequest): any => ({
    ...obj,
  });
}

export interface UpdateQueueHoursOfOperationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
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

export namespace UpdateQueueHoursOfOperationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateQueueHoursOfOperationRequest): any => ({
    ...obj,
  });
}

export interface UpdateQueueMaxContactsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
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

export namespace UpdateQueueMaxContactsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateQueueMaxContactsRequest): any => ({
    ...obj,
  });
}

export interface UpdateQueueNameRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
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

export namespace UpdateQueueNameRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateQueueNameRequest): any => ({
    ...obj,
  });
}

export interface UpdateQueueOutboundCallerConfigRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
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

export namespace UpdateQueueOutboundCallerConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateQueueOutboundCallerConfigRequest): any => ({
    ...obj,
  });
}

export interface UpdateQueueStatusRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
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

export namespace UpdateQueueStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateQueueStatusRequest): any => ({
    ...obj,
  });
}

export interface UpdateQuickConnectConfigRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
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

export namespace UpdateQuickConnectConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateQuickConnectConfigRequest): any => ({
    ...obj,
  });
}

export interface UpdateQuickConnectNameRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
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

export namespace UpdateQuickConnectNameRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateQuickConnectNameRequest): any => ({
    ...obj,
  });
}

export interface UpdateRoutingProfileConcurrencyRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
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

export namespace UpdateRoutingProfileConcurrencyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoutingProfileConcurrencyRequest): any => ({
    ...obj,
  });
}

export interface UpdateRoutingProfileDefaultOutboundQueueRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
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

export namespace UpdateRoutingProfileDefaultOutboundQueueRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoutingProfileDefaultOutboundQueueRequest): any => ({
    ...obj,
  });
}

export interface UpdateRoutingProfileNameRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
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

export namespace UpdateRoutingProfileNameRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoutingProfileNameRequest): any => ({
    ...obj,
  });
}

export interface UpdateRoutingProfileQueuesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
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

export namespace UpdateRoutingProfileQueuesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoutingProfileQueuesRequest): any => ({
    ...obj,
  });
}

export interface UpdateSecurityProfileRequest {
  /**
   * <p>The description of the security profile.</p>
   */
  Description?: string;

  /**
   * <p>The permissions granted to a security profile.</p>
   */
  Permissions?: string[];

  /**
   * <p>The identifier for the security profle.</p>
   */
  SecurityProfileId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace UpdateSecurityProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSecurityProfileRequest): any => ({
    ...obj,
  });
}

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
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace UpdateUserHierarchyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserHierarchyRequest): any => ({
    ...obj,
  });
}

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
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace UpdateUserHierarchyGroupNameRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserHierarchyGroupNameRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the hierarchy level to update.</p>
 */
export interface HierarchyLevelUpdate {
  /**
   * <p>The name of the user hierarchy level. Must not be more than 50 characters.</p>
   */
  Name: string | undefined;
}

export namespace HierarchyLevelUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HierarchyLevelUpdate): any => ({
    ...obj,
  });
}

/**
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

export namespace HierarchyStructureUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HierarchyStructureUpdate): any => ({
    ...obj,
  });
}

export interface UpdateUserHierarchyStructureRequest {
  /**
   * <p>The hierarchy levels to update.</p>
   */
  HierarchyStructure: HierarchyStructureUpdate | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace UpdateUserHierarchyStructureRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserHierarchyStructureRequest): any => ({
    ...obj,
  });
}

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
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace UpdateUserIdentityInfoRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserIdentityInfoRequest): any => ({
    ...obj,
  });
}

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
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace UpdateUserPhoneConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserPhoneConfigRequest): any => ({
    ...obj,
  });
}

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
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace UpdateUserRoutingProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserRoutingProfileRequest): any => ({
    ...obj,
  });
}

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
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace UpdateUserSecurityProfilesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserSecurityProfilesRequest): any => ({
    ...obj,
  });
}
