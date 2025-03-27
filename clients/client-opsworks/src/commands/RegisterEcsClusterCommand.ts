// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterEcsClusterRequest, RegisterEcsClusterResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_RegisterEcsClusterCommand, se_RegisterEcsClusterCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterEcsClusterCommand}.
 */
export interface RegisterEcsClusterCommandInput extends RegisterEcsClusterRequest {}
/**
 * @public
 *
 * The output of {@link RegisterEcsClusterCommand}.
 */
export interface RegisterEcsClusterCommandOutput extends RegisterEcsClusterResult, __MetadataBearer {}

/**
 * <p>Registers a specified Amazon ECS cluster with a stack. You can register only one
 *       cluster with a stack. A cluster can be registered with only one stack.
 *       For more information, see
 *       <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html">
 *       Resource Management</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see
 *       <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">
 *       Managing User Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, RegisterEcsClusterCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, RegisterEcsClusterCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // RegisterEcsClusterRequest
 *   EcsClusterArn: "STRING_VALUE", // required
 *   StackId: "STRING_VALUE", // required
 * };
 * const command = new RegisterEcsClusterCommand(input);
 * const response = await client.send(command);
 * // { // RegisterEcsClusterResult
 * //   EcsClusterArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterEcsClusterCommandInput - {@link RegisterEcsClusterCommandInput}
 * @returns {@link RegisterEcsClusterCommandOutput}
 * @see {@link RegisterEcsClusterCommandInput} for command's `input` shape.
 * @see {@link RegisterEcsClusterCommandOutput} for command's `response` shape.
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
export class RegisterEcsClusterCommand extends $Command
  .classBuilder<
    RegisterEcsClusterCommandInput,
    RegisterEcsClusterCommandOutput,
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
  .s("OpsWorks_20130218", "RegisterEcsCluster", {})
  .n("OpsWorksClient", "RegisterEcsClusterCommand")
  .f(void 0, void 0)
  .ser(se_RegisterEcsClusterCommand)
  .de(de_RegisterEcsClusterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterEcsClusterRequest;
      output: RegisterEcsClusterResult;
    };
    sdk: {
      input: RegisterEcsClusterCommandInput;
      output: RegisterEcsClusterCommandOutput;
    };
  };
}
