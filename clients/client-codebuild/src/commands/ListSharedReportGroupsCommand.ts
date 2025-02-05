// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListSharedReportGroupsInput, ListSharedReportGroupsOutput } from "../models/models_0";
import { de_ListSharedReportGroupsCommand, se_ListSharedReportGroupsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSharedReportGroupsCommand}.
 */
export interface ListSharedReportGroupsCommandInput extends ListSharedReportGroupsInput {}
/**
 * @public
 *
 * The output of {@link ListSharedReportGroupsCommand}.
 */
export interface ListSharedReportGroupsCommandOutput extends ListSharedReportGroupsOutput, __MetadataBearer {}

/**
 * <p> Gets a list of report groups that are shared with other Amazon Web Services accounts or users.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListSharedReportGroupsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListSharedReportGroupsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CodeBuildClient(config);
 * const input = { // ListSharedReportGroupsInput
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   sortBy: "ARN" || "MODIFIED_TIME",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSharedReportGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListSharedReportGroupsOutput
 * //   nextToken: "STRING_VALUE",
 * //   reportGroups: [ // ReportGroupArns
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSharedReportGroupsCommandInput - {@link ListSharedReportGroupsCommandInput}
 * @returns {@link ListSharedReportGroupsCommandOutput}
 * @see {@link ListSharedReportGroupsCommandInput} for command's `input` shape.
 * @see {@link ListSharedReportGroupsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 * @public
 */
export class ListSharedReportGroupsCommand extends $Command
  .classBuilder<
    ListSharedReportGroupsCommandInput,
    ListSharedReportGroupsCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeBuild_20161006", "ListSharedReportGroups", {})
  .n("CodeBuildClient", "ListSharedReportGroupsCommand")
  .f(void 0, void 0)
  .ser(se_ListSharedReportGroupsCommand)
  .de(de_ListSharedReportGroupsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSharedReportGroupsInput;
      output: ListSharedReportGroupsOutput;
    };
    sdk: {
      input: ListSharedReportGroupsCommandInput;
      output: ListSharedReportGroupsCommandOutput;
    };
  };
}
