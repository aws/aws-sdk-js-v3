// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { ResetAllResourceLogLevelsRequest, ResetAllResourceLogLevelsResponse } from "../models/models_0";
import { ResetAllResourceLogLevels } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetAllResourceLogLevelsCommand}.
 */
export interface ResetAllResourceLogLevelsCommandInput extends ResetAllResourceLogLevelsRequest {}
/**
 * @public
 *
 * The output of {@link ResetAllResourceLogLevelsCommand}.
 */
export interface ResetAllResourceLogLevelsCommandOutput extends ResetAllResourceLogLevelsResponse, __MetadataBearer {}

/**
 * <p>Removes the log-level overrides for all resources; wireless devices, wireless
 *             gateways, and FUOTA tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ResetAllResourceLogLevelsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ResetAllResourceLogLevelsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = {};
 * const command = new ResetAllResourceLogLevelsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResetAllResourceLogLevelsCommandInput - {@link ResetAllResourceLogLevelsCommandInput}
 * @returns {@link ResetAllResourceLogLevelsCommandOutput}
 * @see {@link ResetAllResourceLogLevelsCommandInput} for command's `input` shape.
 * @see {@link ResetAllResourceLogLevelsCommandOutput} for command's `response` shape.
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
export class ResetAllResourceLogLevelsCommand extends $Command
  .classBuilder<
    ResetAllResourceLogLevelsCommandInput,
    ResetAllResourceLogLevelsCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "ResetAllResourceLogLevels", {})
  .n("IoTWirelessClient", "ResetAllResourceLogLevelsCommand")
  .sc(ResetAllResourceLogLevels)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: ResetAllResourceLogLevelsCommandInput;
      output: ResetAllResourceLogLevelsCommandOutput;
    };
  };
}
