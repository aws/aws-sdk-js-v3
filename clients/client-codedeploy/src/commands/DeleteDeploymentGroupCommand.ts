// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDeploymentGroupInput, DeleteDeploymentGroupOutput } from "../models/models_0";
import { de_DeleteDeploymentGroupCommand, se_DeleteDeploymentGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDeploymentGroupCommand}.
 */
export interface DeleteDeploymentGroupCommandInput extends DeleteDeploymentGroupInput {}
/**
 * @public
 *
 * The output of {@link DeleteDeploymentGroupCommand}.
 */
export interface DeleteDeploymentGroupCommandOutput extends DeleteDeploymentGroupOutput, __MetadataBearer {}

/**
 * <p>Deletes a deployment group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, DeleteDeploymentGroupCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, DeleteDeploymentGroupCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CodeDeployClient(config);
 * const input = { // DeleteDeploymentGroupInput
 *   applicationName: "STRING_VALUE", // required
 *   deploymentGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDeploymentGroupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDeploymentGroupOutput
 * //   hooksNotCleanedUp: [ // AutoScalingGroupList
 * //     { // AutoScalingGroup
 * //       name: "STRING_VALUE",
 * //       hook: "STRING_VALUE",
 * //       terminationHook: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteDeploymentGroupCommandInput - {@link DeleteDeploymentGroupCommandInput}
 * @returns {@link DeleteDeploymentGroupCommandOutput}
 * @see {@link DeleteDeploymentGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDeploymentGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link ApplicationNameRequiredException} (client fault)
 *  <p>The minimum number of required application names was not specified.</p>
 *
 * @throws {@link DeploymentGroupNameRequiredException} (client fault)
 *  <p>The deployment group name was not specified.</p>
 *
 * @throws {@link InvalidApplicationNameException} (client fault)
 *  <p>The application name was specified in an invalid format.</p>
 *
 * @throws {@link InvalidDeploymentGroupNameException} (client fault)
 *  <p>The deployment group name was specified in an invalid format.</p>
 *
 * @throws {@link InvalidRoleException} (client fault)
 *  <p>The service role ARN was specified in an invalid format. Or, if an Auto Scaling
 *             group was specified, the specified service role does not grant the appropriate
 *             permissions to Amazon EC2 Auto Scaling.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 * @public
 */
export class DeleteDeploymentGroupCommand extends $Command
  .classBuilder<
    DeleteDeploymentGroupCommandInput,
    DeleteDeploymentGroupCommandOutput,
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
  .s("CodeDeploy_20141006", "DeleteDeploymentGroup", {})
  .n("CodeDeployClient", "DeleteDeploymentGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDeploymentGroupCommand)
  .de(de_DeleteDeploymentGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDeploymentGroupInput;
      output: DeleteDeploymentGroupOutput;
    };
    sdk: {
      input: DeleteDeploymentGroupCommandInput;
      output: DeleteDeploymentGroupCommandOutput;
    };
  };
}
