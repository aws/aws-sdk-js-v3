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
 * <p>Updates a gateway's weekly maintenance start time information, including day and
 *          time of the week. The maintenance time is the time in your gateway's time zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateMaintenanceStartTimeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateMaintenanceStartTimeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // UpdateMaintenanceStartTimeInput
 *   GatewayARN: "STRING_VALUE", // required
 *   HourOfDay: Number("int"), // required
 *   MinuteOfHour: Number("int"), // required
 *   DayOfWeek: Number("int"),
 *   DayOfMonth: Number("int"),
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
  .ep({
    ...commonParams,
  })
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
  .build() {}
