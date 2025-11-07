// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListReportsInput, ListReportsOutput } from "../models/models_0";
import { ListReports } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReportsCommand}.
 */
export interface ListReportsCommandInput extends ListReportsInput {}
/**
 * @public
 *
 * The output of {@link ListReportsCommand}.
 */
export interface ListReportsCommandOutput extends ListReportsOutput, __MetadataBearer {}

/**
 * <p>
 *       Returns a list of ARNs for the reports in the current Amazon Web Services account.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListReportsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListReportsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
 * const client = new CodeBuildClient(config);
 * const input = { // ListReportsInput
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filter: { // ReportFilter
 *     status: "GENERATING" || "SUCCEEDED" || "FAILED" || "INCOMPLETE" || "DELETING",
 *   },
 * };
 * const command = new ListReportsCommand(input);
 * const response = await client.send(command);
 * // { // ListReportsOutput
 * //   nextToken: "STRING_VALUE",
 * //   reports: [ // ReportArns
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListReportsCommandInput - {@link ListReportsCommandInput}
 * @returns {@link ListReportsCommandOutput}
 * @see {@link ListReportsCommandInput} for command's `input` shape.
 * @see {@link ListReportsCommandOutput} for command's `response` shape.
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
export class ListReportsCommand extends $Command
  .classBuilder<
    ListReportsCommandInput,
    ListReportsCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeBuild_20161006", "ListReports", {})
  .n("CodeBuildClient", "ListReportsCommand")
  .sc(ListReports)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReportsInput;
      output: ListReportsOutput;
    };
    sdk: {
      input: ListReportsCommandInput;
      output: ListReportsCommandOutput;
    };
  };
}
