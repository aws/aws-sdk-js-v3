// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CodeStarConnectionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeStarConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRepositorySyncDefinitionsInput, ListRepositorySyncDefinitionsOutput } from "../models/models_0";
import {
  de_ListRepositorySyncDefinitionsCommand,
  se_ListRepositorySyncDefinitionsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRepositorySyncDefinitionsCommand}.
 */
export interface ListRepositorySyncDefinitionsCommandInput extends ListRepositorySyncDefinitionsInput {}
/**
 * @public
 *
 * The output of {@link ListRepositorySyncDefinitionsCommand}.
 */
export interface ListRepositorySyncDefinitionsCommandOutput
  extends ListRepositorySyncDefinitionsOutput,
    __MetadataBearer {}

/**
 * <p>Lists the repository sync definitions for repository links in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, ListRepositorySyncDefinitionsCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, ListRepositorySyncDefinitionsCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * // import type { CodeStarConnectionsClientConfig } from "@aws-sdk/client-codestar-connections";
 * const config = {}; // type is CodeStarConnectionsClientConfig
 * const client = new CodeStarConnectionsClient(config);
 * const input = { // ListRepositorySyncDefinitionsInput
 *   RepositoryLinkId: "STRING_VALUE", // required
 *   SyncType: "CFN_STACK_SYNC", // required
 * };
 * const command = new ListRepositorySyncDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListRepositorySyncDefinitionsOutput
 * //   RepositorySyncDefinitions: [ // RepositorySyncDefinitionList // required
 * //     { // RepositorySyncDefinition
 * //       Branch: "STRING_VALUE", // required
 * //       Directory: "STRING_VALUE", // required
 * //       Parent: "STRING_VALUE", // required
 * //       Target: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRepositorySyncDefinitionsCommandInput - {@link ListRepositorySyncDefinitionsCommandInput}
 * @returns {@link ListRepositorySyncDefinitionsCommandOutput}
 * @see {@link ListRepositorySyncDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListRepositorySyncDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for CodeStarConnectionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Received an internal server exception. Try again later.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input is not valid. Verify that the action is typed correctly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found. Verify the connection resource ARN and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link CodeStarConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeStarConnections service.</p>
 *
 *
 * @public
 */
export class ListRepositorySyncDefinitionsCommand extends $Command
  .classBuilder<
    ListRepositorySyncDefinitionsCommandInput,
    ListRepositorySyncDefinitionsCommandOutput,
    CodeStarConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeStarConnectionsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeStar_connections_20191201", "ListRepositorySyncDefinitions", {})
  .n("CodeStarConnectionsClient", "ListRepositorySyncDefinitionsCommand")
  .f(void 0, void 0)
  .ser(se_ListRepositorySyncDefinitionsCommand)
  .de(de_ListRepositorySyncDefinitionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRepositorySyncDefinitionsInput;
      output: ListRepositorySyncDefinitionsOutput;
    };
    sdk: {
      input: ListRepositorySyncDefinitionsCommandInput;
      output: ListRepositorySyncDefinitionsCommandOutput;
    };
  };
}
