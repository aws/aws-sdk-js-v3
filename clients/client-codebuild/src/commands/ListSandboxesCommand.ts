// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListSandboxesInput, ListSandboxesOutput } from "../models/models_0";
import { ListSandboxes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSandboxesCommand}.
 */
export interface ListSandboxesCommandInput extends ListSandboxesInput {}
/**
 * @public
 *
 * The output of {@link ListSandboxesCommand}.
 */
export interface ListSandboxesCommandOutput extends ListSandboxesOutput, __MetadataBearer {}

/**
 * <p>Gets a list of sandboxes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListSandboxesCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListSandboxesCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
 * const client = new CodeBuildClient(config);
 * const input = { // ListSandboxesInput
 *   maxResults: Number("int"),
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSandboxesCommand(input);
 * const response = await client.send(command);
 * // { // ListSandboxesOutput
 * //   ids: [ // SandboxIds
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSandboxesCommandInput - {@link ListSandboxesCommandInput}
 * @returns {@link ListSandboxesCommandOutput}
 * @see {@link ListSandboxesCommandInput} for command's `input` shape.
 * @see {@link ListSandboxesCommandOutput} for command's `response` shape.
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
export class ListSandboxesCommand extends $Command
  .classBuilder<
    ListSandboxesCommandInput,
    ListSandboxesCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeBuild_20161006", "ListSandboxes", {})
  .n("CodeBuildClient", "ListSandboxesCommand")
  .sc(ListSandboxes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSandboxesInput;
      output: ListSandboxesOutput;
    };
    sdk: {
      input: ListSandboxesCommandInput;
      output: ListSandboxesCommandOutput;
    };
  };
}
