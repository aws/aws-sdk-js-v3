// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteWirelessDeviceImportTaskRequest, DeleteWirelessDeviceImportTaskResponse } from "../models/models_0";
import { DeleteWirelessDeviceImportTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteWirelessDeviceImportTaskCommand}.
 */
export interface DeleteWirelessDeviceImportTaskCommandInput extends DeleteWirelessDeviceImportTaskRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWirelessDeviceImportTaskCommand}.
 */
export interface DeleteWirelessDeviceImportTaskCommandOutput extends DeleteWirelessDeviceImportTaskResponse, __MetadataBearer {}

/**
 * Delete an import task.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DeleteWirelessDeviceImportTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DeleteWirelessDeviceImportTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // DeleteWirelessDeviceImportTaskRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteWirelessDeviceImportTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWirelessDeviceImportTaskCommandInput - {@link DeleteWirelessDeviceImportTaskCommandInput}
 * @returns {@link DeleteWirelessDeviceImportTaskCommandOutput}
 * @see {@link DeleteWirelessDeviceImportTaskCommandInput} for command's `input` shape.
 * @see {@link DeleteWirelessDeviceImportTaskCommandOutput} for command's `response` shape.
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
export class DeleteWirelessDeviceImportTaskCommand extends command<DeleteWirelessDeviceImportTaskCommandInput, DeleteWirelessDeviceImportTaskCommandOutput>(
  _ep0,
  _mw0,
  "DeleteWirelessDeviceImportTask",
  DeleteWirelessDeviceImportTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWirelessDeviceImportTaskRequest;
      output: {};
    };
    sdk: {
      input: DeleteWirelessDeviceImportTaskCommandInput;
      output: DeleteWirelessDeviceImportTaskCommandOutput;
    };
  };
}
