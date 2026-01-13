// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListRepositoriesInput, ListRepositoriesOutput } from "../models/models_0";
import { ListRepositories$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRepositoriesCommand}.
 */
export interface ListRepositoriesCommandInput extends ListRepositoriesInput {}
/**
 * @public
 *
 * The output of {@link ListRepositoriesCommand}.
 */
export interface ListRepositoriesCommandOutput extends ListRepositoriesOutput, __MetadataBearer {}

/**
 * <p>Gets information about one or more repositories.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, ListRepositoriesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, ListRepositoriesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // ListRepositoriesInput
 *   nextToken: "STRING_VALUE",
 *   sortBy: "repositoryName" || "lastModifiedDate",
 *   order: "ascending" || "descending",
 * };
 * const command = new ListRepositoriesCommand(input);
 * const response = await client.send(command);
 * // { // ListRepositoriesOutput
 * //   repositories: [ // RepositoryNameIdPairList
 * //     { // RepositoryNameIdPair
 * //       repositoryName: "STRING_VALUE",
 * //       repositoryId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRepositoriesCommandInput - {@link ListRepositoriesCommandInput}
 * @returns {@link ListRepositoriesCommandOutput}
 * @see {@link ListRepositoriesCommandInput} for command's `input` shape.
 * @see {@link ListRepositoriesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link InvalidContinuationTokenException} (client fault)
 *  <p>The specified continuation token is not valid.</p>
 *
 * @throws {@link InvalidOrderException} (client fault)
 *  <p>The specified sort order is not valid.</p>
 *
 * @throws {@link InvalidSortByException} (client fault)
 *  <p>The specified sort by value is not valid.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 *
 * @public
 */
export class ListRepositoriesCommand extends $Command
  .classBuilder<
    ListRepositoriesCommandInput,
    ListRepositoriesCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCommit_20150413", "ListRepositories", {})
  .n("CodeCommitClient", "ListRepositoriesCommand")
  .sc(ListRepositories$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRepositoriesInput;
      output: ListRepositoriesOutput;
    };
    sdk: {
      input: ListRepositoriesCommandInput;
      output: ListRepositoriesCommandOutput;
    };
  };
}
