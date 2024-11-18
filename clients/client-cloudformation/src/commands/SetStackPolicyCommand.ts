// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SetStackPolicyInput } from "../models/models_1";
import { de_SetStackPolicyCommand, se_SetStackPolicyCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetStackPolicyCommand}.
 */
export interface SetStackPolicyCommandInput extends SetStackPolicyInput {}
/**
 * @public
 *
 * The output of {@link SetStackPolicyCommand}.
 */
export interface SetStackPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets a stack policy for a specified stack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, SetStackPolicyCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, SetStackPolicyCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // SetStackPolicyInput
 *   StackName: "STRING_VALUE", // required
 *   StackPolicyBody: "STRING_VALUE",
 *   StackPolicyURL: "STRING_VALUE",
 * };
 * const command = new SetStackPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetStackPolicyCommandInput - {@link SetStackPolicyCommandInput}
 * @returns {@link SetStackPolicyCommandOutput}
 * @see {@link SetStackPolicyCommandInput} for command's `input` shape.
 * @see {@link SetStackPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 * @public
 */
export class SetStackPolicyCommand extends $Command
  .classBuilder<
    SetStackPolicyCommandInput,
    SetStackPolicyCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "SetStackPolicy", {})
  .n("CloudFormationClient", "SetStackPolicyCommand")
  .f(void 0, void 0)
  .ser(se_SetStackPolicyCommand)
  .de(de_SetStackPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetStackPolicyInput;
      output: {};
    };
    sdk: {
      input: SetStackPolicyCommandInput;
      output: SetStackPolicyCommandOutput;
    };
  };
}
