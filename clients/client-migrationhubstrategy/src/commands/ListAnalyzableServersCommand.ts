// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import type { ListAnalyzableServersRequest, ListAnalyzableServersResponse } from "../models/models_0";
import { ListAnalyzableServers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAnalyzableServersCommand}.
 */
export interface ListAnalyzableServersCommandInput extends ListAnalyzableServersRequest {}
/**
 * @public
 *
 * The output of {@link ListAnalyzableServersCommand}.
 */
export interface ListAnalyzableServersCommandOutput extends ListAnalyzableServersResponse, __MetadataBearer {}

/**
 * Retrieves a list of all the servers fetched from customer vCenter using Strategy Recommendation Collector.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, ListAnalyzableServersCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, ListAnalyzableServersCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * // import type { MigrationHubStrategyClientConfig } from "@aws-sdk/client-migrationhubstrategy";
 * const config = {}; // type is MigrationHubStrategyClientConfig
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // ListAnalyzableServersRequest
 *   sort: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAnalyzableServersCommand(input);
 * const response = await client.send(command);
 * // { // ListAnalyzableServersResponse
 * //   analyzableServers: [ // AnalyzableServerSummaryList
 * //     { // AnalyzableServerSummary
 * //       hostname: "STRING_VALUE",
 * //       ipAddress: "STRING_VALUE",
 * //       source: "STRING_VALUE",
 * //       vmId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAnalyzableServersCommandInput - {@link ListAnalyzableServersCommandInput}
 * @returns {@link ListAnalyzableServersCommandOutput}
 * @see {@link ListAnalyzableServersCommandInput} for command's `input` shape.
 * @see {@link ListAnalyzableServersCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request body isn't valid. </p>
 *
 * @throws {@link MigrationHubStrategyServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubStrategy service.</p>
 *
 *
 * @example Invoke ListAnalyzableServers
 * ```javascript
 * //
 * const input = {
 *   maxResults: 100,
 *   sort: "ASC"
 * };
 * const command = new ListAnalyzableServersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   analyzableServers: [
 *     {
 *       hostname: "Ubuntu 1",
 *       ipAddress: "1.1.1.1",
 *       source: "Application Discover Service",
 *       vmId: "vm-1"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListAnalyzableServersCommand extends $Command
  .classBuilder<
    ListAnalyzableServersCommandInput,
    ListAnalyzableServersCommandOutput,
    MigrationHubStrategyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubStrategyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMigrationHubStrategyRecommendation", "ListAnalyzableServers", {})
  .n("MigrationHubStrategyClient", "ListAnalyzableServersCommand")
  .sc(ListAnalyzableServers$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAnalyzableServersRequest;
      output: ListAnalyzableServersResponse;
    };
    sdk: {
      input: ListAnalyzableServersCommandInput;
      output: ListAnalyzableServersCommandOutput;
    };
  };
}
