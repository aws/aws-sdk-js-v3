// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDeploymentConfigInput } from "../models/models_0";
import { DeleteDeploymentConfig } from "../schemas/schemas_1_Deployment";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a deployment configuration.</p>
 *          <note>
 *             <p>A deployment configuration cannot be deleted if it is currently in use. Predefined
 *                 configurations cannot be deleted.</p>
 *          </note>
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
 *  <p>The deployment configuration is still in use.</p>
 *
 * @throws {@link DeploymentConfigNameRequiredException} (client fault)
 *  <p>The deployment configuration name was not specified.</p>
 *
 * @throws {@link InvalidDeploymentConfigNameException} (client fault)
 *  <p>The deployment configuration name was specified in an invalid format.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>An invalid operation was detected.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 *
 * @public
 */
export class DeleteDeploymentConfigCommand extends $Command
  .classBuilder<
    DeleteDeploymentConfigCommandInput,
    DeleteDeploymentConfigCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeDeploy_20141006", "DeleteDeploymentConfig", {})
  .n("CodeDeployClient", "DeleteDeploymentConfigCommand")
  .sc(DeleteDeploymentConfig)
  .build() {
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
