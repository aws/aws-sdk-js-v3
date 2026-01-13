// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListReportGroupsInput, ListReportGroupsOutput } from "../models/models_0";
import { ListReportGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReportGroupsCommand}.
 */
export interface ListReportGroupsCommandInput extends ListReportGroupsInput {}
/**
 * @public
 *
 * The output of {@link ListReportGroupsCommand}.
 */
export interface ListReportGroupsCommandOutput extends ListReportGroupsOutput, __MetadataBearer {}

/**
 * <p>
 *       Gets a list ARNs for the report groups in the current Amazon Web Services account.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListReportGroupsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListReportGroupsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
 * const client = new CodeBuildClient(config);
 * const input = { // ListReportGroupsInput
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   sortBy: "NAME" || "CREATED_TIME" || "LAST_MODIFIED_TIME",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListReportGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListReportGroupsOutput
 * //   nextToken: "STRING_VALUE",
 * //   reportGroups: [ // ReportGroupArns
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListReportGroupsCommandInput - {@link ListReportGroupsCommandInput}
 * @returns {@link ListReportGroupsCommandOutput}
 * @see {@link ListReportGroupsCommandInput} for command's `input` shape.
 * @see {@link ListReportGroupsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 *
 * @public
 */
export class ListReportGroupsCommand extends $Command
  .classBuilder<
    ListReportGroupsCommandInput,
    ListReportGroupsCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeBuild_20161006", "ListReportGroups", {})
  .n("CodeBuildClient", "ListReportGroupsCommand")
  .sc(ListReportGroups$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReportGroupsInput;
      output: ListReportGroupsOutput;
    };
    sdk: {
      input: ListReportGroupsCommandInput;
      output: ListReportGroupsCommandOutput;
    };
  };
}
