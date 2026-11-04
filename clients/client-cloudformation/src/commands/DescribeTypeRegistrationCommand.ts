// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTypeRegistrationInput, DescribeTypeRegistrationOutput } from "../models/models_0";
import { DescribeTypeRegistration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns information about an extension's registration, including its current status and type and version identifiers.
 *
 * When you initiate a registration request using RegisterType, you can then use DescribeTypeRegistration to monitor the progress of that registration request.
 *
 * Once the registration request has completed, use DescribeType to return detailed information about an extension.
 *
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
 *
 * An error occurred during a CloudFormation registry operation.
 *
 * @throws {@link CloudFormationServiceException}
 *
 * Base exception class for all service exceptions from CloudFormation service.
 *
 * @public
 */
export class DescribeTypeRegistrationCommand extends command<DescribeTypeRegistrationCommandInput, DescribeTypeRegistrationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTypeRegistration",
  DescribeTypeRegistration$
) {
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
