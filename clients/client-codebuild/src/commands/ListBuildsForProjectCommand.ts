// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListBuildsForProjectInput, ListBuildsForProjectOutput } from "../models/models_0";
import { de_ListBuildsForProjectCommand, se_ListBuildsForProjectCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBuildsForProjectCommand}.
 */
export interface ListBuildsForProjectCommandInput extends ListBuildsForProjectInput {}
/**
 * @public
 *
 * The output of {@link ListBuildsForProjectCommand}.
 */
export interface ListBuildsForProjectCommandOutput extends ListBuildsForProjectOutput, __MetadataBearer {}

/**
 * <p>Gets a list of build identifiers for the specified build project, with each build
 *             identifier representing a single build.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListBuildsForProjectCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListBuildsForProjectCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
 * const client = new CodeBuildClient(config);
 * const input = { // ListBuildsForProjectInput
 *   projectName: "STRING_VALUE", // required
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListBuildsForProjectCommand(input);
 * const response = await client.send(command);
 * // { // ListBuildsForProjectOutput
 * //   ids: [ // BuildIds
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBuildsForProjectCommandInput - {@link ListBuildsForProjectCommandInput}
 * @returns {@link ListBuildsForProjectCommandOutput}
 * @see {@link ListBuildsForProjectCommandInput} for command's `input` shape.
 * @see {@link ListBuildsForProjectCommandOutput} for command's `response` shape.
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
export class ListBuildsForProjectCommand extends $Command
  .classBuilder<
    ListBuildsForProjectCommandInput,
    ListBuildsForProjectCommandOutput,
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
  .s("CodeBuild_20161006", "ListBuildsForProject", {})
  .n("CodeBuildClient", "ListBuildsForProjectCommand")
  .f(void 0, void 0)
  .ser(se_ListBuildsForProjectCommand)
  .de(de_ListBuildsForProjectCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBuildsForProjectInput;
      output: ListBuildsForProjectOutput;
    };
    sdk: {
      input: ListBuildsForProjectCommandInput;
      output: ListBuildsForProjectCommandOutput;
    };
  };
}
