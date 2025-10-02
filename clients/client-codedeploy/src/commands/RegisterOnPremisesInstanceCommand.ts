// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterOnPremisesInstanceInput } from "../models/models_0";
import { de_RegisterOnPremisesInstanceCommand, se_RegisterOnPremisesInstanceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterOnPremisesInstanceCommand}.
 */
export interface RegisterOnPremisesInstanceCommandInput extends RegisterOnPremisesInstanceInput {}
/**
 * @public
 *
 * The output of {@link RegisterOnPremisesInstanceCommand}.
 */
export interface RegisterOnPremisesInstanceCommandOutput extends __MetadataBearer {}

/**
 * <p>Registers an on-premises instance.</p>
 *          <note>
 *             <p>Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request. You cannot use both.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, RegisterOnPremisesInstanceCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, RegisterOnPremisesInstanceCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // RegisterOnPremisesInstanceInput
 *   instanceName: "STRING_VALUE", // required
 *   iamSessionArn: "STRING_VALUE",
 *   iamUserArn: "STRING_VALUE",
 * };
 * const command = new RegisterOnPremisesInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RegisterOnPremisesInstanceCommandInput - {@link RegisterOnPremisesInstanceCommandInput}
 * @returns {@link RegisterOnPremisesInstanceCommandOutput}
 * @see {@link RegisterOnPremisesInstanceCommandInput} for command's `input` shape.
 * @see {@link RegisterOnPremisesInstanceCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link IamArnRequiredException} (client fault)
 *  <p>No IAM ARN was included in the request. You must use an IAM session ARN or user ARN in the request.</p>
 *
 * @throws {@link IamSessionArnAlreadyRegisteredException} (client fault)
 *  <p>The request included an IAM session ARN that has already been used to
 *             register a different instance.</p>
 *
 * @throws {@link IamUserArnAlreadyRegisteredException} (client fault)
 *  <p>The specified user ARN is already registered with an on-premises instance.</p>
 *
 * @throws {@link IamUserArnRequiredException} (client fault)
 *  <p>An user ARN was not specified.</p>
 *
 * @throws {@link InstanceNameAlreadyRegisteredException} (client fault)
 *  <p>The specified on-premises instance name is already registered.</p>
 *
 * @throws {@link InstanceNameRequiredException} (client fault)
 *  <p>An on-premises instance name was not specified.</p>
 *
 * @throws {@link InvalidIamSessionArnException} (client fault)
 *  <p>The IAM session ARN was specified in an invalid format.</p>
 *
 * @throws {@link InvalidIamUserArnException} (client fault)
 *  <p>The user ARN was specified in an invalid format.</p>
 *
 * @throws {@link InvalidInstanceNameException} (client fault)
 *  <p>The on-premises instance name was specified in an invalid format.</p>
 *
 * @throws {@link MultipleIamArnsProvidedException} (client fault)
 *  <p>Both an user ARN and an IAM session ARN were included in the request.
 *             Use only one ARN type.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 *
 * @public
 */
export class RegisterOnPremisesInstanceCommand extends $Command
  .classBuilder<
    RegisterOnPremisesInstanceCommandInput,
    RegisterOnPremisesInstanceCommandOutput,
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
  .s("CodeDeploy_20141006", "RegisterOnPremisesInstance", {})
  .n("CodeDeployClient", "RegisterOnPremisesInstanceCommand")
  .f(void 0, void 0)
  .ser(se_RegisterOnPremisesInstanceCommand)
  .de(de_RegisterOnPremisesInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterOnPremisesInstanceInput;
      output: {};
    };
    sdk: {
      input: RegisterOnPremisesInstanceCommandInput;
      output: RegisterOnPremisesInstanceCommandOutput;
    };
  };
}
