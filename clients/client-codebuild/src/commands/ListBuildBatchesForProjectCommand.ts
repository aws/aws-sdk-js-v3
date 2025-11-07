// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListBuildBatchesForProjectInput, ListBuildBatchesForProjectOutput } from "../models/models_0";
import { ListBuildBatchesForProject } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBuildBatchesForProjectCommand}.
 */
export interface ListBuildBatchesForProjectCommandInput extends ListBuildBatchesForProjectInput {}
/**
 * @public
 *
 * The output of {@link ListBuildBatchesForProjectCommand}.
 */
export interface ListBuildBatchesForProjectCommandOutput extends ListBuildBatchesForProjectOutput, __MetadataBearer {}

/**
 * <p>Retrieves the identifiers of the build batches for a specific project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListBuildBatchesForProjectCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListBuildBatchesForProjectCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
 * const client = new CodeBuildClient(config);
 * const input = { // ListBuildBatchesForProjectInput
 *   projectName: "STRING_VALUE",
 *   filter: { // BuildBatchFilter
 *     status: "SUCCEEDED" || "FAILED" || "FAULT" || "TIMED_OUT" || "IN_PROGRESS" || "STOPPED",
 *   },
 *   maxResults: Number("int"),
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListBuildBatchesForProjectCommand(input);
 * const response = await client.send(command);
 * // { // ListBuildBatchesForProjectOutput
 * //   ids: [ // BuildBatchIds
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBuildBatchesForProjectCommandInput - {@link ListBuildBatchesForProjectCommandInput}
 * @returns {@link ListBuildBatchesForProjectCommandOutput}
 * @see {@link ListBuildBatchesForProjectCommandInput} for command's `input` shape.
 * @see {@link ListBuildBatchesForProjectCommandOutput} for command's `response` shape.
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
export class ListBuildBatchesForProjectCommand extends $Command
  .classBuilder<
    ListBuildBatchesForProjectCommandInput,
    ListBuildBatchesForProjectCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeBuild_20161006", "ListBuildBatchesForProject", {})
  .n("CodeBuildClient", "ListBuildBatchesForProjectCommand")
  .sc(ListBuildBatchesForProject)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBuildBatchesForProjectInput;
      output: ListBuildBatchesForProjectOutput;
    };
    sdk: {
      input: ListBuildBatchesForProjectCommandInput;
      output: ListBuildBatchesForProjectCommandOutput;
    };
  };
}
