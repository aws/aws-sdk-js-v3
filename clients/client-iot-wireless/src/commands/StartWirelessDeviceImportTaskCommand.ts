// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { StartWirelessDeviceImportTaskRequest, StartWirelessDeviceImportTaskResponse } from "../models/models_1";
import {
  de_StartWirelessDeviceImportTaskCommand,
  se_StartWirelessDeviceImportTaskCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartWirelessDeviceImportTaskCommand}.
 */
export interface StartWirelessDeviceImportTaskCommandInput extends StartWirelessDeviceImportTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartWirelessDeviceImportTaskCommand}.
 */
export interface StartWirelessDeviceImportTaskCommandOutput
  extends StartWirelessDeviceImportTaskResponse,
    __MetadataBearer {}

/**
 * <p>Start import task for provisioning Sidewalk devices in bulk using an S3 CSV
 *             file.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, StartWirelessDeviceImportTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, StartWirelessDeviceImportTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // StartWirelessDeviceImportTaskRequest
 *   DestinationName: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Sidewalk: { // SidewalkStartImportInfo
 *     DeviceCreationFile: "STRING_VALUE",
 *     Role: "STRING_VALUE",
 *   },
 * };
 * const command = new StartWirelessDeviceImportTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartWirelessDeviceImportTaskResponse
 * //   Id: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartWirelessDeviceImportTaskCommandInput - {@link StartWirelessDeviceImportTaskCommandInput}
 * @returns {@link StartWirelessDeviceImportTaskCommandOutput}
 * @see {@link StartWirelessDeviceImportTaskCommandInput} for command's `input` shape.
 * @see {@link StartWirelessDeviceImportTaskCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class StartWirelessDeviceImportTaskCommand extends $Command
  .classBuilder<
    StartWirelessDeviceImportTaskCommandInput,
    StartWirelessDeviceImportTaskCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("iotwireless", "StartWirelessDeviceImportTask", {})
  .n("IoTWirelessClient", "StartWirelessDeviceImportTaskCommand")
  .f(void 0, void 0)
  .ser(se_StartWirelessDeviceImportTaskCommand)
  .de(de_StartWirelessDeviceImportTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartWirelessDeviceImportTaskRequest;
      output: StartWirelessDeviceImportTaskResponse;
    };
    sdk: {
      input: StartWirelessDeviceImportTaskCommandInput;
      output: StartWirelessDeviceImportTaskCommandOutput;
    };
  };
}
