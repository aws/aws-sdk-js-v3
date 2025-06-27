// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeBandwidthRateLimitScheduleInput, DescribeBandwidthRateLimitScheduleOutput } from "../models/models_0";
import {
  de_DescribeBandwidthRateLimitScheduleCommand,
  se_DescribeBandwidthRateLimitScheduleCommand,
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
 * The input for {@link DescribeBandwidthRateLimitScheduleCommand}.
 */
export interface DescribeBandwidthRateLimitScheduleCommandInput extends DescribeBandwidthRateLimitScheduleInput {}
/**
 * @public
 *
 * The output of {@link DescribeBandwidthRateLimitScheduleCommand}.
 */
export interface DescribeBandwidthRateLimitScheduleCommandOutput
  extends DescribeBandwidthRateLimitScheduleOutput,
    __MetadataBearer {}

/**
 * <p> Returns information about the bandwidth rate limit schedule of a gateway. By default,
 *          gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting
 *          is in effect. This operation is supported only for volume, tape and S3 file gateways. FSx
 *          file gateways do not support bandwidth rate limits.</p>
 *          <p>This operation returns information about a gateway's bandwidth rate limit schedule. A
 *          bandwidth rate limit schedule consists of one or more bandwidth rate limit intervals. A
 *          bandwidth rate limit interval defines a period of time on one or more days of the week,
 *          during which bandwidth rate limits are specified for uploading, downloading, or both. </p>
 *          <p> A bandwidth rate limit interval consists of one or more days of the week, a start hour
 *          and minute, an ending hour and minute, and bandwidth rate limits for uploading and
 *          downloading </p>
 *          <p> If no bandwidth rate limit schedule intervals are set for the gateway, this operation
 *          returns an empty response. To specify which gateway to describe, use the Amazon Resource
 *          Name (ARN) of the gateway in your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeBandwidthRateLimitScheduleCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeBandwidthRateLimitScheduleCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeBandwidthRateLimitScheduleInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new DescribeBandwidthRateLimitScheduleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBandwidthRateLimitScheduleOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   BandwidthRateLimitIntervals: [ // BandwidthRateLimitIntervals
 * //     { // BandwidthRateLimitInterval
 * //       StartHourOfDay: Number("int"), // required
 * //       StartMinuteOfHour: Number("int"), // required
 * //       EndHourOfDay: Number("int"), // required
 * //       EndMinuteOfHour: Number("int"), // required
 * //       DaysOfWeek: [ // DaysOfWeek // required
 * //         Number("int"),
 * //       ],
 * //       AverageUploadRateLimitInBitsPerSec: Number("long"),
 * //       AverageDownloadRateLimitInBitsPerSec: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeBandwidthRateLimitScheduleCommandInput - {@link DescribeBandwidthRateLimitScheduleCommandInput}
 * @returns {@link DescribeBandwidthRateLimitScheduleCommandOutput}
 * @see {@link DescribeBandwidthRateLimitScheduleCommandInput} for command's `input` shape.
 * @see {@link DescribeBandwidthRateLimitScheduleCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeBandwidthRateLimitScheduleCommand extends $Command
  .classBuilder<
    DescribeBandwidthRateLimitScheduleCommandInput,
    DescribeBandwidthRateLimitScheduleCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StorageGateway_20130630", "DescribeBandwidthRateLimitSchedule", {})
  .n("StorageGatewayClient", "DescribeBandwidthRateLimitScheduleCommand")
  .f(void 0, void 0)
  .ser(se_DescribeBandwidthRateLimitScheduleCommand)
  .de(de_DescribeBandwidthRateLimitScheduleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBandwidthRateLimitScheduleInput;
      output: DescribeBandwidthRateLimitScheduleOutput;
    };
    sdk: {
      input: DescribeBandwidthRateLimitScheduleCommandInput;
      output: DescribeBandwidthRateLimitScheduleCommandOutput;
    };
  };
}
