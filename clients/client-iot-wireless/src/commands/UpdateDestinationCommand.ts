// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { UpdateDestinationRequest, UpdateDestinationResponse } from "../models/models_1";
import { de_UpdateDestinationCommand, se_UpdateDestinationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDestinationCommand}.
 */
export interface UpdateDestinationCommandInput extends UpdateDestinationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDestinationCommand}.
 */
export interface UpdateDestinationCommandOutput extends UpdateDestinationResponse, __MetadataBearer {}

/**
 * <p>Updates properties of a destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateDestinationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateDestinationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // UpdateDestinationRequest
 *   Name: "STRING_VALUE", // required
 *   ExpressionType: "RuleName" || "MqttTopic",
 *   Expression: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   RoleArn: "STRING_VALUE",
 * };
 * const command = new UpdateDestinationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDestinationCommandInput - {@link UpdateDestinationCommandInput}
 * @returns {@link UpdateDestinationCommandOutput}
 * @see {@link UpdateDestinationCommandInput} for command's `input` shape.
 * @see {@link UpdateDestinationCommandOutput} for command's `response` shape.
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
export class UpdateDestinationCommand extends $Command
  .classBuilder<
    UpdateDestinationCommandInput,
    UpdateDestinationCommandOutput,
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
  .s("iotwireless", "UpdateDestination", {})
  .n("IoTWirelessClient", "UpdateDestinationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDestinationCommand)
  .de(de_UpdateDestinationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDestinationRequest;
      output: {};
    };
    sdk: {
      input: UpdateDestinationCommandInput;
      output: UpdateDestinationCommandOutput;
    };
  };
}
