// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ContinueDeploymentInput } from "../models/models_0";
import { de_ContinueDeploymentCommand, se_ContinueDeploymentCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ContinueDeploymentCommand}.
 */
export interface ContinueDeploymentCommandInput extends ContinueDeploymentInput {}
/**
 * @public
 *
 * The output of {@link ContinueDeploymentCommand}.
 */
export interface ContinueDeploymentCommandOutput extends __MetadataBearer {}

/**
 * <p>For a blue/green deployment, starts the process of rerouting traffic from instances in
 *             the original environment to instances in the replacement environment without waiting for
 *             a specified wait time to elapse. (Traffic rerouting, which is achieved by registering
 *             instances in the replacement environment with the load balancer, can start as soon as
 *             all instances have a status of Ready.) </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ContinueDeploymentCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ContinueDeploymentCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // ContinueDeploymentInput
 *   deploymentId: "STRING_VALUE",
 *   deploymentWaitType: "READY_WAIT" || "TERMINATION_WAIT",
 * };
 * const command = new ContinueDeploymentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ContinueDeploymentCommandInput - {@link ContinueDeploymentCommandInput}
 * @returns {@link ContinueDeploymentCommandOutput}
 * @see {@link ContinueDeploymentCommandInput} for command's `input` shape.
 * @see {@link ContinueDeploymentCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link DeploymentAlreadyCompletedException} (client fault)
 *  <p>The deployment is already complete.</p>
 *
 * @throws {@link DeploymentDoesNotExistException} (client fault)
 *  <p>The deployment with the user or Amazon Web Services account does not exist.</p>
 *
 * @throws {@link DeploymentIdRequiredException} (client fault)
 *  <p>At least one deployment ID must be specified.</p>
 *
 * @throws {@link DeploymentIsNotInReadyStateException} (client fault)
 *  <p>The deployment does not have a status of Ready and can't continue yet.</p>
 *
 * @throws {@link InvalidDeploymentIdException} (client fault)
 *  <p>At least one of the deployment IDs was specified in an invalid format.</p>
 *
 * @throws {@link InvalidDeploymentStatusException} (client fault)
 *  <p>The specified deployment status doesn't exist or cannot be determined.</p>
 *
 * @throws {@link InvalidDeploymentWaitTypeException} (client fault)
 *  <p> The wait type is invalid. </p>
 *
 * @throws {@link UnsupportedActionForDeploymentTypeException} (client fault)
 *  <p>A call was submitted that is not supported for the specified deployment type.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 *
 * @public
 */
export class ContinueDeploymentCommand extends $Command
  .classBuilder<
    ContinueDeploymentCommandInput,
    ContinueDeploymentCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeDeploy_20141006", "ContinueDeployment", {})
  .n("CodeDeployClient", "ContinueDeploymentCommand")
  .f(void 0, void 0)
  .ser(se_ContinueDeploymentCommand)
  .de(de_ContinueDeploymentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ContinueDeploymentInput;
      output: {};
    };
    sdk: {
      input: ContinueDeploymentCommandInput;
      output: ContinueDeploymentCommandOutput;
    };
  };
}
