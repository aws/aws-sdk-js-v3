// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDeploymentStrategyRequest } from "../models/models_0";
import { DeleteDeploymentStrategy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDeploymentStrategyCommand}.
 */
export interface DeleteDeploymentStrategyCommandInput extends DeleteDeploymentStrategyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDeploymentStrategyCommand}.
 */
export interface DeleteDeploymentStrategyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a deployment strategy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, DeleteDeploymentStrategyCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, DeleteDeploymentStrategyCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // DeleteDeploymentStrategyRequest
 *   DeploymentStrategyId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDeploymentStrategyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDeploymentStrategyCommandInput - {@link DeleteDeploymentStrategyCommandInput}
 * @returns {@link DeleteDeploymentStrategyCommandOutput}
 * @see {@link DeleteDeploymentStrategyCommandInput} for command's `input` shape.
 * @see {@link DeleteDeploymentStrategyCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 *
 * @example To delete a deployment strategy
 * ```javascript
 * // The following delete-deployment-strategy example deletes the specified deployment strategy.
 * const input = {
 *   DeploymentStrategyId: "1225qzk"
 * };
 * const command = new DeleteDeploymentStrategyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteDeploymentStrategyCommand extends $Command
  .classBuilder<
    DeleteDeploymentStrategyCommandInput,
    DeleteDeploymentStrategyCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAppConfig", "DeleteDeploymentStrategy", {})
  .n("AppConfigClient", "DeleteDeploymentStrategyCommand")
  .sc(DeleteDeploymentStrategy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDeploymentStrategyRequest;
      output: {};
    };
    sdk: {
      input: DeleteDeploymentStrategyCommandInput;
      output: DeleteDeploymentStrategyCommandOutput;
    };
  };
}
