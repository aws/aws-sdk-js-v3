// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import type { ResetResourceLogLevelRequest, ResetResourceLogLevelResponse } from "../models/models_0";
import { ResetResourceLogLevel } from "../schemas/schemas_0";

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
 * <p>Removes the log-level override, if any, for a specific resource ID and resource type.
 *             It can be used for a wireless device, a wireless gateway, or a FUOTA task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ResetResourceLogLevelCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ResetResourceLogLevelCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "ResetResourceLogLevel", {})
  .n("IoTWirelessClient", "ResetResourceLogLevelCommand")
  .sc(ResetResourceLogLevel)
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
