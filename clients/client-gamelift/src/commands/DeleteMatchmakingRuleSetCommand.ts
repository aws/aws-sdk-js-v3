// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import type { DeleteMatchmakingRuleSetInput, DeleteMatchmakingRuleSetOutput } from "../models/models_0";
import { DeleteMatchmakingRuleSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMatchmakingRuleSetCommand}.
 */
export interface DeleteMatchmakingRuleSetCommandInput extends DeleteMatchmakingRuleSetInput {}
/**
 * @public
 *
 * The output of {@link DeleteMatchmakingRuleSetCommand}.
 */
export interface DeleteMatchmakingRuleSetCommandOutput extends DeleteMatchmakingRuleSetOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2, Anywhere, Container</p>
 *          <p>Deletes an existing matchmaking rule set. To delete the rule set, provide the rule set
 *             name. Rule sets cannot be deleted if they are currently being used by a matchmaking
 *             configuration. </p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule
 *                         set</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DeleteMatchmakingRuleSetCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteMatchmakingRuleSetCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DeleteMatchmakingRuleSetInput
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteMatchmakingRuleSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMatchmakingRuleSetCommandInput - {@link DeleteMatchmakingRuleSetCommandInput}
 * @returns {@link DeleteMatchmakingRuleSetCommandOutput}
 * @see {@link DeleteMatchmakingRuleSetCommandInput} for command's `input` shape.
 * @see {@link DeleteMatchmakingRuleSetCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link TaggingFailedException} (client fault)
 *  <p>The requested tagging operation did not succeed. This may be due to invalid tag format
 *             or the maximum tag limit may have been exceeded. Resolve the issue before
 *             retrying.</p>
 *
 * @throws {@link UnsupportedRegionException} (client fault)
 *  <p>The requested operation is not supported in the Region specified.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 *
 * @public
 */
export class DeleteMatchmakingRuleSetCommand extends $Command
  .classBuilder<
    DeleteMatchmakingRuleSetCommandInput,
    DeleteMatchmakingRuleSetCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "DeleteMatchmakingRuleSet", {})
  .n("GameLiftClient", "DeleteMatchmakingRuleSetCommand")
  .sc(DeleteMatchmakingRuleSet$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMatchmakingRuleSetInput;
      output: {};
    };
    sdk: {
      input: DeleteMatchmakingRuleSetCommandInput;
      output: DeleteMatchmakingRuleSetCommandOutput;
    };
  };
}
