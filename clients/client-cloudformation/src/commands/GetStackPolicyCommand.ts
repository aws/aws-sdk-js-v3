// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetStackPolicyInput, GetStackPolicyOutput } from "../models/models_0";
import { GetStackPolicy } from "../schemas/schemas_32_Stack";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetStackPolicyCommand}.
 */
export interface GetStackPolicyCommandInput extends GetStackPolicyInput {}
/**
 * @public
 *
 * The output of {@link GetStackPolicyCommand}.
 */
export interface GetStackPolicyCommandOutput extends GetStackPolicyOutput, __MetadataBearer {}

/**
 * <p>Returns the stack policy for a specified stack. If a stack doesn't have a policy, a null
 *       value is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, GetStackPolicyCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, GetStackPolicyCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // GetStackPolicyInput
 *   StackName: "STRING_VALUE", // required
 * };
 * const command = new GetStackPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetStackPolicyOutput
 * //   StackPolicyBody: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetStackPolicyCommandInput - {@link GetStackPolicyCommandInput}
 * @returns {@link GetStackPolicyCommandOutput}
 * @see {@link GetStackPolicyCommandInput} for command's `input` shape.
 * @see {@link GetStackPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class GetStackPolicyCommand extends $Command
  .classBuilder<
    GetStackPolicyCommandInput,
    GetStackPolicyCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "GetStackPolicy", {})
  .n("CloudFormationClient", "GetStackPolicyCommand")
  .sc(GetStackPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStackPolicyInput;
      output: GetStackPolicyOutput;
    };
    sdk: {
      input: GetStackPolicyCommandInput;
      output: GetStackPolicyCommandOutput;
    };
  };
}
