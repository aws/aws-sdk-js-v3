// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { CreateFuotaTaskRequest, CreateFuotaTaskResponse } from "../models/models_0";
import { de_CreateFuotaTaskCommand, se_CreateFuotaTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFuotaTaskCommand}.
 */
export interface CreateFuotaTaskCommandInput extends CreateFuotaTaskRequest {}
/**
 * @public
 *
 * The output of {@link CreateFuotaTaskCommand}.
 */
export interface CreateFuotaTaskCommandOutput extends CreateFuotaTaskResponse, __MetadataBearer {}

/**
 * <p>Creates a FUOTA task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, CreateFuotaTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, CreateFuotaTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // CreateFuotaTaskRequest
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE",
 *   LoRaWAN: { // LoRaWANFuotaTask
 *     RfRegion: "EU868" || "US915" || "AU915" || "AS923-1" || "AS923-2" || "AS923-3" || "AS923-4" || "EU433" || "CN470" || "CN779" || "RU864" || "KR920" || "IN865",
 *   },
 *   FirmwareUpdateImage: "STRING_VALUE", // required
 *   FirmwareUpdateRole: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   RedundancyPercent: Number("int"),
 *   FragmentSizeBytes: Number("int"),
 *   FragmentIntervalMS: Number("int"),
 *   Descriptor: "STRING_VALUE",
 * };
 * const command = new CreateFuotaTaskCommand(input);
 * const response = await client.send(command);
 * // { // CreateFuotaTaskResponse
 * //   Arn: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateFuotaTaskCommandInput - {@link CreateFuotaTaskCommandInput}
 * @returns {@link CreateFuotaTaskCommandOutput}
 * @see {@link CreateFuotaTaskCommandInput} for command's `input` shape.
 * @see {@link CreateFuotaTaskCommandOutput} for command's `response` shape.
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
export class CreateFuotaTaskCommand extends $Command
  .classBuilder<
    CreateFuotaTaskCommandInput,
    CreateFuotaTaskCommandOutput,
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
  .s("iotwireless", "CreateFuotaTask", {})
  .n("IoTWirelessClient", "CreateFuotaTaskCommand")
  .f(void 0, void 0)
  .ser(se_CreateFuotaTaskCommand)
  .de(de_CreateFuotaTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFuotaTaskRequest;
      output: CreateFuotaTaskResponse;
    };
    sdk: {
      input: CreateFuotaTaskCommandInput;
      output: CreateFuotaTaskCommandOutput;
    };
  };
}
