// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StartSingleWirelessDeviceImportTaskRequest,
  StartSingleWirelessDeviceImportTaskResponse,
} from "../models/models_1";
import { StartSingleWirelessDeviceImportTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartSingleWirelessDeviceImportTaskCommand}.
 */
export interface StartSingleWirelessDeviceImportTaskCommandInput extends StartSingleWirelessDeviceImportTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartSingleWirelessDeviceImportTaskCommand}.
 */
export interface StartSingleWirelessDeviceImportTaskCommandOutput extends StartSingleWirelessDeviceImportTaskResponse, __MetadataBearer {}

/**
 * Start import task for a single wireless device.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, StartSingleWirelessDeviceImportTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, StartSingleWirelessDeviceImportTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // StartSingleWirelessDeviceImportTaskRequest
 *   DestinationName: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   DeviceName: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Positioning: "Enabled" || "Disabled",
 *   Sidewalk: { // SidewalkSingleStartImportInfo
 *     SidewalkManufacturingSn: "STRING_VALUE",
 *     Positioning: { // SidewalkPositioning
 *       DestinationName: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new StartSingleWirelessDeviceImportTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartSingleWirelessDeviceImportTaskResponse
 * //   Id: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartSingleWirelessDeviceImportTaskCommandInput - {@link StartSingleWirelessDeviceImportTaskCommandInput}
 * @returns {@link StartSingleWirelessDeviceImportTaskCommandOutput}
 * @see {@link StartSingleWirelessDeviceImportTaskCommandInput} for command's `input` shape.
 * @see {@link StartSingleWirelessDeviceImportTaskCommandOutput} for command's `response` shape.
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
export class StartSingleWirelessDeviceImportTaskCommand extends command<StartSingleWirelessDeviceImportTaskCommandInput, StartSingleWirelessDeviceImportTaskCommandOutput>(
  _ep0,
  _mw0,
  "StartSingleWirelessDeviceImportTask",
  StartSingleWirelessDeviceImportTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartSingleWirelessDeviceImportTaskRequest;
      output: StartSingleWirelessDeviceImportTaskResponse;
    };
    sdk: {
      input: StartSingleWirelessDeviceImportTaskCommandInput;
      output: StartSingleWirelessDeviceImportTaskCommandOutput;
    };
  };
}
