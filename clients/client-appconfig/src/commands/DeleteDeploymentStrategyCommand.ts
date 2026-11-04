// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDeploymentStrategyRequest } from "../models/models_0";
import { DeleteDeploymentStrategy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a deployment strategy.
 *
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
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There was an internal failure in the AppConfig service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource could not be found.
 *
 * @throws {@link AppConfigServiceException}
 *
 * Base exception class for all service exceptions from AppConfig service.
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
export class DeleteDeploymentStrategyCommand extends command<DeleteDeploymentStrategyCommandInput, DeleteDeploymentStrategyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDeploymentStrategy",
  DeleteDeploymentStrategy$
) {
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
