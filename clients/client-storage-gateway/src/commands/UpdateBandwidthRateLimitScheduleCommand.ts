// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateBandwidthRateLimitScheduleInput, UpdateBandwidthRateLimitScheduleOutput } from "../models/models_0";
import {
  de_UpdateBandwidthRateLimitScheduleCommand,
  se_UpdateBandwidthRateLimitScheduleCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBandwidthRateLimitScheduleCommand}.
 */
export interface UpdateBandwidthRateLimitScheduleCommandInput extends UpdateBandwidthRateLimitScheduleInput {}
/**
 * @public
 *
 * The output of {@link UpdateBandwidthRateLimitScheduleCommand}.
 */
export interface UpdateBandwidthRateLimitScheduleCommandOutput
  extends UpdateBandwidthRateLimitScheduleOutput,
    __MetadataBearer {}

/**
 * <p> Updates the bandwidth rate limit schedule for a specified gateway. By default, gateways
 *          do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in
 *          effect. Use this to initiate or update a gateway's bandwidth rate limit schedule. This
 *          operation is supported for volume, tape, and S3 file gateways. S3 file gateways support
 *          bandwidth rate limits for upload only. FSx file gateways do not support bandwidth rate
 *          limits.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateBandwidthRateLimitScheduleCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateBandwidthRateLimitScheduleCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // UpdateBandwidthRateLimitScheduleInput
 *   GatewayARN: "STRING_VALUE", // required
 *   BandwidthRateLimitIntervals: [ // BandwidthRateLimitIntervals // required
 *     { // BandwidthRateLimitInterval
 *       StartHourOfDay: Number("int"), // required
 *       StartMinuteOfHour: Number("int"), // required
 *       EndHourOfDay: Number("int"), // required
 *       EndMinuteOfHour: Number("int"), // required
 *       DaysOfWeek: [ // DaysOfWeek // required
 *         Number("int"),
 *       ],
 *       AverageUploadRateLimitInBitsPerSec: Number("long"),
 *       AverageDownloadRateLimitInBitsPerSec: Number("long"),
 *     },
 *   ],
 * };
 * const command = new UpdateBandwidthRateLimitScheduleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBandwidthRateLimitScheduleOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateBandwidthRateLimitScheduleCommandInput - {@link UpdateBandwidthRateLimitScheduleCommandInput}
 * @returns {@link UpdateBandwidthRateLimitScheduleCommandOutput}
 * @see {@link UpdateBandwidthRateLimitScheduleCommandInput} for command's `input` shape.
 * @see {@link UpdateBandwidthRateLimitScheduleCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 * @public
 */
export class UpdateBandwidthRateLimitScheduleCommand extends $Command
  .classBuilder<
    UpdateBandwidthRateLimitScheduleCommandInput,
    UpdateBandwidthRateLimitScheduleCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StorageGateway_20130630", "UpdateBandwidthRateLimitSchedule", {})
  .n("StorageGatewayClient", "UpdateBandwidthRateLimitScheduleCommand")
  .f(void 0, void 0)
  .ser(se_UpdateBandwidthRateLimitScheduleCommand)
  .de(de_UpdateBandwidthRateLimitScheduleCommand)
  .build() {}
