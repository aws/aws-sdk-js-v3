// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDeploymentsRequest, DescribeDeploymentsResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DescribeDeploymentsCommand, se_DescribeDeploymentsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDeploymentsCommand}.
 */
export interface DescribeDeploymentsCommandInput extends DescribeDeploymentsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDeploymentsCommand}.
 */
export interface DescribeDeploymentsCommandOutput extends DescribeDeploymentsResult, __MetadataBearer {}

/**
 * <p>Requests a description of a specified set of deployments.</p>
 *          <note>
 *             <p>This call accepts only one resource-identifying parameter.</p>
 *          </note>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeDeploymentsCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeDeploymentsCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // DescribeDeploymentsRequest
 *   StackId: "STRING_VALUE",
 *   AppId: "STRING_VALUE",
 *   DeploymentIds: [ // Strings
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeDeploymentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDeploymentsResult
 * //   Deployments: [ // Deployments
 * //     { // Deployment
 * //       DeploymentId: "STRING_VALUE",
 * //       StackId: "STRING_VALUE",
 * //       AppId: "STRING_VALUE",
 * //       CreatedAt: "STRING_VALUE",
 * //       CompletedAt: "STRING_VALUE",
 * //       Duration: Number("int"),
 * //       IamUserArn: "STRING_VALUE",
 * //       Comment: "STRING_VALUE",
 * //       Command: { // DeploymentCommand
 * //         Name: "install_dependencies" || "update_dependencies" || "update_custom_cookbooks" || "execute_recipes" || "configure" || "setup" || "deploy" || "rollback" || "start" || "stop" || "restart" || "undeploy", // required
 * //         Args: { // DeploymentCommandArgs
 * //           "<keys>": [ // Strings
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       Status: "STRING_VALUE",
 * //       CustomJson: "STRING_VALUE",
 * //       InstanceIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDeploymentsCommandInput - {@link DescribeDeploymentsCommandInput}
 * @returns {@link DescribeDeploymentsCommandOutput}
 * @see {@link DescribeDeploymentsCommandInput} for command's `input` shape.
 * @see {@link DescribeDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that a request was not valid.</p>
 *
 * @throws {@link OpsWorksServiceException}
 * <p>Base exception class for all service exceptions from OpsWorks service.</p>
 *
 *
 * @public
 */
export class DescribeDeploymentsCommand extends $Command
  .classBuilder<
    DescribeDeploymentsCommandInput,
    DescribeDeploymentsCommandOutput,
    OpsWorksClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpsWorksClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OpsWorks_20130218", "DescribeDeployments", {})
  .n("OpsWorksClient", "DescribeDeploymentsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDeploymentsCommand)
  .de(de_DescribeDeploymentsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDeploymentsRequest;
      output: DescribeDeploymentsResult;
    };
    sdk: {
      input: DescribeDeploymentsCommandInput;
      output: DescribeDeploymentsCommandOutput;
    };
  };
}
