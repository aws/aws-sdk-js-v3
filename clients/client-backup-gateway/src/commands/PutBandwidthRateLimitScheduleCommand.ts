// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutBandwidthRateLimitScheduleInput, PutBandwidthRateLimitScheduleOutput } from "../models/models_0";
import { PutBandwidthRateLimitSchedule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutBandwidthRateLimitScheduleCommand}.
 */
export interface PutBandwidthRateLimitScheduleCommandInput extends PutBandwidthRateLimitScheduleInput {}
/**
 * @public
 *
 * The output of {@link PutBandwidthRateLimitScheduleCommand}.
 */
export interface PutBandwidthRateLimitScheduleCommandOutput extends PutBandwidthRateLimitScheduleOutput, __MetadataBearer {}

/**
 * <p>This action sets the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have a bandwidth rate limit schedule, which means no bandwidth rate limiting is in effect. Use this to initiate a gateway's bandwidth rate limit schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, PutBandwidthRateLimitScheduleCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, PutBandwidthRateLimitScheduleCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * // import type { BackupGatewayClientConfig } from "@aws-sdk/client-backup-gateway";
 * const config = {}; // type is BackupGatewayClientConfig
 * const client = new BackupGatewayClient(config);
 * const input = { // PutBandwidthRateLimitScheduleInput
 *   GatewayArn: "STRING_VALUE", // required
 *   BandwidthRateLimitIntervals: [ // BandwidthRateLimitIntervals // required
 *     { // BandwidthRateLimitInterval
 *       AverageUploadRateLimitInBitsPerSec: Number("long"),
 *       StartHourOfDay: Number("int"), // required
 *       EndHourOfDay: Number("int"), // required
 *       StartMinuteOfHour: Number("int"), // required
 *       EndMinuteOfHour: Number("int"), // required
 *       DaysOfWeek: [ // DaysOfWeek // required
 *         Number("int"),
 *       ],
 *     },
 *   ],
 * };
 * const command = new PutBandwidthRateLimitScheduleCommand(input);
 * const response = await client.send(command);
 * // { // PutBandwidthRateLimitScheduleOutput
 * //   GatewayArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutBandwidthRateLimitScheduleCommandInput - {@link PutBandwidthRateLimitScheduleCommandInput}
 * @returns {@link PutBandwidthRateLimitScheduleCommandOutput}
 * @see {@link PutBandwidthRateLimitScheduleCommandInput} for command's `input` shape.
 * @see {@link PutBandwidthRateLimitScheduleCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action wasn't found.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The operation did not succeed because an internal error occurred. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>TPS has been limited to protect against intentional or unintentional high request volumes.</p>
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
export class PutBandwidthRateLimitScheduleCommand extends command<PutBandwidthRateLimitScheduleCommandInput, PutBandwidthRateLimitScheduleCommandOutput>(
  _ep0,
  _mw0,
  "PutBandwidthRateLimitSchedule",
  PutBandwidthRateLimitSchedule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutBandwidthRateLimitScheduleInput;
      output: PutBandwidthRateLimitScheduleOutput;
    };
    sdk: {
      input: PutBandwidthRateLimitScheduleCommandInput;
      output: PutBandwidthRateLimitScheduleCommandOutput;
    };
  };
}
