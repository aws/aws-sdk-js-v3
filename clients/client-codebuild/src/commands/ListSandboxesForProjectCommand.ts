// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListSandboxesForProjectInput, ListSandboxesForProjectOutput } from "../models/models_0";
import { ListSandboxesForProject } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSandboxesForProjectCommand}.
 */
export interface ListSandboxesForProjectCommandInput extends ListSandboxesForProjectInput {}
/**
 * @public
 *
 * The output of {@link ListSandboxesForProjectCommand}.
 */
export interface ListSandboxesForProjectCommandOutput extends ListSandboxesForProjectOutput, __MetadataBearer {}

/**
 * <p>Gets a list of sandboxes for a given project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListSandboxesForProjectCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListSandboxesForProjectCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
 * const client = new CodeBuildClient(config);
 * const input = { // ListSandboxesForProjectInput
 *   projectName: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSandboxesForProjectCommand(input);
 * const response = await client.send(command);
 * // { // ListSandboxesForProjectOutput
 * //   ids: [ // SandboxIds
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSandboxesForProjectCommandInput - {@link ListSandboxesForProjectCommandInput}
 * @returns {@link ListSandboxesForProjectCommandOutput}
 * @see {@link ListSandboxesForProjectCommandInput} for command's `input` shape.
 * @see {@link ListSandboxesForProjectCommandOutput} for command's `response` shape.
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
export class ListSandboxesForProjectCommand extends $Command
  .classBuilder<
    ListSandboxesForProjectCommandInput,
    ListSandboxesForProjectCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeBuild_20161006", "ListSandboxesForProject", {})
  .n("CodeBuildClient", "ListSandboxesForProjectCommand")
  .sc(ListSandboxesForProject)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSandboxesForProjectInput;
      output: ListSandboxesForProjectOutput;
    };
    sdk: {
      input: ListSandboxesForProjectCommandInput;
      output: ListSandboxesForProjectCommandOutput;
    };
  };
}
