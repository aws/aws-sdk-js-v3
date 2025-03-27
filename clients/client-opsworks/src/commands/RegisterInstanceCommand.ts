// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterInstanceRequest, RegisterInstanceResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_RegisterInstanceCommand, se_RegisterInstanceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterInstanceCommand}.
 */
export interface RegisterInstanceCommandInput extends RegisterInstanceRequest {}
/**
 * @public
 *
 * The output of {@link RegisterInstanceCommand}.
 */
export interface RegisterInstanceCommandOutput extends RegisterInstanceResult, __MetadataBearer {}

/**
 * <p>Registers instances that were created outside of OpsWorks Stacks with a specified stack.</p>
 *          <note>
 *             <p>We do not recommend using this action to register instances. The complete registration
 *           operation includes two tasks: installing the OpsWorks Stacks agent on the instance, and registering
 *       the instance with the stack. <code>RegisterInstance</code> handles only the second step. You
 *           should instead use the CLI <code>register</code> command, which performs the entire
 *       registration operation. For more information,
 *       see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register.html">
 *           Registering an Instance with an OpsWorks Stacks Stack</a>.</p>
 *          </note>
 *          <p>Registered instances have the same requirements as instances that are created by using the <a>CreateInstance</a>
 *           API.
 *       For example, registered instances must be running a supported Linux-based operating system, and they must have a supported instance
 *       type. For more information about requirements for instances that you want to register, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register-registering-preparer.html">
 *           Preparing the Instance</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, RegisterInstanceCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, RegisterInstanceCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // RegisterInstanceRequest
 *   StackId: "STRING_VALUE", // required
 *   Hostname: "STRING_VALUE",
 *   PublicIp: "STRING_VALUE",
 *   PrivateIp: "STRING_VALUE",
 *   RsaPublicKey: "STRING_VALUE",
 *   RsaPublicKeyFingerprint: "STRING_VALUE",
 *   InstanceIdentity: { // InstanceIdentity
 *     Document: "STRING_VALUE",
 *     Signature: "STRING_VALUE",
 *   },
 * };
 * const command = new RegisterInstanceCommand(input);
 * const response = await client.send(command);
 * // { // RegisterInstanceResult
 * //   InstanceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterInstanceCommandInput - {@link RegisterInstanceCommandInput}
 * @returns {@link RegisterInstanceCommandOutput}
 * @see {@link RegisterInstanceCommandInput} for command's `input` shape.
 * @see {@link RegisterInstanceCommandOutput} for command's `response` shape.
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
export class RegisterInstanceCommand extends $Command
  .classBuilder<
    RegisterInstanceCommandInput,
    RegisterInstanceCommandOutput,
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
  .s("OpsWorks_20130218", "RegisterInstance", {})
  .n("OpsWorksClient", "RegisterInstanceCommand")
  .f(void 0, void 0)
  .ser(se_RegisterInstanceCommand)
  .de(de_RegisterInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterInstanceRequest;
      output: RegisterInstanceResult;
    };
    sdk: {
      input: RegisterInstanceCommandInput;
      output: RegisterInstanceCommandOutput;
    };
  };
}
