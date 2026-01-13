// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CodeConnectionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListRepositorySyncDefinitionsInput, ListRepositorySyncDefinitionsOutput } from "../models/models_0";
import { ListRepositorySyncDefinitions$ } from "../schemas/schemas_0";

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
export interface ListRepositorySyncDefinitionsCommandOutput extends ListRepositorySyncDefinitionsOutput, __MetadataBearer {}

/**
 * <p>Lists the repository sync definitions for repository links in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeConnectionsClient, ListRepositorySyncDefinitionsCommand } from "@aws-sdk/client-codeconnections"; // ES Modules import
 * // const { CodeConnectionsClient, ListRepositorySyncDefinitionsCommand } = require("@aws-sdk/client-codeconnections"); // CommonJS import
 * // import type { CodeConnectionsClientConfig } from "@aws-sdk/client-codeconnections";
 * const config = {}; // type is CodeConnectionsClientConfig
 * const client = new CodeConnectionsClient(config);
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
 * @see {@link CodeConnectionsClientResolvedConfig | config} for CodeConnectionsClient's `config` shape.
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
 * @throws {@link CodeConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeConnections service.</p>
 *
 *
 * @public
 */
export class ListRepositorySyncDefinitionsCommand extends $Command
  .classBuilder<
    ListRepositorySyncDefinitionsCommandInput,
    ListRepositorySyncDefinitionsCommandOutput,
    CodeConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeConnectionsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeConnections_20231201", "ListRepositorySyncDefinitions", {})
  .n("CodeConnectionsClient", "ListRepositorySyncDefinitionsCommand")
  .sc(ListRepositorySyncDefinitions$)
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
