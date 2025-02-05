// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateMaintenanceStartTimeInput, UpdateMaintenanceStartTimeOutput } from "../models/models_0";
import { de_UpdateMaintenanceStartTimeCommand, se_UpdateMaintenanceStartTimeCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMaintenanceStartTimeCommand}.
 */
export interface UpdateMaintenanceStartTimeCommandInput extends UpdateMaintenanceStartTimeInput {}
/**
 * @public
 *
 * The output of {@link UpdateMaintenanceStartTimeCommand}.
 */
export interface UpdateMaintenanceStartTimeCommandOutput extends UpdateMaintenanceStartTimeOutput, __MetadataBearer {}

/**
 * <p>Updates a gateway's maintenance window schedule, with settings for monthly or
 *          weekly cadence, specific day and time to begin maintenance, and which types of updates to
 *          apply. Time configuration uses the gateway's time zone. You can pass values for a complete
 *          maintenance schedule, or update policy, or both. Previous values will persist for whichever
 *          setting you choose not to modify. If an incomplete or invalid maintenance schedule is
 *          passed, the entire request will be rejected with an error and no changes will occur.</p>
 *          <p>A complete maintenance schedule must include values for <i>both</i>
 *             <code>MinuteOfHour</code> and <code>HourOfDay</code>, and <i>either</i>
 *             <code>DayOfMonth</code>
 *             <i>or</i>
 *             <code>DayOfWeek</code>.</p>
 *          <note>
 *             <p>We recommend keeping maintenance updates turned on, except in specific use cases
 *             where the brief disruptions caused by updating the gateway could critically impact your
 *             deployment.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateMaintenanceStartTimeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateMaintenanceStartTimeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new StorageGatewayClient(config);
 * const input = { // UpdateMaintenanceStartTimeInput
 *   GatewayARN: "STRING_VALUE", // required
 *   HourOfDay: Number("int"),
 *   MinuteOfHour: Number("int"),
 *   DayOfWeek: Number("int"),
 *   DayOfMonth: Number("int"),
 *   SoftwareUpdatePreferences: { // SoftwareUpdatePreferences
 *     AutomaticUpdatePolicy: "ALL_VERSIONS" || "EMERGENCY_VERSIONS_ONLY",
 *   },
 * };
 * const command = new UpdateMaintenanceStartTimeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMaintenanceStartTimeOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateMaintenanceStartTimeCommandInput - {@link UpdateMaintenanceStartTimeCommandInput}
 * @returns {@link UpdateMaintenanceStartTimeCommandOutput}
 * @see {@link UpdateMaintenanceStartTimeCommandInput} for command's `input` shape.
 * @see {@link UpdateMaintenanceStartTimeCommandOutput} for command's `response` shape.
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
 * @example To update a gateway's maintenance start time
 * ```javascript
 * // Updates a gateway's weekly maintenance start time information, including day and time of the week. The maintenance time is in your gateway's time zone.
 * const input = {
 *   "DayOfWeek": 2,
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   "HourOfDay": 0,
 *   "MinuteOfHour": 30
 * };
 * const command = new UpdateMaintenanceStartTimeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * }
 * *\/
 * // example id: to-update-a-gateways-maintenance-start-time-1472152552031
 * ```
 *
 */
export class UpdateMaintenanceStartTimeCommand extends $Command
  .classBuilder<
    UpdateMaintenanceStartTimeCommandInput,
    UpdateMaintenanceStartTimeCommandOutput,
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
  .s("StorageGateway_20130630", "UpdateMaintenanceStartTime", {})
  .n("StorageGatewayClient", "UpdateMaintenanceStartTimeCommand")
  .f(void 0, void 0)
  .ser(se_UpdateMaintenanceStartTimeCommand)
  .de(de_UpdateMaintenanceStartTimeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMaintenanceStartTimeInput;
      output: UpdateMaintenanceStartTimeOutput;
    };
    sdk: {
      input: UpdateMaintenanceStartTimeCommandInput;
      output: UpdateMaintenanceStartTimeCommandOutput;
    };
  };
}
