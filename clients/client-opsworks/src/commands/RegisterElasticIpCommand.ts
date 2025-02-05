// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterElasticIpRequest, RegisterElasticIpResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_RegisterElasticIpCommand, se_RegisterElasticIpCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterElasticIpCommand}.
 */
export interface RegisterElasticIpCommandInput extends RegisterElasticIpRequest {}
/**
 * @public
 *
 * The output of {@link RegisterElasticIpCommand}.
 */
export interface RegisterElasticIpCommandOutput extends RegisterElasticIpResult, __MetadataBearer {}

/**
 * <p>Registers an Elastic IP address with a specified stack. An address can be registered with
 *       only one stack at a time. If the address is already registered, you must first deregister it
 *       by calling <a>DeregisterElasticIp</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, RegisterElasticIpCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, RegisterElasticIpCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OpsWorksClient(config);
 * const input = { // RegisterElasticIpRequest
 *   ElasticIp: "STRING_VALUE", // required
 *   StackId: "STRING_VALUE", // required
 * };
 * const command = new RegisterElasticIpCommand(input);
 * const response = await client.send(command);
 * // { // RegisterElasticIpResult
 * //   ElasticIp: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterElasticIpCommandInput - {@link RegisterElasticIpCommandInput}
 * @returns {@link RegisterElasticIpCommandOutput}
 * @see {@link RegisterElasticIpCommandInput} for command's `input` shape.
 * @see {@link RegisterElasticIpCommandOutput} for command's `response` shape.
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
export class RegisterElasticIpCommand extends $Command
  .classBuilder<
    RegisterElasticIpCommandInput,
    RegisterElasticIpCommandOutput,
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
  .s("OpsWorks_20130218", "RegisterElasticIp", {})
  .n("OpsWorksClient", "RegisterElasticIpCommand")
  .f(void 0, void 0)
  .ser(se_RegisterElasticIpCommand)
  .de(de_RegisterElasticIpCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterElasticIpRequest;
      output: RegisterElasticIpResult;
    };
    sdk: {
      input: RegisterElasticIpCommandInput;
      output: RegisterElasticIpCommandOutput;
    };
  };
}
