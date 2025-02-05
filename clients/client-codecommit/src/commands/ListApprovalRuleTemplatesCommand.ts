// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListApprovalRuleTemplatesInput, ListApprovalRuleTemplatesOutput } from "../models/models_0";
import { de_ListApprovalRuleTemplatesCommand, se_ListApprovalRuleTemplatesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListApprovalRuleTemplatesCommand}.
 */
export interface ListApprovalRuleTemplatesCommandInput extends ListApprovalRuleTemplatesInput {}
/**
 * @public
 *
 * The output of {@link ListApprovalRuleTemplatesCommand}.
 */
export interface ListApprovalRuleTemplatesCommandOutput extends ListApprovalRuleTemplatesOutput, __MetadataBearer {}

/**
 * <p>Lists all approval rule templates in the specified Amazon Web Services Region in your Amazon Web Services account. If
 *             an Amazon Web Services Region is not specified, the Amazon Web Services Region where you are signed in is used.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, ListApprovalRuleTemplatesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, ListApprovalRuleTemplatesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CodeCommitClient(config);
 * const input = { // ListApprovalRuleTemplatesInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListApprovalRuleTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListApprovalRuleTemplatesOutput
 * //   approvalRuleTemplateNames: [ // ApprovalRuleTemplateNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApprovalRuleTemplatesCommandInput - {@link ListApprovalRuleTemplatesCommandInput}
 * @returns {@link ListApprovalRuleTemplatesCommandOutput}
 * @see {@link ListApprovalRuleTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListApprovalRuleTemplatesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link InvalidContinuationTokenException} (client fault)
 *  <p>The specified continuation token is not valid.</p>
 *
 * @throws {@link InvalidMaxResultsException} (client fault)
 *  <p>The specified number of maximum results is not valid.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 * @public
 */
export class ListApprovalRuleTemplatesCommand extends $Command
  .classBuilder<
    ListApprovalRuleTemplatesCommandInput,
    ListApprovalRuleTemplatesCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeCommit_20150413", "ListApprovalRuleTemplates", {})
  .n("CodeCommitClient", "ListApprovalRuleTemplatesCommand")
  .f(void 0, void 0)
  .ser(se_ListApprovalRuleTemplatesCommand)
  .de(de_ListApprovalRuleTemplatesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApprovalRuleTemplatesInput;
      output: ListApprovalRuleTemplatesOutput;
    };
    sdk: {
      input: ListApprovalRuleTemplatesCommandInput;
      output: ListApprovalRuleTemplatesCommandOutput;
    };
  };
}
