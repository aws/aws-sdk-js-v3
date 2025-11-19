// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { PutResourceLogLevelRequest, PutResourceLogLevelResponse } from "../models/models_0";
import { PutResourceLogLevel } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutResourceLogLevelCommand}.
 */
export interface PutResourceLogLevelCommandInput extends PutResourceLogLevelRequest {}
/**
 * @public
 *
 * The output of {@link PutResourceLogLevelCommand}.
 */
export interface PutResourceLogLevelCommandOutput extends PutResourceLogLevelResponse, __MetadataBearer {}

/**
 * <p>Sets the log-level override for a resource ID and resource type. A limit of 200 log
 *             level override can be set per account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, PutResourceLogLevelCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, PutResourceLogLevelCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // PutResourceLogLevelRequest
 *   ResourceIdentifier: "STRING_VALUE", // required
 *   ResourceType: "STRING_VALUE", // required
 *   LogLevel: "INFO" || "ERROR" || "DISABLED", // required
 * };
 * const command = new PutResourceLogLevelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutResourceLogLevelCommandInput - {@link PutResourceLogLevelCommandInput}
 * @returns {@link PutResourceLogLevelCommandOutput}
 * @see {@link PutResourceLogLevelCommandInput} for command's `input` shape.
 * @see {@link PutResourceLogLevelCommandOutput} for command's `response` shape.
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
export class PutResourceLogLevelCommand extends $Command
  .classBuilder<
    PutResourceLogLevelCommandInput,
    PutResourceLogLevelCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "PutResourceLogLevel", {})
  .n("IoTWirelessClient", "PutResourceLogLevelCommand")
  .sc(PutResourceLogLevel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutResourceLogLevelRequest;
      output: {};
    };
    sdk: {
      input: PutResourceLogLevelCommandInput;
      output: PutResourceLogLevelCommandOutput;
    };
  };
}
