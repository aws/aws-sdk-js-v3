// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { UpdateWirelessDeviceImportTaskRequest, UpdateWirelessDeviceImportTaskResponse } from "../models/models_1";
import {
  de_UpdateWirelessDeviceImportTaskCommand,
  se_UpdateWirelessDeviceImportTaskCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWirelessDeviceImportTaskCommand}.
 */
export interface UpdateWirelessDeviceImportTaskCommandInput extends UpdateWirelessDeviceImportTaskRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWirelessDeviceImportTaskCommand}.
 */
export interface UpdateWirelessDeviceImportTaskCommandOutput
  extends UpdateWirelessDeviceImportTaskResponse,
    __MetadataBearer {}

/**
 * <p>Update an import task to add more devices to the task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateWirelessDeviceImportTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateWirelessDeviceImportTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // UpdateWirelessDeviceImportTaskRequest
 *   Id: "STRING_VALUE", // required
 *   Sidewalk: { // SidewalkUpdateImportInfo
 *     DeviceCreationFile: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateWirelessDeviceImportTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateWirelessDeviceImportTaskCommandInput - {@link UpdateWirelessDeviceImportTaskCommandInput}
 * @returns {@link UpdateWirelessDeviceImportTaskCommandOutput}
 * @see {@link UpdateWirelessDeviceImportTaskCommandInput} for command's `input` shape.
 * @see {@link UpdateWirelessDeviceImportTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Adding, updating, or deleting the resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 * @public
 */
export class UpdateWirelessDeviceImportTaskCommand extends $Command
  .classBuilder<
    UpdateWirelessDeviceImportTaskCommandInput,
    UpdateWirelessDeviceImportTaskCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("iotwireless", "UpdateWirelessDeviceImportTask", {})
  .n("IoTWirelessClient", "UpdateWirelessDeviceImportTaskCommand")
  .f(void 0, void 0)
  .ser(se_UpdateWirelessDeviceImportTaskCommand)
  .de(de_UpdateWirelessDeviceImportTaskCommand)
  .build() {}
