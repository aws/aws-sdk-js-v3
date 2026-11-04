// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TestTypeInput, TestTypeOutput } from "../models/models_0";
import { TestType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Tests a registered extension to make sure it meets all necessary requirements for being published in the CloudFormation registry.
 *
 * - For resource types, this includes passing all contracts tests defined for the type.
 * - For modules, this includes determining if the module's model meets all necessary requirements.
 *
 * For more information, see [Testing your public extension before publishing](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-testing) in the *CloudFormation Command Line Interface (CLI) User Guide*.
 *
 * If you don't specify a version, CloudFormation uses the default version of the extension in your account and Region for testing.
 *
 * To perform testing, CloudFormation assumes the execution role specified when the type was registered. For more information, see [RegisterType](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html).
 *
 * Once you've initiated testing on an extension using `TestType`, you can pass the returned `TypeVersionArn` into [DescribeType](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html) to monitor the current test status and test status description for the extension.
 *
 * An extension must have a test status of `PASSED` before it can be published. For more information, see [Publishing extensions to make them available for public use](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-publish.html) in the *CloudFormation Command Line Interface (CLI) User Guide*.
 *
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
 *
 * An error occurred during a CloudFormation registry operation.
 *
 * @throws {@link TypeNotFoundException} (client fault)
 *
 * The specified extension doesn't exist in the CloudFormation registry.
 *
 * @throws {@link CloudFormationServiceException}
 *
 * Base exception class for all service exceptions from CloudFormation service.
 *
 * @public
 */
export class TestTypeCommand extends command<TestTypeCommandInput, TestTypeCommandOutput>(
  _ep0,
  _mw0,
  "TestType",
  TestType$
) {
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
