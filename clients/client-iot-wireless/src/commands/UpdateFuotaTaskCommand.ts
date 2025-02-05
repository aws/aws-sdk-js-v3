// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { UpdateFuotaTaskRequest, UpdateFuotaTaskResponse } from "../models/models_1";
import { de_UpdateFuotaTaskCommand, se_UpdateFuotaTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFuotaTaskCommand}.
 */
export interface UpdateFuotaTaskCommandInput extends UpdateFuotaTaskRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFuotaTaskCommand}.
 */
export interface UpdateFuotaTaskCommandOutput extends UpdateFuotaTaskResponse, __MetadataBearer {}

/**
 * <p>Updates properties of a FUOTA task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateFuotaTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateFuotaTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTWirelessClient(config);
 * const input = { // UpdateFuotaTaskRequest
 *   Id: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   LoRaWAN: { // LoRaWANFuotaTask
 *     RfRegion: "EU868" || "US915" || "AU915" || "AS923-1" || "AS923-2" || "AS923-3" || "AS923-4" || "EU433" || "CN470" || "CN779" || "RU864" || "KR920" || "IN865",
 *   },
 *   FirmwareUpdateImage: "STRING_VALUE",
 *   FirmwareUpdateRole: "STRING_VALUE",
 *   RedundancyPercent: Number("int"),
 *   FragmentSizeBytes: Number("int"),
 *   FragmentIntervalMS: Number("int"),
 *   Descriptor: "STRING_VALUE",
 * };
 * const command = new UpdateFuotaTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateFuotaTaskCommandInput - {@link UpdateFuotaTaskCommandInput}
 * @returns {@link UpdateFuotaTaskCommandOutput}
 * @see {@link UpdateFuotaTaskCommandInput} for command's `input` shape.
 * @see {@link UpdateFuotaTaskCommandOutput} for command's `response` shape.
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
export class UpdateFuotaTaskCommand extends $Command
  .classBuilder<
    UpdateFuotaTaskCommandInput,
    UpdateFuotaTaskCommandOutput,
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
  .s("iotwireless", "UpdateFuotaTask", {})
  .n("IoTWirelessClient", "UpdateFuotaTaskCommand")
  .f(void 0, void 0)
  .ser(se_UpdateFuotaTaskCommand)
  .de(de_UpdateFuotaTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFuotaTaskRequest;
      output: {};
    };
    sdk: {
      input: UpdateFuotaTaskCommandInput;
      output: UpdateFuotaTaskCommandOutput;
    };
  };
}
