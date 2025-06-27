// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetResourceLogLevelRequest, GetResourceLogLevelResponse } from "../models/models_0";
import { de_GetResourceLogLevelCommand, se_GetResourceLogLevelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResourceLogLevelCommand}.
 */
export interface GetResourceLogLevelCommandInput extends GetResourceLogLevelRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceLogLevelCommand}.
 */
export interface GetResourceLogLevelCommandOutput extends GetResourceLogLevelResponse, __MetadataBearer {}

/**
 * <p>Fetches the log-level override, if any, for a given resource ID and resource
 *             type..</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetResourceLogLevelCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetResourceLogLevelCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // GetResourceLogLevelRequest
 *   ResourceIdentifier: "STRING_VALUE", // required
 *   ResourceType: "STRING_VALUE", // required
 * };
 * const command = new GetResourceLogLevelCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceLogLevelResponse
 * //   LogLevel: "INFO" || "ERROR" || "DISABLED",
 * // };
 *
 * ```
 *
 * @param GetResourceLogLevelCommandInput - {@link GetResourceLogLevelCommandInput}
 * @returns {@link GetResourceLogLevelCommandOutput}
 * @see {@link GetResourceLogLevelCommandInput} for command's `input` shape.
 * @see {@link GetResourceLogLevelCommandOutput} for command's `response` shape.
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
export class GetResourceLogLevelCommand extends $Command
  .classBuilder<
    GetResourceLogLevelCommandInput,
    GetResourceLogLevelCommandOutput,
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
  .s("iotwireless", "GetResourceLogLevel", {})
  .n("IoTWirelessClient", "GetResourceLogLevelCommand")
  .f(void 0, void 0)
  .ser(se_GetResourceLogLevelCommand)
  .de(de_GetResourceLogLevelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourceLogLevelRequest;
      output: GetResourceLogLevelResponse;
    };
    sdk: {
      input: GetResourceLogLevelCommandInput;
      output: GetResourceLogLevelCommandOutput;
    };
  };
}
