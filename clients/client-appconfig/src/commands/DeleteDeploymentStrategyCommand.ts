// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDeploymentStrategyRequest } from "../models/models_0";
import { de_DeleteDeploymentStrategyCommand, se_DeleteDeploymentStrategyCommand } from "../protocols/Aws_restJson1";

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
 * <p>Deletes a deployment strategy. Deleting a deployment strategy does not delete a
 *          configuration from a host.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, DeleteDeploymentStrategyCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, DeleteDeploymentStrategyCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
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
 * @public
 * @example To delete a deployment strategy
 * ```javascript
 * // The following delete-deployment-strategy example deletes the specified deployment strategy.
 * const input = {
 *   "DeploymentStrategyId": "1225qzk"
 * };
 * const command = new DeleteDeploymentStrategyCommand(input);
 * await client.send(command);
 * // example id: to-delete-a-deployment-strategy-1632265473708
 * ```
 *
 */
export class DeleteDeploymentStrategyCommand extends $Command
  .classBuilder<
    DeleteDeploymentStrategyCommandInput,
    DeleteDeploymentStrategyCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAppConfig", "DeleteDeploymentStrategy", {})
  .n("AppConfigClient", "DeleteDeploymentStrategyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDeploymentStrategyCommand)
  .de(de_DeleteDeploymentStrategyCommand)
  .build() {}
