// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ConnectCampaignsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectCampaignsV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCampaignRequest, DescribeCampaignResponse } from "../models/models_0";
import { DescribeCampaign } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCampaignCommand}.
 */
export interface DescribeCampaignCommandInput extends DescribeCampaignRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCampaignCommand}.
 */
export interface DescribeCampaignCommandOutput extends DescribeCampaignResponse, __MetadataBearer {}

/**
 * Describes the specific campaign.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsV2Client, DescribeCampaignCommand } from "@aws-sdk/client-connectcampaignsv2"; // ES Modules import
 * // const { ConnectCampaignsV2Client, DescribeCampaignCommand } = require("@aws-sdk/client-connectcampaignsv2"); // CommonJS import
 * // import type { ConnectCampaignsV2ClientConfig } from "@aws-sdk/client-connectcampaignsv2";
 * const config = {}; // type is ConnectCampaignsV2ClientConfig
 * const client = new ConnectCampaignsV2Client(config);
 * const input = { // DescribeCampaignRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DescribeCampaignCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCampaignResponse
 * //   campaign: { // Campaign
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     connectInstanceId: "STRING_VALUE", // required
 * //     channelSubtypeConfig: { // ChannelSubtypeConfig
 * //       telephony: { // TelephonyChannelSubtypeConfig
 * //         capacity: Number("double"),
 * //         connectQueueId: "STRING_VALUE",
 * //         outboundMode: { // TelephonyOutboundMode Union: only one key present
 * //           progressive: { // ProgressiveConfig
 * //             bandwidthAllocation: Number("double"), // required
 * //           },
 * //           predictive: { // PredictiveConfig
 * //             bandwidthAllocation: Number("double"), // required
 * //           },
 * //           agentless: {},
 * //           preview: { // PreviewConfig
 * //             bandwidthAllocation: Number("double"), // required
 * //             timeoutConfig: { // TimeoutConfig
 * //               durationInSeconds: Number("int"), // required
 * //             },
 * //             agentActions: [ // AgentActions
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //         defaultOutboundConfig: { // TelephonyOutboundConfig
 * //           connectContactFlowId: "STRING_VALUE", // required
 * //           connectSourcePhoneNumber: "STRING_VALUE",
 * //           answerMachineDetectionConfig: { // AnswerMachineDetectionConfig
 * //             enableAnswerMachineDetection: true || false, // required
 * //             awaitAnswerMachinePrompt: true || false,
 * //           },
 * //         },
 * //       },
 * //       sms: { // SmsChannelSubtypeConfig
 * //         capacity: Number("double"),
 * //         outboundMode: { // SmsOutboundMode Union: only one key present
 * //           agentless: {},
 * //         },
 * //         defaultOutboundConfig: { // SmsOutboundConfig
 * //           connectSourcePhoneNumberArn: "STRING_VALUE", // required
 * //           wisdomTemplateArn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       email: { // EmailChannelSubtypeConfig
 * //         capacity: Number("double"),
 * //         outboundMode: { // EmailOutboundMode Union: only one key present
 * //           agentless: {},
 * //         },
 * //         defaultOutboundConfig: { // EmailOutboundConfig
 * //           connectSourceEmailAddress: "STRING_VALUE", // required
 * //           sourceEmailAddressDisplayName: "STRING_VALUE",
 * //           wisdomTemplateArn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //     source: { // Source Union: only one key present
 * //       customerProfilesSegmentArn: "STRING_VALUE",
 * //       eventTrigger: { // EventTrigger
 * //         customerProfilesDomainArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     connectCampaignFlowArn: "STRING_VALUE",
 * //     schedule: { // Schedule
 * //       startTime: new Date("TIMESTAMP"), // required
 * //       endTime: new Date("TIMESTAMP"), // required
 * //       refreshFrequency: "STRING_VALUE",
 * //     },
 * //     communicationTimeConfig: { // CommunicationTimeConfig
 * //       localTimeZoneConfig: { // LocalTimeZoneConfig
 * //         defaultTimeZone: "STRING_VALUE",
 * //         localTimeZoneDetection: [ // LocalTimeZoneDetection
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       telephony: { // TimeWindow
 * //         openHours: { // OpenHours Union: only one key present
 * //           dailyHours: { // DailyHours
 * //             "<keys>": [ // TimeRangeList
 * //               { // TimeRange
 * //                 startTime: "STRING_VALUE", // required
 * //                 endTime: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         restrictedPeriods: { // RestrictedPeriods Union: only one key present
 * //           restrictedPeriodList: [ // RestrictedPeriodList
 * //             { // RestrictedPeriod
 * //               name: "STRING_VALUE",
 * //               startDate: "STRING_VALUE", // required
 * //               endDate: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       sms: {
 * //         openHours: {//  Union: only one key present
 * //           dailyHours: {
 * //             "<keys>": [
 * //               {
 * //                 startTime: "STRING_VALUE", // required
 * //                 endTime: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         restrictedPeriods: {//  Union: only one key present
 * //           restrictedPeriodList: [
 * //             {
 * //               name: "STRING_VALUE",
 * //               startDate: "STRING_VALUE", // required
 * //               endDate: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       email: {
 * //         openHours: {//  Union: only one key present
 * //           dailyHours: {
 * //             "<keys>": [
 * //               {
 * //                 startTime: "STRING_VALUE", // required
 * //                 endTime: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         restrictedPeriods: {//  Union: only one key present
 * //           restrictedPeriodList: [
 * //             {
 * //               name: "STRING_VALUE",
 * //               startDate: "STRING_VALUE", // required
 * //               endDate: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     communicationLimitsOverride: { // CommunicationLimitsConfig
 * //       allChannelSubtypes: { // CommunicationLimits Union: only one key present
 * //         communicationLimitsList: [ // CommunicationLimitList
 * //           { // CommunicationLimit
 * //             maxCountPerRecipient: Number("int"), // required
 * //             frequency: Number("int"), // required
 * //             unit: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       instanceLimitsHandling: "STRING_VALUE",
 * //     },
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeCampaignCommandInput - {@link DescribeCampaignCommandInput}
 * @returns {@link DescribeCampaignCommandOutput}
 * @see {@link DescribeCampaignCommandInput} for command's `input` shape.
 * @see {@link DescribeCampaignCommandOutput} for command's `response` shape.
 * @see {@link ConnectCampaignsV2ClientResolvedConfig | config} for ConnectCampaignsV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Request processing failed because of an error or failure with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource was not found.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link ConnectCampaignsV2ServiceException}
 * <p>Base exception class for all service exceptions from ConnectCampaignsV2 service.</p>
 *
 *
 * @public
 */
export class DescribeCampaignCommand extends $Command
  .classBuilder<
    DescribeCampaignCommandInput,
    DescribeCampaignCommandOutput,
    ConnectCampaignsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCampaignsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectCampaignServiceV2", "DescribeCampaign", {})
  .n("ConnectCampaignsV2Client", "DescribeCampaignCommand")
  .sc(DescribeCampaign)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCampaignRequest;
      output: DescribeCampaignResponse;
    };
    sdk: {
      input: DescribeCampaignCommandInput;
      output: DescribeCampaignCommandOutput;
    };
  };
}
