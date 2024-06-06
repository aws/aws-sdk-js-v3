// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeContactRequest } from "../models/models_0";
import { DescribeContactResponse, DescribeContactResponseFilterSensitiveLog } from "../models/models_2";
import { de_DescribeContactCommand, se_DescribeContactCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Describes the specified contact. </p>
 *          <important>
 *             <p>Contact information remains available in Amazon Connect for 24 months, and then it is
 *     deleted.</p>
 *             <p>Only data from November 12, 2021, and later is returned by this
 *     API.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
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
 * //     InitiationMethod: "INBOUND" || "OUTBOUND" || "TRANSFER" || "QUEUE_TRANSFER" || "CALLBACK" || "API" || "DISCONNECT" || "MONITOR" || "EXTERNAL_OUTBOUND",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Channel: "VOICE" || "CHAT" || "TASK",
 * //     QueueInfo: { // QueueInfo
 * //       Id: "STRING_VALUE",
 * //       EnqueueTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //     AgentInfo: { // AgentInfo
 * //       Id: "STRING_VALUE",
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
 * //       },
 * //     },
 * //     InitiationTimestamp: new Date("TIMESTAMP"),
 * //     DisconnectTimestamp: new Date("TIMESTAMP"),
 * //     LastUpdateTimestamp: new Date("TIMESTAMP"),
 * //     LastPausedTimestamp: new Date("TIMESTAMP"),
 * //     LastResumedTimestamp: new Date("TIMESTAMP"),
 * //     TotalPauseCount: Number("int"),
 * //     TotalPauseDurationInSeconds: Number("int"),
 * //     ScheduledTimestamp: new Date("TIMESTAMP"),
 * //     RelatedContactId: "STRING_VALUE",
 * //     WisdomInfo: { // WisdomInfo
 * //       SessionArn: "STRING_VALUE",
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
 * //               ComparisonOperator: "STRING_VALUE",
 * //             },
 * //             AndExpression: [ // Expressions
 * //               {
 * //                 AttributeCondition: {
 * //                   Name: "STRING_VALUE",
 * //                   Value: "STRING_VALUE",
 * //                   ProficiencyLevel: Number("float"),
 * //                   ComparisonOperator: "STRING_VALUE",
 * //                 },
 * //                 AndExpression: [
 * //                   "<Expression>",
 * //                 ],
 * //                 OrExpression: [
 * //                   "<Expression>",
 * //                 ],
 * //               },
 * //             ],
 * //             OrExpression: [
 * //               "<Expression>",
 * //             ],
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
 * //     DisconnectDetails: { // DisconnectDetails
 * //       PotentialDisconnectIssue: "STRING_VALUE",
 * //     },
 * //     SegmentAttributes: { // SegmentAttributes
 * //       "<keys>": { // SegmentAttributeValue
 * //         ValueString: "STRING_VALUE",
 * //       },
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
 * @public
 */
export class DescribeContactCommand extends $Command
  .classBuilder<
    DescribeContactCommandInput,
    DescribeContactCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "DescribeContact", {})
  .n("ConnectClient", "DescribeContactCommand")
  .f(void 0, DescribeContactResponseFilterSensitiveLog)
  .ser(se_DescribeContactCommand)
  .de(de_DescribeContactCommand)
  .build() {}
