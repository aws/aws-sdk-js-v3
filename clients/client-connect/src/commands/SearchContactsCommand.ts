// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchContactsRequest, SearchContactsRequestFilterSensitiveLog } from "../models/models_2";
import { SearchContactsResponse, SearchContactsResponseFilterSensitiveLog } from "../models/models_3";
import { de_SearchContactsCommand, se_SearchContactsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchContactsCommand}.
 */
export interface SearchContactsCommandInput extends SearchContactsRequest {}
/**
 * @public
 *
 * The output of {@link SearchContactsCommand}.
 */
export interface SearchContactsCommandOutput extends SearchContactsResponse, __MetadataBearer {}

/**
 * <p>Searches contacts in an Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchContactsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchContactsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // SearchContactsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   TimeRange: { // SearchContactsTimeRange
 *     Type: "INITIATION_TIMESTAMP" || "SCHEDULED_TIMESTAMP" || "CONNECTED_TO_AGENT_TIMESTAMP" || "DISCONNECT_TIMESTAMP" || "ENQUEUE_TIMESTAMP", // required
 *     StartTime: new Date("TIMESTAMP"), // required
 *     EndTime: new Date("TIMESTAMP"), // required
 *   },
 *   SearchCriteria: { // SearchCriteria
 *     Name: { // NameCriteria
 *       SearchText: [ // SearchTextList // required
 *         "STRING_VALUE",
 *       ],
 *       MatchType: "MATCH_ALL" || "MATCH_ANY" || "MATCH_EXACT" || "MATCH_NONE", // required
 *     },
 *     AgentIds: [ // AgentResourceIdList
 *       "STRING_VALUE",
 *     ],
 *     AgentHierarchyGroups: { // AgentHierarchyGroups
 *       L1Ids: [ // HierarchyGroupIdList
 *         "STRING_VALUE",
 *       ],
 *       L2Ids: [
 *         "STRING_VALUE",
 *       ],
 *       L3Ids: [
 *         "STRING_VALUE",
 *       ],
 *       L4Ids: [
 *         "STRING_VALUE",
 *       ],
 *       L5Ids: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     Channels: [ // ChannelList
 *       "VOICE" || "CHAT" || "TASK" || "EMAIL",
 *     ],
 *     ContactAnalysis: { // ContactAnalysis
 *       Transcript: { // Transcript
 *         Criteria: [ // TranscriptCriteriaList // required
 *           { // TranscriptCriteria
 *             ParticipantRole: "AGENT" || "CUSTOMER" || "SYSTEM" || "CUSTOM_BOT" || "SUPERVISOR", // required
 *             SearchText: [ // required
 *               "STRING_VALUE",
 *             ],
 *             MatchType: "MATCH_ALL" || "MATCH_ANY" || "MATCH_EXACT" || "MATCH_NONE", // required
 *           },
 *         ],
 *         MatchType: "MATCH_ALL" || "MATCH_ANY" || "MATCH_EXACT" || "MATCH_NONE",
 *       },
 *     },
 *     InitiationMethods: [ // InitiationMethodList
 *       "INBOUND" || "OUTBOUND" || "TRANSFER" || "QUEUE_TRANSFER" || "CALLBACK" || "API" || "DISCONNECT" || "MONITOR" || "EXTERNAL_OUTBOUND" || "WEBRTC_API" || "AGENT_REPLY" || "FLOW",
 *     ],
 *     QueueIds: [ // QueueIdList
 *       "STRING_VALUE",
 *     ],
 *     RoutingCriteria: { // SearchableRoutingCriteria
 *       Steps: [ // SearchableRoutingCriteriaStepList
 *         { // SearchableRoutingCriteriaStep
 *           AgentCriteria: { // SearchableAgentCriteriaStep
 *             AgentIds: [
 *               "STRING_VALUE",
 *             ],
 *             MatchType: "MATCH_ALL" || "MATCH_ANY" || "MATCH_EXACT" || "MATCH_NONE",
 *           },
 *         },
 *       ],
 *     },
 *     AdditionalTimeRange: { // SearchContactsAdditionalTimeRange
 *       Criteria: [ // SearchContactsAdditionalTimeRangeCriteriaList // required
 *         { // SearchContactsAdditionalTimeRangeCriteria
 *           TimeRange: {
 *             Type: "INITIATION_TIMESTAMP" || "SCHEDULED_TIMESTAMP" || "CONNECTED_TO_AGENT_TIMESTAMP" || "DISCONNECT_TIMESTAMP" || "ENQUEUE_TIMESTAMP", // required
 *             StartTime: new Date("TIMESTAMP"), // required
 *             EndTime: new Date("TIMESTAMP"), // required
 *           },
 *           TimestampCondition: { // SearchContactsTimestampCondition
 *             Type: "INITIATION_TIMESTAMP" || "SCHEDULED_TIMESTAMP" || "CONNECTED_TO_AGENT_TIMESTAMP" || "DISCONNECT_TIMESTAMP" || "ENQUEUE_TIMESTAMP", // required
 *             ConditionType: "NOT_EXISTS", // required
 *           },
 *         },
 *       ],
 *       MatchType: "MATCH_ALL" || "MATCH_ANY" || "MATCH_EXACT" || "MATCH_NONE", // required
 *     },
 *     SearchableContactAttributes: { // SearchableContactAttributes
 *       Criteria: [ // SearchableContactAttributesCriteriaList // required
 *         { // SearchableContactAttributesCriteria
 *           Key: "STRING_VALUE", // required
 *           Values: [ // SearchableContactAttributeValueList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       MatchType: "MATCH_ALL" || "MATCH_ANY" || "MATCH_EXACT" || "MATCH_NONE",
 *     },
 *     SearchableSegmentAttributes: { // SearchableSegmentAttributes
 *       Criteria: [ // SearchableSegmentAttributesCriteriaList // required
 *         { // SearchableSegmentAttributesCriteria
 *           Key: "STRING_VALUE", // required
 *           Values: [ // SearchableSegmentAttributeValueList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       MatchType: "MATCH_ALL" || "MATCH_ANY" || "MATCH_EXACT" || "MATCH_NONE",
 *     },
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Sort: { // Sort
 *     FieldName: "INITIATION_TIMESTAMP" || "SCHEDULED_TIMESTAMP" || "CONNECTED_TO_AGENT_TIMESTAMP" || "DISCONNECT_TIMESTAMP" || "INITIATION_METHOD" || "CHANNEL" || "EXPIRY_TIMESTAMP", // required
 *     Order: "ASCENDING" || "DESCENDING", // required
 *   },
 * };
 * const command = new SearchContactsCommand(input);
 * const response = await client.send(command);
 * // { // SearchContactsResponse
 * //   Contacts: [ // Contacts // required
 * //     { // ContactSearchSummary
 * //       Arn: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       InitialContactId: "STRING_VALUE",
 * //       PreviousContactId: "STRING_VALUE",
 * //       InitiationMethod: "INBOUND" || "OUTBOUND" || "TRANSFER" || "QUEUE_TRANSFER" || "CALLBACK" || "API" || "DISCONNECT" || "MONITOR" || "EXTERNAL_OUTBOUND" || "WEBRTC_API" || "AGENT_REPLY" || "FLOW",
 * //       Channel: "VOICE" || "CHAT" || "TASK" || "EMAIL",
 * //       QueueInfo: { // ContactSearchSummaryQueueInfo
 * //         Id: "STRING_VALUE",
 * //         EnqueueTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //       AgentInfo: { // ContactSearchSummaryAgentInfo
 * //         Id: "STRING_VALUE",
 * //         ConnectedToAgentTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //       InitiationTimestamp: new Date("TIMESTAMP"),
 * //       DisconnectTimestamp: new Date("TIMESTAMP"),
 * //       ScheduledTimestamp: new Date("TIMESTAMP"),
 * //       SegmentAttributes: { // ContactSearchSummarySegmentAttributes
 * //         "<keys>": { // ContactSearchSummarySegmentAttributeValue
 * //           ValueString: "STRING_VALUE",
 * //           ValueMap: { // SegmentAttributeValueMap
 * //             "<keys>": { // SegmentAttributeValue
 * //               ValueString: "STRING_VALUE",
 * //               ValueMap: {
 * //                 "<keys>": {
 * //                   ValueString: "STRING_VALUE",
 * //                   ValueMap: "<SegmentAttributeValueMap>",
 * //                   ValueInteger: Number("int"),
 * //                   ValueList: [ // SegmentAttributeValueList
 * //                     "<SegmentAttributeValue>",
 * //                   ],
 * //                   ValueArn: "STRING_VALUE",
 * //                 },
 * //               },
 * //               ValueInteger: Number("int"),
 * //               ValueList: [
 * //                 "<SegmentAttributeValue>",
 * //               ],
 * //               ValueArn: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //       },
 * //       Name: "STRING_VALUE",
 * //       RoutingCriteria: { // RoutingCriteria
 * //         Steps: [ // Steps
 * //           { // Step
 * //             Expiry: { // Expiry
 * //               DurationInSeconds: Number("int"),
 * //               ExpiryTimestamp: new Date("TIMESTAMP"),
 * //             },
 * //             Expression: { // Expression
 * //               AttributeCondition: { // AttributeCondition
 * //                 Name: "STRING_VALUE",
 * //                 Value: "STRING_VALUE",
 * //                 ProficiencyLevel: Number("float"),
 * //                 Range: { // Range
 * //                   MinProficiencyLevel: Number("float"),
 * //                   MaxProficiencyLevel: Number("float"),
 * //                 },
 * //                 MatchCriteria: { // MatchCriteria
 * //                   AgentsCriteria: { // AgentsCriteria
 * //                     AgentIds: [ // AgentIds
 * //                       "STRING_VALUE",
 * //                     ],
 * //                   },
 * //                 },
 * //                 ComparisonOperator: "STRING_VALUE",
 * //               },
 * //               AndExpression: [ // Expressions
 * //                 {
 * //                   AttributeCondition: {
 * //                     Name: "STRING_VALUE",
 * //                     Value: "STRING_VALUE",
 * //                     ProficiencyLevel: Number("float"),
 * //                     Range: {
 * //                       MinProficiencyLevel: Number("float"),
 * //                       MaxProficiencyLevel: Number("float"),
 * //                     },
 * //                     MatchCriteria: {
 * //                       AgentsCriteria: {
 * //                         AgentIds: [
 * //                           "STRING_VALUE",
 * //                         ],
 * //                       },
 * //                     },
 * //                     ComparisonOperator: "STRING_VALUE",
 * //                   },
 * //                   AndExpression: [
 * //                     "<Expression>",
 * //                   ],
 * //                   OrExpression: [
 * //                     "<Expression>",
 * //                   ],
 * //                   NotAttributeCondition: {
 * //                     Name: "STRING_VALUE",
 * //                     Value: "STRING_VALUE",
 * //                     ProficiencyLevel: Number("float"),
 * //                     Range: {
 * //                       MinProficiencyLevel: Number("float"),
 * //                       MaxProficiencyLevel: Number("float"),
 * //                     },
 * //                     MatchCriteria: {
 * //                       AgentsCriteria: {
 * //                         AgentIds: [
 * //                           "STRING_VALUE",
 * //                         ],
 * //                       },
 * //                     },
 * //                     ComparisonOperator: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               ],
 * //               OrExpression: [
 * //                 "<Expression>",
 * //               ],
 * //               NotAttributeCondition: {
 * //                 Name: "STRING_VALUE",
 * //                 Value: "STRING_VALUE",
 * //                 ProficiencyLevel: Number("float"),
 * //                 Range: {
 * //                   MinProficiencyLevel: Number("float"),
 * //                   MaxProficiencyLevel: Number("float"),
 * //                 },
 * //                 MatchCriteria: {
 * //                   AgentsCriteria: {
 * //                     AgentIds: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                   },
 * //                 },
 * //                 ComparisonOperator: "STRING_VALUE",
 * //               },
 * //             },
 * //             Status: "ACTIVE" || "INACTIVE" || "JOINED" || "EXPIRED",
 * //           },
 * //         ],
 * //         ActivationTimestamp: new Date("TIMESTAMP"),
 * //         Index: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   TotalCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param SearchContactsCommandInput - {@link SearchContactsCommandInput}
 * @returns {@link SearchContactsCommandOutput}
 * @see {@link SearchContactsCommandInput} for command's `input` shape.
 * @see {@link SearchContactsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class SearchContactsCommand extends $Command
  .classBuilder<
    SearchContactsCommandInput,
    SearchContactsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "SearchContacts", {})
  .n("ConnectClient", "SearchContactsCommand")
  .f(SearchContactsRequestFilterSensitiveLog, SearchContactsResponseFilterSensitiveLog)
  .ser(se_SearchContactsCommand)
  .de(de_SearchContactsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchContactsRequest;
      output: SearchContactsResponse;
    };
    sdk: {
      input: SearchContactsCommandInput;
      output: SearchContactsCommandOutput;
    };
  };
}
