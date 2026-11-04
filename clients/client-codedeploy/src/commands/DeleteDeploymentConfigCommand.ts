// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDeploymentConfigInput } from "../models/models_0";
import { DeleteDeploymentConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDeploymentConfigCommand}.
 */
export interface DeleteDeploymentConfigCommandInput extends DeleteDeploymentConfigInput {}
/**
 * @public
 *
 * The output of {@link DeleteDeploymentConfigCommand}.
 */
export interface DeleteDeploymentConfigCommandOutput extends __MetadataBearer {}

/**
 * Deletes a deployment configuration.
 *
 * > **Note:** A deployment configuration cannot be deleted if it is currently in use. Predefined configurations cannot be deleted.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, DeleteDeploymentConfigCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, DeleteDeploymentConfigCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // DeleteDeploymentConfigInput
 *   deploymentConfigName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDeploymentConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDeploymentConfigCommandInput - {@link DeleteDeploymentConfigCommandInput}
 * @returns {@link DeleteDeploymentConfigCommandOutput}
 * @see {@link DeleteDeploymentConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteDeploymentConfigCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link DeploymentConfigInUseException} (client fault)
 *
 * The deployment configuration is still in use.
 *
 * @throws {@link DeploymentConfigNameRequiredException} (client fault)
 *
 * The deployment configuration name was not specified.
 *
 * @throws {@link InvalidDeploymentConfigNameException} (client fault)
 *
 * The deployment configuration name was specified in an invalid format.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *
 * An invalid operation was detected.
 *
 * @throws {@link CodeDeployServiceException}
 *
 * Base exception class for all service exceptions from CodeDeploy service.
 *
 * @public
 */
export class DeleteDeploymentConfigCommand extends command<DeleteDeploymentConfigCommandInput, DeleteDeploymentConfigCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDeploymentConfig",
  DeleteDeploymentConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDeploymentConfigInput;
      output: {};
    };
    sdk: {
      input: DeleteDeploymentConfigCommandInput;
      output: DeleteDeploymentConfigCommandOutput;
    };
  };
}
