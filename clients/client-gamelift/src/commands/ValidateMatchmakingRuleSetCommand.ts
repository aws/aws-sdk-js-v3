// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ValidateMatchmakingRuleSetInput, ValidateMatchmakingRuleSetOutput } from "../models/models_1";
import { ValidateMatchmakingRuleSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * **This API works with the following fleet types:** EC2, Anywhere, Container
 *
 * Validates the syntax of a matchmaking rule or rule set. This operation checks that the rule set is using syntactically correct JSON and that it conforms to allowed property expressions. To validate syntax, provide a rule set JSON string.
 *
 * **Learn more**
 *
 * - [Build a rule set](https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, ValidateMatchmakingRuleSetCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ValidateMatchmakingRuleSetCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
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
 *
 * The service encountered an unrecoverable internal failure while processing the request. Clients can retry such requests immediately or after a waiting period.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * One or more parameter values in the request are invalid. Correct the invalid parameter values before retrying.
 *
 * @throws {@link UnsupportedRegionException} (client fault)
 *
 * The requested operation is not supported in the Region specified.
 *
 * @throws {@link GameLiftServiceException}
 *
 * Base exception class for all service exceptions from GameLift service.
 *
 * @public
 */
export class ValidateMatchmakingRuleSetCommand extends command<ValidateMatchmakingRuleSetCommandInput, ValidateMatchmakingRuleSetCommandOutput>(
  _ep0,
  _mw0,
  "ValidateMatchmakingRuleSet",
  ValidateMatchmakingRuleSet$
) {
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
