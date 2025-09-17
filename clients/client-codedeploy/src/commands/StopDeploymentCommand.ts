// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopDeploymentInput, StopDeploymentOutput } from "../models/models_0";
import { de_StopDeploymentCommand, se_StopDeploymentCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopDeploymentCommand}.
 */
export interface StopDeploymentCommandInput extends StopDeploymentInput {}
/**
 * @public
 *
 * The output of {@link StopDeploymentCommand}.
 */
export interface StopDeploymentCommandOutput extends StopDeploymentOutput, __MetadataBearer {}

/**
 * <p>Attempts to stop an ongoing deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, StopDeploymentCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, StopDeploymentCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // StopDeploymentInput
 *   deploymentId: "STRING_VALUE", // required
 *   autoRollbackEnabled: true || false,
 * };
 * const command = new StopDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // StopDeploymentOutput
 * //   status: "Pending" || "Succeeded",
 * //   statusMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StopDeploymentCommandInput - {@link StopDeploymentCommandInput}
 * @returns {@link StopDeploymentCommandOutput}
 * @see {@link StopDeploymentCommandInput} for command's `input` shape.
 * @see {@link StopDeploymentCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link DeploymentAlreadyCompletedException} (client fault)
 *  <p>The deployment is already complete.</p>
 *
 * @throws {@link DeploymentDoesNotExistException} (client fault)
 *  <p>The deployment with the user or Amazon Web Services account does not exist.</p>
 *
 * @throws {@link DeploymentGroupDoesNotExistException} (client fault)
 *  <p>The named deployment group with the user or Amazon Web Services account does not
 *             exist.</p>
 *
 * @throws {@link DeploymentIdRequiredException} (client fault)
 *  <p>At least one deployment ID must be specified.</p>
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
export class StopDeploymentCommand extends $Command
  .classBuilder<
    StopDeploymentCommandInput,
    StopDeploymentCommandOutput,
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
  .s("CodeDeploy_20141006", "StopDeployment", {})
  .n("CodeDeployClient", "StopDeploymentCommand")
  .f(void 0, void 0)
  .ser(se_StopDeploymentCommand)
  .de(de_StopDeploymentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopDeploymentInput;
      output: StopDeploymentOutput;
    };
    sdk: {
      input: StopDeploymentCommandInput;
      output: StopDeploymentCommandOutput;
    };
  };
}
