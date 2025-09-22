// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SkipWaitTimeForInstanceTerminationInput } from "../models/models_0";
import { SkipWaitTimeForInstanceTermination } from "../schemas/schemas_4_Deployment";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SkipWaitTimeForInstanceTerminationCommand}.
 */
export interface SkipWaitTimeForInstanceTerminationCommandInput extends SkipWaitTimeForInstanceTerminationInput {}
/**
 * @public
 *
 * The output of {@link SkipWaitTimeForInstanceTerminationCommand}.
 */
export interface SkipWaitTimeForInstanceTerminationCommandOutput extends __MetadataBearer {}

/**
 * <p>In a blue/green deployment, overrides any specified wait time and starts terminating
 *             instances immediately after the traffic routing is complete.</p>
 *
 * @deprecated This operation is deprecated, use ContinueDeployment with DeploymentWaitType instead.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, SkipWaitTimeForInstanceTerminationCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, SkipWaitTimeForInstanceTerminationCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // SkipWaitTimeForInstanceTerminationInput
 *   deploymentId: "STRING_VALUE",
 * };
 * const command = new SkipWaitTimeForInstanceTerminationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SkipWaitTimeForInstanceTerminationCommandInput - {@link SkipWaitTimeForInstanceTerminationCommandInput}
 * @returns {@link SkipWaitTimeForInstanceTerminationCommandOutput}
 * @see {@link SkipWaitTimeForInstanceTerminationCommandInput} for command's `input` shape.
 * @see {@link SkipWaitTimeForInstanceTerminationCommandOutput} for command's `response` shape.
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
 * @throws {@link DeploymentNotStartedException} (client fault)
 *  <p>The specified deployment has not started.</p>
 *
 * @throws {@link InvalidDeploymentIdException} (client fault)
 *  <p>At least one of the deployment IDs was specified in an invalid format.</p>
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
export class SkipWaitTimeForInstanceTerminationCommand extends $Command
  .classBuilder<
    SkipWaitTimeForInstanceTerminationCommandInput,
    SkipWaitTimeForInstanceTerminationCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeDeploy_20141006", "SkipWaitTimeForInstanceTermination", {})
  .n("CodeDeployClient", "SkipWaitTimeForInstanceTerminationCommand")
  .sc(SkipWaitTimeForInstanceTermination)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SkipWaitTimeForInstanceTerminationInput;
      output: {};
    };
    sdk: {
      input: SkipWaitTimeForInstanceTerminationCommandInput;
      output: SkipWaitTimeForInstanceTerminationCommandOutput;
    };
  };
}
