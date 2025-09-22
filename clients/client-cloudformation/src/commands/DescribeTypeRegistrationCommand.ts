// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTypeRegistrationInput, DescribeTypeRegistrationOutput } from "../models/models_0";
import { DescribeTypeRegistration } from "../schemas/schemas_1_Type";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTypeRegistrationCommand}.
 */
export interface DescribeTypeRegistrationCommandInput extends DescribeTypeRegistrationInput {}
/**
 * @public
 *
 * The output of {@link DescribeTypeRegistrationCommand}.
 */
export interface DescribeTypeRegistrationCommandOutput extends DescribeTypeRegistrationOutput, __MetadataBearer {}

/**
 * <p>Returns information about an extension's registration, including its current status and
 *       type and version identifiers.</p>
 *          <p>When you initiate a registration request using <a>RegisterType</a>, you can
 *       then use <a>DescribeTypeRegistration</a> to monitor the progress of that
 *       registration request.</p>
 *          <p>Once the registration request has completed, use <a>DescribeType</a> to return
 *       detailed information about an extension.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeTypeRegistrationCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeTypeRegistrationCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeTypeRegistrationInput
 *   RegistrationToken: "STRING_VALUE", // required
 * };
 * const command = new DescribeTypeRegistrationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTypeRegistrationOutput
 * //   ProgressStatus: "COMPLETE" || "IN_PROGRESS" || "FAILED",
 * //   Description: "STRING_VALUE",
 * //   TypeArn: "STRING_VALUE",
 * //   TypeVersionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTypeRegistrationCommandInput - {@link DescribeTypeRegistrationCommandInput}
 * @returns {@link DescribeTypeRegistrationCommandOutput}
 * @see {@link DescribeTypeRegistrationCommandInput} for command's `input` shape.
 * @see {@link DescribeTypeRegistrationCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CFNRegistryException} (client fault)
 *  <p>An error occurred during a CloudFormation registry operation.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class DescribeTypeRegistrationCommand extends $Command
  .classBuilder<
    DescribeTypeRegistrationCommandInput,
    DescribeTypeRegistrationCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "DescribeTypeRegistration", {})
  .n("CloudFormationClient", "DescribeTypeRegistrationCommand")
  .sc(DescribeTypeRegistration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTypeRegistrationInput;
      output: DescribeTypeRegistrationOutput;
    };
    sdk: {
      input: DescribeTypeRegistrationCommandInput;
      output: DescribeTypeRegistrationCommandOutput;
    };
  };
}
