// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  ListDevicesForWirelessDeviceImportTaskRequest,
  ListDevicesForWirelessDeviceImportTaskResponse,
} from "../models/models_0";
import {
  de_ListDevicesForWirelessDeviceImportTaskCommand,
  se_ListDevicesForWirelessDeviceImportTaskCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDevicesForWirelessDeviceImportTaskCommand}.
 */
export interface ListDevicesForWirelessDeviceImportTaskCommandInput
  extends ListDevicesForWirelessDeviceImportTaskRequest {}
/**
 * @public
 *
 * The output of {@link ListDevicesForWirelessDeviceImportTaskCommand}.
 */
export interface ListDevicesForWirelessDeviceImportTaskCommandOutput
  extends ListDevicesForWirelessDeviceImportTaskResponse,
    __MetadataBearer {}

/**
 * <p>List the Sidewalk devices in an import task and their onboarding status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListDevicesForWirelessDeviceImportTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListDevicesForWirelessDeviceImportTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // ListDevicesForWirelessDeviceImportTaskRequest
 *   Id: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Status: "INITIALIZED" || "PENDING" || "ONBOARDED" || "FAILED",
 * };
 * const command = new ListDevicesForWirelessDeviceImportTaskCommand(input);
 * const response = await client.send(command);
 * // { // ListDevicesForWirelessDeviceImportTaskResponse
 * //   NextToken: "STRING_VALUE",
 * //   DestinationName: "STRING_VALUE",
 * //   ImportedWirelessDeviceList: [ // ImportedWirelessDeviceList
 * //     { // ImportedWirelessDevice
 * //       Sidewalk: { // ImportedSidewalkDevice
 * //         SidewalkManufacturingSn: "STRING_VALUE",
 * //         OnboardingStatus: "INITIALIZED" || "PENDING" || "ONBOARDED" || "FAILED",
 * //         OnboardingStatusReason: "STRING_VALUE",
 * //         LastUpdateTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListDevicesForWirelessDeviceImportTaskCommandInput - {@link ListDevicesForWirelessDeviceImportTaskCommandInput}
 * @returns {@link ListDevicesForWirelessDeviceImportTaskCommandOutput}
 * @see {@link ListDevicesForWirelessDeviceImportTaskCommandInput} for command's `input` shape.
 * @see {@link ListDevicesForWirelessDeviceImportTaskCommandOutput} for command's `response` shape.
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
export class ListDevicesForWirelessDeviceImportTaskCommand extends $Command
  .classBuilder<
    ListDevicesForWirelessDeviceImportTaskCommandInput,
    ListDevicesForWirelessDeviceImportTaskCommandOutput,
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
  .s("iotwireless", "ListDevicesForWirelessDeviceImportTask", {})
  .n("IoTWirelessClient", "ListDevicesForWirelessDeviceImportTaskCommand")
  .f(void 0, void 0)
  .ser(se_ListDevicesForWirelessDeviceImportTaskCommand)
  .de(de_ListDevicesForWirelessDeviceImportTaskCommand)
  .build() {}
