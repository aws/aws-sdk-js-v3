// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeMaintenanceStartTimeInput, DescribeMaintenanceStartTimeOutput } from "../models/models_0";
import {
  de_DescribeMaintenanceStartTimeCommand,
  se_DescribeMaintenanceStartTimeCommand,
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
 * The input for {@link DescribeMaintenanceStartTimeCommand}.
 */
export interface DescribeMaintenanceStartTimeCommandInput extends DescribeMaintenanceStartTimeInput {}
/**
 * @public
 *
 * The output of {@link DescribeMaintenanceStartTimeCommand}.
 */
export interface DescribeMaintenanceStartTimeCommandOutput
  extends DescribeMaintenanceStartTimeOutput,
    __MetadataBearer {}

/**
 * <p>Returns your gateway's maintenance window schedule information, with values for
 *          monthly or weekly cadence, specific day and time to begin maintenance, and which types of
 *          updates to apply. Time values returned are for the gateway's time zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeMaintenanceStartTimeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeMaintenanceStartTimeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeMaintenanceStartTimeInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new DescribeMaintenanceStartTimeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMaintenanceStartTimeOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   HourOfDay: Number("int"),
 * //   MinuteOfHour: Number("int"),
 * //   DayOfWeek: Number("int"),
 * //   DayOfMonth: Number("int"),
 * //   Timezone: "STRING_VALUE",
 * //   SoftwareUpdatePreferences: { // SoftwareUpdatePreferences
 * //     AutomaticUpdatePolicy: "ALL_VERSIONS" || "EMERGENCY_VERSIONS_ONLY",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeMaintenanceStartTimeCommandInput - {@link DescribeMaintenanceStartTimeCommandInput}
 * @returns {@link DescribeMaintenanceStartTimeCommandOutput}
 * @see {@link DescribeMaintenanceStartTimeCommandInput} for command's `input` shape.
 * @see {@link DescribeMaintenanceStartTimeCommandOutput} for command's `response` shape.
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
 * @example To describe gateway's maintenance start time
 * ```javascript
 * // Returns your gateway's weekly maintenance start time including the day and time of the week.
 * const input = {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * };
 * const command = new DescribeMaintenanceStartTimeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DayOfWeek": 2,
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   "HourOfDay": 15,
 *   "MinuteOfHour": 35,
 *   "Timezone": "GMT+7:00"
 * }
 * *\/
 * // example id: to-describe-gateways-maintenance-start-time-1471470727387
 * ```
 *
 */
export class DescribeMaintenanceStartTimeCommand extends $Command
  .classBuilder<
    DescribeMaintenanceStartTimeCommandInput,
    DescribeMaintenanceStartTimeCommandOutput,
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
  .s("StorageGateway_20130630", "DescribeMaintenanceStartTime", {})
  .n("StorageGatewayClient", "DescribeMaintenanceStartTimeCommand")
  .f(void 0, void 0)
  .ser(se_DescribeMaintenanceStartTimeCommand)
  .de(de_DescribeMaintenanceStartTimeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMaintenanceStartTimeInput;
      output: DescribeMaintenanceStartTimeOutput;
    };
    sdk: {
      input: DescribeMaintenanceStartTimeCommandInput;
      output: DescribeMaintenanceStartTimeCommandOutput;
    };
  };
}
