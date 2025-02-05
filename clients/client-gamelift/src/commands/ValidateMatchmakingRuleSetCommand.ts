// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { ValidateMatchmakingRuleSetInput, ValidateMatchmakingRuleSetOutput } from "../models/models_1";
import { de_ValidateMatchmakingRuleSetCommand, se_ValidateMatchmakingRuleSetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ValidateMatchmakingRuleSetCommand}.
 */
export interface ValidateMatchmakingRuleSetCommandInput extends ValidateMatchmakingRuleSetInput {}
/**
 * @public
 *
 * The output of {@link ValidateMatchmakingRuleSetCommand}.
 */
export interface ValidateMatchmakingRuleSetCommandOutput extends ValidateMatchmakingRuleSetOutput, __MetadataBearer {}

/**
 * <p>Validates the syntax of a matchmaking rule or rule set. This operation checks that the
 *             rule set is using syntactically correct JSON and that it conforms to allowed property
 *             expressions. To validate syntax, provide a rule set JSON string.</p>
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
 * import { GameLiftClient, ValidateMatchmakingRuleSetCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ValidateMatchmakingRuleSetCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GameLiftClient(config);
 * const input = { // ValidateMatchmakingRuleSetInput
 *   RuleSetBody: "STRING_VALUE", // required
 * };
 * const command = new ValidateMatchmakingRuleSetCommand(input);
 * const response = await client.send(command);
 * // { // ValidateMatchmakingRuleSetOutput
 * //   Valid: true || false,
 * // };
 *
 * ```
 *
 * @param ValidateMatchmakingRuleSetCommandInput - {@link ValidateMatchmakingRuleSetCommandInput}
 * @returns {@link ValidateMatchmakingRuleSetCommandOutput}
 * @see {@link ValidateMatchmakingRuleSetCommandInput} for command's `input` shape.
 * @see {@link ValidateMatchmakingRuleSetCommandOutput} for command's `response` shape.
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
 * @throws {@link UnsupportedRegionException} (client fault)
 *  <p>The requested operation is not supported in the Region specified.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 * @public
 */
export class ValidateMatchmakingRuleSetCommand extends $Command
  .classBuilder<
    ValidateMatchmakingRuleSetCommandInput,
    ValidateMatchmakingRuleSetCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GameLift", "ValidateMatchmakingRuleSet", {})
  .n("GameLiftClient", "ValidateMatchmakingRuleSetCommand")
  .f(void 0, void 0)
  .ser(se_ValidateMatchmakingRuleSetCommand)
  .de(de_ValidateMatchmakingRuleSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ValidateMatchmakingRuleSetInput;
      output: ValidateMatchmakingRuleSetOutput;
    };
    sdk: {
      input: ValidateMatchmakingRuleSetCommandInput;
      output: ValidateMatchmakingRuleSetCommandOutput;
    };
  };
}
