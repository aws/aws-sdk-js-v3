// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ConnectCampaignsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectCampaignsV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateCampaignCommunicationTimeRequest } from "../models/models_0";
import { UpdateCampaignCommunicationTime } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCampaignCommunicationTimeCommand}.
 */
export interface UpdateCampaignCommunicationTimeCommandInput extends UpdateCampaignCommunicationTimeRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCampaignCommunicationTimeCommand}.
 */
export interface UpdateCampaignCommunicationTimeCommandOutput extends __MetadataBearer {}

/**
 * Updates the communication time config for a campaign. This API is idempotent.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsV2Client, UpdateCampaignCommunicationTimeCommand } from "@aws-sdk/client-connectcampaignsv2"; // ES Modules import
 * // const { ConnectCampaignsV2Client, UpdateCampaignCommunicationTimeCommand } = require("@aws-sdk/client-connectcampaignsv2"); // CommonJS import
 * // import type { ConnectCampaignsV2ClientConfig } from "@aws-sdk/client-connectcampaignsv2";
 * const config = {}; // type is ConnectCampaignsV2ClientConfig
 * const client = new ConnectCampaignsV2Client(config);
 * const input = { // UpdateCampaignCommunicationTimeRequest
 *   id: "STRING_VALUE", // required
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
 *     whatsApp: {
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
 * };
 * const command = new UpdateCampaignCommunicationTimeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCampaignCommunicationTimeCommandInput - {@link UpdateCampaignCommunicationTimeCommandInput}
 * @returns {@link UpdateCampaignCommunicationTimeCommandOutput}
 * @see {@link UpdateCampaignCommunicationTimeCommandInput} for command's `input` shape.
 * @see {@link UpdateCampaignCommunicationTimeCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidCampaignStateException} (client fault)
 *  The request could not be processed because of conflict in the current state of the campaign.
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
export class UpdateCampaignCommunicationTimeCommand extends $Command
  .classBuilder<
    UpdateCampaignCommunicationTimeCommandInput,
    UpdateCampaignCommunicationTimeCommandOutput,
    ConnectCampaignsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCampaignsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectCampaignServiceV2", "UpdateCampaignCommunicationTime", {})
  .n("ConnectCampaignsV2Client", "UpdateCampaignCommunicationTimeCommand")
  .sc(UpdateCampaignCommunicationTime)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCampaignCommunicationTimeRequest;
      output: {};
    };
    sdk: {
      input: UpdateCampaignCommunicationTimeCommandInput;
      output: UpdateCampaignCommunicationTimeCommandOutput;
    };
  };
}
