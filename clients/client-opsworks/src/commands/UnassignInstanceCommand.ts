// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UnassignInstanceRequest } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_UnassignInstanceCommand, se_UnassignInstanceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UnassignInstanceCommand}.
 */
export interface UnassignInstanceCommandInput extends UnassignInstanceRequest {}
/**
 * @public
 *
 * The output of {@link UnassignInstanceCommand}.
 */
export interface UnassignInstanceCommandOutput extends __MetadataBearer {}

/**
 * <p>Unassigns a registered instance from all layers that are using the instance.
 *           The instance remains in the stack as an unassigned instance, and can be assigned to
 *           another layer as needed. You cannot use this action with instances that were created
 *           with OpsWorks Stacks.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must
 *           have a Manage permissions level for the stack or an attached policy that explicitly
 *           grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, UnassignInstanceCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, UnassignInstanceCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // UnassignInstanceRequest
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new UnassignInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UnassignInstanceCommandInput - {@link UnassignInstanceCommandInput}
 * @returns {@link UnassignInstanceCommandOutput}
 * @see {@link UnassignInstanceCommandInput} for command's `input` shape.
 * @see {@link UnassignInstanceCommandOutput} for command's `response` shape.
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
export class UnassignInstanceCommand extends $Command
  .classBuilder<
    UnassignInstanceCommandInput,
    UnassignInstanceCommandOutput,
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
  .s("OpsWorks_20130218", "UnassignInstance", {})
  .n("OpsWorksClient", "UnassignInstanceCommand")
  .f(void 0, void 0)
  .ser(se_UnassignInstanceCommand)
  .de(de_UnassignInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UnassignInstanceRequest;
      output: {};
    };
    sdk: {
      input: UnassignInstanceCommandInput;
      output: UnassignInstanceCommandOutput;
    };
  };
}
