// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeContactRequest } from "../models/models_1";
import type { DescribeContactResponse } from "../models/models_4";
import { DescribeContact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeContactCommand}.
 */
export interface DescribeContactCommandInput extends DescribeContactRequest {}
/**
 * @public
 *
 * The output of {@link DescribeContactCommand}.
 */
export interface DescribeContactCommandOutput extends DescribeContactResponse, __MetadataBearer {}

/**
 * This API is in preview release for Connect Customer and is subject to change.
 *
 * Describes the specified contact.
 *
 * **Use cases**
 *
 * Following are common uses cases for this API:
 *
 * - Retrieve contact information such as the caller's phone number and the specific number the caller dialed to integrate into custom monitoring or custom agent experience solutions.
 * - Detect when a customer chat session disconnects due to a network issue on the agent's end. Use the DisconnectReason field in the [ContactTraceRecord](https://docs.aws.amazon.com/connect/latest/adminguide/ctr-data-model.html#ctr-ContactTraceRecord) to detect this event and then re-queue the chat for followup.
 * - Identify after contact work (ACW) duration and call recordings information when a COMPLETED event is received by using the [contact event stream](https://docs.aws.amazon.com/connect/latest/adminguide/contact-events.html).
 *
 * **Important things to know**
 *
 * - `SystemEndpoint` is not populated for contacts with initiation method of MONITOR, QUEUE_TRANSFER, or CALLBACK
 * - Contact information remains available in Connect Customer for 24 months from the `InitiationTimestamp`, and then it is deleted. Only contact information that is available in Connect Customer is returned by this API.
 *
 * **Endpoints**: See [Connect Customer endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/connect_region.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DescribeContactRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 * };
 * const command = new DescribeContactCommand(input);
 * const response = await client.send(command);
 * // { // DescribeContactResponse
 * //   Contact: { // Contact
 * //     Arn: "STRING_VALUE",
 * //     Id: "STRING_VALUE",
 * //     InitialContactId: "STRING_VALUE",
 * //     PreviousContactId: "STRING_VALUE",
 * //     ContactAssociationId: "STRING_VALUE",
 * //     InitiationMethod: "INBOUND" || "OUTBOUND" || "TRANSFER" || "QUEUE_TRANSFER" || "CALLBACK" || "API" || "DISCONNECT" || "MONITOR" || "EXTERNAL_OUTBOUND" || "WEBRTC_API" || "AGENT_REPLY" || "FLOW",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Channel: "VOICE" || "CHAT" || "TASK" || "EMAIL",
 * //     QueueInfo: { // QueueInfo
 * //       Id: "STRING_VALUE",
 * //       EnqueueTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //     AgentInfo: { // AgentInfo
 * //       Id: "STRING_VALUE",
 * //       AcceptedByAgentTimestamp: new Date("TIMESTAMP"),
 * //       PreviewEndTimestamp: new Date("TIMESTAMP"),
 * //       ConnectedToAgentTimestamp: new Date("TIMESTAMP"),
 * //       AgentPauseDurationInSeconds: Number("int"),
 * //       HierarchyGroups: { // HierarchyGroups
 * //         Level1: { // AgentHierarchyGroup
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         Level2: {
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         Level3: {
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         Level4: {
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         Level5: {
 * //           Arn: "STRING_VALUE",
 * //         },
 * //       },
 * //       DeviceInfo: { // DeviceInfo
 * //         PlatformName: "STRING_VALUE",
 * //         PlatformVersion: "STRING_VALUE",
 * //         OperatingSystem: "STRING_VALUE",
 * //       },
 * //       Capabilities: { // ParticipantCapabilities
 * //         Video: "SEND",
 * //         ScreenShare: "SEND",
 * //       },
 * //       AfterContactWorkDuration: Number("int"),
 * //       AfterContactWorkStartTimestamp: new Date("TIMESTAMP"),
 * //       AfterContactWorkEndTimestamp: new Date("TIMESTAMP"),
 * //       AgentInitiatedHoldDuration: Number("int"),
 * //       StateTransitions: [ // StateTransitions
 * //         { // StateTransition
 * //           State: "INITIAL" || "CONNECTED" || "DISCONNECTED" || "MISSED",
 * //           StateStartTimestamp: new Date("TIMESTAMP"),
 * //           StateEndTimestamp: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //       VoiceEnhancementMode: "VOICE_ISOLATION" || "NOISE_SUPPRESSION" || "NONE",
 * //       ActiveRegion: "STRING_VALUE",
 * //     },
 * //     InitiationTimestamp: new Date("TIMESTAMP"),
 * //     DisconnectTimestamp: new Date("TIMESTAMP"),
 * //     LastUpdateTimestamp: new Date("TIMESTAMP"),
 * //     LastPausedTimestamp: new Date("TIMESTAMP"),
 * //     LastResumedTimestamp: new Date("TIMESTAMP"),
 * //     RingStartTimestamp: new Date("TIMESTAMP"),
 * //     TotalPauseCount: Number("int"),
 * //     TotalPauseDurationInSeconds: Number("int"),
 * //     ScheduledTimestamp: new Date("TIMESTAMP"),
 * //     RelatedContactId: "STRING_VALUE",
 * //     WisdomInfo: { // WisdomInfo
 * //       SessionArn: "STRING_VALUE",
 * //       AiAgents: [ // AiAgents
 * //         { // AiAgentInfo
 * //           AiUseCase: "AgentAssistance" || "SelfService",
 * //           AiAgentVersionId: "STRING_VALUE",
 * //           AiAgentEscalated: true || false,
 * //         },
 * //       ],
 * //     },
 * //     CustomerId: "STRING_VALUE",
 * //     CustomerEndpoint: { // EndpointInfo
 * //       Type: "TELEPHONE_NUMBER" || "VOIP" || "CONTACT_FLOW" || "CONNECT_PHONENUMBER_ARN" || "EMAIL_ADDRESS",
 * //       Address: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //     },
 * //     SystemEndpoint: {
 * //       Type: "TELEPHONE_NUMBER" || "VOIP" || "CONTACT_FLOW" || "CONNECT_PHONENUMBER_ARN" || "EMAIL_ADDRESS",
 * //       Address: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //     },
 * //     QueueTimeAdjustmentSeconds: Number("int"),
 * //     QueuePriority: Number("long"),
 * //     Tags: { // ContactTagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     ConnectedToSystemTimestamp: new Date("TIMESTAMP"),
 * //     RoutingCriteria: { // RoutingCriteria
 * //       Steps: [ // Steps
 * //         { // Step
 * //           Expiry: { // Expiry
 * //             DurationInSeconds: Number("int"),
 * //             ExpiryTimestamp: new Date("TIMESTAMP"),
 * //           },
 * //           Expression: { // Expression
 * //             AttributeCondition: { // AttributeCondition
 * //               Name: "STRING_VALUE",
 * //               Value: "STRING_VALUE",
 * //               ProficiencyLevel: Number("float"),
 * //               Range: { // Range
 * //                 MinProficiencyLevel: Number("float"),
 * //                 MaxProficiencyLevel: Number("float"),
 * //               },
 * //               MatchCriteria: { // MatchCriteria
 * //                 AgentsCriteria: { // AgentsCriteria
 * //                   AgentIds: [ // AgentIds
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //               ComparisonOperator: "STRING_VALUE",
 * //             },
 * //             AndExpression: [ // Expressions
 * //               {
 * //                 AttributeCondition: {
 * //                   Name: "STRING_VALUE",
 * //                   Value: "STRING_VALUE",
 * //                   ProficiencyLevel: Number("float"),
 * //                   Range: {
 * //                     MinProficiencyLevel: Number("float"),
 * //                     MaxProficiencyLevel: Number("float"),
 * //                   },
 * //                   MatchCriteria: {
 * //                     AgentsCriteria: {
 * //                       AgentIds: [
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                   },
 * //                   ComparisonOperator: "STRING_VALUE",
 * //                 },
 * //                 AndExpression: [
 * //                   "<Expression>",
 * //                 ],
 * //                 OrExpression: [
 * //                   "<Expression>",
 * //                 ],
 * //                 NotAttributeCondition: {
 * //                   Name: "STRING_VALUE",
 * //                   Value: "STRING_VALUE",
 * //                   ProficiencyLevel: Number("float"),
 * //                   Range: {
 * //                     MinProficiencyLevel: Number("float"),
 * //                     MaxProficiencyLevel: Number("float"),
 * //                   },
 * //                   MatchCriteria: {
 * //                     AgentsCriteria: {
 * //                       AgentIds: [
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                   },
 * //                   ComparisonOperator: "STRING_VALUE",
 * //                 },
 * //               },
 * //             ],
 * //             OrExpression: [
 * //               "<Expression>",
 * //             ],
 * //             NotAttributeCondition: {
 * //               Name: "STRING_VALUE",
 * //               Value: "STRING_VALUE",
 * //               ProficiencyLevel: Number("float"),
 * //               Range: {
 * //                 MinProficiencyLevel: Number("float"),
 * //                 MaxProficiencyLevel: Number("float"),
 * //               },
 * //               MatchCriteria: {
 * //                 AgentsCriteria: {
 * //                   AgentIds: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //               ComparisonOperator: "STRING_VALUE",
 * //             },
 * //           },
 * //           Status: "ACTIVE" || "INACTIVE" || "JOINED" || "EXPIRED",
 * //         },
 * //       ],
 * //       ActivationTimestamp: new Date("TIMESTAMP"),
 * //       Index: Number("int"),
 * //     },
 * //     Customer: { // Customer
 * //       DeviceInfo: {
 * //         PlatformName: "STRING_VALUE",
 * //         PlatformVersion: "STRING_VALUE",
 * //         OperatingSystem: "STRING_VALUE",
 * //       },
 * //       Capabilities: {
 * //         Video: "SEND",
 * //         ScreenShare: "SEND",
 * //       },
 * //     },
 * //     Campaign: { // Campaign
 * //       CampaignId: "STRING_VALUE",
 * //     },
 * //     AnsweringMachineDetectionStatus: "ANSWERED" || "UNDETECTED" || "ERROR" || "HUMAN_ANSWERED" || "SIT_TONE_DETECTED" || "SIT_TONE_BUSY" || "SIT_TONE_INVALID_NUMBER" || "FAX_MACHINE_DETECTED" || "VOICEMAIL_BEEP" || "VOICEMAIL_NO_BEEP" || "AMD_UNRESOLVED" || "AMD_UNANSWERED" || "AMD_ERROR" || "AMD_NOT_APPLICABLE",
 * //     CustomerVoiceActivity: { // CustomerVoiceActivity
 * //       GreetingStartTimestamp: new Date("TIMESTAMP"),
 * //       GreetingEndTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //     QualityMetrics: { // QualityMetrics
 * //       Agent: { // AgentQualityMetrics
 * //         Audio: { // AudioQualityMetricsInfo
 * //           QualityScore: Number("float"),
 * //           PotentialQualityIssues: [ // PotentialAudioQualityIssues
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       Customer: { // CustomerQualityMetrics
 * //         Audio: {
 * //           QualityScore: Number("float"),
 * //           PotentialQualityIssues: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     ChatMetrics: { // ChatMetrics
 * //       ChatContactMetrics: { // ChatContactMetrics
 * //         MultiParty: true || false,
 * //         TotalMessages: Number("int"),
 * //         TotalBotMessages: Number("int"),
 * //         TotalBotMessageLengthInChars: Number("int"),
 * //         ConversationCloseTimeInMillis: Number("long"),
 * //         ConversationTurnCount: Number("int"),
 * //         AgentFirstResponseTimestamp: new Date("TIMESTAMP"),
 * //         AgentFirstResponseTimeInMillis: Number("long"),
 * //       },
 * //       AgentMetrics: { // ParticipantMetrics
 * //         ParticipantId: "STRING_VALUE",
 * //         ParticipantType: "ALL" || "MANAGER" || "AGENT" || "CUSTOMER" || "THIRDPARTY",
 * //         ConversationAbandon: true || false,
 * //         MessagesSent: Number("int"),
 * //         NumResponses: Number("int"),
 * //         MessageLengthInChars: Number("int"),
 * //         TotalResponseTimeInMillis: Number("long"),
 * //         MaxResponseTimeInMillis: Number("long"),
 * //         LastMessageTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //       CustomerMetrics: {
 * //         ParticipantId: "STRING_VALUE",
 * //         ParticipantType: "ALL" || "MANAGER" || "AGENT" || "CUSTOMER" || "THIRDPARTY",
 * //         ConversationAbandon: true || false,
 * //         MessagesSent: Number("int"),
 * //         NumResponses: Number("int"),
 * //         MessageLengthInChars: Number("int"),
 * //         TotalResponseTimeInMillis: Number("long"),
 * //         MaxResponseTimeInMillis: Number("long"),
 * //         LastMessageTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //     DisconnectDetails: { // DisconnectDetails
 * //       PotentialDisconnectIssue: "STRING_VALUE",
 * //     },
 * //     AdditionalEmailRecipients: { // AdditionalEmailRecipients
 * //       ToList: [ // EmailRecipientsList
 * //         { // EmailRecipient
 * //           Address: "STRING_VALUE",
 * //           DisplayName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CcList: [
 * //         {
 * //           Address: "STRING_VALUE",
 * //           DisplayName: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     SegmentAttributes: { // SegmentAttributes
 * //       "<keys>": { // SegmentAttributeValue
 * //         ValueString: "STRING_VALUE",
 * //         ValueMap: { // SegmentAttributeValueMap
 * //           "<keys>": {
 * //             ValueString: "STRING_VALUE",
 * //             ValueMap: {
 * //               "<keys>": "<SegmentAttributeValue>",
 * //             },
 * //             ValueInteger: Number("int"),
 * //             ValueList: [ // SegmentAttributeValueList
 * //               "<SegmentAttributeValue>",
 * //             ],
 * //             ValueArn: "STRING_VALUE",
 * //           },
 * //         },
 * //         ValueInteger: Number("int"),
 * //         ValueList: [
 * //           "<SegmentAttributeValue>",
 * //         ],
 * //         ValueArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     Recordings: [ // Recordings
 * //       { // RecordingInfo
 * //         StorageType: "S3" || "KINESIS_VIDEO_STREAM" || "KINESIS_STREAM" || "KINESIS_FIREHOSE",
 * //         Location: "STRING_VALUE",
 * //         MediaStreamType: "AUDIO" || "VIDEO",
 * //         ParticipantType: "ALL" || "MANAGER" || "AGENT" || "CUSTOMER" || "THIRDPARTY",
 * //         FragmentStartNumber: "STRING_VALUE",
 * //         FragmentStopNumber: "STRING_VALUE",
 * //         StartTimestamp: new Date("TIMESTAMP"),
 * //         StopTimestamp: new Date("TIMESTAMP"),
 * //         Status: "AVAILABLE" || "DELETED",
 * //         DeletionReason: "STRING_VALUE",
 * //         UnprocessedTranscriptLocation: "STRING_VALUE",
 * //       },
 * //     ],
 * //     DisconnectReason: "STRING_VALUE",
 * //     ContactEvaluations: { // ContactEvaluations
 * //       "<keys>": { // ContactEvaluation
 * //         FormId: "STRING_VALUE",
 * //         EvaluationArn: "STRING_VALUE",
 * //         Status: "COMPLETE" || "IN_PROGRESS" || "DELETED",
 * //         StartTimestamp: new Date("TIMESTAMP"),
 * //         EndTimestamp: new Date("TIMESTAMP"),
 * //         DeleteTimestamp: new Date("TIMESTAMP"),
 * //         ExportLocation: "STRING_VALUE",
 * //       },
 * //     },
 * //     TaskTemplateInfo: { // TaskTemplateInfoV2
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //     ContactDetails: { // ContactDetails
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //     OutboundStrategy: { // OutboundStrategy
 * //       Type: "AGENT_FIRST", // required
 * //       Config: { // OutboundStrategyConfig
 * //         AgentFirst: { // AgentFirst
 * //           Preview: { // Preview
 * //             PostAcceptTimeoutConfig: { // PostAcceptTimeoutConfig
 * //               DurationInSeconds: Number("int"), // required
 * //             },
 * //             AllowedUserActions: [ // AllowedUserActions // required
 * //               "CALL" || "DISCARD",
 * //             ],
 * //           },
 * //         },
 * //       },
 * //     },
 * //     Attributes: { // Attributes
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     NextContacts: [ // NextContacts
 * //       { // NextContactEntry
 * //         Type: "QUICK_CONNECT",
 * //         NextContactMetadata: { // NextContactMetadata Union: only one key present
 * //           QuickConnectContactData: { // QuickConnectContactData
 * //             ContactId: "STRING_VALUE",
 * //             InitiationTimestamp: new Date("TIMESTAMP"),
 * //             QuickConnectId: "STRING_VALUE",
 * //             QuickConnectName: "STRING_VALUE",
 * //             QuickConnectType: "USER" || "QUEUE" || "PHONE_NUMBER" || "FLOW",
 * //           },
 * //         },
 * //       },
 * //     ],
 * //     GlobalResiliencyMetadata: { // GlobalResiliencyMetadata
 * //       ActiveRegion: "STRING_VALUE",
 * //       OriginRegion: "STRING_VALUE",
 * //       TrafficDistributionGroupId: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeContactCommandInput - {@link DescribeContactCommandInput}
 * @returns {@link DescribeContactCommandOutput}
 * @see {@link DescribeContactCommandInput} for command's `input` shape.
 * @see {@link DescribeContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class DescribeContactCommand extends command<DescribeContactCommandInput, DescribeContactCommandOutput>(
  _ep0,
  _mw0,
  "DescribeContact",
  DescribeContact$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeContactRequest;
      output: DescribeContactResponse;
    };
    sdk: {
      input: DescribeContactCommandInput;
      output: DescribeContactCommandOutput;
    };
  };
}
