// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCurrentUserDataRequest, GetCurrentUserDataResponse } from "../models/models_1";
import { de_GetCurrentUserDataCommand, se_GetCurrentUserDataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCurrentUserDataCommand}.
 */
export interface GetCurrentUserDataCommandInput extends GetCurrentUserDataRequest {}
/**
 * @public
 *
 * The output of {@link GetCurrentUserDataCommand}.
 */
export interface GetCurrentUserDataCommandOutput extends GetCurrentUserDataResponse, __MetadataBearer {}

/**
 * <p>Gets the real-time active user data from the specified Amazon Connect instance. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetCurrentUserDataCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetCurrentUserDataCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // GetCurrentUserDataRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Filters: { // UserDataFilters
 *     Queues: [ // Queues
 *       "STRING_VALUE",
 *     ],
 *     ContactFilter: { // ContactFilter
 *       ContactStates: [ // ContactStates
 *         "INCOMING" || "PENDING" || "CONNECTING" || "CONNECTED" || "CONNECTED_ONHOLD" || "MISSED" || "ERROR" || "ENDED" || "REJECTED",
 *       ],
 *     },
 *     RoutingProfiles: [ // RoutingProfiles
 *       "STRING_VALUE",
 *     ],
 *     Agents: [ // AgentsMinOneMaxHundred
 *       "STRING_VALUE",
 *     ],
 *     UserHierarchyGroups: [ // UserDataHierarchyGroups
 *       "STRING_VALUE",
 *     ],
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetCurrentUserDataCommand(input);
 * const response = await client.send(command);
 * // { // GetCurrentUserDataResponse
 * //   NextToken: "STRING_VALUE",
 * //   UserDataList: [ // UserDataList
 * //     { // UserData
 * //       User: { // UserReference
 * //         Id: "STRING_VALUE",
 * //         Arn: "STRING_VALUE",
 * //       },
 * //       RoutingProfile: { // RoutingProfileReference
 * //         Id: "STRING_VALUE",
 * //         Arn: "STRING_VALUE",
 * //       },
 * //       HierarchyPath: { // HierarchyPathReference
 * //         LevelOne: { // HierarchyGroupSummaryReference
 * //           Id: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         LevelTwo: {
 * //           Id: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         LevelThree: {
 * //           Id: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         LevelFour: {
 * //           Id: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         LevelFive: {
 * //           Id: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //         },
 * //       },
 * //       Status: { // AgentStatusReference
 * //         StatusStartTimestamp: new Date("TIMESTAMP"),
 * //         StatusArn: "STRING_VALUE",
 * //         StatusName: "STRING_VALUE",
 * //       },
 * //       AvailableSlotsByChannel: { // ChannelToCountMap
 * //         "<keys>": Number("int"),
 * //       },
 * //       MaxSlotsByChannel: {
 * //         "<keys>": Number("int"),
 * //       },
 * //       ActiveSlotsByChannel: {
 * //         "<keys>": Number("int"),
 * //       },
 * //       Contacts: [ // AgentContactReferenceList
 * //         { // AgentContactReference
 * //           ContactId: "STRING_VALUE",
 * //           Channel: "VOICE" || "CHAT" || "TASK" || "EMAIL",
 * //           InitiationMethod: "INBOUND" || "OUTBOUND" || "TRANSFER" || "QUEUE_TRANSFER" || "CALLBACK" || "API" || "DISCONNECT" || "MONITOR" || "EXTERNAL_OUTBOUND" || "WEBRTC_API" || "AGENT_REPLY" || "FLOW",
 * //           AgentContactState: "INCOMING" || "PENDING" || "CONNECTING" || "CONNECTED" || "CONNECTED_ONHOLD" || "MISSED" || "ERROR" || "ENDED" || "REJECTED",
 * //           StateStartTimestamp: new Date("TIMESTAMP"),
 * //           ConnectedToAgentTimestamp: new Date("TIMESTAMP"),
 * //           Queue: { // QueueReference
 * //             Id: "STRING_VALUE",
 * //             Arn: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       NextStatus: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ApproximateTotalCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetCurrentUserDataCommandInput - {@link GetCurrentUserDataCommandInput}
 * @returns {@link GetCurrentUserDataCommandOutput}
 * @see {@link GetCurrentUserDataCommandInput} for command's `input` shape.
 * @see {@link GetCurrentUserDataCommandOutput} for command's `response` shape.
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
export class GetCurrentUserDataCommand extends $Command
  .classBuilder<
    GetCurrentUserDataCommandInput,
    GetCurrentUserDataCommandOutput,
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
  .s("AmazonConnectService", "GetCurrentUserData", {})
  .n("ConnectClient", "GetCurrentUserDataCommand")
  .f(void 0, void 0)
  .ser(se_GetCurrentUserDataCommand)
  .de(de_GetCurrentUserDataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCurrentUserDataRequest;
      output: GetCurrentUserDataResponse;
    };
    sdk: {
      input: GetCurrentUserDataCommandInput;
      output: GetCurrentUserDataCommandOutput;
    };
  };
}
