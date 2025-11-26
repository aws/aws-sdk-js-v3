// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { TestTypeInput, TestTypeOutput } from "../models/models_0";
import { TestType } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestTypeCommand}.
 */
export interface TestTypeCommandInput extends TestTypeInput {}
/**
 * @public
 *
 * The output of {@link TestTypeCommand}.
 */
export interface TestTypeCommandOutput extends TestTypeOutput, __MetadataBearer {}

/**
 * <p>Tests a registered extension to make sure it meets all necessary requirements for being
 *       published in the CloudFormation registry.</p>
 *          <ul>
 *             <li>
 *                <p>For resource types, this includes passing all contracts tests defined for the
 *           type.</p>
 *             </li>
 *             <li>
 *                <p>For modules, this includes determining if the module's model meets all necessary
 *           requirements.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-testing">Testing your public extension before publishing</a> in the
 *         <i>CloudFormation Command Line Interface (CLI) User Guide</i>.</p>
 *          <p>If you don't specify a version, CloudFormation uses the default version of the extension in
 *       your account and Region for testing.</p>
 *          <p>To perform testing, CloudFormation assumes the execution role specified when the type was
 *       registered. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p>
 *          <p>Once you've initiated testing on an extension using <code>TestType</code>, you can pass
 *       the returned <code>TypeVersionArn</code> into <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a> to
 *       monitor the current test status and test status description for the extension.</p>
 *          <p>An extension must have a test status of <code>PASSED</code> before it can be published.
 *       For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-publish.html">Publishing extensions
 *         to make them available for public use</a> in the
 *       <i>CloudFormation Command Line Interface (CLI) User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, TestTypeCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, TestTypeCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // TestTypeInput
 *   Arn: "STRING_VALUE",
 *   Type: "RESOURCE" || "MODULE" || "HOOK",
 *   TypeName: "STRING_VALUE",
 *   VersionId: "STRING_VALUE",
 *   LogDeliveryBucket: "STRING_VALUE",
 * };
 * const command = new TestTypeCommand(input);
 * const response = await client.send(command);
 * // { // TestTypeOutput
 * //   TypeVersionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param TestTypeCommandInput - {@link TestTypeCommandInput}
 * @returns {@link TestTypeCommandOutput}
 * @see {@link TestTypeCommandInput} for command's `input` shape.
 * @see {@link TestTypeCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CFNRegistryException} (client fault)
 *  <p>An error occurred during a CloudFormation registry operation.</p>
 *
 * @throws {@link TypeNotFoundException} (client fault)
 *  <p>The specified extension doesn't exist in the CloudFormation registry.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class TestTypeCommand extends $Command
  .classBuilder<
    TestTypeCommandInput,
    TestTypeCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "TestType", {})
  .n("CloudFormationClient", "TestTypeCommand")
  .sc(TestType)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestTypeInput;
      output: TestTypeOutput;
    };
    sdk: {
      input: TestTypeCommandInput;
      output: TestTypeCommandOutput;
    };
  };
}
