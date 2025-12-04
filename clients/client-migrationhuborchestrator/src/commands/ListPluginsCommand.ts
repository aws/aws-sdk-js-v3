// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  MigrationHubOrchestratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubOrchestratorClient";
import type { ListPluginsRequest, ListPluginsResponse } from "../models/models_0";
import { ListPlugins } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPluginsCommand}.
 */
export interface ListPluginsCommandInput extends ListPluginsRequest {}
/**
 * @public
 *
 * The output of {@link ListPluginsCommand}.
 */
export interface ListPluginsCommandOutput extends ListPluginsResponse, __MetadataBearer {}

/**
 * <p>List AWS Migration Hub Orchestrator plugins.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, ListPluginsCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, ListPluginsCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * // import type { MigrationHubOrchestratorClientConfig } from "@aws-sdk/client-migrationhuborchestrator";
 * const config = {}; // type is MigrationHubOrchestratorClientConfig
 * const client = new MigrationHubOrchestratorClient(config);
 * const input = { // ListPluginsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListPluginsCommand(input);
 * const response = await client.send(command);
 * // { // ListPluginsResponse
 * //   nextToken: "STRING_VALUE",
 * //   plugins: [ // PluginSummaries
 * //     { // PluginSummary
 * //       pluginId: "STRING_VALUE",
 * //       hostname: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       ipAddress: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //       registeredTime: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPluginsCommandInput - {@link ListPluginsCommandInput}
 * @returns {@link ListPluginsCommandOutput}
 * @see {@link ListPluginsCommandInput} for command's `input` shape.
 * @see {@link ListPluginsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubOrchestratorClientResolvedConfig | config} for MigrationHubOrchestratorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link MigrationHubOrchestratorServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubOrchestrator service.</p>
 *
 *
 * @public
 */
export class ListPluginsCommand extends $Command
  .classBuilder<
    ListPluginsCommandInput,
    ListPluginsCommandOutput,
    MigrationHubOrchestratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubOrchestratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMigrationHubOrchestrator", "ListPlugins", {})
  .n("MigrationHubOrchestratorClient", "ListPluginsCommand")
  .sc(ListPlugins)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPluginsRequest;
      output: ListPluginsResponse;
    };
    sdk: {
      input: ListPluginsCommandInput;
      output: ListPluginsCommandOutput;
    };
  };
}
