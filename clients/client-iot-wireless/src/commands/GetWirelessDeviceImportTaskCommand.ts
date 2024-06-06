// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetWirelessDeviceImportTaskRequest, GetWirelessDeviceImportTaskResponse } from "../models/models_0";
import {
  de_GetWirelessDeviceImportTaskCommand,
  se_GetWirelessDeviceImportTaskCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWirelessDeviceImportTaskCommand}.
 */
export interface GetWirelessDeviceImportTaskCommandInput extends GetWirelessDeviceImportTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetWirelessDeviceImportTaskCommand}.
 */
export interface GetWirelessDeviceImportTaskCommandOutput
  extends GetWirelessDeviceImportTaskResponse,
    __MetadataBearer {}

/**
 * <p>Get information about an import task and count of device onboarding summary
 *             information for the import task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetWirelessDeviceImportTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetWirelessDeviceImportTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // GetWirelessDeviceImportTaskRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetWirelessDeviceImportTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetWirelessDeviceImportTaskResponse
 * //   Id: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   DestinationName: "STRING_VALUE",
 * //   Sidewalk: { // SidewalkGetStartImportInfo
 * //     DeviceCreationFileList: [ // DeviceCreationFileList
 * //       "STRING_VALUE",
 * //     ],
 * //     Role: "STRING_VALUE",
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   Status: "INITIALIZING" || "INITIALIZED" || "PENDING" || "COMPLETE" || "FAILED" || "DELETING",
 * //   StatusReason: "STRING_VALUE",
 * //   InitializedImportedDeviceCount: Number("long"),
 * //   PendingImportedDeviceCount: Number("long"),
 * //   OnboardedImportedDeviceCount: Number("long"),
 * //   FailedImportedDeviceCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetWirelessDeviceImportTaskCommandInput - {@link GetWirelessDeviceImportTaskCommandInput}
 * @returns {@link GetWirelessDeviceImportTaskCommandOutput}
 * @see {@link GetWirelessDeviceImportTaskCommandInput} for command's `input` shape.
 * @see {@link GetWirelessDeviceImportTaskCommandOutput} for command's `response` shape.
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
export class GetWirelessDeviceImportTaskCommand extends $Command
  .classBuilder<
    GetWirelessDeviceImportTaskCommandInput,
    GetWirelessDeviceImportTaskCommandOutput,
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
  .s("iotwireless", "GetWirelessDeviceImportTask", {})
  .n("IoTWirelessClient", "GetWirelessDeviceImportTaskCommand")
  .f(void 0, void 0)
  .ser(se_GetWirelessDeviceImportTaskCommand)
  .de(de_GetWirelessDeviceImportTaskCommand)
  .build() {}
