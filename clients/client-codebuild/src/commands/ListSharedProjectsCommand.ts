// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListSharedProjectsInput, ListSharedProjectsOutput } from "../models/models_0";
import { de_ListSharedProjectsCommand, se_ListSharedProjectsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSharedProjectsCommand}.
 */
export interface ListSharedProjectsCommandInput extends ListSharedProjectsInput {}
/**
 * @public
 *
 * The output of {@link ListSharedProjectsCommand}.
 */
export interface ListSharedProjectsCommandOutput extends ListSharedProjectsOutput, __MetadataBearer {}

/**
 * <p> Gets a list of projects that are shared with other Amazon Web Services accounts or users. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListSharedProjectsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListSharedProjectsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // ListSharedProjectsInput
 *   sortBy: "ARN" || "MODIFIED_TIME",
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSharedProjectsCommand(input);
 * const response = await client.send(command);
 * // { // ListSharedProjectsOutput
 * //   nextToken: "STRING_VALUE",
 * //   projects: [ // ProjectArns
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSharedProjectsCommandInput - {@link ListSharedProjectsCommandInput}
 * @returns {@link ListSharedProjectsCommandOutput}
 * @see {@link ListSharedProjectsCommandInput} for command's `input` shape.
 * @see {@link ListSharedProjectsCommandOutput} for command's `response` shape.
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
export class ListSharedProjectsCommand extends $Command
  .classBuilder<
    ListSharedProjectsCommandInput,
    ListSharedProjectsCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeBuild_20161006", "ListSharedProjects", {})
  .n("CodeBuildClient", "ListSharedProjectsCommand")
  .f(void 0, void 0)
  .ser(se_ListSharedProjectsCommand)
  .de(de_ListSharedProjectsCommand)
  .build() {}
