// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import { ListAnalyzableServersRequest, ListAnalyzableServersResponse } from "../models/models_0";
import { de_ListAnalyzableServersCommand, se_ListAnalyzableServersCommand } from "../protocols/Aws_restJson1";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MigrationHubStrategyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSMigrationHubStrategyRecommendation", "ListAnalyzableServers", {})
  .n("MigrationHubStrategyClient", "ListAnalyzableServersCommand")
  .f(void 0, void 0)
  .ser(se_ListAnalyzableServersCommand)
  .de(de_ListAnalyzableServersCommand)
  .build() {}
