// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  StartSingleWirelessDeviceImportTaskRequest,
  StartSingleWirelessDeviceImportTaskResponse,
} from "../models/models_1";
import {
  de_StartSingleWirelessDeviceImportTaskCommand,
  se_StartSingleWirelessDeviceImportTaskCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface StartSingleWirelessDeviceImportTaskCommandOutput
  extends StartSingleWirelessDeviceImportTaskResponse,
    __MetadataBearer {}

/**
 * <p>Start import task for a single wireless device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, StartSingleWirelessDeviceImportTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, StartSingleWirelessDeviceImportTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
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
 *   Sidewalk: { // SidewalkSingleStartImportInfo
 *     SidewalkManufacturingSn: "STRING_VALUE",
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
export class StartSingleWirelessDeviceImportTaskCommand extends $Command
  .classBuilder<
    StartSingleWirelessDeviceImportTaskCommandInput,
    StartSingleWirelessDeviceImportTaskCommandOutput,
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
  .s("iotwireless", "StartSingleWirelessDeviceImportTask", {})
  .n("IoTWirelessClient", "StartSingleWirelessDeviceImportTaskCommand")
  .f(void 0, void 0)
  .ser(se_StartSingleWirelessDeviceImportTaskCommand)
  .de(de_StartSingleWirelessDeviceImportTaskCommand)
  .build() {}
