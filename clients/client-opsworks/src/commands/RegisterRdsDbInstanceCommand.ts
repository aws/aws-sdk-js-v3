// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterRdsDbInstanceRequest } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_RegisterRdsDbInstanceCommand, se_RegisterRdsDbInstanceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterRdsDbInstanceCommand}.
 */
export interface RegisterRdsDbInstanceCommandInput extends RegisterRdsDbInstanceRequest {}
/**
 * @public
 *
 * The output of {@link RegisterRdsDbInstanceCommand}.
 */
export interface RegisterRdsDbInstanceCommandOutput extends __MetadataBearer {}

/**
 * <p>Registers an Amazon RDS instance with a stack.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, RegisterRdsDbInstanceCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, RegisterRdsDbInstanceCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OpsWorksClient(config);
 * const input = { // RegisterRdsDbInstanceRequest
 *   StackId: "STRING_VALUE", // required
 *   RdsDbInstanceArn: "STRING_VALUE", // required
 *   DbUser: "STRING_VALUE", // required
 *   DbPassword: "STRING_VALUE", // required
 * };
 * const command = new RegisterRdsDbInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RegisterRdsDbInstanceCommandInput - {@link RegisterRdsDbInstanceCommandInput}
 * @returns {@link RegisterRdsDbInstanceCommandOutput}
 * @see {@link RegisterRdsDbInstanceCommandInput} for command's `input` shape.
 * @see {@link RegisterRdsDbInstanceCommandOutput} for command's `response` shape.
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
 * @public
 */
export class RegisterRdsDbInstanceCommand extends $Command
  .classBuilder<
    RegisterRdsDbInstanceCommandInput,
    RegisterRdsDbInstanceCommandOutput,
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
  .s("OpsWorks_20130218", "RegisterRdsDbInstance", {})
  .n("OpsWorksClient", "RegisterRdsDbInstanceCommand")
  .f(void 0, void 0)
  .ser(se_RegisterRdsDbInstanceCommand)
  .de(de_RegisterRdsDbInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterRdsDbInstanceRequest;
      output: {};
    };
    sdk: {
      input: RegisterRdsDbInstanceCommandInput;
      output: RegisterRdsDbInstanceCommandOutput;
    };
  };
}
