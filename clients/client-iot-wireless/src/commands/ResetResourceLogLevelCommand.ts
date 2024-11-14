// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { ResetResourceLogLevelRequest, ResetResourceLogLevelResponse } from "../models/models_1";
import { de_ResetResourceLogLevelCommand, se_ResetResourceLogLevelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetResourceLogLevelCommand}.
 */
export interface ResetResourceLogLevelCommandInput extends ResetResourceLogLevelRequest {}
/**
 * @public
 *
 * The output of {@link ResetResourceLogLevelCommand}.
 */
export interface ResetResourceLogLevelCommandOutput extends ResetResourceLogLevelResponse, __MetadataBearer {}

/**
 * <p>Removes the log-level override, if any, for a specific resource-ID and resource-type.
 *             It can be used for a wireless device, a wireless gateway, or a fuota task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ResetResourceLogLevelCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ResetResourceLogLevelCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // ResetResourceLogLevelRequest
 *   ResourceIdentifier: "STRING_VALUE", // required
 *   ResourceType: "STRING_VALUE", // required
 * };
 * const command = new ResetResourceLogLevelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResetResourceLogLevelCommandInput - {@link ResetResourceLogLevelCommandInput}
 * @returns {@link ResetResourceLogLevelCommandOutput}
 * @see {@link ResetResourceLogLevelCommandInput} for command's `input` shape.
 * @see {@link ResetResourceLogLevelCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ResetResourceLogLevelCommand extends $Command
  .classBuilder<
    ResetResourceLogLevelCommandInput,
    ResetResourceLogLevelCommandOutput,
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
  .s("iotwireless", "ResetResourceLogLevel", {})
  .n("IoTWirelessClient", "ResetResourceLogLevelCommand")
  .f(void 0, void 0)
  .ser(se_ResetResourceLogLevelCommand)
  .de(de_ResetResourceLogLevelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetResourceLogLevelRequest;
      output: {};
    };
    sdk: {
      input: ResetResourceLogLevelCommandInput;
      output: ResetResourceLogLevelCommandOutput;
    };
  };
}
