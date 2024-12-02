// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ConnectCampaignsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectCampaignsV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateCampaignRequest,
  CreateCampaignRequestFilterSensitiveLog,
  CreateCampaignResponse,
} from "../models/models_0";
import { de_CreateCampaignCommand, se_CreateCampaignCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCampaignCommand}.
 */
export interface CreateCampaignCommandInput extends CreateCampaignRequest {}
/**
 * @public
 *
 * The output of {@link CreateCampaignCommand}.
 */
export interface CreateCampaignCommandOutput extends CreateCampaignResponse, __MetadataBearer {}

/**
 * Creates a campaign for the specified Amazon Connect account. This API is idempotent.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsV2Client, CreateCampaignCommand } from "@aws-sdk/client-connectcampaignsv2"; // ES Modules import
 * // const { ConnectCampaignsV2Client, CreateCampaignCommand } = require("@aws-sdk/client-connectcampaignsv2"); // CommonJS import
 * const client = new ConnectCampaignsV2Client(config);
 * const input = { // CreateCampaignRequest
 *   name: "STRING_VALUE", // required
 *   connectInstanceId: "STRING_VALUE", // required
 *   channelSubtypeConfig: { // ChannelSubtypeConfig
 *     telephony: { // TelephonyChannelSubtypeConfig
 *       capacity: Number("double"),
 *       connectQueueId: "STRING_VALUE",
 *       outboundMode: { // TelephonyOutboundMode Union: only one key present
 *         progressive: { // ProgressiveConfig
 *           bandwidthAllocation: Number("double"), // required
 *         },
 *         predictive: { // PredictiveConfig
 *           bandwidthAllocation: Number("double"), // required
 *         },
 *         agentless: {},
 *       },
 *       defaultOutboundConfig: { // TelephonyOutboundConfig
 *         connectContactFlowId: "STRING_VALUE", // required
 *         connectSourcePhoneNumber: "STRING_VALUE",
 *         answerMachineDetectionConfig: { // AnswerMachineDetectionConfig
 *           enableAnswerMachineDetection: true || false, // required
 *           awaitAnswerMachinePrompt: true || false,
 *         },
 *       },
 *     },
 *     sms: { // SmsChannelSubtypeConfig
 *       capacity: Number("double"),
 *       outboundMode: { // SmsOutboundMode Union: only one key present
 *         agentless: {},
 *       },
 *       defaultOutboundConfig: { // SmsOutboundConfig
 *         connectSourcePhoneNumberArn: "STRING_VALUE", // required
 *         wisdomTemplateArn: "STRING_VALUE", // required
 *       },
 *     },
 *     email: { // EmailChannelSubtypeConfig
 *       capacity: Number("double"),
 *       outboundMode: { // EmailOutboundMode Union: only one key present
 *         agentless: {},
 *       },
 *       defaultOutboundConfig: { // EmailOutboundConfig
 *         connectSourceEmailAddress: "STRING_VALUE", // required
 *         sourceEmailAddressDisplayName: "STRING_VALUE",
 *         wisdomTemplateArn: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 *   source: { // Source Union: only one key present
 *     customerProfilesSegmentArn: "STRING_VALUE",
 *     eventTrigger: { // EventTrigger
 *       customerProfilesDomainArn: "STRING_VALUE",
 *     },
 *   },
 *   connectCampaignFlowArn: "STRING_VALUE",
 *   schedule: { // Schedule
 *     startTime: new Date("TIMESTAMP"), // required
 *     endTime: new Date("TIMESTAMP"), // required
 *     refreshFrequency: "STRING_VALUE",
 *   },
 *   communicationTimeConfig: { // CommunicationTimeConfig
 *     localTimeZoneConfig: { // LocalTimeZoneConfig
 *       defaultTimeZone: "STRING_VALUE",
 *       localTimeZoneDetection: [ // LocalTimeZoneDetection
 *         "STRING_VALUE",
 *       ],
 *     },
 *     telephony: { // TimeWindow
 *       openHours: { // OpenHours Union: only one key present
 *         dailyHours: { // DailyHours
 *           "<keys>": [ // TimeRangeList
 *             { // TimeRange
 *               startTime: "STRING_VALUE", // required
 *               endTime: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       },
 *       restrictedPeriods: { // RestrictedPeriods Union: only one key present
 *         restrictedPeriodList: [ // RestrictedPeriodList
 *           { // RestrictedPeriod
 *             name: "STRING_VALUE",
 *             startDate: "STRING_VALUE", // required
 *             endDate: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *     sms: {
 *       openHours: {//  Union: only one key present
 *         dailyHours: {
 *           "<keys>": [
 *             {
 *               startTime: "STRING_VALUE", // required
 *               endTime: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       },
 *       restrictedPeriods: {//  Union: only one key present
 *         restrictedPeriodList: [
 *           {
 *             name: "STRING_VALUE",
 *             startDate: "STRING_VALUE", // required
 *             endDate: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *     email: {
 *       openHours: {//  Union: only one key present
 *         dailyHours: {
 *           "<keys>": [
 *             {
 *               startTime: "STRING_VALUE", // required
 *               endTime: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       },
 *       restrictedPeriods: {//  Union: only one key present
 *         restrictedPeriodList: [
 *           {
 *             name: "STRING_VALUE",
 *             startDate: "STRING_VALUE", // required
 *             endDate: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *   },
 *   communicationLimitsOverride: { // CommunicationLimitsConfig
 *     allChannelSubtypes: { // CommunicationLimits Union: only one key present
 *       communicationLimitsList: [ // CommunicationLimitList
 *         { // CommunicationLimit
 *           maxCountPerRecipient: Number("int"), // required
 *           frequency: Number("int"), // required
 *           unit: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateCampaignCommand(input);
 * const response = await client.send(command);
 * // { // CreateCampaignResponse
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCampaignCommandInput - {@link CreateCampaignCommandInput}
 * @returns {@link CreateCampaignCommandOutput}
 * @see {@link CreateCampaignCommandInput} for command's `input` shape.
 * @see {@link CreateCampaignCommandOutput} for command's `response` shape.
 * @see {@link ConnectCampaignsV2ClientResolvedConfig | config} for ConnectCampaignsV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request could not be processed because of conflict in the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Request processing failed because of an error or failure with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  Request would cause a service quota to be exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link ConnectCampaignsV2ServiceException}
 * <p>Base exception class for all service exceptions from ConnectCampaignsV2 service.</p>
 *
 * @public
 */
export class CreateCampaignCommand extends $Command
  .classBuilder<
    CreateCampaignCommandInput,
    CreateCampaignCommandOutput,
    ConnectCampaignsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCampaignsV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectCampaignServiceV2", "CreateCampaign", {})
  .n("ConnectCampaignsV2Client", "CreateCampaignCommand")
  .f(CreateCampaignRequestFilterSensitiveLog, void 0)
  .ser(se_CreateCampaignCommand)
  .de(de_CreateCampaignCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCampaignRequest;
      output: CreateCampaignResponse;
    };
    sdk: {
      input: CreateCampaignCommandInput;
      output: CreateCampaignCommandOutput;
    };
  };
}
