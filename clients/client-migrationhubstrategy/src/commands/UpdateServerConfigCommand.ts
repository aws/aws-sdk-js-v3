// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import { UpdateServerConfigRequest, UpdateServerConfigResponse } from "../models/models_0";
import { UpdateServerConfig } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateServerConfigCommand}.
 */
export interface UpdateServerConfigCommandInput extends UpdateServerConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateServerConfigCommand}.
 */
export interface UpdateServerConfigCommandOutput extends UpdateServerConfigResponse, __MetadataBearer {}

/**
 * <p> Updates the configuration of the specified server. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, UpdateServerConfigCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, UpdateServerConfigCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * // import type { MigrationHubStrategyClientConfig } from "@aws-sdk/client-migrationhubstrategy";
 * const config = {}; // type is MigrationHubStrategyClientConfig
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // UpdateServerConfigRequest
 *   serverId: "STRING_VALUE", // required
 *   strategyOption: { // StrategyOption
 *     strategy: "STRING_VALUE",
 *     toolName: "STRING_VALUE",
 *     targetDestination: "STRING_VALUE",
 *     isPreferred: true || false,
 *   },
 * };
 * const command = new UpdateServerConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateServerConfigCommandInput - {@link UpdateServerConfigCommandInput}
 * @returns {@link UpdateServerConfigCommandOutput}
 * @see {@link UpdateServerConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateServerConfigCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified ID in the request is not found. </p>
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
 * @public
 */
export class UpdateServerConfigCommand extends $Command
  .classBuilder<
    UpdateServerConfigCommandInput,
    UpdateServerConfigCommandOutput,
    MigrationHubStrategyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubStrategyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMigrationHubStrategyRecommendation", "UpdateServerConfig", {})
  .n("MigrationHubStrategyClient", "UpdateServerConfigCommand")
  .sc(UpdateServerConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServerConfigRequest;
      output: {};
    };
    sdk: {
      input: UpdateServerConfigCommandInput;
      output: UpdateServerConfigCommandOutput;
    };
  };
}
