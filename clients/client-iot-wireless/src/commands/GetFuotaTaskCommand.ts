// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetFuotaTaskRequest, GetFuotaTaskResponse } from "../models/models_0";
import { GetFuotaTask } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFuotaTaskCommand}.
 */
export interface GetFuotaTaskCommandInput extends GetFuotaTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetFuotaTaskCommand}.
 */
export interface GetFuotaTaskCommandOutput extends GetFuotaTaskResponse, __MetadataBearer {}

/**
 * <p>Gets information about a FUOTA task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetFuotaTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetFuotaTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // GetFuotaTaskRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetFuotaTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetFuotaTaskResponse
 * //   Arn: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Status: "Pending" || "FuotaSession_Waiting" || "In_FuotaSession" || "FuotaDone" || "Delete_Waiting",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   LoRaWAN: { // LoRaWANFuotaTaskGetInfo
 * //     RfRegion: "STRING_VALUE",
 * //     StartTime: new Date("TIMESTAMP"),
 * //   },
 * //   FirmwareUpdateImage: "STRING_VALUE",
 * //   FirmwareUpdateRole: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   RedundancyPercent: Number("int"),
 * //   FragmentSizeBytes: Number("int"),
 * //   FragmentIntervalMS: Number("int"),
 * //   Descriptor: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFuotaTaskCommandInput - {@link GetFuotaTaskCommandInput}
 * @returns {@link GetFuotaTaskCommandOutput}
 * @see {@link GetFuotaTaskCommandInput} for command's `input` shape.
 * @see {@link GetFuotaTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
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
export class GetFuotaTaskCommand extends $Command
  .classBuilder<
    GetFuotaTaskCommandInput,
    GetFuotaTaskCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "GetFuotaTask", {})
  .n("IoTWirelessClient", "GetFuotaTaskCommand")
  .sc(GetFuotaTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFuotaTaskRequest;
      output: GetFuotaTaskResponse;
    };
    sdk: {
      input: GetFuotaTaskCommandInput;
      output: GetFuotaTaskCommandOutput;
    };
  };
}
