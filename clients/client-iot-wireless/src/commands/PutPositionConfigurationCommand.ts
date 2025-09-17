// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { PutPositionConfigurationRequest, PutPositionConfigurationResponse } from "../models/models_1";
import { de_PutPositionConfigurationCommand, se_PutPositionConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutPositionConfigurationCommand}.
 */
export interface PutPositionConfigurationCommandInput extends PutPositionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutPositionConfigurationCommand}.
 */
export interface PutPositionConfigurationCommandOutput extends PutPositionConfigurationResponse, __MetadataBearer {}

/**
 * <p>Put position configuration for a given resource.</p>
 *          <important>
 *             <p>This action is no longer supported. Calls to update the position configuration
 *                 should use the <a href="https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateResourcePosition.html">UpdateResourcePosition</a> API operation instead.</p>
 *          </important>
 *
 * @deprecated This operation is no longer supported.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, PutPositionConfigurationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, PutPositionConfigurationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // PutPositionConfigurationRequest
 *   ResourceIdentifier: "STRING_VALUE", // required
 *   ResourceType: "WirelessDevice" || "WirelessGateway", // required
 *   Solvers: { // PositionSolverConfigurations
 *     SemtechGnss: { // SemtechGnssConfiguration
 *       Status: "Enabled" || "Disabled", // required
 *       Fec: "ROSE" || "NONE", // required
 *     },
 *   },
 *   Destination: "STRING_VALUE",
 * };
 * const command = new PutPositionConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutPositionConfigurationCommandInput - {@link PutPositionConfigurationCommandInput}
 * @returns {@link PutPositionConfigurationCommandOutput}
 * @see {@link PutPositionConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutPositionConfigurationCommandOutput} for command's `response` shape.
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
export class PutPositionConfigurationCommand extends $Command
  .classBuilder<
    PutPositionConfigurationCommandInput,
    PutPositionConfigurationCommandOutput,
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
  .s("iotwireless", "PutPositionConfiguration", {})
  .n("IoTWirelessClient", "PutPositionConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_PutPositionConfigurationCommand)
  .de(de_PutPositionConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutPositionConfigurationRequest;
      output: {};
    };
    sdk: {
      input: PutPositionConfigurationCommandInput;
      output: PutPositionConfigurationCommandOutput;
    };
  };
}
