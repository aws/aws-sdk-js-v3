// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UnregisterConnectorRequest, UnregisterConnectorResponse } from "../models/models_0";
import { de_UnregisterConnectorCommand, se_UnregisterConnectorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UnregisterConnectorCommand}.
 */
export interface UnregisterConnectorCommandInput extends UnregisterConnectorRequest {}
/**
 * @public
 *
 * The output of {@link UnregisterConnectorCommand}.
 */
export interface UnregisterConnectorCommandOutput extends UnregisterConnectorResponse, __MetadataBearer {}

/**
 * <p>Unregisters the custom connector registered in your account that matches the connector
 *       label provided in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, UnregisterConnectorCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, UnregisterConnectorCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const input = { // UnregisterConnectorRequest
 *   connectorLabel: "STRING_VALUE", // required
 *   forceDelete: true || false,
 * };
 * const command = new UnregisterConnectorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UnregisterConnectorCommandInput - {@link UnregisterConnectorCommandInput}
 * @returns {@link UnregisterConnectorCommandOutput}
 * @see {@link UnregisterConnectorCommandInput} for command's `input` shape.
 * @see {@link UnregisterConnectorCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> There was a conflict when processing the request (for example, a flow with the given name
 *       already exists within the account. Check for conflicting resource names and try again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *       later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource specified in the request (such as the source or destination connector
 *       profile) is not found. </p>
 *
 * @throws {@link AppflowServiceException}
 * <p>Base exception class for all service exceptions from Appflow service.</p>
 *
 *
 * @public
 */
export class UnregisterConnectorCommand extends $Command
  .classBuilder<
    UnregisterConnectorCommandInput,
    UnregisterConnectorCommandOutput,
    AppflowClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppflowClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SandstoneConfigurationServiceLambda", "UnregisterConnector", {})
  .n("AppflowClient", "UnregisterConnectorCommand")
  .f(void 0, void 0)
  .ser(se_UnregisterConnectorCommand)
  .de(de_UnregisterConnectorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UnregisterConnectorRequest;
      output: {};
    };
    sdk: {
      input: UnregisterConnectorCommandInput;
      output: UnregisterConnectorCommandOutput;
    };
  };
}
