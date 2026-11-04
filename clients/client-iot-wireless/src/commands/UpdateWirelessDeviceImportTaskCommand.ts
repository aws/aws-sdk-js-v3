// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateWirelessDeviceImportTaskRequest, UpdateWirelessDeviceImportTaskResponse } from "../models/models_1";
import { UpdateWirelessDeviceImportTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface UpdateWirelessDeviceImportTaskCommandOutput extends UpdateWirelessDeviceImportTaskResponse, __MetadataBearer {}

/**
 * Update an import task to add more devices to the task.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateWirelessDeviceImportTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateWirelessDeviceImportTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
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
 *
 * User does not have permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Adding, updating, or deleting the resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because it exceeded the allowed API request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input did not meet the specified constraints.
 *
 * @throws {@link IoTWirelessServiceException}
 *
 * Base exception class for all service exceptions from IoTWireless service.
 *
 * @public
 */
export class UpdateWirelessDeviceImportTaskCommand extends command<UpdateWirelessDeviceImportTaskCommandInput, UpdateWirelessDeviceImportTaskCommandOutput>(
  _ep0,
  _mw0,
  "UpdateWirelessDeviceImportTask",
  UpdateWirelessDeviceImportTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWirelessDeviceImportTaskRequest;
      output: {};
    };
    sdk: {
      input: UpdateWirelessDeviceImportTaskCommandInput;
      output: UpdateWirelessDeviceImportTaskCommandOutput;
    };
  };
}
