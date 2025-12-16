// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import type {
  DeleteNetworkAnalyzerConfigurationRequest,
  DeleteNetworkAnalyzerConfigurationResponse,
} from "../models/models_0";
import { DeleteNetworkAnalyzerConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNetworkAnalyzerConfigurationCommand}.
 */
export interface DeleteNetworkAnalyzerConfigurationCommandInput extends DeleteNetworkAnalyzerConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNetworkAnalyzerConfigurationCommand}.
 */
export interface DeleteNetworkAnalyzerConfigurationCommandOutput
  extends DeleteNetworkAnalyzerConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a network analyzer configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DeleteNetworkAnalyzerConfigurationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DeleteNetworkAnalyzerConfigurationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // DeleteNetworkAnalyzerConfigurationRequest
 *   ConfigurationName: "STRING_VALUE", // required
 * };
 * const command = new DeleteNetworkAnalyzerConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteNetworkAnalyzerConfigurationCommandInput - {@link DeleteNetworkAnalyzerConfigurationCommandInput}
 * @returns {@link DeleteNetworkAnalyzerConfigurationCommandOutput}
 * @see {@link DeleteNetworkAnalyzerConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkAnalyzerConfigurationCommandOutput} for command's `response` shape.
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
export class DeleteNetworkAnalyzerConfigurationCommand extends $Command
  .classBuilder<
    DeleteNetworkAnalyzerConfigurationCommandInput,
    DeleteNetworkAnalyzerConfigurationCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "DeleteNetworkAnalyzerConfiguration", {})
  .n("IoTWirelessClient", "DeleteNetworkAnalyzerConfigurationCommand")
  .sc(DeleteNetworkAnalyzerConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNetworkAnalyzerConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteNetworkAnalyzerConfigurationCommandInput;
      output: DeleteNetworkAnalyzerConfigurationCommandOutput;
    };
  };
}
