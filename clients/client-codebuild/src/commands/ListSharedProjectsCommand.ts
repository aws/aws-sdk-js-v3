// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSharedProjectsInput, ListSharedProjectsOutput } from "../models/models_0";
import { ListSharedProjects$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
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
 *
 * @public
 */
export class ListSharedProjectsCommand extends command<ListSharedProjectsCommandInput, ListSharedProjectsCommandOutput>(
  _ep0,
  _mw0,
  "ListSharedProjects",
  ListSharedProjects$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSharedProjectsInput;
      output: ListSharedProjectsOutput;
    };
    sdk: {
      input: ListSharedProjectsCommandInput;
      output: ListSharedProjectsCommandOutput;
    };
  };
}
