// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetBandwidthRateLimitScheduleInput, GetBandwidthRateLimitScheduleOutput } from "../models/models_0";
import { GetBandwidthRateLimitSchedule } from "../schemas/schemas_5_RateLimit";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBandwidthRateLimitScheduleCommand}.
 */
export interface GetBandwidthRateLimitScheduleCommandInput extends GetBandwidthRateLimitScheduleInput {}
/**
 * @public
 *
 * The output of {@link GetBandwidthRateLimitScheduleCommand}.
 */
export interface GetBandwidthRateLimitScheduleCommandOutput
  extends GetBandwidthRateLimitScheduleOutput,
    __MetadataBearer {}

/**
 * <p>Retrieves the bandwidth rate limit schedule for a specified gateway.
 *       By default, gateways do not have bandwidth rate limit schedules, which means
 *       no bandwidth rate limiting is in effect. Use this to get a gateway's
 *       bandwidth rate limit schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, GetBandwidthRateLimitScheduleCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, GetBandwidthRateLimitScheduleCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * // import type { BackupGatewayClientConfig } from "@aws-sdk/client-backup-gateway";
 * const config = {}; // type is BackupGatewayClientConfig
 * const client = new BackupGatewayClient(config);
 * const input = { // GetBandwidthRateLimitScheduleInput
 *   GatewayArn: "STRING_VALUE", // required
 * };
 * const command = new GetBandwidthRateLimitScheduleCommand(input);
 * const response = await client.send(command);
 * // { // GetBandwidthRateLimitScheduleOutput
 * //   GatewayArn: "STRING_VALUE",
 * //   BandwidthRateLimitIntervals: [ // BandwidthRateLimitIntervals
 * //     { // BandwidthRateLimitInterval
 * //       AverageUploadRateLimitInBitsPerSec: Number("long"),
 * //       StartHourOfDay: Number("int"), // required
 * //       EndHourOfDay: Number("int"), // required
 * //       StartMinuteOfHour: Number("int"), // required
 * //       EndMinuteOfHour: Number("int"), // required
 * //       DaysOfWeek: [ // DaysOfWeek // required
 * //         Number("int"),
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetBandwidthRateLimitScheduleCommandInput - {@link GetBandwidthRateLimitScheduleCommandInput}
 * @returns {@link GetBandwidthRateLimitScheduleCommandOutput}
 * @see {@link GetBandwidthRateLimitScheduleCommandInput} for command's `input` shape.
 * @see {@link GetBandwidthRateLimitScheduleCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action wasn't found.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The operation did not succeed because an internal error occurred. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>TPS has been limited to protect against intentional or unintentional
 *     high request volumes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation did not succeed because a validation error occurred.</p>
 *
 * @throws {@link BackupGatewayServiceException}
 * <p>Base exception class for all service exceptions from BackupGateway service.</p>
 *
 *
 * @public
 */
export class GetBandwidthRateLimitScheduleCommand extends $Command
  .classBuilder<
    GetBandwidthRateLimitScheduleCommandInput,
    GetBandwidthRateLimitScheduleCommandOutput,
    BackupGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackupOnPremises_v20210101", "GetBandwidthRateLimitSchedule", {})
  .n("BackupGatewayClient", "GetBandwidthRateLimitScheduleCommand")
  .sc(GetBandwidthRateLimitSchedule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBandwidthRateLimitScheduleInput;
      output: GetBandwidthRateLimitScheduleOutput;
    };
    sdk: {
      input: GetBandwidthRateLimitScheduleCommandInput;
      output: GetBandwidthRateLimitScheduleCommandOutput;
    };
  };
}
