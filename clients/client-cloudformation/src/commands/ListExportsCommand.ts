// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListExportsInput, ListExportsOutput } from "../models/models_0";
import { de_ListExportsCommand, se_ListExportsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListExportsCommand}.
 */
export interface ListExportsCommandInput extends ListExportsInput {}
/**
 * @public
 *
 * The output of {@link ListExportsCommand}.
 */
export interface ListExportsCommandOutput extends ListExportsOutput, __MetadataBearer {}

/**
 * <p>Lists all exported output values in the account and Region in which you call this action.
 *       Use this action to see the exported output values that you can import into other stacks. To
 *       import values, use the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/intrinsic-function-reference-importvalue.html"> Fn::ImportValue</a> function.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-exports.html">Get exported outputs
 *         from a deployed CloudFormation stack</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListExportsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListExportsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // ListExportsInput
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListExportsCommand(input);
 * const response = await client.send(command);
 * // { // ListExportsOutput
 * //   Exports: [ // Exports
 * //     { // Export
 * //       ExportingStackId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExportsCommandInput - {@link ListExportsCommandInput}
 * @returns {@link ListExportsCommandOutput}
 * @see {@link ListExportsCommandInput} for command's `input` shape.
 * @see {@link ListExportsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class ListExportsCommand extends $Command
  .classBuilder<
    ListExportsCommandInput,
    ListExportsCommandOutput,
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
  .s("CloudFormation", "ListExports", {})
  .n("CloudFormationClient", "ListExportsCommand")
  .f(void 0, void 0)
  .ser(se_ListExportsCommand)
  .de(de_ListExportsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExportsInput;
      output: ListExportsOutput;
    };
    sdk: {
      input: ListExportsCommandInput;
      output: ListExportsCommandOutput;
    };
  };
}
