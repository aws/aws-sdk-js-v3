// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListReportsForReportGroupInput, ListReportsForReportGroupOutput } from "../models/models_0";
import { ListReportsForReportGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReportsForReportGroupCommand}.
 */
export interface ListReportsForReportGroupCommandInput extends ListReportsForReportGroupInput {}
/**
 * @public
 *
 * The output of {@link ListReportsForReportGroupCommand}.
 */
export interface ListReportsForReportGroupCommandOutput extends ListReportsForReportGroupOutput, __MetadataBearer {}

/**
 * <p>
 *       Returns a list of ARNs for the reports that belong to a <code>ReportGroup</code>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListReportsForReportGroupCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListReportsForReportGroupCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
 * const client = new CodeBuildClient(config);
 * const input = { // ListReportsForReportGroupInput
 *   reportGroupArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   maxResults: Number("int"),
 *   filter: { // ReportFilter
 *     status: "GENERATING" || "SUCCEEDED" || "FAILED" || "INCOMPLETE" || "DELETING",
 *   },
 * };
 * const command = new ListReportsForReportGroupCommand(input);
 * const response = await client.send(command);
 * // { // ListReportsForReportGroupOutput
 * //   nextToken: "STRING_VALUE",
 * //   reports: [ // ReportArns
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListReportsForReportGroupCommandInput - {@link ListReportsForReportGroupCommandInput}
 * @returns {@link ListReportsForReportGroupCommandOutput}
 * @see {@link ListReportsForReportGroupCommandInput} for command's `input` shape.
 * @see {@link ListReportsForReportGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified Amazon Web Services resource cannot be found.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 *
 * @public
 */
export class ListReportsForReportGroupCommand extends $Command
  .classBuilder<
    ListReportsForReportGroupCommandInput,
    ListReportsForReportGroupCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeBuild_20161006", "ListReportsForReportGroup", {})
  .n("CodeBuildClient", "ListReportsForReportGroupCommand")
  .sc(ListReportsForReportGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReportsForReportGroupInput;
      output: ListReportsForReportGroupOutput;
    };
    sdk: {
      input: ListReportsForReportGroupCommandInput;
      output: ListReportsForReportGroupCommandOutput;
    };
  };
}
