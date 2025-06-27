// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeStackRefactorInput, DescribeStackRefactorOutput } from "../models/models_0";
import { de_DescribeStackRefactorCommand, se_DescribeStackRefactorCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStackRefactorCommand}.
 */
export interface DescribeStackRefactorCommandInput extends DescribeStackRefactorInput {}
/**
 * @public
 *
 * The output of {@link DescribeStackRefactorCommand}.
 */
export interface DescribeStackRefactorCommandOutput extends DescribeStackRefactorOutput, __MetadataBearer {}

/**
 * <p>Describes the stack refactor status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackRefactorCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackRefactorCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeStackRefactorInput
 *   StackRefactorId: "STRING_VALUE", // required
 * };
 * const command = new DescribeStackRefactorCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStackRefactorOutput
 * //   Description: "STRING_VALUE",
 * //   StackRefactorId: "STRING_VALUE",
 * //   StackIds: [ // StackIds
 * //     "STRING_VALUE",
 * //   ],
 * //   ExecutionStatus: "UNAVAILABLE" || "AVAILABLE" || "OBSOLETE" || "EXECUTE_IN_PROGRESS" || "EXECUTE_COMPLETE" || "EXECUTE_FAILED" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_COMPLETE" || "ROLLBACK_FAILED",
 * //   ExecutionStatusReason: "STRING_VALUE",
 * //   Status: "CREATE_IN_PROGRESS" || "CREATE_COMPLETE" || "CREATE_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_COMPLETE" || "DELETE_FAILED",
 * //   StatusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeStackRefactorCommandInput - {@link DescribeStackRefactorCommandInput}
 * @returns {@link DescribeStackRefactorCommandOutput}
 * @see {@link DescribeStackRefactorCommandInput} for command's `input` shape.
 * @see {@link DescribeStackRefactorCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link StackRefactorNotFoundException} (client fault)
 *  <p>The specified stack refactor can't be found.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class DescribeStackRefactorCommand extends $Command
  .classBuilder<
    DescribeStackRefactorCommandInput,
    DescribeStackRefactorCommandOutput,
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
  .s("CloudFormation", "DescribeStackRefactor", {})
  .n("CloudFormationClient", "DescribeStackRefactorCommand")
  .f(void 0, void 0)
  .ser(se_DescribeStackRefactorCommand)
  .de(de_DescribeStackRefactorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStackRefactorInput;
      output: DescribeStackRefactorOutput;
    };
    sdk: {
      input: DescribeStackRefactorCommandInput;
      output: DescribeStackRefactorCommandOutput;
    };
  };
}
